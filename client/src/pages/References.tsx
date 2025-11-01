import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function References() {
  const references = [
    { company: "Mittelständisches Produktionsunternehmen", result: "45% Effizienzsteigerung durch KI-Automatisierung", industry: "Produktion" },
    { company: "Technologie-Start-up", result: "Erfolgreicher Turnaround in 6 Monaten", industry: "Technologie" },
    { company: "Handelsunternehmen", result: "30% Umsatzsteigerung durch strategische Neuausrichtung", industry: "Handel" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Unsere <span className="text-accent">Kundenerfolge</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Messbare Ergebnisse und nachhaltige Erfolge für unsere Kunden
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {references.map((ref, index) => (
              <div key={index} className="glass floating rounded-3xl p-8">
                <Star className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{ref.company}</h3>
                <p className="text-accent font-semibold mb-3">{ref.result}</p>
                <p className="text-sm text-muted-foreground">{ref.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
