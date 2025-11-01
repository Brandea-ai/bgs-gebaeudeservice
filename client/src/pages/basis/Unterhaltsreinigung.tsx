import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Calendar, Clock, Shield, Sparkles, ArrowRight } from "lucide-react";

export default function Unterhaltsreinigung() {
  const serviceData = {
    name: "Professionelle Unterhaltsreinigung",
    description: "Regelmäßige Unterhaltsreinigung für Büros und Gewerbe. Zuverlässig, flexibel und auf höchstem Qualitätsniveau.",
    url: "/basis/unterhaltsreinigung",
    category: "Maintenance Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Unterhaltsreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Unterhaltsreinigung in der Schweiz. Regelmäßig, zuverlässig und auf höchstem Qualitätsniveau."
        keywords="Unterhaltsreinigung, Regelmäßige Reinigung Schweiz, Büroreinigung, Gewerbereinigung"
        url="/basis/unterhaltsreinigung"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Professionelle Unterhaltsreinigung
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Regelmäßige Reinigung für Büros, Geschäfte und Gewerbeflächen in Zürich, Zug und Luzern. Zuverlässig, flexibel und auf Ihre Bedürfnisse zugeschnitten.
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
                alt="Unterhaltsreinigung" 
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
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Regelmäßig</div>
              <div className="text-slate-600">Täglich, wöchentlich oder nach Bedarf</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Flexible Zeiten</div>
              <div className="text-slate-600">Angepasst an Ihre Öffnungszeiten</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Zuverlässig</div>
              <div className="text-slate-600">Festes Reinigungsteam</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Qualität</div>
              <div className="text-slate-600">Geprüfte Standards</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="ablauf" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Ablauf & Rhythmus</TabsTrigger>
              <TabsTrigger value="pakete" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Preis-Pakete</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">Umfassende Unterhaltsreinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Standardleistungen</h4>
                    <ul className="space-y-2">
                      {[
                        "Böden saugen & wischen",
                        "Oberflächen abstauben",
                        "Papierkörbe leeren",
                        "Sanitäranlagen reinigen",
                        "Küchen & Pausenräume",
                        "Eingangsbereiche pflegen"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Zusatzleistungen</h4>
                    <ul className="space-y-2">
                      {[
                        "Fensterreinigung",
                        "Teppichpflege",
                        "Polsterreinigung",
                        "Grundreinigung",
                        "Desinfektionsservice",
                        "Glasflächen pflegen"
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">Flexibler Reinigungsrhythmus</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Bedarfsanalyse",
                      desc: "Wir analysieren Ihre Räumlichkeiten und erstellen einen maßgeschneiderten Reinigungsplan basierend auf Nutzungsfrequenz, Fläche und spezifischen Anforderungen."
                    },
                    {
                      title: "Rhythmus festlegen",
                      desc: "Tägliche, wöchentliche oder individuelle Reinigungsintervalle – wir passen uns Ihrem Bedarf an. Auch kurzfristige Anpassungen sind möglich."
                    },
                    {
                      title: "Festes Team",
                      desc: "Sie erhalten ein festes Reinigungsteam, das Ihre Räumlichkeiten kennt und kontinuierlich für gleichbleibende Qualität sorgt."
                    },
                    {
                      title: "Qualitätskontrolle",
                      desc: "Regelmäßige Kontrollen und digitale Dokumentation stellen sicher, dass alle Bereiche nach Plan gereinigt werden."
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">Transparente Preisgestaltung</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-xl font-bold mb-4">Basic</h4>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">ab CHF 30</div>
                    <div className="text-sm text-slate-600 mb-4">pro Stunde</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Basis-Unterhaltsreinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>1-2x pro Woche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für kleine Flächen</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-xl font-bold mb-4">Standard</h4>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">ab CHF 900</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Regelmäßige Reinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Inkl. Sanitär & Küche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Fester Ansprechpartner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Ideal für mittlere Flächen</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-xl font-bold mb-4">Premium</h4>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Maßgeschneidertes Konzept</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Tägliche Reinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Zusatzleistungen</span>
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

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie oft sollte eine Unterhaltsreinigung stattfinden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Das hängt von der Nutzungsintensität ab. Büros werden üblicherweise täglich oder 3-5x pro Woche gereinigt, Geschäfte je nach Kundenfrequenz. Wir beraten Sie gerne individuell.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Können wir den Reinigungsrhythmus anpassen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, jederzeit. Bei saisonalen Schwankungen oder Veränderungen in Ihrem Betrieb passen wir die Reinigungsfrequenz flexibel an.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Was ist der Unterschied zur Grundreinigung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Die Unterhaltsreinigung erhält den Zustand durch regelmäßige Pflege. Die Grundreinigung ist eine intensive Tiefenreinigung, die 1-2x jährlich empfohlen wird.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Bringen Sie eigene Reinigungsmittel mit?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir bringen alle Reinigungsmittel und Geräte mit. Auf Wunsch verwenden wir auch ökologische Produkte oder Ihre bevorzugten Reiniger.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Bereit für regelmäßige Sauberkeit?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot. Wir erstellen ein maßgeschneidertes Reinigungskonzept.
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
