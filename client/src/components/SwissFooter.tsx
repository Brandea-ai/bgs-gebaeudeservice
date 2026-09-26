'use client'

import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { company, newBrandActive } from "../../../shared/company";
import { contactForm as form, footer as texts, serviceGroups } from "../../../content/de/navigation";

export default function SwissFooter() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    frequency: "",
    message: "",
    acceptPrivacy: false,
    website: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const fallbackError = form.error;

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

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          frequency: "",
          message: "",
          acceptPrivacy: false,
          website: ""
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setErrorMessage(data?.message || fallbackError);
        setSubmitStatus("error");
      }
    } catch (error) {
      setErrorMessage(fallbackError);
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
    <div id="kontakt-formular" className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Kontaktformular, auf jeder Seite (M04). Ziel aller Offerte-Aktionen. */}
      <section aria-labelledby="kontakt-titel" className="bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10 py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 id="kontakt-titel" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {form.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400">
                {form.intro}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 lg:p-8 border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    {form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder={form.fields.name.placeholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    {form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder={form.fields.email.placeholder}
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    {form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={40}
                    autoComplete="tel"
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder={form.fields.phone.placeholder}
                  />
                </div>

                {/* Service - Gruppiert nach Kategorien */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    {form.fields.service.label}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">{form.choose}</option>
                    {form.serviceOptions.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.options.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Ort des Objekts und Rhythmus helfen bei der Einschätzung der Anfrage (M30, E33) */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    {form.fields.location.label}
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder={form.fields.location.placeholder}
                  />
                </div>

                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    {form.fields.frequency.label}
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">{form.choose}</option>
                    {form.frequencyOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Nachricht */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  {form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={4}
                  className="w-full px-4 py-2.5 lg:py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder={form.fields.message.placeholder}
                />
              </div>

              {/* Honeypot gegen Spam, für Menschen unsichtbar (M07) */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
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
                    className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {form.consentBefore}{" "}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 dark:text-red-400 hover:underline font-medium"
                    >
                      {form.consentLink}
                    </a>{" "}
                    {form.consentAfter}
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {form.required}
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      {form.submit}
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div role="status" className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                  <p className="text-sm text-green-700 dark:text-green-400">
                    ✓ {form.success}
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div role="alert" className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                  <p className="text-sm text-red-700 dark:text-red-400">
                    ✗ {errorMessage || fallbackError}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <footer className="bg-slate-900 text-white">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div>
              {/* Schriftzug bis zum Logo von Brandea (M35, E49). «Eine Marke der …» nur bei
                  eigener Marke, die Arbeitsmarke ist schon der Firmenname (E38). */}
              <div className="mb-6">
                <p className="text-2xl font-bold tracking-tight">{company.brand}</p>
                {newBrandActive && <p className="text-slate-400 text-xs mt-1">{texts.newBrandLine}</p>}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{texts.about}</p>
              <ul className="space-y-1">
                {texts.companyLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-slate-400 hover:text-white transition-smooth text-sm inline-block py-0.5">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-lg mb-4">{group.title}</h3>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="text-slate-400 hover:text-white transition-smooth text-sm inline-block py-0.5">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-semibold text-lg mb-4">{texts.areaTitle}</h3>
              <ul className="space-y-1 mb-6">
                <li>
                  <Link href={texts.areaLink.path} className="text-slate-400 hover:text-white transition-smooth text-sm inline-block py-0.5">{texts.areaLink.label}</Link>
                </li>
                <li className="text-slate-400 text-sm">{company.address.street}, {company.address.postalCode} {company.address.city}</li>
                <li>
                  <a href={company.phone.href} className="text-slate-400 hover:text-white transition-smooth text-sm inline-block py-0.5">{company.phone.display}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <div>
                {/* Jahr wird beim Build eingesetzt, im Browser ggf. aktualisiert (M24, React-Fehler #418) */}
                © <span suppressHydrationWarning>{currentYear}</span> {texts.rights}
              </div>
              <ul className="flex gap-6">
                {texts.legal.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="hover:text-white transition-smooth inline-block py-0.5">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
