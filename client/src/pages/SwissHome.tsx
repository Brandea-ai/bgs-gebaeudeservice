import { useState, useEffect } from "react";
import { scrollToContact } from "../utils/scroll";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Star, Shield, Clock, Users, Sparkles, Award } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { organizationSchema } from "@/utils/schema";
import { motion } from "framer-motion";
import { 
  ParallaxImage, 
  ParallaxBackground, 
  ZoomOnScroll, 
  RevealOnScroll,
  TiltCard,
  MagneticHover 
} from "@/components/PremiumParallax";

import { 
  fadeInUp, 
  staggerContainer, 
  cardHover,
  scaleIn 
} from "@/utils/animations";

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

      {/* Hero Section with Advanced Parallax */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParallaxBackground 
          src="/swiss-hero-main.jpg"
          speed={0.5}
          overlay={true}
        />

        <div className="container relative z-10 py-24 md:py-32">
          <motion.div 
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full mb-4 sm:mb-6"
              variants={fadeInUp}
            >
              <span className="text-primary font-semibold text-sm sm:text-base">Professionelle Reinigungsfirma in der Schweiz</span>
            </motion.div>
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
              variants={fadeInUp}
            >
              Erstklassige <span className="text-primary">Gebäudereinigung</span> für Zürich, Zug und Luzern
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white/95 mb-8 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              Professionelle Reinigungsdienste für Unternehmen und Premium-Kunden mit Schweizer Präzision.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={fadeInUp}
            >
              <Link href="/kontakt" className="w-full sm:w-auto">
                <MagneticHover>
                  <Button size="lg" className="w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 shadow-2xl hover:shadow-primary/50 transition-all">
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </MagneticHover>
              </Link>
              <a href="tel:+41413205610" className="w-full sm:w-auto">
                <MagneticHover>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-900">
                    +41 41 320 56 10
                  </Button>
                </MagneticHover>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {[
              { icon: Shield, label: "Zertifizierte Qualität", value: "ISO Standards" },
              { icon: Clock, label: "24/7 Verfügbar", value: "Notfall Service" },
              { icon: Users, label: "500+ Kunden", value: "Zufrieden" },
              { icon: Award, label: "15+ Jahre Erfahrung", value: "Schweizweit" },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                
                  <Card className="p-8 text-center hover-lift hover-tilt hover-tilt">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">{item.value}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600">{item.label}</p>
                  </Card>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vorher/Nachher Section with Parallax Images */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Sehen Sie den Unterschied
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Unsere professionelle Reinigung verwandelt Ihre Räumlichkeiten. Erleben Sie die Qualität unserer Arbeit.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="parallax-smooth">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Vorher</h3>
                <ParallaxImage 
                  src="/vorher-buero-schmutzig.jpg" 
                  alt="Büro vor der Reinigung"
                  className="rounded-2xl h-[400px] lg:h-[500px]"
                  speed={0.2}
                  scale={true}
                  overlay={true}
                  overlayOpacity={0.2}
                />
                <p className="text-slate-600 mt-4">Verschmutztes Büro mit Staub und Unordnung</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="parallax-smooth">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-4">Nachher</h3>
                <ParallaxImage 
                  src="/nachher-buero-sauber.jpg" 
                  alt="Büro nach der Reinigung"
                  className="rounded-2xl h-[400px] lg:h-[500px]"
                  speed={0.2}
                  scale={true}
                  overlay={true}
                  overlayOpacity={0.1}
                />
                <p className="text-slate-600 mt-4">Makelloses, professionelles Arbeitsumfeld</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Services Overview with Enhanced Cards */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-red-50/30">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Unsere Reinigungsdienstleistungen
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Von Premium-Services für Luxusimmobilien bis zur professionellen Gebäudereinigung für Unternehmen – wir bieten maßgeschneiderte Reinigungslösungen für jeden Bedarf.
              </p>
            </div>
          </RevealOnScroll>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Premium Services */}
            <motion.div variants={fadeInUp}>
              
                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Sparkles className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-primary transition-colors">Premium Services</h3>
                  <p className="text-slate-600 mb-6">
                    Exklusive Reinigungsdienstleistungen für höchste Ansprüche. Privatjets, Yachten, Luxusimmobilien und Private Housekeeping.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Privatjet Reinigung", "Yacht Reinigung", "Private Housekeeping", "Luxusimmobilien-Reinigung"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/premium/privatjet">
                    <MagneticHover>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </MagneticHover>
                  </Link>
                </Card>
              
            </motion.div>

            {/* Business Lösungen */}
            <motion.div variants={fadeInUp}>
              
                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Users className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-primary transition-colors">Business Lösungen</h3>
                  <p className="text-slate-600 mb-6">
                    Professionelle Gebäudereinigung und Facility Management für Unternehmen in Zürich, Zug und Luzern.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Büroreinigung", "Industriereinigung", "Fassaden- & Fensterreinigung", "Facility Management"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/business/bueroreinigung">
                    <MagneticHover>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </MagneticHover>
                  </Link>
                </Card>
              
            </motion.div>

            {/* Basisreinigung */}
            <motion.div variants={fadeInUp}>
              
                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Shield className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-primary transition-colors">Basisreinigung</h3>
                  <p className="text-slate-600 mb-6">
                    Zuverlässige Unterhaltsreinigung und Hausmeisterservice für Wohn- und Geschäftsobjekte.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Unterhaltsreinigung", "Hausmeisterservice", "Winterdienst", "Sonderleistungen"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/basis/unterhaltsreinigung">
                    <MagneticHover>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </MagneticHover>
                  </Link>
                </Card>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Standorte Section with Parallax Images */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Unsere Standorte in der Schweiz
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Professionelle Reinigungsdienstleistungen in den wichtigsten Wirtschaftsregionen der Schweiz
              </p>
            </div>
          </RevealOnScroll>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { name: "Zürich", image: "/zurich-city.jpg", link: "/standorte/zuerich" },
              { name: "Zug", image: "/zug-city.jpg", link: "/standorte/zug" },
              { name: "Luzern", image: "/luzern-city.jpg", link: "/standorte/luzern" },
            ].map((location, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Link href={location.link}>
                  
                    <div className="relative overflow-hidden rounded-2xl">
                      <ZoomOnScroll maxScale={1.2}>
                        <ParallaxImage
                          src={location.image}
                          alt={`Reinigung in ${location.name}`}
                          className="h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl w-full"
                          speed={0.15}
                          scale={false}
                        />
                      </ZoomOnScroll>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                          <div className="flex items-center text-white/90 group-hover:text-primary transition-colors">
                            Mehr erfahren
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-primary/5">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Was unsere Kunden sagen
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Vertrauen Sie auf die Erfahrungen unserer zufriedenen Kunden
              </p>
            </div>
          </RevealOnScroll>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                text: "Professionell, zuverlässig und immer pünktlich. Die Reinigungsqualität ist hervorragend!",
                author: "Thomas M.",
                role: "Geschäftsführer, Zürich"
              },
              {
                text: "Seit Jahren vertrauen wir auf die exzellenten Services. Absolut empfehlenswert!",
                author: "Sarah K.",
                role: "Property Manager, Zug"
              },
              {
                text: "Die Premium-Services übertreffen alle Erwartungen. Schweizer Qualität auf höchstem Niveau.",
                author: "Michael R.",
                role: "Unternehmer, Luzern"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                
                  <Card className="p-8 hover-lift h-full hover-tilt hover-tilt">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </Card>
                
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Parallax Background */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="container relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Bereit für professionelle Reinigung?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8">
                Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt">
                  <MagneticHover>
                    <Button size="lg" className="text-sm sm:text-base md:text-lg px-8 shadow-2xl">
                      Jetzt Beratung anfordern
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </MagneticHover>
                </Link>
                <a href="tel:+41413205610">
                  <MagneticHover>
                    <Button size="lg" variant="outline" className="text-sm sm:text-base md:text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-900">
                      +41 41 320 56 10
                    </Button>
                  </MagneticHover>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
