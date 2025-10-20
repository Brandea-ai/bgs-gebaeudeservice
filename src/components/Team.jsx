import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Nezir Bozhdaraj',
    role: 'Gründer & CEO',
    avatar: '👨‍💼',
    bio: 'Gründete BGS 1997 mit der Vision, Schweizer Qualität in der Gebäudereinigung neu zu definieren.',
    expertise: ['Unternehmensführung', 'Strategie', 'Business Development'],
    email: 'n.bozhdaraj@bgs-service.ch'
  },
  {
    name: 'Sarah Müller',
    role: 'Operations Director',
    avatar: '👩‍💼',
    bio: '15 Jahre Erfahrung im Facility Management. Verantwortlich für alle operativen Prozesse.',
    expertise: ['Operations', 'Prozessoptimierung', 'Qualitätsmanagement'],
    email: 's.mueller@bgs-service.ch'
  },
  {
    name: 'Thomas Weber',
    role: 'Head of Premium Services',
    avatar: '👨‍✈️',
    bio: 'Spezialist für Luxus-Reinigung mit 20 Jahren Erfahrung in der Luftfahrt-Branche.',
    expertise: ['Privatjets', 'Yachten', 'VIP-Service'],
    email: 't.weber@bgs-service.ch'
  },
  {
    name: 'Dr. Anna Schneider',
    role: 'Quality & Compliance Manager',
    avatar: '👩‍⚕️',
    bio: 'Doktor der Hygienewissenschaften. Zuständig für ISO-Zertifizierung und HACCP-Standards.',
    expertise: ['ISO 9001', 'HACCP', 'Hygiene-Standards'],
    email: 'a.schneider@bgs-service.ch'
  },
  {
    name: 'Marco Bernasconi',
    role: 'Head of Industrial Services',
    avatar: '👨‍🔧',
    bio: '25 Jahre Erfahrung in der Industriereinigung. Experte für Produktionsanlagen.',
    expertise: ['Industriereinigung', 'Maschinen', 'Großflächen'],
    email: 'm.bernasconi@bgs-service.ch'
  },
  {
    name: 'Lisa Hartmann',
    role: 'Customer Success Manager',
    avatar: '👩‍💻',
    bio: 'Ihre erste Ansprechpartnerin für alle Kundenanliegen. Sorgt für Ihre Zufriedenheit.',
    expertise: ['Kundenbetreuung', 'CRM', 'After-Sales'],
    email: 'l.hartmann@bgs-service.ch'
  },
  {
    name: 'Peter Zimmermann',
    role: 'Head of HR & Training',
    avatar: '👨‍🏫',
    bio: 'Verantwortlich für Recruitment und kontinuierliche Weiterbildung unseres Teams.',
    expertise: ['Personalentwicklung', 'Schulung', 'Recruiting'],
    email: 'p.zimmermann@bgs-service.ch'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing & Communications',
    avatar: '👩‍🎨',
    bio: 'Kreative Köpfin hinter unserer Marke. Bringt BGS in die Öffentlichkeit.',
    expertise: ['Marketing', 'Branding', 'Digital Strategy'],
    email: 'e.rodriguez@bgs-service.ch'
  }
]

export default function Team() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#0A2540] text-white">Unser Team</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
            Die Menschen hinter BGS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unser erfahrenes Team von über 150 Mitarbeitenden sorgt täglich dafür,
            dass Ihre Räumlichkeiten in perfektem Zustand sind.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#0A2540] mb-8 text-center">Führungsteam</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#0A2540]/30 group">
                  <CardContent className="p-6">
                    {/* Avatar */}
                    <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                      {member.avatar}
                    </div>

                    {/* Name & Role */}
                    <h4 className="font-bold text-lg text-[#0A2540] mb-1 text-center">
                      {member.name}
                    </h4>
                    <p className="text-sm text-[#C5A572] font-semibold mb-4 text-center">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-[#0A2540]/30 text-[#0A2540]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0A2540] transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="text-xs">Kontakt</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0A2540] transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="text-xs">LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] rounded-3xl p-12 text-white mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Unser Team in Zahlen</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black mb-2">150+</div>
              <p className="text-white/80">Mitarbeitende</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">25</div>
              <p className="text-white/80">Durchschnittsalter</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">12</div>
              <p className="text-white/80">Nationalitäten</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black mb-2">95%</div>
              <p className="text-white/80">Mitarbeiterzufriedenheit</p>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#C5A572]/10 to-[#C5A572]/5 rounded-3xl p-12 border-2 border-[#C5A572]/20">
          <h3 className="text-3xl font-bold text-[#0A2540] mb-4">
            Werde Teil unseres Teams!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Wir suchen laufend motivierte Talente für verschiedene Positionen.
          </p>
          <a
            href="/karriere"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Aktuelle Stellenangebote
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
