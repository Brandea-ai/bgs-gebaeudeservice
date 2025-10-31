import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Heart, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Wir denken über den Tellerrand hinaus und entwickeln zukunftsweisende Lösungen für komplexe Herausforderungen."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Partnerschaft",
      description: "Ihr Erfolg ist unser Erfolg. Wir arbeiten eng mit Ihnen zusammen und verstehen uns als langfristiger Partner."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exzellenz",
      description: "Höchste Qualitätsstandards in Beratung und Umsetzung sind für uns selbstverständlich."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Nachhaltigkeit",
      description: "Wir schaffen nachhaltige Lösungen, die langfristig Wert generieren und Ihr Unternehmen zukunftssicher machen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block glass floating px-4 py-2 rounded-full text-sm font-medium text-accent">
              Über Brandea
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Wir sind Ihr Partner für{" "}
              <span className="text-accent">digitale Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Brandea GmbH ist Ihr Spezialist für KI-Beratung im DACH- und Benelux-Raum. Wir verbinden strategische Unternehmensberatung mit modernster Technologie und schaffen nachhaltige Wettbewerbsvorteile für mittelständische Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass floating rounded-3xl overflow-hidden">
              <img
                src="/team-collaboration.jpg"
                alt="Brandea Team"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Unsere Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir glauben daran, dass jedes Unternehmen das Potenzial hat, durch die richtige Kombination aus Strategie und Technologie außergewöhnliche Ergebnisse zu erzielen. Unsere Mission ist es, mittelständischen Unternehmen Zugang zu Top-Management-Expertise und modernster KI-Technologie zu verschaffen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mit unserem Fractional CXO-Ansatz machen wir hochqualifizierte Führungskräfte flexibel verfügbar. So profitieren Sie von strategischer Expertise auf C-Level, ohne langfristige Vollzeitverpflichtungen eingehen zu müssen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser interdisziplinäres Team aus erfahrenen Beratern, KI-Spezialisten und Branchenexperten arbeitet Hand in Hand, um maßgeschneiderte Lösungen zu entwickeln, die messbare Ergebnisse liefern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass floating rounded-2xl p-8 transition-smooth hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Unser Ansatz
              </h2>
              <p className="text-xl text-muted-foreground">
                So arbeiten wir mit unseren Kunden zusammen
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Analyse & Verstehen",
                  description: "Wir nehmen uns Zeit, Ihr Unternehmen, Ihre Herausforderungen und Ziele gründlich zu verstehen. Durch intensive Workshops und Gespräche mit Ihrem Team entwickeln wir ein umfassendes Bild Ihrer Situation."
                },
                {
                  step: "02",
                  title: "Strategie & Planung",
                  description: "Basierend auf unserer Analyse entwickeln wir eine maßgeschneiderte Strategie. Wir definieren klare Ziele, KPIs und einen realistischen Zeitplan. Transparenz und Messbarkeit stehen dabei im Vordergrund."
                },
                {
                  step: "03",
                  title: "Implementierung & Begleitung",
                  description: "Wir setzen die entwickelte Strategie gemeinsam mit Ihrem Team um. Unsere Experten arbeiten eng mit Ihren Mitarbeitern zusammen und sorgen für einen reibungslosen Wissenstransfer."
                },
                {
                  step: "04",
                  title: "Optimierung & Skalierung",
                  description: "Nach erfolgreicher Implementierung optimieren wir kontinuierlich und skalieren die Lösungen. Wir bleiben Ihr Partner auch nach Projektabschluss und unterstützen Sie bei neuen Herausforderungen."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass floating rounded-2xl p-8 transition-smooth hover:shadow-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-accent/20">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="glass floating rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Lernen Sie uns kennen
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Unternehmen voranbringen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" className="text-lg px-8">
                  Gespräch vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/methode">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Unsere Methode
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
