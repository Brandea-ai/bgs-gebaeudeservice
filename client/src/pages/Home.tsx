import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Zap, Users, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AccordionSection from "@/components/AccordionSection";

export default function Home() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Nachhaltiges Wachstum",
      description: "Strategische Beratung für langfristigen Unternehmenserfolg"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "KI-gestützte Prozesse",
      description: "Automatisierung und Optimierung durch modernste Technologie"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Erfahrene Experten",
      description: "Top-Management-Expertise für Ihr Unternehmen"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Messbare Ergebnisse",
      description: "Konkrete KPIs und nachweisbare Erfolge"
    }
  ];

  const faqItems = [
    {
      title: "Was macht Brandea einzigartig?",
      content: "Brandea kombiniert strategische Unternehmensberatung mit modernster KI-Technologie. Unsere Fractional CXO-Expertise ermöglicht es mittelständischen Unternehmen, von Top-Management-Kompetenz zu profitieren, ohne Vollzeitstellen schaffen zu müssen. Wir setzen auf die Brandea-Methode, die bewährte Managementprinzipien mit innovativen KI-Lösungen verbindet."
    },
    {
      title: "Für welche Unternehmen ist Brandea geeignet?",
      content: "Unsere Dienstleistungen richten sich primär an mittelständische Unternehmen im DACH- und Benelux-Raum, die vor Wachstumsherausforderungen stehen, Prozesse optimieren möchten oder eine Restrukturierung benötigen. Wir arbeiten branchenübergreifend und passen unsere Lösungen individuell an Ihre Bedürfnisse an."
    },
    {
      title: "Wie läuft eine Zusammenarbeit mit Brandea ab?",
      content: "Zunächst führen wir ein kostenloses Erstgespräch, um Ihre Herausforderungen und Ziele zu verstehen. Anschließend entwickeln wir eine maßgeschneiderte Strategie und setzen diese gemeinsam mit Ihrem Team um. Unsere Fractional CXOs integrieren sich nahtlos in Ihre Organisation und arbeiten eng mit Ihrer Führungsebene zusammen."
    },
    {
      title: "Welche Ergebnisse kann ich erwarten?",
      content: "Unsere Kunden berichten durchschnittlich von 30-50% Effizienzsteigerung durch KI-Automatisierung, signifikanter Umsatzsteigerung durch strategische Neuausrichtung und erfolgreichen Turnarounds in Krisensituationen. Jedes Projekt wird mit klaren KPIs versehen, sodass der Erfolg messbar und transparent ist."
    },
    {
      title: "Was kostet eine Beratung bei Brandea?",
      content: "Unsere Preismodelle sind flexibel und richten sich nach Umfang und Dauer des Projekts. Das Fractional CXO-Modell ist besonders kosteneffizient, da Sie nur für die tatsächlich benötigte Expertise zahlen. In einem unverbindlichen Erstgespräch erstellen wir Ihnen ein individuelles Angebot."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block glass floating px-4 py-2 rounded-full text-sm font-medium text-accent">
                Thinking outside the box
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                KI-Beratung für{" "}
                <span className="text-accent">nachhaltiges Wachstum</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wir optimieren Ihre Geschäftsprozesse, treiben Innovation voran und begleiten Sie auf dem Weg zum digitalen Unternehmen. Strategische Expertise trifft auf modernste KI-Technologie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button size="lg" className="text-lg px-8">
                    Kostenloses Erstgespräch
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
            <div className="relative">
              <div className="glass floating rounded-3xl overflow-hidden">
                <img
                  src="/hero-business-consulting.jpg"
                  alt="Business Consulting"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Warum Brandea?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profitieren Sie von unserer einzigartigen Kombination aus strategischer Beratung und technologischer Innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass floating rounded-2xl p-6 transition-smooth hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maßgeschneiderte Lösungen für Ihre unternehmerischen Herausforderungen
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Fractional CXO */}
            <Link href="/leistungen/fractional-cxo">
              <a className="group block glass floating rounded-3xl overflow-hidden transition-smooth hover:scale-105 hover:shadow-2xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/fractional-cxo.jpg"
                    alt="Fractional CXO"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                    Fractional CXO
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Strategische Führungsexpertise auf Abruf. Profitieren Sie von erfahrenen C-Level-Executives ohne Vollzeitverpflichtung.
                  </p>
                  <div className="flex items-center text-accent font-medium">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4 transition-smooth group-hover:translate-x-2" />
                  </div>
                </div>
              </a>
            </Link>

            {/* KI-Automatisierung */}
            <Link href="/leistungen/ki-automatisierung">
              <a className="group block glass floating rounded-3xl overflow-hidden transition-smooth hover:scale-105 hover:shadow-2xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/ai-automation.jpg"
                    alt="KI-Automatisierung"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                    KI-Automatisierung
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Optimieren Sie Ihre Prozesse durch intelligente Automatisierung. Effizienzsteigerung durch modernste KI-Technologie.
                  </p>
                  <div className="flex items-center text-accent font-medium">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4 transition-smooth group-hover:translate-x-2" />
                  </div>
                </div>
              </a>
            </Link>

            {/* Turnaround */}
            <Link href="/leistungen/turnaround">
              <a className="group block glass floating rounded-3xl overflow-hidden transition-smooth hover:scale-105 hover:shadow-2xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/turnaround-strategy.jpg"
                    alt="Turnaround & Restrukturierung"
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                    Turnaround & Restrukturierung
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Professionelle Begleitung in Krisensituationen. Wir entwickeln nachhaltige Strategien für erfolgreiche Unternehmenswenden.
                  </p>
                  <div className="flex items-center text-accent font-medium">
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-4 h-4 transition-smooth group-hover:translate-x-2" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Brandea Methode Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass floating rounded-3xl overflow-hidden">
              <img
                src="/team-collaboration.jpg"
                alt="Brandea Methode"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Die Brandea Methode
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unsere einzigartige Methodik kombiniert bewährte Managementprinzipien mit innovativen KI-Lösungen. Wir analysieren, optimieren und transformieren Ihr Unternehmen nachhaltig.
              </p>
              <ul className="space-y-4">
                {[
                  "Ganzheitliche Analyse Ihrer Geschäftsprozesse",
                  "Individuelle Strategieentwicklung",
                  "KI-gestützte Implementierung",
                  "Kontinuierliche Optimierung und Support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/methode">
                <Button size="lg" className="mt-4">
                  Methode entdecken
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-muted-foreground">
              Alles, was Sie über Brandea wissen müssen
            </p>
          </div>
          <AccordionSection items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-background">
        <div className="container">
          <div className="glass floating rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie jetzt ein kostenloses Erstgespräch und erfahren Sie, wie Brandea Ihr Unternehmen transformieren kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" className="text-lg px-8">
                  Jetzt Gespräch vereinbaren
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/referenzen">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Kundenerfolge ansehen
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
