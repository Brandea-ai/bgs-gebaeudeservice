import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import {
  Phone, Mail, ArrowRight, Shield, Award, CheckCircle2,
  Building2, Users, Clock, Star, Target, TrendingUp,
  Sparkles, ChevronRight
} from 'lucide-react'
import Testimonials from '../components/Testimonials.jsx'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION - Professional & Clean */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <Badge className="mb-6 bg-[#0A2540]/10 text-[#0A2540] border-[#0A2540]/20 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                ISO 9001 Zertifiziert • Seit 1997
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
                Professionelle
                <span className="block text-[#1a3a5f]">Gebäudereinigung</span>
                <span className="block text-gray-600 text-3xl lg:text-4xl mt-2">für höchste Ansprüche</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Von Premium-Services wie Privatjet-Reinigung bis zur zuverlässigen Unterhaltsreinigung –
                BGS Gebäudeservice ist Ihr vertrauensvoller Partner in der ganzen Schweiz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-[#0A2540] hover:bg-[#1a3a5f] text-white text-lg px-8 py-6 w-full sm:w-auto">
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:+41413205610">
                  <Button size="lg" variant="outline" className="border-2 border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    +41 41 320 56 10
                  </Button>
                </a>
              </div>

              {/* Trust Badges - Minimalist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Shield, label: 'ISO 9001' },
                  { icon: Clock, label: '24/7 Service' },
                  { icon: Users, label: '500+ Kunden' },
                  { icon: Star, label: '4.9/5 ⭐' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 bg-white rounded-lg border border-gray-200">
                    <item.icon className="h-6 w-6 text-[#0A2540] mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image/Visual */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-background.jpg"
                  alt="BGS Gebäudeservice"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-black mb-4">25+</div>
                    <div className="text-2xl font-semibold">Jahre Erfahrung</div>
                    <div className="text-lg text-blue-200 mt-2">in der Schweiz</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0A2540]">98%</div>
                    <div className="text-sm text-gray-600">Kundenzufriedenheit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - Clean & Professional */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '1.2M+', label: 'm² Reinigungsfläche', icon: Building2 },
              { value: '150+', label: 'Mitarbeitende', icon: Users },
              { value: '24/7', label: 'Notfall-Service', icon: Clock },
              { value: '25+', label: 'Jahre Erfahrung', icon: Award }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0A2540]/5 rounded-xl mb-4">
                  <stat.icon className="h-7 w-7 text-[#0A2540]" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW - Professional Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#0A2540]/10 text-[#0A2540] border-[#0A2540]/20">
              Unsere Dienstleistungen
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
              Maßgeschneiderte Lösungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei Service-Kategorien für jeden Bedarf – von exklusiven Premium-Services
              bis zur zuverlässigen Unterhaltsreinigung
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium */}
            <Card className="border-2 border-gray-200 hover:border-[#C5A572] hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C5A572] to-[#d4b583] rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Premium Services</h3>
                <p className="text-gray-600 mb-6">
                  Exklusive Reinigungslösungen für Luxus-Segment: Privatjets, Yachten und VIP-Immobilien
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <span>Privatjet & Yacht-Reinigung</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <span>Private Housekeeping</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <span>VIP-Event Service</span>
                  </li>
                </ul>
                <Link to="/services/privatjet">
                  <Button variant="outline" className="w-full border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-white">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Standard B2B */}
            <Card className="border-2 border-[#0A2540]/20 bg-[#0A2540] text-white hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Standard B2B</h3>
                <p className="text-blue-100 mb-6">
                  Professionelle Lösungen für Industrie, Produktion und gewerbliche Immobilien
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Hallen & Industriereinigung</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Maschinenreinigung</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span>Fassaden & Sonderreinigung</span>
                  </li>
                </ul>
                <Link to="/services/hallen">
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#0A2540]">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Essentiell */}
            <Card className="border-2 border-gray-200 hover:border-[#10B981] hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Essentiell</h3>
                <p className="text-gray-600 mb-6">
                  Zuverlässige Basis-Services für KMU, Büros und Privatpersonen
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>Unterhaltsreinigung</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>Fenster & Büroreinigung</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>Hausmeisterservice</span>
                  </li>
                </ul>
                <Link to="/services/unterhalt">
                  <Button variant="outline" className="w-full border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* WHY CHOOSE BGS - Professional */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#0A2540]/10 text-[#0A2540] border-[#0A2540]/20">
                Warum BGS?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
                Schweizer Qualität <span className="text-gray-600">seit über 25 Jahren</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Als führendes Schweizer Gebäudeservice-Unternehmen setzen wir Maßstäbe
                in Qualität, Zuverlässigkeit und Innovation.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'ISO 9001 Zertifiziert',
                    desc: 'Qualitätsmanagement nach internationalen Standards'
                  },
                  {
                    icon: Clock,
                    title: '24/7 Notfall-Service',
                    desc: 'Rund um die Uhr für Sie erreichbar'
                  },
                  {
                    icon: Award,
                    title: '25+ Jahre Erfahrung',
                    desc: 'Über ein Vierteljahrhundert Expertise'
                  },
                  {
                    icon: Target,
                    title: 'Maßgeschneiderte Lösungen',
                    desc: 'Individuelle Konzepte für Ihre Anforderungen'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0A2540]/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-[#0A2540]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A2540] mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, value: '500+', label: 'Kunden' },
                  { icon: Building2, value: '1.2M+', label: 'm² Fläche' },
                  { icon: Star, value: '4.9/5', label: 'Bewertung' },
                  { icon: TrendingUp, value: '98%', label: 'Zufriedenheit' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl text-center">
                    <stat.icon className="h-8 w-8 text-[#0A2540] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[#0A2540] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white p-6 rounded-xl border-2 border-[#0A2540]/10">
                <h4 className="font-bold text-[#0A2540] mb-2">Unsere Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  Wir schaffen saubere, sichere und inspirierende Umgebungen für unsere Kunden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Professional */}
      <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt">
              <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100 text-lg px-10 py-6 w-full sm:w-auto">
                Jetzt anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+41413205610">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                +41 41 320 56 10
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
