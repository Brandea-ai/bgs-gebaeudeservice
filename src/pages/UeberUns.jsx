import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Building2, Users, Award, Target, Heart, TrendingUp, Shield, Globe, Phone, CheckCircle2 } from 'lucide-react'
import Team from '@/components/Team.jsx'

export function UeberUnsPage() {
  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] text-white">
        <div className=" mx-auto">
          <Badge className="mb-6 bg-[#C5A572]/20 text-[#C5A572]">
            <Building2 className="w-4 h-4 mr-2" />
            ÜBER UNS
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            BGS Gebäudeservice<br/>
            <span className="text-[#C5A572]">Schweizer Qualität seit 1997</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Wir sind Ihr zuverlässiger Partner für professionelle Gebäudereinigung und Facility Management 
            in der Schweiz. Mit über 25 Jahren Erfahrung und einem Team von 150+ Mitarbeitenden.
          </p>
          <Button size="lg" className="bg-[#C5A572] hover:bg-[#b89562] text-white">
            <Phone className="mr-2" />
            Kontakt aufnehmen
          </Button>
        </div>
      </section>

      {/* 2. GESCHICHTE & TIMELINE */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#0A2540] text-white">Unsere Geschichte</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Von der Gründung zur Marktführerschaft
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {year: "1997", title: "Gründung", desc: "Nezir Bozhdaraj gründet BGS in Luzern mit 5 Mitarbeitenden"},
              {year: "2005", title: "Expansion", desc: "Eröffnung von Standorten in Zürich und St. Gallen"},
              {year: "2010", title: "ISO-Zertifizierung", desc: "Erhalt der ISO 9001 Zertifizierung für Qualitätsmanagement"},
              {year: "2015", title: "Premium-Services", desc: "Start der Luxus-Sparte: Privatjets, Yachten, VIP-Events"},
              {year: "2020", title: "KI-Integration", desc: "Einführung von KI-gestützten Prozessen und Predictive Maintenance"},
              {year: "2025", title: "Heute", desc: "150+ Mitarbeitende, 1.2M+ m² betreute Fläche, Marktführer in der Schweiz"}
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#C5A572] to-[#d4b583] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pt-4">
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-4 border-[#0A2540]">
              <CardHeader>
                <Target className="h-16 w-16 text-[#0A2540] mb-4" />
                <CardTitle className="text-3xl">Unsere Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wir schaffen saubere, sichere und inspirierende Umgebungen für unsere Kunden. 
                  Durch höchste Qualitätsstandards, innovative Technologien und ein engagiertes Team 
                  tragen wir zum Erfolg unserer Kunden bei.
                </p>
              </CardContent>
            </Card>
            <Card className="border-4 border-[#C5A572]">
              <CardHeader>
                <TrendingUp className="h-16 w-16 text-[#C5A572] mb-4" />
                <CardTitle className="text-3xl">Unsere Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wir wollen der führende Facility-Service-Anbieter in der Schweiz sein und 
                  durch kontinuierliche Innovation und exzellenten Service neue Maßstäbe in der 
                  Branche setzen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. WERTE */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Unsere Werte</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Was uns antreibt
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {icon: <Heart className="h-12 w-12 text-[#C5A572]" />, title: "Leidenschaft", desc: "Wir lieben, was wir tun"},
              {icon: <Shield className="h-12 w-12 text-[#C5A572]" />, title: "Zuverlässigkeit", desc: "Auf uns können Sie zählen"},
              {icon: <Award className="h-12 w-12 text-[#C5A572]" />, title: "Qualität", desc: "Höchste Standards immer"},
              {icon: <Users className="h-12 w-12 text-[#C5A572]" />, title: "Teamgeist", desc: "Gemeinsam sind wir stark"}
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-2xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3 text-[#0A2540]">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM & FÜHRUNG */}
      <Team />

      {/* 6. ZAHLEN & FAKTEN */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#C5A572] text-white">Zahlen & Fakten</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              BGS in Zahlen
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {number: "150+", label: "Mitarbeitende", icon: <Users className="h-10 w-10 text-[#C5A572]" />},
              {number: "1.2M+", label: "m² betreut", icon: <Building2 className="h-10 w-10 text-[#C5A572]" />},
              {number: "98%", label: "Kundenzufriedenheit", icon: <Award className="h-10 w-10 text-[#C5A572]" />},
              {number: "25+", label: "Jahre Erfahrung", icon: <TrendingUp className="h-10 w-10 text-[#C5A572]" />}
            ].map((stat, i) => (
              <Card key={i} className="text-center hover:scale-105 transition-transform">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-5xl font-bold text-[#0A2540] mb-2">{stat.number}</div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ZERTIFIZIERUNGEN */}
      <section className="py-20 px-4 bg-gray-50">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#0A2540] text-white">Zertifizierungen</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Qualität mit Garantie
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "ISO 9001:2015", desc: "Qualitätsmanagement-System", year: "seit 2010"},
              {title: "ISO 14001:2015", desc: "Umweltmanagement-System", year: "seit 2015"},
              {title: "ISO 45001:2018", desc: "Arbeitsschutzmanagement", year: "seit 2020"}
            ].map((cert, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <Award className="h-16 w-16 text-[#C5A572] mx-auto mb-6" />
                  <h3 className="font-bold text-2xl text-[#0A2540] mb-3">{cert.title}</h3>
                  <p className="text-gray-700 mb-2">{cert.desc}</p>
                  <p className="text-[#C5A572] font-semibold">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NACHHALTIGKEIT */}
      <section className="py-20 px-4 bg-white">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#10B981] text-white">
              <Globe className="w-4 h-4 mr-2" />
              Nachhaltigkeit
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
              Verantwortung für die Zukunft
            </h2>
            <p className="text-xl text-gray-600">
              Wir setzen auf umweltfreundliche Reinigungsmittel, energieeffiziente Prozesse 
              und soziale Verantwortung.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Umweltschutz",
                points: [
                  "100% biologisch abbaubare Reinigungsmittel",
                  "CO2-neutrale Fahrzeugflotte bis 2026",
                  "Wassersparende Reinigungstechnologien",
                  "Recycling-Programme"
                ]
              },
              {
                title: "Soziale Verantwortung",
                points: [
                  "Faire Löhne über Branchendurchschnitt",
                  "Weiterbildungsprogramme für alle Mitarbeitenden",
                  "Integration von Menschen mit Behinderung",
                  "Unterstützung lokaler Sozialprojekte"
                ]
              }
            ].map((section, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0A2540]">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[#10B981] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lassen Sie uns gemeinsam Ihre Räume in perfektem Zustand halten.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#C5A572] hover:bg-[#b89562] text-white text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              +41 41 320 56 10
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              Karriere bei BGS
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UeberUnsPage
