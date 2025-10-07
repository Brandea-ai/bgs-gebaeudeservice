import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sparkles, Shield, Clock, CheckCircle2, Star, Award, Phone, Mail, Building, PartyPopper, Users, Crown } from 'lucide-react'

// LUXUSIMMOBILIEN-REINIGUNG
export function LuxusimmobilienPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><Building className="w-4 h-4 mr-2" />PREMIUM IMMOBILIEN-SERVICE</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Luxusimmobilien-Reinigung<br/><span className="text-white/90">Exzellenz in jedem Detail</span></h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Professionelle Pflege für Villen, Penthäuser und exklusive Immobilien.</p>
          <Button size="lg" className="bg-white text-[#C5A572]"><Phone className="mr-2" />Beratung anfragen</Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2540]">Umfassende Immobilien-Pflege</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Innenreinigung", "Marmor & Naturstein", "Parkettaufbereitung", "Fenster & Fassaden", "Pool-Reinigung", "Gartenpflege", "Wellness-Bereich", "Smart-Home-Pflege"].map((item, i) => (
              <Card key={i} className="hover:shadow-xl"><CardContent className="pt-6"><CheckCircle2 className="h-10 w-10 text-[#C5A572] mb-4" /><h3 className="font-bold text-lg">{item}</h3></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Unser Service-Prozess</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {["Objektbesichtigung", "Pflegeplan erstellen", "Team-Zusammenstellung", "Regelmässige Pflege", "Qualitätssicherung"].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">{i+1}</div>
                <h3 className="font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Preismodelle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: "Penthouse", price: "ab CHF 3'500/Mt", features: ["Bis 200m²", "Wöchentlich", "2 Personen", "4-6 Stunden"]},
              {name: "Villa", price: "ab CHF 8'500/Mt", features: ["Bis 500m²", "2x wöchentlich", "3-4 Personen", "Garten inkl."], popular: true},
              {name: "Anwesen", price: "auf Anfrage", features: ["500m²+", "Individuell", "Vollservice", "Live-in möglich"]}
            ].map((pkg, i) => (
              <Card key={i} className={pkg.popular ? "border-4 border-[#C5A572] scale-105" : ""}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#C5A572] mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f, j) => <li key={j} className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#C5A572] mr-3" />{f}</li>)}
                  </ul>
                  <Button className="w-full bg-[#C5A572]">Anfragen</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Ihre Vorteile</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: Shield, title: "Höchste Diskretion", desc: "NDA & Background-Check"},
              {icon: Award, title: "Spezialisiertes Team", desc: "Experten für Luxus-Immobilien"},
              {icon: Clock, title: "Flexible Zeiten", desc: "Nach Ihrem Zeitplan"},
              {icon: Sparkles, title: "Premium-Produkte", desc: "Nur das Beste für Ihre Immobilie"},
              {icon: CheckCircle2, title: "Qualitätsgarantie", desc: "100% Zufriedenheit"},
              {icon: Crown, title: "Concierge-Service", desc: "Zusatzleistungen auf Wunsch"}
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl"><CardHeader><item.icon className="h-12 w-12 text-[#C5A572] mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{item.desc}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Kundenstimmen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: "Familie W.", text: "Unsere Villa wird perfekt gepflegt. Absolut zuverlässig!", rating: 5},
              {name: "Dr. S.", text: "Höchste Qualität und Diskretion. Sehr empfehlenswert.", rating: 5},
              {name: "M. & K. L.", text: "Endlich ein Service, der unseren Ansprüchen gerecht wird!", rating: 5}
            ].map((t, i) => (
              <Card key={i} className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-[#C5A572] text-[#C5A572]" />)}</div>
                  <p className="italic mb-4">"{t.text}"</p>
                  <p className="font-bold">{t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Häufige Fragen</h2>
          <div className="space-y-6">
            {[
              {q: "Wie oft sollte gereinigt werden?", a: "Empfohlen: 1-2x wöchentlich je nach Nutzung und Grösse."},
              {q: "Sind Ihre Mitarbeiter versichert?", a: "Ja, vollumfänglich mit CHF 5 Mio. Haftpflicht."},
              {q: "Können Sie auch Zweitwohnsitze betreuen?", a: "Ja, auch bei Abwesenheit mit regelmässiger Kontrolle."},
              {q: "Welche Zusatzleistungen bieten Sie?", a: "Gartenpflege, Pool-Service, Winterdienst, Hausmeister-Service."}
            ].map((faq, i) => (
              <Card key={i}><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-700">{faq.a}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ihre Immobilie verdient Perfektion</h2>
          <p className="text-xl mb-8">Lassen Sie uns Ihre Luxusimmobilie in neuem Glanz erstrahlen.</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#C5A572]"><Phone className="mr-2" />+41 41 320 56 10</Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white"><Mail className="mr-2" />Anfrage senden</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// VIP-EVENT-SERVICE
export function VIPEventServicePage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><PartyPopper className="w-4 h-4 mr-2" />PREMIUM EVENT-SERVICE</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">VIP-Event-Service<br/><span className="text-white/90">Perfektion für Ihre Veranstaltung</span></h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Professioneller Reinigungs- und Service-Support für exklusive Events.</p>
          <Button size="lg" className="bg-white text-[#C5A572]"><Phone className="mr-2" />Event planen</Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2540]">Umfassender Event-Support</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["Vor-Event-Reinigung", "Event-Betreuung", "Laufende Pflege", "Nach-Event-Reinigung", "Gäste-WC-Service", "Catering-Unterstützung", "Garderobe-Service", "Notfall-Support"].map((item, i) => (
              <Card key={i} className="hover:shadow-xl"><CardContent className="pt-6"><CheckCircle2 className="h-10 w-10 text-[#C5A572] mb-4" /><h3 className="font-bold text-lg">{item}</h3></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Event-Ablauf</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {["Vorbesprechung", "Vor-Event-Setup", "Event-Begleitung", "Laufende Betreuung", "Endreinigung"].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">{i+1}</div>
                <h3 className="font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Event-Pakete</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: "Privat-Event", price: "ab CHF 1'500", features: ["Bis 50 Gäste", "Vor & Nach", "4 Stunden", "2 Personen"]},
              {name: "Business-Event", price: "ab CHF 3'500", features: ["Bis 150 Gäste", "Vollbetreuung", "8 Stunden", "4-6 Personen"], popular: true},
              {name: "Gala-Event", price: "auf Anfrage", features: ["150+ Gäste", "Premium-Service", "Ganztägig", "Individuell"]}
            ].map((pkg, i) => (
              <Card key={i} className={pkg.popular ? "border-4 border-[#C5A572] scale-105" : ""}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#C5A572] mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((f, j) => <li key={j} className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#C5A572] mr-3" />{f}</li>)}
                  </ul>
                  <Button className="w-full bg-[#C5A572]">Buchen</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Warum BGS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: Users, title: "Erfahrenes Team", desc: "Spezialisiert auf VIP-Events"},
              {icon: Clock, title: "24/7 Verfügbar", desc: "Auch kurzfristig buchbar"},
              {icon: Shield, title: "Diskret & Zuverlässig", desc: "Höchste Professionalität"},
              {icon: Award, title: "Premium-Ausstattung", desc: "Modernste Geräte"},
              {icon: CheckCircle2, title: "Flexible Pakete", desc: "Individuell anpassbar"},
              {icon: Star, title: "Referenzen", desc: "Zahlreiche erfolgreiche Events"}
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl"><CardHeader><item.icon className="h-12 w-12 text-[#C5A572] mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader><CardContent><p className="text-gray-600">{item.desc}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Erfolgreiche Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: "Event-Agentur Z.", text: "BGS ist unser Partner für alle VIP-Events. Absolut verlässlich!", rating: 5},
              {name: "Hochzeitsplaner M.", text: "Perfekter Service, unsichtbar und doch immer präsent.", rating: 5},
              {name: "Firma K.", text: "Unsere Firmen-Gala war dank BGS ein voller Erfolg!", rating: 5}
            ].map((t, i) => (
              <Card key={i} className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-[#C5A572] text-[#C5A572]" />)}</div>
                  <p className="italic mb-4">"{t.text}"</p>
                  <p className="font-bold">{t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">FAQ</h2>
          <div className="space-y-6">
            {[
              {q: "Wie kurzfristig können Sie buchen?", a: "Bei Verfügbarkeit auch 48 Stunden im Voraus."},
              {q: "Welche Events betreuen Sie?", a: "Hochzeiten, Galas, Firmen-Events, Privat-Feiern, Messen."},
              {q: "Arbeiten Sie mit Event-Agenturen?", a: "Ja, wir sind Partner vieler Event-Agenturen in der Schweiz."},
              {q: "Können Sie auch Outdoor-Events betreuen?", a: "Ja, wir haben Erfahrung mit Outdoor- und Zelt-Events."}
            ].map((faq, i) => (
              <Card key={i}><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-700">{faq.a}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ihr Event verdient Perfektion</h2>
          <p className="text-xl mb-8">Lassen Sie uns Ihr Event zum unvergesslichen Erlebnis machen.</p>
          <Button size="lg" className="bg-white text-[#C5A572]"><Phone className="mr-2" />+41 41 320 56 10</Button>
        </div>
      </section>
    </div>
  )
}

export default { LuxusimmobilienPage, VIPEventServicePage }
