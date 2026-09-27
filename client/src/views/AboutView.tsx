import { ArrowRight, Check } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import ImageSlot from "@/components/ImageSlot";
import OfferCta from "@/components/OfferCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Über uns (F5, F11, M21, M47): Server-Komponente, Texte aus content/<sprache>/seiten.ts.
 * Personen erst mit Einwilligung, drei Bildflächen als Platzhalter bis zur
 * Freigabe (E19, E59). Kennzahlen mit Zähler, Zusagen als Karten.
 */
export default function AboutView({ lang }: { lang: Locale }) {
  const { about, proof, contact } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const { chrome } = navDicts[lang];
  return (
    <PageFrame lang={lang} path="/ueber-uns">
      <section className="relative overflow-hidden bg-stone">
        <div className="container grid gap-10 pt-8 pb-14 md:pt-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20">
          <div className="lg:col-span-6">
            <Breadcrumbs path="/ueber-uns" lang={lang} />
            <Reveal>
              <h1 className="t-h1 max-w-[18ch] text-ink">{about.h1}</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-7 max-w-[50ch] text-ink-600">
                {about.lead}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Button asChild size="xl" className="arrow-link mt-9">
                <a href="#kontakt-formular">
                  {ui.offerCta}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </Reveal>
          </div>
          {/* Drei Bildflächen: Team, Sitz, Arbeit */}
          <Reveal

            delay={150}
            className="grid grid-cols-3 gap-3 lg:col-span-6"
          >
            <ImageSlot
              src="/ueber-uns-hero.jpg"
              alt={about.imageAlt}
              label={about.imageAlt}
              lang={lang}
              className="col-span-2 row-span-2 aspect-[4/5] w-full"
            />
            <ImageSlot
              lang={lang}
              label={chrome.seat}
              className="aspect-square w-full"
            />
            <ImageSlot
              lang={lang}
              label={ui.premiumLine}
              className="aspect-square w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* In Zahlen */}
      <section aria-label={about.statsLabel} className="bg-ink text-white">
        <div className="container">
          <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {proof.map((item, index) => (
              <Reveal
                as="div"
                key={item.label}
                delay={index * 100}
                className="flex flex-col gap-2 bg-ink px-5 py-8 sm:px-7 sm:py-10"
              >
                <dd className="order-1 font-display text-[clamp(2rem,1.4rem+1.8vw,3.5rem)] font-bold leading-none tracking-[-0.03em]">
                  {item.value}
                </dd>
                <dt className="order-2 text-sm font-medium leading-snug text-white/85">
                  {item.label}
                </dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Zusagen */}
      <section aria-labelledby="zusagen" className="section">
        <div className="container">
          <SectionHead
            id="zusagen"
            title={about.promises.title}
            className="mb-10"
          />
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {about.promises.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 80}
                className="card-lift bg-stone p-6 md:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal text-white">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="t-h3 mt-5 text-ink">{item.title}</h3>
                <p className="mt-2 font-medium leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-y border-line bg-stone">
        <div className="container py-6">
          <TrustStrip lang={lang} compact />
        </div>
      </div>

      {/* Ablauf */}
      <section aria-labelledby="ablauf" className="section">
        <div className="container">
          <SectionHead
            id="ablauf"
            title={contact.steps.title}
            className="mb-10"
          />
          <Steps steps={contact.steps.items} lang={lang} />
        </div>
      </section>

      {/* Ansprechperson und Registerdaten (R5d, N033, M47) */}
      <section className="section-tight bg-stone">
        <div className="container grid gap-5 md:grid-cols-2">
          <Reveal className="bg-white p-8 shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)] md:p-10">
            <h2 className="t-h3 text-ink">{about.contact.title}</h2>
            <p className="mt-4 font-medium leading-relaxed text-ink-600">
              {about.contact.text}
            </p>
            <a
              href={company.phone.href}
              className="arrow-link mt-6 inline-flex items-center gap-2 font-semibold text-signal tabular-nums"
            >
              {company.phone.display}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal delay={120} className="bg-ink p-8 text-white md:p-10">
            <h2 className="t-h3">{about.register.title}</h2>
            <p className="mt-4 font-mono text-sm font-medium leading-7 text-white/90">
              {company.legalName}
              <br />
              {about.register.court}
              <br />
              {about.register.uid} {company.uid}
            </p>
          </Reveal>
        </div>
      </section>

      <OfferCta title={about.cta.title} text={about.cta.text} lang={lang} />
    </PageFrame>
  );
}
