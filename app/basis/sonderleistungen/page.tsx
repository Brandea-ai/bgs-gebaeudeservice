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
import { CheckCircle, Star, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Sonderleistungen() {
  const serviceData = {
    name: "Professionelle Sonderleistungen",
    description: "Spezielle Reinigungsleistungen für außergewöhnliche Anforderungen. Schnell, kompetent und zuverlässig.",
    url: "/basis/sonderleistungen",
    category: "Special Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sonderleistungen Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Sonderleistungen in der Schweiz. Spezialreinigungen für außergewöhnliche Anforderungen."
        keywords="Sonderleistungen, Spezialreinigung Schweiz, Notfallreinigung, Express Reinigung"
        url="/basis/sonderleistungen"
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
                Professionelle Sonderleistungen
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Spezielle Reinigungsleistungen für außergewöhnliche Anforderungen in Zürich, Zug und Luzern.
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
                src="/sonderleistungen-hero.jpg" 
                alt="Sonderleistungen"
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
              <Zap className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Express-Service</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Schnelle Reaktionszeiten</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Spezialisiert</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Für besondere Anforderungen</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Professionell</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Geschulte Spezialisten</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">24/7 Verfügbar</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Auch an Wochenenden</div>
            </Card>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie schnell können Sie bei Notfällen vor Ort sein?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Bei Notfällen sind wir innerhalb von 2-4 Stunden vor Ort. Unsere 24/7-Hotline ist immer erreichbar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Benötigen Sie eine Sonderleistung?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kontakt-formular">
                <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5"/>
                </Button>
              </a>
              <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8" />
            </div>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
