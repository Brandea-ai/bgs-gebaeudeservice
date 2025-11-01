import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { localBusinessSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Check, ArrowRight, Home } from "lucide-react";

export default function Luzern() {
  const locationData = {
    name: "Swiss Reinigungsfirma Luzern",
    address: "Pilatusstrasse 12",
    postalCode: "6003",
    city: "Luzern",
    lat: 47.0502,
    lng: 8.3093
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Reinigungsfirma Luzern - Professionelle Gebäudereinigung"
        description="Swiss Reinigungsfirma in Luzern - Zuverlässige Reinigungsfirma in der Zentralschweiz. Spezialisiert auf Hotellerie, Gastronomie und Gewerbe."
        keywords="Reinigungsfirma Luzern, Gebäudereinigung Luzern, Büroreinigung Luzern, Facility Management Luzern"
        url="/standorte/luzern"
        schema={localBusinessSchema(locationData)}
      />
      <SwissNavigation />
      
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/luzern-city.jpg" alt="Luzern" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"/>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary"/>
              <span className="text-lg font-semibold">Standort Luzern</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Professionelle Reinigung in Luzern
            </h1>
            <p className="text-2xl leading-relaxed opacity-90">
              Ihre zuverlässige Reinigungsfirma in der Zentralschweiz. Spezialisiert auf Hotellerie, Gastronomie und Gewerbe in Luzern und Umgebung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Reinigungsexperten in Luzern
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Luzern als Tourismusmagnet und Wirtschaftsstandort der Zentralschweiz stellt besondere Anforderungen an Reinigungsdienstleistungen. Wir kennen die Bedürfnisse von Hotels, Restaurants, Geschäften und Unternehmen in Luzern und bieten maßgeschneiderte Lösungen.
              </p>
              <div className="space-y-4">
                {[
                  "Spezialisiert auf Hotellerie & Gastronomie",
                  "Erfahrung mit Tourismusbetrieben",
                  "Flexible Einsatzplanung",
                  "Schnelle Reaktionszeiten",
                  "Lokales Team aus Luzern",
                  "Faire Preise bei hoher Qualität"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0"/>
                    <span className="text-lg text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/team-at-work.jpg" alt="Reinigung Luzern" className="w-full h-full object-cover rounded-2xl shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Unsere Leistungen in Luzern
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der Hotelreinigung bis zur Gebäudereinigung – wir bieten das komplette Spektrum für Luzern.
            </p>
          </div>

          <Tabs defaultValue="hotel" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="hotel" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Hotel & Gastro</TabsTrigger>
              <TabsTrigger value="business" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Business</TabsTrigger>
              <TabsTrigger value="premium" className="text-xs sm:text-sm md:text-base px-2 sm:px-4">Premium</TabsTrigger>
            </TabsList>
            <TabsContent value="hotel" className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Hotelreinigung", desc: "Zimmerreinigung und öffentliche Bereiche" },
                  { title: "Restaurant-Reinigung", desc: "Küchen und Gastronomie-Hygiene" },
                  { title: "Event-Reinigung", desc: "Schnelle Reinigung nach Veranstaltungen" },
                  { title: "Wellness-Bereiche", desc: "Spezialisierte Reinigung von Spa & Sauna" },
                  { title: "Konferenzräume", desc: "Flexible Reinigung nach Bedarf" },
                  { title: "Fassadenreinigung", desc: "Außenreinigung für Hotels" }
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <Home className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Büroreinigung", "Praxisreinigung", "Ladenreinigung",
                  "Industriereinigung", "Fensterreinigung", "Facility Management"
                ].map((service, i) => (
                  <Card key={i} className="p-6 hover:shadow-xl transition-all">
                    <h3 className="text-xl font-bold mb-3">{service}</h3>
                    <p className="text-slate-600">Professionelle Lösungen für Luzern</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="premium" className="mt-12">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Private Housekeeping", desc: "Exklusiver Service für Premium-Kunden" },
                  { title: "Luxusimmobilien", desc: "Premium-Reinigung für Villen am Vierwaldstättersee" },
                  { title: "Yacht Reinigung", desc: "Spezialisierte Reinigung für Yachten" },
                  { title: "Privatjet-Service", desc: "Exklusive Reinigung für Privatjets" }
                ].map((service, i) => (
                  <Card key={i} className="p-8 hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-lg">{service.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Häufige Fragen zur Reinigung in Luzern
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Haben Sie Erfahrung mit Hotelreinigung in Luzern?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Ja, wir sind spezialisiert auf die Reinigung von Hotels und Gastronomiebetrieben in Luzern. Wir verstehen die hohen Anforderungen der Tourismusbranche und arbeiten diskret und effizient, auch während des laufenden Betriebs.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Können Sie auch kurzfristig einspringen?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Absolut. Gerade in der Hotellerie und Gastronomie sind kurzfristige Einsätze oft notwendig. Wir haben ein flexibles Team und können in der Regel innerhalb von 24 Stunden reagieren.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                Welche Bereiche in Luzern decken Sie ab?
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p>Wir sind in der ganzen Stadt Luzern und Umgebung aktiv: Altstadt, Neustadt, Littau, Kriens, Horw, Meggen und weitere Gemeinden rund um den Vierwaldstättersee.</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Kontakt Luzern
                </h2>
                <p className="text-xl text-slate-600">
                  Wir freuen uns auf Ihre Anfrage.
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
