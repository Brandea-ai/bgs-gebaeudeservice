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
import GoogleMap from "@/components/GoogleMap";

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
          message: data.message || "Vielen Dank für Ihre Nachricht! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
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
        title="Kontakt - Swiss Reinigungsfirma | Jetzt Angebot anfordern"
        description="Kontaktieren Sie die Swiss Reinigungsfirma für ein individuelles Angebot. Wir sind für Sie da - per Telefon, E-Mail oder über unser Kontaktformular."
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
            Wir freuen uns auf Ihre Anfrage und melden uns innerhalb von 24 Stunden bei Ihnen zurück.
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
              <a href="tel:+41413205610" className="text-primary font-semibold hover:underline">
                +41 41 320 56 10
              </a>
            </Card>

            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">E-Mail</h3>
              <p className="text-slate-600 mb-4">Schreiben Sie uns eine Nachricht</p>
              <a href="mailto:info@bgs-service.ch" className="text-primary font-semibold hover:underline">
                info@bgs-service.ch
              </a>
            </Card>

            <Card className="p-8 hover-lift text-center hover:shadow-xl transition-shadow hover-tilt hover-tilt">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Adresse</h3>
              <p className="text-slate-600 mb-4">Besuchen Sie uns vor Ort</p>
              <p className="text-slate-900 font-semibold">
                Tannhof 10<br />
                6020 Emmenbrücke
              </p>
            </Card>
          </div>

          {/* Standort-Karte */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
              Unsere Standorte
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <GoogleMap
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}
                center={{ lat: 47.0502, lng: 8.3093 }}
                zoom={10}
                markers={[
                  {
                    position: { lat: 47.0502, lng: 8.3093 },
                    title: "Hauptsitz Emmenbrücke",
                    info: "Swiss Reinigungsfirma<br/>Tannhof 10<br/>6020 Emmenbrücke"
                  },
                  {
                    position: { lat: 47.3769, lng: 8.5417 },
                    title: "Standort Zürich",
                    info: "Professionelle Gebäudereinigung in Zürich"
                  },
                  {
                    position: { lat: 47.1667, lng: 8.5167 },
                    title: "Standort Zug",
                    info: "Professionelle Gebäudereinigung in Zug"
                  },
                  {
                    position: { lat: 47.0502, lng: 8.3093 },
                    title: "Standort Luzern",
                    info: "Professionelle Gebäudereinigung in Luzern"
                  }
                ]}
                className="w-full h-[500px]"
              />
            </div>
            <p className="text-center text-slate-600 mt-4">
              Zentral gelegen in der Zentralschweiz - schnell erreichbar aus Luzern, Zug und Zürich
            </p>
          </div>

          {/* Kontaktformular - Im Footer */}
          <div className="max-w-3xl mx-auto text-center py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nutzen Sie unser Kontaktformular im Footer und fordern Sie ein unverbindliches Angebot an. Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
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
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück und erstellen ein individuelles, auf Ihre Bedürfnisse zugeschnittenes Angebot.
              </p>
            </Card>

            <Card className="p-6 hover-lift hover-tilt hover-tilt">
              <h3 className="font-bold text-lg mb-2">In welchen Regionen sind Sie tätig?</h3>
              <p className="text-slate-600">
                Wir sind in der gesamten Zentralschweiz tätig, mit Schwerpunkt auf Luzern, Zug und Zürich. Für andere Regionen kontaktieren Sie uns bitte direkt.
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
                Selbstverständlich! Wir sind 24/7 für Sie erreichbar und können bei Bedarf auch kurzfristig Reinigungseinsätze durchführen.
              </p>
            </Card>
          </div>
        </div>
      </section>


      <SwissFooter />
    </div>
  );
}
