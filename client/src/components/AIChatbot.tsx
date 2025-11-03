import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '' });
  const [collectingInfo, setCollectingInfo] = useState(false);
  const [canSendToSpecialist, setCanSendToSpecialist] = useState(false);
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
          userInfo: userInfo.name && userInfo.email ? userInfo : undefined
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

      if (data.needsContactInfo && !userInfo.email) {
        setCollectingInfo(true);
      }

      if (data.readyToSend && userInfo.email) {
        setCanSendToSpecialist(true);
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Entschuldigung, es gab einen technischen Fehler. Bitte kontaktieren Sie uns: info@bgs-service.ch oder +41 41 320 56 10',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendToSpecialist = async () => {
    if (!userInfo.name || !userInfo.email) {
      alert('Bitte geben Sie Ihre Kontaktdaten an.');
      return;
    }

    setLoading(true);

    try {
      // Prepare conversation summary
      const conversationLong = messages.map(m => 
        `[${m.timestamp.toLocaleTimeString('de-CH')}] ${m.role === 'user' ? 'Kunde' : 'KI-Assistent'}: ${m.content}`
      ).join('\n\n');

      const conversationShort = messages
        .filter(m => m.role === 'user')
        .map(m => m.content)
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

      const successMessage: Message = {
        role: 'assistant',
        content: `✅ Vielen Dank! Ihre Anfrage wurde erfolgreich an unseren Spezialisten weitergeleitet. Sie erhalten innerhalb von 24 Stunden eine Antwort an ${userInfo.email}.`,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, successMessage]);
      setCanSendToSpecialist(false);

    } catch (error) {
      console.error('Send to specialist error:', error);
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setLoading(false);
    }
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
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
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

          {/* Contact Info Collection */}
          {collectingInfo && !userInfo.email && (
            <div className="p-4 bg-yellow-50 border-t border-yellow-200">
              <p className="text-sm text-gray-700 mb-3 font-medium">
                Bitte geben Sie Ihre Kontaktdaten an:
              </p>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  placeholder="Telefon (optional)"
                  value={userInfo.phone}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  onClick={() => {
                    if (userInfo.name && userInfo.email) {
                      setCollectingInfo(false);
                      setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: `Vielen Dank, ${userInfo.name}! Ich habe Ihre Kontaktdaten notiert. Wie kann ich Ihnen weiterhelfen?`,
                        timestamp: new Date()
                      }]);
                    }
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Bestätigen
                </button>
              </div>
            </div>
          )}

          {/* Send to Specialist Button */}
          {canSendToSpecialist && (
            <div className="p-4 bg-green-50 border-t border-green-200">
              <button
                onClick={handleSendToSpecialist}
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>An Spezialisten senden</span>
                  </>
                )}
              </button>
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
