import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Method() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Die <span className="text-accent">Brandea Methode</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Unsere einzigartige Methodik kombiniert bewährte Managementprinzipien mit innovativen KI-Lösungen für nachhaltigen Unternehmenserfolg.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            {["Ganzheitliche Analyse", "Individuelle Strategieentwicklung", "KI-gestützte Implementierung", "Kontinuierliche Optimierung"].map((item, index) => (
              <div key={index} className="glass floating rounded-2xl p-8 flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
