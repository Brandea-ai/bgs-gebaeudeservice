'use client'

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { company, newBrandActive } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import LanguageSwitcher from "./LanguageSwitcher";

const fieldClass =
  "block w-full rounded-[0.25rem] border border-input bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-mute/70 transition-colors hover:border-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal/25";
const labelClass = "mb-2 block text-sm font-medium text-ink";

/**
 * Kontaktbereich und Footer (F2). Das Formular steht auf jeder Seite und ist das
 * Ziel aller Offerte-Aktionen (#kontakt-formular, M04, M31). Links die direkten
 * Wege, rechts das Formular.
 */
export default function SwissFooter({ lang = "de", path = "/" }: { lang?: Locale; path?: PagePath }) {
  const { contactForm: form, footer: texts, serviceGroups, languageSwitch, chrome } = navDicts[lang];
  const href = (target: PagePath) => localizePath(target, lang);
  const currentYear = new Date().getFullYear();
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    frequency: "",
    message: "",
    acceptPrivacy: false,
    website: "",
  };
  const [formData, setFormData] = useState(emptyForm);
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, language: lang }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitStatus("success");
        setFormData(emptyForm);
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setErrorMessage(lang === "de" ? data?.message || fallbackError : fallbackError);
        setSubmitStatus("error");
      }
    } catch {
      setErrorMessage(fallbackError);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const channels = [
    { icon: Phone, label: chrome.phone, value: company.phone.display, href: company.phone.href },
    { icon: Mail, label: chrome.email, value: company.email, href: `mailto:${company.email}` },
    {
      icon: MapPin,
      label: chrome.address,
      value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
    },
  ];

  return (
    <div className="border-t border-line">
      {/* Kontaktformular, auf jeder Seite (M04). Ziel aller Offerte-Aktionen. */}
      <section id="kontakt-formular" aria-labelledby="kontakt-titel" className="section bg-stone scroll-mt-[var(--header-h)]">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
              <p className="t-eyebrow text-signal mb-5">{chrome.contactEyebrow}</p>
              <h2 id="kontakt-titel" className="t-h2 text-ink mb-5">
                {form.title}
              </h2>
              <p className="t-lead text-mute mb-10 max-w-[34ch]">{form.intro}</p>

              <dl className="divide-y divide-line border-y border-line">
                {channels.map(({ icon: Icon, label, value, href: link }) => (
                  <div key={label} className="relative py-5 pl-9">
                    <dt className="t-eyebrow mb-1 text-mute">
                      <Icon className="absolute left-0 top-6 h-5 w-5 text-signal" aria-hidden="true" />
                      {label}
                    </dt>
                    <dd className="text-[1.0625rem] text-ink break-words">
                      {link ? (
                        <a href={link} className="font-medium tabular-nums hover:text-signal transition-colors">{value}</a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 flex items-center gap-2 text-sm text-mute">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                {chrome.answer}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative lg:col-span-7 xl:col-span-8 bg-white p-6 sm:p-10 xl:p-14 shadow-[0_1px_0_rgba(14,17,22,0.04),0_40px_80px_-48px_rgba(14,17,22,0.35)]"
          >
            <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>{form.fields.name.label}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required maxLength={100} autoComplete="name" className={fieldClass} placeholder={form.fields.name.placeholder} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>{form.fields.email.label}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required maxLength={254} autoComplete="email" className={fieldClass} placeholder={form.fields.email.placeholder} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>{form.fields.phone.label}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} maxLength={40} autoComplete="tel" className={fieldClass} placeholder={form.fields.phone.placeholder} />
              </div>
              <div>
                <label htmlFor="service" className={labelClass}>{form.fields.service.label}</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className={fieldClass}>
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
                <label htmlFor="location" className={labelClass}>{form.fields.location.label}</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} maxLength={100} autoComplete="postal-code" className={fieldClass} placeholder={form.fields.location.placeholder} />
              </div>
              <div>
                <label htmlFor="frequency" className={labelClass}>{form.fields.frequency.label}</label>
                <select id="frequency" name="frequency" value={formData.frequency} onChange={handleChange} className={fieldClass}>
                  <option value="">{form.choose}</option>
                  {/* Wert auf Deutsch, weil die E-Mail an den Betrieb deutsch ist */}
                  {form.frequencyOptions.map((option, index) => (
                    <option key={option} value={navDicts.de.contactForm.frequencyOptions[index] ?? option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className={labelClass}>{form.fields.message.label}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required maxLength={5000} rows={5} className={`${fieldClass} resize-y min-h-[8rem]`} placeholder={form.fields.message.placeholder} />
              </div>
            </div>

            {/* Honeypot gegen Spam, für Menschen unsichtbar (M07) */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>

            <label className="mt-8 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="acceptPrivacy"
                checked={formData.acceptPrivacy}
                onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                required
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-signal"
              />
              <span className="text-sm leading-relaxed text-mute">
                {form.consentBefore}{" "}
                <a href={href("/datenschutz")} target="_blank" rel="noopener noreferrer" className="link-inline">
                  {form.consentLink}
                </a>{" "}
                {form.consentAfter}
              </span>
            </label>

            <div className="mt-8 flex flex-col-reverse gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-mute">{form.required}</p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="arrow-link inline-flex h-14 items-center justify-center gap-3 rounded-[0.25rem] bg-signal px-8 text-base font-medium text-white transition-colors hover:bg-signal-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
                    {form.sending}
                  </>
                ) : (
                  <>
                    {form.submit}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            {submitStatus === "success" && (
              <div role="status" className="mt-6 flex items-start gap-3 border-l-2 border-emerald-700 bg-emerald-50 p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-800" aria-hidden="true" />
                <p className="text-sm text-emerald-900">{form.success}</p>
              </div>
            )}
            {submitStatus === "error" && (
              <div role="alert" className="mt-6 border-l-2 border-signal bg-signal-light/40 p-4">
                <p className="text-sm text-signal-dark">{errorMessage || fallbackError}</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-ink text-white">
        <div className="container pt-20 pb-12 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              {/* Schriftzug bis zum Logo von Brandea (M35, E49). «Eine Marke der …» nur bei
                  eigener Marke, die Arbeitsmarke ist schon der Firmenname (E38). */}
              <p className="font-display text-[2rem] font-semibold leading-none tracking-[-0.03em]">{company.brand}</p>
              {newBrandActive && <p className="mt-2 text-sm text-white/55">{texts.newBrandLine}</p>}
              <p className="mt-6 max-w-[36ch] leading-relaxed text-white/65">{texts.about}</p>
              <div className="mt-8 space-y-2 text-[0.9875rem]">
                <a href={company.phone.href} className="block font-medium tabular-nums hover:text-brass transition-colors">{company.phone.display}</a>
                <a href={`mailto:${company.email}`} className="block text-white/75 hover:text-white transition-colors">{company.email}</a>
                <p className="text-white/55">
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </p>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="t-eyebrow mb-5 text-white/50">{group.title}</h3>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.path}>
                        <Link href={href(link.path)} className="inline-block py-1.5 text-[0.9375rem] text-white/80 hover:text-white transition-colors">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="t-eyebrow mb-5 text-white/50">{texts.areaTitle}</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href={href(texts.areaLink.path)} className="inline-block py-1.5 text-[0.9375rem] text-white/80 hover:text-white transition-colors">{texts.areaLink.label}</Link>
                  </li>
                  {texts.companyLinks.map((link) => (
                    <li key={link.path}>
                      <Link href={href(link.path)} className="inline-block py-1.5 text-[0.9375rem] text-white/80 hover:text-white transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container flex flex-col gap-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              {/* Jahr wird beim Build eingesetzt, im Browser ggf. aktualisiert (M24, React-Fehler #418) */}
              © <span suppressHydrationWarning>{currentYear}</span> {texts.rights}
            </p>
            <LanguageSwitcher lang={lang} path={path} label={languageSwitch} tone="dark" />
            <ul className="flex gap-6">
              {texts.legal.map((link) => (
                <li key={link.path}>
                  <Link href={href(link.path)} className="inline-flex items-center gap-1 py-1.5 hover:text-white transition-colors">
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
