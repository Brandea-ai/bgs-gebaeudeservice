import { useState } from "react";
import { scrollToContact } from "../utils/scroll";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ParallaxImage, RevealOnScroll, TiltCard, MagneticHover } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Settings, ArrowRight, Shield, Wrench, Award } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Maschinenreinigung() {
  const serviceData = {
    name: "Professionelle Maschinenreinigung",
    description: "Professionelle Maschinenreinigung für Industrie und Produktion. Präzise, sicher und normgerecht.",
    url: "/business/maschinenreinigung",
    category: "Machine Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Maschinenreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Maschinenreinigung in der Schweiz für Industrie und Produktion. Präzise, sicher und normgerecht."
        keywords="Maschinenreinigung, Industriemaschinen Reinigung, Produktionsanlagen Reinigung Schweiz"
        url="/business/maschinenreinigung"
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
                Business Lösung
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Professionelle Maschinenreinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Spezialisierte Reinigung von Produktionsmaschinen und Industrieanlagen in Zürich, Zug und Luzern. Für optimale Leistung und längere Lebensdauer Ihrer Maschinen.
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
                src="/machine-cleaning.jpg" 
                alt="Professionelle Maschinenreinigung"
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

      {/* Features Section with Image Left */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ParallaxImage 
                src="/industrial-machine.jpg" 
                alt="Industriemaschine Reinigung"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover h-[500px]"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                Spezialisiert auf Industrieanlagen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Unsere <Link href="/business/industriereinigung" className="text-primary hover:underline">Industriereinigung</a> umfasst die fachgerechte Reinigung von CNC-Maschinen, Produktionsanlagen und Fertigungsstraßen. Mit speziellen Reinigungsmitteln und Techniken entfernen wir Öl, Fett und Produktionsrückstände.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Schonende Reinigung" },
                  { icon: Wrench, text: "Fachgerechte Methoden" },
                  { icon: Award, text: "Zertifizierte Experten" },
                  { icon: Settings, text: "Alle Maschinentypen" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Image Right */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                Umfassende Reinigungsleistungen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Von der Grundreinigung bis zur Wartungsreinigung - wir bieten alle Leistungen für Ihre Maschinen. Unsere <Link href="/business/hallenreinigung" className="text-primary hover:underline">Hallenreinigung</a> kann bei Bedarf integriert werden.
              </p>
              <div className="space-y-3">
                {[
                  "CNC-Maschinen und Drehbänke",
                  "Produktionsanlagen und Fertigungsstraßen",
                  "Pressen und Stanzen",
                  "Förderanlagen und Transportbänder",
                  "Verpackungsmaschinen",
                  "Druckmaschinen und Offset-Anlagen",
                  "Lebensmittelmaschinen (HACCP-konform)",
                  "Pharma-Anlagen (GMP-konform)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                    <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ParallaxImage 
                src="/production-line-cleaning.jpg" 
                alt="Produktionslinie Reinigung"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover h-[500px]"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section - FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <RevealOnScroll><div className="text-center mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">
              Alles was Sie über unsere Maschinenreinigung wissen müssen
            </p>
          </div></RevealOnScroll>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Reinigungsmittel verwenden Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir verwenden spezialisierte, materialschonende Reinigungsmittel, die auf den jeweiligen Maschinentyp abgestimmt sind. Für Lebensmittelmaschinen setzen wir HACCP-konforme Produkte ein, für Pharma-Anlagen GMP-konforme Reiniger. Alle Mittel sind umweltfreundlich und biologisch abbaubar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Können Sie während der Produktionspausen reinigen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir passen uns flexibel Ihren Produktionszeiten an. Ob während Schichtwechseln, nachts oder am Wochenende - wir reinigen dann, wenn es für Ihren Betrieb am besten passt. Unsere <Link href="/business/facility-management" className="text-primary hover:underline">Facility Management</a> Services koordinieren alle Abläufe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Wie oft sollten Maschinen gereinigt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Die Reinigungsfrequenz hängt von der Nutzung und dem Verschmutzungsgrad ab. Lebensmittelmaschinen benötigen oft tägliche Reinigung, während andere Produktionsanlagen mit wöchentlicher oder monatlicher Reinigung auskommen. Wir erstellen einen individuellen Wartungsplan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie auch Grundreinigung an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten sowohl Unterhaltsreinigung als auch intensive Grundreinigung an. Bei der Grundreinigung werden hartnäckige Verschmutzungen, Öl- und Fettrückstände vollständig entfernt. Unsere <Link href="/business/baureinigung" className="text-primary hover:underline">Baureinigung</a> umfasst auch Endreinigung nach Umbauten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Sind Ihre Mitarbeiter geschult?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Alle unsere Mitarbeiter sind speziell für Maschinenreinigung geschult und verfügen über Kenntnisse in Arbeitssicherheit und Maschinentechnik. Sie sind mit den spezifischen Anforderungen verschiedener Branchen vertraut und arbeiten nach höchsten Qualitätsstandards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Bereit für professionelle Maschinenreinigung?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne zu allen Reinigungsdienstleistungen in Zürich, Zug und Luzern.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#kontakt-formular">
              <Button size="lg" variant="secondary" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </a>
            <AppointmentButton size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 border-white text-white hover:bg-white hover:text-primary" />
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
