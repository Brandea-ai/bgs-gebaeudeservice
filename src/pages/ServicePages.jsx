import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle2, ArrowRight, Star, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import officeCleaningImg from '../assets/images/office-cleaning-1.jpg'
import facilityManagementImg from '../assets/images/facility-management.jpg'
import industrialCleaningImg from '../assets/images/industrial-cleaning.jpg'

// Service Detail Template
export function ServiceDetailPage({ title, category, description, features, benefits, process, pricing, image }) {
  const categoryColors = {
    premium: { bg: 'bg-[#C5A572]', text: 'text-[#C5A572]', gradient: 'from-[#C5A572] to-[#d4b583]', hover: 'hover:bg-[#b59562]' },
    standard: { bg: 'bg-[#0A2540]', text: 'text-[#0A2540]', gradient: 'from-[#0A2540] to-[#1a3a5f]', hover: 'hover:bg-[#1a3a5f]' },
    essentiell: { bg: 'bg-[#10B981]', text: 'text-[#10B981]', gradient: 'from-[#10B981] to-[#059669]', hover: 'hover:bg-[#059669]' }
  }

  const colors = categoryColors[category]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${colors.gradient} text-white`}>
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            {category === 'premium' ? 'PREMIUM' : category === 'standard' ? 'STANDARD' : 'ESSENTIELL'}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">{description}</p>
          <div className="flex gap-4">
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">
                Jetzt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Zurück zur Übersicht
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6">Leistungsumfang</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className={`h-6 w-6 mr-3 mt-1 flex-shrink-0 ${colors.text}`} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <img src={image} alt={title} className="rounded-2xl shadow-xl w-full" />
              {pricing && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className={`h-5 w-5 mr-2 ${colors.text}`} />
                      Preisinformation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{pricing}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {benefits && benefits.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Ihre Vorteile</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {process && process.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Unser Prozess</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {process.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-full ${colors.bg} text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-[#0A2540] mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${colors.gradient} text-white`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interessiert an {title}?</h2>
          <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für ein unverbindliches Angebot</p>
          <Link to="/kontakt">
            <Button size="lg" className={`bg-white text-[#0A2540] hover:bg-gray-100`}>
              Kostenlose Beratung
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// PREMIUM SERVICES
export function PrivatjetPage() {
  return <ServiceDetailPage 
    title="Privatjet-Reinigung"
    category="premium"
    description="Exklusive Reinigung für Privatjets mit höchsten Qualitätsstandards und diskretem Service weltweit"
    features={[
      'Innenraumreinigung mit Premium-Produkten',
      'Cockpit-Pflege und Instrumentenreinigung',
      'Lederaufbereitung und -pflege',
      'Desinfektionsservice nach IATA-Standards',
      '24/7 Verfügbarkeit an allen grossen Flughäfen',
      'Diskreter und professioneller Service',
      'Spezielle Reinigung für Avionik-Systeme',
      'Teppich- und Polsterreinigung',
      'Express-Service verfügbar'
    ]}
    benefits={[
      { title: 'Weltweite Verfügbarkeit', description: '24/7 Service an allen grossen internationalen Flughäfen' },
      { title: 'IATA-zertifiziert', description: 'Höchste Sicherheits- und Qualitätsstandards garantiert' },
      { title: 'Absolute Diskretion', description: 'Vertraulichkeit und Privatsphäre haben oberste Priorität' }
    ]}
    process={[
      { title: 'Anfrage', description: 'Kontaktieren Sie uns 24/7' },
      { title: 'Planung', description: 'Koordination mit Ihrem Flugplan' },
      { title: 'Reinigung', description: 'Professionelle Durchführung' },
      { title: 'Freigabe', description: 'Qualitätskontrolle und Übergabe' }
    ]}
    pricing="Preis auf Anfrage - individuell nach Flugzeugtyp und Umfang"
    image={officeCleaningImg}
  />
}

export function YachtPage() {
  return <ServiceDetailPage 
    title="Yacht-Reinigung"
    category="premium"
    description="Professionelle Yacht-Pflege für Luxus-Yachten und Segelboote mit maritimer Expertise"
    features={[
      'Deck-Reinigung und Politur',
      'Kabinen-Service und Innenraumreinigung',
      'Polster- und Teak-Pflege',
      'Unterwasser-Reinigung',
      'Saisonale Wartung und Pflege',
      'Winterlager-Service',
      'Edelstahl-Aufbereitung',
      'Segel- und Persenning-Reinigung',
      'Motor- und Maschinenraumreinigung'
    ]}
    benefits={[
      { title: 'Spezialisiert', description: 'Langjährige Erfahrung in der Yacht-Reinigung' },
      { title: 'Materialschonend', description: 'Spezielle Verfahren für empfindliche Oberflächen' },
      { title: 'Flexibel', description: 'Service im Hafen, auf See oder im Winterlager' }
    ]}
    process={[
      { title: 'Besichtigung', description: 'Vor-Ort-Termin auf Ihrer Yacht' },
      { title: 'Angebot', description: 'Massgeschneidertes Angebot' },
      { title: 'Terminierung', description: 'Flexible Terminplanung' },
      { title: 'Durchführung', description: 'Professionelle Reinigung' }
    ]}
    pricing="Ab CHF 500 pro Einsatz - abhängig von Grösse und Umfang"
    image={facilityManagementImg}
  />
}

export function HousekeepingPage() {
  return <ServiceDetailPage 
    title="Private Housekeeping"
    category="premium"
    description="Exklusiver Butler- und Housekeeping-Service für Luxusimmobilien und VIP-Residenzen"
    features={[
      'Täglicher Butler-Service',
      'Komplette Haushaltsführung',
      'Wäscheservice und -pflege',
      'Einkaufsservice',
      'Event-Vorbereitung und -Betreuung',
      'Concierge-Dienste',
      'Diskreter 24/7-Service',
      'Individuelle Wünsche',
      'Reisebegleitung möglich'
    ]}
    benefits={[
      { title: 'Persönlich', description: 'Dediziertes Personal exklusiv für Sie' },
      { title: 'Diskret', description: 'Höchste Vertraulichkeit garantiert' },
      { title: 'Flexibel', description: 'Vollständig nach Ihren Wünschen' }
    ]}
    pricing="Ab CHF 8.000 pro Monat - individuelles Paket"
    image={officeCleaningImg}
  />
}

// STANDARD SERVICES
export function HallenPage() {
  return <ServiceDetailPage 
    title="Hallenreinigung"
    category="standard"
    description="Professionelle Reinigung von Produktions-, Lager- und Messehallen"
    features={[
      'Bodenreinigung mit Industriemaschinen',
      'Hochregalreinigung bis 12m Höhe',
      'Entstaubung von Decken und Wänden',
      'Toreinfahrten und Rampen',
      'Flexible Einsatzzeiten (auch nachts)',
      'Regelmässige Qualitätskontrollen',
      'Spezialreinigung für Produktionsbereiche',
      'Notfall-Reinigungsdienst'
    ]}
    benefits={[
      { title: 'Effizient', description: 'Minimale Betriebsunterbrechung durch flexible Zeiten' },
      { title: 'Professionell', description: 'Modernste Industriemaschinen und Fachpersonal' },
      { title: 'Zuverlässig', description: 'Garantierte Termine und Qualität' }
    ]}
    process={[
      { title: 'Begehung', description: 'Kostenlose Vor-Ort-Analyse' },
      { title: 'Konzept', description: 'Individueller Reinigungsplan' },
      { title: 'Start', description: 'Schnelle Umsetzung' },
      { title: 'Kontrolle', description: 'Regelmässige Qualitätschecks' }
    ]}
    pricing="Ab CHF 2.50 pro m² - abhängig von Fläche und Intervall"
    image={industrialCleaningImg}
  />
}

export function MaschinenPage() {
  return <ServiceDetailPage 
    title="Maschinenreinigung"
    category="standard"
    description="Spezialisierte Reinigung von Produktionsanlagen, CNC-Maschinen und Industrierobotern"
    features={[
      'CNC-Maschinen und Fertigungsanlagen',
      'Industrieroboter-Reinigung',
      'Ölentfernung und Entfettung',
      'Hochdruckreinigung',
      'Dampfreinigung',
      'Trockeneis-Verfahren',
      'Präzisionsreinigung sensibler Komponenten',
      'Wartungsreinigung nach Plan'
    ]}
    benefits={[
      { title: 'Schonend', description: 'Keine Beschädigung sensibler Teile und Elektronik' },
      { title: 'Gründlich', description: 'Auch schwer zugängliche Bereiche werden erreicht' },
      { title: 'Schnell', description: 'Minimale Stillstandzeiten Ihrer Produktion' }
    ]}
    pricing="Ab CHF 150 pro Stunde - Pauschalangebote möglich"
    image={industrialCleaningImg}
  />
}

// ESSENTIELL SERVICES
export function UnterhaltPage() {
  return <ServiceDetailPage 
    title="Unterhaltsreinigung"
    category="essentiell"
    description="Zuverlässige regelmässige Reinigung für Büros, Praxen und Geschäftsräume"
    features={[
      'Tägliche oder wöchentliche Reinigung',
      'Bodenreinigung und -pflege',
      'Sanitärreinigung und Hygiene',
      'Papierkorb-Entleerung',
      'Staubwischen und Oberflächen',
      'Flexible Reinigungszeiten',
      'Küchen- und Pausenraumreinigung',
      'Regelmässige Qualitätskontrollen'
    ]}
    benefits={[
      { title: 'Zuverlässig', description: 'Feste Reinigungszeiten und gleichbleibendes Personal' },
      { title: 'Flexibel', description: 'Anpassbare Intervalle und Leistungen' },
      { title: 'Günstig', description: 'Faire Preise bei hoher Qualität' }
    ]}
    pricing="Ab CHF 35 pro Stunde - Paketpreise verfügbar"
    image={officeCleaningImg}
  />
}

export function FensterPage() {
  return <ServiceDetailPage 
    title="Fensterreinigung"
    category="essentiell"
    description="Professionelle Fensterreinigung innen und aussen für streifenfreien Durchblick"
    features={[
      'Innen- und Aussenreinigung',
      'Rahmen und Fensterbretter',
      'Jalousien- und Storen-Reinigung',
      'Streifenfreie Ergebnisse garantiert',
      'Auch für schwer erreichbare Fenster',
      'Regelmässige Intervalle möglich',
      'Wintergarten-Reinigung',
      'Dachfenster-Service'
    ]}
    benefits={[
      { title: 'Streifenfrei', description: 'Professionelle Technik für perfekte Ergebnisse' },
      { title: 'Sicher', description: 'Auch in grossen Höhen mit Sicherheitsausrüstung' },
      { title: 'Schnell', description: 'Effiziente Durchführung ohne Störung' }
    ]}
    pricing="Ab CHF 4 pro m² Fensterfläche"
    image={officeCleaningImg}
  />
}
