import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowRight, CheckCircle2, Briefcase, Droplets, Leaf, Spray, Wrench, Building2 } from 'lucide-react'

// Unterhaltsreinigung - Task 12
export function UnterhaltsreinigungPage() {
  return (
    <>
      <div className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
          <div className=" mx-auto">
            <Badge className="mb-6 bg-white/20 text-white"><Briefcase className="w-4 h-4 mr-2" />Essentiell</Badge>
            <h1 className="text-5xl font-bold mb-6">Unterhaltsreinigung</h1>
            <p className="text-xl text-white/90">Regelmäßige, zuverlässige Reinigung für Büros, Praxen und KMU.</p>
          </div>
        </section>
        <section className="py-20 px-4 bg-white">
          <div className=" mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card><CardHeader><Briefcase className="h-10 w-10 text-[#10B981] mb-4" /><CardTitle>Büroreinigung</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Schreibtische & Oberflächen</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Böden & Teppiche</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Küche & Pausenraum</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Sanitäranlagen</li>
              </ul></CardContent></Card>
              <Card><CardHeader><Building2 className="h-10 w-10 text-[#10B981] mb-4" /><CardTitle>Praxisreinigung</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Wartezimmer</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Behandlungsräume</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Desinfektion</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Hygiene-Standards</li>
              </ul></CardContent></Card>
              <Card><CardHeader><CheckCircle2 className="h-10 w-10 text-[#10B981] mb-4" /><CardTitle>Flexibilität</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Täglich, wöchentlich</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Nach Feierabend</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Wochenende</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Individuelle Zeiten</li>
              </ul></CardContent></Card>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">Preise ab CHF 45/Stunde</h3>
              <p className="text-center text-gray-600">Individuelle Pakete auf Anfrage</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Zuverlässig sauber, jeden Tag</h2>
            <Link to="/kontakt"><Button size="lg" className="bg-white text-[#10B981] hover:bg-gray-100">Angebot anfragen<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  )
}

// Fensterreinigung - Task 13
export function FensterreinigungPage() {
  return (
    <>
      <div className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
          <div className=" mx-auto">
            <Badge className="mb-6 bg-white/20 text-white"><Droplets className="w-4 h-4 mr-2" />Essentiell</Badge>
            <h1 className="text-5xl font-bold mb-6">Fensterreinigung</h1>
            <p className="text-xl text-white/90">Streifenfreie Sauberkeit für Fenster, Glasfassaden und Wintergärten.</p>
          </div>
        </section>
        <section className="py-20 px-4 bg-white">
          <div className=" mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card><CardHeader><Droplets className="h-10 w-10 text-[#10B981] mb-4" /><CardTitle>Privathaushalt</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Wohnungsfenster</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Wintergarten</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Dachfenster</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Rahmenreinigung</li>
              </ul></CardContent></Card>
              <Card><CardHeader><Building2 className="h-10 w-10 text-[#10B981] mb-4" /><CardTitle>Gewerbe</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Bürogebäude</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Geschäfte</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Glasfassaden</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Hochhäuser</li>
              </ul></CardContent></Card>
              <Card><CardHeader><CheckCircle2 className="h-10 w-10 text-[#10B981] mb-4" /><CardTitle>Spezial</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Industriekletterer</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Hebebühne</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Reinwasser-Technik</li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#10B981] mt-0.5" />Nano-Versiegelung</li>
              </ul></CardContent></Card>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">Preise ab CHF 4.50/m²</h3>
              <p className="text-center text-gray-600">Mengenrabatt bei großen Flächen</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Kristallklare Fenster garantiert</h2>
            <Link to="/kontakt"><Button size="lg" className="bg-white text-[#10B981] hover:bg-gray-100">Jetzt anfragen<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  )
}


// Gartenservice
export function GartenservicePage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Essentiell</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gartenservice</h1>
          <p className="text-xl text-white/90">Professionelle Gartenpflege das ganze Jahr über.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Unsere Gartenleistungen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardHeader><CardTitle>Rasenpflege</CardTitle></CardHeader><CardContent><p>Mähen, Düngen, Vertikutieren.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Heckenschnitt</CardTitle></CardHeader><CardContent><p>Professioneller Formschnitt.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Winterdienst</CardTitle></CardHeader><CardContent><p>Schneeräumung und Salzstreuen.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Grundreinigung
export function GrundreinigungPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Essentiell</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Grundreinigung</h1>
          <p className="text-xl text-white/90">Intensive Tiefenreinigung für alle Bereiche.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Was wir reinigen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card><CardHeader><CardTitle>Böden</CardTitle></CardHeader><CardContent><p>Alle Bodenbeläge intensiv gereinigt.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Sanitär</CardTitle></CardHeader><CardContent><p>Badezimmer und WCs hygienisch sauber.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Hausmeisterservice
export function HausmeisterservicePage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Essentiell</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hausmeisterservice</h1>
          <p className="text-xl text-white/90">Ihr zuverlässiger Hausmeister für alle Aufgaben.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Unsere Hausmeister-Leistungen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardHeader><CardTitle>Kontrolldienst</CardTitle></CardHeader><CardContent><p>Regelmässige Objektkontrollen.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Kleinreparaturen</CardTitle></CardHeader><CardContent><p>Schnelle Hilfe bei kleinen Defekten.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Winterdienst</CardTitle></CardHeader><CardContent><p>Schneeräumung und Streuen.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Büroreinigung
export function BueroreinigungPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#10B981] to-[#059669] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Essentiell</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Büroreinigung</h1>
          <p className="text-xl text-white/90">Professionelle Reinigung für Ihr Büro – täglich, wöchentlich oder nach Bedarf.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Was wir reinigen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardHeader><CardTitle>Arbeitsplätze</CardTitle></CardHeader><CardContent><p>Schreibtische, Stühle, Regale.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Böden</CardTitle></CardHeader><CardContent><p>Staubsaugen und Wischen.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Sanitär</CardTitle></CardHeader><CardContent><p>WCs und Waschräume.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}
