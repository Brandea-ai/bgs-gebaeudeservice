'use client'
import { motion } from "framer-motion";
import { ParallaxImage, ParallaxBackground, RevealOnScroll, TiltCard, MagneticHover, ZoomOnScroll } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Users, Award, Heart, CheckCircle2 } from "lucide-react";
import { company } from "../../shared/company";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Reinigung und Hauswartung aus {company.address.city}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Seit 2006 sind wir in der Reinigung und Hauswartung tätig. Heute betreuen über 50 Mitarbeitende mehr als 120 Kunden in den Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden, auf Deutsch, Englisch, Französisch und Italienisch.
              </p>
              <MagneticHover>
                <Button asChild size="lg" className="text-lg"><Link href="/kontakt">
                  Kostenlose Offerte anfragen <ArrowRight className="ml-2 w-5 h-5" />
                </Link></Button>
              </MagneticHover>
            </div>
            <div className="relative">
              <ParallaxImage 
                src="/ueber-uns-hero.jpg" 
                alt="Symbolbild Reinigung"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover h-[400px] lg:h-[500px]"
                speed={0.2}
                scale={true}
                overlay={true}
                overlayOpacity={0.1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Werte Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <RevealOnScroll><div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Unsere Werte: Das Fundament unseres Erfolgs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Qualität, Zuverlässigkeit und Kundennähe sind für uns nicht nur Worte, sondern die Grundpfeiler unserer täglichen Arbeit. Sie sind das Versprechen, das wir jedem einzelnen Kunden geben.
            </p>
          </div></RevealOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Qualität</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir arbeiten sorgfältig und mit geeigneten Materialien und Geräten, abgestimmt auf Ihr Objekt.
              </p>
            </Card>
            
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Zuverlässigkeit</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Pünktlichkeit, Diskretion und ein fester Ansprechpartner sind für uns selbstverständlich. Sie können sich darauf verlassen, dass wir unsere Zusagen einhalten – immer.
              </p>
            </Card>
            
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Kundennähe</h3>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base">
                Wir hören Ihnen zu und entwickeln individuelle Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind. Ihre Zufriedenheit ist unser größter Ansporn.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ansprechperson und Registerdaten (R5d, N033, M47) */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Ihre Ansprechperson</h2>
              <p className="text-slate-700 leading-relaxed">
                Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Wir melden uns {company.responseTime}.
              </p>
            </Card>
            <Card className="p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Registerdaten</h2>
              <p className="text-slate-700 leading-relaxed">
                {company.legalName}
                <br />
                Handelsregister des Kantons Luzern
                <br />
                UID {company.uid}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Bereit für eine saubere Zukunft?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Lassen Sie uns gemeinsam für eine saubere und professionelle Umgebung sorgen. Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch und ein individuelles Angebot.
          </p>
          <MagneticHover>
            <Button asChild size="lg" variant="secondary" className="text-lg"><Link href="/kontakt">
              Kostenlose Offerte anfragen <ArrowRight className="ml-2 w-5 h-5" />
            </Link></Button>
          </MagneticHover>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
