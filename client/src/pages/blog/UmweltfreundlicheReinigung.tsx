import SwissNavigation from "@/components/SwissNavigation";
import SEO from "@/components/SEO";
import SwissFooter from "@/components/SwissFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, Leaf, Droplets, Recycle } from "lucide-react";

export default function UmweltfreundlicheReinigung() {
  return (
    <>
      <SEO 
        title="Umweltfreundliche Reinigung: Nachhaltig & Effektiv | Swiss Reinigungsfirma"
        description="Nachhaltige Reinigungsmethoden und umweltfreundliche Reinigungsmittel. Wie Sie Sauberkeit und Umweltschutz perfekt kombinieren."
        keywords="umweltfreundliche Reinigung, nachhaltige Reinigung, ökologische Reinigungsmittel, Green Cleaning"
      />
      <UmweltfreundlicheReinigungContent />
    </>
  );
}

function UmweltfreundlicheReinigungContent() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <article className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="text-sm text-primary font-semibold mb-4">NACHHALTIGKEIT</div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Umweltfreundliche Reinigung: Tipps und Tricks
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Nachhaltige Reinigungsmethoden und ökologische Produkte für eine grünere Zukunft.
            </p>
          </div>
          <img src="/blog-umwelt.jpg" alt="Umweltfreundliche Reinigung" className="w-full h-96 object-cover rounded-2xl mb-12"/>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Umweltfreundliche Reinigung ist nicht nur gut für unseren Planeten, sondern auch für die Gesundheit von Menschen und die Langlebigkeit von Oberflächen. In diesem Ratgeber zeigen wir Ihnen, wie Sie nachhaltig reinigen können, ohne Kompromisse bei der Sauberkeit einzugehen.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4"/>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">Ökologisch</h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Biologisch abbaubare Reinigungsmittel schonen die Umwelt</p>
              </Card>
              <Card className="p-6 text-center">
                <Droplets className="w-12 h-12 text-primary mx-auto mb-4"/>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">Wassersparend</h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Moderne Methoden reduzieren den Wasserverbrauch erheblich</p>
              </Card>
              <Card className="p-6 text-center">
                <Recycle className="w-12 h-12 text-primary mx-auto mb-4"/>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">Ressourcenschonend</h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">Wiederverwendbare Materialien und effiziente Prozesse</p>
              </Card>
            </div>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mt-12 mb-6">Umweltfreundliche Reinigungsmethoden</h2>
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">Mikrofasertechnologie</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">Mikrofasertücher sind wahre Wunderwaffen der nachhaltigen Reinigung. Sie reinigen effektiv ohne oder mit minimal Reinigungsmitteln, sind wiederverwendbar und langlebig.</p>
                  <p>Die feinen Fasern nehmen Schmutz und Bakterien mechanisch auf und benötigen nur Wasser für hervorragende Ergebnisse. Ein Mikrofasertuch kann hunderte Male gewaschen und wiederverwendet werden.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">Dampfreinigung</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">Dampfreiniger arbeiten ausschließlich mit heißem Wasserdampf und benötigen keine chemischen Reinigungsmittel. Der heiße Dampf löst Schmutz, tötet Bakterien ab und desinfiziert Oberflächen auf natürliche Weise.</p>
                  <p>Besonders geeignet für Sanitärbereiche, Küchen und alle Bereiche, in denen Hygiene wichtig ist.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">Ökologische Reinigungsmittel</AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">Moderne ökologische Reinigungsmittel sind ebenso effektiv wie konventionelle Produkte, aber biologisch abbaubar und frei von schädlichen Chemikalien. Sie basieren auf natürlichen Inhaltsstoffen wie Zitronensäure, Essig oder pflanzlichen Tensiden.</p>
                  <p>Achten Sie auf Umweltsiegel wie das EU Ecolabel oder den Blauen Engel.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-red-50 mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Vorteile umweltfreundlicher Reinigung</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Schutz der Umwelt und Gewässer",
                  "Bessere Raumluftqualität",
                  "Geringeres Allergierisiko",
                  "Schonend für Oberflächen",
                  "Reduzierte Betriebskosten",
                  "Positive Außenwirkung",
                  "Mitarbeitergesundheit",
                  "Nachhaltige Unternehmensführung"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5"/>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-16 pt-12 border-t text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">Nachhaltige Reinigung gewünscht?</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">Wir beraten Sie gerne zu umweltfreundlichen Reinigungslösungen.</p>
              <Link href="/kontakt"><Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">Jetzt beraten lassen<ArrowRight className="ml-2 w-5 h-5"/></Button></Link>
            </div>
          </div>
        </div>
      </article>
      <SwissFooter />
    </div>
  );
}
