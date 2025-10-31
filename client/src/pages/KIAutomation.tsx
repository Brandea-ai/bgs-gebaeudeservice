import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart, Cog, Clock } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function KIAutomation() {
  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: "Effizienzsteigerung", description: "Bis zu 50% Zeitersparnis durch intelligente Automatisierung" },
    { icon: <BarChart className="w-6 h-6" />, title: "Kostensenkung", description: "Signifikante Reduktion operativer Kosten" },
    { icon: <Cog className="w-6 h-6" />, title: "Fehlerminimierung", description: "Höhere Qualität durch automatisierte Prozesse" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Verfügbarkeit", description: "Kontinuierliche Prozessabwicklung ohne Unterbrechung" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                KI-Automatisierung für <span className="text-accent">maximale Effizienz</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Optimieren Sie Ihre Geschäftsprozesse durch intelligente Automatisierung. Wir implementieren maßgeschneiderte KI-Lösungen, die messbare Ergebnisse liefern.
              </p>
              <Link href="/kontakt">
                <Button size="lg">Potenzialanalyse anfragen <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
            </div>
            <div className="glass floating rounded-3xl overflow-hidden">
              <img src="/ai-automation.jpg" alt="KI-Automatisierung" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ihre Vorteile</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass floating rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
