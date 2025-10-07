import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowRight, Sparkles, CheckCircle2, Building2, Award
} from 'lucide-react'
import { motion } from 'framer-motion'
import officeCleaningImg from '../assets/images/office-cleaning-1.jpg'

export default function HomePage() {
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
