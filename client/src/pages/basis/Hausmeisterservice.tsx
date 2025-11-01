import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Wrench, Clock, Shield, Phone, ArrowRight } from "lucide-react";

export default function Hausmeisterservice() {
  const serviceData = {
    name: "Professioneller Hausmeisterservice",
    description: "Zuverlässiger Hausmeisterservice für Ihre Immobilie. Objektbetreuung, Kleinreparaturen und 24/7 Notfall-Service.",
    url: "/basis/hausmeisterservice",
    category: "Facility Caretaker Service"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Hausmeisterservice Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professioneller Hausmeisterservice in der Schweiz. Objektbetreuung, Kleinreparaturen und 24/7 Notfall-Service."
        keywords="Hausmeisterservice, Hausmeister Schweiz, Objektbetreuung, Facility Caretaker"
        url="/basis/hausmeisterservice"
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
                Professioneller Hausmeisterservice
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Umfassende Objektbetreuung für Wohn- und Geschäftsimmobilien in Zürich, Zug und Luzern. Zuverlässig, kompetent und immer erreichbar.
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
                src="/b2b-office-cleaning.jpg" 
                alt="Hausmeisterservice" 
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
              <Phone className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">24/7 Erreichbar</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Notfall-Hotline rund um die Uhr</div>
            </Card>
            <Card className="p-6 text-center">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Vielseitig</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Von Reparatur bis Grünpflege</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zuverlässig</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Fester Ansprechpartner</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Schnell</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Kurze Reaktionszeiten</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="ablauf" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Betreuungskonzept</TabsTrigger>
              <TabsTrigger value="pakete" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Service-Pakete</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassender Hausmeisterservice</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Regelmäßige Aufgaben</h4>
                    <ul className="space-y-2">
                      {[
                        "Objektbegehungen & Kontrollen",
                        "Kleinreparaturen & Instandhaltung",
                        "Grünflächen- & Außenanlagenpflege",
                        "Müllentsorgung koordinieren",
                        "Beleuchtung prüfen & warten",
                        "Hausordnung überwachen"
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
                        "Winterdienst & Schneeräumung",
                        "Schlüsselverwaltung",
                        "Handwerker-Koordination",
                        "Notfall-Bereitschaft 24/7",
                        "Mieterwechsel-Begleitung",
                        "Technische Wartungen"
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Professionelle Objektbetreuung</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Objektanalyse",
                      desc: "Wir erfassen alle relevanten Daten Ihrer Immobilie und erstellen einen individuellen Betreuungsplan mit regelmäßigen Kontrollgängen und Wartungsintervallen."
                    },
                    {
                      title: "Fester Hausmeister",
                      desc: "Sie erhalten einen festen Ansprechpartner, der Ihr Objekt kennt und bei allen Fragen und Problemen schnell und kompetent reagiert."
                    },
                    {
                      title: "Digitale Dokumentation",
                      desc: "Alle Tätigkeiten werden digital erfasst. Sie erhalten regelmäßige Berichte über durchgeführte Arbeiten, Mängel und anstehende Wartungen."
                    },
                    {
                      title: "Notfall-Service",
                      desc: "Bei Notfällen wie Wasserschäden, Heizungsausfall oder Sturmschäden sind wir 24/7 erreichbar und kümmern uns um die Schadensbegrenzung."
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Flexible Service-Pakete</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Basic</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">ab CHF 400</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Wöchentliche Kontrollen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Kleinreparaturen inkl.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für kleine Objekte</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Standard</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">ab CHF 800</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>2-3x wöchentliche Betreuung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Grünpflege inkl.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Notfall-Hotline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für Mehrfamilienhäuser</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Premium</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Vollumfängliche Betreuung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>24/7 Präsenz-Service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Zusatzleistungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für große Liegenschaften</span>
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
                Was gehört alles zum Hausmeisterservice?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Unser Service umfasst regelmäßige Objektkontrollen, Kleinreparaturen, Grünpflege, Müllentsorgung, Beleuchtungswartung und vieles mehr. Der genaue Umfang wird individuell festgelegt.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Wie schnell reagieren Sie bei Notfällen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Bei Notfällen wie Wasserschäden oder Heizungsausfall sind wir innerhalb von 1-2 Stunden vor Ort. Unsere 24/7-Hotline ist immer erreichbar.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Können Sie auch größere Reparaturen durchführen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Kleinreparaturen führen wir selbst durch. Bei größeren Arbeiten koordinieren wir qualifizierte Handwerker aus unserem Netzwerk und überwachen die Ausführung.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Ist der Winterdienst im Service enthalten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Der Winterdienst kann als Zusatzleistung gebucht werden. Wir kümmern uns um Schneeräumung, Streudienst und die Verkehrssicherungspflicht.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Bereit für professionelle Objektbetreuung?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Beratungsgespräch. Wir erstellen ein maßgeschneidertes Betreuungskonzept.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
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
