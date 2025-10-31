import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Settings, ArrowRight } from "lucide-react";

export default function Maschinenreinigung() {
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
                Professionelle Maschinenreinigung
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed mb-8">
                Spezialisierte Reinigung von Produktionsmaschinen und Anlagen in Zürich, Zug und Luzern. Schonend und effektiv.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg">
                    Jetzt anfragen
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/b2b-industrial-cleaning.jpg" 
                alt="Produktionsmaschine" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <Card className="p-8 mb-12">
            <h3 className="text-3xl font-bold mb-6">Unsere Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                {["CNC-Maschinen", "Drehbänke & Fräsen", "Spritzgussmaschinen", "Druckmaschinen", "Verpackungsanlagen", "Förderbänder"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {["Ölentfernung", "Kühlschmierstoff-Reste", "Metallspäne", "Produktionsrückstände", "Lackierereien", "Wartungsreinigung"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5"/>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
