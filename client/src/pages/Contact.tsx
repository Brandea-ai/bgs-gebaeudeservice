import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Kontaktieren Sie <span className="text-accent">uns</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-xs sm:text-sm md:text-base">
              Wir freuen uns auf Ihre Nachricht und beraten Sie gerne zu Ihren Herausforderungen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass floating rounded-2xl p-8 text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
              <a href="mailto:info@brandea.de" className="text-muted-foreground hover:text-accent transition-smooth">
                info@brandea.de
              </a>
            </div>
            <div className="glass floating rounded-2xl p-8 text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
              <a href="tel:+4999547006266" className="text-muted-foreground hover:text-accent transition-smooth">
                +49 9954 7006266
              </a>
            </div>
            <div className="glass floating rounded-2xl p-8 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Standort</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">DACH & Benelux</p>
            </div>
          </div>
          <div className="glass floating rounded-3xl p-12">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-8 text-center">Gespräch vereinbaren</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Vorname" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
                <input type="text" placeholder="Nachname" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <input type="email" placeholder="E-Mail" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Ihre Nachricht" rows={6} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <Button size="lg" className="w-full">Nachricht senden</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
