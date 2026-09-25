'use client'
import { useState, useEffect } from "react";
import { scrollToContact } from "@/utils/scroll";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Star, Shield, Clock, Users, Sparkles, Award, Building2, Wrench } from "lucide-react";
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
import IndustryAdvisor from "@/components/IndustryAdvisor";
import AppointmentButton from "@/components/AppointmentButton";
import { useScrollToAnchor } from "@/hooks/useScrollToAnchor";
import { company } from "../../shared/company";
import { chatEnabled } from "../../shared/features";

import {
  fadeInUp,
  staggerContainer,
  cardHover,
  scaleIn
} from "@/utils/animations";

export default function SwissHome() {
  useScrollToAnchor();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gebäudereinigung und Hauswartung in Luzern, Zug und Umgebung"
        description="BGS Gebäudeservice - Professionelle Reinigungsfirma in der Schweiz für Unternehmen und Premium-Kunden. Gebäudereinigung, Büroreinigung und exklusive Premium Services."
        keywords="Gebäudereinigung Luzern, Hauswartung Luzern, Büroreinigung Zug, Unterhaltsreinigung, Facility Services"
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
              <span className="text-primary font-semibold text-sm sm:text-base">Reinigung und Hauswartung aus {company.address.city}</span>
            </motion.div>
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
              variants={fadeInUp}
            >
              <span className="text-primary">Gebäudereinigung</span> und Hauswartung für Luzern, Zug und Umgebung
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white/95 mb-8 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              Für Unternehmen, Verwaltungen und anspruchsvolle Privatkunden. Wir kommen für eine kostenlose und unverbindliche Offerte vorbei.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={fadeInUp}
            >
              <MagneticHover>
                <Button asChild
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 shadow-2xl hover:shadow-primary/50 transition-all"
                  >
                  <a href="#kontakt-formular" className="w-full sm:w-auto">
                    Kostenlose Offerte anfragen
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
              </MagneticHover>
              <AppointmentButton
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-900"
              />
            </motion.div>
            
            {/* KI-Berater erst mit Modell und Zugang (E35), bis dahin keine Handlungsaufforderung dorthin (M31) */}
            {chatEnabled && (
              <motion.div
                className="mt-12 max-w-3xl"
                variants={fadeInUp}
              >
                <IndustryAdvisor />
              </motion.div>
            )}
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
              // Nur bestätigte Angaben (E18, Stand September 2026)
              { icon: Award, label: "Erfahrung in Reinigung und Hauswartung", value: "Seit 2006" },
              { icon: Users, label: "Kunden", value: "Über 120" },
              { icon: Clock, label: "Mitarbeitende, vier Sprachen", value: "Über 50" },
              { icon: Shield, label: "Betriebshaftpflicht", value: "CHF 10 Mio." },
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

      {/* Services Overview with Enhanced Cards */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-red-50/30">
        <div className="container">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Unsere Leistungen
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                Reinigung für besondere Ansprüche sowie Gebäudereinigung und Hauswartung für Unternehmen und Liegenschaften.
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
            {/* Premium (Zielbild v2, M20) */}
            <motion.div variants={fadeInUp}>
              
                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Sparkles className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-primary transition-colors">Premium</h3>
                  <p className="text-slate-600 mb-6">
                    Reinigung für besondere Ansprüche, diskret und in Ihrer Sprache.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Villen, Lofts und Luxusimmobilien", "Privatjets", "Yachten"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <MagneticHover>
                    <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                      <Link href="/premium">
                        Zum Premium-Bereich
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </MagneticHover>
                </Card>
              
            </motion.div>

            {/* Reinigung */}
            <motion.div variants={fadeInUp}>
              
                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Building2 className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-primary transition-colors">Reinigung</h3>
                  <p className="text-slate-600 mb-6">
                    Für Liegenschaften, Büros, Praxen und Gewerbe in Luzern, Zug und Umgebung.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Unterhalts- und Büroreinigung", "Sonder- und Baureinigung", "Fenster und Fassaden", "Industrie und Hallen"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <MagneticHover>
                    <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                      <Link href="/leistungen">
                        Alle Leistungen
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </MagneticHover>
                </Card>
              
            </motion.div>

            {/* Hauswartung und Pflege */}
            <motion.div variants={fadeInUp}>
              
                <Card className="p-10 hover-lift h-full hover-tilt hover-tilt">
                  <Wrench className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 hover:text-primary transition-colors">Hauswartung und Pflege</h3>
                  <p className="text-slate-600 mb-6">
                    Für Verwaltungen, Eigentümer und Unternehmen, die ihre Liegenschaft betreuen lassen.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["Hauswartung", "Aussen- und Grünflächenpflege", "Facility Services"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm md:text-base">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <MagneticHover>
                    <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-white transition-all">
                      <Link href="/leistungen/hauswartung">
                        Zur Hauswartung
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </MagneticHover>
                </Card>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Einzugsgebiet (R4b, W04, R4d) */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Unser Einzugsgebiet
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">
            Von unserem Sitz in {company.address.city} aus arbeiten wir in den Kantonen Luzern, Zug, Aargau,
            Nidwalden und Obwalden. Alle Leistungen bieten wir im ganzen Gebiet an.
          </p>
          <Button asChild size="lg" variant="outline" className="text-sm sm:text-base">
            <Link href="/einzugsgebiet">
              Zum Einzugsgebiet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
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
                <MagneticHover>
                  <Button asChild size="lg" className="text-sm sm:text-base md:text-lg px-8 shadow-2xl">
                    <Link href="/kontakt">
                      Kostenlose Offerte anfragen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </MagneticHover>
                <AppointmentButton
                  size="lg"
                  variant="outline"
                  className="text-sm sm:text-base md:text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-slate-900"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
