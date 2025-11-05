'use client'

import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    acceptPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          acceptPrivacy: false
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="kontakt-formular" className="bg-gradient-to-b from-secondary/30 to-secondary/50 border-t border-border">
      {/* Kontaktformular Section */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Jetzt Kontakt aufnehmen
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Fordern Sie ein unverbindliches Angebot an – wir melden uns innerhalb von 24 Stunden
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-lg p-6 lg:p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="ihre@email.de"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Service - Gruppiert nach Kategorien */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Gewünschte Leistung
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">Bitte wählen...</option>
                    
                    <optgroup label="Premium Services">
                      <option value="Privatjet Reinigung">Privatjet Reinigung</option>
                      <option value="Yacht Reinigung">Yacht Reinigung</option>
                      <option value="Private Housekeeping">Private Housekeeping</option>
                      <option value="Luxusimmobilien">Luxusimmobilien</option>
                    </optgroup>
                    
                    <optgroup label="B2B Lösungen">
                      <option value="Büroreinigung">Büroreinigung</option>
                      <option value="Industriereinigung">Industriereinigung</option>
                      <option value="Fassadenreinigung">Fassadenreinigung</option>
                      <option value="Fensterreinigung">Fensterreinigung</option>
                      <option value="Hallenreinigung">Hallenreinigung</option>
                      <option value="Maschinenreinigung">Maschinenreinigung</option>
                      <option value="Baureinigung">Baureinigung</option>
                      <option value="Außenanlagen">Außenanlagen</option>
                      <option value="Facility Management">Facility Management</option>
                    </optgroup>
                    
                    <optgroup label="Business Services">
                      <option value="Business Büroreinigung">Business Büroreinigung</option>
                      <option value="Business Industriereinigung">Business Industriereinigung</option>
                      <option value="Business Fassadenreinigung">Business Fassadenreinigung</option>
                      <option value="Business Fensterreinigung">Business Fensterreinigung</option>
                      <option value="Business Hallenreinigung">Business Hallenreinigung</option>
                      <option value="Business Maschinenreinigung">Business Maschinenreinigung</option>
                      <option value="Business Baureinigung">Business Baureinigung</option>
                      <option value="Business Außenanlagen">Business Außenanlagen</option>
                      <option value="Business Facility Management">Business Facility Management</option>
                    </optgroup>
                    
                    <optgroup label="Basis Services">
                      <option value="Unterhaltsreinigung">Unterhaltsreinigung</option>
                      <option value="Hausmeisterservice">Hausmeisterservice</option>
                      <option value="Winterdienst">Winterdienst</option>
                      <option value="Beschaffung">Beschaffung</option>
                      <option value="Sonderleistungen">Sonderleistungen</option>
                    </optgroup>
                    
                    <optgroup label="Sonstiges">
                      <option value="Beratung">Beratung</option>
                      <option value="Andere">Andere</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Nachricht */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>

              {/* Datenschutz Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                    required
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-2 focus:ring-accent focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Ich habe die{" "}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  * Pflichtfelder
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nachricht senden
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-md">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-md">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    ✗ Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Über BGS */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base sm:text-lg">Über BGS</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Professionelle Gebäudereinigung in der Schweiz. Qualität, Zuverlässigkeit und Präzision seit Jahren.
            </p>
            <img
              src="https://brandea.b-cdn.net/21844b22-60cc-442e-bc3b-bebff31a4053-removebg-preview.png"
              alt="BGS Gebäudeservice Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Premium Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base sm:text-lg">Premium Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/premium/privatjet">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Privatjet Reinigung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/premium/yacht">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Yacht Reinigung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/premium/housekeeping">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Private Housekeeping
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/premium/luxusimmobilien">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Luxusimmobilien
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B Lösungen */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base sm:text-lg">B2B Lösungen</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/b2b/bueroreinigung">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Büroreinigung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/b2b/industriereinigung">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Industriereinigung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/b2b/fassadenreinigung">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Fassadenreinigung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/b2b/facility-management">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Facility Management
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base sm:text-lg">Standorte</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/standorte/zuerich">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Zürich
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/standorte/zug">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Zug
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/standorte/luzern">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Luzern
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <div>
              © {currentYear} BGS Gebäudeservice. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/impressum">
                <a className="hover:text-accent transition-smooth">Impressum</a>
              </Link>
              <Link href="/datenschutz">
                <a className="hover:text-accent transition-smooth">Datenschutz</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
