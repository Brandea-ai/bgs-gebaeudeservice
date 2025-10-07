import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
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
    }, 200) // 200ms delay before closing
  }

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current)
      }
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#0A2540] hover:text-[#1a3a5f] transition-colors">
            BGS Gebäudeservice
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Mega Dropdown */}
            <div 
              className="relative"
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#0A2540] font-medium transition-colors py-2">
                Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white shadow-2xl rounded-2xl p-8 border border-gray-100"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {/* Premium */}
                    <div>
                      <h4 className="font-bold text-[#C5A572] mb-4 text-lg flex items-center">
                        <span className="w-2 h-2 bg-[#C5A572] rounded-full mr-2"></span>
                        PREMIUM
                      </h4>
                      <div className="space-y-2">
                        <Link to="/services/privatjet" className="block py-2 px-3 hover:bg-[#C5A572]/10 rounded-lg transition-colors text-gray-700 hover:text-[#C5A572]">
                          Privatjet-Reinigung
                        </Link>
                        <Link to="/services/yacht" className="block py-2 px-3 hover:bg-[#C5A572]/10 rounded-lg transition-colors text-gray-700 hover:text-[#C5A572]">
                          Yacht-Reinigung
                        </Link>
                        <Link to="/services/housekeeping" className="block py-2 px-3 hover:bg-[#C5A572]/10 rounded-lg transition-colors text-gray-700 hover:text-[#C5A572]">
                          Private Housekeeping
                        </Link>
                        <Link to="/services/luxusimmobilien" className="block py-2 px-3 hover:bg-[#C5A572]/10 rounded-lg transition-colors text-gray-700 hover:text-[#C5A572]">
                          Luxusimmobilien
                        </Link>
                        <Link to="/services/vip-events" className="block py-2 px-3 hover:bg-[#C5A572]/10 rounded-lg transition-colors text-gray-700 hover:text-[#C5A572]">
                          VIP-Events
                        </Link>
                      </div>
                    </div>
                    
                    {/* Standard */}
                    <div>
                      <h4 className="font-bold text-[#0A2540] mb-4 text-lg flex items-center">
                        <span className="w-2 h-2 bg-[#0A2540] rounded-full mr-2"></span>
                        STANDARD B2B
                      </h4>
                      <div className="space-y-2">
                        <Link to="/services/hallen" className="block py-2 px-3 hover:bg-[#0A2540]/10 rounded-lg transition-colors text-gray-700 hover:text-[#0A2540]">
                          Hallenreinigung
                        </Link>
                        <Link to="/services/maschinen" className="block py-2 px-3 hover:bg-[#0A2540]/10 rounded-lg transition-colors text-gray-700 hover:text-[#0A2540]">
                          Maschinenreinigung
                        </Link>
                        <Link to="/services/sonder" className="block py-2 px-3 hover:bg-[#0A2540]/10 rounded-lg transition-colors text-gray-700 hover:text-[#0A2540]">
                          Sonderreinigung
                        </Link>
                        <Link to="/services/industrie" className="block py-2 px-3 hover:bg-[#0A2540]/10 rounded-lg transition-colors text-gray-700 hover:text-[#0A2540]">
                          Industriereinigung
                        </Link>
                        <Link to="/services/fassaden" className="block py-2 px-3 hover:bg-[#0A2540]/10 rounded-lg transition-colors text-gray-700 hover:text-[#0A2540]">
                          Fassadenreinigung
                        </Link>
                      </div>
                    </div>
                    
                    {/* Essentiell */}
                    <div>
                      <h4 className="font-bold text-[#10B981] mb-4 text-lg flex items-center">
                        <span className="w-2 h-2 bg-[#10B981] rounded-full mr-2"></span>
                        ESSENTIELL
                      </h4>
                      <div className="space-y-2">
                        <Link to="/services/unterhalt" className="block py-2 px-3 hover:bg-[#10B981]/10 rounded-lg transition-colors text-gray-700 hover:text-[#10B981]">
                          Unterhaltsreinigung
                        </Link>
                        <Link to="/services/fenster" className="block py-2 px-3 hover:bg-[#10B981]/10 rounded-lg transition-colors text-gray-700 hover:text-[#10B981]">
                          Fensterreinigung
                        </Link>
                        <Link to="/services/garten" className="block py-2 px-3 hover:bg-[#10B981]/10 rounded-lg transition-colors text-gray-700 hover:text-[#10B981]">
                          Gartenservice
                        </Link>
                        <Link to="/services/grund" className="block py-2 px-3 hover:bg-[#10B981]/10 rounded-lg transition-colors text-gray-700 hover:text-[#10B981]">
                          Grundreinigung
                        </Link>
                        <Link to="/services/buero" className="block py-2 px-3 hover:bg-[#10B981]/10 rounded-lg transition-colors text-gray-700 hover:text-[#10B981]">
                          Büroreinigung
                        </Link>
                      </div>
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
            <Link to="/blog" className="text-gray-700 hover:text-[#0A2540] font-medium transition-colors">
              Blog
            </Link>
            <Link to="/ueber-uns" className="text-gray-700 hover:text-[#0A2540] font-medium transition-colors">
              Über uns
            </Link>
            <a href="tel:+41413205610">
              <Button className="bg-[#0A2540] hover:bg-[#1a3a5f] transition-colors">
                <Phone className="mr-2 h-4 w-4" />
                Kontakt
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-[#0A2540] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <div className="space-y-2">
                <p className="font-bold text-[#C5A572] text-sm">PREMIUM</p>
                <Link to="/services/privatjet" className="block pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Privatjet</Link>
                <Link to="/services/yacht" className="block pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Yacht</Link>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-[#0A2540] text-sm">STANDARD</p>
                <Link to="/services/hallen" className="block pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Hallen</Link>
                <Link to="/services/maschinen" className="block pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Maschinen</Link>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-[#10B981] text-sm">ESSENTIELL</p>
                <Link to="/services/unterhalt" className="block pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Unterhalt</Link>
                <Link to="/services/fenster" className="block pl-4 text-gray-700" onClick={() => setMobileMenuOpen(false)}>Fenster</Link>
              </div>
              <Link to="/referenzen" className="text-gray-700 hover:text-[#0A2540] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Referenzen
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#0A2540] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <a href="tel:+41413205610">
                <Button className="w-full bg-[#0A2540]">
                  <Phone className="mr-2 h-4 w-4" />
                  +41 41 320 56 10
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
