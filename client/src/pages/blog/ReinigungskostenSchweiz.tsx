import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Building, Home } from "lucide-react";

export default function ReinigungskostenSchweiz() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <article className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="text-sm text-primary font-semibold mb-4">PREISÜBERSICHT</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Reinigungskosten in der Schweiz: Ein Überblick
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Transparente Informationen zu Reinigungskosten und Preisgestaltung in Zürich, Zug und Luzern.
            </p>
          </div>
          <img src="/blog-kosten.jpg" alt="Reinigungskosten" className="w-full h-96 object-cover rounded-2xl mb-12"/>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Die Kosten für professionelle Reinigungsdienstleistungen variieren je nach Region, Leistungsumfang und Objektgröße. In diesem Ratgeber geben wir Ihnen einen transparenten Überblick über die Preisgestaltung in der Schweiz und zeigen, welche Faktoren die Kosten beeinflussen.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">Preisfaktoren im Überblick</h2>
            <Tabs defaultValue="zuerich" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="zuerich" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Zürich</TabsTrigger>
                <TabsTrigger value="zug" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Zug</TabsTrigger>
                <TabsTrigger value="luzern" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Luzern</TabsTrigger>
              </TabsList>
              <TabsContent value="zuerich" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-8 h-8 text-primary"/>
                    <h3 className="text-2xl font-bold whitespace-nowrap">Zürich</h3>
                  </div>
                  <p className="text-slate-700 mb-6">Als größte Stadt der Schweiz hat Zürich ein hohes Preisniveau. Die Kosten liegen typischerweise 10-15% über dem Schweizer Durchschnitt.</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Büroreinigung (pro m²/Monat)</span>
                      <span className="text-primary font-bold">CHF 8-12</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Unterhaltsreinigung (Stundensatz)</span>
                      <span className="text-primary font-bold">CHF 45-65</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Grundreinigung (Stundensatz)</span>
                      <span className="text-primary font-bold">CHF 55-75</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="zug" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-primary"/>
                    <h3 className="text-2xl font-bold whitespace-nowrap">Zug</h3>
                  </div>
                  <p className="text-slate-700 mb-6">Zug als Wirtschaftsstandort hat ebenfalls höhere Preise, liegt aber leicht unter Zürich.</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Büroreinigung (pro m²/Monat)</span>
                      <span className="text-primary font-bold">CHF 7-11</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Unterhaltsreinigung (Stundensatz)</span>
                      <span className="text-primary font-bold">CHF 42-62</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Grundreinigung (Stundensatz)</span>
                      <span className="text-primary font-bold">CHF 52-72</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="luzern" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-8 h-8 text-primary"/>
                    <h3 className="text-2xl font-bold whitespace-nowrap">Luzern</h3>
                  </div>
                  <p className="text-slate-700 mb-6">Luzern bietet ein ausgewogenes Preis-Leistungs-Verhältnis mit moderaten Kosten.</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Büroreinigung (pro m²/Monat)</span>
                      <span className="text-primary font-bold">CHF 6-10</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Unterhaltsreinigung (Stundensatz)</span>
                      <span className="text-primary font-bold">CHF 40-58</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                      <span className="font-semibold">Grundreinigung (Stundensatz)</span>
                      <span className="text-primary font-bold">CHF 50-68</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-red-50 mb-12">
              <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">Kostenfaktoren</h3>
              <p className="text-slate-700 mb-4">Die Reinigungskosten werden von mehreren Faktoren beeinflusst:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Objektgröße:</strong> Größere Flächen profitieren von Mengenrabatten</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Reinigungsfrequenz:</strong> Häufigere Reinigung reduziert den Aufwand pro Einsatz</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Verschmutzungsgrad:</strong> Stark frequentierte Bereiche benötigen mehr Aufmerksamkeit</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Spezialanforderungen:</strong> Besondere Oberflächen oder Hygieneanforderungen erhöhen die Kosten</span></li>
                <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span><strong>Einsatzzeiten:</strong> Nacht- und Wochenendarbeit ist teurer</span></li>
              </ul>
            </Card>

            <div className="mt-16 pt-12 border-t text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 whitespace-nowrap">Individuelles Angebot gewünscht?</h3>
              <p className="text-xl text-slate-600 mb-8">Kontaktieren Sie uns für eine kostenlose Bedarfsanalyse und ein maßgeschneidertes Angebot.</p>
              <Link href="/kontakt"><Button size="lg" className="text-lg px-8">Jetzt Angebot anfordern<ArrowRight className="ml-2 w-5 h-5"/></Button></Link>
            </div>
          </div>
        </div>
      </article>
      <SwissFooter />
    </div>
  );
}
