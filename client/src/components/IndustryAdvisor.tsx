import { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, Building2 } from 'lucide-react';

interface AdvisorResponse {
  recommendation: string;
  services: string[];
  callToAction: string;
}

export default function IndustryAdvisor() {
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AdvisorResponse | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!industry.trim()) {
      setError('Bitte geben Sie Ihre Branche ein');
      return;
    }

    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await fetch('/api/industry-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ industry: industry.trim() }),
      });

      if (!res.ok) {
        throw new Error('Analyse fehlgeschlagen');
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      console.error('Industry analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 rounded-2xl p-8 shadow-2xl border border-red-500/20">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">KI-Branchen-Berater</h3>
          <p className="text-gray-300 text-sm">Powered by Gemini AI</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6">
        Nennen Sie uns Ihre Branche und unsere KI analysiert, welche Reinigungsleistungen 
        perfekt zu Ihren Anforderungen passen.
      </p>

      {/* Input Section */}
      {!response && (
        <div className="space-y-4">
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="z.B. Hotel, Büro, Fabrik, Krankenhaus..."
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              disabled={loading}
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>KI analysiert...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Jetzt analysieren</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Response Section */}
      {response && (
        <div className="space-y-6 animate-fadeIn">
          {/* Recommendation */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              Unsere Empfehlung für Sie
            </h4>
            <p className="text-gray-300 leading-relaxed">
              {response.recommendation}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Passende Leistungen:</h4>
            <div className="grid gap-3">
              {response.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 flex items-center gap-3 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-200">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-500/30 rounded-xl p-6">
            <p className="text-white font-medium mb-4">
              {response.callToAction}
            </p>
            <div className="flex gap-3">
              <button
                onClick={scrollToContact}
                className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
              >
                <span>Jetzt Angebot anfordern</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  setResponse(null);
                  setIndustry('');
                }}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Neue Analyse
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Note */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-gray-400 text-xs text-center">
          Unsere KI nutzt alle Informationen unserer Website, um Ihnen die bestmögliche Empfehlung zu geben.
        </p>
      </div>
    </div>
  );
}
