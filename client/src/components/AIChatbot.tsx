import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, CheckCircle2, Shield, Sparkles, Phone, Mail } from 'lucide-react';

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

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '', company: '', city: '', service: '' });
  const [collectingContactInfo, setCollectingContactInfo] = useState(false);
  const [showSpecialistPrompt, setShowSpecialistPrompt] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleConsent = () => {
    setHasConsent(true);
    setMessages([{
      role: 'assistant',
      content: 'Herzlich willkommen! Ich bin Ihr KI-Assistent von der Swiss Reinigungsfirma. Wie kann ich Ihnen heute helfen?',
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

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
          questionCount: questionCount
        }),
      });

      if (!response.ok) {
        throw new Error('Chat request failed');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Update question count
      if (data.questionCount !== undefined) {
        setQuestionCount(data.questionCount);
      }

      // Show contact info form if needed
      if (data.needsContactInfo && !userInfo.email) {
        setCollectingContactInfo(true);
      }

      // Show specialist prompt if ready (ALL contact info must be present)
      if (data.readyToSend && userInfo.name && userInfo.email && userInfo.phone && userInfo.company && userInfo.city && userInfo.service) {
        setShowSpecialistPrompt(true);
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Entschuldigung, technischer Fehler. Bitte kontaktieren Sie uns:\n\n📞 **+41 41 320 56 10**\n📧 **info@brandea.de**',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleContactInfoSubmit = () => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.company || !userInfo.city || !userInfo.service) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }

    setCollectingContactInfo(false);
    
    const confirmMessage: Message = {
      role: 'assistant',
      content: `Vielen Dank, **${userInfo.name}**! Ich habe Ihre Kontaktdaten notiert.\n\n**Zusammenfassung:**\n- Leistung: ${userInfo.service}\n- Firma: ${userInfo.company}\n- Stadt: ${userInfo.city}\n- Telefon: ${userInfo.phone}\n- E-Mail: ${userInfo.email}\n\nSoll ich diese Anfrage an einen Spezialisten senden?`,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, confirmMessage]);
    setShowSpecialistPrompt(true);
  };

  const handleSpecialistDecision = async (sendToSpecialist: boolean) => {
    if (!sendToSpecialist) {
      setShowSpecialistPrompt(false);
      const declineMessage: Message = {
        role: 'assistant',
        content: 'Kein Problem! Gibt es noch etwas, bei dem ich Ihnen helfen kann?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, declineMessage]);
      return;
    }

    if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.company || !userInfo.city || !userInfo.service) {
      alert('Bitte geben Sie alle Kontaktdaten an.');
      return;
    }

    setLoading(true);
    setShowSpecialistPrompt(false);

    try {
      // Prepare conversation summary
      const conversationLong = messages.map(m => 
        `[${m.timestamp.toLocaleTimeString('de-CH')}] ${m.role === 'user' ? 'Kunde' : 'KI-Assistent'}: ${m.content}`
      ).join('\n\n');

      const conversationShort = messages
        .filter(m => m.role === 'user')
        .map(m => m.content)
        .slice(0, 3)
        .join(' | ');

      // Send to specialist via email
      const response = await fetch('/api/chat-to-specialist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo,
          conversationLong,
          conversationShort
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send to specialist');
      }

      setEmailSent(true);

      const successMessage: Message = {
        role: 'assistant',
        content: `✅ **Vielen Dank!** Ihre Anfrage wurde erfolgreich an unseren Spezialisten weitergeleitet.\n\nSie erhalten innerhalb von **12 Stunden (werktags)** eine Antwort an **${userInfo.email}**.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, successMessage]);

    } catch (error) {
      console.error('Send to specialist error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: '❌ Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt:\n\n📞 **+41 41 320 56 10**\n📧 **info@brandea.de**',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Render message with basic markdown support
  const renderMessage = (content: string) => {
    // Replace **text** with bold
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center z-50 group"
        aria-label="Chat öffnen"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">KI-Assistent</h3>
            <p className="text-xs text-white/80">Powered by Brandea AI</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 p-2 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* GDPR Consent */}
      {!hasConsent && (
        <div className="flex-1 p-6 flex flex-col items-center justify-center bg-gray-50">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
            Datenschutz & Einwilligung
          </h4>
          <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
            Bevor wir beginnen, benötigen wir Ihre Zustimmung zur Verarbeitung Ihrer Daten gemäß unserer{' '}
            <a href="/datenschutz" className="text-red-600 hover:underline" target="_blank">
              Datenschutzerklärung
            </a>.
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 text-sm text-gray-700">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Gespräche werden dokumentiert</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Daten werden sicher gespeichert</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Keine Weitergabe an Dritte</span>
              </li>
            </ul>
          </div>
          <button
            onClick={handleConsent}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Shield className="w-5 h-5" />
            <span>Zustimmen & Chat starten</span>
          </button>
        </div>
      )}

      {/* Chat Messages */}
      {hasConsent && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {renderMessage(message.content)}
                  </p>
                  <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                  <Loader2 className="w-5 h-5 text-red-600 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Contact Info Collection Form */}
          {collectingContactInfo && (
            <div className="p-4 bg-blue-50 border-t border-blue-200">
              <p className="text-sm text-gray-700 mb-3 font-medium">
                Bitte geben Sie Ihre Kontaktdaten an:
              </p>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Benötigte Leistung *"
                  value={userInfo.service}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Ihr Name *"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Firma *"
                  value={userInfo.company}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  placeholder="Telefon *"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="text"
                  placeholder="Stadt *"
                  value={userInfo.city}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, city: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="E-Mail *"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={handleContactInfoSubmit}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Bestätigen
                </button>
              </div>
            </div>
          )}

          {/* Direct Contact Options - Only show after email sent or many messages */}
          {(emailSent || messages.length > 15) && (
            <div className="px-4 py-2 bg-blue-50 border-t border-blue-100">
              <p className="text-xs text-gray-600 mb-2 text-center">Oder kontaktieren Sie uns direkt:</p>
              <div className="flex gap-2 justify-center">
                <a
                  href="tel:+41413205610"
                  className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors border border-gray-200"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Anrufen</span>
                </a>
                <a
                  href="mailto:info@brandea.de"
                  className="flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors border border-gray-200"
                >
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>E-Mail</span>
                </a>
              </div>
            </div>
          )}

          {/* Specialist Prompt with Yes/No Buttons */}
          {showSpecialistPrompt && (
            <div className="p-4 bg-green-50 border-t border-green-200">
              <p className="text-sm text-gray-700 mb-3 font-medium text-center">
                Soll ich diese Anfrage an einen Spezialisten senden?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleSpecialistDecision(true)}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Ja, bitte</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleSpecialistDecision(false)}
                  disabled={loading}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <X className="w-5 h-5" />
                  <span>Nein, danke</span>
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ihre Nachricht..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
