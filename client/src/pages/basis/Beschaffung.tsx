import { Link } from 'wouter';
import { CheckCircle, Clock, Shield, Phone, ArrowRight, ChevronDown, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Beschaffung() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: ShoppingCart, title: 'Automatisch', description: 'Bedarfsgerechte Nachbestellung' },
    { icon: Shield, title: 'Qualität', description: 'Hochwertige Produkte' },
    { icon: CheckCircle, title: 'Nachhaltig', description: 'Umweltfreundliche Optionen' },
  ];

  const services = [
    'Reinigungsmittel und Chemikalien',
    'Toilettenpapier und Handtücher',
    'Seife und Desinfektionsmittel',
    'Müllbeutel und Entsorgungsmaterial',
    'Hygieneartikel und Spender',
    'Reinigungsgeräte und Zubehör',
  ];

  const faqs = [
    {
      question: 'Welche Produkte können Sie beschaffen?',
      answer: 'Wir beschaffen alle Reinigungsmittel, Verbrauchsmaterialien und Hygieneartikel, die Sie für Ihr Objekt benötigen - von Toilettenpapier bis zu professionellen Reinigungschemikalien.',
    },
    {
      question: 'Wie funktioniert die automatische Nachbestellung?',
      answer: 'Wir überwachen Ihren Verbrauch und bestellen automatisch nach, bevor Produkte ausgehen. Sie müssen sich um nichts kümmern.',
    },
    {
      question: 'Bieten Sie auch nachhaltige Produkte an?',
      answer: 'Ja, wir haben eine große Auswahl an umweltfreundlichen und nachhaltigen Produkten, die genauso effektiv sind wie konventionelle Produkte.',
    },
    {
      question: 'Können Sie auch lagern und liefern?',
      answer: 'Ja, wir übernehmen auf Wunsch die Lagerhaltung und liefern die Produkte direkt zu Ihnen. So sparen Sie Platz und Zeit.',
    },
    {
      question: 'Wie kann ich Kosten sparen?',
      answer: 'Durch unsere Mengenrabatte, optimierte Bestellzyklen und Vermeidung von Überbeständen können wir Ihre Beschaffungskosten deutlich senken.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professionelles Beschaffungsmanagement
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Effiziente Beschaffung von Reinigungsmitteln und Verbrauchsmaterialien
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
                Alles aus einer Hand - einfach und effizient
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Schluss mit aufwendiger Beschaffung und Lagerhaltung. Wir übernehmen das komplette Management 
                Ihrer Reinigungsmittel und Verbrauchsmaterialien - von der Bedarfsanalyse bis zur Lieferung.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dank unserer langjährigen Erfahrung und Partnerschaften mit führenden Herstellern erhalten Sie 
                hochwertige Produkte zu attraktiven Konditionen. Wir optimieren Ihre Beschaffungskosten nachhaltig.
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
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
                alt="Beschaffungsmanagement"
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
              Unsere Beschaffungs-Leistungen
            </h2>
            <p className="text-xl text-gray-600">
              Alles, was Sie für die Reinigung benötigen
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
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80"
                alt="Nachhaltige Reinigungsprodukte"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nachhaltig und umweltfreundlich
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nachhaltigkeit ist uns wichtig. Deshalb bieten wir eine große Auswahl an umweltfreundlichen 
                Reinigungsprodukten, die biologisch abbaubar sind und ohne schädliche Chemikalien auskommen.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unsere nachhaltigen Produkte sind genauso effektiv wie konventionelle Produkte, schonen aber 
                die Umwelt und die Gesundheit Ihrer Mitarbeiter. Gemeinsam tragen wir Verantwortung für die Zukunft.
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
              Alles, was Sie über Beschaffungsmanagement wissen müssen
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
            Bereit für effizientes Beschaffungsmanagement?
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
