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
import { CheckCircle, HardHat, Trash2, ArrowRight, Shield, Clock, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AppointmentButton from "@/components/AppointmentButton";

export default function Baureinigung() {
  const serviceData = {
    name: "Professionelle Baureinigung",
    description: "Professionelle Baureinigung für Neubauten und Renovierungen. Bauschlussreinigung, Baustellenreinigung und Entsorgung.",
    url: "/business/baureinigung",
    category: "Construction Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Baureinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Baureinigung in der Schweiz. Bauschlussreinigung, Baustellenreinigung und Entsorgung für Neubauten und Renovierungen."
        keywords="Baureinigung, Bauschlussreinigung, Baustellenreinigung Schweiz, Endreinigung Neubau"
        url="/business/baureinigung"
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
                Professionelle Baureinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Zuverlässige Baureinigung für Neubauten, Umbauten und Renovierungen in Zürich, Zug und Luzern. Von der Grobreinigung bis zur Endreinigung.
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
                src="/baureinigung-hero.jpg" 
                alt="Baustelle"
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Zertifizierte Qualität</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Professionelle Baureinigung nach Schweizer Standards</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Termingerecht</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Pünktliche Fertigstellung für Ihre Bauabnahme</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">15+ Jahre Erfahrung</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Expertise in allen Bauphasen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="phasen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="phasen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Reinigungsphasen</TabsTrigger>
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Leistungen</TabsTrigger>
              <TabsTrigger value="entsorgung" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Entsorgung</TabsTrigger>
            </TabsList>
            
            <TabsContent value="phasen">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Baureinigung in 3 Phasen</h3>
                <div className="space-y-6">
                  {[
                    { title: "1. Grobreinigung", desc: "Entfernung grober Verschmutzungen, Bauschutt, Verpackungsmaterial. Erste Reinigung nach Rohbau." },
                    { title: "2. Zwischenreinigung", desc: "Reinigung nach Gewerken (Maler, Elektriker, etc.). Vorbereitung für nächste Bauphase." },
                    { title: "3. Endreinigung", desc: "Finale Reinigung vor Übergabe. Fenster, Böden, Sanitär – alles bezugsfertig." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="leistungen">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Unsere Leistungen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    {["Baustaub entfernen", "Fenster reinigen", "Böden grundreinigen", "Sanitäranlagen", "Türen & Zargen", "Heizkörper"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {["Zementschleier entfernen", "Klebstoffreste", "Farbspritzer", "Schutzfolien entfernen", "Bauschutt-Entsorgung", "Abnahmebereit übergeben"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="entsorgung">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Fachgerechte Entsorgung</h3>
                <p className="text-slate-600 mb-6">
                  Wir entsorgen Bauabfälle fachgerecht und umweltbewusst:
                </p>
                <ul className="space-y-3">
                  {["Bauschutt & Restmaterialien", "Verpackungsmaterial", "Holzabfälle", "Metallschrott", "Sondermüll (nach Absprache)", "Recycling wo möglich"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Trash2 className="w-5 h-5 text-primary mt-0.5"/>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
            Häufig gestellte Fragen
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Wann sollte die Baureinigung durchgeführt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Die Baureinigung erfolgt in mehreren Phasen: Grobreinigung nach dem Rohbau, Zwischenreinigung nach einzelnen Gewerken und die Endreinigung vor der Bauabnahme. Wir empfehlen, uns frühzeitig in die Bauplanung einzubeziehen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Was ist in der Endreinigung enthalten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Die Endreinigung umfasst die komplette Reinigung aller Räume, Fenster, Böden, Sanitäranlagen, Türen und Zargen. Wir entfernen Baustaub, Zementschleier, Klebstoffreste und Farbspritzer. Das Objekt wird abnahmebereit übergeben.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Wie lange dauert eine Baureinigung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Die Dauer hängt von der Objektgröße und dem Verschmutzungsgrad ab. Eine Wohnung (100m²) dauert ca. 1-2 Tage, größere Objekte entsprechend länger. Wir erstellen einen detaillierten Zeitplan nach Besichtigung.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Entsorgen Sie auch Bauschutt?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir übernehmen die fachgerechte Entsorgung von Bauschutt, Restmaterialien, Verpackungen und anderen Bauabfällen. Die Entsorgung erfolgt umweltbewusst und nach gesetzlichen Vorgaben.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Arbeiten Sie auch an Wochenenden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten flexible Einsatzzeiten an, auch an Wochenenden und Feiertagen, um Ihre Bauzeitpläne einzuhalten. Sprechen Sie uns auf Ihre individuellen Terminwünsche an.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für Ihre Baureinigung?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 text-red-100">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne zu allen Bauphasen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} variant="secondary" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
              Kostenlose Beratung
            </Button>
            <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary" />
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
