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
import { Link } from "wouter";
import { CheckCircle, Briefcase, Clock, Shield, ArrowRight, Award } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FacilityManagement() {
  const serviceData = {
    name: "Ganzheitliches Facility Management",
    description: "Umfassendes Facility Management für Ihre Immobilien. Reinigung, Wartung und Instandhaltung aus einer Hand.",
    url: "/business/facility-management",
    category: "Facility Management"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Facility Management Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Umfassendes Facility Management in der Schweiz. Reinigung, Wartung und Instandhaltung aus einer Hand."
        keywords="Facility Management, Gebäudemanagement Schweiz, Facility Services, Immobilienverwaltung"
        url="/business/facility-management"
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
                Ganzheitliches Facility Management
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Umfassende Gebäudedienstleistungen aus einer Hand in Zürich, Zug und Luzern. Von Reinigung über Hausmeister bis Winterdienst.
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
                src="/b2b-facility.jpg" 
                alt="Facility Management"
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
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Alles aus einer Hand</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Umfassende Gebäudedienstleistungen koordiniert</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">24/7 Verfügbar</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Notfall-Hotline für dringende Anliegen</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Zertifiziert</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Qualitätsmanagement nach ISO-Standards</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Leistungsspektrum</TabsTrigger>
              <TabsTrigger value="vorteile" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Vorteile</TabsTrigger>
              <TabsTrigger value="branchen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Branchen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Alles aus einer Hand</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Reinigungsdienstleistungen</h4>
                    <ul className="space-y-2">
                      {["Unterhaltsreinigung", "Grundreinigung", "Fensterreinigung", "Fassadenreinigung", "Teppichreinigung", "Sonderreinigungen"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Hausmeisterservice</h4>
                    <ul className="space-y-2">
                      {["Kleinreparaturen", "Wartungsarbeiten", "Grünflächenpflege", "Winterdienst", "Müllentsorgung", "Objektbetreuung"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="vorteile">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Ihre Vorteile</h3>
                <div className="space-y-6">
                  {[
                    { title: "Ein Ansprechpartner", desc: "Für alle Gebäudedienstleistungen haben Sie nur einen Ansprechpartner. Das spart Zeit und Koordinationsaufwand." },
                    { title: "Kosteneffizienz", desc: "Durch Bündelung der Leistungen profitieren Sie von attraktiven Paketpreisen und reduzierten Verwaltungskosten." },
                    { title: "Qualitätssicherung", desc: "Einheitliche Standards und regelmäßige Kontrollen garantieren gleichbleibend hohe Qualität." },
                    { title: "Flexibilität", desc: "Wir passen unsere Leistungen flexibel an Ihre sich ändernden Bedürfnisse an." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="branchen">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Branchenlösungen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Bürogebäude", desc: "Komplettbetreuung von Büroimmobilien inkl. Empfangsservice" },
                    { title: "Einkaufszentren", desc: "7-Tage-Service mit flexiblen Öffnungszeiten" },
                    { title: "Industrieanlagen", desc: "Spezialisierte Reinigung und Wartung" },
                    { title: "Wohnanlagen", desc: "Treppenhausreinigung, Gartenpflege, Hausmeister" },
                    { title: "Hotels", desc: "24/7 Service für höchste Gästezufriedenheit" },
                    { title: "Gesundheitswesen", desc: "Hygienische Reinigung nach Vorschriften" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-lg">
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
                Was umfasst Facility Management?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Facility Management umfasst alle Dienstleistungen rund um Ihr Gebäude: Reinigung, Hausmeisterdienste, Winterdienst, technische Wartung, Grünflächenpflege und vieles mehr. Wir koordinieren alle Leistungen zentral.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Welche Vorteile bietet ein FM-Vertrag?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Mit einem Facility Management Vertrag haben Sie einen zentralen Ansprechpartner für alle Gebäudedienstleistungen. Das spart Zeit, Kosten und Koordinationsaufwand. Sie erhalten regelmäßige Berichte und transparente Abrechnungen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Sind Sie auch im Notfall erreichbar?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, unsere Notfall-Hotline ist 24/7 erreichbar. Bei dringenden Problemen wie Wasserschäden, Heizungsausfällen oder Sicherheitsfragen sind wir innerhalb kürzester Zeit vor Ort.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Können Sie auch einzelne Leistungen übernehmen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, Sie können sowohl ein Komplettpaket als auch einzelne Dienstleistungen buchen. Wir erstellen ein maßgeschneidertes Angebot nach Ihrem Bedarf.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Wie wird die Qualität sichergestellt?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir arbeiten nach ISO-zertifizierten Qualitätsstandards, führen regelmäßige Kontrollen durch und dokumentieren alle Leistungen digital. Sie erhalten transparente Berichte und können jederzeit Feedback geben.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für professionelles Facility Management?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 text-red-100">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne zu allen FM-Leistungen.
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
