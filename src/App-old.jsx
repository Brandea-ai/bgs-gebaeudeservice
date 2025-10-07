import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Building2, ChevronDown, Menu, X, MessageSquare, ArrowRight,
  Sparkles, Shield, Leaf, Phone, Mail, MapPin, Download, FileText,
  BookOpen, Users, Award, TrendingUp, Clock, CheckCircle2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

// Import images
import officeCleaningImg from './assets/images/office-cleaning-1.jpg'
import facilityManagementImg from './assets/images/facility-management.jpg'
import industrialCleaningImg from './assets/images/industrial-cleaning.jpg'
import healthcareCleaningImg from './assets/images/healthcare-cleaning.jpg'
import aiDashboardImg from './assets/images/ai-dashboard-2.png'
import smartBuildingImg from './assets/images/smart-building.webp'

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] p-2 rounded-xl group-hover:scale-105 transition-transform">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#0A2540] block leading-none">BGS</span>
              <span className="text-xs text-gray-600 leading-none">Gebäudeservice</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === '/' ? 'text-[#0A2540] bg-gray-50' : 'text-gray-700 hover:text-[#0A2540] hover:bg-gray-50'}`}>
              Home
            </Link>

            {/* Services Mega Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="grid grid-cols-3 gap-6 p-8">
                  {/* Premium */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Sparkles className="h-5 w-5 text-[#C5A572] mr-2" />
                      <h3 className="font-bold text-[#0A2540]">PREMIUM</h3>
                      <Badge className="ml-2 bg-[#C5A572] text-white text-xs">Luxus</Badge>
                    </div>
                    <ul className="space-y-2">
                      <li><Link to="/services/privatjet" className="text-sm text-gray-700 hover:text-[#C5A572] transition-colors block py-1">Privatjet-Reinigung</Link></li>
                      <li><Link to="/services/yacht" className="text-sm text-gray-700 hover:text-[#C5A572] transition-colors block py-1">Yacht-Reinigung</Link></li>
                      <li><Link to="/services/housekeeping" className="text-sm text-gray-700 hover:text-[#C5A572] transition-colors block py-1">Private Housekeeping</Link></li>
                      <li><Link to="/services/luxus" className="text-sm text-gray-700 hover:text-[#C5A572] transition-colors block py-1">Luxusimmobilien</Link></li>
                      <li><Link to="/services/vip-events" className="text-sm text-gray-700 hover:text-[#C5A572] transition-colors block py-1">VIP-Event-Service</Link></li>
                    </ul>
                  </div>

                  {/* Standard */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Building2 className="h-5 w-5 text-[#0A2540] mr-2" />
                      <h3 className="font-bold text-[#0A2540]">STANDARD</h3>
                      <Badge className="ml-2 bg-[#0A2540] text-white text-xs">B2B</Badge>
                    </div>
                    <ul className="space-y-2">
                      <li><Link to="/services/hallen" className="text-sm text-gray-700 hover:text-[#0A2540] transition-colors block py-1">Hallenreinigung</Link></li>
                      <li><Link to="/services/maschinen" className="text-sm text-gray-700 hover:text-[#0A2540] transition-colors block py-1">Maschinenreinigung</Link></li>
                      <li><Link to="/services/sonder" className="text-sm text-gray-700 hover:text-[#0A2540] transition-colors block py-1">Sonderreinigung</Link></li>
                      <li><Link to="/services/industrie" className="text-sm text-gray-700 hover:text-[#0A2540] transition-colors block py-1">Industriereinigung</Link></li>
                      <li><Link to="/services/fassaden" className="text-sm text-gray-700 hover:text-[#0A2540] transition-colors block py-1">Fassadenreinigung</Link></li>
                      <li><Link to="/services/bauend" className="text-sm text-gray-700 hover:text-[#0A2540] transition-colors block py-1">Bauendreinigung</Link></li>
                    </ul>
                  </div>

                  {/* Essentiell */}
                  <div>
                    <div className="flex items-center mb-4">
                      <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2" />
                      <h3 className="font-bold text-[#0A2540]">ESSENTIELL</h3>
                      <Badge className="ml-2 bg-[#10B981] text-white text-xs">Basis</Badge>
                    </div>
                    <ul className="space-y-2">
                      <li><Link to="/services/unterhalt" className="text-sm text-gray-700 hover:text-[#10B981] transition-colors block py-1">Unterhaltsreinigung</Link></li>
                      <li><Link to="/services/fenster" className="text-sm text-gray-700 hover:text-[#10B981] transition-colors block py-1">Fensterreinigung</Link></li>
                      <li><Link to="/services/garten" className="text-sm text-gray-700 hover:text-[#10B981] transition-colors block py-1">Gartenservice</Link></li>
                      <li><Link to="/services/grund" className="text-sm text-gray-700 hover:text-[#10B981] transition-colors block py-1">Grundreinigung</Link></li>
                      <li><Link to="/services/hausmeister" className="text-sm text-gray-700 hover:text-[#10B981] transition-colors block py-1">Hausmeisterservice</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/ki-integration" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === '/ki-integration' ? 'text-[#0A2540] bg-gray-50' : 'text-gray-700 hover:text-[#0A2540] hover:bg-gray-50'}`}>
              KI-Integration
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors flex items-center">
                Ressourcen
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link to="/blog" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <FileText className="h-4 w-4 mr-3 text-gray-400" />
                    Blog
                  </Link>
                  <Link to="/downloads" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <Download className="h-4 w-4 mr-3 text-gray-400" />
                    Downloads
                  </Link>
                  <Link to="/glossar" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    <BookOpen className="h-4 w-4 mr-3 text-gray-400" />
                    Glossar
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/ueber-uns" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === '/ueber-uns' ? 'text-[#0A2540] bg-gray-50' : 'text-gray-700 hover:text-[#0A2540] hover:bg-gray-50'}`}>
              Über uns
            </Link>

            <Link to="/kontakt">
              <Button className="ml-4 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] hover:from-[#1a3a5f] hover:to-[#0A2540] text-white shadow-lg">
                Kontakt
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              <Link to="/" className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0A2540]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              <div>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700">
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <p className="text-xs font-semibold text-[#C5A572] mb-2">PREMIUM</p>
                    <Link to="/services/privatjet" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Privatjet-Reinigung</Link>
                    <Link to="/services/yacht" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Yacht-Reinigung</Link>
                    <p className="text-xs font-semibold text-[#0A2540] mb-2 mt-4">STANDARD</p>
                    <Link to="/services/hallen" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Hallenreinigung</Link>
                    <Link to="/services/maschinen" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Maschinenreinigung</Link>
                    <p className="text-xs font-semibold text-[#10B981] mb-2 mt-4">ESSENTIELL</p>
                    <Link to="/services/unterhalt" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Unterhaltsreinigung</Link>
                    <Link to="/services/fenster" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Fensterreinigung</Link>
                  </div>
                )}
              </div>

              <Link to="/ki-integration" className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0A2540]" onClick={() => setMobileMenuOpen(false)}>KI-Integration</Link>
              
              <div>
                <button onClick={() => setResourcesOpen(!resourcesOpen)} className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700">
                  Ressourcen
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link to="/blog" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                    <Link to="/downloads" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Downloads</Link>
                    <Link to="/glossar" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Glossar</Link>
                  </div>
                )}
              </div>

              <Link to="/ueber-uns" className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0A2540]" onClick={() => setMobileMenuOpen(false)}>Über uns</Link>
              <Link to="/kontakt" className="block py-3 text-sm font-medium text-gray-700 hover:text-[#0A2540]" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Home Page
function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                Schweizer Qualität seit 1997
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Facility Management
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#d4b583]">der Extraklasse</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Von Luxus-Yachten bis Industriehallen – wir bieten massgeschneiderte Reinigungslösungen für höchste Ansprüche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt">
                  <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100 shadow-xl">
                    Beratungstermin vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services/privatjet">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Premium Services entdecken
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <p className="text-4xl font-bold mb-1">1.2M+</p>
                  <p className="text-sm text-gray-300">m² betreute Fläche</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">98%</p>
                  <p className="text-sm text-gray-300">Kundenzufriedenheit</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">24/7</p>
                  <p className="text-sm text-gray-300">Premium Support</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={officeCleaningImg} alt="Professional Cleaning" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#C5A572]/10 p-4 rounded-xl">
                    <Award className="h-8 w-8 text-[#C5A572]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0A2540]">ISO 9001</p>
                    <p className="text-sm text-gray-600">Zertifiziert</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Tiers Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#0A2540]/10 text-[#0A2540]">
              Unsere Service-Kategorien
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Drei Welten, ein Standard: Perfektion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vom Privatjet bis zur Produktionshalle – wir haben die passende Lösung
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#C5A572] to-[#d4b583] rounded-3xl p-8 text-white overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <Sparkles className="h-12 w-12 mb-6" />
                <h3 className="text-3xl font-bold mb-4">PREMIUM</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Exklusive Services für Luxus-Segment: Privatjets, Yachten, VIP-Immobilien
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Privatjet & Yacht-Reinigung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Private Housekeeping</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>VIP-Event-Service</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>24/7 Concierge</span>
                  </li>
                </ul>
                <Link to="/services/privatjet">
                  <Button className="w-full bg-white text-[#C5A572] hover:bg-gray-100">
                    Premium entdecken
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] rounded-3xl p-8 text-white overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <Building2 className="h-12 w-12 mb-6" />
                <h3 className="text-3xl font-bold mb-4">STANDARD</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Professionelle B2B-Lösungen für Industrie, Produktion und Gewerbe
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Hallen & Maschinenreinigung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Industriereinigung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Fassaden & Sonderreinigung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Bauendreinigung</span>
                  </li>
                </ul>
                <Link to="/services/hallen">
                  <Button className="w-full bg-white text-[#0A2540] hover:bg-gray-100">
                    B2B Services ansehen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Essentiell */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-8 text-white overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <CheckCircle2 className="h-12 w-12 mb-6" />
                <h3 className="text-3xl font-bold mb-4">ESSENTIELL</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Zuverlässige Basis-Services für KMU, Büros und Privatpersonen
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Unterhaltsreinigung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Fenster & Gartenservice</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Grundreinigung</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0" />
                    <span>Hausmeisterservice</span>
                  </li>
                </ul>
                <Link to="/services/unterhalt">
                  <Button className="w-full bg-white text-[#10B981] hover:bg-gray-100">
                    Basis-Services entdecken
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für eine saubere Zukunft?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Anforderungen finden
          </p>
          <Link to="/kontakt">
            <Button size="lg" className="bg-white text-[#0A2540] hover:bg-gray-100 shadow-xl">
              Kostenlose Beratung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Service Detail Page Template
function ServiceDetailPage({ title, category, description, features, image }) {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <Badge className={`mb-6 ${
            category === 'premium' ? 'bg-[#C5A572] text-white' :
            category === 'standard' ? 'bg-[#0A2540] text-white' :
            'bg-[#10B981] text-white'
          }`}>
            {category === 'premium' ? 'PREMIUM' : category === 'standard' ? 'STANDARD' : 'ESSENTIELL'}
          </Badge>
          <h1 className="text-5xl font-bold text-[#0A2540] mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-12">{description}</p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img src={image} alt={title} className="rounded-2xl shadow-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Leistungsumfang</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className={`h-6 w-6 mr-3 mt-1 flex-shrink-0 ${
                      category === 'premium' ? 'text-[#C5A572]' :
                      category === 'standard' ? 'text-[#0A2540]' :
                      'text-[#10B981]'
                    }`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/kontakt" className="mt-8 inline-block">
                <Button className={`${
                  category === 'premium' ? 'bg-[#C5A572] hover:bg-[#b59562]' :
                  category === 'standard' ? 'bg-[#0A2540] hover:bg-[#1a3a5f]' :
                  'bg-[#10B981] hover:bg-[#059669]'
                } text-white`}>
                  Jetzt anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Blog Page
function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-6">Blog & News</h1>
          <p className="text-xl text-gray-600 mb-12">Aktuelle Beiträge rund um Facility Management</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={officeCleaningImg} alt="Blog" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <Badge className="mb-3 bg-[#0A2540] text-white">Facility Management</Badge>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">Reinigungstipps für Büros</h3>
                  <p className="text-gray-600 mb-4">Erfahren Sie, wie Sie Ihre Büroräume optimal sauber halten...</p>
                  <Button variant="link" className="p-0 text-[#0A2540]">
                    Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Downloads Page
function DownloadsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-6">Downloads</h1>
          <p className="text-xl text-gray-600 mb-12">Broschüren, Zertifikate und Checklisten</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Service-Broschüre', type: 'PDF', size: '2.4 MB' },
              { title: 'ISO 9001 Zertifikat', type: 'PDF', size: '1.2 MB' },
              { title: 'Reinigungscheckliste', type: 'PDF', size: '0.8 MB' },
              { title: 'Preisliste 2025', type: 'PDF', size: '1.5 MB' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-[#0A2540]/10 p-4 rounded-lg mr-4">
                    <FileText className="h-8 w-8 text-[#0A2540]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.type} • {item.size}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Glossar Page
function GlossarPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0A2540] mb-6">Glossar</h1>
          <p className="text-xl text-gray-600 mb-12">Fachbegriffe rund um Facility Management</p>
          
          <div className="space-y-6">
            {[
              { term: 'Unterhaltsreinigung', definition: 'Regelmässige Reinigung zur Aufrechterhaltung der Sauberkeit in Gebäuden.' },
              { term: 'Grundreinigung', definition: 'Intensive Reinigung aller Bereiche, die über die Unterhaltsreinigung hinausgeht.' },
              { term: 'Facility Management', definition: 'Ganzheitliche Verwaltung und Bewirtschaftung von Gebäuden und Anlagen.' },
              { term: 'ISO 9001', definition: 'Internationale Norm für Qualitätsmanagementsysteme.' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">{item.term}</h3>
                <p className="text-gray-600">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-lg">BGS Gebäudeservice</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professionelle Gebäudereinigung und Facility Management seit 1997.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/privatjet" className="hover:text-white transition-colors">Premium Services</Link></li>
              <li><Link to="/services/hallen" className="hover:text-white transition-colors">B2B Services</Link></li>
              <li><Link to="/services/unterhalt" className="hover:text-white transition-colors">Basis Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ressourcen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/glossar" className="hover:text-white transition-colors">Glossar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +41 41 320 56 10
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@bgs-service.ch
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Emmenbrücke, Schweiz
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 BGS Gebäudeservice GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Badge variant="outline" className="text-white border-white/30">
              <Shield className="w-3 h-3 mr-1" />
              ISO 9001
            </Badge>
            <Badge variant="outline" className="text-white border-white/30">
              <Leaf className="w-3 h-3 mr-1" />
              CO₂-neutral
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Premium Services */}
          <Route path="/services/privatjet" element={
            <ServiceDetailPage 
              title="Privatjet-Reinigung"
              category="premium"
              description="Exklusive Reinigung für Privatjets mit höchsten Qualitätsstandards"
              features={[
                'Innenraumreinigung mit Premium-Produkten',
                'Cockpit-Pflege und Instrumentenreinigung',
                'Lederaufbereitung und -pflege',
                'Desinfektionsservice nach IATA-Standards',
                '24/7 Verfügbarkeit weltweit',
                'Diskreter und professioneller Service'
              ]}
              image={officeCleaningImg}
            />
          } />
          
          <Route path="/services/yacht" element={
            <ServiceDetailPage 
              title="Yacht-Reinigung"
              category="premium"
              description="Professionelle Yacht-Pflege für Luxus-Yachten und Segelboote"
              features={[
                'Deck-Reinigung und Politur',
                'Kabinen-Service und Innenraumreinigung',
                'Polster- und Teak-Pflege',
                'Unterwasser-Reinigung',
                'Saisonale Wartung',
                'Winterlager-Service'
              ]}
              image={facilityManagementImg}
            />
          } />

          {/* Standard Services */}
          <Route path="/services/hallen" element={
            <ServiceDetailPage 
              title="Hallenreinigung"
              category="standard"
              description="Professionelle Reinigung von Produktions- und Lagerhallen"
              features={[
                'Bodenreinigung mit Industriemaschinen',
                'Hochregalreinigung',
                'Entstaubung von Decken und Wänden',
                'Toreinfahrten und Rampen',
                'Flexible Einsatzzeiten',
                'Regelmässige Qualitätskontrollen'
              ]}
              image={industrialCleaningImg}
            />
          } />

          <Route path="/services/maschinen" element={
            <ServiceDetailPage 
              title="Maschinenreinigung"
              category="standard"
              description="Spezialisierte Reinigung von Produktionsanlagen und Maschinen"
              features={[
                'CNC-Maschinen und Fertigungsanlagen',
                'Industrieroboter-Reinigung',
                'Ölentfernung und Entfettung',
                'Hochdruckreinigung',
                'Dampfreinigung',
                'Trockeneis-Verfahren'
              ]}
              image={industrialCleaningImg}
            />
          } />

          {/* Essentiell Services */}
          <Route path="/services/unterhalt" element={
            <ServiceDetailPage 
              title="Unterhaltsreinigung"
              category="essentiell"
              description="Zuverlässige regelmässige Reinigung für Büros und Praxen"
              features={[
                'Tägliche oder wöchentliche Reinigung',
                'Bodenreinigung und -pflege',
                'Sanitärreinigung',
                'Papierkorb-Entleerung',
                'Staubwischen',
                'Flexible Reinigungszeiten'
              ]}
              image={officeCleaningImg}
            />
          } />

          <Route path="/services/fenster" element={
            <ServiceDetailPage 
              title="Fensterreinigung"
              category="essentiell"
              description="Professionelle Fensterreinigung innen und aussen"
              features={[
                'Innen- und Aussenreinigung',
                'Rahmen und Fensterbretter',
                'Jalousien-Reinigung',
                'Streifenfreie Ergebnisse',
                'Auch für schwer erreichbare Fenster',
                'Regelmässige Intervalle möglich'
              ]}
              image={officeCleaningImg}
            />
          } />

          {/* Other Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/glossar" element={<GlossarPage />} />
          <Route path="/kontakt" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
