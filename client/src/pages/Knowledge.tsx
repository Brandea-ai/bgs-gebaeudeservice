import { Button } from "@/components/ui/button";
import { BookOpen, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Knowledge() {
  const articles = [
    { title: "KI im Mittelstand: Chancen und Herausforderungen", date: "15. Oktober 2024", category: "KI & Technologie" },
    { title: "Fractional CXO: Die Zukunft der Unternehmensführung", date: "8. Oktober 2024", category: "Leadership" },
    { title: "Erfolgreiche Turnaround-Strategien in Krisenzeiten", date: "1. Oktober 2024", category: "Strategie" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wissen & <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aktuelle Artikel, Trends und Best Practices aus der Welt der Unternehmensberatung
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="glass floating rounded-3xl p-8 transition-smooth hover:scale-105">
                <div className="flex items-center gap-2 text-sm text-accent mb-3">
                  <BookOpen className="w-4 h-4" />
                  {article.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {article.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
