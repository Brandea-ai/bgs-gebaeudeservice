import { useState } from "react";
import { Link } from "wouter";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { serviceSchema } from "@/utils/schema";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Warehouse, ArrowRight, Shield, Clock, Award } from "lucide-react";

export default function Hallenreinigung() {
  const serviceData = {
    name: "Professionelle Hallenreinigung",
    description: "Spezialisierte Hallenreinigung für Industrie, Logistik und Lager. Effizient und gründlich.",
    url: "/business/hallenreinigung",
    category: "Hall Cleaning"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Hallenreinigung Zürich, Zug & Luzern - Swiss Reinigungsfirma"
        description="Spezialisierte Hallenreinigung in der Schweiz für Industrie, Logistik und Lager. Effizient und gründlich."
        keywords="Hallenreinigung, Industriehallen Reinigung, Lager Reinigung Schweiz, Logistikhallen Reinigung"
        url="/business/hallenreinigung"
        schema={serviceSchema(serviceData)}
      />
      <SwissNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Business Lösung
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Professionelle Hallenreinigung
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Effiziente Reinigung großer Hallen und Lagerflächen in Zürich, Zug und Luzern. Mit Industriegeräten für schnelle Ergebnisse und makellose Sauberkeit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </Link>
                <a href="tel:+41413205610">
                  <Button size="lg" variant="outline" className="text-lg">
                    +41 41 320 56 10
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/b2b-industrial-cleaning.jpg" 
                alt="Professionelle Hallenreinigung" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Image Left */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/warehouse-cleaning.jpg" 
                alt="Lagerhalle Reinigung" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Spezialisiert auf große Flächen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Unsere <Link href="/business/industriereinigung" className="text-primary hover:underline">Industriereinigung</Link> umfasst die professionelle Reinigung von Produktionshallen, Lagerflächen und Logistikzentren. Mit modernsten Kehrmaschinen und Scheuersaugmaschinen reinigen wir effizient große Flächen.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "Zertifizierte Fachkräfte" },
                  { icon: Clock, text: "Flexible Einsatzzeiten" },
                  { icon: Award, text: "Modernste Technologie" },
                  { icon: Warehouse, text: "Große Flächen" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Image Right */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Umfassende Reinigungsleistungen
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Von der Bodenreinigung bis zur Hochregalpflege - wir bieten alle Leistungen für Ihre Halle. Unsere <Link href="/business/facility-management" className="text-primary hover:underline">Facility Management</Link> Services sorgen für dauerhaft saubere Arbeitsbereiche.
              </p>
              <div className="space-y-3">
                {[
                  "Bodenreinigung mit Kehrmaschinen",
                  "Hochregallager-Reinigung",
                  "Verladezonen und Rampen",
                  "Sozialräume und Aufenthaltsräume",
                  "Büros in Produktionshallen",
                  "Sanitäranlagen und Umkleideräume",
                  "Entstaubung von Regalen",
                  "Fenster und Oberlichter"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"/>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/industrial-floor-cleaning.jpg" 
                alt="Industrieboden Reinigung" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section - FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-slate-600">
              Alles was Sie über unsere Hallenreinigung wissen müssen
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Hallengrößen können Sie reinigen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Wir reinigen Hallen jeder Größe - von 500 m² bis zu mehreren 10.000 m². Mit unseren Industriemaschinen sind wir für kleine Lagerhallen ebenso ausgestattet wie für große Logistikzentren. Unsere <Link href="/business/bueroreinigung" className="text-primary hover:underline">Büroreinigung</Link> kann bei Bedarf integriert werden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Arbeiten Sie auch außerhalb der Betriebszeiten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Ja, wir bieten flexible Reinigungszeiten an. Ob nachts, am Wochenende oder während der Betriebsruhe - wir passen uns Ihren Anforderungen an, damit der Produktionsbetrieb nicht gestört wird.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Welche Reinigungsgeräte verwenden Sie?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Wir setzen professionelle Kehrmaschinen, Scheuersaugmaschinen und Hochdruckreiniger ein. Für Hochregale nutzen wir Teleskopleitern und Arbeitsbühnen. Alle Geräte entsprechen den neuesten Sicherheitsstandards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Bieten Sie auch Außenreinigung an?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Ja, unsere <Link href="/business/aussenanlagen" className="text-primary hover:underline">Außenanlagenpflege</Link> umfasst die Reinigung von Parkplätzen, Zufahrten und Außenbereichen. Im Winter bieten wir auch <Link href="/basis/winterdienst" className="text-primary hover:underline">Winterdienst</Link> an.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Wie oft sollte eine Halle gereinigt werden?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Die Reinigungsfrequenz hängt von der Nutzung ab. Produktionshallen benötigen oft tägliche Reinigung, während Lagerhallen mit wöchentlicher oder monatlicher Reinigung auskommen. Wir erstellen einen individuellen Reinigungsplan für Ihre Anforderungen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Bereit für professionelle Hallenreinigung?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne zu allen Reinigungsdienstleistungen in Zürich, Zug und Luzern.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" variant="secondary" className="text-lg">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </Link>
            <Link href="/standorte/zuerich">
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                Standorte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
