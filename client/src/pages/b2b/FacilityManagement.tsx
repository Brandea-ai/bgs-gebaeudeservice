import { Link } from 'wouter';
import { Building2, Clock, Shield, CheckCircle2, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FacilityManagement() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Was umfasst Facility Management?",
      answer: "Unser Facility Management umfasst alle Dienstleistungen rund um Ihr Gebäude: Reinigung, Wartung, Hausmeisterservice, Winterdienst, Grünpflege und technische Gebäudebetreuung aus einer Hand."
    },
    {
      question: "Welche Vorteile bietet ein Facility Management Vertrag?",
      answer: "Sie haben einen zentralen Ansprechpartner für alle Gebäudedienstleistungen, profitieren von Kostenoptimierung durch gebündelte Services und können sich auf Ihr Kerngeschäft konzentrieren."
    },
    {
      question: "Ist Facility Management auch für kleinere Unternehmen sinnvoll?",
      answer: "Ja, wir bieten skalierbare Facility Management Lösungen für Unternehmen jeder Größe. Auch kleine und mittlere Unternehmen profitieren von professionellem Gebäudemanagement."
    },
    {
      question: "Wie flexibel sind Ihre Facility Management Verträge?",
      answer: "Unsere Verträge sind sehr flexibel gestaltet. Sie können Services nach Bedarf hinzubuchen oder anpassen. Wir bieten Laufzeiten von 1-5 Jahren mit verschiedenen Kündigungsfristen."
    },
    {
      question: "Welche Qualifikationen haben Ihre Facility Manager?",
      answer: "Unsere Facility Manager verfügen über langjährige Erfahrung im Gebäudemanagement, relevante Zertifizierungen und werden regelmäßig weitergebildet in den Bereichen Technik, Sicherheit und Qualitätsmanagement."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professionelles <span className="text-red-500">Facility Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ganzheitliche Gebäudebewirtschaftung für Unternehmen in Zürich, Zug und Luzern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+41413205610" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                +41 41 320 56 10
              </a>
              <Link href="/kontakt">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Angebot anfragen
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ganzheitlich</h3>
              <p className="text-gray-600">Alle Services aus einer Hand</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Verfügbar</h3>
              <p className="text-gray-600">Notfall-Hotline rund um die Uhr</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zertifiziert</h3>
              <p className="text-gray-600">ISO-zertifiziertes Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Ihr Partner für ganzheitliches Gebäudemanagement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Als erfahrener Facility Management Partner bieten wir Ihnen umfassende Dienstleistungen für die Bewirtschaftung Ihrer Immobilien. Von der Reinigung über Wartung bis zur technischen Gebäudebetreuung – wir kümmern uns um alles.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unser Facility Management Team koordiniert alle Dienstleistungen effizient und sorgt für einen reibungslosen Betrieb Ihrer Gebäude. Sie profitieren von Kostenoptimierung, höherer Effizienz und können sich auf Ihr Kerngeschäft konzentrieren.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Zentraler Ansprechpartner</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Kostenoptimierung</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Qualitätskontrolle</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">24/7 Notfall-Service</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Facility Management"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section 2 */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
                alt="Facility Management Services"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Umfassende Facility Services
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser Facility Management umfasst alle Bereiche der Gebäudebewirtschaftung. Wir bieten maßgeschneiderte Lösungen, die perfekt auf Ihre Bedürfnisse abgestimmt sind.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Technisches Facility Management</h4>
                    <p className="text-gray-600">Wartung, Instandhaltung und Betrieb technischer Anlagen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Infrastrukturelles Facility Management</h4>
                    <p className="text-gray-600">Reinigung, Hausmeisterservice, Winterdienst, Grünpflege</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Kaufmännisches Facility Management</h4>
                    <p className="text-gray-600">Vertragsmanagement, Controlling, Budgetplanung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Unsere Facility Management Leistungen</h2>
            <p className="text-xl text-gray-600">Ganzheitliche Gebäudebewirtschaftung aus einer Hand</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Gebäudereinigung',
              'Technische Wartung',
              'Hausmeisterservice',
              'Winterdienst',
              'Grünpflege',
              'Sicherheitsdienste',
              'Empfangsdienste',
              'Catering Services',
              'Energiemanagement',
              'Vertragsmanagement',
              'Qualitätskontrolle',
              '24/7 Notfall-Hotline'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-xl text-gray-600">Alles über unser Facility Management</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für professionelles Facility Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Facility Management Experten beraten Sie gerne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold">
                Jetzt Kontakt aufnehmen
              </a>
            </Link>
            <a href="tel:+41413205610" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              +41 41 320 56 10
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            Weitere Dienstleistungen: 
            <Link href="/b2b/bueroreinigung"><a className="text-red-400 hover:text-red-300 ml-2">Büroreinigung</a></Link> | 
            <Link href="/b2b/industriereinigung"><a className="text-red-400 hover:text-red-300 ml-2">Industriereinigung</a></Link> | 
            <Link href="/basis/hausmeisterservice"><a className="text-red-400 hover:text-red-300 ml-2">Hausmeisterservice</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
