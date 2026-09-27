import {
  ArrowRight,
  DeviceMobile,
  Envelope,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import PageFrame from "@/components/PageFrame";
import ConsentMap from "@/components/ConsentMap";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ProcessScrolly from "@/components/ProcessScrolly";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import { pageJsonLd } from "../../../shared/structured-data";
import type { Locale } from "../../../shared/i18n";

type Channel = { icon: Icon; title: string; value: string; href: string };

/**
 * Kontakt (F5, F11, F15, M21, M49): Server-Komponente, alle Texte aus
 * content/<sprache>/seiten.ts. Aufbau nach dem Brief: statischer Kopf mit
 * H1, Einleitung, Offerte und Telefon (K03), rechts die vier Kontaktwege als
 * eine gestaffelte Gruppe ganzer Kartenlinks ohne Icon-Kreise (K05),
 * Vertrauensleiste ohne Wiederholung der Antwortzeit (K11, E18), Ablauf als
 * vertikale Prozess-Sektion statt Kartenraster (K09), Karte erst nach Klick
 * (E20), Einwände als FAQ und zum Schluss das Formular mit dem Abschluss der
 * Seite (PageFrame contact, K04: kein rotes Band mehr darüber).
 */
export default function ContactView({ lang }: { lang: Locale }) {
  const { contact } = getDict(lang).seiten;
  const { ui, misc } = getDict(lang);

  // Vier Wege, jeder als ganze Karte anklickbar (K05); die Adresse springt zur Karte
  const channels: Channel[] = [
    {
      icon: Phone,
      title: contact.phone.title,
      value: company.phone.display,
      href: company.phone.href,
    },
    {
      icon: DeviceMobile,
      title: contact.phone.mobile,
      value: company.mobile.display,
      href: company.mobile.href,
    },
    {
      icon: Envelope,
      title: contact.email.title,
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      title: contact.address.title,
      value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
      href: "#karte",
    },
  ];

  return (
    <PageFrame lang={lang} path="/kontakt" contact={contact.cta}>
      <JsonLd data={pageJsonLd("/kontakt", "ContactPage", lang)} />

      {/* Kopf: statisch, die Einleitung trägt die Antwortzeit, darum keine
          zweite Antwortzeile (K11). Aktionen mit demselben Leitwort wie
          Kopfzeile und Startseite (Conversion 3). */}
      <PageHero
        path="/kontakt"
        lang={lang}
        title={contact.h1}
        lead={contact.lead}
        aside={
          <RevealGroup
            as="ul"
            aria-label={contact.channelsLabel}
            // Zwischen lg und xl ist die Spalte schmal (5/12): eine Reihe je
            // Karte, damit E-Mail und längere FR/IT-Werte nicht brechen
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            {channels.map(({ icon: Glyph, title, value, href }) => (
              <li key={title} className="min-w-0">
                <a
                  href={href}
                  className="card-lift group flex h-full flex-col bg-white p-5 shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)] md:p-6"
                >
                  {/* Objekt-Icon 24 px, duotone, ohne Fläche dahinter (K05) */}
                  <Glyph
                    weight="duotone"
                    className="mb-4 size-6 text-signal"
                    aria-hidden="true"
                  />
                  <span className="t-eyebrow text-ink-600">{title}</span>
                  <span className="mt-2 break-words font-display text-[1.0625rem] font-bold leading-snug text-ink tabular-nums transition-colors group-hover:text-signal">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </RevealGroup>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl" className="arrow-link">
            <a href="#kontakt-formular" data-cta="hero">
              {ui.offerCta}
              <ArrowRight weight="regular" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href={company.phone.href} className="tabular-nums">
              <Phone weight="regular" aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Vertrauensleiste (E18): nur, was Einleitung und Ablauf nicht schon
          sagen; «24 Stunden» und «Kostenlos» fallen hier weg (K11). */}
      <div className="border-b border-line bg-white">
        <div className="container py-6 lg:py-8">
          <TrustStrip
            lang={lang}
            compact
            only={["seit", "versichert", "register", "sprachen"]}
          />
        </div>
      </div>

      {/* Ablauf (K09): vertikale Prozess-Sektion, nichts gepinnt, der aktive
          Schritt wird beim Lesen hervorgehoben; Titel und Aktion bleiben links
          stehen. Zweiter Weg zum Formular, näher als vom Kopf (K03). */}
      <section
        id="ablauf"
        aria-labelledby="ablauf-titel"
        className="section bg-white"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <SectionHead id="ablauf-titel" title={contact.steps.title} />
              <Button asChild size="lg" className="arrow-link mt-8">
                <a href="#kontakt-formular" data-cta="ablauf">
                  {ui.offerCta}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <ProcessScrolly
              steps={contact.steps.items}
              lang={lang}
              variant="vertical"
              figureKeys={["anfrage", "besichtigung", "start"]}
              idPrefix="ablauf-schritt"
            />
          </div>
        </div>
      </section>

      {/* Anfahrt: Karte lädt erst nach Klick (E20), Ziel der Adresskarte im Kopf */}
      <section
        id="karte"
        aria-labelledby="karte-titel"
        className="section bg-stone"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <SectionHead
            id="karte-titel"
            title={contact.map.title}
            intro={contact.map.text}
            className="lg:col-span-4"
          />
          <div className="min-w-0 overflow-hidden bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_28px_56px_-32px_rgba(14,17,22,0.35)] lg:col-span-8">
            <ConsentMap texts={misc.map} />
          </div>
        </div>
      </section>

      {/* Einwände vor dem Abschluss: Antworten im HTML, Titel bleibt beim Lesen stehen */}
      <section
        id="fragen"
        aria-labelledby="fragen-titel"
        className="section bg-white"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-4">
            <SectionHead
              id="fragen-titel"
              title={ui.faq}
              className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]"
            />
          </div>
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <Faq items={contact.faq} lang={lang} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
