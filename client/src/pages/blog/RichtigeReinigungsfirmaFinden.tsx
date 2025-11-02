import SwissNavigation from "@/components/SwissNavigation";
import SEO from "@/components/SEO";
import { scrollToContact } from "../utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, Star } from "lucide-react";

export default function RichtigeReinigungsfirmaFinden() {
  return (
    <>
      <SEO 
        title="Die richtige Reinigungsfirma finden: 10 Tipps | Swiss Reinigungsfirma"
        description="10 wichtige Kriterien für die Auswahl der richtigen Reinigungsfirma. Von Zertifizierungen bis Referenzen - so finden Sie den perfekten Partner."
        keywords="Reinigungsfirma finden, Reinigungsfirma auswählen, Kriterien Reinigungsfirma, professionelle Reinigung"
      />
      <RichtigeReinigungsfirmaFindenContent />
    </>
  );
}

function RichtigeReinigungsfirmaFindenContent() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <article className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="text-sm text-primary font-semibold mb-4">RATGEBER</div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Wie finde ich die richtige Reinigungsfirma?
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Ein umfassender Leitfaden zur Auswahl der perfekten Reinigungsfirma für Ihr Unternehmen in der Schweiz.
            </p>
            <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground text-xs sm:text-sm md:text-base">
              <span>15. Januar 2025</span>
              <span>•</span>
              <span>8 Minuten Lesezeit</span>
            </div>
          </div>

          <img 
            src="/blog-reinigungsfirma-finden.jpg" 
            alt="Reinigungsfirma finden"
            className="w-full h-96 object-cover rounded-2xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Die Wahl der richtigen Reinigungsfirma ist eine wichtige Entscheidung für jedes Unternehmen. Eine professionelle Gebäudereinigung trägt nicht nur zur Hygiene und Sauberkeit bei, sondern beeinflusst auch das Image Ihres Unternehmens und das Wohlbefinden Ihrer Mitarbeiter. In diesem umfassenden Ratgeber erfahren Sie, worauf Sie bei der Auswahl einer Reinigungsfirma in Zürich, Zug oder Luzern achten sollten.
            </p>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mt-12 mb-6">Warum ist die richtige Wahl so wichtig?</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Eine professionelle Reinigungsfirma ist mehr als nur ein Dienstleister – sie ist ein Partner für die Werterhaltung Ihrer Immobilie. Saubere und gepflegte Räumlichkeiten schaffen eine angenehme Arbeitsatmosphäre, reduzieren Krankheitstage und hinterlassen bei Kunden einen positiven ersten Eindruck. Gleichzeitig schützt regelmäßige professionelle Reinigung Ihre Investition in Gebäude und Ausstattung.
            </p>

            <Card className="p-8 bg-red-50 mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Die wichtigsten Auswahlkriterien auf einen Blick</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Zertifizierungen und Qualifikationen",
                  "Erfahrung in Ihrer Branche",
                  "Versicherungsschutz",
                  "Referenzen und Bewertungen",
                  "Transparente Preisgestaltung",
                  "Flexibilität und Verfügbarkeit",
                  "Umweltfreundliche Reinigungsmethoden",
                  "Professionelles Personal"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mt-12 mb-6">Detaillierte Auswahlkriterien</h2>
            
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                  1. Zertifizierungen und Qualifikationen
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">
                    Achten Sie darauf, dass die Reinigungsfirma über relevante Zertifizierungen verfügt. In der Schweiz sind ISO-Standards besonders wichtig. Eine ISO 9001-Zertifizierung garantiert ein funktionierendes Qualitätsmanagementsystem, während ISO 14001 für umweltbewusstes Handeln steht.
                  </p>
                  <p className="mb-4">
                    Weitere wichtige Qualifikationen umfassen Schulungen im Umgang mit speziellen Reinigungsmitteln, Hygienezertifikate und branchenspezifische Ausbildungen. Fragen Sie nach Nachweisen und lassen Sie sich diese zeigen.
                  </p>
                  <div className="bg-white p-6 rounded-lg mt-6">
                    <h4 className="font-bold mb-3">Wichtige Zertifizierungen:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary mt-1" />
                        <span>ISO 9001 (Qualitätsmanagement)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary mt-1" />
                        <span>ISO 14001 (Umweltmanagement)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary mt-1" />
                        <span>ISO 45001 (Arbeitsschutz)</span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                  2. Erfahrung und Spezialisierung
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">
                    Jede Branche hat spezifische Anforderungen an die Reinigung. Ein Krankenhaus benötigt andere Reinigungsstandards als ein Bürogebäude oder eine Produktionshalle. Wählen Sie eine Reinigungsfirma, die Erfahrung in Ihrer Branche hat und die spezifischen Herausforderungen kennt.
                  </p>
                  <p className="mb-4">
                    Fragen Sie nach Referenzprojekten in ähnlichen Bereichen und lassen Sie sich konkrete Beispiele nennen. Eine erfahrene Reinigungsfirma kann Ihnen auch proaktiv Verbesserungsvorschläge für Ihre Reinigungsprozesse machen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                  3. Versicherungsschutz und Haftung
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">
                    Ein umfassender Versicherungsschutz ist unverzichtbar. Die Reinigungsfirma sollte über eine Betriebshaftpflichtversicherung verfügen, die Schäden an Ihrem Eigentum oder Verletzungen von Personen abdeckt. Lassen Sie sich eine Kopie der Versicherungspolice zeigen und prüfen Sie die Deckungssummen.
                  </p>
                  <p>
                    Klären Sie auch, wie mit Schäden umgegangen wird und welche Prozesse für die Schadensabwicklung existieren. Eine professionelle Reinigungsfirma hat klare Richtlinien und reagiert schnell auf Zwischenfälle.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                  4. Transparente Preisgestaltung
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">
                    Transparenz bei den Kosten ist ein Zeichen von Seriosität. Fordern Sie detaillierte Angebote an, die alle Leistungen und Kosten klar aufschlüsseln. Vorsicht vor Angeboten, die deutlich unter dem Marktpreis liegen – hier wird oft an Qualität oder Personal gespart.
                  </p>
                  <p className="mb-4">
                    Achten Sie darauf, dass alle Nebenkosten wie Anfahrt, Reinigungsmittel und Spezialreinigungen im Angebot enthalten sind. Fragen Sie auch nach Vertragslaufzeiten und Kündigungsfristen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                  5. Referenzen und Bewertungen
                </AccordionTrigger>
                <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                  <p className="mb-4">
                    Referenzen von bestehenden Kunden sind Gold wert. Fragen Sie nach Kontaktdaten von Referenzkunden und nehmen Sie sich die Zeit, diese zu kontaktieren. Fragen Sie nach der Zuverlässigkeit, Qualität und dem Kundenservice der Reinigungsfirma.
                  </p>
                  <p>
                    Prüfen Sie auch Online-Bewertungen auf Google, Trustpilot oder branchenspezifischen Plattformen. Achten Sie dabei auf die Gesamtbewertung, aber auch auf die Art der Kommentare und wie das Unternehmen auf Kritik reagiert.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mt-12 mb-6">Regionale Besonderheiten in der Schweiz</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              Bei der Auswahl einer Reinigungsfirma in Zürich, Zug oder Luzern sollten Sie auch regionale Faktoren berücksichtigen. Eine lokale Reinigungsfirma kennt die örtlichen Gegebenheiten, hat kurze Anfahrtswege und kann flexibel auf Ihre Bedürfnisse reagieren. Zudem unterstützen Sie mit der Wahl eines regionalen Anbieters die lokale Wirtschaft.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">Zürich</h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                  Größte Stadt der Schweiz mit hoher Nachfrage nach professionellen Reinigungsdienstleistungen für Büros, Hotels und Geschäfte.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">Zug</h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                  Wirtschaftsstarker Kanton mit vielen internationalen Unternehmen und hohen Qualitätsansprüchen.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">Luzern</h3>
                <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                  Tourismusstarke Region mit Bedarf an Reinigung für Hotels, Restaurants und öffentliche Einrichtungen.
                </p>
              </Card>
            </div>

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mt-12 mb-6">Der Auswahlprozess Schritt für Schritt</h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  step: "1",
                  title: "Bedarfsanalyse",
                  text: "Definieren Sie genau, welche Reinigungsleistungen Sie benötigen, wie oft und zu welchen Zeiten."
                },
                {
                  step: "2",
                  title: "Recherche",
                  text: "Suchen Sie nach Reinigungsfirmen in Ihrer Region und erstellen Sie eine Shortlist von 3-5 Anbietern."
                },
                {
                  step: "3",
                  title: "Angebote einholen",
                  text: "Fordern Sie detaillierte Angebote an und vergleichen Sie Leistungen und Preise."
                },
                {
                  step: "4",
                  title: "Referenzen prüfen",
                  text: "Kontaktieren Sie Referenzkunden und lesen Sie Online-Bewertungen."
                },
                {
                  step: "5",
                  title: "Persönliches Gespräch",
                  text: "Führen Sie Gespräche mit den favorisierten Anbietern und klären Sie offene Fragen."
                },
                {
                  step: "6",
                  title: "Probereinigung",
                  text: "Vereinbaren Sie eine Probereinigung, um die Qualität selbst zu beurteilen."
                },
                {
                  step: "7",
                  title: "Vertragsabschluss",
                  text: "Prüfen Sie den Vertrag sorgfältig und achten Sie auf faire Konditionen."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-red-50 mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Fazit</h3>
              <p className="text-lg leading-relaxed text-slate-700 text-xs sm:text-sm md:text-base">
                Die Wahl der richtigen Reinigungsfirma erfordert sorgfältige Überlegung und Recherche. Nehmen Sie sich die Zeit, verschiedene Anbieter zu vergleichen und achten Sie nicht nur auf den Preis, sondern vor allem auf Qualität, Zuverlässigkeit und Service. Eine professionelle Reinigungsfirma ist ein langfristiger Partner, der zum Erfolg Ihres Unternehmens beiträgt.
              </p>
            </Card>
          </div>

          <div className="mt-16 pt-12 border-t">
            <div className="text-center">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">Bereit für professionelle Reinigung?</h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
                Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
              </p>
              <Link href="/kontakt">
                <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <SwissFooter />
    </div>
  );
}
