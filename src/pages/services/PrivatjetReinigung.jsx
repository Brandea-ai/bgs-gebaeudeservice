import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Sparkles, Shield, Clock, CheckCircle2, Star, Award, 
  Phone, Mail, ArrowRight, Plane, Users, Calendar 
} from 'lucide-react'

export function PrivatjetReinigungPage() {
  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#C5A572] via-[#d4b583] to-[#C5A572] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            PREMIUM LUXUS-SERVICE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Privatjet-Reinigung<br/>
            <span className="text-white/90">der Extraklasse</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mb-8">
            Diskreter, professioneller Reinigungsservice für Privatjets und Business-Jets. 
            Höchste Standards für anspruchsvolle Kunden.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100 text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anfragen
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

      {/* 2. LEISTUNGSÜBERSICHT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Unsere Leistungen</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Umfassende Jet-Reinigung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Kabine bis zum Cockpit – wir reinigen jeden Bereich Ihres Jets 
              mit höchster Präzision und Diskretion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Kabinenreinigung", desc: "Sitze, Teppiche, Verkleidungen" },
              { icon: Shield, title: "Cockpit-Pflege", desc: "Instrumententafel, Displays" },
              { icon: Sparkles, title: "Sanitäranlagen", desc: "Toiletten, Waschbecken" },
              { icon: Star, title: "Galley-Reinigung", desc: "Küche, Arbeitsflächen" },
              { icon: CheckCircle2, title: "Fensterreinigung", desc: "Innen und aussen" },
              { icon: Award, title: "Lederaufbereitung", desc: "Sitze und Verkleidungen" },
              { icon: Clock, title: "Teppichreinigung", desc: "Tiefenreinigung" },
              { icon: Users, title: "Aussenpolitur", desc: "Rumpf-Reinigung" }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-[#C5A572]">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-[#C5A572] mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROZESS/ABLAUF */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Unser Prozess</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              So läuft die Reinigung ab
            </h2>
            <p className="text-xl text-gray-600">
              Professionell, diskret und effizient – in 5 Schritten zum perfekten Ergebnis.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Terminvereinbarung", desc: "Flexible Planung nach Ihrem Flugplan" },
              { step: "2", title: "Vorab-Inspektion", desc: "Zustandserfassung und Bedarfsanalyse" },
              { step: "3", title: "Professionelle Reinigung", desc: "Mit Spezialgeräten und -mitteln" },
              { step: "4", title: "Qualitätskontrolle", desc: "Gründliche Überprüfung aller Bereiche" },
              { step: "5", title: "Freigabe", desc: "Jet ist bereit für den nächsten Flug" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#C5A572]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C5A572] to-[#d4b583] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#0A2540] mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#C5A572]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREISE/PAKETE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Preise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Transparente Preisgestaltung
            </h2>
            <p className="text-xl text-gray-600">
              Individuelle Angebote basierend auf Jet-Typ und Umfang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Light Jet",
                price: "CHF 2'500",
                features: ["Bis 8 Passagiere", "Kabinenreinigung", "Cockpit-Pflege", "Sanitäranlagen", "2-3 Stunden"],
                popular: false
              },
              {
                name: "Mid-Size Jet",
                price: "CHF 4'500",
                features: ["Bis 12 Passagiere", "Vollreinigung", "Lederaufbereitung", "Galley-Reinigung", "3-4 Stunden"],
                popular: true
              },
              {
                name: "Heavy Jet",
                price: "CHF 7'500",
                features: ["Bis 16+ Passagiere", "Premium-Reinigung", "Aussenpolitur", "Spezialbehandlung", "5-6 Stunden"],
                popular: false
              }
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-4 border-[#C5A572] shadow-2xl scale-105' : 'border-2'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#C5A572] text-white px-4 py-1">BELIEBT</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#C5A572]">{pkg.price}</div>
                  <p className="text-gray-600 mt-2">pro Reinigung</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-[#C5A572] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-[#C5A572] hover:bg-[#b89562] text-white">
                    Jetzt buchen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VORTEILE/BENEFITS */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Ihre Vorteile</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Warum BGS wählen?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Absolute Diskretion",
                desc: "Vertraulichkeitsvereinbarung und Background-Check aller Mitarbeiter"
              },
              {
                icon: Award,
                title: "Zertifizierte Experten",
                desc: "Speziell geschultes Personal für Luftfahrt-Reinigung"
              },
              {
                icon: Clock,
                title: "24/7 Verfügbarkeit",
                desc: "Reinigung nach Ihrem Flugplan, auch nachts und am Wochenende"
              },
              {
                icon: Sparkles,
                title: "Premium-Produkte",
                desc: "Hochwertige, luftfahrtzugelassene Reinigungsmittel"
              },
              {
                icon: CheckCircle2,
                title: "Qualitätsgarantie",
                desc: "100% Zufriedenheitsgarantie oder kostenlose Nachbesserung"
              },
              {
                icon: Star,
                title: "Versicherungsschutz",
                desc: "Vollumfängliche Haftpflichtversicherung bis CHF 10 Mio."
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-[#C5A572] mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REFERENZEN/TESTIMONIALS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Kundenstimmen</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Was unsere Kunden sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Thomas M.",
                role: "Jet-Besitzer, Zürich",
                text: "Absolut professionell und diskret. Mein Gulfstream G650 war noch nie so sauber!",
                rating: 5
              },
              {
                name: "Sarah K.",
                role: "Charter-Unternehmen, Genf",
                text: "BGS ist unser Partner für alle Jets. Zuverlässig, schnell und perfekte Qualität.",
                rating: 5
              },
              {
                name: "Michael R.",
                role: "Business-Jet-Pilot",
                text: "Die Crew ist begeistert! Cockpit und Kabine glänzen nach jeder Reinigung.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#C5A572] text-[#C5A572]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-[#0A2540]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Wie lange dauert eine Jet-Reinigung?",
                a: "Je nach Grösse des Jets zwischen 2-6 Stunden. Light Jets ca. 2-3h, Heavy Jets 5-6h."
              },
              {
                q: "Können Sie auch kurzfristig reinigen?",
                a: "Ja, wir bieten einen 24/7 Express-Service mit 4 Stunden Vorlaufzeit an."
              },
              {
                q: "Welche Flughäfen bedienen Sie?",
                a: "Zürich, Genf, Bern-Belp, St. Gallen-Altenrhein, Lugano und alle Privatflughäfen in der Schweiz."
              },
              {
                q: "Sind Ihre Mitarbeiter überprüft?",
                a: "Ja, alle Mitarbeiter haben einen Background-Check und unterschreiben eine Vertraulichkeitsvereinbarung."
              },
              {
                q: "Welche Reinigungsmittel verwenden Sie?",
                a: "Ausschliesslich luftfahrtzugelassene, hochwertige Produkte die Materialien nicht beschädigen."
              },
              {
                q: "Bieten Sie auch Aussenpolitur an?",
                a: "Ja, wir bieten professionelle Rumpf-Reinigung und Politur als Zusatzleistung an."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-[#0A2540]">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL-TO-ACTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kontaktieren Sie uns für ein unverbindliches Angebot für Ihren Privatjet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100 text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              +41 41 320 56 10
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Anfrage senden
            </Button>
          </div>
          <p className="mt-8 text-white/80">
            Antwortzeit: Innerhalb von 2 Stunden • 24/7 erreichbar
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrivatjetReinigungPage
