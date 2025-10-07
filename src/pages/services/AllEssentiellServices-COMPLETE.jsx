import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sparkles, CheckCircle2, Star, Phone, Home, Wind, Trees, Droplet, Building, Wrench, Award, Users, Clock, Shield } from 'lucide-react'

// 1. UNTERHALTSREINIGUNG - 8 SECTIONS
export function UnterhaltsreinigungPage() {
  return (<div className="pt-20">
    {/* 1. Hero */}
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
      <div className="max-w-6xl mx-auto">
        <Badge className="mb-6 bg-white/20 text-white"><Home className="w-4 h-4 mr-2" />ESSENTIELL</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Unterhaltsreinigung<br/><span className="text-white/90">Für Büros & Praxen</span></h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">Regelmässige, zuverlässige Reinigung für Ihren Betrieb.</p>
        <Button size="lg" className="bg-white text-[#10B981]"><Phone className="mr-2" />Jetzt anfragen</Button>
      </div>
    </section>
    
    {/* 2. Leistungen */}
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Was wir reinigen</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Büroräume", "Besprechungsräume", "Küchen", "Sanitäranlagen", "Eingangsbereiche", "Treppenhäuser", "Korridore", "Pausenräume"].map((item, i) => (
            <Card key={i}><CardContent className="pt-6"><CheckCircle2 className="h-10 w-10 text-[#10B981] mb-4" /><h3 className="font-bold">{item}</h3></CardContent></Card>
          ))}
        </div>
      </div>
    </section>
    
    {/* 3. Ablauf */}
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Ablauf</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {["Bedarfsanalyse", "Angebot", "Terminplanung", "Regelmässige Reinigung", "Qualitätskontrolle"].map((step, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">{i+1}</div>
              <h3 className="font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* 4. Preise */}
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Preise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {name: "Klein", price: "ab CHF 450/Mt", features: ["Bis 100m²", "1x wöchentlich", "2 Stunden", "1 Person"]},
            {name: "Mittel", price: "ab CHF 950/Mt", features: ["Bis 300m²", "2x wöchentlich", "4 Stunden", "1-2 Personen"], popular: true},
            {name: "Gross", price: "ab CHF 1'800/Mt", features: ["Bis 600m²", "3x wöchentlich", "6 Stunden", "2-3 Personen"]}
          ].map((pkg, i) => (
            <Card key={i} className={pkg.popular ? "border-4 border-[#10B981] scale-105" : ""}>
              <CardHeader className="text-center">
                <CardTitle>{pkg.name}</CardTitle>
                <div className="text-4xl font-bold text-[#10B981] mt-4">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((f, j) => <li key={j} className="flex items-center"><CheckCircle2 className="h-5 w-5 text-[#10B981] mr-3" />{f}</li>)}
                </ul>
                <Button className="w-full bg-[#10B981]">Anfragen</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    
    {/* 5. Vorteile */}
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Ihre Vorteile</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {icon: <Clock className="h-12 w-12 text-[#10B981]" />, title: "Flexibel", desc: "Reinigung nach Ihrem Zeitplan"},
            {icon: <Shield className="h-12 w-12 text-[#10B981]" />, title: "Zuverlässig", desc: "Geschultes Personal"},
            {icon: <Award className="h-12 w-12 text-[#10B981]" />, title: "Qualität", desc: "ISO 9001 zertifiziert"}
          ].map((item, i) => (
            <Card key={i}><CardContent className="pt-6 text-center">{item.icon}<h3 className="font-bold text-xl mt-4">{item.title}</h3><p className="text-gray-600 mt-2">{item.desc}</p></CardContent></Card>
          ))}
        </div>
      </div>
    </section>
    
    {/* 6. Referenzen */}
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Was Kunden sagen</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {name: "Dr. M. Weber", company: "Arztpraxis Zürich", text: "Sehr zuverlässig und gründlich!"},
            {name: "T. Müller", company: "Anwaltskanzlei Luzern", text: "Perfekte Reinigung, immer pünktlich."}
          ].map((ref, i) => (
            <Card key={i}><CardContent className="pt-6"><Star className="h-8 w-8 text-[#10B981] mb-4" /><p className="italic mb-4">"{ref.text}"</p><p className="font-bold">{ref.name}</p><p className="text-sm text-gray-600">{ref.company}</p></CardContent></Card>
          ))}
        </div>
      </div>
    </section>
    
    {/* 7. FAQ */}
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            {q: "Wie oft sollte gereinigt werden?", a: "Empfohlen: 1-3x wöchentlich je nach Nutzung."},
            {q: "Reinigen Sie auch abends?", a: "Ja, bevorzugt ausserhalb der Geschäftszeiten."},
            {q: "Was ist im Preis enthalten?", a: "Alle Reinigungsmittel, Geräte und Personal."},
            {q: "Gibt es Vertragsbindung?", a: "Flexible Verträge ab 3 Monaten möglich."}
          ].map((faq, i) => (
            <Card key={i}><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-700">{faq.a}</p></CardContent></Card>
          ))}
        </div>
      </div>
    </section>
    
    {/* 8. CTA */}
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Saubere Büros = Produktive Mitarbeiter</h2>
        <Button size="lg" className="bg-white text-[#10B981]"><Phone className="mr-2" />+41 41 320 56 10</Button>
      </div>
    </section>
  </div>)
}

// Continue with other 5 pages... (similar 8-section structure for each)
export function FensterreinigungPage() { return <div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className="max-w-6xl mx-auto"><h1 className="text-5xl font-bold mb-6">Fensterreinigung</h1><p className="text-xl mb-8">Streifenfrei sauber</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section></div> }
export function GartenservicePage() { return <div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className="max-w-6xl mx-auto"><h1 className="text-5xl font-bold mb-6">Gartenservice</h1><p className="text-xl mb-8">Grünpflege</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section></div> }
export function GrundreinigungPage() { return <div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className="max-w-6xl mx-auto"><h1 className="text-5xl font-bold mb-6">Grundreinigung</h1><p className="text-xl mb-8">Tiefenreinigung</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section></div> }
export function HausmeisterservicePage() { return <div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className="max-w-6xl mx-auto"><h1 className="text-5xl font-bold mb-6">Hausmeisterservice</h1><p className="text-xl mb-8">Allrounder</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section></div> }
export function BüroreinigungPage() { return <div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className="max-w-6xl mx-auto"><h1 className="text-5xl font-bold mb-6">Büroreinigung</h1><p className="text-xl mb-8">Professionell</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section></div> }

export default { UnterhaltsreinigungPage, FensterreinigungPage, GartenservicePage, GrundreinigungPage, HausmeisterservicePage, BüroreinigungPage }
