import { Link } from 'wouter';
import { Building, Sparkles, Shield, CheckCircle2, Phone, Mail } from 'lucide-react';

export default function Fassadenreinigung() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Professionelle Fassadenreinigung in Zürich, Zug und Luzern
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-red-50 mb-8">
              Schonende und effektive Fassadenreinigung für Gebäude aller Art. Werterhalt durch professionelle Pflege mit modernster Technologie.
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Alle Fassadentypen</h3>
              <p className="text-gray-600">Glas, Stein, Putz, Metall und mehr</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Schonende Methoden</h3>
              <p className="text-gray-600">Materialgerechte Reinigungsverfahren</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Sicherheit</h3>
              <p className="text-gray-600">Zertifizierte Höhenarbeiter</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Werterhalt durch professionelle Fassadenreinigung</h2>
              <p className="text-gray-600 mb-6">
                Die Fassade ist das Aushängeschild Ihres Gebäudes. Regelmäßige professionelle Reinigung erhält nicht nur die Optik, sondern schützt auch die Bausubstanz vor Witterungseinflüssen und Verschmutzungen.
              </p>
              <p className="text-gray-600 mb-6">
                Swiss Reinigungsfirma verfügt über spezialisierte Teams für Fassadenreinigung mit modernster Ausrüstung und Sicherheitstechnik. Wir reinigen Fassaden aller Art – von Glasfronten bis zu historischen Gebäuden.
              </p>
              <Link href="/kontakt" className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-2">
                Jetzt Beratungstermin vereinbaren
                <span>→</span>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img src="/facade-cleaning-1.jpg" alt="Professionelle Fassadenreinigung" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12 text-center">Unsere Fassadenreinigungsleistungen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Glasfassaden-Reinigung',
                'Steinfassaden-Reinigung',
                'Putzfassaden-Reinigung',
                'Metallfassaden-Reinigung',
                'Hochdruckreinigung',
                'Graffiti-Entfernung',
                'Algen- und Moosbeseitigung',
                'Fassadenschutz-Behandlung'
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img src="/facade-cleaning-2.jpg" alt="Fassadenreinigung Zürich" className="w-full h-full object-cover"/>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Modernste Reinigungstechnologie für Ihre Fassade</h2>
              <p className="text-gray-600 mb-6">
                Wir setzen auf modernste Reinigungsverfahren, die materialschonend und gleichzeitig hocheffektiv sind. Von Niedrigdruck-Dampfreinigung bis zu speziellen Reinigungslösungen – wir wählen die optimale Methode für Ihre Fassade.
              </p>
              <p className="text-gray-600 mb-6">
                Unsere Höhenarbeiter sind speziell geschult und zertifiziert. Wir arbeiten mit Hebebühnen, Gerüsten oder Seilzugangstechnik – je nach Gebäude und Anforderung.
              </p>
              <div className="space-y-4">
                <Link href="/b2b/fensterreinigung" className="text-red-600 hover:text-red-700 block">
                  → Fensterreinigung
                </Link>
                <Link href="/b2b/bueroreinigung" className="text-red-600 hover:text-red-700 block">
                  → Büroreinigung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-12 text-center">Häufig gestellte Fragen zur Fassadenreinigung</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Wie oft sollte eine Fassade gereinigt werden?',
                  answer: 'Die Häufigkeit hängt von Standort, Witterung und Fassadentyp ab. Generell empfehlen wir eine professionelle Reinigung alle 2-3 Jahre. Stark exponierte Fassaden sollten häufiger gereinigt werden.'
                },
                {
                  question: 'Welche Reinigungsmethode ist die richtige?',
                  answer: 'Das hängt vom Fassadenmaterial ab. Wir analysieren Ihre Fassade und wählen die optimale Methode: Niedrigdruck-Dampfreinigung für empfindliche Oberflächen, Hochdruckreinigung für robuste Materialien oder chemische Reinigung bei hartnäckigen Verschmutzungen.'
                },
                {
                  question: 'Ist Fassadenreinigung gefährlich?',
                  answer: 'In professionellen Händen nicht. Unsere Höhenarbeiter sind speziell ausgebildet und zertifiziert. Wir verwenden modernste Sicherheitstechnik und arbeiten nach strengsten Sicherheitsstandards.'
                },
                {
                  question: 'Können Sie auch historische Gebäude reinigen?',
                  answer: 'Ja, wir haben Erfahrung mit denkmalgeschützten und historischen Gebäuden. Wir verwenden besonders schonende Verfahren und arbeiten eng mit Denkmalpflegern zusammen, um die Bausubstanz zu schützen.'
                },
                {
                  question: 'Was kostet eine Fassadenreinigung?',
                  answer: 'Die Kosten hängen von Fassadengröße, Verschmutzungsgrad, Zugänglichkeit und gewählter Reinigungsmethode ab. Kontaktieren Sie uns für eine kostenlose Besichtigung und ein unverbindliches Angebot.'
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

      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Bereit für professionelle Fassadenreinigung?</h2>
          <p className="text-sm sm:text-base md:text-lg text-red-50 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Besichtigung und unverbindliches Angebot. Unsere Fassadenexperten beraten Sie gerne.
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
