import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Career() {
  const positions = [
    { title: "Senior Consultant KI & Automatisierung", location: "Remote / DACH", type: "Vollzeit" },
    { title: "Fractional CFO", location: "Remote / DACH", type: "Freelance" },
    { title: "Business Development Manager", location: "Remote / DACH", type: "Vollzeit" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Karriere bei <span className="text-accent">Brandea</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Unternehmensberatung mit
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="glass floating rounded-3xl p-8">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{position.title}</h3>
                <p className="text-muted-foreground mb-1">{position.location}</p>
                <p className="text-sm text-accent mb-6">{position.type}</p>
                <Link href="/kontakt">
                  <Button className="w-full">
                    Jetzt bewerben
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
