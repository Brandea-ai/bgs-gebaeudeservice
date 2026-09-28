"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  CircleNotch,
  Clock,
  DeviceMobile,
  Envelope,
  FileText,
  MapPin,
  Phone,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import { useRef, useState } from "react";
import { company, newBrandActive } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import { detailImage, heroImage } from "../../../shared/hero-images";
import type { ImageKey } from "../../../shared/images";
import { faqImage, sceneImage } from "../../../shared/scene-images";
import ImageSlot from "./ImageSlot";
import LanguageSwitcher from "./LanguageSwitcher";
import { premiumLightLink } from "./premiumStyles";

const fieldClass =
  "field block w-full rounded-[3px] border border-input bg-white px-4 py-3 text-[1rem] text-ink placeholder:font-normal placeholder:text-[#6B717A] transition-colors hover:border-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/80 focus:ring-offset-1 aria-[invalid=true]:border-signal";
const labelClass = "mb-2 block text-sm font-medium text-ink";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Leistung im Formular vorwählen, wenn die Anfrage von einer Leistungsseite kommt (E33) */
const serviceForPath: Partial<Record<PagePath, string>> = {
  "/leistungen/unterhaltsreinigung": "Unterhaltsreinigung",
  "/leistungen/bueroreinigung": "Büroreinigung",
  "/leistungen/sonderreinigungen": "Sonderreinigungen",
  "/leistungen/umzugsreinigung": "Umzugsreinigung",
  "/leistungen/baureinigung": "Baureinigung",
  "/leistungen/fenster-und-fassadenreinigung": "Fenster- und Fassadenreinigung",
  "/leistungen/industrie-und-hallenreinigung": "Industrie- und Hallenreinigung",
  "/leistungen/hauswartung": "Hauswartung",
  "/leistungen/aussen-und-gruenflaechenpflege": "Aussen- und Grünflächenpflege",
  "/leistungen/facility-services": "Facility Services",
  "/premium/luxusimmobilien": "Luxusimmobilien",
  "/premium/privatjet": "Privatjet-Reinigung",
  "/premium/yacht": "Yacht-Reinigung",
};

type FieldName = "name" | "email" | "message" | "acceptPrivacy";

/** Bild im Kontaktbereich (E82). Steht es schon im Register der Seite, bleibt es hier weg (E85, P6). */
const contactImage: ImageKey = "detail-facility-services";
const imageOnPage = (path: PagePath) =>
  [heroImage[path], detailImage[path], sceneImage[path], faqImage[path]].includes(contactImage);

/**
 * Kontaktbereich und Footer (F2, F14). Das Formular steht auf jeder Seite und
 * ist das Ziel aller Offerte-Aktionen (#kontakt-formular, M04, M31).
 */
export default function SwissFooter({
  lang = "de",
  path = "/",
}: {
  lang?: Locale;
  path?: PagePath;
}) {
  return (
    <>
      <ContactSection lang={lang} path={path} />
      <SiteFooter lang={lang} path={path} />
    </>
  );
}

/**
 * Kontaktbereich mit Formular, Ziel aller Offerte-Aktionen (#kontakt-formular).
 * heading: Titel und Einleitung der Seite (cta), sonst die allgemeinen Texte.
 * Auf Premium-Seiten (/premium…) in der hellen Premium-Welt: Elfenbein,
 * Serifentitel, Champagner statt Signalrot, ohne das Standardbild (E85). Die
 * Antwortzeit nennen dort Einleitung und «So geht es weiter» (F8). Das Bild
 * fehlt auch, wo es schon an anderer Stelle der Seite steht (P6).
 * Eigene Prüfung in der Seitensprache mit Hinweis am Feld (aria-invalid,
 * aria-describedby), Erfolg bleibt stehen und bekommt den Fokus.
 */
export function ContactSection({
  lang = "de",
  path = "/",
  heading,
}: {
  lang?: Locale;
  path?: PagePath;
  heading?: { title: string; text: string };
}) {
  const { contactForm: form, chrome } = navDicts[lang];
  const href = (target: PagePath) => localizePath(target, lang);
  const premium = path.startsWith("/premium");
  const accent = premium ? "text-brass-dark" : "text-signal";
  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    service: serviceForPath[path] ?? "",
    location: "",
    frequency: "",
    message: "",
    acceptPrivacy: false,
    website: "",
  };
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const fallbackError = form.error;

  const check = (data: typeof formData): Partial<Record<FieldName, string>> => {
    const found: Partial<Record<FieldName, string>> = {};
    if (!data.name.trim()) found.name = form.errors.required;
    if (!data.email.trim()) found.email = form.errors.required;
    else if (!EMAIL_REGEX.test(data.email.trim())) found.email = form.errors.email;
    if (!data.message.trim()) found.message = form.errors.required;
    if (!data.acceptPrivacy) found.acceptPrivacy = form.errors.consent;
    return found;
  };

  const focusStatus = () =>
    requestAnimationFrame(() => statusRef.current?.focus());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const found = check(formData);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = (Object.keys(found) as FieldName[])[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
      return;
    }
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
      } else {
        setErrorMessage(
          lang === "de" ? data?.message || fallbackError : fallbackError
        );
        setSubmitStatus("error");
      }
    } catch {
      setErrorMessage(fallbackError);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      focusStatus();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const next = { ...formData, [e.target.name]: e.target.value };
    setFormData(next);
    // Ein gemeldeter Fehler verschwindet, sobald die Eingabe stimmt
    if (e.target.name in errors) {
      const found = check(next);
      setErrors(prev => {
        const copy = { ...prev };
        const key = e.target.name as FieldName;
        if (!found[key]) delete copy[key];
        return copy;
      });
    }
  };

  const hint = (name: FieldName) =>
    errors[name] ? (
      <p id={`${name}-hinweis`} className="mt-2 text-sm font-medium text-signal-dark">
        {errors[name]}
      </p>
    ) : null;
  const invalid = (name: FieldName) =>
    errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": `${name}-hinweis` }
      : {};

  const channels = [
    {
      icon: Phone,
      label: chrome.phone,
      value: company.phone.display,
      href: company.phone.href,
    },
    {
      icon: DeviceMobile,
      label: chrome.mobile,
      value: company.mobile.display,
      href: company.mobile.href,
    },
    {
      icon: Envelope,
      label: chrome.email,
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      label: chrome.address,
      value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
    },
    {
      icon: Clock,
      label: chrome.hours,
      value: chrome.hoursValue,
    },
  ];

  const title = heading?.title ?? form.title;
  const intro = heading?.text ?? form.intro;

  return (
    <div className="border-t border-line">
      {/* Kontaktformular, auf jeder Seite (M04). Ziel aller Offerte-Aktionen. */}
      <section
        id="kontakt-formular"
        aria-labelledby="kontakt-titel"
        className={`section ${premium ? "bg-ivory text-anthracite" : "bg-stone"}`}
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
          <div className="lg:col-span-5 xl:col-span-4">
            <p className={`t-eyebrow mb-5 ${premium ? "text-brass-dark" : "text-signal"}`}>{chrome.contactEyebrow}</p>
            <h2
              id="kontakt-titel"
              className={
                premium
                  ? "font-premium text-[clamp(2.1rem,1.4rem+2.4vw,3.5rem)] font-semibold leading-[1.06] text-anthracite"
                  : "t-h2 text-ink"
              }
            >
              {title}
            </h2>
            <p className={`t-lead mt-5 max-w-[36ch] ${premium ? "text-anthracite" : "text-ink"}`}>{intro}</p>
            {!premium && !imageOnPage(path) && (
            /* Bild mit Antwortzeit (E82): die Besichtigung ist der erste echte Kontakt */
            <div className="relative mt-8 overflow-hidden rounded-[3px]">
              <ImageSlot
                image={contactImage}
                lang={lang}
                decorative
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="aspect-[16/10] w-full"
              />
              <p className="glass-dark on-dark absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-[3px] px-4 py-3 text-[0.9375rem] font-semibold text-white">
                <CheckCircle weight="duotone" className="size-6 shrink-0 text-white" aria-hidden="true" />
                {chrome.answer}
              </p>
            </div>
            )}
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 xl:col-span-8 xl:col-start-5">
            {submitStatus === "success" ? (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                className="flex items-start gap-4 rounded-[3px] border border-emerald-700/40 bg-white p-6 shadow-[0_1px_0_rgba(14,17,22,0.04),0_40px_80px_-48px_rgba(14,17,22,0.35)] sm:p-10 focus:outline-none"
              >
                <CheckCircle
                  weight="duotone"
                  className="mt-0.5 size-6 shrink-0 text-emerald-800"
                  aria-hidden="true"
                />
                <div>
                  <p className="t-h3 text-ink">{form.successTitle}</p>
                  <p className="mt-3 max-w-[60ch] font-medium leading-relaxed text-ink-600">
                    {form.success}
                  </p>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className={`relative rounded-[3px] border bg-white p-6 sm:p-10 xl:p-14 ${
                  premium
                    ? "border-brass-dark/25 shadow-[0_1px_0_rgba(125,98,49,0.08),0_40px_80px_-48px_rgba(90,68,30,0.4)]"
                    : "border-line shadow-[0_1px_0_rgba(14,17,22,0.04),0_40px_80px_-48px_rgba(14,17,22,0.35)]"
                }`}
              >
                <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
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
                      className={fieldClass}
                      placeholder={form.fields.name.placeholder}
                      {...invalid("name")}
                    />
                    {hint("name")}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
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
                      className={fieldClass}
                      placeholder={form.fields.email.placeholder}
                      {...invalid("email")}
                    />
                    {hint("email")}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
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
                      className={fieldClass}
                      placeholder={form.fields.phone.placeholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      {form.fields.service.label}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${fieldClass} field-select`}
                    >
                      <option value="">{form.choose}</option>
                      {form.serviceOptions.map(group => (
                        <optgroup key={group.group} label={group.group}>
                          {group.options.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  {/* Ort des Objekts und Rhythmus helfen bei der Einschätzung der Anfrage (M30, E33) */}
                  <div>
                    <label htmlFor="location" className={labelClass}>
                      {form.fields.location.label}
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      maxLength={100}
                      autoComplete="postal-code"
                      className={fieldClass}
                      placeholder={form.fields.location.placeholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="frequency" className={labelClass}>
                      {form.fields.frequency.label}
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className={`${fieldClass} field-select`}
                    >
                      <option value="">{form.choose}</option>
                      {/* Wert auf Deutsch, weil die E-Mail an den Betrieb deutsch ist */}
                      {form.frequencyOptions.map((option, index) => (
                        <option
                          key={option}
                          value={
                            navDicts.de.contactForm.frequencyOptions[index] ??
                            option
                          }
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      {form.fields.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={5000}
                      rows={5}
                      className={`${fieldClass} min-h-[8rem] resize-y`}
                      placeholder={form.fields.message.placeholder}
                      {...invalid("message")}
                    />
                    {hint("message")}
                  </div>
                </div>

                {/* Honeypot gegen Spam, für Menschen unsichtbar (M07) */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
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

                <div className="mt-8">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={e => {
                        const next = { ...formData, acceptPrivacy: e.target.checked };
                        setFormData(next);
                        if (e.target.checked)
                          setErrors(prev => {
                            const copy = { ...prev };
                            delete copy.acceptPrivacy;
                            return copy;
                          });
                      }}
                      required
                      className={`mt-0.5 h-6 w-6 shrink-0 cursor-pointer ${premium ? "accent-anthracite" : "accent-signal"}`}
                      {...invalid("acceptPrivacy")}
                    />
                    <span className="text-sm leading-relaxed text-mute">
                      {form.consentBefore}{" "}
                      <a
                        href={href("/datenschutz")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={premium ? premiumLightLink : "link-inline"}
                      >
                        {form.consentLink}
                      </a>{" "}
                      {form.consentAfter}
                    </span>
                  </label>
                  {hint("acceptPrivacy")}
                </div>

                <div className="mt-8 flex flex-col-reverse gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-mute">{form.required}</p>
                  <button
                    type="submit"
                    aria-disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className={`press arrow-link inline-flex h-14 items-center justify-center gap-3 rounded-[3px] px-8 text-base font-semibold text-white transition-colors aria-disabled:opacity-70 ${
                      premium ? "bg-anthracite hover:bg-anthracite-700" : "bg-signal hover:bg-signal-dark"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <CircleNotch
                          weight="duotone"
                          className="motion-keep size-4 animate-spin"
                          aria-hidden="true"
                        />
                        {form.sending}
                      </>
                    ) : (
                      <>
                        {form.submit}
                        <ArrowRight weight="duotone" className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>

                {Object.keys(errors).length > 0 && (
                  <p className="mt-4 text-sm font-medium text-signal-dark" role="alert">
                    {form.errors.summary}
                  </p>
                )}
                {submitStatus === "error" && (
                  <div
                    ref={statusRef}
                    tabIndex={-1}
                    role="alert"
                    className="mt-6 rounded-[3px] border border-signal/40 bg-signal-light/40 p-4 focus:outline-none"
                  >
                    <p className="text-sm font-medium text-signal-dark">
                      {errorMessage || fallbackError}
                    </p>
                  </div>
                )}
                <noscript>
                  <p className="mt-6 text-sm text-mute">
                    {chrome.phone}: {company.phone.display} · {chrome.email}:{" "}
                    {company.email}
                  </p>
                </noscript>
              </form>
            )}
          </div>

          <div className="grid content-start gap-8 lg:col-span-5 lg:col-start-1 xl:col-span-4">
            {/* Kontaktwege als Kacheln, kräftig und gross (E82) */}
            <dl className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href: link }) => (
                <div
                  key={label}
                  className={`relative rounded-[3px] border bg-white p-5 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(14,17,22,0.35)] ${premium ? "border-brass-dark/20" : "border-line"} ${link?.startsWith("tel:") ? "" : "sm:col-span-2"}`}
                >
                  <dt className="flex items-center gap-2.5 text-sm font-semibold text-mute">
                    <Icon weight="duotone" className={`size-6 ${accent}`} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className={`mt-2 break-words text-[1.125rem] font-bold ${premium ? "text-anthracite" : "text-ink"}`}>
                    {link ? (
                      <a
                        href={link}
                        className={`tabular-nums transition-colors after:absolute after:inset-0 ${premium ? "hover:text-brass-dark" : "hover:text-signal"}`}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            {/* So geht es weiter: drei Schritte mit Symbolen, ohne Ziffern (E80) */}
            <div>
              <p className={premium ? "font-premium text-[1.625rem] font-semibold leading-tight text-anthracite" : "font-display text-lg font-bold text-ink"}>
                {form.nextTitle}
              </p>
              <ul className="mt-4 grid gap-3">
                {form.nextSteps.map((step, index) => {
                  const StepIcon = [PhoneCall, MapPin, FileText][index] ?? CheckCircle;
                  return (
                    <li key={step} className={`flex items-start gap-3 font-semibold leading-relaxed ${premium ? "text-anthracite" : "text-ink"}`}>
                      <StepIcon weight="duotone" className={`mt-0.5 size-6 shrink-0 ${accent}`} aria-hidden="true" />
                      {step}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Footer mit Leistungsgruppen, Firmenangaben und Sprachen. Liegt auf grossen Bildschirmen unter dem Inhalt (Stapel-Effekt, F7). */
export function SiteFooter({
  lang = "de",
  path = "/",
}: {
  lang?: Locale;
  path?: PagePath;
}) {
  const { footer: texts, serviceGroups, languageSwitchFooter } = navDicts[lang];
  const href = (target: PagePath) => localizePath(target, lang);
  const currentYear = new Date().getFullYear();
  const footLink =
    "inline-flex min-h-8 items-center py-1 text-[0.9375rem] text-white/90 transition-colors hover:text-white";
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="container pb-12 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            {/* Schriftzug bis zum Logo von Brandea (M35, E49). «Eine Marke der …» nur bei
                  eigener Marke, die Arbeitsmarke ist schon der Firmenname (E38). */}
            <p className="font-display text-[2rem] font-semibold leading-none tracking-[-0.03em]">
              {company.brand}
            </p>
            {newBrandActive && (
              <p className="mt-2 text-sm text-white/90">{texts.newBrandLine}</p>
            )}
            <p className="mt-6 max-w-[38ch] leading-relaxed text-white/90">
              {texts.about}
            </p>
            <div className="mt-6 text-[0.9875rem]">
              <a
                href={company.phone.href}
                className="inline-flex min-h-11 items-center font-medium tabular-nums transition-colors hover:text-brass"
              >
                {company.phone.display}
              </a>
              <br />
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-11 items-center text-white/90 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                {company.email}
              </a>
              <p className="mt-2 text-white/90">
                {company.address.street}, {company.address.postalCode}{" "}
                {company.address.city}
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {serviceGroups.map(group => (
              <div key={group.title}>
                <h3 className="t-eyebrow mb-4 text-white/90">{group.title}</h3>
                <ul>
                  {group.links.map(link => (
                    <li key={link.path}>
                      <Link href={href(link.path)} prefetch={false} className={footLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="t-eyebrow mb-4 text-white/90">{texts.areaTitle}</h3>
              <ul>
                {texts.companyLinks.map(link => (
                  <li key={link.path}>
                    <Link href={href(link.path)} prefetch={false} className={footLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={href(texts.areaLink.path)}
                    prefetch={false}
                    className={footLink}
                  >
                    {texts.areaLink.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm text-white/90 md:flex-row md:items-center md:justify-between">
          <p>
            {/* Jahr wird beim Build eingesetzt, im Browser ggf. aktualisiert (M24, React-Fehler #418) */}
            © <span suppressHydrationWarning>{currentYear}</span>{" "}
            {texts.rights}
          </p>
          <LanguageSwitcher
            lang={lang}
            path={path}
            label={languageSwitchFooter}
            tone="dark"
            as="div"
          />
          <ul className="flex gap-6">
            {texts.legal.map(link => (
              <li key={link.path}>
                <Link
                  href={href(link.path)}
                  prefetch={false}
                  className="inline-flex min-h-8 items-center py-1.5 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
