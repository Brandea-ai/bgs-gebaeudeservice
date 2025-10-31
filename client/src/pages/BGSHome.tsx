import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Building, Sparkles, Shield, Clock } from "lucide-react";
import { Link } from "wouter";
import BGSNavigation from "@/components/BGSNavigation";
import BGSFooter from "@/components/BGSFooter";

export default function BGSHome() {
  const services = [
    {
      title: "Büroreinigung",
      description: "Professionelle Reinigung für Büros und Verwaltungsgebäude. Tägliche oder wöchentliche Reinigungszyklen nach Ihren Bedürfnissen.",
      image: "/bgs-office-cleaning.jpg",
      href: "/leistungen/bueroreinigung"
    },
    {
      title: "Glasreinigung",
      description: "Fachgerechte Reinigung von Fenstern und Glasfassaden. Auch für schwer zugängliche Bereiche mit modernster Technik.",
      image: "/bgs-window-cleaning.jpg",
      href: "/leistungen/glasreinigung"
    },
    {
      title: "Industriereinigung",
      description: "Spezialisierte Reinigungslösungen für Produktions- und Lagerhallen. Höchste Standards für anspruchsvolle Umgebungen.",
      image: "/bgs-industrial-cleaning.jpg",
      href: "/leistungen/industriereinigung"
    }
  ];

  const benefits = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Erfahrung",
      description: "Langjährige Expertise in der professionellen Gebäudereinigung"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Qualität",
      description: "Höchste Qualitätsstandards und zertifizierte Reinigungsverfahren"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zuverlässigkeit",
      description: "Pünktliche und verlässliche Ausführung aller Aufträge"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexibilität",
      description: "Individuelle Reinigungspläne nach Ihren Anforderungen"
    }
  ];

  const regions = [
    {
      name: "Zürich",
      description: "Professionelle Gebäudereinigung im Grossraum Zürich",
      href: "/standorte/zuerich"
    },
    {
      name: "Luzern",
      description: "Zuverlässiger Service in Luzern und Umgebung",
      href: "/standorte/luzern"
    },
    {
      name: "St. Gallen",
      description: "Ihr Partner für Sauberkeit in St. Gallen",
      href: "/standorte/st-gallen"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BGSNavigation />
      
      <section className="relative h-[600px] lg:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/bgs-hero-cleaning.jpg" 
            alt="Professionelle Gebäudereinigung" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professionelle Gebäudereinigung in der <span className="text-primary">Schweiz</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-slate-200">
              Ihr zuverlässiger Partner für makellose Sauberkeit in Zürich, Luzern und St. Gallen
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button size="lg" className="text-lg px-8">
                  Jetzt Angebot anfragen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/leistungen">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
                  Unsere Leistungen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Warum BGS Gebäudeservice?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professionelle Reinigungsdienstleistungen mit höchsten Qualitätsstandards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Umfassende Reinigungslösungen für jede Anforderung
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full">
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Unsere Standorte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professioneller Service in den wichtigsten Schweizer Städten
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Link key={index} href={region.href}>
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 text-white hover:shadow-xl transition-smooth cursor-pointer">
                  <h3 className="text-3xl font-bold mb-3">{region.name}</h3>
                  <p className="text-white/90 mb-6">{region.description}</p>
                  <div className="flex items-center text-white font-semibold">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bereit für makellose Sauberkeit?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BGSFooter />
    </div>
  );
}
