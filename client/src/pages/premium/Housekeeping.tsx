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
import { CheckCircle, Home, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";

export default function Housekeeping() {
  const serviceData = {
    name: "Private Housekeeping",
    description: "Exklusiver Housekeeping-Service für Luxusimmobilien. Diskret, individuell und mit Premium-Produkten.",
    url: "/premium/housekeeping",
    category: "Premium Housekeeping"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Private Housekeeping - Exklusiver Premium Service"
        description="Exklusiver Housekeeping-Service für Luxusimmobilien in Zürich, Zug und Luzern. Diskret, individuell und mit Premium-Produkten."
        keywords="Private Housekeeping, Luxus Housekeeping Schweiz, Premium Haushalt Service, Executive Housekeeping"
        url="/premium/housekeeping"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
                Premium Service
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Private Housekeeping
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Exklusiver Housekeeping-Service für Luxusimmobilien. Diskret, individuell und mit Premium-Produkten – für höchste Ansprüche in Zürich, Zug und Luzern.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg">
                  +41 41 320 56 10
                </Button>
              </div>
            </div>
            <div className="relative">
              <ParallaxImage 
                src="/premium-housekeeping.jpg" 
                alt="Luxuriöses Interieur"
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
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Diskret</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Absolute Vertraulichkeit</div>
            </Card>
            <Card className="p-6 text-center">
              <Home className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Individuell</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Maßgeschneidert</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Premium-Produkte</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Nur das Beste</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Flexibel</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Nach Ihrem Zeitplan</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="pakete" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Service-Pakete</TabsTrigger>
              <TabsTrigger value="team" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unser Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Exklusives Private Housekeeping</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Tägliche Pflege</h4>
                    <ul className="space-y-2">
                      {[
                        "Betten machen & Wäsche wechseln",
                        "Badezimmer-Reinigung",
                        "Küchen-Pflege",
                        "Staubwischen & Staubsaugen",
                        "Müllentsorgung",
                        "Blumenpflege"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Zusatzleistungen</h4>
                    <ul className="space-y-2">
                      {[
                        "Wäsche waschen & bügeln",
                        "Fensterreinigung",
                        "Einkaufsservice",
                        "Empfangsdienst für Gäste",
                        "Event-Vorbereitung",
                        "Reisebegleitung"
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
            
            <TabsContent value="pakete" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Maßgeschneiderte Service-Pakete</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Essentials</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuelles Angebot</div>
                    <div className="text-sm text-slate-600 mb-4">Auf Ihre Bedürfnisse zugeschnitten</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Grundreinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Flexibler Zeitplan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Eigene Produkte</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Premium</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuelles Angebot</div>
                    <div className="text-sm text-slate-600 mb-4">Auf Ihre Bedürfnisse zugeschnitten</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Täglicher Service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Premium-Produkte inkl.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Wäscheservice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Fester Ansprechpartner</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Concierge</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Premium-Leistungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>24/7 Erreichbarkeit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Einkaufs- & Botendienste</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Event-Management</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Unser erfahrenes Team</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Sorgfältig ausgewählt",
                      desc: "Alle Mitarbeiter durchlaufen ein mehrstufiges Auswahlverfahren. Referenzen, Führungszeugnisse und persönliche Gespräche sind Standard."
                    },
                    {
                      title: "Professionell geschult",
                      desc: "Regelmäßige Schulungen in Reinigungstechniken, Materialkenntnis und Umgang mit hochwertigen Oberflächen und Kunstwerken."
                    },
                    {
                      title: "Diskret & vertrauenswürdig",
                      desc: "Vertraulichkeitsvereinbarungen sind selbstverständlich. Ihr Privatleben bleibt privat."
                    },
                    {
                      title: "Mehrsprachig",
                      desc: "Unser Team spricht Deutsch, Englisch, Französisch und Italienisch – für reibungslose Kommunikation."
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
          </Tabs>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie oft kommt das Housekeeping-Team?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ganz nach Ihren Wünschen – täglich, mehrmals wöchentlich oder nach Bedarf. Wir passen uns flexibel Ihrem Lebensstil an.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Sind die Mitarbeiter versichert?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, alle Mitarbeiter sind vollständig versichert (Haftpflicht, Unfall). Zusätzlich besteht eine Betriebshaftpflicht über CHF 5 Millionen.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Kann ich denselben Mitarbeiter behalten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir legen Wert auf Kontinuität. Sie erhalten einen festen Ansprechpartner, der Ihre Wünsche und Ihr Zuhause kennt.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Produkte verwenden Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir verwenden ausschließlich Premium-Produkte (z.B. Miele, Kärcher Professional, ökologische Spezialreiniger). Gerne auch Ihre bevorzugten Marken.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Erleben Sie exklusiven Service
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein persönliches Beratungsgespräch. Diskret und unverbindlich.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
