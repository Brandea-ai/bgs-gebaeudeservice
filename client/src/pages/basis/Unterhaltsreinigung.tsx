import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Link } from 'wouter';
import { CheckCircle, Clock, Shield, Phone, ArrowRight, ChevronDown, Repeat } from 'lucide-react';
import { useState } from 'react';

export default function Unterhaltsreinigung() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { icon: Repeat, title: 'Regelmäßig', description: 'Flexibler Reinigungsrhythmus' },
    { icon: Shield, title: 'Zuverlässig', description: 'Gleichbleibende Qualität' },
    { icon: CheckCircle, title: 'Komplett', description: 'Alle Bereiche abgedeckt' },
  ];

  const services = [
    'Böden saugen und wischen',
    'Oberflächen abstauben und reinigen',
    'Sanitäranlagen desinfizieren',
    'Papierkörbe leeren und Müll entsorgen',
    'Küchen und Teeküchen reinigen',
    'Treppenhaus und Eingangsbereiche',
  ];

  const faqs = [
    {
      question: 'Wie oft sollte eine Unterhaltsreinigung durchgeführt werden?',
      answer: 'Die Häufigkeit hängt von der Nutzung ab. Für Büros empfehlen wir täglich oder 2-3x wöchentlich, für Wohnungen wöchentlich oder 14-tägig.',
    },
    {
      question: 'Was ist im Preis der Unterhaltsreinigung enthalten?',
      answer: 'Alle Standardreinigungsarbeiten wie Böden, Oberflächen, Sanitär und Müllentsorgung sind enthalten. Spezialreinigungen können zusätzlich gebucht werden.',
    },
    {
      question: 'Kann ich den Reinigungsrhythmus flexibel anpassen?',
      answer: 'Ja, wir passen uns Ihren Bedürfnissen an. Sie können den Rhythmus jederzeit ändern oder bei Bedarf zusätzliche Reinigungen buchen.',
    },
    {
      question: 'Bringen Sie eigene Reinigungsmittel mit?',
      answer: 'Ja, wir verwenden professionelle, umweltfreundliche Reinigungsmittel und bringen alle benötigten Geräte mit.',
    },
    {
      question: 'Was unterscheidet Unterhaltsreinigung von Grundreinigung?',
      answer: 'Unterhaltsreinigung ist die regelmäßige Pflege, während Grundreinigung eine intensive Tiefenreinigung ist. Wir empfehlen 1-2x jährlich eine Grundreinigung zusätzlich.',
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
              Professionelle Unterhaltsreinigung
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Regelmäßige Reinigung für dauerhaft saubere Räume in Zürich, Zug und Luzern
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
                Regelmäßige Pflege für dauerhaft saubere Räume
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unsere Unterhaltsreinigung sorgt dafür, dass Ihre Räumlichkeiten stets in bestem Zustand bleiben. 
                Wir kümmern uns um alle anfallenden Reinigungsarbeiten - von Böden über Sanitäranlagen bis zu 
                Gemeinschaftsbereichen.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Mit unserem flexiblen Reinigungsrhythmus passen wir uns perfekt Ihren Bedürfnissen an. Ob täglich, 
                mehrmals wöchentlich oder wöchentlich - wir garantieren gleichbleibend hohe Qualität.
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Unterhaltsreinigung im Büro"
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
              Unsere Unterhaltsreinigungs-Leistungen
            </h2>
            <p className="text-xl text-gray-600">
              Umfassende Reinigung für alle Bereiche
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
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80"
                alt="Professionelle Reinigungskraft"
                className="w-full h-full object-cover"
              />
                  <SwissFooter />
    </div>
  </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Flexible Reinigungsintervalle nach Ihren Wünschen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Jedes Objekt hat unterschiedliche Anforderungen. Deshalb bieten wir flexible Reinigungsintervalle, 
                die perfekt zu Ihrer Nutzung passen. Von täglicher Büroreinigung bis zur wöchentlichen Wohnungsreinigung.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unser erfahrenes Team arbeitet diskret und effizient. Wir passen uns Ihren Arbeitszeiten an und 
                reinigen auch außerhalb der Geschäftszeiten, damit Sie ungestört arbeiten können.
              </p>
              <Link
                to="/bueroreinigung"
                className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
              >
                Mehr über Büroreinigung
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
              Alles, was Sie über Unterhaltsreinigung wissen müssen
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
            Bereit für professionelle Unterhaltsreinigung?
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
