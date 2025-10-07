import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Sparkles, CheckCircle2, Star, Phone, Home, Wind, Trees, Droplet, Building, Wrench } from 'lucide-react'

// 1. UNTERHALTSREINIGUNG
export function UnterhaltsreinigungPage() {
  return (<div className="pt-20">
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto"><Badge className="mb-6 bg-white/20 text-white"><Home className="w-4 h-4 mr-2" />ESSENTIELL</Badge><h1 className="text-5xl md:text-7xl font-bold mb-6">Unterhaltsreinigung<br/><span className="text-white/90">Für Büros & Praxen</span></h1><p className="text-xl md:text-2xl text-white/90 mb-8">Regelmässige, zuverlässige Reinigung für Ihren Betrieb.</p><Button size="lg" className="bg-white text-[#10B981]"><Phone className="mr-2" />Jetzt anfragen</Button></div></section>
    <section className="py-20 px-4 bg-white"><div className=" mx-auto"><h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Was wir reinigen</h2><div className="grid md:grid-cols-4 gap-6">{["Büroräume", "Besprechungsräume", "Küchen", "Sanitäranlagen", "Eingangsbereiche", "Treppenhäuser", "Korridore", "Pausenräume"].map((item, i) => (<Card key={i}><CardContent className="pt-6"><CheckCircle2 className="h-10 w-10 text-[#10B981] mb-4" /><h3 className="font-bold">{item}</h3></CardContent></Card>))}</div></div></section>
    <section className="py-20 px-4 bg-gray-50"><div className=" mx-auto"><h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">Ablauf</h2><div className="grid md:grid-cols-5 gap-6">{["Bedarfsanalyse", "Angebot", "Terminplanung", "Regelmässige Reinigung", "Qualitätskontrolle"].map((step, i) => (<div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center"><div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">{i+1}</div><h3 className="font-bold">{step}</h3></div>))}</div></div></section>
    <section className="py-20 px-4 bg-gray-50"><div className=" mx-auto"><h2 className="text-4xl font-bold text-[#0A2540] text-center mb-12">FAQ</h2><div className="space-y-6">{[{q: "Wie oft sollte gereinigt werden?", a: "Empfohlen: 1-3x wöchentlich je nach Nutzung."},{q: "Reinigen Sie auch abends?", a: "Ja, bevorzugt ausserhalb der Geschäftszeiten."},{q: "Was ist im Preis enthalten?", a: "Alle Reinigungsmittel, Geräte und Personal."},{q: "Gibt es Vertragsbindung?", a: "Flexible Verträge ab 3 Monaten möglich."}].map((faq, i) => (<Card key={i}><CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader><CardContent><p className="text-gray-700">{faq.a}</p></CardContent></Card>))}</div></div></section>
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto text-center"><h2 className="text-4xl font-bold mb-6">Saubere Büros = Produktive Mitarbeiter</h2><Button size="lg" className="bg-white text-[#10B981]"><Phone className="mr-2" />+41 41 320 56 10</Button></div></section>
  </div>)
}

// 2. FENSTERREINIGUNG
export function FensterreinigungPage() {
  return (<div className="pt-20">
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto"><Badge className="mb-6 bg-white/20 text-white"><Sparkles className="w-4 h-4 mr-2" />ESSENTIELL</Badge><h1 className="text-5xl font-bold mb-6">Fensterreinigung<br/><span className="text-white/90">Streifenfrei sauber</span></h1><p className="text-xl mb-8">Professionelle Fensterreinigung für Gewerbe und Privat.</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section>
    <section className="py-20 px-4 bg-white"><div className=" mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Alle Fenstertypen</h2><div className="grid md:grid-cols-4 gap-6">{["Bürofenster", "Schaufenster", "Wintergärten", "Dachfenster", "Fassadenfenster", "Rahmen", "Jalousien", "Rollläden"].map((i, idx) => <Card key={idx}><CardContent className="pt-6"><h3 className="font-bold">{i}</h3></CardContent></Card>)}</div></div></section>
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto text-center"><h2 className="text-4xl font-bold mb-6">Klare Sicht = Mehr Licht</h2><Button size="lg" className="bg-white text-[#10B981]">+41 41 320 56 10</Button></div></section>
  </div>)
}

// 3. GARTENSERVICE
export function GartenservicePage() {
  return (<div className="pt-20">
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto"><Badge className="mb-6 bg-white/20 text-white"><Trees className="w-4 h-4 mr-2" />ESSENTIELL</Badge><h1 className="text-5xl font-bold mb-6">Gartenservice<br/><span className="text-white/90">Grünpflege & Unterhalt</span></h1><p className="text-xl mb-8">Professionelle Gartenpflege das ganze Jahr.</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section>
    <section className="py-20 px-4 bg-white"><div className=" mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Unsere Leistungen</h2><div className="grid md:grid-cols-4 gap-6">{["Rasenmähen", "Heckenschnitt", "Unkrautbekämpfung", "Laubentsorgung", "Beetpflege", "Baumschnitt", "Winterdienst", "Terrassenreinigung"].map((i, idx) => <Card key={idx}><CardContent className="pt-6"><h3 className="font-bold">{i}</h3></CardContent></Card>)}</div></div></section>
    <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto text-center"><h2 className="text-4xl font-bold mb-6">Ihr Garten in besten Händen</h2><Button size="lg" className="bg-white text-[#10B981]">+41 41 320 56 10</Button></div></section>
  </div>)
}

// 4-6: GRUNDREINIGUNG, HAUSMEISTERSERVICE, BÜROREINIGUNG (similar structure)
export function GrundreinigungPage() {
  return (<div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto"><h1 className="text-5xl font-bold mb-6">Grundreinigung</h1><p className="text-xl mb-8">Tiefenreinigung für alle Bereiche.</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section><section className="py-20 px-4 bg-white"><div className=" mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Was wir reinigen</h2><div className="grid md:grid-cols-4 gap-6">{["Böden", "Teppiche", "Polster", "Küchen", "Bäder", "Fenster", "Wände", "Decken"].map((i, idx) => <Card key={idx}><CardContent className="pt-6"><h3 className="font-bold">{i}</h3></CardContent></Card>)}</div></div></section></div>)
}

export function HausmeisterservicePage() {
  return (<div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto"><h1 className="text-5xl font-bold mb-6">Hausmeisterservice</h1><p className="text-xl mb-8">Ihr Allrounder für Gebäude-Unterhalt.</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section><section className="py-20 px-4 bg-white"><div className=" mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Unsere Services</h2><div className="grid md:grid-cols-4 gap-6">{["Kontrolldienst", "Kleinreparaturen", "Winterdienst", "Grünpflege", "Reinigung", "Abfallentsorgung", "Postdienst", "Notfalldienst"].map((i, idx) => <Card key={idx}><CardContent className="pt-6"><h3 className="font-bold">{i}</h3></CardContent></Card>)}</div></div></section></div>)
}

export function BüroreinigungPage() {
  return (<div className="pt-20"><section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white"><div className=" mx-auto"><h1 className="text-5xl font-bold mb-6">Büroreinigung</h1><p className="text-xl mb-8">Professionelle Reinigung für Ihr Büro.</p><Button size="lg" className="bg-white text-[#10B981]">Anfragen</Button></div></section><section className="py-20 px-4 bg-white"><div className=" mx-auto"><h2 className="text-4xl font-bold text-center mb-12">Leistungen</h2><div className="grid md:grid-cols-4 gap-6">{["Arbeitsplätze", "Besprechungsräume", "Küchen", "WCs", "Empfang", "Flure", "Fenster", "Müllentsorgung"].map((i, idx) => <Card key={idx}><CardContent className="pt-6"><h3 className="font-bold">{i}</h3></CardContent></Card>)}</div></div></section></div>)
}

export default { UnterhaltsreinigungPage, FensterreinigungPage, GartenservicePage, GrundreinigungPage, HausmeisterservicePage, BüroreinigungPage }
