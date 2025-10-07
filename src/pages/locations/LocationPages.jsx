import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2, Building2, Star } from 'lucide-react'

// Zürich Page
export function ZuerichPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><MapPin className="w-4 h-4 mr-2" />Standort Zürich</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gebäudereinigung Zürich</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Ihr professioneller Partner für Gebäudereinigung und Facility Management im Raum Zürich.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Services in Zürich</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader><Building2 className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Büroreinigung</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Professionelle Reinigung für Büros in allen Zürcher Stadtteilen.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><Building2 className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Industriereinigung</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Spezialisiert auf Hallen und Industrieanlagen im Grossraum Zürich.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><Star className="h-10 w-10 text-[#C5A572] mb-4" /><CardTitle>Premium Services</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Exklusive Reinigung für Luxusimmobilien in Zürich.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kostenlose Beratung in Zürich</h2>
          <Link to="/kontakt"><Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">Jetzt anfragen<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </div>
      </section>
    </div>
  )
}

// Luzern Page
export function LuzernPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><MapPin className="w-4 h-4 mr-2" />Hauptsitz Luzern</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gebäudereinigung Luzern</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Unser Hauptsitz in Emmenbrücke – Ihr verlässlicher Partner für Gebäudereinigung in Luzern und der Zentralschweiz.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#0A2540]/5 to-[#0A2540]/10 rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-start space-x-6">
              <MapPin className="h-12 w-12 text-[#0A2540] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">BGS Hauptsitz Luzern</h3>
                <p className="text-gray-700 mb-4">Tannhof 10, 6020 Emmenbrücke</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center"><Phone className="h-5 w-5 mr-3 text-[#0A2540]" /><span>+41 41 320 56 10</span></div>
                  <div className="flex items-center"><Mail className="h-5 w-5 mr-3 text-[#0A2540]" /><span>info@bgs-service.ch</span></div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Services in Luzern</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader><Building2 className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Büroreinigung</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Von KMU bis Grossunternehmen in Luzern und Umgebung.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><Building2 className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Industriereinigung</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Spezialisiert auf Produktionsbetriebe in der Zentralschweiz.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><Star className="h-10 w-10 text-[#C5A572] mb-4" /><CardTitle>Facility Management</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Ganzheitliche Betreuung Ihrer Immobilien.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Besuchen Sie uns in Emmenbrücke</h2>
          <Link to="/kontakt"><Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">Termin vereinbaren<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </div>
      </section>
    </div>
  )
}

// St. Gallen Page
export function StGallenPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white"><MapPin className="w-4 h-4 mr-2" />Standort St. Gallen</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gebäudereinigung St. Gallen</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Ihr zuverlässiger Partner für Gebäudereinigung und Facility Management in St. Gallen und der Ostschweiz.
          </p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Services in St. Gallen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader><Building2 className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Büroreinigung</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Professionelle Reinigung für Büros in der Ostschweiz.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><Building2 className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Textil-Industrie</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Spezialisiert auf Textilbetriebe und Produktionshallen.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><Star className="h-10 w-10 text-[#C5A572] mb-4" /><CardTitle>Gewerbe & Retail</CardTitle></CardHeader>
              <CardContent><p className="text-gray-600">Reinigung für Geschäfte und Shopping-Center.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kostenlose Beratung in St. Gallen</h2>
          <Link to="/kontakt"><Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">Jetzt anfragen<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
        </div>
      </section>
    </div>
  )
}

