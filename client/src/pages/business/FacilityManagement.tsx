import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, Briefcase, Clock, Shield, ArrowRight } from "lucide-react";

export default function FacilityManagement() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Business Lösung
              </div>
              <h1 className="text-6xl font-bold text-slate-900 mb-6">
                Ganzheitliches Facility Management
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Umfassende Gebäudedienstleistungen aus einer Hand in Zürich, Zug und Luzern. Von Reinigung über Hausmeister bis Winterdienst.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/b2b-facility.jpg" 
                alt="Facility Management" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="leistungen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="leistungen">Leistungsspektrum</TabsTrigger>
              <TabsTrigger value="vorteile">Vorteile</TabsTrigger>
              <TabsTrigger value="branchen">Branchen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="leistungen">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Alles aus einer Hand</h3>
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
                <h3 className="text-3xl font-bold mb-6">Ihre Vorteile</h3>
                <div className="space-y-6">
                  {[
                    { title: "Ein Ansprechpartner", desc: "Für alle Gebäudedienstleistungen haben Sie nur einen Ansprechpartner. Das spart Zeit und Koordinationsaufwand." },
                    { title: "Kosteneffizienz", desc: "Durch Bündelung der Leistungen profitieren Sie von attraktiven Paketpreisen und reduzierten Verwaltungskosten." },
                    { title: "Qualitätssicherung", desc: "Einheitliche Standards und regelmäßige Kontrollen garantieren gleichbleibend hohe Qualität." },
                    { title: "Flexibilität", desc: "Wir passen unsere Leistungen flexibel an Ihre sich ändernden Bedürfnisse an." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="branchen">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Branchenlösungen</h3>
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
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
