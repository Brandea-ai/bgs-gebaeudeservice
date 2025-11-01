import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Turnaround() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Turnaround & <span className="text-accent">Restrukturierung</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professionelle Begleitung in Krisensituationen. Wir entwickeln nachhaltige Strategien für erfolgreiche Unternehmenswenden.
              </p>
              <Link href="/kontakt">
                <Button size="lg">Erstgespräch vereinbaren <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
            </div>
            <div className="glass floating rounded-3xl overflow-hidden">
              <img src="/turnaround-strategy.jpg" alt="Turnaround" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
