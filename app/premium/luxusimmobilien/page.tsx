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
import { CheckCircle, Building2, Shield, Sparkles, Award, ArrowRight } from "lucide-react";
import AppointmentButton from "@/components/AppointmentButton";

export default function Luxusimmobilien() {
  const serviceData = {
    name: "Luxusimmobilien-Reinigung",
    description: "Maßgeschneiderte Reinigung für Luxusimmobilien. Spezialisiert auf Edeloberflächen, Kunstobjekte und exklusive Materialien.",
    url: "/premium/luxusimmobilien",
    category: "Luxury Property Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Luxusimmobilien-Reinigung - Premium Service"
        description="Maßgeschneiderte Reinigung für Luxusimmobilien in Zürich, Zug und Luzern. Spezialisiert auf Edeloberflächen und Kunstobjekte."
        keywords="Luxusimmobilien Reinigung, Villa Reinigung Schweiz, Premium Immobilien Service, Luxus Reinigung"
        url="/premium/luxusimmobilien"
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
                Luxusimmobilien-Reinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Maßgeschneiderte Reinigung für Luxusimmobilien. Spezialisiert auf Edeloberflächen, Kunstobjekte und exklusive Materialien in Zürich, Zug und Luzern.
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
                src="/premium-luxusimmobilien.jpg" 
                alt="Luxuriöse Immobilie"
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

      {/* H2 with Location Keywords */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 text-center">
            Luxusimmobilien-Reinigung in Zürich, Zug und Luzern – Expertise für edle Materialien
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-center max-w-3xl mx-auto">
            Unsere spezialisierten Teams bieten maßgeschneiderte Reinigungslösungen für anspruchsvolle Immobilien mit wertvollen Kunstwerken, Antiquitäten und exklusiven Materialien.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Edeloberflächen</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Spezialisierte Pflege</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Kunstobjekte</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Sachkundige Behandlung</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Maßgeschneidert</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Individuelle Konzepte</div>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zertifiziert</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Höchste Standards</div>
            </Card>
          </div>

          <Tabs defaultValue="materialien" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="materialien" className="text-sm sm:text-base">Materialien</TabsTrigger>
              <TabsTrigger value="kunst" className="text-sm sm:text-base">Kunst & Antiquitäten</TabsTrigger>
              <TabsTrigger value="referenzen" className="text-sm sm:text-base">Referenzen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="materialien" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Expertise für edle Materialien</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Naturstein & Marmor",
                      desc: "Professionelle Reinigung und Pflege von Marmor, Granit, Travertin und anderen Natursteinen. Imprägnierung und Politur für dauerhaften Schutz und Glanz."
                    },
                    {
                      title: "Echtholz-Böden",
                      desc: "Schonende Behandlung von Parkett, Dielen und exotischen Hölzern. Spezialreiniger und Pflegeöle für langanhaltende Schönheit."
                    },
                    {
                      title: "Designer-Möbel",
                      desc: "Sachkundige Reinigung von hochwertigen Designermöbeln. Kenntnis verschiedener Materialien von Leder bis Hightech-Textilien."
                    },
                    {
                      title: "Glas & Kristall",
                      desc: "Streifenfreie Reinigung großer Glasflächen, Kristalllüster und Glaskunstwerke mit speziellen Mikrofasertüchern."
                    },
                    {
                      title: "Edelmetalle",
                      desc: "Professionelle Politur von Gold-, Silber- und Bronzeelementen. Entfernung von Anlauffarben und Schutzbehandlung."
                    },
                    {
                      title: "Textilien & Teppiche",
                      desc: "Spezialreinigung für Perserteppiche, Seidenteppiche und hochwertige Vorhänge. Schonend und farberhaltend."
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
            
            <TabsContent value="kunst" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Kunstwerke & Antiquitäten</h3>
                <p className="text-lg text-slate-600 mb-8">
                  Ihre Kunstsammlung verdient besondere Aufmerksamkeit. Unser geschultes Personal behandelt wertvolle Objekte mit größter Sorgfalt:
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Gemälde & Rahmen",
                      desc: "Staubentfernung mit antistatischen Spezialwerkzeugen. Keine Berührung der Oberflächen, nur Rahmenreinigung nach Absprache."
                    },
                    {
                      title: "Skulpturen",
                      desc: "Materialgerechte Reinigung von Skulpturen aus Bronze, Marmor, Holz oder modernen Werkstoffen. Kenntnis der richtigen Techniken."
                    },
                    {
                      title: "Antiquitäten",
                      desc: "Vorsichtige Behandlung antiker Möbel, Porzellan und Sammlerstücke. Verwendung spezieller pH-neutraler Reiniger."
                    },
                    {
                      title: "Vitrinen & Displays",
                      desc: "Professionelle Reinigung von Vitrinen und Ausstellungsflächen ohne Berührung der ausgestellten Objekte."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-primary"/>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="referenzen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Unsere Referenz-Objekte</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Penthouse Zürichberg",
                      size: "450 m²",
                      features: ["Marmor-Böden", "Kunst-Sammlung", "Dachterrasse"],
                      desc: "Regelmäßige Pflege eines exklusiven Penthouses mit umfangreicher Kunstsammlung und hochwertigen Materialien."
                    },
                    {
                      title: "Villa Zugersee",
                      size: "800 m²",
                      features: ["Naturstein", "Infinity-Pool", "Weinkeller"],
                      desc: "Komplettbetreuung einer Seevilla inklusive Außenanlagen, Pool-Reinigung und klimatisiertem Weinkeller."
                    },
                    {
                      title: "Chalet Luzern",
                      size: "600 m²",
                      features: ["Altholz", "Wellness-Bereich", "Smart Home"],
                      desc: "Spezialisierte Reinigung eines modernen Chalets mit historischen Holzelementen und integrierter Haustechnik."
                    }
                  ].map((item, i) => (
                    <Card key={i} className="p-6 bg-slate-50">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h4>
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          {item.size}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.map((feature, j) => (
                          <span key={j} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 text-xs sm:text-sm md:text-base">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Internal Links Section */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Entdecken Sie unsere weiteren Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Link href="/premium/privatjet">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-bold text-lg mb-2 text-primary">Privatjet Reinigung</h3>
                <p className="text-slate-600 text-sm">Professionelle Reinigung für Privatjets mit höchsten Standards.</p>
              </Card>
            </Link>
            <Link href="/premium/yacht">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-bold text-lg mb-2 text-primary">Yacht Reinigung</h3>
                <p className="text-slate-600 text-sm">Spezialisierte Reinigung für Luxus-Yachten mit Marine-Expertise.</p>
              </Card>
            </Link>
            <Link href="/premium/housekeeping">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-bold text-lg mb-2 text-primary">Private Housekeeping</h3>
                <p className="text-slate-600 text-sm">Exklusiver Housekeeping-Service für höchste Ansprüche.</p>
              </Card>
            </Link>
            <Link href="/basis/hausmeisterservice">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-bold text-lg mb-2 text-primary">Hausmeisterservice</h3>
                <p className="text-slate-600 text-sm">Zuverlässige Objektbetreuung mit 24/7 Notfall-Service.</p>
              </Card>
            </Link>
            <Link href="/business/fensterreinigung">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-bold text-lg mb-2 text-primary">Fensterreinigung</h3>
                <p className="text-slate-600 text-sm">Streifenfreie Fensterreinigung für alle Materialien.</p>
              </Card>
            </Link>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie gehen Sie mit wertvollen Kunstwerken um?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Unser Personal ist speziell geschult im Umgang mit Kunstwerken. Wir arbeiten nach musealen Standards und berühren Kunstobjekte nur nach ausdrücklicher Genehmigung.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Sind Sie für Schäden versichert?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir verfügen über eine Betriebshaftpflicht mit CHF 10 Millionen Deckungssumme, die auch wertvolle Kunstgegenstände und Antiquitäten einschließt.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Produkte verwenden Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir setzen ausschließlich Premium-Produkte ein, die für hochwertige Materialien zugelassen sind. Viele unserer Reiniger sind pH-neutral und rückstandsfrei.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie auch Notfall-Reinigung an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, bei Notfällen wie Wasserschäden oder vor wichtigen Events sind wir auch kurzfristig für Sie da. 24/7 Erreichbarkeit für Premium-Kunden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Wie gewährleisten Sie die Sicherheit wertvoller Gegenstände?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Alle Mitarbeiter durchlaufen ein mehrstufiges Auswahlverfahren inklusive Referenzprüfung und Führungszeugnis. Wir arbeiten nach musealen Standards und dokumentieren jeden Einsatz. Zusätzlich besteht eine Versicherung mit CHF 10 Millionen Deckung.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                Arbeiten Sie auch mit Restauratoren und Kunstexperten zusammen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, für besonders wertvolle oder empfindliche Kunstwerke arbeiten wir mit Restauratoren und Kunstexperten zusammen. Bei Bedarf holen wir Fachgutachten ein, um die optimale Reinigungs- und Pflegemethode zu bestimmen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Ihre Luxusimmobilie in besten Händen
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für eine persönliche Beratung vor Ort. Diskret und unverbindlich.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
