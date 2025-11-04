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
import { CheckCircle, Building, Clock, Shield, Sparkles, ArrowRight } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Bueroreinigung() {
  const serviceData = {
    name: "Professionelle Büroreinigung",
    description: "Zuverlässige Büroreinigung für Unternehmen in Zürich, Zug und Luzern. Flexibel, effizient und auf Ihre Bedürfnisse zugeschnitten.",
    url: "/business/bueroreinigung",
    category: "Commercial Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Büroreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Büroreinigung für Unternehmen in der Schweiz. Zuverlässig, flexibel und auf höchstem Qualitätsniveau."
        keywords="Büroreinigung, Büroreinigung Zürich, Gebäudereinigung Büro, Reinigung Geschäftsräume"
        url="/business/bueroreinigung"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6">
                Business Lösung
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Professionelle Büroreinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Zuverlässige Reinigungslösungen für Büros und Geschäftsräume in Zürich, Zug und Luzern. Flexibel, effizient und auf Ihre Bedürfnisse zugeschnitten.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={scrollToContact} className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 w-5 h-5"/>
                </Button>
                <AppointmentButton size="lg" variant="outline" className="text-lg" />
              </div>
            </div>
            <div className="relative">
              <ParallaxImage 
                src="/bueroreinigung-business-hero.jpg" 
                alt="Modernes Büro"
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
              <Building className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Alle Bürogrößen</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Von Startup bis Konzern</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Flexible Zeiten</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Auch außerhalb der Geschäftszeiten</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zuverlässig</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Feste Ansprechpartner</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Qualität</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">ISO 9001 zertifiziert</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="ablauf" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Ablauf & Zeiten</TabsTrigger>
              <TabsTrigger value="pakete" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Service-Pakete</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassende Büroreinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Tägliche Unterhaltsreinigung</h4>
                    <ul className="space-y-2">
                      {[
                        "Böden saugen & wischen",
                        "Schreibtische abstauben",
                        "Papierkörbe leeren",
                        "Sanitäranlagen reinigen",
                        "Küchen & Pausenräume",
                        "Eingangsbereiche pflegen"
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
                        "Fensterreinigung",
                        "Teppichpflege",
                        "Polsterreinigung",
                        "Grundreinigung",
                        "Desinfektionsservice",
                        "Grünpflanzen-Pflege"
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Flexibler Reinigungsablauf</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Bedarfsanalyse",
                      desc: "Wir besichtigen Ihre Räumlichkeiten und erstellen ein maßgeschneidertes Reinigungskonzept basierend auf Ihrer Bürogröße, Mitarbeiterzahl und spezifischen Anforderungen."
                    },
                    {
                      title: "Zeitplanung",
                      desc: "Reinigung nach Feierabend, früh morgens oder am Wochenende – wir passen uns Ihren Geschäftszeiten an, damit Ihre Mitarbeiter ungestört arbeiten können."
                    },
                    {
                      title: "Festes Team",
                      desc: "Sie erhalten ein festes Reinigungsteam, das Ihre Räumlichkeiten und Anforderungen kennt. Vertretungsregelungen sind selbstverständlich organisiert."
                    },
                    {
                      title: "Qualitätskontrolle",
                      desc: "Regelmäßige Kontrollen durch unsere Objektleitung und digitale Dokumentation der Reinigungsleistungen für transparente Qualitätssicherung."
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Unsere Service-Pakete</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Starter</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuelles Angebot</div>
                    <div className="text-sm text-slate-600 mb-4">Auf Ihre Bedürfnisse zugeschnitten</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Basis-Unterhaltsreinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>1-3x pro Woche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für kleine Büros</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Business</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuelles Angebot</div>
                    <div className="text-sm text-slate-600 mb-4">Auf Ihre Bedürfnisse zugeschnitten</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Tägliche Reinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Inkl. Sanitär & Küche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Fester Ansprechpartner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für 10-50 Mitarbeiter</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Enterprise</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Maßgeschneidertes Konzept</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Mehrere Standorte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Objektleitung vor Ort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>SLA & Reporting</span>
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
                Wann findet die Reinigung statt?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ganz nach Ihren Wünschen – üblicherweise nach Feierabend (ab 18 Uhr), früh morgens (ab 6 Uhr) oder am Wochenende. Wir passen uns flexibel Ihren Geschäftszeiten an.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Benötigen wir eigene Reinigungsmittel?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Nein, wir bringen alle Reinigungsmittel und Geräte mit. Auf Wunsch verwenden wir auch Ihre bevorzugten Produkte oder ökologische Alternativen.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Wie flexibel sind die Verträge?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Sehr flexibel. Wir bieten Verträge ab 3 Monaten Laufzeit mit 1 Monat Kündigungsfrist. Bei Änderungen der Bürogröße passen wir das Konzept kurzfristig an.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Was passiert bei Krankheit des Reinigungspersonals?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir garantieren Vertretung. Unser Team ist so organisiert, dass bei Ausfall sofort eine geschulte Ersatzkraft einspringt – ohne Qualitätsverlust.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Bereit für ein sauberes Büro?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot. Wir beraten Sie gerne persönlich.
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
