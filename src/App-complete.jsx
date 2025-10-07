import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Building2, ChevronDown, Menu, X, Sparkles, CheckCircle2, MapPin } from 'lucide-react'
import './App.css'

// Import all service pages
import { PrivatjetReinigungPage, YachtReinigungPage, PrivateHousekeepingPage, LuxusimmobilienPage, VIPEventServicePage } from './pages/services/PremiumServices.jsx'
import { HallenreinigungPage, MaschinenreinigungPage, SonderreinigungPage, IndustriereinigungPage, FassadenreinigungPage, BauendreinigungPage } from './pages/services/StandardServices.jsx'
import { UnterhaltsreinigungPage, FensterreinigungPage, GartenservicePage, GrundreinigungPage, HausmeisterservicePage, BueroreinigungPage } from './pages/services/EssentiellServices.jsx'

// Import location pages
import { ZuerichPage, LuzernPage, StGallenPage } from './pages/locations/LocationPages.jsx'

// Import content pages
import { ReferenzenPage, KarrierePage, FAQPage } from './pages/ContentPages.jsx'
import BlogPage from './pages/Blog.jsx'
import DownloadsPage from './pages/Downloads.jsx'
import GlossarPage from './pages/Glossar.jsx'
import { ImpressumPage, DatenschutzPage } from './pages/Legal.jsx'

// Import existing pages
import HomePage from './pages/HomePage.jsx'
import Footer from './components/Footer.jsx'

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
            <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname === '/' ? 'text-[#0A2540] bg-gray-50' : 'text-gray-700 hover:text-[#0A2540] hover:bg-gray-50'}`}>Home</Link>

            {/* Services Mega Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors flex items-center">
                Services<ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-3 gap-6 p-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Sparkles className="h-5 w-5 text-[#C5A572] mr-2" />
                      <h3 className="font-bold text-[#0A2540]">PREMIUM</h3>
                      <Badge className="ml-2 bg-[#C5A572] text-white text-xs">Luxus</Badge>
                    </div>
                    <ul className="space-y-2">
                      <li><Link to="/services/premium/privatjet" className="text-sm text-gray-700 hover:text-[#C5A572] block py-1">Privatjet-Reinigung</Link></li>
                      <li><Link to="/services/premium/yacht" className="text-sm text-gray-700 hover:text-[#C5A572] block py-1">Yacht-Reinigung</Link></li>
                      <li><Link to="/services/premium/housekeeping" className="text-sm text-gray-700 hover:text-[#C5A572] block py-1">Private Housekeeping</Link></li>
                      <li><Link to="/services/premium/luxusimmobilien" className="text-sm text-gray-700 hover:text-[#C5A572] block py-1">Luxusimmobilien</Link></li>
                      <li><Link to="/services/premium/vip-events" className="text-sm text-gray-700 hover:text-[#C5A572] block py-1">VIP-Event-Service</Link></li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <Building2 className="h-5 w-5 text-[#0A2540] mr-2" />
                      <h3 className="font-bold text-[#0A2540]">STANDARD</h3>
                      <Badge className="ml-2 bg-[#0A2540] text-white text-xs">B2B</Badge>
                    </div>
                    <ul className="space-y-2">
                      <li><Link to="/services/standard/hallenreinigung" className="text-sm text-gray-700 hover:text-[#0A2540] block py-1">Hallenreinigung</Link></li>
                      <li><Link to="/services/standard/maschinenreinigung" className="text-sm text-gray-700 hover:text-[#0A2540] block py-1">Maschinenreinigung</Link></li>
                      <li><Link to="/services/standard/sonderreinigung" className="text-sm text-gray-700 hover:text-[#0A2540] block py-1">Sonderreinigung</Link></li>
                      <li><Link to="/services/standard/industriereinigung" className="text-sm text-gray-700 hover:text-[#0A2540] block py-1">Industriereinigung</Link></li>
                      <li><Link to="/services/standard/fassadenreinigung" className="text-sm text-gray-700 hover:text-[#0A2540] block py-1">Fassadenreinigung</Link></li>
                      <li><Link to="/services/standard/bauendreinigung" className="text-sm text-gray-700 hover:text-[#0A2540] block py-1">Bauendreinigung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <CheckCircle2 className="h-5 w-5 text-[#10B981] mr-2" />
                      <h3 className="font-bold text-[#0A2540]">ESSENTIELL</h3>
                      <Badge className="ml-2 bg-[#10B981] text-white text-xs">Basis</Badge>
                    </div>
                    <ul className="space-y-2">
                      <li><Link to="/services/essentiell/unterhaltsreinigung" className="text-sm text-gray-700 hover:text-[#10B981] block py-1">Unterhaltsreinigung</Link></li>
                      <li><Link to="/services/essentiell/fensterreinigung" className="text-sm text-gray-700 hover:text-[#10B981] block py-1">Fensterreinigung</Link></li>
                      <li><Link to="/services/essentiell/gartenservice" className="text-sm text-gray-700 hover:text-[#10B981] block py-1">Gartenservice</Link></li>
                      <li><Link to="/services/essentiell/grundreinigung" className="text-sm text-gray-700 hover:text-[#10B981] block py-1">Grundreinigung</Link></li>
                      <li><Link to="/services/essentiell/hausmeisterservice" className="text-sm text-gray-700 hover:text-[#10B981] block py-1">Hausmeisterservice</Link></li>
                      <li><Link to="/services/essentiell/bueroreinigung" className="text-sm text-gray-700 hover:text-[#10B981] block py-1">Büroreinigung</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Standorte Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors flex items-center">
                Standorte<ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <ul className="space-y-2">
                    <li><Link to="/standorte/zuerich" className="flex items-center text-sm text-gray-700 hover:text-[#0A2540] py-2"><MapPin className="h-4 w-4 mr-2" />Zürich</Link></li>
                    <li><Link to="/standorte/luzern" className="flex items-center text-sm text-gray-700 hover:text-[#0A2540] py-2"><MapPin className="h-4 w-4 mr-2" />Luzern (Hauptsitz)</Link></li>
                    <li><Link to="/standorte/st-gallen" className="flex items-center text-sm text-gray-700 hover:text-[#0A2540] py-2"><MapPin className="h-4 w-4 mr-2" />St. Gallen</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link to="/referenzen" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors">Referenzen</Link>
            <Link to="/blog" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors">Blog</Link>
            <Link to="/karriere" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0A2540] hover:bg-gray-50 rounded-lg transition-colors">Karriere</Link>
            
            <Link to="/kontakt"><Button className="ml-4 bg-[#0A2540] hover:bg-[#1a3a5f] text-white">Kontakt</Button></Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Premium Services */}
          <Route path="/services/premium/privatjet" element={<PrivatjetReinigungPage />} />
          <Route path="/services/premium/yacht" element={<YachtReinigungPage />} />
          <Route path="/services/premium/housekeeping" element={<PrivateHousekeepingPage />} />
          <Route path="/services/premium/luxusimmobilien" element={<LuxusimmobilienPage />} />
          <Route path="/services/premium/vip-events" element={<VIPEventServicePage />} />
          
          {/* Standard Services */}
          <Route path="/services/standard/hallenreinigung" element={<HallenreinigungPage />} />
          <Route path="/services/standard/maschinenreinigung" element={<MaschinenreinigungPage />} />
          <Route path="/services/standard/sonderreinigung" element={<SonderreinigungPage />} />
          <Route path="/services/standard/industriereinigung" element={<IndustriereinigungPage />} />
          <Route path="/services/standard/fassadenreinigung" element={<FassadenreinigungPage />} />
          <Route path="/services/standard/bauendreinigung" element={<BauendreinigungPage />} />
          
          {/* Essentiell Services */}
          <Route path="/services/essentiell/unterhaltsreinigung" element={<UnterhaltsreinigungPage />} />
          <Route path="/services/essentiell/fensterreinigung" element={<FensterreinigungPage />} />
          <Route path="/services/essentiell/gartenservice" element={<GartenservicePage />} />
          <Route path="/services/essentiell/grundreinigung" element={<GrundreinigungPage />} />
          <Route path="/services/essentiell/hausmeisterservice" element={<HausmeisterservicePage />} />
          <Route path="/services/essentiell/bueroreinigung" element={<BueroreinigungPage />} />
          
          {/* Locations */}
          <Route path="/standorte/zuerich" element={<ZuerichPage />} />
          <Route path="/standorte/luzern" element={<LuzernPage />} />
          <Route path="/standorte/st-gallen" element={<StGallenPage />} />
          
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
        <Footer />
      </div>
    </Router>
  )
}

export default App
