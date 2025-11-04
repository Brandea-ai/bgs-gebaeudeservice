import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, CheckCircle2, Shield, Sparkles, Phone, Mail, Circle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useChatbot } from '../contexts/ChatbotContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  service: string;
}

interface ExtractedInfo {
  service?: { code: string; name: string };
  size?: string;
  timing?: string;
  name?: string;
  company?: string;
  city?: string;
  phone?: string;
  email?: string;
}

interface Supporter {
  name: string;
  role: string;
  image: string;
  gender: 'male' | 'female';
}

const SUPPORTERS: Supporter[] = [
  {
    name: 'Sarah',
    role: 'Senior Sales Consultant',
    image: '/Supporter-Sarah.jpeg',
    gender: 'female'
  },
  {
    name: 'Nina',
    role: 'Customer Success Manager',
    image: '/Supporter-Nina.jpeg',
    gender: 'female'
  },
  {
    name: 'Elias',
    role: 'Technical Advisor',
    image: '/Supporter-Elias.png',
    gender: 'male'
  },
  {
    name: 'Kasandra',
    role: 'Operations Manager',
    image: '/Supporter-Kasandra.jpeg',
    gender: 'female'
  },
  {
    name: 'Micheal',
    role: 'Facility Expert',
    image: '/Supporter-Micheal.jpeg',
    gender: 'male'
  }
];

// Select random supporter on mount
const getRandomSupporter = (): Supporter => {
  return SUPPORTERS[Math.floor(Math.random() * SUPPORTERS.length)];
};

export default function AIChatbot() {
  const { isOpen, appointmentMode, openChat, closeChat } = useChatbot();
  const [hasConsent, setHasConsent] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '', company: '', city: '', service: '' });
  const [extractedInfo, setExtractedInfo] = useState<ExtractedInfo>({});
  const [showSpecialistPrompt, setShowSpecialistPrompt] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [identificationCode, setIdentificationCode] = useState('');
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false);
  const [supporter, setSupporter] = useState<Supporter>(() => getRandomSupporter());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-popup after 10 seconds on page
  useEffect(() => {
    if (!hasShownAutoPopup && !isOpen) {
      const timer = setTimeout(() => {
        openChat(false);
        setHasShownAutoPopup(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShownAutoPopup, isOpen, openChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleConsent = () => {
    setHasConsent(true);
    const greeting = supporter.gender === 'male'
      ? `Guten Tag! Ich bin ${supporter.name}, Ihr persönlicher Berater von der Swiss Reinigungsfirma.`
      : `Guten Tag! Ich bin ${supporter.name}, Ihre persönliche Beraterin von der Swiss Reinigungsfirma.`;

    let content;
    if (appointmentMode) {
      content = `${greeting}\n\n**Gerne können wir einen Termin für ein unverbindliches Erstgespräch vereinbaren!**\n\nDamit ich den passenden Zeitpunkt für Sie finde: **Welche Reinigungsdienstleistung** interessiert Sie?`;
    } else {
      content = `${greeting}\n\nIch unterstütze unser Team dabei, für Sie die **perfekte Reinigungslösung** zu finden – zugeschnitten auf Ihre individuellen Anforderungen.\n\nDarf ich fragen: **Welche Art von Räumlichkeiten** möchten Sie reinigen lassen?`;
    }

    setMessages([{
      role: 'assistant',
      content,
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    // Check if user is confirming to send to specialist
    const isConfirmation = input.trim().toLowerCase() === 'ja' && showSpecialistPrompt;

    console.log('🔍 DEBUG handleSendMessage:', {
      input: input.trim(),
      showSpecialistPrompt,
      isConfirmation
    });

    if (isConfirmation) {
      // User typed "ja" to confirm sending to specialist
      console.log('✅ User confirmed with "ja" - calling handleSpecialistResponse');
      setInput('');
      await handleSpecialistResponse(true);
      return;
    }

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
          userInfo: userInfo,
          supporterName: supporter.name,
          supporterGender: supporter.gender,
          appointmentMode: appointmentMode
        }),
      });

      if (!response.ok) {
        throw new Error('Chat request failed');
      }

      const data = await response.json();

      console.log('📥 Backend Response:', {
        response: data.response,
        extractedInfo: data.extractedInfo,
        detectedService: data.detectedService,
        readyToSend: data.readyToSend,
        missingFields: data.missingFields,
        conversationPhase: data.conversationPhase
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Update extracted info from conversation
      if (data.extractedInfo) {
        setExtractedInfo(data.extractedInfo);

        // Auto-fill userInfo with extracted data
        const updatedUserInfo = {
          ...userInfo,
          service: data.detectedService?.name || data.extractedInfo.service?.name || userInfo.service,
          name: data.extractedInfo.name || userInfo.name,
          company: data.extractedInfo.company || userInfo.company,
          city: data.extractedInfo.city || userInfo.city,
          phone: data.extractedInfo.phone || userInfo.phone,
          email: data.extractedInfo.email || userInfo.email,
        };

        console.log('🔍 Updated userInfo:', updatedUserInfo);
        console.log('🔍 readyToSend:', data.readyToSend);
        console.log('🔍 Missing fields:', data.missingFields);

        setUserInfo(updatedUserInfo);

        // Show specialist prompt if ready (email + service required)
        if (data.readyToSend && !emailSent) {
          const hasRequiredInfo = updatedUserInfo.email && updatedUserInfo.service;

          console.log('✅ READY TO SEND! Checking requirements:', {
            email: !!updatedUserInfo.email,
            service: !!updatedUserInfo.service,
            name: updatedUserInfo.name,
            city: updatedUserInfo.city,
            hasRequiredInfo,
            emailSent
          });

          if (hasRequiredInfo) {
            console.log('✅ Showing Specialist Prompt (Ja/Nein Buttons)');
            setShowSpecialistPrompt(true);
          } else {
            console.log('❌ NOT showing specialist prompt - missing email or service');
          }
        } else {
          console.log('⏳ Not ready yet. Missing:', data.missingFields);
        }
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSpecialistResponse = async (accepted: boolean) => {
    console.log('🎯 handleSpecialistResponse called:', { accepted, userInfo, extractedInfo });

    if (!accepted) {
      const declineMessage: Message = {
        role: 'assistant',
        content: 'Kein Problem! Wenn Sie später Interesse haben, können Sie mich jederzeit kontaktieren.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, declineMessage]);
      setShowSpecialistPrompt(false);
      return;
    }

    // Only require email and service (everything else is optional)
    if (!userInfo.email || !userInfo.service) {
      console.log('❌ Missing required info:', { email: userInfo.email, service: userInfo.service });
      alert('Bitte geben Sie mindestens E-Mail und Dienstleistung an.');
      return;
    }

    console.log('📧 Sending to specialist via API...');
    setLoading(true);
    setShowSpecialistPrompt(false);

    try {
      // Generate identification code
      const serviceCode = extractedInfo.service?.code || 'SR';
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      const timestamp = now.getTime();
      const runningNumber = String(timestamp % 1000000).padStart(6, '0');
      const idCode = `${serviceCode}${day}${month}${year}${runningNumber}`;
      
      setIdentificationCode(idCode);

      const conversationLong = messages.map(m => 
        `${m.role === 'user' ? 'Kunde' : 'KI-Assistent'}: ${m.content}`
      ).join('\n\n');

      const conversationShort = `
Leistung: ${userInfo.service}
Größe: ${extractedInfo.size || 'nicht angegeben'}
Zeitpunkt: ${extractedInfo.timing || 'nicht angegeben'}
      `.trim();

      const response = await fetch('/api/chat-to-specialist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo,
          conversationLong,
          conversationShort,
          identificationCode: idCode
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send to specialist');
      }

      setEmailSent(true);

      const successMessage: Message = {
        role: 'assistant',
        content: `Vielen Dank! Ihre Anfrage wurde erfolgreich weitergeleitet.\n\n**Identifikationscode**: ${idCode}\n\nEin Spezialist wird sich innerhalb von 12 Stunden (werktags) bei Ihnen melden.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, successMessage]);

    } catch (error) {
      console.error('Specialist request error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = (message: Message) => {
    return (
      <div className="prose prose-sm max-w-none">
        <ReactMarkdown>{message.content}</ReactMarkdown>
      </div>
    );
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => openChat(false)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Chat öffnen"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={supporter.image}
            alt={supporter.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
          />
          <div>
            <h3 className="font-semibold text-sm">{supporter.name} - {supporter.role}</h3>
            <div className="flex items-center gap-1 text-xs text-red-100">
              <Circle className="w-2 h-2 fill-green-400 text-green-400" />
              <span>Online - Antwortet sofort</span>
            </div>
          </div>
        </div>
        <button
          onClick={closeChat}
          className="hover:bg-red-800 p-1 rounded transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Consent Screen */}
      {!hasConsent && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <Shield className="w-16 h-16 text-red-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Datenschutz & Einwilligung</h3>
          <p className="text-sm text-gray-600 mb-4">
            Bevor wir beginnen, benötigen wir Ihre Zustimmung zur Verarbeitung Ihrer Daten gemäß unserer{' '}
            <a href="/datenschutz" className="text-red-600 underline" target="_blank">
              Datenschutzerklärung
            </a>.
          </p>
          <ul className="text-left text-sm text-gray-700 mb-6 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Gespräche werden dokumentiert</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Daten werden sicher gespeichert</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Keine Weitergabe an Dritte</span>
            </li>
          </ul>
          <button
            onClick={handleConsent}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Zustimmen & Chat starten
          </button>
        </div>
      )}

      {/* Chat Messages */}
      {hasConsent && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {renderMessage(message)}
                  <div className={`text-xs mt-1 ${message.role === 'user' ? 'text-red-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3">
                  <Loader2 className="w-5 h-5 animate-spin text-red-600" />
                </div>
              </div>
            )}

            {/* Specialist Prompt (Ja/Nein Buttons) - ONLY show if NOT sent yet */}
            {showSpecialistPrompt && !emailSent && (
              <div className="flex flex-col gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700 font-medium">
                  Soll ich diese Anfrage an einen Spezialisten senden?
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSpecialistResponse(true)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Ja, bitte
                  </button>
                  <button
                    onClick={() => handleSpecialistResponse(false)}
                    className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Nein, danke
                  </button>
                </div>
              </div>
            )}

            {/* Contact Links - ONLY after email sent (removed 15+ messages condition) */}
            {emailSent && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-3 font-medium">
                  Oder kontaktieren Sie uns direkt:
                </p>
                <div className="flex gap-2">
                  {/* E-Mail FIRST (red) */}
                  <a
                    href="mailto:info@bgs-service.ch"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    E-Mail
                  </a>
                  {/* Anrufen SECOND (gray) */}
                  <a
                    href="tel:+41413205610"
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Anrufen
                  </a>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ihre Nachricht..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
