import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Star, Shield, Clock, Users, Sparkles, Award } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { organizationSchema } from "@/utils/schema";

export default function SwissHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Professionelle Gebäudereinigung in Zürich, Zug & Luzern"
        description="Swiss Reinigungsfirma - Professionelle Reinigungsfirma in der Schweiz für Unternehmen und Premium-Kunden. Gebäudereinigung, Büroreinigung und exklusive Premium Services."
        keywords="Reinigungsfirma Schweiz, Gebäudereinigung Zürich, Büroreinigung Zug, Facility Management Luzern, Professionelle Reinigung"
        url="/"
        schema={organizationSchema}
      />
      <SwissNavigation />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: "url('/swiss-hero-main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-4 sm:mb-6">
              <span className="text-primary font-semibold text-sm sm:text-base">Professionelle Reinigungsfirma in der Schweiz</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Erstklassige <span className="text-primary">Gebäudereinigung</span> für Zürich, Zug und Luzern
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl">
              Professionelle Reinigungsdienste für Unternehmen und Premium-Kunden mit Schweizer Präzision.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-2xl hover:shadow-primary/50 transition-all">
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <a href="tel:+41413205610" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-900">
                  +41 41 320 56 10
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "Zertifizierte Qualität", value: "ISO Standards" },
              { icon: Clock, label: "24/7 Verfügbar", value: "Notfall Service" },
              { icon: Users, label: "500+ Kunden", value: "Zufrieden" },
              { icon: Award, label: "15+ Jahre Erfahrung", value: "Schweizweit" },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{item.value}</h3>
                <p className="text-slate-600">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vorher/Nachher Section */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Sehen Sie den Unterschied
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unsere professionelle Reinigung verwandelt Ihre Räumlichkeiten. Erleben Sie die Qualität unserer Arbeit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Vorher</h3>
              <img 
                src="/vorher-buero-schmutzig.jpg" 
                alt="Büro vor der Reinigung" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-slate-600 mt-4">Verschmutztes Büro mit Staub und Unordnung</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Nachher</h3>
              <img 
                src="/nachher-buero-sauber.jpg" 
                alt="Büro nach der Reinigung" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <p className="text-slate-600 mt-4">Makelloses, professionelles Arbeitsumfeld</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-red-50/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Unsere Reinigungsdienstleistungen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von Premium-Services für Luxusimmobilien bis zur professionellen Gebäudereinigung für Unternehmen – wir bieten maßgeschneiderte Reinigungslösungen für jeden Bedarf.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium Services */}
            <Card className="p-10 hover:shadow-2xl transition-all group">
              <Sparkles className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Premium Services</h3>
              <p className="text-slate-600 mb-6">
                Exklusive Reinigungsdienstleistungen für höchste Ansprüche. Privatjets, Yachten, Luxusimmobilien und Private Housekeeping.
              </p>
              <ul className="space-y-3 mb-8">
                {["Privatjet-Reinigung", "Yacht-Reinigung", "Private Housekeeping", "Luxusimmobilien-Reinigung"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/premium/privatjet">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Business Lösungen */}
            <Card className="p-10 hover:shadow-2xl transition-all group">
              <Users className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Business Lösungen</h3>
              <p className="text-slate-600 mb-6">
                Professionelle Gebäudereinigung und Facility Management für Unternehmen in Zürich, Zug und Luzern.
              </p>
              <ul className="space-y-3 mb-8">
                {["Büroreinigung", "Industriereinigung", "Fassaden- & Fensterreinigung", "Facility Management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/business/bueroreinigung">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Basisreinigung */}
            <Card className="p-10 hover:shadow-2xl transition-all group">
              <Shield className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Basisreinigung</h3>
              <p className="text-slate-600 mb-6">
                Zuverlässige Unterhaltsreinigung und Hausmeisterservice für Wohn- und Geschäftsobjekte.
              </p>
              <ul className="space-y-3 mb-8">
                {["Unterhaltsreinigung", "Hausmeisterservice", "Winterdienst", "Sonderleistungen"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/basis/unterhaltsreinigung">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 break-words">
                Warum Swiss Reinigungsfirma?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Als führende Reinigungsfirma in der Schweiz verstehen wir Schweizer Qualität und moderne Reinigungstechnologie. Unsere professionellen Fachkräfte sorgen für makellose Sauberkeit mit Schweizer Präzision in Zürich, Zug und Luzern.
              </p>
              <div className="space-y-6">
                {[
                  "Zertifizierte Fachkräfte mit langjähriger Erfahrung",
                  "Umweltfreundliche Reinigungsmittel und -methoden",
                  "Flexible Reinigungszeiten nach Ihren Wünschen",
                  "Höchste Qualitätsstandards und Zuverlässigkeit",
                  "Qualitätskontrolle nach jedem Einsatz",
                  "Versicherter und bondfizierter Service",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/team-at-work.jpg" 
                alt="Swiss Reinigung Team bei der Arbeit" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-slate-600">
              Über 500 zufriedene Kunden vertrauen auf unsere Reinigungsdienstleistungen
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas Müller",
                company: "Geschäftsführer, Tech AG Zürich",
                text: "Seit 3 Jahren arbeiten wir mit Swiss Reinigungsfirma zusammen. Die Qualität der Gebäudereinigung ist hervorragend und das Team ist äußerst zuverlässig.",
                rating: 5,
              },
              {
                name: "Sarah Weber",
                company: "Facility Manager, Bank Zug",
                text: "Professionelle Reinigung auf höchstem Niveau. Die Kommunikation ist ausgezeichnet und die Flexibilität bei Sonderwünschen beeindruckend.",
                rating: 5,
              },
              {
                name: "Michael Schneider",
                company: "Eigentümer, Hotel Luzern",
                text: "Die Reinigungsfirma übertrifft unsere Erwartungen. Besonders schätzen wir die Diskretion und die umweltfreundlichen Reinigungsmittel.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <Card key={i} className="p-8 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/zurich-skyline.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Unsere Standorte in der Schweiz
            </h2>
            <p className="text-xl text-slate-600">
              Professionelle Reinigungsdienstleistungen in den wichtigsten Wirtschaftsregionen der Schweiz
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { city: "Zürich", description: "Reinigungsfirma für Zürich und Umgebung", href: "/standorte/zuerich" },
              { city: "Zug", description: "Gebäudereinigung in Zug und Zentralschweiz", href: "/standorte/zug" },
              { city: "Luzern", description: "Reinigungsservice in Luzern und Region", href: "/standorte/luzern" },
            ].map((location, i) => (
              <Link key={i} href={location.href}>
                <Card className="p-10 hover:shadow-2xl transition-all cursor-pointer group">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                    {location.city}
                  </h3>
                  <p className="text-slate-600 mb-6">{location.description}</p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all">
                    Standort ansehen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-red-50 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot. Unsere Experten beraten Sie gerne zu allen Reinigungsdienstleistungen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt">
                <Button size="lg" className="text-lg px-8 py-6 shadow-xl">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+41413205610">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  +41 41 320 56 10
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
