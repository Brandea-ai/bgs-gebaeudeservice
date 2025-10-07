import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  ArrowRight, CheckCircle2, Building2, Phone, Factory, Wrench, Spray
} from 'lucide-react'
import { motion } from 'framer-motion'

// Hallenreinigung - Task 6
export function HallenreinigungPage() {
  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Factory className="w-4 h-4 mr-2" />
              Standard B2B
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hallenreinigung</h1>
            <p className="text-xl text-white/90 leading-relaxed ">
              Effiziente Reinigung von Produktions-, Lager- und Logistikhallen. 
              Spezialisiert auf große Flächen mit modernster Reinigungstechnik.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className=" mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Factory className="h-10 w-10 text-[#0A2540] mb-4" />
                  <CardTitle>Bodenreinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Industrieboden-Reinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Epoxidharz-Pflege</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Kehrmaschinen-Einsatz</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Beschichtung & Versiegelung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 text-[#0A2540] mb-4" />
                  <CardTitle>Halleninfrastruktur</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Regale & Lagersysteme</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Tore & Rampen</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Fenster & Oberlichter</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Sanitäranlagen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-[#0A2540] mb-4" />
                  <CardTitle>Zusatzleistungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Hochdruckreinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Entstaubung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Winterdienst</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Notfall-Reinigung</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <p className="text-center text-gray-600 mb-8">Preise pro m² bei regelmäßiger Reinigung</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Basis-Reinigung</h4>
                  <p className="text-sm text-gray-600 mb-4">Wöchentlich</p>
                  <p className="text-4xl font-bold text-[#0A2540] mb-4">CHF 0.85</p>
                  <p className="text-sm text-gray-600">pro m²</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#0A2540]">
                  <Badge className="mb-2 bg-[#0A2540] text-white">Empfohlen</Badge>
                  <h4 className="font-bold text-xl mb-2">Standard-Reinigung</h4>
                  <p className="text-sm text-gray-600 mb-4">2-3x pro Woche</p>
                  <p className="text-4xl font-bold text-[#0A2540] mb-4">CHF 1.20</p>
                  <p className="text-sm text-gray-600">pro m²</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Intensiv-Reinigung</h4>
                  <p className="text-sm text-gray-600 mb-4">Täglich</p>
                  <p className="text-4xl font-bold text-[#0A2540] mb-4">CHF 1.80</p>
                  <p className="text-sm text-gray-600">pro m²</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-6">* Mindestfläche 500m². Preise zzgl. MwSt.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Große Flächen, perfekte Sauberkeit</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für ein unverbindliches Angebot</p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">
                Jetzt Angebot anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

// Maschinenreinigung - Task 7
export function MaschinenreinigungPage() {
  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Wrench className="w-4 h-4 mr-2" />
              Standard B2B
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Maschinenreinigung</h1>
            <p className="text-xl text-white/90 leading-relaxed ">
              Fachgerechte Reinigung von Produktionsanlagen, CNC-Maschinen und Industrieanlagen. 
              Spezialisiert auf Öl, Fett und hartnäckige Verschmutzungen.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className=" mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Wrench className="h-10 w-10 text-[#0A2540] mb-4" />
                  <CardTitle>Produktionsanlagen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />CNC-Maschinen</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Pressen & Stanzen</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Förderbänder</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Roboter-Anlagen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Factory className="h-10 w-10 text-[#0A2540] mb-4" />
                  <CardTitle>Spezialreinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Öl & Fett-Entfernung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Kühlmittel-Reinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Späne-Entfernung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Entfettung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-[#0A2540] mb-4" />
                  <CardTitle>Wartung & Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Regelmäßige Wartung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Stillstands-Reinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Notfall-Service</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#0A2540] flex-shrink-0 mt-0.5" />Dokumentation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Basis-Reinigung</h4>
                  <p className="text-sm text-gray-600 mb-4">Externe Reinigung</p>
                  <p className="text-4xl font-bold text-[#0A2540] mb-4">ab CHF 180</p>
                  <p className="text-sm text-gray-600">pro Maschine</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#0A2540]">
                  <Badge className="mb-2 bg-[#0A2540] text-white">Beliebt</Badge>
                  <h4 className="font-bold text-xl mb-2">Standard-Reinigung</h4>
                  <p className="text-sm text-gray-600 mb-4">Innen & Außen</p>
                  <p className="text-4xl font-bold text-[#0A2540] mb-4">ab CHF 450</p>
                  <p className="text-sm text-gray-600">pro Maschine</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Intensiv-Reinigung</h4>
                  <p className="text-sm text-gray-600 mb-4">Komplett-Service</p>
                  <p className="text-4xl font-bold text-[#0A2540] mb-4">ab CHF 850</p>
                  <p className="text-sm text-gray-600">pro Maschine</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Fachgerechte Maschinenreinigung</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für ein unverbindliches Angebot</p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">
                Jetzt Angebot anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

// Export all standard services

// Sonderreinigung
export function SonderreinigungPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><Building2 className="w-4 h-4 mr-2" />Standard B2B</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sonderreinigung</h1>
          <p className="text-xl text-white/90">Spezialisierte Reinigungslösungen für aussergewöhnliche Anforderungen.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Sonderreinigungen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardHeader><CardTitle>Tatortreinigung</CardTitle></CardHeader><CardContent><p>Diskrete und professionelle Reinigung.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Brandschadensanierung</CardTitle></CardHeader><CardContent><p>Vollständige Reinigung nach Bränden.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Wasserschadensanierung</CardTitle></CardHeader><CardContent><p>Schnelle Hilfe bei Wasserschäden.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Industriereinigung  
export function IndustriereinigungPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><Building2 className="w-4 h-4 mr-2" />Standard B2B</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Industriereinigung</h1>
          <p className="text-xl text-white/90">Professionelle Reinigung für Produktionsbetriebe und Fabriken.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Industriereinigung für alle Branchen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card><CardHeader><CardTitle>Produktionshallen</CardTitle></CardHeader><CardContent><p>Reinigung ohne Betriebsunterbrechung.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Logistikzentren</CardTitle></CardHeader><CardContent><p>Grosse Flächen effizient gereinigt.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Fassadenreinigung
export function FassadenreinigungPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><Building2 className="w-4 h-4 mr-2" />Standard B2B</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fassadenreinigung</h1>
          <p className="text-xl text-white/90">Professionelle Reinigung von Gebäudefassaden aller Art.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Alle Fassadentypen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardHeader><CardTitle>Glasfassaden</CardTitle></CardHeader><CardContent><p>Streifenfreie Reinigung.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Naturstein</CardTitle></CardHeader><CardContent><p>Schonende Reinigung.</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Beton</CardTitle></CardHeader><CardContent><p>Graffiti-Entfernung.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Bauendreinigung
export function BauendreinigungPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><Building2 className="w-4 h-4 mr-2" />Standard B2B</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Bauendreinigung</h1>
          <p className="text-xl text-white/90">Professionelle Endreinigung nach Bau- und Renovierungsarbeiten.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12">Bauendreinigung in 3 Schritten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card><CardHeader><div className="text-4xl font-bold text-[#0A2540] mb-4">1</div><CardTitle>Grobreinigung</CardTitle></CardHeader><CardContent><p>Entfernung von Baustaub.</p></CardContent></Card>
            <Card><CardHeader><div className="text-4xl font-bold text-[#0A2540] mb-4">2</div><CardTitle>Feinreinigung</CardTitle></CardHeader><CardContent><p>Detaillierte Reinigung.</p></CardContent></Card>
            <Card><CardHeader><div className="text-4xl font-bold text-[#0A2540] mb-4">3</div><CardTitle>Abnahme</CardTitle></CardHeader><CardContent><p>Übergabefertig.</p></CardContent></Card>
          </div>
        </div>
      </section>
    </div>
  )
}
