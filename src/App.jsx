import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navigation from './components/Navigation.jsx'

// Pages
import HomePage from './pages/HomePage-Professional.jsx'
import KontaktPage from './pages/Kontakt.jsx'
import { UeberUnsPage } from './pages/UeberUns.jsx'
import { ReferenzenPage, KarrierePage, FAQPage } from './pages/ContentPages.jsx'
import BlogPage from './pages/Blog.jsx'
import DownloadsPage from './pages/Downloads.jsx'
import GlossarPage from './pages/Glossar.jsx'
import { ImpressumPage, DatenschutzPage } from './pages/Legal.jsx'

// Service Pages
import PrivatjetReinigungPage from './pages/services/PrivatjetReinigung.jsx'
import { YachtReinigungPage, PrivateHousekeepingPage } from './pages/services/AllPremiumServices.jsx'
import { LuxusimmobilienPage, VIPEventServicePage } from './pages/services/PremiumComplete.jsx'
import { HallenreinigungPage, MaschinenreinigungPage, SonderreinigungPage, IndustriereinigungPage, FassadenreinigungPage, BauendreinigungPage } from './pages/services/AllStandardServices.jsx'
import { UnterhaltsreinigungPage, FensterreinigungPage, GartenservicePage, GrundreinigungPage, HausmeisterservicePage, BüroreinigungPage } from './pages/services/AllEssentiellServices.jsx'

// Location Pages
import { ZuerichPage as ZurichPage, LuzernPage, StGallenPage } from './pages/locations/LocationPages.jsx'

// Footer Component
import { Mail, MapPin, Phone, Shield, Award, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">BGS</span>
              </div>
              <span className="font-bold text-lg">BGS Gebäudeservice</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Schweizer Qualität seit 1997. Ihr Partner für professionelle Gebäudereinigung.
            </p>
            <div className="flex gap-3">
              {[Shield, Award, Star].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Icon className="h-5 w-5 text-blue-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Dienstleistungen</h4>
            <div className="space-y-3">
              {[
                { name: 'Premium Services', link: '/services/privatjet' },
                { name: 'Standard B2B', link: '/services/hallen' },
                { name: 'Essentiell', link: '/services/unterhalt' },
                { name: 'Alle Services', link: '/services/privatjet' }
              ].map((item, i) => (
                <Link key={i} to={item.link} className="block text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Unternehmen</h4>
            <div className="space-y-3">
              {[
                { name: 'Über uns', link: '/ueber-uns' },
                { name: 'Referenzen', link: '/referenzen' },
                { name: 'Karriere', link: '/karriere' },
                { name: 'Blog', link: '/blog' }
              ].map((item, i) => (
                <Link key={i} to={item.link} className="block text-gray-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Kontakt</h4>
            <div className="space-y-3 text-gray-400">
              <a href="tel:+41413205610" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-blue-300" />
                <span>+41 41 320 56 10</span>
              </a>
              <a href="mailto:info@bgs-service.ch" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-blue-300" />
                <span>info@bgs-service.ch</span>
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                Tannhof 10, 6020 Emmenbrücke
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 BGS Gebäudeservice. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
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

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
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

            {/* Contact & About */}
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
