'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxImage, ParallaxBackground, RevealOnScroll, TiltCard, MagneticHover, ZoomOnScroll } from "@/components/PremiumParallax";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import ConsentMap from "@/components/ConsentMap";
import { company } from "../../shared/company";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const scrollToForm = () => {
    // Scroll to footer contact form
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || `Vielen Dank für Ihre Nachricht! Wir melden uns ${company.responseTime}.`,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Kontakt - BGS Gebäudeservice | Jetzt Angebot anfordern"
        description="Kontaktieren Sie die BGS Gebäudeservice für ein individuelles Angebot. Wir sind für Sie da - per Telefon, E-Mail oder über unser Kontaktformular."
        keywords="Kontakt, Angebot, Reinigungsfirma Schweiz, Anfrage, Beratung"
        url="/kontakt"
      />
      <SwissNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Kontaktieren Sie uns
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wir freuen uns auf Ihre Anfrage und melden uns {company.responseTime}.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Zum Kontaktformular
          </button>
        </div>
      </section>

      {/* Kontaktoptionen */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Telefon</h3>
              <p className="text-slate-600 mb-4">Rufen Sie uns an - wir beraten Sie gerne</p>
              <a href={company.phone.href} className="text-primary font-semibold hover:underline">
                {company.phone.display}
              </a>
            </Card>

            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">E-Mail</h3>
              <p className="text-slate-600 mb-4">Schreiben Sie uns eine Nachricht</p>
              <a href={`mailto:${company.email}`} className="text-primary font-semibold hover:underline">
                {company.email}
              </a>
            </Card>

            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Adresse</h3>
              <p className="text-slate-600 mb-4">Unser Sitz</p>
              <p className="text-slate-900 font-semibold">
                {company.address.street}<br />
                {company.address.postalCode} {company.address.city}
              </p>
            </Card>
          </div>

          {/* Standort-Karte */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
              So finden Sie uns
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ConsentMap />
            </div>
            <p className="text-center text-slate-600 mt-4">
              Sitz in {company.address.city}. Wir arbeiten in den Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden.
            </p>
          </div>

          {/* Kontaktformular - Im Footer */}
          <div className="max-w-3xl mx-auto text-center py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nutzen Sie unser Kontaktformular im Footer und fordern Sie ein unverbindliches Angebot an. Wir melden uns {company.responseTime}.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Zum Kontaktformular
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            Häufig gestellte Fragen
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6 hover-lift hover-tilt hover-tilt">
              <h3 className="font-bold text-lg mb-2">Wie schnell erhalte ich ein Angebot?</h3>
              <p className="text-slate-600">
                Wir melden uns {company.responseTime} und erstellen ein individuelles, auf Ihre Bedürfnisse zugeschnittenes Angebot.
              </p>
            </Card>

            <Card className="p-6 hover-lift hover-tilt hover-tilt">
              <h3 className="font-bold text-lg mb-2">In welchen Regionen sind Sie tätig?</h3>
              <p className="text-slate-600">
                In den Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden, mit allen Leistungen im ganzen Gebiet.
              </p>
            </Card>

            <Card className="p-6 hover-lift hover-tilt hover-tilt">
              <h3 className="font-bold text-lg mb-2">Sind Sie versichert?</h3>
              <p className="text-slate-600">
                Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung. Ihre Immobilie ist bei uns in sicheren Händen.
              </p>
            </Card>

            <Card className="p-6 hover-lift hover-tilt hover-tilt">
              <h3 className="font-bold text-lg mb-2">Bieten Sie auch Notfallreinigungen an?</h3>
              <p className="text-slate-600">
                Rufen Sie uns an. Wir klären mit Ihnen, was kurzfristig möglich ist.
              </p>
            </Card>
          </div>
        </div>
      </section>


      <SwissFooter />
    </div>
  );
}
