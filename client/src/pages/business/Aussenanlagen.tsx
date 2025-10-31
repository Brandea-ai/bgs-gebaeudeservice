import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, Trees, Leaf, ArrowRight } from "lucide-react";

export default function Aussenanlagen() {
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
                Außenanlagen & Grünflächenpflege
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Professionelle Pflege Ihrer Außenanlagen und Grünflächen in Zürich, Zug und Luzern. Für einen gepflegten ersten Eindruck.
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
                src="/b2b-gruenflaechen.jpg" 
                alt="Grünflächen" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="reinigung" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="reinigung">Außenreinigung</TabsTrigger>
              <TabsTrigger value="gruenflaechen">Grünflächenpflege</TabsTrigger>
              <TabsTrigger value="winter">Winterdienst</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reinigung">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Außenbereichsreinigung</h3>
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
                <h3 className="text-3xl font-bold mb-6">Grünflächenpflege</h3>
                <div className="space-y-4">
                  {[
                    { title: "Rasenpflege", desc: "Mähen, Vertikutieren, Düngen – für einen gepflegten Rasen das ganze Jahr über." },
                    { title: "Heckenschnitt", desc: "Formschnitt und Pflegeschnitt für Hecken und Sträucher nach Jahreszeit." },
                    { title: "Beetpflege", desc: "Unkraut jäten, Mulchen, Bewässerung – damit Ihre Beete immer gepflegt aussehen." },
                    { title: "Baumpflege", desc: "Baumschnitt, Kronenauslichtung und Totholzentfernung durch Fachpersonal." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="winter">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Winterdienst</h3>
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

      <SwissFooter />
    </div>
  );
}
