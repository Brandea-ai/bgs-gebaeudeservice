import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { 
  ArrowRight, Award, Users, TrendingUp, Shield, Leaf, Phone, Mail, MapPin,
  Download, FileText, BookOpen, Calendar, User, Sparkles, Building2, CheckCircle2
} from 'lucide-react'
import { motion } from 'framer-motion'
import officeCleaningImg from '../assets/images/office-cleaning-1.jpg'
import facilityManagementImg from '../assets/images/facility-management.jpg'
import aiDashboardImg from '../assets/images/ai-dashboard-2.png'

// Über uns Page
export function UeberUnsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Seit 1997</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Über BGS Gebäudeservice</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Seit über 25 Jahren setzen wir Massstäbe in der Gebäudereinigung und im Facility Management. 
            Von der kleinen Reinigungsfirma zum schweizweiten Premium-Dienstleister.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Unsere Geschichte</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                1997 gründete Nezir Bozhdaraj BGS Gebäudeservice mit einer klaren Vision: Reinigungsdienstleistungen 
                auf höchstem Niveau anzubieten. Was als kleines Familienunternehmen begann, ist heute ein führender 
                Anbieter im Schweizer Facility Management.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mit über 150 Mitarbeitenden betreuen wir mehr als 1,2 Millionen Quadratmeter Fläche – von 
                Luxus-Yachten bis zu Industriehallen. Unser Erfolgsrezept: Schweizer Qualität, modernste Technologie 
                und ein Team, das mit Leidenschaft bei der Sache ist.
              </p>
              <div className="flex gap-4 mt-8">
                <div>
                  <p className="text-3xl font-bold text-[#0A2540]">25+</p>
                  <p className="text-sm text-gray-600">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0A2540]">150+</p>
                  <p className="text-sm text-gray-600">Mitarbeitende</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0A2540]">500+</p>
                  <p className="text-sm text-gray-600">Zufriedene Kunden</p>
                </div>
              </div>
            </div>
            <div>
              <img src={facilityManagementImg} alt="BGS Team" className="rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere Werte</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#0A2540] flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Qualität</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">ISO 9001 zertifiziert. Höchste Standards in jedem Detail.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#10B981] flex items-center justify-center mb-4">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Nachhaltigkeit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">CO₂-neutral und umweltfreundliche Reinigungsmittel.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#C5A572] flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">KI-gestützte Prozesse für maximale Effizienz.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unser Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] flex items-center justify-center">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle>Nezir Bozhdaraj</CardTitle>
                      <CardDescription>Gründer & Geschäftsführer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mit über 25 Jahren Erfahrung im Facility Management hat Nezir BGS zu einem der führenden 
                    Anbieter in der Schweiz aufgebaut.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle>150+ Mitarbeitende</CardTitle>
                      <CardDescription>Unser Erfolgsgeheimnis</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hochqualifizierte Fachkräfte, die mit Leidenschaft und Präzision für Ihre Zufriedenheit sorgen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Werden Sie Teil unserer Erfolgsgeschichte</h2>
          <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für eine unverbindliche Beratung</p>
          <Link to="/kontakt">
            <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// KI-Integration Page
export function KIIntegrationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] text-white">
        <div className=" mx-auto text-center">
          <Badge className="mb-6 bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Künstliche Intelligenz
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            KI-gestützte <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00A8CC]">Reinigungslösungen</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Wir nutzen modernste KI-Technologie für effizientere Prozesse, vorausschauende Wartung 
            und höchste Qualitätsstandards.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className=" mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Unsere KI-Features</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Predictive Maintenance</CardTitle>
                  <CardDescription>Vorausschauende Wartung</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Unsere KI analysiert Nutzungsmuster und sagt voraus, wann Reinigung oder Wartung nötig ist – 
                    bevor Probleme entstehen.
                  </p>
                  <div className="bg-[#00D4FF]/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#0A2540] mb-2">Ergebnis:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 67% weniger ungeplante Ausfälle</li>
                      <li>• 45% längere Lebensdauer von Anlagen</li>
                      <li>• 30% Kosteneinsparung</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Smart Scheduling</CardTitle>
                  <CardDescription>Intelligente Einsatzplanung</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    KI-optimierte Routenplanung und Ressourcenzuteilung für maximale Effizienz und minimale Wartezeiten.
                  </p>
                  <div className="bg-[#10B981]/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#0A2540] mb-2">Ergebnis:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 18% Effizienzsteigerung</li>
                      <li>• 25% weniger Fahrtzeit</li>
                      <li>• 100% pünktliche Termine</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5A572] to-[#d4b583] flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Quality Assurance AI</CardTitle>
                  <CardDescription>KI-Qualitätskontrolle</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Automatische Bildanalyse und Qualitätsprüfung durch Computer Vision für gleichbleibend hohe Standards.
                  </p>
                  <div className="bg-[#C5A572]/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#0A2540] mb-2">Ergebnis:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 98% Qualitätsstandard</li>
                      <li>• Sofortige Fehlererkennung</li>
                      <li>• Objektive Bewertung</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="h-full hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Ressourcen-Optimierung</CardTitle>
                  <CardDescription>Intelligente Materialverwaltung</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    KI-gestützte Bedarfsprognose für Reinigungsmittel und Verbrauchsmaterialien.
                  </p>
                  <div className="bg-[#0A2540]/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#0A2540] mb-2">Ergebnis:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 23% Kosteneinsparung</li>
                      <li>• Keine Materialengpässe</li>
                      <li>• 40% weniger Verschwendung</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#0A2540] mb-6 text-center">Live AI Dashboard</h3>
            <p className="text-center text-gray-600 mb-8">
              Unsere Kunden erhalten Zugang zu einem Echtzeit-Dashboard mit allen relevanten KPIs und Insights.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aiDashboardImg} alt="AI Dashboard" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] text-white">
        <div className=" mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für die Zukunft der Gebäudereinigung?</h2>
          <p className="text-xl mb-6 text-white/90">Erleben Sie die Vorteile von KI-gestützten Reinigungslösungen</p>
          <Link to="/kontakt">
            <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">
              Demo anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Blog Page (with sample articles)
export function BlogPage() {
  const articles = [
    {
      title: 'Die Zukunft der Gebäudereinigung: KI und Automatisierung',
      excerpt: 'Wie künstliche Intelligenz die Reinigungsbranche revolutioniert und welche Vorteile sie für Unternehmen bringt.',
      date: '15. September 2024',
      category: 'Innovation',
      image: aiDashboardImg
    },
    {
      title: 'Nachhaltige Reinigung: Unsere umweltfreundlichen Lösungen',
      excerpt: 'CO₂-neutral reinigen – wie wir mit biologisch abbaubaren Produkten und effizienten Prozessen die Umwelt schonen.',
      date: '3. September 2024',
      category: 'Nachhaltigkeit',
      image: officeCleaningImg
    },
    {
      title: 'Hygiene-Standards in Healthcare-Einrichtungen',
      excerpt: 'Spezielle Anforderungen an die Reinigung in Krankenhäusern, Kliniken und Pflegeheimen.',
      date: '22. August 2024',
      category: 'Healthcare',
      image: facilityManagementImg
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Wissen & Insights
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">BGS Blog</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Neuigkeiten, Trends und Expertenwissen aus der Welt der Gebäudereinigung und des Facility Managements.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-shadow overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#0A2540] text-white">{article.category}</Badge>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Weiterlesen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Downloads Page
export function DownloadsPage() {
  const downloads = [
    { title: 'BGS Unternehmensbroschüre', description: 'Umfassender Überblick über unsere Services', size: '2.4 MB', type: 'PDF' },
    { title: 'Preisliste 2024', description: 'Aktuelle Preise für alle Dienstleistungen', size: '850 KB', type: 'PDF' },
    { title: 'Nachhaltigkeitsbericht 2023', description: 'Unser Beitrag zum Umweltschutz', size: '1.8 MB', type: 'PDF' },
    { title: 'ISO 9001 Zertifikat', description: 'Qualitätsmanagement-Zertifizierung', size: '450 KB', type: 'PDF' },
    { title: 'Referenzliste', description: 'Auswahl unserer zufriedenen Kunden', size: '1.2 MB', type: 'PDF' },
    { title: 'Checkliste Büroreinigung', description: 'Praktische Checkliste für den Alltag', size: '320 KB', type: 'PDF' }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Download className="w-4 h-4 mr-2" />
            Ressourcen
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Downloads</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Broschüren, Preislisten, Zertifikate und weitere nützliche Dokumente zum Download.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className=" mx-auto">
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0A2540]/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-[#0A2540]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.type} • {item.size}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#0A2540] hover:bg-[#1a3a5f]">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Glossar Page
export function GlossarPage() {
  const glossaryTerms = [
    { term: 'Bauendreinigung', definition: 'Gründliche Reinigung nach Bau- oder Renovierungsarbeiten, um alle Staub-, Schmutz- und Materialreste zu entfernen.' },
    { term: 'Facility Management', definition: 'Ganzheitliche Verwaltung und Bewirtschaftung von Gebäuden und deren technischen Anlagen sowie Infrastruktur.' },
    { term: 'Grundreinigung', definition: 'Intensive, tiefgehende Reinigung aller Bereiche, die über die normale Unterhaltsreinigung hinausgeht.' },
    { term: 'HACCP', definition: 'Hazard Analysis Critical Control Points - Hygienestandard besonders wichtig in Lebensmittel- und Healthcare-Bereichen.' },
    { term: 'ISO 9001', definition: 'Internationale Norm für Qualitätsmanagementsysteme, die wir erfüllen und zertifiziert sind.' },
    { term: 'Predictive Maintenance', definition: 'Vorausschauende Wartung durch KI-gestützte Analyse von Nutzungsmustern und Zustandsdaten.' },
    { term: 'Sonderreinigung', definition: 'Spezielle Reinigungsarbeiten für besondere Anforderungen wie Tatortreinigung, Taubenkotreinigung etc.' },
    { term: 'Unterhaltsreinigung', definition: 'Regelmässige, wiederkehrende Reinigung zur Aufrechterhaltung der Sauberkeit und Hygiene.' }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Fachwissen
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Glossar</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Fachbegriffe aus der Gebäudereinigung und dem Facility Management einfach erklärt.
          </p>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className=" mx-auto">
          <div className="space-y-6">
            {glossaryTerms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0A2540]">{item.term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.definition}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact Page
export function KontaktPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A2540]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#0A2540]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">Adresse</h3>
                    <p className="text-gray-700">Tannhof 10</p>
                    <p className="text-gray-700">6020 Emmenbrücke</p>
                    <p className="text-gray-700">Luzern, Schweiz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A2540]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#0A2540]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">Telefon</h3>
                    <p className="text-gray-700">+41 41 320 56 10</p>
                    <p className="text-sm text-gray-600">Mo-Fr: 8:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A2540]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#0A2540]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540] mb-1">E-Mail</h3>
                    <p className="text-gray-700">info@bgs-service.ch</p>
                    <p className="text-sm text-gray-600">Antwort innerhalb von 24h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0A2540]/5 rounded-2xl">
                <h3 className="font-bold text-[#0A2540] mb-2">Geschäftsführer</h3>
                <p className="text-gray-700">Nezir Bozhdaraj</p>
                <p className="text-sm text-gray-600 mt-2">UID: CHE-108.687.458</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Anfrage senden</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent" placeholder="ihre@email.ch" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                      <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent" placeholder="+41 XX XXX XX XX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent">
                        <option>Bitte wählen</option>
                        <option>Premium Services</option>
                        <option>Standard B2B</option>
                        <option>Essentiell Basis</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht *</label>
                      <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent" placeholder="Ihre Nachricht..."></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-[#0A2540] hover:bg-[#1a3a5f]">
                      Anfrage senden
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
