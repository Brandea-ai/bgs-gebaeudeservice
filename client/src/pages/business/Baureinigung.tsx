import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { CheckCircle, HardHat, Trash2, ArrowRight } from "lucide-react";

export default function Baureinigung() {
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
                Professionelle Baureinigung
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Zuverlässige Baureinigung für Neubauten, Umbauten und Renovierungen in Zürich, Zug und Luzern. Von der Grobreinigung bis zur Endreinigung.
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
                alt="Baustelle" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="phasen" className="mb-20">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="phasen">Reinigungsphasen</TabsTrigger>
              <TabsTrigger value="leistungen">Leistungen</TabsTrigger>
              <TabsTrigger value="entsorgung">Entsorgung</TabsTrigger>
            </TabsList>
            
            <TabsContent value="phasen">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Baureinigung in 3 Phasen</h3>
                <div className="space-y-6">
                  {[
                    { title: "1. Grobreinigung", desc: "Entfernung grober Verschmutzungen, Bauschutt, Verpackungsmaterial. Erste Reinigung nach Rohbau." },
                    { title: "2. Zwischenreinigung", desc: "Reinigung nach Gewerken (Maler, Elektriker, etc.). Vorbereitung für nächste Bauphase." },
                    { title: "3. Endreinigung", desc: "Finale Reinigung vor Übergabe. Fenster, Böden, Sanitär – alles bezugsfertig." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-bold mb-2 text-primary">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="leistungen">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Unsere Leistungen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    {["Baustaub entfernen", "Fenster reinigen", "Böden grundreinigen", "Sanitäranlagen", "Türen & Zargen", "Heizkörper"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {["Zementschleier entfernen", "Klebstoffreste", "Farbspritzer", "Schutzfolien entfernen", "Bauschutt-Entsorgung", "Abnahmebereit übergeben"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="entsorgung">
              <Card className="p-8">
                <h3 className="text-3xl font-bold mb-6">Fachgerechte Entsorgung</h3>
                <p className="text-slate-600 mb-6">
                  Wir entsorgen Bauabfälle fachgerecht und umweltbewusst:
                </p>
                <ul className="space-y-3">
                  {["Bauschutt & Restmaterialien", "Verpackungsmaterial", "Holzabfälle", "Metallschrott", "Sondermüll (nach Absprache)", "Recycling wo möglich"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Trash2 className="w-5 h-5 text-primary mt-0.5"/>
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
