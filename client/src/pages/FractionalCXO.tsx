import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Target, Briefcase } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AccordionSection from "@/components/AccordionSection";

export default function FractionalCXO() {
  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Top-Expertise",
      description: "Erfahrene C-Level-Executives mit nachgewiesener Erfolgsbilanz"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Flexibilität",
      description: "Skalierbare Unterstützung nach Ihrem tatsächlichen Bedarf"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Kosteneffizienz",
      description: "Premium-Expertise ohne Vollzeitgehalt und Nebenkosten"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Sofortige Wirkung",
      description: "Schnelle Integration und unmittelbare Wertschöpfung"
    }
  ];

  const faqItems = [
    {
      title: "Was ist ein Fractional CXO?",
      content: "Ein Fractional CXO ist eine erfahrene Führungskraft auf C-Level (CEO, CFO, COO, CTO, CMO), die ihre Expertise zeitlich flexibel mehreren Unternehmen zur Verfügung stellt. Sie erhalten hochqualifizierte strategische Führung ohne die Verpflichtung einer Vollzeitanstellung."
    },
    {
      title: "Für welche Unternehmen eignet sich ein Fractional CXO?",
      content: "Fractional CXOs sind ideal für mittelständische Unternehmen, Start-ups in der Wachstumsphase, Unternehmen in Transformationsprozessen oder Organisationen, die temporär zusätzliche Führungsexpertise benötigen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Strategische <span className="text-accent">Führungsexpertise</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Profitieren Sie von erfahrenen C-Level-Executives ohne Vollzeitverpflichtung.
              </p>
              <Link href="/kontakt">
                <Button size="lg">Erstgespräch vereinbaren <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
            </div>
            <div className="glass floating rounded-3xl overflow-hidden">
              <img src="/fractional-cxo.jpg" alt="Fractional CXO" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/20">
        <div className="container">
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
      <section className="py-20">
        <div className="container max-w-4xl">
          <AccordionSection items={faqItems} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
