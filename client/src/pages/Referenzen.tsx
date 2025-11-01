import SwissNavigation from "@/components/SwissNavigation";
import { scrollToContact } from "../utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Quote, ArrowRight, Building, Users, Award } from "lucide-react";

export default function Referenzen() {
  const projects = [
    {
      title: "Luxury Hotel Zürich",
      category: "Hotellerie",
      image: "/referenzen-projekt1.jpg",
      description: "Komplette Reinigungslösung für 5-Sterne-Hotel mit 200 Zimmern",
      results: ["99% Gästezufriedenheit", "30% Effizienzsteigerung", "ISO-Zertifizierung erreicht"]
    },
    {
      title: "Tech Campus Zug",
      category: "Business",
      image: "/referenzen-projekt2.jpg",
      description: "Facility Management für internationales Tech-Unternehmen",
      results: ["24/7 Service etabliert", "Kosten um 20% reduziert", "Nachhaltigkeitsziele erreicht"]
    },
    {
      title: "Produktionshalle Luzern",
      category: "Industrie",
      image: "/referenzen-projekt3.jpg",
      description: "Spezialisierte Industriereinigung mit Maschinenwartung",
      results: ["Null Ausfallzeiten", "Hygiene-Standards übertroffen", "Langfristiger Vertrag"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Thomas Müller",
      position: "CEO, TechCorp AG",
      location: "Zug",
      text: "Swiss Reinigungsfirma hat unsere Erwartungen übertroffen. Die Professionalität und Zuverlässigkeit sind beispielhaft. Unser Campus ist immer makellos sauber.",
      rating: 5
    },
    {
      name: "Sandra Weber",
      position: "Hoteldirektorin",
      location: "Zürich",
      text: "In der Hotellerie sind Sauberkeit und Diskretion entscheidend. Das Team arbeitet perfekt, auch unter Zeitdruck. Unsere Gäste sind begeistert.",
      rating: 5
    },
    {
      name: "Marco Bernasconi",
      position: "Facility Manager",
      location: "Luzern",
      text: "Endlich ein Partner, der mitdenkt. Die proaktiven Verbesserungsvorschläge haben uns viel Geld gespart. Absolute Empfehlung!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Referenzen & Kundenerfolge
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              Über 500 zufriedene Kunden in Zürich, Zug und Luzern vertrauen auf unsere Expertise. Entdecken Sie, wie wir Unternehmen zu makelloser Sauberkeit verholfen haben.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center">
              <Building className="w-16 h-16 text-primary mx-auto mb-4"/>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">Zufriedene Kunden</div>
            </Card>
            <Card className="p-8 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4"/>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">Jahre Erfahrung</div>
            </Card>
            <Card className="p-8 text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4"/>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-lg text-slate-600 text-xs sm:text-sm md:text-base">Kundenzufriedenheit</div>
            </Card>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            Ausgewählte Projekte
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm text-slate-900 mb-2">Ergebnisse:</div>
                    {project.results.map((result, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"/>
                        <span className="text-slate-700 text-xs sm:text-sm md:text-base">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-12 text-center">
            Was unsere Kunden sagen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-8 relative">
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6"/>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary"/>
                  ))}
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600 text-xs sm:text-sm md:text-base">{testimonial.position}</div>
                  <div className="text-sm text-primary font-semibold">{testimonial.location}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 to-red-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Werden Sie unser nächster Erfolg
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
              Lassen Sie uns gemeinsam Ihre Reinigungsziele erreichen. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="text-sm sm:text-base md:text-lg px-6 sm:px-8">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
