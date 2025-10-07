import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Building2, CheckCircle2, Star, Phone, Clock, Shield, Award, Users, Zap, TrendingUp } from 'lucide-react'

export function HallenreinigungPage() {
  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-[#00D4FF]/20 text-[#00D4FF]">
            <Building2 className="w-4 h-4 mr-2" />
            STANDARD B2B
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hallenreinigung<br/>
            <span className="text-[#00D4FF]">für Industrie & Logistik</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Professionelle Reinigung von Produktions-, Lager- und Logistikhallen. 
            Schnell, gründlich und ohne Betriebsunterbrechung.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#00D4FF] text-[#0A2540] hover:bg-[#00c4ef]">
              <Phone className="mr-2" />
              Jetzt anfragen
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Angebot einholen
            </Button>
          </div>
        </div>
      </section>

      {/* 2. LEISTUNGSÜBERSICHT */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#0A2540] text-white">Unsere Leistungen</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Komplette Hallenreinigung
            </h2>
            <p className="text-xl text-gray-600">
              Von Böden über Regale bis zur Decke – wir reinigen alle Bereiche Ihrer Halle professionell.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Bodenreinigung", "Hochregalreinigung", "Entstaubung", "Rampenreinigung",
              "Sozialräume", "Bürobereiche", "Sanitäranlagen", "Außenanlagen"
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-10 w-10 text-[#00D4FF] mb-4" />
                  <h3 className="font-bold text-lg">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROZESS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-16">Unser Prozess</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {step: 1, title: "Besichtigung", desc: "Vor-Ort-Analyse"},
              {step: 2, title: "Angebot", desc: "Transparente Preise"},
              {step: 3, title: "Planung", desc: "Zeitplan erstellen"},
              {step: 4, title: "Reinigung", desc: "Professionelle Ausführung"},
              {step: 5, title: "Kontrolle", desc: "Qualitätssicherung"}
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-[#00D4FF] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREISE */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-16">Preise & Pakete</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic", 
                features: ["Bis 500m²", "1x wöchentlich", "Bodenreinigung", "Sanitäranlagen", "Sozialräume"]
              },
              {
                name: "Professional", 
                features: ["Bis 1'500m²", "2x wöchentlich", "Komplettreinigung", "Entstaubung", "Hochregale", "Rampen"], 
                popular: true
              },
              {
                name: "Premium", 
                features: ["Bis 3'000m²", "3x wöchentlich", "Vollservice", "24/7 Notdienst", "Spezialreinigung", "Außenanlagen"]
              }
            ].map((pkg, i) => (
              <Card key={i} className={pkg.popular ? "border-4 border-[#00D4FF] scale-105 shadow-2xl" : "shadow-lg"}>
                <CardHeader className="text-center">
                  {pkg.popular && <Badge className="mb-4 bg-[#00D4FF] text-white">BELIEBT</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#0A2540] mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-[#00D4FF] mr-3 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#0A2540] hover:bg-[#1a3a5f]">Jetzt anfragen</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VORTEILE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-16">Warum BGS?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {icon: <Clock className="h-12 w-12 text-[#00D4FF]" />, title: "Flexibel", desc: "Reinigung auch nachts & am Wochenende"},
              {icon: <Shield className="h-12 w-12 text-[#00D4FF]" />, title: "Sicher", desc: "Geschultes Personal mit Sicherheitszertifikat"},
              {icon: <Zap className="h-12 w-12 text-[#00D4FF]" />, title: "Schnell", desc: "Effiziente Prozesse ohne Betriebsunterbrechung"},
              {icon: <Award className="h-12 w-12 text-[#00D4FF]" />, title: "Zertifiziert", desc: "ISO 9001 & ISO 14001"}
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  {item.icon}
                  <h3 className="font-bold text-xl mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REFERENZEN */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-16">Zufriedene Kunden</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: "Swiss Logistics AG", text: "Professionell und zuverlässig. Unsere 8'000m² Halle ist immer perfekt sauber!", rating: 5},
              {name: "Produktions GmbH", text: "Flexible Zeiten, keine Betriebsunterbrechung. Top Service!", rating: 5},
              {name: "Lager Zentrum Zürich", text: "Seit 3 Jahren unser Partner. Immer pünktlich und gründlich.", rating: 5}
            ].map((ref, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(ref.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-[#00D4FF] fill-current" />
                    ))}
                  </div>
                  <p className="italic text-gray-700 mb-4">"{ref.text}"</p>
                  <p className="font-bold text-[#0A2540]">{ref.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-16">Häufige Fragen</h2>
          <div className="space-y-6">
            {[
              {q: "Reinigen Sie auch während des Betriebs?", a: "Ja, wir passen uns Ihren Betriebszeiten an und reinigen bevorzugt in Randzeiten oder nachts."},
              {q: "Welche Maschinen verwenden Sie?", a: "Professionelle Industriesauger, Kehrmaschinen und Scheuersaugmaschinen für große Flächen."},
              {q: "Wie schnell können Sie starten?", a: "Nach Besichtigung und Angebot können wir innerhalb von 1-2 Wochen starten."},
              {q: "Gibt es einen Notdienst?", a: "Ja, im Premium-Paket ist ein 24/7 Notdienst inklusive."},
              {q: "Sind Sie versichert?", a: "Ja, wir haben eine umfassende Betriebshaftpflichtversicherung."},
              {q: "Welche Branchen bedienen Sie?", a: "Logistik, Produktion, E-Commerce, Automotive, Pharma und mehr."}
            ].map((faq, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
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

      {/* 8. CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <TrendingUp className="h-16 w-16 text-[#00D4FF] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Saubere Hallen = Effiziente Prozesse
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Kostenlose Besichtigung und unverbindliches Angebot innerhalb von 24h
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#00D4FF] text-[#0A2540] hover:bg-[#00c4ef] text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              +41 41 320 56 10
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              E-Mail senden
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HallenreinigungPage
