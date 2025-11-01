import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Package, Clock, Shield, Leaf, ArrowRight } from "lucide-react";

export default function Beschaffung() {
  const serviceData = {
    name: "Professionelles Beschaffungsmanagement",
    description: "Beschaffungsmanagement für Reinigungsmittel und Verbrauchsmaterialien. Automatisch, bedarfsgerecht und nachhaltig.",
    url: "/basis/beschaffung",
    category: "Procurement Management"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Beschaffungsmanagement Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelles Beschaffungsmanagement in der Schweiz. Reinigungsmittel und Verbrauchsmaterialien automatisch und bedarfsgerecht."
        keywords="Beschaffungsmanagement, Reinigungsmittel Beschaffung, Verbrauchsmaterial Schweiz, Procurement"
        url="/basis/beschaffung"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Basis Service
              </div>
              <h1 className="text-6xl font-bold text-slate-900 mb-6">
                Professionelles Beschaffungsmanagement
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Automatische Beschaffung von Reinigungsmitteln und Verbrauchsmaterialien in Zürich, Zug und Luzern. Bedarfsgerecht, nachhaltig und kosteneffizient.
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
                alt="Beschaffungsmanagement" 
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
              <Package className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Automatisch</div>
              <div className="text-slate-600">Bedarfsgerechte Nachbestellung</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zeitsparend</div>
              <div className="text-slate-600">Keine manuelle Bestellung nötig</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Kosteneffizient</div>
              <div className="text-slate-600">Optimierte Mengen & Preise</div>
            </Card>
            <Card className="p-6 text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Nachhaltig</div>
              <div className="text-slate-600">Ökologische Produkte</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="ablauf">Prozess & System</TabsTrigger>
              <TabsTrigger value="pakete">Service-Pakete</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Umfassendes Beschaffungsmanagement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Reinigungsmittel</h4>
                    <ul className="space-y-2">
                      {[
                        "Allzweckreiniger & Desinfektionsmittel",
                        "Sanitärreiniger & Glasreiniger",
                        "Bodenreiniger & Pflegemittel",
                        "Spezialreiniger nach Bedarf",
                        "Ökologische Alternativen",
                        "Professionelle Konzentrate"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Verbrauchsmaterialien</h4>
                    <ul className="space-y-2">
                      {[
                        "Toilettenpapier & Handtücher",
                        "Seife & Desinfektionsmittel",
                        "Müllsäcke & Reinigungstücher",
                        "Schwämme & Bürsten",
                        "Lufterfrischer & Hygieneartikel",
                        "Spender & Dosiersysteme"
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
            
            <TabsContent value="ablauf" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Intelligenter Beschaffungsprozess</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Bedarfsanalyse",
                      desc: "Wir erfassen Ihren aktuellen Verbrauch und erstellen ein Bedarfsprofil. Dabei berücksichtigen wir Objektgröße, Nutzungsfrequenz und spezielle Anforderungen."
                    },
                    {
                      title: "Automatische Überwachung",
                      desc: "Unsere Mitarbeiter prüfen bei jedem Reinigungseinsatz die Bestände und melden automatisch, wenn Nachschub benötigt wird – bevor etwas ausgeht."
                    },
                    {
                      title: "Optimierte Bestellung",
                      desc: "Wir bestellen in optimalen Mengen direkt beim Hersteller. Sie profitieren von Mengenrabatten ohne selbst große Lagerbestände halten zu müssen."
                    },
                    {
                      title: "Lieferung & Lagerung",
                      desc: "Die Produkte werden direkt zu Ihnen geliefert und von uns fachgerecht gelagert. Sie haben immer genau das, was Sie brauchen – nicht mehr und nicht weniger."
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
            
            <TabsContent value="pakete" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Flexible Service-Pakete</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-xl font-bold mb-4">Basic</h4>
                    <div className="text-3xl font-bold text-primary mb-2">ab CHF 150</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Basis-Reinigungsmittel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Verbrauchsmaterialien</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für kleine Objekte</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-xl font-bold mb-4">Standard</h4>
                    <div className="text-3xl font-bold text-primary mb-2">ab CHF 300</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Vollsortiment Reinigungsmittel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Verbrauchsmaterialien</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Automatische Bestellung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für Gewerbe</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-xl font-bold mb-4">Premium</h4>
                    <div className="text-3xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Maßgeschneidertes Sortiment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ökologische Produkte</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Dosiersysteme inkl.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für große Objekte</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie funktioniert die automatische Bestellung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Unsere Reinigungskräfte prüfen bei jedem Einsatz die Bestände. Wenn der Mindestbestand unterschritten wird, erfolgt automatisch eine Nachbestellung – Sie müssen sich um nichts kümmern.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Kann ich eigene Produkte wählen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, Sie können Ihre bevorzugten Marken und Produkte wählen. Wir beraten Sie aber auch gerne zu professionellen Alternativen, die oft effizienter und kostengünstiger sind.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Sind ökologische Produkte verfügbar?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Selbstverständlich. Wir bieten ein vollständiges Sortiment an umweltfreundlichen Reinigungsmitteln mit Öko-Zertifizierungen, die genauso effektiv sind wie konventionelle Produkte.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Wo werden die Produkte gelagert?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Die Produkte werden in Ihren Räumlichkeiten in einem dafür vorgesehenen Lagerbereich gelagert. Wir helfen Ihnen bei der optimalen Organisation des Lagerraums.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Bereit für automatisches Beschaffungsmanagement?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Beratungsgespräch. Wir erstellen ein maßgeschneidertes Beschaffungskonzept.
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
