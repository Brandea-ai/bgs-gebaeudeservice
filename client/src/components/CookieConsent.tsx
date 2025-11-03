import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { Link } from "wouter";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cookie className="w-6 h-6 text-white" />
              <h3 className="text-lg font-bold text-white">Cookie-Einstellungen</h3>
            </div>
            <button
              onClick={acceptNecessary}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showSettings ? (
              <>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Nutzung unserer Website zu ermöglichen. 
                  Einige Cookies sind für den Betrieb der Website erforderlich, während andere uns helfen, 
                  die Website und Ihre Erfahrung zu verbessern.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Weitere Informationen finden Sie in unserer{" "}
                  <Link href="/datenschutz" className="text-red-600 hover:text-red-700 underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 border-2 border-slate-300 dark:border-slate-700 hover:border-red-600 dark:hover:border-red-600 text-slate-900 dark:text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Einstellungen
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-1 w-5 h-5 text-red-600 rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-red-600" />
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          Notwendige Cookies
                        </h4>
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                          Erforderlich
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                      </p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 text-red-600 rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Analyse-Cookies
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Diese Cookies helfen uns, die Nutzung der Website zu analysieren und zu verbessern.
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="mt-1 w-5 h-5 text-red-600 rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Marketing-Cookies
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Settings Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={savePreferences}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Zurück
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
