import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Check, ArrowRight, Shield, Award, Users } from "lucide-react";

export default function ProfessionelleGebaeudereinigung() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <article className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="text-sm text-primary font-semibold mb-4">EXPERTENWISSEN</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Professionelle Gebäudereinigung: Was Sie wissen müssen
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Alles Wichtige über professionelle Gebäudereinigung, Standards und Qualitätsmerkmale in der Schweiz.
            </p>
          </div>
          <img src="/blog-gebaeudereinigung.jpg" alt="Gebäudereinigung" className="w-full h-96 object-cover rounded-2xl mb-12"/>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Professionelle Gebäudereinigung ist weit mehr als nur Staubwischen und Böden wischen. Es handelt sich um ein komplexes Fachgebiet, das spezialisiertes Wissen, moderne Technologie und geschultes Personal erfordert. In diesem umfassenden Ratgeber erfahren Sie alles über Standards, Methoden und Qualitätsmerkmale professioneller Gebäudereinigung in der Schweiz.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">Was macht Gebäudereinigung professionell?</h2>
            <Tabs defaultValue="standards" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="standards" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Standards</TabsTrigger>
                <TabsTrigger value="technologie" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Technologie</TabsTrigger>
                <TabsTrigger value="personal" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Personal</TabsTrigger>
              </TabsList>
              <TabsContent value="standards" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">Qualitätsstandards</h3>
                  <p className="text-slate-700 mb-4">
                    Professionelle Reinigungsfirmen arbeiten nach definierten Qualitätsstandards wie ISO 9001. Diese Standards garantieren gleichbleibende Qualität, dokumentierte Prozesse und kontinuierliche Verbesserung.
                  </p>
                  <div className="space-y-3">
                    {["ISO 9001 Zertifizierung", "Definierte Reinigungspläne", "Qualitätskontrollen", "Dokumentation", "Kundenfeedback-Systeme"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary"/>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="technologie" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">Moderne Technologie</h3>
                  <p className="text-slate-700 mb-4">
                    Professionelle Gebäudereinigung nutzt modernste Technologie für effiziente und gründliche Ergebnisse. Von Hochleistungssaugern bis zu automatisierten Reinigungsmaschinen.
                  </p>
                  <div className="space-y-3">
                    {["Industriesauger mit HEPA-Filter", "Scheuersaugmaschinen", "Hochdruckreiniger", "Mikrofasertechnologie", "Umweltfreundliche Reinigungsmittel"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary"/>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="personal" className="mt-6">
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">Geschultes Personal</h3>
                  <p className="text-slate-700 mb-4">
                    Das Herzstück jeder professionellen Reinigungsfirma ist gut geschultes, motiviertes Personal. Regelmäßige Schulungen und Weiterbildungen sind essentiell.
                  </p>
                  <div className="space-y-3">
                    {["Fachausbildung Gebäudereinigung", "Hygieneschulungen", "Arbeitssicherheit", "Kundenorientierung", "Spezialschulungen"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary"/>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">Reinigungsarten im Detail</h2>
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">Unterhaltsreinigung</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">Die Unterhaltsreinigung ist die regelmäßige Grundreinigung von Gebäuden. Sie umfasst tägliche oder wöchentliche Arbeiten wie Staubsaugen, Wischen, Müllentsorgung und Sanitärreinigung. Ziel ist die Aufrechterhaltung eines sauberen und hygienischen Zustands.</p>
                  <p>Typische Leistungen: Bodenreinigung, Oberflächenreinigung, Sanitärreinigung, Müllen tfernung, Staubwischen.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">Grundreinigung</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">Die Grundreinigung ist eine intensive, gründliche Reinigung, die in größeren Abständen durchgeführt wird. Sie entfernt hartnäckige Verschmutzungen und stellt den Originalzustand wieder her.</p>
                  <p>Typische Leistungen: Maschinelle Bodenreinigung, Teppichtiefenreinigung, Fensterreinigung, Fassadenreinigung.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">Spezialreinigung</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">Spezialreinigungen erfordern besonderes Know-how und Ausrüstung. Dazu gehören Industriereinigung, Reinraumreinigung, Krankenhaus reinigung oder Denkmalschutzreinigung.</p>
                  <p>Jede Spezialreinigung hat eigene Anforderungen und Standards, die strikt eingehalten werden müssen.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-red-50 mb-12">
              <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">Qualitätsmerkmale auf einen Blick</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {["Zertifizierte Prozesse", "Geschultes Personal", "Moderne Ausrüstung", "Umweltfreundliche Produkte", "Transparente Kommunikation", "Flexible Einsatzzeiten", "Versicherungsschutz", "Qualitätskontrollen"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5"/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-16 pt-12 border-t text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 whitespace-nowrap">Professionelle Reinigung gewünscht?</h3>
              <p className="text-xl text-slate-600 mb-8">Kontaktieren Sie uns für eine unverbindliche Beratung.</p>
              <Link href="/kontakt"><Button size="lg" className="text-lg px-8">Jetzt anfragen<ArrowRight className="ml-2 w-5 h-5"/></Button></Link>
            </div>
          </div>
        </div>
      </article>
      <SwissFooter />
    </div>
  );
}
