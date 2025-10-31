import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield, Phone, ArrowRight, ChevronDown, Snowflake } from 'lucide-react';
import { useState } from 'react';

export default function Winterdienst() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Snowflake, title: '24/7 Bereit', description: 'Rund um die Uhr im Einsatz' },
    { icon: Shield, title: 'Verkehrssicher', description: 'Erfüllung der Räumpflicht' },
    { icon: CheckCircle, title: 'Zuverlässig', description: 'Schnelle Reaktionszeit' },
  ];

  const services = [
    'Schneeräumung von Gehwegen und Parkplätzen',
    'Professioneller Streudienst',
    'Eisbeseitigung und Glatteisbekämpfung',
    'Treppen und Zugänge sichern',
    'Dachschneeräumung',
    'Dokumentation für Versicherung',
  ];

  const faqs = [
    {
      question: 'Ab wann beginnt der Winterdienst?',
      answer: 'Unser Winterdienst ist von November bis März aktiv. Bei Schneefall oder Glatteis sind wir rund um die Uhr im Einsatz, um Ihre Verkehrssicherungspflicht zu erfüllen.',
    },
    {
      question: 'Wie schnell reagieren Sie bei Schneefall?',
      answer: 'Wir beginnen mit der Räumung bereits während des Schneefalls. Bei starkem Schneefall sind wir innerhalb von 1-2 Stunden vor Ort.',
    },
    {
      question: 'Welches Streugut verwenden Sie?',
      answer: 'Wir verwenden umweltfreundliches Streugut, das effektiv gegen Glätte wirkt und gleichzeitig Boden und Vegetation schont.',
    },
    {
      question: 'Dokumentieren Sie die Winterdienst-Einsätze?',
      answer: 'Ja, wir dokumentieren alle Einsätze mit Datum, Uhrzeit und durchgeführten Maßnahmen. Diese Dokumentation ist wichtig für Ihre Verkehrssicherungspflicht.',
    },
    {
      question: 'Was kostet der Winterdienst?',
      answer: 'Die Kosten richten sich nach Objektgröße und Leistungsumfang. Wir bieten Pauschalpreise oder Abrechnung nach Einsatz. Kontaktieren Sie uns für ein individuelles Angebot.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professioneller Winterdienst
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Zuverlässige Schneeräumung und Streudienst in Zürich, Zug und Luzern
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Jetzt Angebot einholen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+41413205610"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                +41 41 320 56 10
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section 1 - Text Left, Image Right */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sichere Wege auch im tiefsten Winter
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Als Immobilieneigentümer tragen Sie die Verkehrssicherungspflicht. Unser professioneller Winterdienst 
                stellt sicher, dass Gehwege, Parkplätze und Zugänge stets sicher begehbar sind - rund um die Uhr.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mit modernen Räumfahrzeugen und umweltfreundlichem Streugut sorgen wir für maximale Sicherheit bei 
                minimalem Umwelteinfluss. Unsere erfahrenen Teams sind bei jedem Wetter im Einsatz.
              </p>
              <Link
                to="/hausmeisterservice"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Mehr über Hausmeisterservice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&q=80"
                alt="Winterdienst Schneeräumung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Winterdienst-Leistungen
            </h2>
            <p className="text-xl text-gray-600">
              Umfassender Service für sichere Wege
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section 2 - Image Left, Text Right */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&q=80"
                alt="Professionelle Schneeräumung"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                24/7 Bereitschaft für Ihre Sicherheit
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Schnee und Eis kommen oft über Nacht. Deshalb überwachen wir die Wetterlage kontinuierlich und 
                beginnen mit der Räumung bereits während des Schneefalls. So sind Ihre Wege morgens garantiert frei.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Wir dokumentieren jeden Einsatz detailliert - wichtig für Ihre Verkehrssicherungspflicht und 
                eventuelle Versicherungsfälle. Mit uns sind Sie auf der sicheren Seite.
              </p>
              <Link
                to="/unterhaltsreinigung"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Mehr über Unterhaltsreinigung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Alles, was Sie über unseren Winterdienst wissen müssen
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-red-600 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für einen zuverlässigen Winterdienst?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Kontaktieren Sie uns für ein unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/sonderleistungen"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Weitere Leistungen entdecken
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
