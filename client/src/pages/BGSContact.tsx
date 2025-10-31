import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import BGSNavigation from "@/components/BGSNavigation";
import BGSFooter from "@/components/BGSFooter";

export default function BGSContact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BGSNavigation />
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-muted-foreground">
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
              <a href="mailto:info@bgs-service.ch" className="text-muted-foreground hover:text-primary transition-smooth">
                info@bgs-service.ch
              </a>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
              <a href="tel:+41413205610" className="text-muted-foreground hover:text-primary transition-smooth">
                +41 41 320 56 10
              </a>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Standort</h3>
              <p className="text-muted-foreground">Emmenbrücke, Luzern</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Angebot anfragen</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Vorname" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="text" placeholder="Nachname" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <input type="email" placeholder="E-Mail" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="tel" placeholder="Telefon" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Ihre Nachricht" rows={6} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              <Button size="lg" className="w-full">Anfrage senden</Button>
            </form>
          </div>
        </div>
      </section>
      <BGSFooter />
    </div>
  );
}
