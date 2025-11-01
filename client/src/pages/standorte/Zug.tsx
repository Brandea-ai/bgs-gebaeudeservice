import SwissNavigation from "@/components/SwissNavigation";
import { scrollToContact } from "../utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { localBusinessSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Check, ArrowRight, TrendingUp } from "lucide-react";

export default function Zug() {
  const locationData = {
    name: "Swiss Reinigungsfirma Zug",
    address: "Baarerstrasse 8",
    postalCode: "6300",
    city: "Zug",
    lat: 47.1667,
    lng: 8.5167
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Reinigungsfirma Zug - Professionelle Gebäudereinigung"
        description="Swiss Reinigungsfirma in Zug - Professionelle Gebäudereinigung für internationale Unternehmen und anspruchsvolle Kunden im Kanton Zug."
        keywords="Reinigungsfirma Zug, Gebäudereinigung Zug, Büroreinigung Zug, Facility Management Zug"
        url="/standorte/zug"
        schema={localBusinessSchema(locationData)}
      />
      <SwissNavigation />
      
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/zug-city.jpg" alt="Zug" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"/>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary"/>
              <span className="text-lg font-semibold">Standort Zug</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Reinigungsfirma in Zug für höchste Ansprüche
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Professionelle Gebäudereinigung für internationale Unternehmen und anspruchsvolle Kunden im Kanton Zug. Qualität und Diskretion garantiert.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                Reinigung auf Zug-Niveau
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Der Kanton Zug ist bekannt für seine internationale Geschäftswelt und hohen Qualitätsstandards. Als führende Reinigungsfirma in Zug verstehen wir die Erwartungen globaler Unternehmen und bieten Reinigungsdienstleistungen, die diesen Ansprüchen gerecht werden.
              </p>
              <div className="space-y-4">
                {[
                  "Spezialisiert auf internationale Unternehmen",
                  "Mehrsprachiges Team (DE, EN, FR, IT)",
                  "Höchste Diskretion und Sicherheitsstandards",
                  "Flexible Vertragsgestaltung",
                  "Compliance mit internationalen Standards",
                  "Umweltbewusstes Facility Management"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0"/>
                    <span className="text-lg text-slate-700 text-xs sm:text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/b2b-office-cleaning.jpg" alt="Reinigung Zug" className="w-full h-full object-cover rounded-2xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Unsere Leistungen in Zug
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Maßgeschneiderte Reinigungslösungen für den Wirtschaftsstandort Zug – von Corporate Offices bis zu Luxusimmobilien.
            </p>
          </div>

          <Tabs defaultValue="business" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="business" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Business</TabsTrigger>
              <TabsTrigger value="premium" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Premium</TabsTrigger>
              <TabsTrigger value="facility" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Facility</TabsTrigger>
            </TabsList>
            <TabsContent value="business" className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Corporate Office Reinigung", desc: "Spezialisiert auf internationale Unternehmen" },
                  { title: "Büroreinigung", desc: "Tägliche Unterhaltsreinigung für Offices" },
                  { title: "Konferenzraum-Service", desc: "Flexible Reinigung nach Meetings" },
                  { title: "Industriereinigung", desc: "Für Produktionsstätten im Kanton Zug" },
                  { title: "Fassadenreinigung", desc: "Hochhausreinigung mit Spezialtechnik" },
                  { title: "Fensterreinigung", desc: "Professionelle Glasreinigung" }
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <TrendingUp className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base">{service.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="premium" className="mt-12">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Executive Housekeeping", desc: "Diskreter Service für Führungskräfte" },
                  { title: "Luxusimmobilien", desc: "Premium-Reinigung für Villen am Zugersee" },
                  { title: "Yacht-Service", desc: "Spezialisierte Reinigung für Yachten" },
                  { title: "Private Housekeeping", desc: "Exklusiver Service für Premium-Kunden" }
                ].map((service, i) => (
                  <Card key={i} className="p-8 hover:shadow-xl transition-all">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-lg">{service.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="facility" className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Facility Management", "Hausmeisterservice", "Winterdienst",
                  "Grünflächenpflege", "Beschaffungsmanagement", "Sonderleistungen"
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">{service}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base">Umfassende Facility-Lösungen in Zug</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            Häufige Fragen zur Reinigung in Zug
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                Was unterscheidet Ihre Reinigung in Zug?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Wir sind spezialisiert auf die Bedürfnisse internationaler Unternehmen im Kanton Zug. Unser mehrsprachiges Team, höchste Diskretion und Compliance mit internationalen Standards machen uns zur ersten Wahl für anspruchsvolle Kunden.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                Bieten Sie Reinigung außerhalb der Geschäftszeiten an?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Ja, wir reinigen bevorzugt außerhalb Ihrer Geschäftszeiten, um den Betriebsablauf nicht zu stören. Abend-, Nacht- und Wochenendreinigungen sind für uns Standard.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-sm sm:text-base md:text-lg font-semibold">
                Wie gewährleisten Sie Datenschutz und Sicherheit?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">Alle unsere Mitarbeiter sind sorgfältig geprüft und unterzeichnen Vertraulichkeitsvereinbarungen. Wir arbeiten nach strengen Sicherheitsprotokollen und sind mit den Anforderungen internationaler Unternehmen vertraut.</p>
                <p>Zudem sind wir ISO 27001 (Informationssicherheit) zertifiziert.</p>
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
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Kontakt Zug
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 text-xs sm:text-sm md:text-base">
                  Vereinbaren Sie ein persönliches Beratungsgespräch.
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
                  <div className="text-slate-600 text-xs sm:text-sm md:text-base">Mo-Fr 7:00-18:00</div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/kontakt">
                  <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                    Jetzt Kontakt aufnehmen
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
