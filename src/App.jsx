import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight, Shield, Clock, Award, Sparkles, CheckCircle2 } from 'lucide-react'

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

// HomePage Component - Apple-inspired Premium Design
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
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-amber-950/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(197,165,114,0.05),transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <Badge className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 text-sm px-6 py-2 rounded-full shadow-lg shadow-blue-500/20">
            Schweizer Qualität seit 1997
          </Badge>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Gebäudeservice
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              der Extraklasse
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Von der Privatjet-Reinigung bis zur Unterhaltsreinigung – Ihr Partner für professionelle Facility Services in der Schweiz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-7 rounded-full shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-200">
              <Phone className="mr-3 h-5 w-5" />
              +41 41 320 56 10
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 text-lg px-10 py-7 rounded-full hover:border-gray-400 transition-all duration-200">
              Angebot anfragen
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="font-medium">ISO 9001 Zertifiziert</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-600" />
              <span className="font-medium">98% Zufriedenheit</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">1.2M+</div>
              <div className="text-gray-600 text-lg">m² betreut</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">98%</div>
              <div className="text-gray-600 text-lg">Kundenzufriedenheit</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600 text-lg">Support verfügbar</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">ISO 9001</div>
              <div className="text-gray-600 text-lg">Zertifiziert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gray-100 text-gray-900 border-0 px-6 py-2 rounded-full">
              Unsere Services
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Für jeden Anspruch<br />die richtige Lösung
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Von Premium-Luxus bis Basis-Reinigung – individuell auf Ihre Bedürfnisse abgestimmt
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium Card */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-amber-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Sparkles className="h-12 w-12 text-amber-600 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">PREMIUM</h3>
                <ul className="space-y-4 mb-10">
                  {['Privatjet-Reinigung', 'Yacht-Reinigung', 'Private Housekeeping', 'Luxusimmobilien', 'VIP-Event-Service'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/privatjet">
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full py-6 shadow-lg shadow-amber-500/25 group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all duration-200">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Standard Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-blue-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Award className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">STANDARD B2B</h3>
                <ul className="space-y-4 mb-10">
                  {['Hallenreinigung', 'Maschinenreinigung', 'Industriereinigung', 'Fassadenreinigung', 'Bauendreinigung'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/hallen">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-6 shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-200">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Essentiell Card */}
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-10 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border border-green-200/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <CheckCircle2 className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">ESSENTIELL</h3>
                <ul className="space-y-4 mb-10">
                  {['Unterhaltsreinigung', 'Fensterreinigung', 'Gartenservice', 'Grundreinigung', 'Büroreinigung'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/unterhalt">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full py-6 shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/30 transition-all duration-200">
                    Mehr erfahren
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-100 text-blue-900 border-0 px-6 py-2 rounded-full">
              Warum BGS
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Schweizer Qualität<br />seit über 25 Jahren
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Zertifiziert', desc: 'ISO 9001 zertifizierte Prozesse für höchste Qualität' },
              { icon: Clock, title: 'Zuverlässig', desc: '24/7 Erreichbarkeit und pünktliche Ausführung' },
              { icon: Award, title: 'Erfahren', desc: 'Über 25 Jahre Expertise in der Gebäudereinigung' },
              { icon: Sparkles, title: 'Premium', desc: 'Von Luxus bis Standard – alles aus einer Hand' }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 font-light">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-white/20 hover:scale-[1.02] transition-all duration-200">
              <Phone className="mr-3 h-5 w-5" />
              Jetzt anrufen
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full transition-all duration-200">
              Angebot anfragen
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Navigation Component - Apple Style
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all">
            BGS Gebäudeservice
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-amber-600 mb-4 text-sm uppercase tracking-wider">Premium</h4>
                      <div className="space-y-2">
                        <Link to="/services/privatjet" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Privatjet</Link>
                        <Link to="/services/yacht" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Yacht</Link>
                        <Link to="/services/housekeeping" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Housekeeping</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 mb-4 text-sm uppercase tracking-wider">Standard</h4>
                      <div className="space-y-2">
                        <Link to="/services/hallen" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Hallen</Link>
                        <Link to="/services/maschinen" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Maschinen</Link>
                        <Link to="/services/industrie" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Industrie</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-600 mb-4 text-sm uppercase tracking-wider">Essentiell</h4>
                      <div className="space-y-2">
                        <Link to="/services/unterhalt" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Unterhalt</Link>
                        <Link to="/services/fenster" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Fenster</Link>
                        <Link to="/services/garten" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Garten</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/standorte/zurich" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Standorte
            </Link>
            <Link to="/referenzen" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Referenzen
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Blog
            </Link>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all">
              <Phone className="mr-2 h-4 w-4" />
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-gray-900 font-medium py-2">Home</Link>
              <Link to="/services/privatjet" className="block text-gray-700 hover:text-gray-900 py-2">Services</Link>
              <Link to="/standorte/zurich" className="block text-gray-700 hover:text-gray-900 py-2">Standorte</Link>
              <Link to="/referenzen" className="block text-gray-700 hover:text-gray-900 py-2">Referenzen</Link>
              <Link to="/blog" className="block text-gray-700 hover:text-gray-900 py-2">Blog</Link>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-4">
                <Phone className="mr-2 h-4 w-4" />
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Footer Component - Apple Style
function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">BGS Gebäudeservice</h3>
            <p className="text-gray-600 leading-relaxed">
              Schweizer Qualität seit 1997. Ihr Partner für professionelle Gebäudereinigung.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <div className="space-y-3">
              <Link to="/services/privatjet" className="block text-gray-600 hover:text-blue-600 transition-colors">Premium</Link>
              <Link to="/services/hallen" className="block text-gray-600 hover:text-blue-600 transition-colors">Standard</Link>
              <Link to="/services/unterhalt" className="block text-gray-600 hover:text-blue-600 transition-colors">Essentiell</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Unternehmen</h4>
            <div className="space-y-3">
              <Link to="/referenzen" className="block text-gray-600 hover:text-blue-600 transition-colors">Referenzen</Link>
              <Link to="/karriere" className="block text-gray-600 hover:text-blue-600 transition-colors">Karriere</Link>
              <Link to="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Kontakt</h4>
            <div className="space-y-3 text-gray-600">
              <a href="tel:+41413205610" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone className="h-4 w-4" />
                +41 41 320 56 10
              </a>
              <a href="mailto:info@bgs-service.ch" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="h-4 w-4" />
                info@bgs-service.ch
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Emmenbrücke, Luzern
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 BGS Gebäudeservice. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/impressum" className="text-gray-600 hover:text-blue-600 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="text-gray-600 hover:text-blue-600 transition-colors">Datenschutz</Link>
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
        <main className="flex-grow pt-20">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
