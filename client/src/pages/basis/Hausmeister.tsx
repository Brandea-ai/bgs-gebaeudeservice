import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Link } from 'wouter';
import { CheckCircle, Clock, Shield, Phone, ArrowRight, ChevronDown, Wrench } from 'lucide-react';
import { useState } from 'react';

export default function Hausmeister() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Wrench, title: 'Allrounder', description: 'Vielseitige Fähigkeiten' },
    { icon: Shield, title: 'Zuverlässig', description: 'Immer vor Ort' },
    { icon: CheckCircle, title: 'Erfahren', description: 'Langjährige Expertise' },
  ];

  const services = [
    'Objektbetreuung und Kontrolle',
    'Kleinreparaturen aller Art',
    'Grünpflege und Gartenpflege',
    'Winterdienst und Schneeräumung',
    'Müllentsorgung und Recycling',
    'Schlüsselverwaltung und Zutrittskontrolle',
  ];

  const faqs = [
    {
      question: 'Was macht ein Hausmeister genau?',
      answer: 'Ein Hausmeister kümmert sich um die Betreuung und Instandhaltung Ihrer Immobilie - von Kleinreparaturen über Grünpflege bis zu Winterdienst und Müllentsorgung.',
    },
    {
      question: 'Ist der Hausmeister täglich vor Ort?',
      answer: 'Das hängt von Ihren Anforderungen ab. Wir bieten flexible Lösungen von täglicher Betreuung bis zu wöchentlichen Kontrollen.',
    },
    {
      question: 'Können Hausmeister auch Reparaturen durchführen?',
      answer: 'Ja, unsere Hausmeister sind handwerklich geschult und können die meisten Kleinreparaturen selbst durchführen - von Elektrik über Sanitär bis zu Schreinerarbeiten.',
    },
    {
      question: 'Was passiert bei größeren Schäden?',
      answer: 'Bei größeren Reparaturen koordiniert der Hausmeister die notwendigen Fachfirmen und überwacht die Arbeiten für Sie.',
    },
    {
      question: 'Was kostet ein Hausmeister?',
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
              Professioneller Hausmeister
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
                Ihr Allrounder für die Immobilienbetreuung
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ein guter Hausmeister ist Gold wert. Er ist die zentrale Anlaufstelle für alle Belange rund um 
                Ihre Immobilie - von der täglichen Kontrolle über Kleinreparaturen bis zur Koordination von Handwerkern.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unsere erfahrenen Hausmeister sind handwerklich geschult, zuverlässig und diskret. Sie kümmern sich 
                um alles, damit Sie sich um nichts kümmern müssen.
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
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80"
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
              Aufgaben eines Hausmeisters
            </h2>
            <p className="text-xl text-gray-600">
              Vielseitige Betreuung für Ihre Immobilie
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Professionelle Objektbetreuung"
                className="w-full h-full object-cover"
              />
                  <SwissFooter />
    </div>
  </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Mehr als nur Reparaturen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ein Hausmeister ist mehr als ein Handwerker. Er ist das Gesicht Ihrer Immobilie, Ansprechpartner 
                für Mieter und Besucher, und sorgt dafür, dass alles reibungslos läuft.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Von der Grünpflege über Winterdienst bis zur Müllentsorgung - unser Hausmeister kümmert sich 
                um alle anfallenden Aufgaben. Zuverlässig, kompetent und mit Schweizer Präzision.
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
              Alles, was Sie über Hausmeister wissen müssen
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
            Bereit für einen professionellen Hausmeister?
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
              to="/unterhaltsreinigung"
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
