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
import { CheckCircle, Eye, Droplets, Shield, Sparkles, ArrowRight, Clock, Award } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Fensterreinigung() {
  const serviceData = {
    name: "Professionelle Fensterreinigung",
    description: "Streifenfreie Fensterreinigung für Gewerbe und Industrie. Von Bürogebäuden bis zu Produktionshallen.",
    url: "/business/fensterreinigung",
    category: "Window Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Fensterreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Fensterreinigung in der Schweiz. Streifenfrei, sicher und zuverlässig für Gewerbe und Industrie."
        keywords="Fensterreinigung, Fenster putzen Schweiz, Glasreinigung, Fensterreinigung Gewerbe"
        url="/business/fensterreinigung"
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
                Professionelle Fensterreinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Streifenfreie Fensterreinigung für Gewerbe und Industrie in Zürich, Zug und Luzern. Von Bürogebäuden bis zu Produktionshallen.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#kontakt-formular">
                  <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </a>
                <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8" />
              </div>
            </div>
            <div className="relative">
              <ParallaxImage 
                src="/b2b-fensterreinigung.jpg" 
                alt="Fensterreinigung"
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
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Streifenfrei</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Professionelle Reinigung ohne Rückstände</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Schnell & Effizient</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Minimale Betriebsstörungen</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Sicherheit</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Zertifizierte Höhenarbeiter</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Leistungen</TabsTrigger>
              <TabsTrigger value="verfahren" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Verfahren</TabsTrigger>
              <TabsTrigger value="intervalle" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Reinigungsintervalle</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassende Fensterreinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    {["Innen- und Außenreinigung", "Rahmen & Fensterbretter", "Dachfenster & Oberlichter", "Schaufenster", "Wintergärten", "Glasdächer"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {["Glasfassaden", "Treppenhausfenster", "Schwer zugängliche Fenster", "Versiegelung optional", "Insektenschutz-Reinigung", "Jalousien-Reinigung"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="verfahren">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Moderne Reinigungstechniken</h3>
                <div className="space-y-6">
                  {[
                    { title: "Osmose-Wasser-Technik", desc: "Demineralisiertes Wasser für streifenfreie Ergebnisse ohne Chemie. Umweltfreundlich und effizient." },
                    { title: "Teleskopstangen-System", desc: "Reinigung bis 20m Höhe vom Boden aus. Sicher und ohne Gerüste oder Leitern." },
                    { title: "Hebebühnen", desc: "Für schwer zugängliche Bereiche und Hochhäuser setzen wir moderne Hebebühnen ein." },
                    { title: "Traditionelle Handarbeit", desc: "Für Detailarbeiten und besonders anspruchsvolle Fenster setzen wir auf bewährte Handarbeit." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="intervalle">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Empfohlene Reinigungsintervalle</h3>
                <div className="space-y-4">
                  {[
                    { type: "Bürogebäude", interval: "4-6x jährlich", desc: "Für repräsentativen Eindruck" },
                    { type: "Produktionshallen", interval: "2-4x jährlich", desc: "Je nach Verschmutzungsgrad" },
                    { type: "Schaufenster", interval: "Wöchentlich", desc: "Für maximale Außenwirkung" },
                    { type: "Wohngebäude", interval: "2x jährlich", desc: "Frühjahr und Herbst" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-bold">{item.type}</div>
                        <div className="text-sm text-slate-600 text-xs sm:text-sm md:text-base">{item.desc}</div>
                      </div>
                      <div className="text-primary font-bold">{item.interval}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Reinigen Sie auch bei schlechtem Wetter?</AccordionTrigger>
              <AccordionContent>
                Leichter Regen ist kein Problem. Bei starkem Regen oder Sturm verschieben wir den Termin aus Sicherheitsgründen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie lange dauert eine Fensterreinigung?</AccordionTrigger>
              <AccordionContent>
                Das hängt von der Anzahl und Größe der Fenster ab. Ein durchschnittliches Bürogebäude (50 Fenster) dauert 2-3 Stunden.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für streifenfreie Fenster?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 text-red-100">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt-formular">
              <Button size="lg" variant="secondary" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Kostenlose Beratung
              </Button>
            </a>
            <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary" />
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
