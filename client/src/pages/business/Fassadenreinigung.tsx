import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Building2, Droplets, Shield, Sparkles, ArrowRight } from "lucide-react";

export default function Fassadenreinigung() {
  const serviceData = {
    name: "Professionelle Fassadenreinigung",
    description: "Schonende und effektive Fassadenreinigung für alle Materialien. Von Glas über Naturstein bis zu modernen Verbundmaterialien.",
    url: "/business/fassadenreinigung",
    category: "Facade Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Fassadenreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Fassadenreinigung in der Schweiz. Schonend und effektiv für alle Materialien - Glas, Naturstein, Verbundmaterialien."
        keywords="Fassadenreinigung, Gebäudereinigung Außen, Fassade reinigen Schweiz, Hochhaus Fassadenreinigung"
        url="/business/fassadenreinigung"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Business Lösung
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Professionelle Fassadenreinigung
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Schonende und effektive Fassadenreinigung für alle Materialien in Zürich, Zug und Luzern. Von Glas über Naturstein bis zu modernen Verbundmaterialien.
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
                src="/b2b-fassadenreinigung.jpg" 
                alt="Moderne Glasfassade" 
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
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Alle Materialien</div>
              <div className="text-slate-600">Glas, Stein, Metall, Putz</div>
            </Card>
            <Card className="p-6 text-center">
              <Droplets className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Schonend</div>
              <div className="text-slate-600">Materialgerechte Verfahren</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Sicher</div>
              <div className="text-slate-600">Zertifizierte Höhenarbeiter</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Langzeitschutz</div>
              <div className="text-slate-600">Versiegelung optional</div>
            </Card>
          </div>

          <Tabs defaultValue="materialien" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="materialien" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Materialien</TabsTrigger>
              <TabsTrigger value="verfahren" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Reinigungsverfahren</TabsTrigger>
              <TabsTrigger value="wartung" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Wartungsverträge</TabsTrigger>
            </TabsList>
            
            <TabsContent value="materialien" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Expertise für alle Fassadenmaterialien</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Glasfassaden",
                      desc: "Streifenfreie Reinigung von Glasfassaden mit Osmose-Wasser und Teleskopstangen oder Hebebühnen. Auch für schwer zugängliche Bereiche."
                    },
                    {
                      title: "Naturstein",
                      desc: "Schonende Reinigung von Granit, Marmor, Sandstein und anderen Natursteinen. pH-neutrale Reiniger zum Schutz der Oberfläche."
                    },
                    {
                      title: "Putzfassaden",
                      desc: "Entfernung von Verschmutzungen, Algen und Grünbelag von Putzfassaden. Niederdruckverfahren zum Schutz der Struktur."
                    },
                    {
                      title: "Metallfassaden",
                      desc: "Reinigung und Pflege von Aluminium-, Kupfer- und Edelstahlfassaden. Politur und Schutzbehandlung gegen Oxidation."
                    },
                    {
                      title: "Klinker & Ziegel",
                      desc: "Tiefenreinigung von Klinkerfassaden. Entfernung von Zementschleiern, Ausblühungen und Verschmutzungen."
                    },
                    {
                      title: "Verbundmaterialien",
                      desc: "Spezialisierte Reinigung moderner Verbundmaterialien wie Alucobond, HPL-Platten und Fassadenpaneele."
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
            
            <TabsContent value="verfahren" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Moderne Reinigungsverfahren</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Osmose-Wasserreinigung",
                      desc: "Kalkfreies, demineralisiertes Wasser für streifenfreie Glasfassaden. Umweltfreundlich und ohne Chemie. Ideal für regelmäßige Unterhaltsreinigung."
                    },
                    {
                      title: "Niederdruckverfahren",
                      desc: "Schonende Reinigung mit niedrigem Wasserdruck (max. 60 bar). Perfekt für empfindliche Oberflächen wie Putz, Sandstein oder historische Fassaden."
                    },
                    {
                      title: "Heißwasser-Hochdruck",
                      desc: "Effektive Entfernung hartnäckiger Verschmutzungen mit Heißwasser bis 90°C. Für robuste Materialien wie Beton, Klinker oder Pflastersteine."
                    },
                    {
                      title: "Trockeneisstrahlen",
                      desc: "Rückstandsfreie Reinigung mit CO₂-Pellets. Ideal für sensible Bereiche und wenn kein Wasser verwendet werden darf."
                    },
                    {
                      title: "Chemische Reinigung",
                      desc: "Spezialreiniger für hartnäckige Verschmutzungen wie Graffiti, Rost oder Ölflecken. Materialgerecht und umweltverträglich."
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
            
            <TabsContent value="wartung" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Wartungsverträge für dauerhaften Werterhalt</h3>
                <p className="text-lg text-slate-600 mb-8">
                  Regelmäßige Fassadenreinigung erhält den Wert Ihrer Immobilie und verhindert teure Sanierungen:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-xl font-bold mb-4">Basic</h4>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">1x jährlich</div>
                    <div className="text-sm text-slate-600 mb-4">ab CHF 2.500</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Grundreinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Sichtprüfung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Dokumentation</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-xl font-bold mb-4">Professional</h4>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">2x jährlich</div>
                    <div className="text-sm text-slate-600 mb-4">ab CHF 4.500</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Basic-Leistungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Versiegelung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Notfall-Service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Festpreis-Garantie</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-xl font-bold mb-4">Premium</h4>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">4x jährlich</div>
                    <div className="text-sm text-slate-600 mb-4">ab CHF 8.000</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Professional-Leistungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Vierteljährliche Reinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Fester Ansprechpartner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>24/7 Notfall-Hotline</span>
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
                Wie oft sollte eine Fassade gereinigt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Empfohlen sind 1-2 Reinigungen pro Jahr, abhängig von Standort und Verschmutzungsgrad. Stark exponierte Fassaden (Verkehr, Industrie) profitieren von häufigerer Reinigung.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Können Sie auch Hochhäuser reinigen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, unser Team ist für Höhenarbeiten zertifiziert. Wir verfügen über Hebebühnen bis 60m und arbeiten mit professionellen Industriekletterern zusammen.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Ist Fassadenreinigung umweltfreundlich?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir setzen primär auf Osmose-Wasser ohne Chemie. Wenn Reiniger nötig sind, verwenden wir biologisch abbaubare Produkte. Abwasser wird fachgerecht entsorgt.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Was kostet eine Fassadenreinigung?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Die Kosten hängen von Fassadengröße, Material, Verschmutzungsgrad und Zugänglichkeit ab. Durchschnittlich CHF 8-15 pro m². Gerne erstellen wir ein kostenloses Angebot.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Bereit für eine saubere Fassade?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für eine kostenlose Besichtigung und ein unverbindliches Angebot.
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
