import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge.jsx'
import { Building2, Shield, Leaf, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-lg">BGS Gebäudeservice</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professionelle Gebäudereinigung und Facility Management seit 1997.
            </p>
            <div className="flex space-x-2">
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

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/privatjet" className="hover:text-white transition-colors">Premium Services</Link></li>
              <li><Link to="/services/hallen" className="hover:text-white transition-colors">B2B Services</Link></li>
              <li><Link to="/services/unterhalt" className="hover:text-white transition-colors">Basis Services</Link></li>
              <li><Link to="/ki-integration" className="hover:text-white transition-colors">KI-Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/glossar" className="hover:text-white transition-colors">Glossar</Link></li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
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
          <p className="text-sm text-gray-400 mt-4 md:mt-0">UID: CHE-108.687.458</p>
        </div>
      </div>
    </footer>
  )
}
