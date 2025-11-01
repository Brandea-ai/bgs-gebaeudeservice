import { Link } from 'wouter';
import { Building2, Clock, Shield, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function Bueroreinigung() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Professionelle Büroreinigung in Zürich, Zug und Luzern
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-red-50 mb-8">
              Erstklassige Reinigungsdienstleistungen für Büros und Geschäftsräume. Unsere erfahrenen Fachkräfte sorgen für ein sauberes, hygienisches und produktives Arbeitsumfeld mit Schweizer Präzision.
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
                <Building2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Professionelle Reinigung</h3>
              <p className="text-gray-600">Zertifizierte Fachkräfte mit langjähriger Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Flexible Zeiten</h3>
              <p className="text-gray-600">Reinigung außerhalb der Geschäftszeiten möglich</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Höchste Standards</h3>
              <p className="text-gray-600">ISO-zertifizierte Qualitätssicherung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassende Büroreinigung für produktive Arbeitsumgebungen</h2>
              <p className="text-gray-600 mb-6">
                Ein sauberes Büro ist die Grundlage für produktives Arbeiten und ein professionelles Erscheinungsbild. Swiss Reinigungsfirma bietet maßgeschneiderte Reinigungslösungen für Büros jeder Größe in Zürich, Zug und Luzern.
              </p>
              <p className="text-gray-600 mb-6">
                Unsere erfahrenen Reinigungskräfte arbeiten diskret und effizient, um Ihre Geschäftsabläufe nicht zu stören. Wir verwenden umweltfreundliche Reinigungsmittel und modernste Reinigungstechnologie für optimale Ergebnisse.
              </p>
              <Link href="/kontakt" className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2">
                Jetzt Beratungstermin vereinbaren
                <span>→</span>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/office-cleaning-1.jpg" 
                alt="Professionelle Büroreinigung" 
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
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12 text-center">Unsere Büroreinigungsleistungen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Tägliche Unterhaltsreinigung',
                'Schreibtisch- und Arbeitsplatzreinigung',
                'Sanitäranlagen-Reinigung und Desinfektion',
                'Küchen- und Pausenraumreinigung',
                'Boden- und Teppichpflege',
                'Fenster- und Glasreinigung',
                'Müllentstorgung und Recycling',
                'Desinfektionsservice'
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
                src="/office-cleaning-2.jpg" 
                alt="Büroreinigung Zürich" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Maßgeschneiderte Reinigungslösungen für Ihr Unternehmen</h2>
              <p className="text-gray-600 mb-6">
                Jedes Büro hat individuelle Anforderungen. Wir entwickeln gemeinsam mit Ihnen einen maßgeschneiderten Reinigungsplan, der perfekt auf Ihre Bedürfnisse und Ihr Budget abgestimmt ist.
              </p>
              <p className="text-gray-600 mb-6">
                Von kleinen Büros bis zu großen Geschäftskomplexen – unsere Reinigungsfirma verfügt über die Expertise und Kapazität für Projekte jeder Größenordnung. Profitieren Sie von unserer langjährigen Erfahrung und Schweizer Qualität.
              </p>
              <div className="space-y-4">
                <Link href="/b2b/facility-management" className="text-red-600 hover:text-red-700 block">
                  → Facility Management Services
                </Link>
                <Link href="/basis/unterhaltsreinigung" className="text-red-600 hover:text-red-700 block">
                  → Unterhaltsreinigung
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
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12 text-center">Häufig gestellte Fragen zur Büroreinigung</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Wie oft sollte ein Büro gereinigt werden?',
                  answer: 'Die Häufigkeit hängt von der Nutzung ab. Wir empfehlen für die meisten Büros eine tägliche Grundreinigung mit wöchentlicher Intensivreinigung. Wir erstellen einen individuellen Reinigungsplan für Ihre Bedürfnisse.'
                },
                {
                  question: 'Können Sie außerhalb der Geschäftszeiten reinigen?',
                  answer: 'Ja, wir bieten flexible Reinigungszeiten an. Die meisten unserer Büroreinigungen finden außerhalb der Geschäftszeiten statt, um Ihre Arbeitsabläufe nicht zu stören – abends, nachts oder am Wochenende.'
                },
                {
                  question: 'Welche Reinigungsmittel verwenden Sie?',
                  answer: 'Wir verwenden ausschließlich umweltfreundliche, zertifizierte Reinigungsmittel, die effektiv reinigen und gleichzeitig die Gesundheit Ihrer Mitarbeiter schützen. Alle Produkte entsprechen den höchsten Schweizer Standards.'
                },
                {
                  question: 'Wie wird die Qualität sichergestellt?',
                  answer: 'Wir führen regelmäßige Qualitätskontrollen durch und arbeiten mit digitalen Checklisten. Unsere Teamleiter überprüfen die Reinigungsqualität und Sie erhalten regelmäßige Berichte. Bei Bedarf passen wir den Service sofort an.'
                },
                {
                  question: 'Was kostet eine professionelle Büroreinigung?',
                  answer: 'Die Kosten hängen von der Bürogröße, Reinigungshäufigkeit und gewünschten Leistungen ab. Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot, das genau auf Ihre Anforderungen zugeschnitten ist.'
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
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Bereit für professionelle Büroreinigung?</h2>
          <p className="text-sm sm:text-base md:text-lg text-red-50 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und unverbindliches Angebot. Unsere Experten beraten Sie gerne.
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
