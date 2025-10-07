import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
import {
  Sparkles, Shield, Clock, CheckCircle2, Star, Award,
  Phone, Mail, ArrowRight, Plane, Users, Calendar, Zap,
  Target, TrendingUp, Lock, FileCheck, Briefcase, Home
} from 'lucide-react'

export function PrivatjetReinigungPage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - WORLD CLASS */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero-background.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/95 via-amber-900/90 to-slate-900/95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24 py-32">
          <div className="text-center">
            <Badge className="mb-8 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 text-base px-8 py-3 rounded-full shadow-2xl shadow-amber-500/50">
              <Sparkles className="w-5 h-5 mr-2 inline-block" />
              PREMIUM LUXUS-SERVICE
            </Badge>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="block text-white drop-shadow-2xl">
                Privatjet-Reinigung
              </span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent mt-4">
                der Extraklasse
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-100 mb-16 leading-relaxed font-light drop-shadow-lg">
              Diskreter, professioneller Reinigungsservice für Privatjets und Business-Jets.
              <span className="block mt-2 font-semibold text-white">Höchste Standards für anspruchsvolle Kunden.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Button size="lg" className="group bg-white text-amber-600 hover:bg-gray-50 text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300">
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                +41 41 320 56 10
              </Button>
              <Button size="lg" variant="outline" className="group border-3 border-white/90 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-amber-900 text-xl px-12 py-8 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
                Angebot anfragen
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: '100% Diskret' },
                { icon: Award, text: 'Zertifiziert' },
                { icon: Clock, text: '24/7 Service' },
                { icon: Star, text: '5★ Bewertung' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-amber-300" />
                  <span className="text-white font-semibold text-sm text-center">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEISTUNGSÜBERSICHT - FULL WIDTH GRID */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(245 158 11 / 0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-amber-100 to-amber-200 text-amber-900 border-0 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Unsere Leistungen
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Umfassende<br />
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent">Jet-Reinigung</span>
            </h2>
            <p className="text-2xl text-gray-600 font-light leading-relaxed">
              Von der Kabine bis zum Cockpit – wir reinigen jeden Bereich Ihres Jets
              mit höchster Präzision und Diskretion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Plane, title: "Kabinenreinigung", desc: "Sitze, Teppiche, Verkleidungen" },
              { icon: Shield, title: "Cockpit-Pflege", desc: "Instrumententafel, Displays" },
              { icon: Sparkles, title: "Sanitäranlagen", desc: "Toiletten, Waschbecken" },
              { icon: Star, title: "Galley-Reinigung", desc: "Küche, Arbeitsflächen" },
              { icon: CheckCircle2, title: "Fensterreinigung", desc: "Innen und aussen streifenfrei" },
              { icon: Award, title: "Lederaufbereitung", desc: "Sitze und Verkleidungen" },
              { icon: Clock, title: "Teppichreinigung", desc: "Professionelle Tiefenreinigung" },
              { icon: Users, title: "Aussenpolitur", desc: "Rumpf-Reinigung & Politur" }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-8 border-2 border-amber-100 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-amber-600 to-transparent rounded-3xl transition-opacity"></div>
                  <service.icon className="h-14 w-14 text-amber-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROZESS/ABLAUF - TIMELINE DESIGN */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 px-8 py-3 rounded-full">
              Unser Prozess
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
              So läuft die<br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Reinigung ab</span>
            </h2>
            <p className="text-2xl text-gray-300 font-light">
              Professionell, diskret und effizient – in 5 Schritten zum perfekten Ergebnis.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Terminvereinbarung", desc: "Flexible Planung nach Ihrem Flugplan", icon: Calendar },
              { step: "2", title: "Vorab-Inspektion", desc: "Zustandserfassung und Bedarfsanalyse", icon: FileCheck },
              { step: "3", title: "Professionelle Reinigung", desc: "Mit Spezialgeräten und -mitteln", icon: Sparkles },
              { step: "4", title: "Qualitätskontrolle", desc: "Gründliche Überprüfung aller Bereiche", icon: Target },
              { step: "5", title: "Freigabe", desc: "Jet ist bereit für den nächsten Flug", icon: CheckCircle2 }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black mb-6 mx-auto shadow-xl shadow-amber-500/50">
                    {item.step}
                  </div>
                  <item.icon className="h-10 w-10 text-amber-400 mb-4 mx-auto" />
                  <h3 className="font-bold text-white mb-3 text-center text-lg">{item.title}</h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VORTEILE - ACCORDION STYLE */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        </div>

        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left - Content */}
            <div>
              <Badge className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20 px-6 py-3 rounded-full">
                Ihre Vorteile
              </Badge>
              <h2 className="text-6xl font-black mb-8 leading-tight">
                Warum BGS<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">wählen?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
                Als Premium-Partner für Privatjet-Reinigung setzen wir Massstäbe in Qualität, Diskretion und Service-Excellence.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    title: "Absolute Diskretion",
                    icon: Lock,
                    content: "Vertraulichkeitsvereinbarung (NDA) und umfassender Background-Check aller Mitarbeiter. Ihre Privatsphäre hat oberste Priorität."
                  },
                  {
                    title: "Zertifizierte Luftfahrt-Experten",
                    icon: Award,
                    content: "Speziell geschultes Personal mit Luftfahrt-Zertifizierung. Regelmässige Weiterbildungen zu neuesten Reinigungstechniken und Materialien."
                  },
                  {
                    title: "24/7 Verfügbarkeit",
                    icon: Clock,
                    content: "Reinigung nach Ihrem Flugplan – rund um die Uhr, auch nachts, am Wochenende und an Feiertagen. Express-Service mit 4h Vorlaufzeit verfügbar."
                  },
                  {
                    title: "Premium Luftfahrt-Produkte",
                    icon: Sparkles,
                    content: "Ausschliesslich hochwertige, luftfahrtzugelassene Reinigungsmittel und Pflegeprodukte. Schonend zu Materialien, stark gegen Verschmutzungen."
                  },
                  {
                    title: "100% Zufriedenheitsgarantie",
                    icon: CheckCircle2,
                    content: "Sollten Sie nicht vollständig zufrieden sein, bessern wir kostenlos nach – bis alles perfekt ist. Ihr Qualitätsanspruch ist unser Standard."
                  },
                  {
                    icon: Shield,
                  }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl px-6 hover:bg-white/10 transition-all">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                      <div className="flex items-center gap-4">
                        <item.icon className="h-6 w-6 text-blue-400" />
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-6 text-base leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right - Stats & Info */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Unsere Zahlen sprechen für sich</h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: Plane, value: '300+', label: 'Jets gereinigt' },
                    { icon: Users, value: '50+', label: 'VIP-Kunden' },
                    { icon: Star, value: '5.0/5', label: 'Ø Bewertung' },
                    { icon: Award, value: '100%', label: 'Zufriedenheit' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                      <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-10 text-center shadow-2xl">
                <Zap className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Express-Service</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Dringend? Unser Express-Team ist innerhalb von 4 Stunden bei Ihnen – rund um die Uhr.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3">
                  Jetzt anfragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS - CAROUSEL STYLE */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900 border-0 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Kundenstimmen
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              Was unsere<br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Kunden sagen</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                name: "Dr. Thomas M.",
                role: "Jet-Besitzer, Gulfstream G650",
                location: "Zürich",
                text: "Absolut professionell und diskret. Mein Jet war noch nie so makellos! Das Team von BGS versteht wirklich, was Qualität bedeutet. Bin seit 3 Jahren Stammkunde.",
                rating: 5,
                image: "🛩️"
              },
              {
                name: "Sarah K.",
                role: "CEO, Premium Charter AG",
                location: "Genf",
                text: "BGS ist unser exklusiver Partner für alle Jets unserer Flotte. Zuverlässigkeit auf höchstem Niveau, faire Preise und immer pünktlich. Absolute Empfehlung!",
                rating: 5,
                image: "✈️"
              },
              {
                name: "Michael R.",
                role: "Pilot, Bombardier Global",
                location: "Basel",
                text: "Als Pilot lege ich grössten Wert auf Sauberkeit im Cockpit. BGS liefert jedes Mal perfekte Arbeit. Meine Passagiere sind begeistert von der Kabine!",
                rating: 5,
                image: "👨‍✈️"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full">
                  <div className="absolute -top-6 left-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-3xl shadow-xl">
                      {testimonial.image}
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t-2 border-gray-100 pt-6">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
                      <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="border-2 border-gray-300 hover:border-purple-400 rounded-full px-10 py-6 text-lg group">
              Alle Bewertungen ansehen
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
      </section>

      {/* 6. FAQ - ACCORDION */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 border-0 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider">
              Häufige Fragen
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
              FAQ
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Antworten auf die wichtigsten Fragen zu unserer Privatjet-Reinigung
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                q: "Wie lange dauert eine vollständige Jet-Reinigung?",
                a: "Die Dauer hängt von der Grösse und dem Zustand des Jets ab. Light Jets (bis 8 Passagiere) benötigen ca. 2-3 Stunden, Mid-Size Jets 3-4 Stunden und Heavy Jets 5-6 Stunden. Bei Expressreinigungen können wir die Zeit auf Wunsch verkürzen."
              },
              {
                q: "Können Sie auch kurzfristig und nachts reinigen?",
                a: "Ja, absolut! Wir bieten einen 24/7 Express-Service an. Mit einer Vorlaufzeit von nur 4 Stunden sind wir zu jeder Tages- und Nachtzeit für Sie da – auch an Wochenenden und Feiertagen."
              },
              {
                q: "Welche Flughäfen und FBOs bedienen Sie?",
                a: "Wir sind an allen grossen Schweizer Flughäfen aktiv: Zürich, Genf, Bern-Belp, St. Gallen-Altenrhein, Lugano sowie alle Privatflughäfen und FBOs. Für internationale Standorte können wir Partner vermitteln."
              },
              {
                q: "Wie ist es mit Diskretion und Sicherheitsüberprüfungen?",
                a: "Diskretion ist unser höchstes Gebot. Alle Mitarbeiter unterziehen sich einem umfassenden Background-Check und unterschreiben strenge Vertraulichkeitsvereinbarungen (NDA). Wir erfüllen alle Sicherheitsanforderungen für Luftfahrt-Dienstleister."
              },
              {
                q: "Welche Reinigungsmittel und Produkte verwenden Sie?",
                a: "Wir verwenden ausschliesslich hochwertige, luftfahrtzugelassene Spezialprodukte, die Materialien wie Leder, Holz, Marmor und technische Oberflächen nicht beschädigen. Alle Produkte sind umweltfreundlich und hinterlassen keine Rückstände."
              },
              {
                q: "Bieten Sie auch Aussenpolitur und Detailing an?",
                a: "Ja! Wir bieten professionelle Rumpf-Reinigung, Politur und vollständiges Exterior-Detailing als Zusatzleistung an. Dies umfasst Handwäsche, Wachsversiegelung und Fenster-/Scheiben-Spezialbehandlung."
              },
              {
                q: "Was passiert bei Schäden während der Reinigung?",
              },
              {
                q: "Kann ich während der Reinigung am Jet bleiben?",
                a: "Natürlich! Sie können gerne vor Ort bleiben und den Fortschritt überwachen. Viele unserer Kunden nutzen die Zeit für Gespräche mit unserem Team oder für eine kurze Pause in der Lounge."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-2 border-gray-200 hover:border-blue-300 rounded-2xl px-8 bg-white hover:shadow-lg transition-all">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-8 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-8 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg mb-6">
              Haben Sie weitere Fragen?
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 text-lg shadow-xl">
              <Mail className="mr-2 h-5 w-5" />
              Kontaktieren Sie uns
            </Button>
          </div>
      </section>

      {/* 7. CALL-TO-ACTION - FINAL */}
      <section className="relative py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <div className="relative z-10 text-center">
          <Plane className="h-24 w-24 text-amber-200 mx-auto mb-8 animate-pulse" />
          <h2 className="text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">
            Bereit für perfekte Sauberkeit?
          </h2>
          <p className="text-2xl lg:text-3xl mb-16 text-amber-100 font-light leading-relaxed">
            Kontaktieren Sie uns für ein <span className="font-semibold text-white">unverbindliches</span> und <span className="font-semibold text-white">massgeschneidertes</span> Angebot für Ihren Privatjet.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="group bg-white text-amber-600 hover:bg-gray-50 text-xl px-14 py-8 rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300">
              <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              +41 41 320 56 10
            </Button>
            <Button size="lg" variant="outline" className="group border-3 border-white text-white hover:bg-white hover:text-amber-600 text-xl px-14 py-8 rounded-full transition-all duration-300 hover:scale-105">
              <Mail className="mr-3 h-6 w-6" />
              Anfrage senden
            </Button>
          </div>
          <p className="text-amber-100 text-lg">
            <Clock className="inline-block h-5 w-5 mr-2" />
            Antwortzeit: Innerhalb von 2 Stunden • 24/7 erreichbar
          </p>
        </div>
      </section>
    </div>
  )
}

export default PrivatjetReinigungPage
