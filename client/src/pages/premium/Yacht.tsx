import SwissNavigation from "@/components/SwissNavigation";
import { scrollToContact } from "../utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Anchor, Shield, Sparkles, ArrowRight } from "lucide-react";

export default function Yacht() {
  const serviceData = {
    name: "Yacht Reinigung",
    description: "Spezialisierte Reinigung für Luxus-Yachten mit Marine-Expertise. Von der Hochglanzpolitur bis zur Teakholz-Pflege.",
    url: "/premium/yacht",
    category: "Marine Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Yacht Reinigung - Professioneller Marine Service"
        description="Spezialisierte Yacht Reinigung in der Schweiz. Marine-Expertise, Hochglanzpolitur und Teakholz-Pflege für Luxus-Yachten."
        keywords="Yacht Reinigung, Boot Reinigung Schweiz, Marine Cleaning, Luxus Yacht Service"
        url="/premium/yacht"
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
                Yacht Reinigung
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Spezialisierte Reinigung für Luxus-Yachten mit Marine-Expertise. Von der Hochglanzpolitur bis zur Teakholz-Pflege – wir sorgen für makellose Sauberkeit auf höchstem Niveau.
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
                src="/premium-yacht.jpg" 
                alt="Luxuriöse Yacht" 
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
              <Anchor className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Marine-Expertise</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Spezialisiert auf Yachten</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Materialschutz</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Schonende Behandlung</div>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Hochglanzpolitur</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Perfekter Glanz</div>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Komplettservice</div>
              <div className="text-slate-600 text-xs sm:text-sm md:text-base">Innen & Außen</div>
            </Card>
          </div>

          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Unsere Leistungen</TabsTrigger>
              <TabsTrigger value="materialien" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Spezial-Materialien</TabsTrigger>
              <TabsTrigger value="wartung" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Wartungsservice</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Umfassende Yacht Reinigung</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Außenreinigung</h4>
                    <ul className="space-y-2">
                      {[
                        "Rumpfreinigung & Politur",
                        "Deck-Reinigung (Teakholz, GFK, etc.)",
                        "Fenster & Bullaugen streifenfrei",
                        "Edelstahl-Politur",
                        "Salzwasser-Rückstände entfernen",
                        "Algen- & Bewuchs-Entfernung"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                          <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-primary">Innenreinigung</h4>
                    <ul className="space-y-2">
                      {[
                        "Kabinen-Reinigung",
                        "Salon & Cockpit",
                        "Galley (Küche) Tiefenreinigung",
                        "Sanitäranlagen-Desinfektion",
                        "Polster & Textilien",
                        "Holzoberflächen-Pflege"
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
            
            <TabsContent value="materialien" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Spezialisierte Material-Behandlung</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Teakholz-Pflege",
                      desc: "Professionelle Reinigung und Ölung von Teakholz-Decks. Wir verwenden spezielle Teakreiniger und hochwertige Öle für langanhaltenden Schutz und natürliche Optik."
                    },
                    {
                      title: "GFK & Gelcoat",
                      desc: "Schonende Reinigung von Glasfaser-verstärktem Kunststoff. Politur und Versiegelung für dauerhaften Glanz und UV-Schutz."
                    },
                    {
                      title: "Edelstahl-Behandlung",
                      desc: "Spezial-Politur für Edelstahl-Beschläge, Geländer und Armaturen. Entfernung von Flugrost und Salzablagerungen."
                    },
                    {
                      title: "Leder & Textilien",
                      desc: "Professionelle Reinigung und Pflege von Lederpolstern, Sitzgarnituren und Textilien mit Marine-geeigneten Produkten."
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
            
            <TabsContent value="wartung" className="space-y-6">
              <Card className="p-8">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-6">Regelmäßiger Wartungsservice</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Halten Sie Ihre Yacht in perfektem Zustand mit unseren maßgeschneiderten Wartungspaketen:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Basic</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">ab CHF 500</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Monatliche Außenreinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Deck-Reinigung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Fenster & Edelstahl</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-primary/5 border-primary">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">Premium</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">ab CHF 1.200</div>
                    <div className="text-sm text-slate-600 mb-4">pro Monat</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Basic-Leistungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Innenreinigung 2x/Monat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Teakholz-Pflege</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Politur & Versiegelung</span>
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-slate-50">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-4">VIP</h4>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2">Individuell</div>
                    <div className="text-sm text-slate-600 mb-4">auf Anfrage</div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Alle Premium-Leistungen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Wöchentlicher Service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>24/7 Notfall-Service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5"/>
                        <span>Persönlicher Ansprechpartner</span>
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
                Welche Yacht-Größen können Sie reinigen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Wir reinigen Yachten aller Größen – von 8-Meter-Segelbooten bis zu 50-Meter-Superyachten. Unser Team passt sich flexibel an Ihre Anforderungen an.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Wo bieten Sie Yacht Reinigung an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Primär am Vierwaldstättersee, Zürichsee und Zugersee. Auf Anfrage auch an anderen Schweizer Seen und Mittelmeerhäfen während der Saison.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Verwenden Sie umweltfreundliche Produkte?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir setzen ausschließlich biologisch abbaubare, gewässerschonende Reinigungsmittel ein, die speziell für den maritimen Einsatz zugelassen sind.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie auch Winterservice an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Ja, wir übernehmen die Einwinterung inklusive Reinigung, Abdeckung und regelmäßiger Kontrolle während der Wintermonate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Ihre Yacht verdient das Beste
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Kontaktieren Sie uns für ein individuelles Angebot. Wir beraten Sie gerne persönlich.
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
