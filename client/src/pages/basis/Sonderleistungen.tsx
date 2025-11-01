import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Star, Clock, Shield, Zap, ArrowRight } from "lucide-react";

export default function Sonderleistungen() {
  const serviceData = {
    name: "Professionelle Sonderleistungen",
    description: "Spezielle Reinigungsleistungen für außergewöhnliche Anforderungen. Schnell, kompetent und zuverlässig.",
    url: "/basis/sonderleistungen",
    category: "Special Services"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Sonderleistungen Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Professionelle Sonderleistungen in der Schweiz. Spezialreinigungen für außergewöhnliche Anforderungen."
        keywords="Sonderleistungen, Spezialreinigung Schweiz, Notfallreinigung, Express Reinigung"
        url="/basis/sonderleistungen"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Basis Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Professionelle Sonderleistungen
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Spezielle Reinigungsleistungen für außergewöhnliche Anforderungen in Zürich, Zug und Luzern.
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
                alt="Sonderleistungen" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <Card className="p-6 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Express-Service</div>
              <div className="text-slate-600">Schnelle Reaktionszeiten</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Spezialisiert</div>
              <div className="text-slate-600">Für besondere Anforderungen</div>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">Professionell</div>
              <div className="text-slate-600">Geschulte Spezialisten</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4"/>
              <div className="font-bold text-lg mb-2">24/7 Verfügbar</div>
              <div className="text-slate-600">Auch an Wochenenden</div>
            </Card>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Wie schnell können Sie bei Notfällen vor Ort sein?
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-4">
                Bei Notfällen sind wir innerhalb von 2-4 Stunden vor Ort. Unsere 24/7-Hotline ist immer erreichbar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Benötigen Sie eine Sonderleistung?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für ein kostenloses Angebot.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
