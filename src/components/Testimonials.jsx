import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Dr. Thomas Müller',
    company: 'Swiss Re AG',
    role: 'Facility Manager',
    avatar: '👨‍💼',
    rating: 5,
    text: 'BGS übertrifft unsere Erwartungen jeden Tag. Professionell, zuverlässig und immer mit einem Lächeln. Die Zusammenarbeit über 5 Jahre war durchweg exzellent.',
    service: 'Büroreinigung'
  },
  {
    name: 'Sarah Weber',
    company: 'Luxushotel Bürgenstock',
    role: 'General Manager',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Für unsere anspruchsvollen Gäste ist nur das Beste gut genug. BGS liefert Premium-Qualität mit absoluter Diskretion. Ein unverzichtbarer Partner.',
    service: 'Premium Housekeeping'
  },
  {
    name: 'Marco Bernasconi',
    company: 'Pilatus Aircraft Ltd',
    role: 'Operations Director',
    avatar: '👨‍✈️',
    rating: 5,
    text: 'Reinigung von Produktionsanlagen erfordert Expertise und Präzision. BGS beherrscht beides perfekt. Unsere Maschinen sind in besten Händen.',
    service: 'Industriereinigung'
  },
  {
    name: 'Dr. Anna Schneider',
    company: 'Kantonsspital St. Gallen',
    role: 'Hygienebeauftragte',
    avatar: '👩‍⚕️',
    rating: 5,
    text: 'Hygiene ist in unserem Bereich absolut kritisch. BGS erfüllt alle HACCP-Standards und arbeitet mit größter Sorgfalt. Sehr empfehlenswert!',
    service: 'Healthcare-Reinigung'
  },
  {
    name: 'Peter Zimmermann',
    company: 'Private Aviation',
    role: 'Jet Owner',
    avatar: '✈️',
    rating: 5,
    text: 'Als Privatjet-Besitzer erwarte ich absolute Perfektion. BGS reinigt meinen Jet mit größter Sorgfalt und Diskretion. Einfach erstklassig!',
    service: 'Privatjet-Reinigung'
  },
  {
    name: 'Lisa Hartmann',
    company: 'KMU Tech Solutions',
    role: 'CEO',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Flexibel, zuverlässig und preiswert. BGS reinigt unsere Büros seit 3 Jahren. Das Team ist freundlich und die Qualität stimmt immer.',
    service: 'Unterhaltsreinigung'
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.08) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 border-0 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              <Star className="w-4 h-4 mr-2 inline-block" />
              Was unsere Kunden sagen
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
              Exzellenz, die begeistert
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Über 500 zufriedene Kunden vertrauen auf unsere Dienstleistungen.
              <span className="block mt-2 font-semibold text-gray-900">Lesen Sie, was sie über uns sagen.</span>
            </p>

            {/* Rating Summary */}
            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-6xl font-black text-gray-900 mb-2">4.9/5</div>
                <div className="flex gap-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600">Durchschnittliche Bewertung</p>
              </div>
              <div className="h-20 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-6xl font-black text-gray-900 mb-2">500+</div>
                <p className="text-gray-600 mt-4">Bewertungen</p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 relative overflow-hidden group">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="h-16 w-16 text-blue-600" />
                  </div>

                  <CardContent className="p-8 relative z-10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Service Badge */}
                    <Badge className="mt-4 bg-blue-50 text-blue-700 border-blue-200">
                      {testimonial.service}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Vertrauen Sie auf unsere Erfahrung</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-black mb-2">25+</div>
                <p className="text-blue-100">Jahre Erfahrung</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">500+</div>
                <p className="text-blue-100">Kunden</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">98%</div>
                <p className="text-blue-100">Zufriedenheit</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">1.2M+</div>
                <p className="text-blue-100">m² Fläche</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
