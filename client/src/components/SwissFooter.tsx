"use client";

import Link from "next/link";
import {
  ArrowRight,
  CaretDown,
  CheckCircle,
  Clock,
  DeviceMobile,
  Envelope,
  FileText,
  MapPin,
  Phone,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { company, newBrandActive } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import ContactForm from "./ContactForm";
import LanguageSwitcher from "./LanguageSwitcher";

/** Rechtstexte bekommen statt des Formulars ein schmales Kontaktband (Audit visuell, /impressum) */
const legalPaths: PagePath[] = ["/impressum", "/datenschutz"];

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
 *
 * Aufbau (Audit visuell, Umbau 3): links Titel und darunter klebend die
 * Kontaktwege als Zeilen, rechts das Formular, darunter «So geht es weiter»
 * über die ganze Breite. So bleibt unter der Formularkarte kein Leerraum.
 * Kein Bildband mehr: das Bild steht nur noch auf /kontakt, dort neben «Die
 * Besichtigung vorbereiten» (seiten/kontakt/05-besichtigung.tsx). Die Antwortzeit fällt im Bereich nur
 * einmal: in «So geht es weiter», oder in der Einleitung der Seite, dann ohne
 * Zeitangabe im ersten Schritt. Die Fragen darüber (chrome.faqMore) nennen
 * sie nicht mehr.
 *
 * Sonderfälle je Seite:
 * - /kontakt setzt den Bereich selbst direkt unter die Kontaktwege (inline,
 *   mit eigener Randspalte aside). Der Aufruf aus PageFrame am Seitenende
 *   liefert dort nichts, damit das Formular nur einmal auf der Seite steht.
 * - /impressum und /datenschutz: schmales Kontaktband mit Telefon, E-Mail und
 *   Weg zum Formular auf der Kontaktseite.
 * - Premium-Seiten (/premium…) in der hellen Premium-Welt: Elfenbein,
 *   Serifentitel, Champagner statt Signalrot (E85).
 */
export function ContactSection({
  lang = "de",
  path = "/",
  heading,
  inline = false,
  aside,
}: {
  lang?: Locale;
  path?: PagePath;
  heading?: { title: string; text: string };
  /** Nur /kontakt: Bereich steht im Inhalt der Seite statt am Seitenende */
  inline?: boolean;
  /** Randspalte statt der Kontaktwege, auf /kontakt «Was in die Anfrage gehört» */
  aside?: ReactNode;
}) {
  const { contactForm: form, chrome } = navDicts[lang];
  if (path === "/kontakt" && !inline) return null;
  if (legalPaths.includes(path)) return <ContactBand lang={lang} />;

  const premium = path.startsWith("/premium");
  const accent = premium ? "text-brass-dark" : "text-signal";
  const title = heading?.title ?? form.title;
  const intro = heading?.text ?? (premium ? form.premiumIntro : form.intro);
  // Nennt die Einleitung die Antwortzeit schon, sagt der erste Schritt sie nicht noch einmal
  const steps = [
    /\b24\b/.test(intro) ? form.nextStepPlain : form.nextSteps[0],
    premium ? form.premiumVisitStep : form.nextSteps[1],
    form.nextSteps[2],
  ];

  return (
    <div className="border-t border-line">
      {/* Kontaktformular, auf jeder Seite (M04). Ziel aller Offerte-Aktionen. */}
      <section
        id="kontakt-formular"
        aria-labelledby="kontakt-titel"
        className={`section ${premium ? "bg-ivory text-anthracite" : "bg-stone"}`}
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          <div className="lg:col-span-5 lg:row-start-1 xl:col-span-4">
            <p className={`t-eyebrow mb-5 ${accent}`}>{chrome.contactEyebrow}</p>
            <h2
              id="kontakt-titel"
              className={
                // Ohne Silbentrennung («Reinigungsof-ferte»): umbrochen wird zwischen Wörtern, zu lange Wörter bricht globals.css mobil
                `hyphens-manual ${
                  premium
                    ? "font-premium text-[clamp(2.1rem,1.4rem+2.4vw,3.5rem)] font-semibold leading-[1.06] text-anthracite"
                    : "t-h2 text-ink"
                }`
              }
            >
              {title}
            </h2>
            <p className={`t-lead mt-5 max-w-[40ch] ${premium ? "text-anthracite" : "text-ink"}`}>{intro}</p>
          </div>

          {/* Auf /kontakt (inline) steht die Randspalte unter 1024 px vor dem Formular: sie hilft beim Ausfüllen (Prüfbefund K6) */}
          <div
            className={`min-w-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 xl:col-span-8 xl:col-start-5 ${
              inline ? "max-lg:order-last" : ""
            }`}
          >
            <ContactForm lang={lang} path={path} />
          </div>

          {/* Nur innerhalb der Formularzeile kleben: der Rand endet vor «So geht es weiter». */}
          <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-2 xl:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              {aside ?? <ContactChannels lang={lang} premium={premium} />}
            </div>
          </div>

          {!inline && (
            /* So geht es weiter: drei Schritte mit Symbolen, ohne Ziffern (E80), über die ganze Breite */
            <div className={`border-t pt-8 lg:col-span-12 ${premium ? "border-brass-dark/20" : "border-line"}`}>
              <h3
                className={
                  premium
                    ? "font-premium text-[1.625rem] font-semibold leading-tight text-anthracite"
                    : "font-display text-lg font-bold text-ink"
                }
              >
                {form.nextTitle}
              </h3>
              <ul className="mt-5 grid gap-4 md:grid-cols-3 md:gap-10">
                {steps.map((step, index) => {
                  const StepIcon = [PhoneCall, MapPin, FileText][index] ?? CheckCircle;
                  return (
                    <li
                      key={step}
                      className={`flex items-start gap-3 font-semibold leading-relaxed ${premium ? "text-anthracite" : "text-ink"}`}
                    >
                      <StepIcon weight="duotone" className={`mt-0.5 size-6 shrink-0 ${accent}`} aria-hidden="true" />
                      {step}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/**
 * Kontaktwege neben dem Formular als Aktionszeilen mit Haarlinie (Audit
 * visuell, Umbau 7 und 8): Symbol, Bezeichnung, Wert und Pfeil; die ganze
 * Zeile ist der Link. Gleich auf Handy und Desktop, mobil spart das rund die
 * Hälfte der Höhe der früheren Kacheln.
 */
function ContactChannels({ lang, premium }: { lang: Locale; premium: boolean }) {
  const { contactForm: form, chrome } = navDicts[lang];
  const accent = premium ? "text-brass-dark" : "text-signal";
  const channels = [
    { icon: Phone, label: chrome.phone, value: company.phone.display, href: company.phone.href },
    { icon: DeviceMobile, label: chrome.mobile, value: company.mobile.display, href: company.mobile.href },
    { icon: Envelope, label: chrome.email, value: company.email, href: `mailto:${company.email}` },
    {
      icon: MapPin,
      label: chrome.address,
      value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
      href: `${localizePath("/kontakt", lang)}#karte`,
      title: form.mapLink,
    },
    { icon: Clock, label: chrome.hours, value: chrome.hoursValue },
  ];
  // Liste statt dl: Symbol und Pfeil stehen in der Zeile, in einer dl wären sie nicht erlaubt (axe dlitem)
  return (
    <ul className={`border-t ${premium ? "border-brass-dark/20" : "border-line"}`}>
      {channels.map(({ icon: Icon, label, value, href, title }) => (
        <li
          key={label}
          className={`group relative flex min-h-16 items-center gap-4 border-b py-3 ${premium ? "border-brass-dark/20" : "border-line"}`}
        >
          <Icon weight="duotone" className={`size-6 shrink-0 ${accent}`} aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-mute">{label}</p>
            <p className={`mt-0.5 break-words text-[1.0625rem] font-bold ${premium ? "text-anthracite" : "text-ink"}`}>
              {href ? (
                <a
                  href={href}
                  className={`tabular-nums transition-colors after:absolute after:inset-0 ${premium ? "group-hover:text-brass-dark" : "group-hover:text-signal"}`}
                >
                  {value}
                  {/* Die Adresse führt zur Karte: der Linkname sagt es auch Screenreadern */}
                  {title && <span className="sr-only">, {title}</span>}
                </a>
              ) : (
                value
              )}
            </p>
          </div>
          {href && (
            <ArrowRight
              weight="duotone"
              className={`size-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${accent}`}
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Schmales Kontaktband für Impressum und Datenschutz (Audit visuell, /impressum):
 * nach einem Rechtstext kein Offertformular über 1500 px, sondern Telefon,
 * E-Mail und der Weg zum Formular auf der Kontaktseite. Trägt die Marke
 * #kontakt-formular, damit «Offerte anfragen» im Kopf auch hier ein Ziel hat.
 */
function ContactBand({ lang }: { lang: Locale }) {
  const { contactForm: form, chrome } = navDicts[lang];
  const pill =
    "inline-flex min-h-12 items-center gap-3 rounded-[3px] border border-ink/15 bg-white px-4 font-bold text-ink transition-colors hover:border-ink";
  return (
    <div className="border-t border-line">
      <section id="kontakt-formular" aria-labelledby="kontakt-titel" className="bg-stone py-10 md:py-12">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[52ch]">
            <p className="t-eyebrow mb-3 text-signal">{chrome.contactEyebrow}</p>
            <h2 id="kontakt-titel" className="font-display text-[1.5rem] font-bold leading-tight text-ink">
              {form.band.title}
            </h2>
            <p className="mt-2 font-medium leading-relaxed text-ink-600">{form.band.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={company.phone.href} className={`${pill} tabular-nums`}>
              <Phone weight="duotone" className="size-5 shrink-0 text-signal" aria-hidden="true" />
              {company.phone.display}
            </a>
            <a href={`mailto:${company.email}`} className={`${pill} [overflow-wrap:anywhere]`}>
              <Envelope weight="duotone" className="size-5 shrink-0 text-signal" aria-hidden="true" />
              {company.email}
            </a>
            <Link
              href={`${localizePath("/kontakt", lang)}#kontakt-formular`}
              prefetch={false}
              data-cta="band-recht"
              className="press arrow-link btn-lift inline-flex h-12 items-center justify-center gap-2 rounded-[3px] bg-signal px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-signal-dark"
            >
              {form.band.action}
              <ArrowRight weight="duotone" className="size-4" aria-hidden="true" />
            </Link>
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
    "inline-flex min-h-11 items-center py-2 text-[0.9375rem] text-white/90 transition-colors hover:text-white sm:min-h-8 sm:py-1";
  const linkGroups = [
    ...serviceGroups,
    { title: texts.areaTitle, links: [...texts.companyLinks, texts.areaLink] },
  ];
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
                className="inline-flex min-h-11 items-center font-medium tabular-nums transition-colors hover:text-white"
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

          <div className="grid gap-0 sm:grid-cols-2 sm:gap-10 lg:col-span-8 lg:grid-cols-4">
            {linkGroups.map(group => {
              const links = (
                <ul className="pb-5 sm:pb-0">
                  {group.links.map(link => (
                    <li key={link.path}>
                      <Link href={href(link.path)} prefetch={false} className={footLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              );
              return (
                <div key={group.title}>
                  <div className="hidden sm:block">
                    <h3 className="t-eyebrow mb-4 min-h-[2lh] text-white/90">{group.title}</h3>
                    {links}
                  </div>
                  <details className="group border-t border-white/20 sm:hidden">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
                      <h3 className="t-eyebrow text-white/90">{group.title}</h3>
                      <CaretDown weight="duotone" className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    {links}
                  </details>
                </div>
              );
            })}
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
                  className="inline-flex min-h-11 items-center py-1.5 transition-colors hover:text-white"
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
