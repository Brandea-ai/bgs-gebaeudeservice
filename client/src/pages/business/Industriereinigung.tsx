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
import { CheckCircle, Factory, Shield, AlertTriangle, Sparkles, ArrowRight } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Industriereinigung() {
  const serviceData = {
    name: "Professionelle Industriereinigung",
    description: "Spezialisierte Reinigungslösungen für Produktionshallen, Werkstätten und Industrieanlagen. Sicher, effizient und normgerecht.",
    url: "/business/industriereinigung",
    category: "Industrial Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Industriereinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Industriereinigung in der Schweiz. Spezialisiert auf Produktionshallen, Werkstätten und Industrieanlagen."
        keywords="Industriereinigung, Produktionshallen Reinigung, Werkstatt Reinigung Schweiz, Industrieanlagen Reinigung"
        url="/business/industriereinigung"
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
                Professionelle Industriereinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Spezialisierte Reinigungslösungen für Produktionshallen, Werkstätten und Industrieanlagen in Zürich, Zug und Luzern. Sicher, effizient und normgerecht.
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
                src="/industriereinigung-business-hero.jpg" 
                alt="Industriehalle"
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
              <Factory className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Alle Branchen</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Von Logistik bis Pharma</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Sicherheit</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Geschultes Personal</div>
            </Card>
            <Card className="p-6 text-center">
              <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Normgerecht</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">ISO & Arbeitssicherheit</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Spezialgeräte</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Industriesauger & mehr</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="branchen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Branchen</TabsTrigger>
              <TabsTrigger value="sicherheit" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Sicherheit & Normen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassende Industriereinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Produktionshallen</h4>
                    <ul className="space-y-2">
                      {[
                        "Hallenböden (Beton, Epoxid, PVC)",
                        "Hochregallager-Reinigung",
                        "Entstaubung von Decken & Wänden",
                        "Produktionslinien-Umfeld",
                        "Sozialräume & Büros",
                        "Außenanlagen & Parkplätze"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Spezialreinigung</h4>
                    <ul className="space-y-2">
                      {[
                        "Maschinenreinigung",
                        "Ölspuren-Entfernung",
                        "Chemikalien-Rückstände",
                        "Reinraum-Reinigung",
                        "Gefahrstoff-Entsorgung",
                        "Grundreinigung nach Bau"
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
            
            <TabsContent value="branchen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Branchenspezifische Expertise</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Lebensmittelindustrie",
                      desc: "HACCP-konforme Reinigung mit lebensmitteltauglichen Produkten. Dokumentation für Audits inklusive."
                    },
                    {
                      title: "Pharma & Medizintechnik",
                      desc: "Reinraum-Reinigung nach GMP-Standards. Validierte Prozesse und geschultes Personal."
                    },
                    {
                      title: "Logistik & Lager",
                      desc: "Effiziente Reinigung großer Flächen mit Industriekehrmaschinen und Scheuersaugautomaten."
                    },
                    {
                      title: "Metallverarbeitung",
                      desc: "Entfernung von Metallspänen, Kühlschmierstoffen und Ölrückständen mit Spezialverfahren."
                    },
                    {
                      title: "Chemie & Kunststoff",
                      desc: "Umgang mit Gefahrstoffen, fachgerechte Entsorgung und Einhaltung aller Sicherheitsvorschriften."
                    },
                    {
                      title: "Automotive",
                      desc: "Reinigung von Produktions- und Montagehallen, Lackierereien und Qualitätssicherungsbereichen."
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
            
            <TabsContent value="sicherheit" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Sicherheit & Zertifizierungen</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Arbeitssicherheit (SUVA)",
                      desc: "Alle Mitarbeiter sind in Arbeitssicherheit geschult. PSA (Persönliche Schutzausrüstung) wird konsequent getragen. Regelmäßige Sicherheitsunterweisungen."
                    },
                    {
                      title: "ISO 9001 Qualitätsmanagement",
                      desc: "Zertifiziertes Qualitätsmanagementsystem garantiert gleichbleibend hohe Standards und kontinuierliche Verbesserung."
                    },
                    {
                      title: "Gefahrstoff-Schulung",
                      desc: "Unser Personal ist im Umgang mit Gefahrstoffen geschult und kennt die relevanten Sicherheitsdatenblätter."
                    },
                    {
                      title: "Versicherungsschutz",
                      desc: "Umfassende Betriebs- und Produkthaftpflicht mit CHF 10 Millionen Deckungssumme. Alle Mitarbeiter unfallversichert."
                    },
                    {
                      title: "Dokumentation",
                      desc: "Lückenlose Dokumentation aller Reinigungsvorgänge für Ihre Audits und Qualitätssicherung."
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
                Können Sie auch während der Produktion reinigen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir passen uns Ihren Produktionszeiten an. Reinigung in Schichtpausen, am Wochenende oder in produktionsfreien Bereichen ist möglich.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Verfügen Sie über eigene Industriegeräte?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir verfügen über Industriesauger, Scheuersaugautomaten, Kehrmaschinen und Hochdruckreiniger. Spezialgeräte werden bei Bedarf angemietet.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Wie gehen Sie mit Gefahrstoffen um?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Unser Personal ist geschult und zertifiziert. Wir arbeiten nach Ihren Sicherheitsvorgaben und entsorgen Gefahrstoffe fachgerecht über zugelassene Entsorgungsfirmen.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie auch Notfall-Reinigung an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, bei Produktionsunfällen, Leckagen oder anderen Notfällen sind wir kurzfristig für Sie da. 24/7 Erreichbarkeit für Notfälle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Bereit für professionelle Industriereinigung?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für eine Besichtigung vor Ort und ein maßgeschneidertes Angebot.
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
