import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight, Shield, Clock, Award, Sparkles, CheckCircle2, Star, Users, Building2, Zap, TrendingUp, Target, ArrowRight, PlayCircle } from 'lucide-react'

// Import ALL service pages
import PrivatjetReinigungPage from './pages/services/PrivatjetReinigung.jsx'
import { YachtReinigungPage, PrivateHousekeepingPage } from './pages/services/AllPremiumServices.jsx'
import { LuxusimmobilienPage, VIPEventServicePage } from './pages/services/PremiumComplete.jsx'
import { HallenreinigungPage, MaschinenreinigungPage, SonderreinigungPage, IndustriereinigungPage, FassadenreinigungPage, BauendreinigungPage } from './pages/services/AllStandardServices.jsx'
import { UnterhaltsreinigungPage, FensterreinigungPage, GartenservicePage, GrundreinigungPage, HausmeisterservicePage, BüroreinigungPage } from './pages/services/AllEssentiellServices.jsx'

// Import other pages
import { ZuerichPage as ZurichPage, LuzernPage, StGallenPage } from './pages/locations/LocationPages.jsx'
import { ReferenzenPage, KarrierePage, FAQPage } from './pages/ContentPages.jsx'
import BlogPage from './pages/Blog.jsx'
import DownloadsPage from './pages/Downloads.jsx'
import GlossarPage from './pages/Glossar.jsx'
import { ImpressumPage, DatenschutzPage } from './pages/Legal.jsx'
import KontaktPage from './pages/Kontakt.jsx'
import { UeberUnsPage } from './pages/UeberUns.jsx'

// HomePage Component - WORLD-CLASS PROFESSIONAL DESIGN
function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white">
      {/* HERO SECTION - FULL SCREEN WITH BACKGROUND IMAGE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero-background.jpg)',
              transform: scrolled ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s ease-out'
            }}
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-slate-900/90"></div>
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-600/20 animate-pulse"></div>
        </div>

        {/* Content - Full Width */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 py-32 text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white border-0 text-base px-8 py-3 rounded-full shadow-2xl shadow-blue-500/50 animate-fade-in">
              <Award className="inline-block w-4 h-4 mr-2" />
              Schweizer Qualität seit 1997 • ISO 9001 Zertifiziert
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black mb-10 leading-[0.9] tracking-tighter">
              <span className="block text-white drop-shadow-2xl">
                Gebäudeservice
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl mt-4">
                der Extraklasse
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-100 mb-16 leading-relaxed font-light drop-shadow-lg">
              Von der Privatjet-Reinigung bis zur Unterhaltsreinigung – <span className="font-semibold text-white">Ihr Partner</span> für professionelle Facility Services in der Schweiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white text-xl px-12 py-8 rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300">
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                +41 41 320 56 10
              </Button>
              <Button size="lg" variant="outline" className="group border-3 border-white/90 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-blue-900 text-xl px-12 py-8 rounded-full hover:border-white transition-all duration-300 hover:scale-105 shadow-xl">
                Kostenloses Angebot
                <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: 'ISO 9001 Zertifiziert', color: 'text-green-400' },
                { icon: Clock, text: '24/7 Notfall-Service', color: 'text-blue-400' },
                { icon: Users, text: '500+ Zufriedene Kunden', color: 'text-purple-400' },
                { icon: Star, text: '4.9/5 Bewertung', color: 'text-amber-400' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                  <span className="text-white font-semibold text-center text-sm">{item.text}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* STATS SECTION - GRADIENT BACKGROUND */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-y border-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '1.2M+', label: 'm² Reinigungsfläche', icon: Building2, gradient: 'from-blue-600 to-blue-800' },
              { value: '98%', label: 'Kundenzufriedenheit', icon: Star, gradient: 'from-green-600 to-emerald-700' },
              { value: '24/7', label: 'Support & Notdienst', icon: Clock, gradient: 'from-purple-600 to-purple-800' },
              { value: '25+', label: 'Jahre Erfahrung', icon: Award, gradient: 'from-amber-600 to-orange-700' }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <stat.icon className={`h-8 w-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                </div>
                <div className={`text-6xl lg:text-7xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION WITH TABS - FULL WIDTH */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div>
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border-0 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Unsere Dienstleistungen
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
              Für jeden Anspruch<br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">die perfekte Lösung</span>
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed">
              Von Premium-Luxus bis Basis-Reinigung – individuell auf Ihre Bedürfnisse abgestimmt
            </p>
          </div>

          {/* TABS for Service Categories */}
          <Tabs defaultValue="premium" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-16 h-auto p-2 bg-gray-100 rounded-2xl">
              <TabsTrigger value="premium" className="text-lg py-5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300">
                <Sparkles className="mr-2 h-5 w-5" />
                Premium
              </TabsTrigger>
              <TabsTrigger value="standard" className="text-lg py-5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300">
                <Building2 className="mr-2 h-5 w-5" />
                Standard B2B
              </TabsTrigger>
              <TabsTrigger value="essentiell" className="text-lg py-5 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Essentiell
              </TabsTrigger>
            </TabsList>

            {/* Premium Services */}
            <TabsContent value="premium" className="space-y-8 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  { title: 'Privatjet-Reinigung', desc: 'Professionelle Reinigung für Privatjets mit höchsten Standards', link: '/services/privatjet', features: ['VIP-Service', 'Diskret & Zuverlässig', '24/7 Verfügbar'] },
                  { title: 'Yacht-Reinigung', desc: 'Spezialisierte Reinigung für Luxus-Yachten', link: '/services/yacht', features: ['Marine-Expertise', 'Hochglanzpolitur', 'Komplettservice'] },
                  { title: 'Private Housekeeping', desc: 'Exklusiver Housekeeping-Service für Luxusimmobilien', link: '/services/housekeeping', features: ['Diskret', 'Individuell', 'Premium-Produkte'] },
                  { title: 'Luxusimmobilien', desc: 'Maßgeschneiderte Reinigung für Luxusimmobilien', link: '/services/luxusimmobilien', features: ['Edeloberflächen', 'Kunstobjekte', 'Maßgeschneidert'] }
                ].map((service, i) => (
                  <Link key={i} to={service.link} className="group">
                    <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50/50 rounded-3xl p-10 border-2 border-amber-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden h-full">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(245 158 11 / 0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <Sparkles className="h-12 w-12 text-amber-600" />
                          <Badge className="bg-amber-100 text-amber-800 border-0">Premium</Badge>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-amber-600 font-semibold group-hover:gap-4 gap-2 transition-all">
                          Mehr erfahren
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Standard B2B Services */}
            <TabsContent value="standard" className="space-y-8 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  { title: 'Hallenreinigung', desc: 'Professionelle Reinigung großer Hallen und Industrieflächen', link: '/services/hallen', features: ['Großflächen', 'Spezialgeräte', 'Nachtservice'] },
                  { title: 'Maschinenreinigung', desc: 'Fachgerechte Reinigung von Produktionsmaschinen', link: '/services/maschinen', features: ['Industriestandards', 'Präzise', 'Zertifiziert'] },
                  { title: 'Industriereinigung', desc: 'Komplettlösung für industrielle Reinigungsanforderungen', link: '/services/industrie', features: ['Rundum-Service', 'Sicherheit', 'Effizienz'] },
                  { title: 'Fassadenreinigung', desc: 'Professionelle Gebäudefassaden-Reinigung', link: '/services/fassaden', features: ['Höhenzugang', 'Schonend', 'Wetterunabhängig'] }
                ].map((service, i) => (
                  <Link key={i} to={service.link} className="group">
                    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-3xl p-10 border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden h-full">
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(37 99 235 / 0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <Building2 className="h-12 w-12 text-blue-600" />
                          <Badge className="bg-blue-100 text-blue-800 border-0">B2B</Badge>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-4 gap-2 transition-all">
                          Mehr erfahren
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Essentiell Services */}
            <TabsContent value="essentiell" className="space-y-8 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  { title: 'Unterhaltsreinigung', desc: 'Regelmäßige professionelle Unterhaltsreinigung', link: '/services/unterhalt', features: ['Flexibel', 'Zuverlässig', 'Kosteneffizient'] },
                  { title: 'Fensterreinigung', desc: 'Streifenfreie Fensterreinigung für alle Gebäudetypen', link: '/services/fenster', features: ['Streifenfrei', 'Alle Höhen', 'Schnell'] },
                  { title: 'Büroreinigung', desc: 'Professionelle Büroreinigung für produktive Arbeitsumgebung', link: '/services/buero', features: ['Täglich', 'Hygienisch', 'Diskret'] },
                  { title: 'Grundreinigung', desc: 'Intensive Grundreinigung für nachhaltiges Ergebnis', link: '/services/grund', features: ['Intensiv', 'Gründlich', 'Nachhaltig'] }
                ].map((service, i) => (
                  <Link key={i} to={service.link} className="group">
                    <div className="relative bg-gradient-to-br from-green-50 via-white to-green-50/50 rounded-3xl p-10 border-2 border-green-100 hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden h-full">
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(34 197 94 / 0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <CheckCircle2 className="h-12 w-12 text-green-600" />
                          <Badge className="bg-green-100 text-green-800 border-0">Essentiell</Badge>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="border-green-300 text-green-700 bg-green-50">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-green-600 font-semibold group-hover:gap-4 gap-2 transition-all">
                          Mehr erfahren
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* WHY CHOOSE US - ACCORDION SECTION */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        </div>

        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 px-6 py-3 rounded-full">
                Warum BGS wählen?
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Schweizer Qualität<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">seit über 25 Jahren</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Als führendes Schweizer Gebäudeservice-Unternehmen setzen wir Maßstäbe in Qualität, Zuverlässigkeit und Innovation.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    title: 'ISO 9001 Zertifiziert',
                    icon: Shield,
                    content: 'Unsere Prozesse entsprechen internationalen Qualitätsstandards. Jeder Schritt wird dokumentiert und kontinuierlich optimiert für maximale Kundenzufriedenheit.'
                  },
                  {
                    title: '24/7 Notfall-Service',
                    icon: Clock,
                    content: 'Rund um die Uhr erreichbar für Notfälle und dringende Anfragen. Unser Team ist immer für Sie da – auch an Wochenenden und Feiertagen.'
                  },
                  {
                    title: '25+ Jahre Erfahrung',
                    icon: Award,
                    content: 'Über ein Vierteljahrhundert Expertise in der professionellen Gebäudereinigung. Von kleinen Büros bis zu Großprojekten – wir wissen, worauf es ankommt.'
                  },
                  {
                    title: 'Premium & Basis aus einer Hand',
                    icon: Sparkles,
                    content: 'Von Luxus-Privatjets bis zur Standardreinigung – alles aus einer Hand. Ein Ansprechpartner für alle Ihre Reinigungsbedürfnisse.'
                  }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl px-6 hover:bg-white/10 transition-all">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <item.icon className="h-6 w-6 text-blue-400" />
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6 text-base leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Side - Image/Stats */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Users, value: '500+', label: 'Kunden' },
                    { icon: Building2, value: '1.2M+', label: 'm² Fläche' },
                    { icon: Star, value: '4.9/5', label: 'Bewertung' },
                    { icon: TrendingUp, value: '98%', label: 'Zufriedenheit' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                      <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-center">
                <Target className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Unsere Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  Wir schaffen saubere, sichere und inspirierende Umgebungen, in denen Menschen gerne leben und arbeiten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - FULL WIDTH GRADIENT */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <div className="relative z-10 text-center">
          <Zap className="h-20 w-20 text-yellow-400 mx-auto mb-8 animate-pulse" />
          <h2 className="text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-2xl lg:text-3xl mb-16 text-blue-100 font-light leading-relaxed">
            Kontaktieren Sie uns noch heute für ein <span className="font-semibold text-white">kostenloses</span> und unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="group bg-white text-blue-600 hover:bg-gray-50 text-xl px-14 py-8 rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300">
              <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Jetzt anrufen
            </Button>
            <Button size="lg" variant="outline" className="group border-3 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-14 py-8 rounded-full transition-all duration-300 hover:scale-105">
              Angebot anfragen
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// MEGA DROPDOWN NAVIGATION - WORLD CLASS
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const megaMenuServices = [
    {
      category: 'Premium Services',
      color: 'amber',
      icon: Sparkles,
      services: [
        { name: 'Privatjet-Reinigung', link: '/services/privatjet', desc: 'VIP Service für Privatjets' },
        { name: 'Yacht-Reinigung', link: '/services/yacht', desc: 'Marine Expertise' },
        { name: 'Housekeeping', link: '/services/housekeeping', desc: 'Exklusiver Service' },
        { name: 'Luxusimmobilien', link: '/services/luxusimmobilien', desc: 'Maßgeschneidert' }
      ]
    },
    {
      category: 'Standard B2B',
      color: 'blue',
      icon: Building2,
      services: [
        { name: 'Hallenreinigung', link: '/services/hallen', desc: 'Großflächen-Experten' },
        { name: 'Maschinenreinigung', link: '/services/maschinen', desc: 'Industriestandards' },
        { name: 'Industriereinigung', link: '/services/industrie', desc: 'Komplettlösungen' },
        { name: 'Fassadenreinigung', link: '/services/fassaden', desc: 'Höhenzugang' }
      ]
    },
    {
      category: 'Essentiell',
      color: 'green',
      icon: CheckCircle2,
      services: [
        { name: 'Unterhaltsreinigung', link: '/services/unterhalt', desc: 'Zuverlässig & flexibel' },
        { name: 'Fensterreinigung', link: '/services/fenster', desc: 'Streifenfrei' },
        { name: 'Büroreinigung', link: '/services/buero', desc: 'Produktive Umgebung' },
        { name: 'Grundreinigung', link: '/services/grund', desc: 'Intensiv & gründlich' }
      ]
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/80 backdrop-blur-lg shadow-md'
    }`}>
      <div className="px-6 sm:px-12 lg:px-24">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="text-3xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 transition-all">
            BGS Gebäudeservice
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {/* MEGA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold text-lg transition-colors">
                Services
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-white/98 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 border border-gray-100">
                  <div className="grid grid-cols-3 gap-8">
                    {megaMenuServices.map((category, i) => {
                      const Icon = category.icon
                      const colorMap = {
                        amber: { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:text-amber-600', border: 'border-amber-200' },
                        blue: { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:text-blue-600', border: 'border-blue-200' },
                        green: { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:text-green-600', border: 'border-green-200' }
                      }
                      const colors = colorMap[category.color]

                      return (
                        <div key={i} className={`${colors.bg} rounded-2xl p-6 border ${colors.border}`}>
                          <div className="flex items-center gap-3 mb-6">
                            <Icon className={`h-6 w-6 ${colors.text}`} />
                            <h4 className={`font-bold ${colors.text} text-sm uppercase tracking-wider`}>
                              {category.category}
                            </h4>
                          </div>
                          <div className="space-y-3">
                            {category.services.map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.link}
                                className={`block group`}
                              >
                                <div className={`py-3 px-4 rounded-xl hover:bg-white transition-all`}>
                                  <div className={`font-semibold text-gray-900 ${colors.hover} transition-colors mb-1`}>
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-600">{service.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* CTA in Mega Menu */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">Nicht sicher, welcher Service?</h4>
                        <p className="text-gray-600">Wir beraten Sie gerne kostenlos</p>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 shadow-lg">
                        <Phone className="mr-2 h-4 w-4" />
                        Kontakt
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/standorte/zurich" className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition-colors">
              Standorte
            </Link>
            <Link to="/referenzen" className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition-colors">
              Referenzen
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 font-semibold text-lg transition-colors">
              Blog
            </Link>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Phone className="mr-2 h-5 w-5" />
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-8 border-t border-gray-100">
            <div className="space-y-6">
              <Link to="/" className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3">Home</Link>
              <Link to="/services/privatjet" className="block text-gray-700 hover:text-gray-900 py-3">Services</Link>
              <Link to="/standorte/zurich" className="block text-gray-700 hover:text-gray-900 py-3">Standorte</Link>
              <Link to="/referenzen" className="block text-gray-700 hover:text-gray-900 py-3">Referenzen</Link>
              <Link to="/blog" className="block text-gray-700 hover:text-gray-900 py-3">Blog</Link>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full mt-6 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// FOOTER - PROFESSIONAL
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white border-t border-white/10">
      <div className="px-6 sm:px-12 lg:px-24 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              BGS Gebäudeservice
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Schweizer Qualität seit 1997. Ihr Partner für professionelle Gebäudereinigung.
            </p>
            <div className="flex gap-4">
              {[Shield, Award, Star].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
            <div className="space-y-4">
              {[
                { name: 'Premium', link: '/services/privatjet' },
                { name: 'Standard B2B', link: '/services/hallen' },
                { name: 'Essentiell', link: '/services/unterhalt' },
                { name: 'Alle Services', link: '/services/privatjet' }
              ].map((item, i) => (
                <Link key={i} to={item.link} className="block text-gray-400 hover:text-white transition-colors group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Unternehmen</h4>
            <div className="space-y-4">
              {[
                { name: 'Referenzen', link: '/referenzen' },
                { name: 'Karriere', link: '/karriere' },
                { name: 'Blog', link: '/blog' },
                { name: 'Über uns', link: '/referenzen' }
              ].map((item, i) => (
                <Link key={i} to={item.link} className="block text-gray-400 hover:text-white transition-colors group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Kontakt</h4>
            <div className="space-y-4 text-gray-400">
              <a href="tel:+41413205610" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="group-hover:translate-x-1 inline-block transition-transform">+41 41 320 56 10</span>
              </a>
              <a href="mailto:info@bgs-service.ch" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="group-hover:translate-x-1 inline-block transition-transform">info@bgs-service.ch</span>
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                Emmenbrücke, Luzern
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2025 BGS Gebäudeservice. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-8 text-sm">
              <Link to="/impressum" className="text-gray-500 hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-gray-500 hover:text-white transition-colors">Datenschutz</Link>
              <Link to="/faq" className="text-gray-500 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Premium Services */}
            <Route path="/services/privatjet" element={<PrivatjetReinigungPage />} />
            <Route path="/services/yacht" element={<YachtReinigungPage />} />
            <Route path="/services/housekeeping" element={<PrivateHousekeepingPage />} />
            <Route path="/services/luxusimmobilien" element={<LuxusimmobilienPage />} />
            <Route path="/services/vip-events" element={<VIPEventServicePage />} />

            {/* Standard B2B Services */}
            <Route path="/services/hallen" element={<HallenreinigungPage />} />
            <Route path="/services/maschinen" element={<MaschinenreinigungPage />} />
            <Route path="/services/sonder" element={<SonderreinigungPage />} />
            <Route path="/services/industrie" element={<IndustriereinigungPage />} />
            <Route path="/services/fassaden" element={<FassadenreinigungPage />} />
            <Route path="/services/bauend" element={<BauendreinigungPage />} />

            {/* Essentiell Services */}
            <Route path="/services/unterhalt" element={<UnterhaltsreinigungPage />} />
            <Route path="/services/fenster" element={<FensterreinigungPage />} />
            <Route path="/services/garten" element={<GartenservicePage />} />
            <Route path="/services/grund" element={<GrundreinigungPage />} />
            <Route path="/services/hausmeister" element={<HausmeisterservicePage />} />
            <Route path="/services/buero" element={<BüroreinigungPage />} />

            {/* Locations */}
            <Route path="/standorte/zurich" element={<ZurichPage />} />
            <Route path="/standorte/luzern" element={<LuzernPage />} />
            <Route path="/standorte/stgallen" element={<StGallenPage />} />

            {/* Content Pages */}
            <Route path="/referenzen" element={<ReferenzenPage />} />
            <Route path="/karriere" element={<KarrierePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/glossar" element={<GlossarPage />} />

            {/* Legal */}
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />

            {/* Contact */}
            <Route path="/kontakt" element={<KontaktPage />} />

            {/* About Us */}
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
