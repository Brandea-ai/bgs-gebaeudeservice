'use client'
import { motion } from "framer-motion";
import { ParallaxImage, RevealOnScroll, TiltCard, MagneticHover } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import SwissNavigation from "@/components/SwissNavigation";
import { scrollToContact } from "@/utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {
  CheckCircle, Star, Clock, Shield, Zap, ArrowRight,
  AlertCircle, Droplets, PartyPopper, Snowflake, Home,
  Trash2, Phone, ShieldCheck
} from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Sonderleistungen() {
  const serviceData = {
    name: "Professionelle Sonderleistungen & Notfallreinigung",
    description: "24/7 Notfallreinigung, Spezialreinigungen und Express-Services in Zürich, Zug und Luzern. Schnelle Reaktionszeiten für außergewöhnliche Reinigungsanforderungen.",
    url: "/basis/sonderleistungen",
    category: "Special Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sonderleistungen & Notfallreinigung Zürich - 24/7 Express Service"
        description="Professionelle Notfallreinigung und Sonderleistungen in Zürich, Zug & Luzern. 24/7 verfügbar für Wasserschäden, Brandschäden, Event-Reinigung und Spezialreinigungen."
        keywords="Notfallreinigung Zürich, Sonderleistungen Reinigung, Express Reinigung 24/7, Wasserschaden Reinigung, Brandschaden, Event Reinigung Schweiz, Umzugsreinigung"
        url="/basis/sonderleistungen"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
                24/7 Express-Service
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Notfallreinigung & Sonderleistungen in Zürich, Zug & Luzern
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Professionelle Spezialreinigungen für außergewöhnliche Situationen. Von Notfallreinigung über Event-Services bis zu speziellen Umzugsreinigungen – wir sind 24/7 für Sie da.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="tel:+41413205610">
                  <Button size="lg" variant="destructive" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-red-600 hover:bg-red-700">
                    <Phone className="mr-2 w-5 h-5"/>
                    24/7 Notfall-Hotline
                  </Button>
                </a>
                <a href="#kontakt-formular">
                  <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </a>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
                <p className="text-sm font-semibold text-red-900">
                  <AlertCircle className="inline w-5 h-5 mr-2"/>
                  Notfall? Wir sind innerhalb von 2 Stunden vor Ort!
                </p>
              </div>
            </div>
            <div className="relative">
              <ParallaxImage
                src="/sonderleistungen-hero.jpg"
                alt="Notfallreinigung und Sonderleistungen"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">2h Reaktionszeit</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Bei Notfällen vor Ort</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">24/7 Verfügbar</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Auch Wochenenden & Feiertage</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Diskretion</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Verschwiegenheit garantiert</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Spezialausrüstung</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Professionelle Technik</div>
            </Card>
          </div>

          {/* Main Content - Tabs */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Unsere Sonderleistungen im Überblick
          </h2>

          <Tabs defaultValue="notfall" className="mb-20">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="notfall" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Notfall-Services</TabsTrigger>
              <TabsTrigger value="spezial" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Spezialreinigungen</TabsTrigger>
              <TabsTrigger value="event" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Event-Services</TabsTrigger>
              <TabsTrigger value="saisonal" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Saisonale Services</TabsTrigger>
            </TabsList>

            {/* Notfall-Services Tab */}
            <TabsContent value="notfall" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 text-primary">24/7 Notfallreinigung in Zürich, Zug & Luzern</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Wenn es schnell gehen muss, sind wir für Sie da. Unsere Notfallreinigung ist rund um die Uhr verfügbar und innerhalb von 2 Stunden vor Ort. Mit Spezialausrüstung und geschultem Personal bewältigen wir auch außergewöhnliche Reinigungssituationen professionell und diskret.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-primary"/>
                      Wasserschaden-Soforthilfe
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Sofortige Wasserschaden-Beseitigung nach Rohrbruch oder Überschwemmung",
                        "Professionelle Trocknung mit Industrietrocknern und Luftentfeuchtern",
                        "Schimmelprävention durch fachgerechte Desinfektion",
                        "Dokumentation für Versicherungsabwicklung",
                        "Entsorgung beschädigter Materialien",
                        "Geruchsneutralisation und Luftreinigung"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600"/>
                      Brandschaden-Sanierung
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Entfernung von Rußablagerungen und Brandgeruch",
                        "Ozon-Behandlung zur Geruchsneutralisation",
                        "Spezialreinigung von Wänden, Decken und Böden",
                        "Entsorgung von brandgeschädigten Materialien",
                        "Zusammenarbeit mit Versicherungen",
                        "Komplette Sanierung bis zur Wiederherstellung"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Weitere Notfall-Reinigungen:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                        <span>Vandalismus-Beseitigung (Graffiti, Zerstörung)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                        <span>Einbruch-Nachwehen (Fingerabdruckpulver, Beschädigungen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                        <span>Unfallstellen-Reinigung</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                        <span>Geruchsneutralisation (Tiergeruch, Rauchgeruch)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                        <span>Biogefährdungs-Reinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                        <span>Schädlingsbefall-Nachbehandlung</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Spezialreinigungen Tab */}
            <TabsContent value="spezial" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 text-primary">Spezialreinigungen für außergewöhnliche Situationen</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Manche Reinigungsaufgaben erfordern besondere Expertise, Ausrüstung und Diskretion. Unsere Spezialisten sind für herausfordernde Situationen geschult und ausgerüstet, die über die Standard-Reinigung hinausgehen.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary"/>
                      Messie-Wohnungen & Entrümpelungen
                    </h4>
                    <p className="text-slate-700 mb-3 leading-relaxed">
                      Wir helfen diskret und professionell bei der Reinigung und Entrümpelung von stark vermüllten Wohnungen. Mit Einfühlungsvermögen und ohne Vorurteile sorgen wir für einen würdevollen Neuanfang.
                    </p>
                    <ul className="space-y-2 ml-6">
                      {[
                        "Komplette Entrümpelung und Entsorgung",
                        "Sortierung und Aufbewahrung von Wertsachen",
                        "Gründliche Grundreinigung aller Räume",
                        "Geruchsbeseitigung und Desinfektion",
                        "Diskrete Zusammenarbeit mit Behörden und Sozialstellen",
                        "Psychologisch geschultes Personal"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary"/>
                      Tatortreinigung & sensitive Einsätze
                    </h4>
                    <p className="text-slate-700 mb-3 leading-relaxed">
                      In besonders sensiblen Situationen wie Todesfällen, Unfällen oder Gewaltverbrechen sorgen wir für eine professionelle, diskrete und würdevolle Reinigung unter Einhaltung aller gesetzlichen Vorgaben.
                    </p>
                    <ul className="space-y-2 ml-6">
                      {[
                        "Professionelle Desinfektion und Dekontamination",
                        "Beseitigung von biologischen Gefahrstoffen",
                        "Geruchsneutralisation mit Spezialtechnik",
                        "Diskrete Arbeitsweise ohne Firmenaufschriften",
                        "Zusammenarbeit mit Polizei und Versicherungen",
                        "Psychologisch geschultes und sensibles Team"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold text-lg mb-3">Weitere Spezialreinigungen:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2">Hoarder-Wohnungen</h5>
                        <p className="text-sm text-slate-600">Professionelle Entrümpelung bei zwanghaftem Horten mit psychologischer Begleitung</p>
                      </Card>
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2">Verwahrloste Immobilien</h5>
                        <p className="text-sm text-slate-600">Wiederherstellung von lange ungenutzten oder verwahrlosten Objekten</p>
                      </Card>
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2">Schimmelbefall-Sanierung</h5>
                        <p className="text-sm text-slate-600">Komplette Schimmelpilz-Entfernung mit Ursachenbekämpfung</p>
                      </Card>
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2">Seuchenreinigung</h5>
                        <p className="text-sm text-slate-600">Desinfektion nach Krankheitsausbrüchen (z.B. Norovirus, COVID-19)</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Event-Services Tab */}
            <TabsContent value="event" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <PartyPopper className="w-8 h-8"/>
                  Event-Reinigungsservice für Zürich, Zug & Luzern
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Ob Firmenfeier, Hochzeit, Messe oder Privatparty – wir sorgen dafür, dass Ihre Location vor, während und nach dem Event in perfektem Zustand ist. Von der Vorbereitung bis zur kompletten Nachbearbeitung.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-6 bg-primary/5">
                    <h4 className="font-bold mb-3">Vor dem Event</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Grundreinigung der Location",
                        "Fenster- und Bodenreinigung",
                        "Sanitäranlagen perfektionieren",
                        "Außenbereiche herrichten",
                        "Last-Minute-Checks"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"/>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/10">
                    <h4 className="font-bold mb-3">Während des Events</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Laufende Sanitär-Kontrolle",
                        "Müll-Management",
                        "Zwischenreinigungen",
                        "Fleckenentfernung sofort",
                        "Auffüllen von Verbrauchsmaterial"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"/>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5">
                    <h4 className="font-bold mb-3">Nach dem Event</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Komplette Endreinigung",
                        "Müllentsorgung",
                        "Fleckenbehandlung",
                        "Möbel wieder einräumen",
                        "Location wie vorgefunden"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"/>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-4">Event-Typen, die wir betreuen:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      {[
                        "Firmenfeiern und Jubiläen",
                        "Hochzeiten und Familienfeste",
                        "Messen und Ausstellungen",
                        "Konzerte und Festivals",
                        "Sportveranstaltungen",
                        "Konferenzen und Tagungen"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {[
                        "Galas und Award-Shows",
                        "Produktpräsentationen",
                        "Private Partys",
                        "Pop-up Stores",
                        "Film- und Foto-Shootings",
                        "Weihnachtsmärkte"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Saisonale Services Tab */}
            <TabsContent value="saisonal" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 text-primary">Saisonale Reinigungsservices & Spezialangebote</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Zu bestimmten Jahreszeiten fallen besondere Reinigungsaufgaben an. Wir bieten spezialisierte saisonale Services, die perfekt auf die Jahreszeit abgestimmt sind.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Snowflake className="w-5 h-5 text-blue-500"/>
                      Frühjahrsputz & Grundreinigung
                    </h4>
                    <p className="text-slate-700 mb-3">
                      Der klassische Frühjahrsputz – professionell durchgeführt. Wir befreien Ihre Räumlichkeiten von Winterstaub und machen alles frühlingsfrisch.
                    </p>
                    <ul className="space-y-2 ml-6">
                      {[
                        "Komplette Grundreinigung aller Räume",
                        "Fenster innen und außen streifenfrei",
                        "Teppiche und Polster tiefenreinigen",
                        "Schränke ausräumen und reinigen",
                        "Lampen und Leuchten entstauben",
                        "Außenbereiche und Terrassen auffrischen"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold text-lg mb-3">Umzugsreinigung – Perfekt für Zürich, Zug & Luzern</h4>
                    <p className="text-slate-700 mb-3">
                      Bei einem Umzug muss die alte Wohnung makellos übergeben werden. Wir sorgen dafür, dass Sie Ihre Kaution vollständig zurückbekommen und die neue Wohnung strahlend sauber beziehen können.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Auszugsreinigung</h5>
                        <ul className="space-y-2 text-sm">
                          {[
                            "Nach Protokoll der Verwaltung",
                            "Alle Räume, Küche, Bad",
                            "Fenster innen & außen",
                            "Böden, Wände, Decken",
                            "Kühlschrank, Backofen",
                            "Balkon/Terrasse, Keller"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Einzugsreinigung</h5>
                        <ul className="space-y-2 text-sm">
                          {[
                            "Grundreinigung vor Einzug",
                            "Desinfektion Küche & Bad",
                            "Schränke innen reinigen",
                            "Böden versiegeln (optional)",
                            "Fenster blitzsauber",
                            "Bereit zum Einziehen"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 bg-green-50 p-4 rounded border-l-4 border-green-600">
                      <p className="text-sm font-semibold text-green-900">
                        ✓ Kautionsgarantie: Bei fachgerechter Reinigung unterstützen wir Sie bei der Kautionsrückforderung
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-bold text-lg mb-3">Weitere saisonale Services:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Home className="w-4 h-4 text-primary"/>
                          Herbst-Grundreinigung
                        </h5>
                        <p className="text-sm text-slate-600">Vorbereitung auf die dunkle Jahreszeit mit kompletter Grundreinigung und Desinfektion</p>
                      </Card>
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2 flex items-center gap-2">
                          <Trash2 className="w-4 h-4 text-primary"/>
                          Leerstandsreinigung
                        </h5>
                        <p className="text-sm text-slate-600">Reinigung von leerstehenden Immobilien für Verkauf oder Neuvermietung</p>
                      </Card>
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2">Weihnachts-Spezialreinigung</h5>
                        <p className="text-sm text-slate-600">Vorbereitung auf die Festtage mit Grundreinigung und Fensterputzen</p>
                      </Card>
                      <Card className="p-4 bg-slate-50">
                        <h5 className="font-semibold mb-2">Renovierungs-Endreinigung</h5>
                        <p className="text-sm text-slate-600">Gründliche Bauendreinigung nach Renovierungen und Umbauten</p>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Internal Links Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Entdecken Sie unsere weiteren Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Link href="/basis/unterhaltsreinigung">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-bold text-lg mb-2 text-primary hover:text-red-600 transition-colors">
                  Unterhaltsreinigung →
                </h3>
                <p className="text-sm text-slate-600">
                  Regelmäßige professionelle Reinigung für Büros und Gewerbeobjekte
                </p>
              </Card>
            </Link>
            <Link href="/business/bueroreinigung">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-bold text-lg mb-2 text-primary hover:text-red-600 transition-colors">
                  Büroreinigung →
                </h3>
                <p className="text-sm text-slate-600">
                  Maßgeschneiderte Reinigungslösungen für Unternehmen jeder Größe
                </p>
              </Card>
            </Link>
            <Link href="/basis/hausmeisterservice">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-bold text-lg mb-2 text-primary hover:text-red-600 transition-colors">
                  Hausmeisterservice →
                </h3>
                <p className="text-sm text-slate-600">
                  Umfassende Betreuung Ihrer Immobilie von A bis Z
                </p>
              </Card>
            </Link>
            <Link href="/business/facility-management">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-bold text-lg mb-2 text-primary hover:text-red-600 transition-colors">
                  Facility Management →
                </h3>
                <p className="text-sm text-slate-600">
                  Alle Services aus einer Hand für Ihre Immobilie
                </p>
              </Card>
            </Link>
            <Link href="/basis/winterdienst">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-bold text-lg mb-2 text-primary hover:text-red-600 transition-colors">
                  Winterdienst →
                </h3>
                <p className="text-sm text-slate-600">
                  24/7 Schneeräumung und Salzstreuung in der kalten Jahreszeit
                </p>
              </Card>
            </Link>
            <Link href="/business/industriereinigung">
              <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                <h3 className="font-bold text-lg mb-2 text-primary hover:text-red-600 transition-colors">
                  Industriereinigung →
                </h3>
                <p className="text-sm text-slate-600">
                  Spezialisierte Reinigung für Produktionsstätten und Hallen
                </p>
              </Card>
            </Link>
          </div>

          {/* FAQ Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Häufig gestellte Fragen zu Sonderleistungen
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie schnell können Sie bei einem Notfall vor Ort sein?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Bei echten Notfällen wie Wasserschäden oder Brandschäden sind wir innerhalb von 2 Stunden vor Ort in Zürich, Zug und Luzern. Unsere 24/7-Notfall-Hotline ist rund um die Uhr erreichbar. In dringenden Fällen können wir auch innerhalb von 60 Minuten reagieren, abhängig vom aktuellen Standort unserer Teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Was kostet eine Notfallreinigung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Die Kosten variieren je nach Art und Umfang des Notfalls. Wasserschaden-Soforthilfe beginnt bei ca. CHF 500 für kleinere Schäden, größere Einsätze werden nach Aufwand berechnet. Wir erstellen vor Ort eine kostenlose Einschätzung und arbeiten eng mit Ihrer Versicherung zusammen. Die meisten Notfallreinigungen werden von Hausrat- oder Gebäudeversicherungen übernommen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Arbeiten Sie diskret bei sensiblen Reinigungen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Absolut. Bei Tatortreinigungen, Messie-Wohnungen oder anderen sensiblen Einsätzen arbeiten wir komplett diskret – ohne Firmenaufschriften, in ziviler Kleidung und mit höchster Verschwiegenheit. Unser Personal ist psychologisch geschult und behandelt jede Situation mit dem nötigen Respekt und Einfühlungsvermögen. Datenschutz und Diskretion haben bei uns oberste Priorität.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Ausrüstung bringen Sie bei Spezialreinigungen mit?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir verfügen über professionelle Spezialausrüstung wie Industrietrockner, Luftentfeuchter, Ozon-Generatoren zur Geruchsneutralisation, UV-Desinfektionsgeräte, Hochleistungssauger, spezielle Reinigungschemikalien und Schutzausrüstung. Bei Wasserschäden bringen wir Feuchtigkeitsmessgeräte und Infrarot-Kameras mit. Für Brandsanierungen haben wir spezielle Rußentferner und Neutralisatoren.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Übernimmt die Versicherung die Kosten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                In den meisten Fällen ja. Wasserschäden, Brandschäden und viele Notfallreinigungen werden von Hausrat- oder Gebäudeversicherungen übernommen. Wir dokumentieren alle Arbeiten professionell für die Versicherung und unterstützen Sie bei der Schadensabwicklung. Bei Bedarf erstellen wir detaillierte Berichte, Fotos und Kostenaufstellungen. Sprechen Sie uns an – wir haben viel Erfahrung mit Versicherungsabwicklungen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie Event-Reinigungen auch an Wochenenden an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, selbstverständlich! Events finden oft an Wochenenden statt, daher sind wir auch samstags und sonntags für Sie da. Unser Event-Service umfasst Vor-, Während- und Nach-Event-Reinigung. Wir passen uns flexibel Ihrem Event-Zeitplan an – auch bei Nachtarbeit oder Feiertagen. Für größere Events planen wir ein dediziertes Team ein, das ausschließlich für Ihr Event zuständig ist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">
                Was ist im Umzugsreinigungs-Service enthalten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Unser Umzugsreinigungs-Service umfasst die komplette Endreinigung nach Auszug oder Grundreinigung vor Einzug. Dazu gehören alle Räume, Küche mit Geräten (Backofen, Kühlschrank), Badezimmer, Fenster innen und außen, Böden, Heizkörper, Balkon/Terrasse und Keller. Wir arbeiten nach dem Protokoll Ihrer Hausverwaltung, damit Sie Ihre Kaution garantiert zurückerhalten. Auf Wunsch bieten wir auch eine Abnahme-Garantie an.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold">
                Wie läuft eine Messie-Wohnungs-Reinigung ab?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir gehen sensibel und systematisch vor: Zunächst besichtigen wir die Wohnung und erstellen einen Aktionsplan. Dann sortieren wir gemeinsam mit dem Bewohner (oder Angehörigen) alle Gegenstände – was bleibt, was wird entsorgt. Wertsachen und wichtige Dokumente werden sicher aufbewahrt. Anschließend erfolgt die Entrümpelung, Entsorgung, Grundreinigung und Desinfektion. Wir arbeiten ohne Vorurteile, mit Einfühlungsvermögen und auf Wunsch auch anonym. Das Tempo bestimmen Sie.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Benötigen Sie eine Sonderleistung oder Notfallreinigung?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns jetzt – wir sind 24/7 für Sie erreichbar und innerhalb von 2 Stunden vor Ort!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+41413205610">
                <Button size="lg" variant="destructive" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 w-5 h-5"/>
                  24/7 Notfall-Hotline: +41 41 320 56 10
                </Button>
              </a>
              <a href="#kontakt-formular">
                <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5"/>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
