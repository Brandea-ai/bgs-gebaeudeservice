import { motion } from "framer-motion";
import { ParallaxImage, RevealOnScroll, TiltCard, MagneticHover } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import SwissNavigation from "@/components/SwissNavigation";
import { scrollToContact } from "../utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Snowflake, Clock, Shield, Phone, ArrowRight } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Winterdienst() {
  const serviceData = {
    name: "Professioneller Winterdienst",
    description: "Zuverlässiger Winterdienst und Schneeräumung. 24/7 Bereitschaft für Verkehrssicherheit im Winter.",
    url: "/basis/winterdienst",
    category: "Winter Service"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Winterdienst Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professioneller Winterdienst in der Schweiz. Schneeräumung, Streudienst und 24/7 Bereitschaft für Verkehrssicherheit."
        keywords="Winterdienst, Schneeräumung Schweiz, Streudienst, Schnee räumen"
        url="/basis/winterdienst"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
                Basis Service
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Professioneller Winterdienst
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Zuverlässige Schneeräumung und Streudienst für Zürich, Zug und Luzern. 24/7 Bereitschaft für Ihre Verkehrssicherheit im Winter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToContact} className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 w-5 h-5"/>
                </Button>
                <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8" />
              </div>
            </div>
            <div className="relative">
              <ParallaxImage 
                src="/winterdienst-hero.jpg" 
                alt="Winterdienst"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover h-[500px]"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">24/7 Bereitschaft</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Rund um die Uhr einsatzbereit</div>
            </Card>
            <Card className="p-6 text-center">
              <Snowflake className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Schnell</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Einsatz bei Schneefall</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Verkehrssicher</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Erfüllung der Räumpflicht</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zuverlässig</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Pünktlich vor Geschäftsbeginn</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="ablauf" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Einsatzkonzept</TabsTrigger>
              <TabsTrigger value="pakete" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Winter-Pakete</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassender Winterdienst</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Schneeräumung</h4>
                    <ul className="space-y-2">
                      {[
                        "Gehwege & Zufahrten räumen",
                        "Parkplätze freihalten",
                        "Eingangsbereiche sichern",
                        "Treppen & Rampen räumen",
                        "Schnee abtransportieren",
                        "Dachschnee entfernen"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Streudienst</h4>
                    <ul className="space-y-2">
                      {[
                        "Präventives Streuen",
                        "Glatteisbekämpfung",
                        "Umweltfreundliche Streumittel",
                        "Fußgängerzonen sichern",
                        "Ladezonen freihalten",
                        "Notfall-Einsätze 24/7"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="ablauf" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Professionelles Einsatzkonzept</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Wetterüberwachung",
                      desc: "Wir überwachen kontinuierlich die Wettervorhersagen und sind bei Schneefall sofort einsatzbereit. Präventives Streuen erfolgt bereits vor dem ersten Schneefall."
                    },
                    {
                      title: "Automatischer Einsatz",
                      desc: "Bei Schneefall ab 2cm rücken wir automatisch aus – ohne dass Sie anrufen müssen. Räumung erfolgt in der Regel zwischen 4-7 Uhr morgens."
                    },
                    {
                      title: "Dokumentation",
                      desc: "Jeder Einsatz wird digital dokumentiert mit Fotos und Zeitstempel. So haben Sie einen Nachweis für die Erfüllung Ihrer Räumpflicht."
                    },
                    {
                      title: "Notfall-Service",
                      desc: "Bei extremen Wetterbedingungen oder Notfällen sind wir 24/7 erreichbar und rücken innerhalb kürzester Zeit aus."
                    }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="pakete" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Transparente Winter-Pakete</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Basic</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuelles Angebot</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat (Nov-März)</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Schneeräumung bei Bedarf</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Streudienst inkl.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für kleine Flächen</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Standard</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuelles Angebot</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat (Nov-März)</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Automatischer Einsatz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Präventives Streuen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Digitale Dokumentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für Gewerbe</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Premium</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>24/7 Bereitschaft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Mehrfach-Räumung pro Tag</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Schneeabtransport inkl.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für große Areale</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Ab wann rücken Sie zum Schneeräumen aus?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir räumen automatisch ab 2cm Schneehöhe. Der Einsatz erfolgt in der Regel zwischen 4-7 Uhr morgens, damit Ihre Flächen vor Geschäftsbeginn frei sind.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Was passiert bei starkem Schneefall während des Tages?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Bei anhaltendem Schneefall rücken wir mehrmals täglich aus, um die Verkehrssicherheit zu gewährleisten. Die Häufigkeit wird individuell vereinbart.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Streumittel verwenden Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir verwenden umweltfreundliche Streumittel wie Granulat oder Splitt. Auf Wunsch auch Auftausalz, wo gesetzlich erlaubt. Die Wahl besprechen wir vorab mit Ihnen.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Wie wird die Räumpflicht dokumentiert?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Jeder Einsatz wird digital mit Fotos, GPS-Daten und Zeitstempel dokumentiert. Sie erhalten einen monatlichen Bericht als Nachweis für die Erfüllung Ihrer Räumpflicht.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Bereit für einen sicheren Winter?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot. Wir sorgen für Ihre Verkehrssicherheit im Winter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={scrollToContact} className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
              <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8" />
            </div>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
