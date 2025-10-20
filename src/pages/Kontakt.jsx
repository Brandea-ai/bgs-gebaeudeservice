import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm.jsx'

export default function KontaktPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A2540] via-[#1a3a5f] to-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-3">
            <Mail className="w-4 h-4 mr-2" />
            Kontakt
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Lassen Sie uns sprechen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Wir sind für Sie da und freuen uns auf Ihre Anfrage. Unser Team berät Sie gerne kostenlos und unverbindlich.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#0A2540] text-white">Unsere Standorte</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Schweizweit für Sie da
            </h2>
            <p className="text-xl text-gray-600">
              Mit Standorten in Luzern, Zürich und St. Gallen sind wir in der ganzen Schweiz für Sie erreichbar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Luzern */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#0A2540]/10">
              <div className="bg-[#0A2540]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-[#0A2540]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Luzern (Hauptsitz)</h3>
              <p className="text-gray-600 mb-4">
                Tannhof 10<br />
                6020 Emmenbrücke
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-[#0A2540]" />
                  +41 41 320 56 10
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-[#0A2540]" />
                  luzern@bgs-service.ch
                </p>
              </div>
            </div>

            {/* Zürich */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#0A2540]/10">
              <div className="bg-[#0A2540]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-[#0A2540]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Zürich</h3>
              <p className="text-gray-600 mb-4">
                Bahnhofstrasse 100<br />
                8001 Zürich
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-[#0A2540]" />
                  +41 44 XXX XX XX
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-[#0A2540]" />
                  zuerich@bgs-service.ch
                </p>
              </div>
            </div>

            {/* St. Gallen */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#0A2540]/10">
              <div className="bg-[#0A2540]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-[#0A2540]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-2">St. Gallen</h3>
              <p className="text-gray-600 mb-4">
                Hauptstrasse 50<br />
                9000 St. Gallen
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-[#0A2540]" />
                  +41 71 XXX XX XX
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-[#0A2540]" />
                  stgallen@bgs-service.ch
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.0947769982896!2d8.26!3d47.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA0JzQ4LjAiTiA4wrAxNSczNi4wIkU!5e0!3m2!1sde!2sch!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BGS Gebäudeservice Standorte"
            />
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Öffnungszeiten</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold mb-2">Bürozeiten</h4>
              <p className="text-white/90">Montag - Freitag<br />07:00 - 18:00 Uhr</p>
            </div>
            <div className="bg-[#C5A572]/20 backdrop-blur-sm rounded-xl p-6 border border-[#C5A572]/30">
              <h4 className="font-bold mb-2 text-[#C5A572]">24/7 Notfall-Service</h4>
              <p className="text-white/90">Rund um die Uhr<br />für Premium-Kunden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
