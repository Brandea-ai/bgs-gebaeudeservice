import { Link } from 'wouter';
import { Factory, Shield, Clock, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function Industriereinigung() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professionelle Industriereinigung in Zürich, Zug und Luzern
            </h1>
            <p className="text-xl text-red-50 mb-8">
              Spezialisierte Reinigungslösungen für Industrieanlagen, Produktionshallen und Fertigungsbetriebe. Höchste Sicherheitsstandards und Effizienz mit Schweizer Präzision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+41413205610" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +41 41 320 56 10
              </a>
              <Link href="/kontakt" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Kostenlose Beratung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industriestandards</h3>
              <p className="text-gray-600">Spezialisiert auf Produktionsumgebungen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sicherheit</h3>
              <p className="text-gray-600">Zertifizierte Sicherheitsschulungen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Reinigung während Produktionspausen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Spezialisierte Reinigung für Industrieanlagen</h2>
              <p className="text-gray-600 mb-6">
                Industrielle Produktionsumgebungen stellen besondere Anforderungen an die Reinigung. Swiss Reinigungsfirma verfügt über die Expertise und Ausrüstung für die professionelle Reinigung von Industrieanlagen, Produktionshallen und Fertigungsbetrieben.
              </p>
              <p className="text-gray-600 mb-6">
                Unsere speziell geschulten Reinigungsteams arbeiten nach strengen Sicherheitsprotokollen und verstehen die besonderen Anforderungen industrieller Umgebungen. Wir minimieren Produktionsausfälle durch flexible Reinigungszeiten.
              </p>
              <Link href="/kontakt" className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2">
                Jetzt Beratungstermin vereinbaren
                <span>→</span>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/industrial-cleaning-1.jpg" 
                alt="Professionelle Industriereinigung" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Industriereinigungsleistungen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Produktionshallen-Reinigung',
                'Maschinen- und Anlagenreinigung',
                'Hochdruckreinigung von Böden',
                'Entstaubung und Luftfilterreinigung',
                'Ölflecken- und Chemikalienentfernung',
                'Lagerhallen-Reinigung',
                'Industrielle Fensterreinigung',
                'Spezialreinigung nach Norm'
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src="/industrial-cleaning-2.jpg" 
                alt="Industriereinigung Zürich" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Sicherheit und Effizienz in der Industriereinigung</h2>
              <p className="text-gray-600 mb-6">
                In industriellen Umgebungen ist Sicherheit oberste Priorität. Unsere Reinigungskräfte sind in Arbeitssicherheit geschult und verfügen über alle erforderlichen Zertifizierungen für die Arbeit in Produktionsumgebungen.
              </p>
              <p className="text-gray-600 mb-6">
                Wir verwenden spezialisierte Industriereinigungsgeräte und -methoden, um auch hartnäckige Verschmutzungen effizient zu entfernen. Von Ölflecken bis zu Produktionsrückständen – wir haben die Lösung.
              </p>
              <div className="space-y-4">
                <Link href="/business/hallenreinigung" className="text-red-600 hover:text-red-700 block">
                  → Hallenreinigung
                </Link>
                <Link href="/business/maschinenreinigung" className="text-red-600 hover:text-red-700 block">
                  → Maschinenreinigung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Häufig gestellte Fragen zur Industriereinigung</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Welche Sicherheitszertifikate haben Ihre Mitarbeiter?',
                  answer: 'Alle unsere Industriereinigungskräfte verfügen über SUVA-Sicherheitsschulungen und branchenspezifische Zertifizierungen. Sie sind in PSA (Persönliche Schutzausrüstung), Gefahrstoffhandling und Notfallprozeduren geschult.'
                },
                {
                  question: 'Können Sie während der Produktion reinigen?',
                  answer: 'Ja, wir können in Produktionspausen, Schichtwechseln oder außerhalb der Produktionszeiten reinigen. Wir passen uns flexibel Ihrem Produktionsplan an, um Ausfallzeiten zu minimieren.'
                },
                {
                  question: 'Welche Reinigungsmethoden verwenden Sie?',
                  answer: 'Wir setzen spezialisierte Industriereinigungsverfahren ein: Hochdruckreinigung, Dampfreinigung, chemische Spezialreinigung, Entstaubung und mehr. Die Methode wird individuell nach Art der Verschmutzung und Umgebung gewählt.'
                },
                {
                  question: 'Wie gehen Sie mit Gefahrstoffen um?',
                  answer: 'Unsere Teams sind im Umgang mit Gefahrstoffen geschult und arbeiten nach allen relevanten Sicherheitsvorschriften. Wir verfügen über die erforderlichen Genehmigungen und Versicherungen für die Arbeit mit industriellen Chemikalien.'
                },
                {
                  question: 'Bieten Sie auch Notfallreinigungen an?',
                  answer: 'Ja, wir bieten 24/7-Notfallreinigungen bei Produktionsunfällen, Verschüttungen oder anderen dringenden Reinigungsbedarfen. Unser Notfallteam ist innerhalb kürzester Zeit vor Ort.'
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-lg p-6">
                  <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-red-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für professionelle Industriereinigung?</h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und unverbindliches Angebot. Unsere Industriereinigungsexperten beraten Sie gerne.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center gap-2">
              Jetzt Kontakt aufnehmen
              <span>→</span>
            </Link>
            <a href="tel:+41413205610" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors">
              +41 41 320 56 10
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
