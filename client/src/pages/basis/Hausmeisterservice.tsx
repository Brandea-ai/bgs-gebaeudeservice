import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Link } from 'wouter';
import { CheckCircle, Clock, Shield, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hausmeisterservice() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Clock, title: '24/7 Erreichbar', description: 'Notfall-Hotline rund um die Uhr' },
    { icon: Shield, title: 'Zuverlässig', description: 'Professionelle Betreuung' },
    { icon: CheckCircle, title: 'Komplett-Service', description: 'Alle Leistungen aus einer Hand' },
  ];

  const services = [
    'Objektbetreuung und Überwachung',
    'Kleinreparaturen und Instandhaltung',
    'Grünpflege und Außenanlagen',
    'Winterdienst und Schneeräumung',
    'Müllentsorgung und Recycling',
    'Schlüsselverwaltung',
  ];

  const faqs = [
    {
      question: 'Welche Leistungen umfasst der Hausmeisterservice?',
      answer: 'Unser Hausmeisterservice umfasst Objektbetreuung, Kleinreparaturen, Grünpflege, Winterdienst, Müllentsorgung und vieles mehr. Wir bieten maßgeschneiderte Lösungen für Ihre Immobilie.',
    },
    {
      question: 'Sind Sie auch außerhalb der Geschäftszeiten erreichbar?',
      answer: 'Ja, wir bieten eine 24/7 Notfall-Hotline für dringende Angelegenheiten. Unser Team ist jederzeit für Sie da.',
    },
    {
      question: 'Wie schnell reagieren Sie bei Notfällen?',
      answer: 'Bei Notfällen reagieren wir innerhalb von 2 Stunden. Unser Bereitschaftsdienst ist rund um die Uhr einsatzbereit.',
    },
    {
      question: 'Können Sie auch Kleinreparaturen durchführen?',
      answer: 'Ja, unser Team führt alle gängigen Kleinreparaturen durch - von Elektrik über Sanitär bis zu Schreinerarbeiten.',
    },
    {
      question: 'Was kostet der Hausmeisterservice?',
      answer: 'Die Kosten richten sich nach Objektgröße und Leistungsumfang. Kontaktieren Sie uns für ein individuelles Angebot.',
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
              Professioneller Hausmeisterservice
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Zuverlässige Betreuung für Ihre Immobilie in Zürich, Zug und Luzern
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
                Ihr zuverlässiger Partner für die Immobilienbetreuung
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser professioneller Hausmeisterservice sorgt dafür, dass Ihre Immobilie in bestem Zustand bleibt. 
                Wir übernehmen alle anfallenden Aufgaben - von der täglichen Objektbetreuung bis zu Notfalleinsätzen.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mit unserem erfahrenen Team und modernster Ausstattung garantieren wir höchste Qualität und 
                Zuverlässigkeit. Vertrauen Sie auf über 15 Jahre Erfahrung in der Immobilienbetreuung.
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Hausmeister bei der Arbeit"
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
              Unsere Hausmeister-Leistungen
            </h2>
            <p className="text-xl text-gray-600">
              Umfassender Service für Ihre Immobilie
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
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
                alt="Professionelle Objektbetreuung"
                className="w-full h-full object-cover"
              />
                  <SwissFooter />
    </div>
  </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                24/7 Notfall-Service für Ihre Sicherheit
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Notfälle kennen keine Öffnungszeiten. Deshalb sind wir rund um die Uhr für Sie erreichbar. 
                Ob Wasserschaden, Heizungsausfall oder Sicherheitsproblem - unser Notfall-Team ist innerhalb 
                kürzester Zeit vor Ort.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unsere Hausmeister sind bestens ausgebildet und verfügen über langjährige Erfahrung in der 
                Bewältigung von Notfallsituationen. Ihre Immobilie ist bei uns in sicheren Händen.
              </p>
              <Link
                to="/winterdienst"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Mehr über Winterdienst
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
              Alles, was Sie über unseren Hausmeisterservice wissen müssen
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
            Bereit für professionellen Hausmeisterservice?
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
              to="/bueroreinigung"
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
