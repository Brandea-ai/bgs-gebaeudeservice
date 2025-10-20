import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Shield } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)
  let closeTimeout = useRef(null)

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
    }
  }, [])

  return (
    <>
      {/* Top Bar - Professional Contact Information */}
      <div className="bg-[#0A2540] text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+41413205610" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +41 41 320 56 10
            </a>
            <a href="mailto:info@bgs-service.ch" className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              info@bgs-service.ch
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-3.5 w-3.5" />
              Emmenbrücke, Luzern
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-3.5 w-3.5 text-green-400" />
            <span>ISO 9001 Zertifiziert</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg lg:top-0' : 'lg:top-[40px] shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Professional Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-black text-xl">BGS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#0A2540] font-bold text-xl leading-tight">BGS Gebäudeservice</span>
                <span className="text-gray-500 text-xs font-medium">Schweizer Qualität seit 1997</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Services Mega Dropdown */}
              <div
                className="relative"
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#0A2540] font-medium transition-colors py-2">
                  Dienstleistungen
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[750px] bg-white shadow-2xl rounded-lg border border-gray-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-1 p-6">
                      {/* Premium */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-[#0A2540] mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                          <div className="w-1 h-4 bg-[#C5A572] rounded"></div>
                          Premium
                        </h4>
                        <div className="space-y-2">
                          <Link to="/services/privatjet" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Privatjet-Reinigung
                          </Link>
                          <Link to="/services/yacht" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Yacht-Reinigung
                          </Link>
                          <Link to="/services/housekeeping" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Private Housekeeping
                          </Link>
                          <Link to="/services/luxusimmobilien" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Luxusimmobilien
                          </Link>
                          <Link to="/services/vip-events" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            VIP-Events
                          </Link>
                        </div>
                      </div>

                      {/* Standard */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-[#0A2540] mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                          <div className="w-1 h-4 bg-[#0A2540] rounded"></div>
                          Standard B2B
                        </h4>
                        <div className="space-y-2">
                          <Link to="/services/hallen" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Hallenreinigung
                          </Link>
                          <Link to="/services/maschinen" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Maschinenreinigung
                          </Link>
                          <Link to="/services/sonder" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Sonderreinigung
                          </Link>
                          <Link to="/services/industrie" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Industriereinigung
                          </Link>
                          <Link to="/services/fassaden" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Fassadenreinigung
                          </Link>
                        </div>
                      </div>

                      {/* Essentiell */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="font-bold text-[#0A2540] mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                          <div className="w-1 h-4 bg-[#10B981] rounded"></div>
                          Essentiell
                        </h4>
                        <div className="space-y-2">
                          <Link to="/services/unterhalt" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Unterhaltsreinigung
                          </Link>
                          <Link to="/services/fenster" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Fensterreinigung
                          </Link>
                          <Link to="/services/garten" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Gartenservice
                          </Link>
                          <Link to="/services/grund" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Grundreinigung
                          </Link>
                          <Link to="/services/buero" className="block py-2 px-3 hover:bg-white rounded-md transition-colors text-gray-700 hover:text-[#0A2540] text-sm">
                            Büroreinigung
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* CTA Footer in Dropdown */}
                    <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-lg">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <p className="font-semibold text-[#0A2540]">Kostenlose Beratung</p>
                          <p className="text-gray-600">Unverbindliche Offerte anfragen</p>
                        </div>
                        <Link to="/kontakt">
                          <Button size="sm" className="bg-[#0A2540] hover:bg-[#1a3a5f]">
                            Kontakt
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/standorte/zurich" className="text-gray-700 hover:text-[#0A2540] font-medium transition-colors">
                Standorte
              </Link>
              <Link to="/referenzen" className="text-gray-700 hover:text-[#0A2540] font-medium transition-colors">
                Referenzen
              </Link>
              <Link to="/ueber-uns" className="text-gray-700 hover:text-[#0A2540] font-medium transition-colors">
                Über uns
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#0A2540] font-medium transition-colors">
                Blog
              </Link>

              <Link to="/kontakt">
                <Button className="bg-[#0A2540] hover:bg-[#1a3a5f] text-white shadow-md hover:shadow-lg transition-all">
                  <Phone className="mr-2 h-4 w-4" />
                  Kontakt
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-[#0A2540] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>

                {/* Mobile Services */}
                <div className="space-y-3">
                  <p className="font-bold text-[#0A2540] text-sm uppercase tracking-wide">Dienstleistungen</p>
                  <div className="pl-4 space-y-2">
                    <Link to="/services/privatjet" className="block text-gray-600 py-1.5" onClick={() => setMobileMenuOpen(false)}>Privatjet-Reinigung</Link>
                    <Link to="/services/hallen" className="block text-gray-600 py-1.5" onClick={() => setMobileMenuOpen(false)}>Hallenreinigung</Link>
                    <Link to="/services/unterhalt" className="block text-gray-600 py-1.5" onClick={() => setMobileMenuOpen(false)}>Unterhaltsreinigung</Link>
                  </div>
                </div>

                <Link to="/standorte/zurich" className="text-gray-700 hover:text-[#0A2540] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Standorte
                </Link>
                <Link to="/referenzen" className="text-gray-700 hover:text-[#0A2540] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Referenzen
                </Link>
                <Link to="/ueber-uns" className="text-gray-700 hover:text-[#0A2540] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Über uns
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-[#0A2540] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>

                <div className="pt-4 space-y-3">
                  <a href="tel:+41413205610" className="flex items-center gap-2 text-[#0A2540]">
                    <Phone className="h-4 w-4" />
                    +41 41 320 56 10
                  </a>
                  <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-[#0A2540] hover:bg-[#1a3a5f]">
                      Kontakt aufnehmen
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navigation
