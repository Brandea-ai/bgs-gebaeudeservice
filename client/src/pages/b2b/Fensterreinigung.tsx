import { Link } from 'wouter';
import { Sparkles, Clock, Shield, CheckCircle2, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Fensterreinigung() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie oft sollten Fenster professionell gereinigt werden?",
      answer: "Für Geschäftsgebäude empfehlen wir eine professionelle Fensterreinigung alle 1-3 Monate, abhängig von Standort und Verschmutzungsgrad. Hochhäuser und exponierte Fassaden benötigen häufigere Reinigung."
    },
    {
      question: "Reinigen Sie auch Fenster in großen Höhen?",
      answer: "Ja, wir sind spezialisiert auf Fensterreinigung in allen Höhen. Unser Team verfügt über professionelle Höhenzugangstechnik und alle erforderlichen Sicherheitszertifikate für Arbeiten an Hochhäusern."
    },
    {
      question: "Welche Reinigungsmethoden verwenden Sie?",
      answer: "Wir nutzen modernste Reinigungstechniken wie Osmosewasser-Technologie für streifenfreie Ergebnisse, Teleskopstangen für schwer erreichbare Bereiche und professionelle Fassadenreinigungssysteme."
    },
    {
      question: "Können Sie auch Rahmen und Fensterbänke reinigen?",
      answer: "Ja, unser Service umfasst die Reinigung von Scheiben, Rahmen, Fensterbänken und Dichtungen. Wir bieten Komplettreinigung für langanhaltende Sauberkeit."
    },
    {
      question: "Arbeiten Sie auch bei schlechtem Wetter?",
      answer: "Wir planen unsere Einsätze wetterabhängig. Bei leichtem Regen können wir arbeiten, bei starkem Wind oder Gewitter verschieben wir aus Sicherheitsgründen. Sie werden rechtzeitig informiert."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professionelle <span className="text-blue-400">Fensterreinigung</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streifenfreier Durchblick für Ihr Unternehmen in Zürich, Zug und Luzern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+41413205610" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                +41 41 320 56 10
              </a>
              <Link href="/kontakt">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                  <Mail className="w-5 h-5 mr-2" />
                  Angebot anfragen
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Streifenfrei</h3>
              <p className="text-gray-600">Perfekte Ergebnisse garantiert</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexibel</h3>
              <p className="text-gray-600">Termine nach Ihren Wünschen</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sicher</h3>
              <p className="text-gray-600">Zertifizierte Höhenarbeiter</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kristallklare Fenster für Ihr Unternehmen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Saubere Fenster sind die Visitenkarte Ihres Unternehmens. Unser professionelles Team sorgt für streifenfreien Durchblick und ein gepflegtes Erscheinungsbild Ihrer Geschäftsräume.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mit modernster Reinigungstechnologie und umweltfreundlichen Reinigungsmitteln garantieren wir perfekte Ergebnisse. Wir reinigen Fenster in allen Höhen und Größen – von Bürogebäuden bis zu Hochhäusern.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Osmosewasser-Technologie</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Höhenzugangstechnik</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Umweltfreundlich</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Versichert & zertifiziert</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
                alt="Fensterreinigung"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="Professionelle Fensterreinigung"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Moderne Reinigungstechnologie
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir setzen auf modernste Reinigungstechnologie für perfekte Ergebnisse. Unsere Osmosewasser-Systeme garantieren streifenfreie Sauberkeit ohne chemische Zusätze.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Osmosewasser-Technologie</h4>
                    <p className="text-gray-600">Reines Wasser für streifenfreie Ergebnisse ohne Chemie</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Teleskopstangen-System</h4>
                    <p className="text-gray-600">Sichere Reinigung bis 20 Meter Höhe vom Boden aus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Höhenzugangstechnik</h4>
                    <p className="text-gray-600">Professionelle Seilzugangstechnik für Hochhäuser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Fensterreinigungsleistungen</h2>
            <p className="text-xl text-gray-600">Professionelle Reinigung für jeden Bedarf</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bürofenster',
              'Schaufenster',
              'Glasfassaden',
              'Wintergärten',
              'Oberlichter',
              'Rahmenreinigung',
              'Fensterbänke',
              'Hochhausfenster',
              'Dachfenster',
              'Industrieverglasung',
              'Solaranlagen',
              'Notfallreinigung'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-xl text-gray-600">Alles über unsere Fensterreinigung</p>
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

      <div className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für kristallklare Fenster?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Fensterreinigungsexperten beraten Sie gerne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <a className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                Jetzt Kontakt aufnehmen
              </a>
            </Link>
            <a href="tel:+41413205610" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              +41 41 320 56 10
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            Weitere Dienstleistungen: 
            <Link href="/b2b/fassadenreinigung"><a className="text-blue-400 hover:text-blue-300 ml-2">Fassadenreinigung</a></Link> | 
            <Link href="/b2b/bueroreinigung"><a className="text-blue-400 hover:text-blue-300 ml-2">Büroreinigung</a></Link> | 
            <Link href="/b2b/facility-management"><a className="text-blue-400 hover:text-blue-300 ml-2">Facility Management</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
