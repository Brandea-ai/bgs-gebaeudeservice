'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxImage, ParallaxBackground, RevealOnScroll, TiltCard, MagneticHover, ZoomOnScroll } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "Wie finde ich die richtige Reinigungsfirma?",
      excerpt: "Ein umfassender Leitfaden zur Auswahl der perfekten Reinigungsfirma für Ihr Unternehmen in der Schweiz.",
      image: "/blog-reinigungsfirma-finden.jpg",
      date: "15. Januar 2025",
      readTime: "8 Min.",
      slug: "richtige-reinigungsfirma-finden"
    },
    {
      title: "Professionelle Gebäudereinigung: Was Sie wissen müssen",
      excerpt: "Alles Wichtige über professionelle Gebäudereinigung, Standards und Qualitätsmerkmale.",
      image: "/blog-gebaeudereinigung.jpg",
      date: "10. Januar 2025",
      readTime: "10 Min.",
      slug: "professionelle-gebaeudereinigung"
    },
    {
      title: "Reinigungskosten in der Schweiz: Ein Überblick",
      excerpt: "Transparente Informationen zu Reinigungskosten und Preisgestaltung in Zürich, Zug und Luzern.",
      image: "/blog-kosten.jpg",
      date: "5. Januar 2025",
      readTime: "7 Min.",
      slug: "reinigungskosten-schweiz"
    },
    {
      title: "Umweltfreundliche Reinigung: Tipps und Tricks",
      excerpt: "Nachhaltige Reinigungsmethoden und ökologische Produkte für eine grünere Zukunft.",
      image: "/blog-umwelt.jpg",
      date: "1. Januar 2025",
      readTime: "6 Min.",
      slug: "umweltfreundliche-reinigung"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Wissen & Ratgeber
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Expertenwissen rund um professionelle Reinigung, Gebäudeservice und Facility Management in der Schweiz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link href={`/blog/${article.slug}`}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all">
                      Weiterlesen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
