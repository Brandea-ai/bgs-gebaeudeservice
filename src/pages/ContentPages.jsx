import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowRight, Star, Users, TrendingUp, Award, Briefcase, Heart, Clock } from 'lucide-react'

// Referenzen Page - Task 21
export function ReferenzenPage() {
  const references = [
    {
      company: 'Swiss Re',
      industry: 'Versicherung',
      service: 'Büroreinigung & Facility Management',
      location: 'Zürich',
      testimonial: 'BGS überzeugt durch Zuverlässigkeit und höchste Qualitätsstandards. Seit 5 Jahren unser Partner.',
      logo: '🏢'
    },
    {
      company: 'Pilatus Aircraft',
      industry: 'Luftfahrt',
      service: 'Produktionshallen & Maschinenreinigung',
      location: 'Luzern',
      testimonial: 'Professionelle Reinigung unserer Produktionsanlagen. Pünktlich, sauber, zuverlässig.',
      logo: '✈️'
    },
    {
      company: 'Kantonsspital St. Gallen',
      industry: 'Healthcare',
      service: 'Hygiene-Reinigung nach HACCP',
      location: 'St. Gallen',
      testimonial: 'Höchste Hygiene-Standards werden konsequent eingehalten. Sehr zufrieden.',
      logo: '🏥'
    },
    {
      company: 'Luxushotel Bürgenstock',
      industry: 'Hospitality',
      service: 'Premium Housekeeping',
      location: 'Luzern',
      testimonial: 'Diskreter, professioneller Service auf höchstem Niveau. Perfekt für unsere Gäste.',
      logo: '🏨'
    }
  ]

  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white"><Star className="w-4 h-4 mr-2" />Referenzen</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Kunden</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Über 500 zufriedene Kunden aus Industrie, Healthcare, Hospitality und Gewerbe vertrauen auf unsere Dienstleistungen.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div><p className="text-4xl font-bold mb-2">500+</p><p className="text-sm text-white/80">Kunden</p></div>
              <div><p className="text-4xl font-bold mb-2">98%</p><p className="text-sm text-white/80">Zufriedenheit</p></div>
              <div><p className="text-4xl font-bold mb-2">25+</p><p className="text-sm text-white/80">Jahre</p></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className=" mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Ausgewählte Referenzen</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {references.map((ref, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{ref.logo}</div>
                        <div>
                          <CardTitle className="text-xl">{ref.company}</CardTitle>
                          <p className="text-sm text-gray-600">{ref.industry} • {ref.location}</p>
                        </div>
                      </div>
                      <Badge className="bg-[#10B981] text-white">{ref.service}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{ref.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-8 text-center">Branchen-Expertise</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: '🏢', title: 'Büro & Verwaltung', count: '200+' },
                  { icon: '🏭', title: 'Industrie & Produktion', count: '150+' },
                  { icon: '🏥', title: 'Healthcare & Pharma', count: '80+' },
                  { icon: '🏨', title: 'Hospitality & Retail', count: '70+' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-2xl font-bold text-[#0A2540]">{item.count}</p>
                    <p className="text-sm text-gray-600">Kunden</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Werden Sie Teil unserer Erfolgsgeschichte</h2>
            <p className="text-xl mb-6 text-white/90">Kontaktieren Sie uns für eine unverbindliche Beratung</p>
            <Link to="/kontakt"><Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100">Jetzt anfragen<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </section>
      </div>
    </>
  )
}

// Karriere Page - Task 22
export function KarrierePage() {
  const jobs = [
    { title: 'Reinigungsfachkraft (m/w/d)', location: 'Zürich', type: 'Vollzeit', level: 'Einstieg' },
    { title: 'Objektleiter Facility Management (m/w/d)', location: 'Luzern', type: 'Vollzeit', level: 'Erfahren' },
    { title: 'Teamleiter Industriereinigung (m/w/d)', location: 'St. Gallen', type: 'Vollzeit', level: 'Führung' },
    { title: 'Housekeeping Manager (m/w/d)', location: 'Zürich', type: 'Vollzeit', level: 'Führung' }
  ]

  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white"><Briefcase className="w-4 h-4 mr-2" />Karriere</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Arbeiten bei BGS</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Werde Teil eines erfolgreichen Teams mit über 150 Mitarbeitenden. 
              Wir bieten faire Löhne, Weiterbildung und echte Aufstiegschancen.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className=" mx-auto">
            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Warum BGS?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card><CardHeader><Heart className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Faire Konditionen</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600 text-sm">
                <li>• Überdurchschnittliche Löhne</li>
                <li>• 13. Monatslohn</li>
                <li>• Pensionskasse</li>
                <li>• Unfallversicherung</li>
              </ul></CardContent></Card>

              <Card><CardHeader><TrendingUp className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Entwicklung</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600 text-sm">
                <li>• Interne Weiterbildung</li>
                <li>• Aufstiegschancen</li>
                <li>• Mentoring-Programme</li>
                <li>• Karriereplanung</li>
              </ul></CardContent></Card>

              <Card><CardHeader><Users className="h-10 w-10 text-[#0A2540] mb-4" /><CardTitle>Team & Kultur</CardTitle></CardHeader>
              <CardContent><ul className="space-y-2 text-gray-600 text-sm">
                <li>• Familiäres Arbeitsklima</li>
                <li>• Teamevents</li>
                <li>• Moderne Ausstattung</li>
                <li>• Flexible Arbeitszeiten</li>
              </ul></CardContent></Card>
            </div>

            <h2 className="text-4xl font-bold text-[#0A2540] mb-12 text-center">Offene Stellen</h2>
            <div className="space-y-4 mb-16">
              {jobs.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{job.title}</h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>📍 {job.location}</span>
                          <span>⏰ {job.type}</span>
                          <Badge variant="outline">{job.level}</Badge>
                        </div>
                      </div>
                      <Link to="/kontakt"><Button>Jetzt bewerben<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-4">Initiativbewerbung</h3>
              <p className="text-gray-700 mb-6">
                Keine passende Stelle gefunden? Sende uns deine Initiativbewerbung – wir freuen uns auf dich!
              </p>
              <Link to="/kontakt"><Button size="lg">Initiativ bewerben<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// FAQ Page - Task 23
export function FAQPage() {
  const faqs = [
    {
      category: 'Allgemein',
      questions: [
        { q: 'In welchen Regionen sind Sie tätig?', a: 'Wir sind hauptsächlich in Zürich, Luzern und St. Gallen sowie der jeweiligen Umgebung tätig. Für größere Projekte sind wir auch schweizweit verfügbar.' },
        { q: 'Sind Sie ISO 9001 zertifiziert?', a: 'Ja, wir sind ISO 9001 zertifiziert und erfüllen höchste Qualitätsstandards.' },
        { q: 'Wie lange sind Sie schon im Geschäft?', a: 'BGS Gebäudeservice wurde 1997 gegründet und ist seit über 25 Jahren erfolgreich tätig.' }
      ]
    },
    {
      category: 'Preise & Abrechnung',
      questions: [
        { q: 'Wie werden die Preise berechnet?', a: 'Die Preise richten sich nach Art und Umfang der Leistung, Häufigkeit und Fläche. Wir erstellen Ihnen gerne ein individuelles Angebot.' },
        { q: 'Gibt es Mindestvertragslaufzeiten?', a: 'Für regelmäßige Reinigungen empfehlen wir Verträge ab 6 Monaten. Einzelreinigungen sind jederzeit möglich.' },
        { q: 'Welche Zahlungsmöglichkeiten gibt es?', a: 'Wir akzeptieren Rechnung, Banküberweisung und für Geschäftskunden auch Lastschriftverfahren.' }
      ]
    },
    {
      category: 'Buchung & Termine',
      questions: [
        { q: 'Wie schnell können Sie starten?', a: 'Bei Verfügbarkeit können wir innerhalb von 24-48 Stunden starten. Für Notfälle bieten wir Express-Service.' },
        { q: 'Kann ich die Reinigungszeiten selbst bestimmen?', a: 'Ja, wir richten uns nach Ihren Wünschen – ob morgens, abends oder am Wochenende.' },
        { q: 'Was passiert bei Krankheit des Personals?', a: 'Wir garantieren Vertretung und Kontinuität durch unser großes Team.' }
      ]
    },
    {
      category: 'Qualität & Nachhaltigkeit',
      questions: [
        { q: 'Welche Reinigungsmittel verwenden Sie?', a: 'Wir verwenden umweltfreundliche, biologisch abbaubare Reinigungsmittel und sind CO₂-neutral.' },
        { q: 'Wie wird die Qualität sichergestellt?', a: 'Durch regelmäßige Kontrollen, Schulungen und unser Qualitätsmanagement nach ISO 9001.' },
        { q: 'Was ist, wenn ich nicht zufrieden bin?', a: 'Wir garantieren Nachbesserung innerhalb von 24 Stunden. Ihre Zufriedenheit ist unser Ziel.' }
      ]
    }
  ]

  return (
    <>
      
      <div className="pt-20">
        <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
          <div className=" mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Häufige Fragen</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Dienstleistungen.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className=" mx-auto">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.q}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center mt-12">
              <h3 className="text-3xl font-bold text-[#0A2540] mb-4">Noch Fragen?</h3>
              <p className="text-gray-700 mb-6">
                Kontaktieren Sie uns – wir helfen Ihnen gerne weiter!
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/kontakt"><Button size="lg">Kontakt aufnehmen<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                <Button size="lg" variant="outline"><Phone className="mr-2 h-5 w-5" />+41 41 320 56 10</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

