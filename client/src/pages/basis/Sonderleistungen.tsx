import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Link } from 'wouter';
import { CheckCircle, Clock, Shield, Phone, ArrowRight, ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';

export default function Sonderleistungen() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Star, title: 'Individuell', description: 'Maßgeschneiderte Lösungen' },
    { icon: Shield, title: 'Professionell', description: 'Erfahrene Spezialisten' },
    { icon: CheckCircle, title: 'Flexibel', description: 'Anpassungsfähig' },
  ];

  const services = [
    'Tatortreinigung und Desinfektion',
    'Teppich- und Polsterreinigung',
    'Graffiti-Entfernung',
    'Hochdruckreinigung',
    'Desinfektion und Schädlingsbekämpfung',
    'Spezialreinigung nach Wasserschäden',
  ];

  const faqs = [
    {
      question: 'Welche Sonderleistungen bieten Sie an?',
      answer: 'Wir bieten eine Vielzahl von Spezialreinigungen an, darunter Tatortreinigung, Teppichreinigung, Graffiti-Entfernung, Hochdruckreinigung und vieles mehr. Kontaktieren Sie uns für Ihre spezielle Anforderung.',
    },
    {
      question: 'Wie schnell können Sie bei Notfällen reagieren?',
      answer: 'Bei Notfällen wie Wasserschäden oder Verschmutzungen sind wir innerhalb von 2-4 Stunden vor Ort. Rufen Sie uns an, und wir helfen sofort.',
    },
    {
      question: 'Sind Ihre Mitarbeiter für Spezialreinigungen ausgebildet?',
      answer: 'Ja, unser Team ist speziell geschult für alle Arten von Sonderreinigungen und verfügt über die notwendigen Zertifizierungen und Ausrüstung.',
    },
    {
      question: 'Können Sie auch außerhalb der Geschäftszeiten arbeiten?',
      answer: 'Ja, wir bieten flexible Arbeitszeiten und können auch nachts oder am Wochenende arbeiten, um Ihren Betrieb nicht zu stören.',
    },
    {
      question: 'Was kostet eine Sonderreinigung?',
      answer: 'Die Kosten variieren je nach Art und Umfang der Reinigung. Kontaktieren Sie uns für ein individuelles Angebot basierend auf Ihren Anforderungen.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SwissNavigation />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Individuelle Sonderleistungen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Maßgeschneiderte Reinigungslösungen für besondere Anforderungen
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
                  <SwissFooter />
    </div>
  </div>
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
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
                      <SwissFooter />
    </div>
  </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                    <SwissFooter />
    </div>
  </div>
            ))}
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
    </div>
  </div>
      </section>

      {/* Content Section 1 - Text Left, Image Right */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Spezialreinigung für außergewöhnliche Anforderungen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Manche Reinigungsaufgaben erfordern besonderes Know-how und Spezialausrüstung. Unser Team ist 
                für alle Arten von Sonderreinigungen ausgebildet und ausgerüstet - von der Tatortreinigung bis 
                zur Hochdruckreinigung.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Wir entwickeln für jede Herausforderung die passende Lösung. Mit modernster Technologie und 
                jahrelanger Erfahrung garantieren wir professionelle Ergebnisse auch bei schwierigsten Aufgaben.
              </p>
              <Link
                to="/hausmeisterservice"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Mehr über Hausmeisterservice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
                  <SwissFooter />
    </div>
  </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
                alt="Spezialreinigung"
                className="w-full h-full object-cover"
              />
                  <SwissFooter />
    </div>
  </div>
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
    </div>
  </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Sonderleistungen
            </h2>
            <p className="text-xl text-gray-600">
              Professionelle Lösungen für spezielle Anforderungen
            </p>
                <SwissFooter />
    </div>
  </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{service}</span>
                    <SwissFooter />
    </div>
  </div>
            ))}
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
    </div>
  </div>
      </section>

      {/* Content Section 2 - Image Left, Text Right */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80"
                alt="Professionelle Spezialausrüstung"
                className="w-full h-full object-cover"
              />
                  <SwissFooter />
    </div>
  </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schnelle Hilfe bei Notfällen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wasserschäden, Verschmutzungen oder andere Notfälle erfordern schnelles Handeln. Unser Notfall-Team 
                ist rund um die Uhr erreichbar und kann innerhalb kürzester Zeit vor Ort sein.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mit professioneller Ausrüstung und bewährten Verfahren minimieren wir Schäden und stellen den 
                Normalzustand schnellstmöglich wieder her. Ihre Zufriedenheit und Sicherheit stehen an erster Stelle.
              </p>
              <Link
                to="/unterhaltsreinigung"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Mehr über Unterhaltsreinigung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
                  <SwissFooter />
    </div>
  </div>
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
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
              Alles, was Sie über Sonderleistungen wissen müssen
            </p>
                <SwissFooter />
    </div>
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
                        <SwissFooter />
    </div>
  </div>
                )}
                    <SwissFooter />
    </div>
  </div>
            ))}
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
    </div>
  </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für professionelle Sonderleistungen?
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
              to="/winterdienst"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-800 text-white rounded-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Weitere Leistungen entdecken
            </Link>
                <SwissFooter />
    </div>
  </div>
              <SwissFooter />
    </div>
  </div>
      </section>
          <SwissFooter />
    </div>
  </div>
  );
}
