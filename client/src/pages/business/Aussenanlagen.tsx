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
import { CheckCircle, Trees, Leaf, ArrowRight, Shield, Clock, Award } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Aussenanlagen() {
  const serviceData = {
    name: "Außenanlage & Grünflächenpflege",
    description: "Professionelle Pflege von Außenanlagen. Grünflächenpflege, Winterdienst und Außenreinigung.",
    url: "/business/aussenanlagen",
    category: "Outdoor Facility Management"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Außenanlage Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Pflege von Außenanlagen in der Schweiz. Grünflächenpflege, Winterdienst und Außenreinigung."
        keywords="Außenanlagen Pflege, Grünflächenpflege Schweiz, Außenreinigung, Facility Management Außen"
        url="/business/aussenanlagen"
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
                Außenanlagen & Grünflächenpflege
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Professionelle Pflege Ihrer Außenanlagen und Grünflächen in Zürich, Zug und Luzern. Für einen gepflegten ersten Eindruck.
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
                src="/b2b-gruenflaechen.jpg" 
                alt="Grünflächen"
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
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Ganzjährige Betreuung</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Professionelle Pflege zu jeder Jahreszeit</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Flexible Einsätze</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Nach Ihrem individuellen Bedarf</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Schweizweit</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">Service in Zürich, Zug und Luzern</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="reinigung" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="reinigung" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Außenreinigung</TabsTrigger>
              <TabsTrigger value="gruenflaechen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Grünflächenpflege</TabsTrigger>
              <TabsTrigger value="winter" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Winterdienst</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reinigung">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Außenbereichsreinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    {["Eingangsbereiche", "Parkplätze", "Gehwege", "Treppen", "Terrassen", "Innenhöfe"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {["Hochdruckreinigung", "Unkrautentfernung", "Laubbeseitigung", "Müllentsorgung", "Graffiti-Entfernung", "Pflasterreinigung"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="gruenflaechen">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Grünflächenpflege</h3>
                <div className="space-y-4">
                  {[
                    { title: "Rasenpflege", desc: "Mähen, Vertikutieren, Düngen – für einen gepflegten Rasen das ganze Jahr über." },
                    { title: "Heckenschnitt", desc: "Formschnitt und Pflegeschnitt für Hecken und Sträucher nach Jahreszeit." },
                    { title: "Beetpflege", desc: "Unkraut jäten, Mulchen, Bewässerung – damit Ihre Beete immer gepflegt aussehen." },
                    { title: "Baumpflege", desc: "Baumschnitt, Kronenauslichtung und Totholzentfernung durch Fachpersonal." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm md:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="winter">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Winterdienst</h3>
                <p className="text-slate-600 mb-6">
                  Zuverlässiger Winterdienst für sichere Zugänge und Verkehrswege:
                </p>
                <ul className="space-y-3">
                  {["Schneeräumung", "Streudienst", "Eisbeseitigung", "24/7 Bereitschaft", "Dokumentation für Versicherung", "Eigene Streufahrzeuge"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
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
                Wie oft sollten Außenanlagen gereinigt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Die Häufigkeit hängt von der Nutzung und den örtlichen Gegebenheiten ab. Wir empfehlen für stark frequentierte Bereiche eine wöchentliche Reinigung, für weniger genutzte Flächen eine monatliche Pflege. Wir erstellen gerne einen individuellen Pflegeplan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Welche Leistungen sind im Winterdienst enthalten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Unser Winterdienst umfasst Schneeräumung, Streudienst mit umweltfreundlichen Materialien, Enteisungsarbeiten und die Sicherstellung der Verkehrssicherheit auf allen Außenanlagen. Wir sind 24/7 im Einsatz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Können Sie auch Grünflächen pflegen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten professionelle Grünflächenpflege an, einschließlich Rasenmähen, Heckenschnitt, Unkrautentfernung und Laubbeseitigung. Unser Team arbeitet mit modernen Geräten und achtet auf ein gepflegtes Erscheinungsbild.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Arbeiten Sie auch an Wochenenden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Ja, wir bieten flexible Einsatzzeiten an, auch an Wochenenden und Feiertagen. Besonders bei Schneefall und Notfällen sind wir rund um die Uhr für Sie da.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Wie schnell können Sie bei Bedarf reagieren?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm md:text-base">
                Bei Notfällen wie Schneefall oder Verschmutzungen können wir innerhalb weniger Stunden vor Ort sein. Für reguläre Pflegearbeiten vereinbaren wir feste Termine nach Ihrem Bedarf.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für gepflegte Außenanlagen?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 text-red-100">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne.
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
