import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  ArrowRight, CheckCircle2, Sparkles, Phone, Mail, Star,
  Plane, Anchor, Home as HomeIcon, Building2, Calendar
} from 'lucide-react'
import { motion } from 'framer-motion'

// Privatjet Reinigung
export function PrivatjetReinigungPage() {
  return (
    <>
      
      <div className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privatjet-Reinigung</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              Diskrete, professionelle Reinigung Ihres Privatjets nach höchsten Luftfahrt-Standards. 
              Von der Kabine bis zum Cockpit – wir sorgen für makellosen Glanz.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100">
                  Angebot anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                +41 41 320 56 10
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Plane className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Kabinen-Reinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Lederpflege & Polsterreinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Teppichreinigung & Desinfektion</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Fenster & Oberflächen</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Sanitäranlagen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Außenreinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Rumpfwäsche</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Tragflächen-Reinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Fenster & Cockpit</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Politur & Versiegelung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Zusatzleistungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />24/7 Notfall-Service</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Vor-Ort Service am Hangar</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Diskrete Abwicklung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Zertifiziertes Personal</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-16">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Light Jets</h4>
                  <p className="text-sm text-gray-600 mb-4">bis 8 Passagiere</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">CHF 1'200</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#C5A572]">
                  <Badge className="mb-2 bg-[#C5A572] text-white">Beliebt</Badge>
                  <h4 className="font-bold text-xl mb-2">Midsize Jets</h4>
                  <p className="text-sm text-gray-600 mb-4">bis 12 Passagiere</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">CHF 2'400</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Large Jets</h4>
                  <p className="text-sm text-gray-600 mb-4">ab 12 Passagiere</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 3'800</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-6">* Preise zzgl. MwSt. Individuelle Pakete auf Anfrage.</p>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Unser Prozess</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Anfrage', desc: 'Kontaktieren Sie uns mit Ihren Anforderungen' },
                  { step: '2', title: 'Planung', desc: 'Wir koordinieren Termin und Zugang' },
                  { step: '3', title: 'Reinigung', desc: 'Professionelle Durchführung vor Ort' },
                  { step: '4', title: 'Abnahme', desc: 'Qualitätskontrolle und Dokumentation' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Häufige Fragen</h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    q: 'Wie lange dauert eine Privatjet-Reinigung?',
                    a: 'Je nach Flugzeuggröße zwischen 3-6 Stunden. Express-Service innerhalb von 2 Stunden möglich.'
                  },
                  {
                    q: 'Sind Ihre Mitarbeiter für Flughäfen zertifiziert?',
                    a: 'Ja, alle unsere Mitarbeiter verfügen über die notwendigen Sicherheitszertifikate und Flughafenzugänge.'
                  },
                  {
                    q: 'Welche Reinigungsmittel verwenden Sie?',
                    a: 'Wir verwenden ausschließlich luftfahrtzugelassene, schonende Reinigungsmittel, die Materialien nicht angreifen.'
                  },
                  {
                    q: 'Bieten Sie auch regelmäßige Wartungsreinigungen an?',
                    a: 'Ja, wir bieten flexible Wartungsverträge für regelmäßige Reinigungen zu vergünstigten Konditionen.'
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit für makellosen Service?</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für ein unverbindliches Angebot</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100">
                  Jetzt Angebot anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Direkt anrufen
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// Yacht Reinigung (similar structure, different content)
export function YachtReinigungPage() {
  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Anchor className="w-4 h-4 mr-2" />
              Premium Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Yacht-Reinigung</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              Professionelle Pflege für Ihre Yacht am Zürichsee, Vierwaldstättersee und weiteren Schweizer Gewässern. 
              Von der Teakholz-Pflege bis zur Unterwasserreinigung.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Yacht-Services</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Anchor className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Außenreinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Rumpfreinigung & Politur</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Teak-Deck Pflege</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Fenster & Edelstahl</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Unterwasserreinigung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <HomeIcon className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Innenreinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Kabinen & Salon</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Polster & Leder</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Pantry & Sanitär</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Teppiche & Vorhänge</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Spezialservices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Wintereinlagerung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Frühjahrsreinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Osmose-Behandlung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Wartungsverträge</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-16">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Segelboote</h4>
                  <p className="text-sm text-gray-600 mb-4">bis 10m</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 450</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#C5A572]">
                  <Badge className="mb-2 bg-[#C5A572] text-white">Beliebt</Badge>
                  <h4 className="font-bold text-xl mb-2">Motoryachten</h4>
                  <p className="text-sm text-gray-600 mb-4">10-15m</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 1'200</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Luxusyachten</h4>
                  <p className="text-sm text-gray-600 mb-4">ab 15m</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">auf Anfrage</p>
                  <p className="text-sm text-gray-600">individuell</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ihre Yacht in besten Händen</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für ein unverbindliches Angebot</p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100">
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

// Export all premium services


// Private Housekeeping - Task 3
export function PrivateHousekeepingPage() {
  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <HomeIcon className="w-4 h-4 mr-2" />
              Premium Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Private Housekeeping</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              Diskreter, professioneller Housekeeping-Service für anspruchsvolle Privatresidenzen. 
              Von der täglichen Pflege bis zum Full-Service-Management Ihres Zuhauses.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Housekeeping-Services</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <HomeIcon className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Tägliche Pflege</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Zimmerreinigung & Betten</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Küche & Essbereich</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Badezimmer & Sanitär</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Wäsche & Bügeln</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Spezialservices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Silber & Kristall-Pflege</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Kunstwerke & Antiquitäten</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Weinkeller-Management</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Event-Vorbereitung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Zusatzleistungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Live-in Housekeeper</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Ferienhaus-Betreuung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Einkaufsservice</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Concierge-Service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Part-Time</h4>
                  <p className="text-sm text-gray-600 mb-4">2-3x pro Woche</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">CHF 85</p>
                  <p className="text-sm text-gray-600">pro Stunde</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#C5A572]">
                  <Badge className="mb-2 bg-[#C5A572] text-white">Beliebt</Badge>
                  <h4 className="font-bold text-xl mb-2">Full-Time</h4>
                  <p className="text-sm text-gray-600 mb-4">5-6x pro Woche</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">CHF 6'500</p>
                  <p className="text-sm text-gray-600">pro Monat</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Live-In</h4>
                  <p className="text-sm text-gray-600 mb-4">7 Tage verfügbar</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 8'500</p>
                  <p className="text-sm text-gray-600">pro Monat</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Diskretion und Professionalität garantiert</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für ein vertrauliches Gespräch</p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100">
                Jetzt Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

// Luxusimmobilien - Task 4
export function LuxusimmobilienPage() {
  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Building2 className="w-4 h-4 mr-2" />
              Premium Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Luxusimmobilien-Service</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              Massgeschneiderte Reinigung und Pflege für Penthouses, Villen und Chalets. 
              Höchste Standards für aussergewöhnliche Immobilien.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Innenreinigung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Marmor & Naturstein</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Parkett & Echtholz</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Designer-Möbel</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Wellness & Spa-Bereich</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Außenpflege</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Fassadenreinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Terrassen & Balkone</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Pool-Service</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Gartenpflege</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Spezialservices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Kunstsammlung-Pflege</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Weinkeller-Management</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Home-Cinema Pflege</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Winterdienst</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Penthouse</h4>
                  <p className="text-sm text-gray-600 mb-4">bis 200m²</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 850</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#C5A572]">
                  <Badge className="mb-2 bg-[#C5A572] text-white">Beliebt</Badge>
                  <h4 className="font-bold text-xl mb-2">Villa</h4>
                  <p className="text-sm text-gray-600 mb-4">200-500m²</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 1'800</p>
                  <p className="text-sm text-gray-600">pro Reinigung</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Chalet</h4>
                  <p className="text-sm text-gray-600 mb-4">ab 500m²</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">auf Anfrage</p>
                  <p className="text-sm text-gray-600">individuell</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Perfektion für aussergewöhnliche Immobilien</h2>
            <p className="text-xl mb-6 text-white/90">Lassen Sie uns Ihre Luxusimmobilie in neuem Glanz erstrahlen</p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100">
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

// VIP Event Service - Task 5
export function VIPEventServicePage() {
  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Service
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">VIP-Event-Service</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              Professioneller Full-Service für exklusive Events, Galas und Corporate-Veranstaltungen. 
              Von der Vorbereitung bis zur Nachbereitung – diskret und perfekt organisiert.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Event-Services</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Pre-Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Location-Vorbereitung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Tisch & Dekoration</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Sanitär-Check</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Final-Inspektion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>During Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Laufende Reinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Sanitär-Service</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Garderobe-Betreuung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Notfall-Support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 text-[#C5A572] mb-4" />
                  <CardTitle>Post-Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Komplett-Reinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Müllentsorgung</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Möbel-Rückbau</li>
                    <li className="flex items-start"><CheckCircle2 className="h-5 w-5 mr-2 text-[#C5A572] flex-shrink-0 mt-0.5" />Final-Abnahme</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Preisübersicht</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Small Event</h4>
                  <p className="text-sm text-gray-600 mb-4">bis 50 Gäste</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 1'200</p>
                  <p className="text-sm text-gray-600">pro Event</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-[#C5A572]">
                  <Badge className="mb-2 bg-[#C5A572] text-white">Beliebt</Badge>
                  <h4 className="font-bold text-xl mb-2">Medium Event</h4>
                  <p className="text-sm text-gray-600 mb-4">50-200 Gäste</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">ab CHF 3'500</p>
                  <p className="text-sm text-gray-600">pro Event</p>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-bold text-xl mb-2">Large Event</h4>
                  <p className="text-sm text-gray-600 mb-4">ab 200 Gäste</p>
                  <p className="text-4xl font-bold text-[#C5A572] mb-4">auf Anfrage</p>
                  <p className="text-sm text-gray-600">individuell</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#C5A572] to-[#d4b583] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ihr Event in perfekten Händen</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für eine individuelle Event-Planung</p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#C5A572] hover:bg-gray-100">
                Event-Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
