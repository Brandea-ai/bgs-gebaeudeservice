import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Check, ArrowRight, Building2, Sparkles } from "lucide-react";

export default function Zuerich() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/zurich-city.jpg" alt="Zürich" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"/>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary"/>
              <span className="text-lg font-semibold">Standort Zürich</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Professionelle Reinigungsfirma in Zürich
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Ihre erste Wahl für Gebäudereinigung und Facility Management in der größten Stadt der Schweiz. Seit Jahren vertrauen Unternehmen in Zürich auf unsere Expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Warum Swiss Reinigungsfirma in Zürich?
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Zürich als Wirtschaftsmetropole stellt höchste Ansprüche an professionelle Reinigungsdienstleistungen. Wir verstehen die Bedürfnisse von Unternehmen in Zürich und bieten maßgeschneiderte Lösungen für jede Branche – von Banken über Tech-Unternehmen bis hin zu Hotels und Gastronomiebetrieben.
              </p>
              <div className="space-y-4">
                {[
                  "Über 500 zufriedene Kunden in Zürich",
                  "24/7 Notfall-Service verfügbar",
                  "ISO 9001 & ISO 14001 zertifiziert",
                  "Lokales Team mit Zürich-Expertise",
                  "Flexible Einsatzzeiten (auch nachts/Wochenende)",
                  "Umweltfreundliche Reinigungsmethoden"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0"/>
                    <span className="text-lg text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/swiss-hero-main.jpg" alt="Reinigung Zürich" className="w-full h-full object-cover rounded-2xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Unsere Leistungen in Zürich
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von Premium-Services für Luxusimmobilien bis zur Industriereinigung – wir bieten das komplette Spektrum professioneller Reinigungsdienstleistungen.
            </p>
          </div>

          <Tabs defaultValue="premium" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="basis">Basis</TabsTrigger>
            </TabsList>
            <TabsContent value="premium" className="mt-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Privatjet-Reinigung", desc: "Exklusive Reinigung für Privatjets am Flughafen Zürich", icon: Sparkles },
                  { title: "Yacht-Reinigung", desc: "Spezialisierte Reinigung für Luxus-Yachten am Zürichsee", icon: Sparkles },
                  { title: "Private Housekeeping", desc: "Diskreter Service für Luxusvillen in Zürich", icon: Sparkles },
                  { title: "Luxusimmobilien", desc: "Maßgeschneiderte Reinigung für Premium-Immobilien", icon: Sparkles }
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <service.icon className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.desc}</p>
                    <Link href={`/premium/${service.title.toLowerCase().replace(/[- ]/g, '')}`}>
                      <Button variant="outline" size="sm">Mehr erfahren</Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-12">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  "Büroreinigung", "Baureinigung", "Industriereinigung", "Fassadenreinigung",
                  "Fensterreinigung", "Außenanlagenpflege", "Hallenreinigung", "Facility Management"
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <Building2 className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-lg font-bold mb-2">{service}</h3>
                    <p className="text-sm text-slate-600 mb-4">Professionelle Lösungen für Zürich</p>
                    <Link href={`/business/${service.toLowerCase().replace(/ /g, '')}`}>
                      <Button variant="outline" size="sm">Details</Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="basis" className="mt-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Unterhaltsreinigung", "Hausmeisterservice", "Winterdienst",
                  "Beschaffungsmanagement", "Sonderleistungen"
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-3">{service}</h3>
                    <p className="text-slate-600 mb-4">Zuverlässige Basisleistungen in Zürich</p>
                    <Link href={`/basis/${service.toLowerCase().replace(/ /g, '')}`}>
                      <Button variant="outline">Mehr Info</Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Häufige Fragen zur Reinigung in Zürich
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Was kostet professionelle Reinigung in Zürich?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">Die Kosten variieren je nach Leistungsumfang und Objektgröße. In Zürich liegen die Preise für Büroreinigung typischerweise zwischen CHF 8-12 pro m² monatlich. Für Unterhaltsreinigung berechnen wir CHF 45-65 pro Stunde.</p>
                <p>Wir erstellen Ihnen gerne ein individuelles, transparentes Angebot basierend auf Ihren spezifischen Anforderungen.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Bieten Sie auch Notfall-Reinigung in Zürich an?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Ja, unser 24/7 Notfall-Service ist in ganz Zürich verfügbar. Bei Wasserschäden, nach Veranstaltungen oder anderen dringenden Reinigungsbedarfen sind wir innerhalb kürzester Zeit vor Ort.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                Welche Stadtteile in Zürich bedienen Sie?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Wir sind in allen Stadtteilen Zürichs aktiv: City, Zürich-West, Oerlikon, Altstetten, Wiedikon, Enge, Seefeld und allen weiteren Quartieren. Auch Gemeinden im Großraum Zürich gehören zu unserem Einzugsgebiet.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">
                Sind Ihre Reinigungsmittel umweltfreundlich?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">Ja, wir setzen konsequent auf ökologische Reinigungsmittel mit EU Ecolabel oder vergleichbaren Zertifizierungen. Unsere Produkte sind biologisch abbaubar und schonen Umwelt und Gesundheit.</p>
                <p>Zudem nutzen wir moderne Mikrofasertechnologie und Dampfreiniger, die den Einsatz von Chemikalien minimieren.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Kontaktieren Sie uns in Zürich
                </h2>
                <p className="text-xl text-slate-600">
                  Wir beraten Sie gerne persönlich zu Ihrem Reinigungsbedarf in Zürich.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3"/>
                  <div className="font-semibold mb-1">Telefon</div>
                  <a href="tel:+41413205610" className="text-primary hover:underline">+41 41 320 56 10</a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3"/>
                  <div className="font-semibold mb-1">E-Mail</div>
                  <a href="mailto:info@swiss-reinigung.ch" className="text-primary hover:underline">info@swiss-reinigung.ch</a>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3"/>
                  <div className="font-semibold mb-1">Erreichbarkeit</div>
                  <div className="text-slate-600">Mo-Fr 7:00-18:00</div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg px-8">
                    Jetzt Beratungstermin vereinbaren
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
