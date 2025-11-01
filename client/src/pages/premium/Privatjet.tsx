import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Star, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";

export default function Privatjet() {
  const serviceData = {
    name: "Privatjet Reinigung",
    description: "Professionelle Reinigung für Privatjets mit höchsten Standards. Diskretion, Präzision und Verfügbarkeit rund um die Uhr.",
    url: "/premium/privatjet",
    category: "Aviation Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privatjet Reinigung - Exklusiver Premium Service"
        description="Professionelle Privatjet Reinigung in der Schweiz. Diskretion, höchste Standards und 24/7 Verfügbarkeit für anspruchsvolle Kunden."
        keywords="Privatjet Reinigung, Flugzeug Reinigung Schweiz, Aviation Cleaning, Private Jet Service"
        url="/premium/privatjet"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Premium Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Privatjet Reinigung
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
                Professionelle Reinigung für Privatjets mit höchsten Standards. Diskretion, Präzision und Verfügbarkeit rund um die Uhr für anspruchsvolle Kunden in Zürich, Zug und Luzern.
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
              <img 
                src="/premium-privatjet.jpg" 
                alt="Luxuriöser Privatjet Interior" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
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
              <div className="font-bold text-lg mb-2">VIP-Service</div>
              <div className="text-slate-600">Höchste Diskretion garantiert</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">24/7 Verfügbar</div>
              <div className="text-slate-600">Rund um die Uhr erreichbar</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Premium-Produkte</div>
              <div className="text-slate-600">Nur hochwertigste Materialien</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zertifiziert</div>
              <div className="text-slate-600">ISO 9001 & Aviation Standards</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="prozess" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unser Prozess</TabsTrigger>
              <TabsTrigger value="vorteile" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Ihre Vorteile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">Umfassende Privatjet Reinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Innenreinigung</h4>
                    <ul className="space-y-2">
                      {[
                        "Lederpflege und -behandlung",
                        "Teppich- und Polsterreinigung",
                        "Holzoberflächen-Behandlung",
                        "Fenster und Spiegel streifenfrei",
                        "Cockpit-Reinigung (falls gewünscht)",
                        "Sanitärbereich-Desinfektion"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Außenreinigung</h4>
                    <ul className="space-y-2">
                      {[
                        "Rumpf-Reinigung und Politur",
                        "Tragflächen-Behandlung",
                        "Fahrwerk-Reinigung",
                        "Fenster-Außenreinigung",
                        "Entfernung von Insektenresten",
                        "Enteisungsmittel-Rückstände"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="prozess" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">Unser bewährter Prozess</h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Terminvereinbarung",
                      desc: "Flexible Terminplanung nach Ihrem Flugplan. Wir passen uns Ihren Bedürfnissen an – auch kurzfristig."
                    },
                    {
                      step: "2",
                      title: "Sicherheitscheck",
                      desc: "Alle Mitarbeiter sind sicherheitsgeprüft und verfügen über notwendige Flughafen-Zugangsberechtigungen."
                    },
                    {
                      step: "3",
                      title: "Professionelle Reinigung",
                      desc: "Einsatz spezialisierter Produkte und Techniken für Luftfahrt-Materialien. Schonend und gründlich."
                    },
                    {
                      step: "4",
                      title: "Qualitätskontrolle",
                      desc: "Abschließende Inspektion durch unseren Supervisor. Nur perfekte Ergebnisse verlassen unsere Hände."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="vorteile" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">Warum Swiss Reinigungsfirma?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Absolute Diskretion",
                      desc: "Vertraulichkeitsvereinbarungen und höchste Professionalität sind für uns selbstverständlich."
                    },
                    {
                      title: "Erfahrung seit 2008",
                      desc: "Über 15 Jahre Erfahrung in der Reinigung von Luxus-Luftfahrzeugen."
                    },
                    {
                      title: "Zertifizierte Produkte",
                      desc: "Nur Aviation-zugelassene Reinigungsmittel, die Materialien schonen und schützen."
                    },
                    {
                      title: "Flexible Verfügbarkeit",
                      desc: "24/7 Service an allen großen Schweizer Flughäfen: Zürich, Genf, Bern, St. Gallen-Altenrhein."
                    },
                    {
                      title: "Versicherungsschutz",
                      desc: "Vollständig versichert mit 10 Mio. CHF Haftpflichtdeckung."
                    },
                    {
                      title: "Referenzen",
                      desc: "Vertrauen von über 50 Privatjet-Besitzern und Charter-Unternehmen."
                    }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie schnell können Sie einen Privatjet reinigen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Eine Standard-Innenreinigung dauert ca. 2-3 Stunden, abhängig von Größe und Zustand des Jets. Express-Service in unter 90 Minuten ist nach Absprache möglich. Außenreinigung benötigt zusätzlich 1-2 Stunden.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Sind Ihre Mitarbeiter sicherheitsgeprüft?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, alle unsere Mitarbeiter verfügen über gültige Flughafen-Sicherheitsausweise und haben erweiterte Sicherheitsprüfungen durchlaufen. Vertraulichkeitsvereinbarungen sind Standard.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Flughäfen bedienen Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir sind an allen großen Schweizer Flughäfen aktiv: Zürich-Kloten, Genf, Bern-Belp, St. Gallen-Altenrhein, Lugano und Samedan. Auch kleinere Privatflugplätze nach Absprache.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Was kostet eine Privatjet Reinigung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Die Preise variieren je nach Jet-Größe und Leistungsumfang. Eine Standard-Innenreinigung für einen Light Jet beginnt bei CHF 800. Für ein individuelles Angebot kontaktieren Sie uns bitte direkt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Bereit für erstklassigen Service?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne persönlich.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8">
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
