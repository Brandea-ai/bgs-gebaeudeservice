"use client";

import { ArrowRight, CheckCircle, CircleNotch } from "@phosphor-icons/react/dist/ssr";
import { useRef, useState } from "react";
import { company } from "../../../shared/company";
import { CONTACT_LIMITS, CONTACT_ROLES, EMAIL_REGEX, isContactRole } from "../../../shared/contact-form";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import { premiumLightLink } from "./premiumStyles";

const fieldClass =
  "field block w-full rounded-[3px] border border-input bg-white px-4 py-3 text-[1rem] text-ink placeholder:font-normal placeholder:text-[#6B717A] transition-colors hover:border-ink/40 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/80 focus:ring-offset-1 aria-[invalid=true]:border-signal";
const labelClass = "mb-2 block text-sm font-medium text-ink";

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

/** Pflichtfelder in der sichtbaren Reihenfolge: der erste Fehler bekommt den Fokus */
type FieldName = "role" | "message" | "name" | "email" | "acceptPrivacy";

/**
 * Anfrageformular des Kontaktbereichs (M04, M07, M30, Audit Inhalt Massnahme 3).
 * Zuerst das Objekt (Sie sind, Leistung, Grösse, Ort, Rhythmus, Anliegen),
 * dann die Kontaktdaten. «Sie sind» ist eine Optionsgruppe: fünf sichtbare
 * Möglichkeiten, mit Tab und Pfeiltasten bedienbar, und sie zeigt gleich, für
 * wen das Angebot gedacht ist (E28, E34). Auf Premium-Seiten eigene
 * Beispiele in Grösse und Anliegen statt Wohnungen und Büros.
 * Eigene Prüfung in der Seitensprache mit Hinweis am Feld (aria-invalid,
 * aria-describedby); der erste Fehler bekommt den Fokus, der Erfolg bleibt
 * stehen und bekommt den Fokus.
 */
export default function ContactForm({
  lang = "de",
  path = "/",
}: {
  lang?: Locale;
  path?: PagePath;
}) {
  const { contactForm: form, chrome } = navDicts[lang];
  const premium = path.startsWith("/premium");
  const emptyForm = {
    role: "",
    name: "",
    email: "",
    phone: "",
    service: serviceForPath[path] ?? "",
    size: "",
    location: "",
    frequency: "",
    message: "",
    acceptPrivacy: false,
    website: "",
  };
  const [formData, setFormData] = useState(emptyForm);
  // Beispiele und Rhythmus folgen auch einer geänderten Leistungsauswahl.
  const examplePath = Object.entries(serviceForPath).find(([, service]) => service === formData.service)?.[0]
    ?? (formData.service ? "" : path);
  const premiumExamples = examplePath.startsWith("/premium")
    ? form.premiumPlaceholders[examplePath as keyof typeof form.premiumPlaceholders] ?? form.premiumPlaceholders["/premium"]
    : null;
  const oneOffExamples = form.oneOffPlaceholders[formData.service as keyof typeof form.oneOffPlaceholders];
  const requestExamples = oneOffExamples ?? premiumExamples;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const fallbackError = form.error;

  const check = (data: typeof formData): Partial<Record<FieldName, string>> => {
    const found: Partial<Record<FieldName, string>> = {};
    if (!isContactRole(data.role)) found.role = form.errors.role;
    if (!data.message.trim()) found.message = form.errors.required;
    if (!data.name.trim()) found.name = form.errors.required;
    if (!data.email.trim()) found.email = form.errors.required;
    else if (!EMAIL_REGEX.test(data.email.trim())) found.email = form.errors.email;
    if (!data.acceptPrivacy) found.acceptPrivacy = form.errors.consent;
    return found;
  };

  const focusStatus = () => requestAnimationFrame(() => statusRef.current?.focus());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const found = check(formData);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = (Object.keys(found) as FieldName[])[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
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
        setErrorMessage(lang === "de" ? data?.message || fallbackError : fallbackError);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const next = { ...formData, [e.target.name]: e.target.value };
    if (e.target.name === "service" && (oneOffExamples || e.target.value in form.oneOffPlaceholders)) {
      next.frequency = "";
    }
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

  const hintId = (name: FieldName) => `${name}-hinweis`;
  const hint = (name: FieldName) =>
    errors[name] ? (
      <p id={hintId(name)} className="mt-2 text-sm font-medium text-signal-dark">
        {errors[name]}
      </p>
    ) : null;
  const invalid = (name: FieldName) =>
    errors[name] ? { "aria-invalid": true as const, "aria-describedby": hintId(name) } : {};

  if (submitStatus === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex items-start gap-4 rounded-[3px] border border-emerald-700/40 bg-white p-6 sm:p-10 focus:outline-none"
      >
        <CheckCircle weight="duotone" className="mt-0.5 size-6 shrink-0 text-emerald-800" aria-hidden="true" />
        <div>
          <p className="t-h3 text-ink">{form.successTitle}</p>
          <p className="mt-3 max-w-[60ch] font-medium leading-relaxed text-ink-600">{form.success}</p>
        </div>
      </div>
    );
  }

  const chip = `inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-[3px] border bg-white px-4 py-2.5 text-[0.9375rem] font-medium leading-snug text-ink transition-colors hover:border-ink/40 ${
    errors.role ? "border-signal" : "border-input"
  } ${premium ? "has-[:checked]:border-anthracite has-[:checked]:bg-ivory" : "has-[:checked]:border-ink has-[:checked]:bg-stone"}`;
  const messageHintId = "nachricht-unterlagen";

  return (
    // lg:h-full: Ist die Randspalte daneben länger, reicht die Karte bis zu ihrem Ende (gleich hohe Spalten, kein Loch)
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className={`relative rounded-[3px] border bg-white p-6 sm:p-10 lg:h-full xl:p-12 ${
        premium ? "border-brass-dark/25" : "border-line"
      }`}
    >
      {/* Von 1024 bis 1279 px steht die Karte in der schmalen Spalte neben der Randspalte: eine Spalte, sonst passen die Beispiele nicht ins Feld */}
      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2 lg:max-xl:grid-cols-1">
        {/* Sie sind: Pflicht, ordnet die Anfrage ein (E33, E34) */}
        <fieldset className="min-w-0 md:col-span-2 lg:max-xl:col-span-1">
          <legend className={labelClass}>{form.fields.role.label}</legend>
          <div className="flex flex-wrap gap-2.5">
            {CONTACT_ROLES.map(value => (
              <label key={value} className={chip}>
                <input
                  type="radio"
                  name="role"
                  value={value}
                  checked={formData.role === value}
                  onChange={handleChange}
                  required
                  className={`size-5 shrink-0 cursor-pointer ${premium ? "accent-anthracite" : "accent-signal"}`}
                  {...invalid("role")}
                />
                {form.roleOptions[value]}
              </label>
            ))}
          </div>
          {hint("role")}
        </fieldset>

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
        {/* Grösse: Fläche, Wohnungen oder Liegenschaften, freiwillig (E33) */}
        <div>
          <label htmlFor="size" className={labelClass}>
            {form.fields.size.label}
          </label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            maxLength={CONTACT_LIMITS.size}
            autoComplete="off"
            className={fieldClass}
            placeholder={requestExamples?.size ?? form.fields.size.placeholder}
          />
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
            maxLength={CONTACT_LIMITS.location}
            autoComplete="postal-code"
            className={fieldClass}
            placeholder={form.fields.location.placeholder}
          />
        </div>
        {oneOffExamples ? (
          <div>
            <p className={labelClass}>{form.oneOffTitle}</p>
            <p className="text-sm font-medium leading-relaxed text-mute">{form.oneOffHint}</p>
          </div>
        ) : <div>
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
              <option key={option} value={navDicts.de.contactForm.frequencyOptions[index] ?? option}>
                {option}
              </option>
            ))}
          </select>
        </div>}
        <div className="md:col-span-2 lg:max-xl:col-span-1">
          <label htmlFor="message" className={labelClass}>
            {form.fields.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={CONTACT_LIMITS.message}
            rows={5}
            className={`${fieldClass} min-h-[8rem] resize-y`}
            placeholder={requestExamples?.message ?? form.fields.message.placeholder}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${hintId("message")} ${messageHintId}` : messageHintId}
          />
          {hint("message")}
          {/* Unterlagen gehen per E-Mail, das Formular nimmt keine Dateien an (Audit Inhalt 9) */}
          <p id={messageHintId} className="mt-2 text-sm leading-relaxed text-mute">
            {form.fields.message.hint}{" "}
            <a href={`mailto:${company.email}`} className={`[overflow-wrap:anywhere] ${premium ? premiumLightLink : "link-inline"}`}>
              {company.email}
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-x-6 gap-y-6 border-t border-line pt-6 md:grid-cols-2 lg:max-xl:grid-cols-1 xl:grid-cols-3">
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
            maxLength={CONTACT_LIMITS.name}
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
            maxLength={CONTACT_LIMITS.email}
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
            maxLength={CONTACT_LIMITS.phone}
            autoComplete="tel"
            className={fieldClass}
            placeholder={form.fields.phone.placeholder}
          />
        </div>
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

      <div className="mt-8">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="acceptPrivacy"
            checked={formData.acceptPrivacy}
            onChange={e => {
              setFormData({ ...formData, acceptPrivacy: e.target.checked });
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
              href={localizePath("/datenschutz", lang)}
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
              <CircleNotch weight="duotone" className="motion-keep size-4 animate-spin" aria-hidden="true" />
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
          <p className="text-sm font-medium text-signal-dark">{errorMessage || fallbackError}</p>
        </div>
      )}
      <noscript>
        <p className="mt-6 text-sm text-mute">
          {chrome.phone}: {company.phone.display} · {chrome.email}: {company.email}
        </p>
      </noscript>
    </form>
  );
}
