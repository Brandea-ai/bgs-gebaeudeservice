import { ArrowRight, Check } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import ImageSlot from "@/components/ImageSlot";
import OfferCta from "@/components/OfferCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHead from "@/components/SectionHead";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Über uns (F5, M21, M47): Server-Komponente, Texte aus content/<sprache>/seiten.ts.
 * Personen erst mit Einwilligung, Bildfläche als Platzhalter bis zur Freigabe (E19, E59).
 */
export default function AboutView({ lang }: { lang: Locale }) {
  const { about, proof } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/ueber-uns" />

      <main id="inhalt">
        <section className="bg-stone">
          <div className="container grid gap-12 pt-10 pb-16 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24">
            <div className="lg:col-span-7">
              <Breadcrumbs path="/ueber-uns" lang={lang} />
              <h1 className="t-h1 max-w-[18ch] text-ink">{about.h1}</h1>
              <p className="t-lead mt-8 max-w-[50ch] text-mute">{about.lead}</p>
              <Button asChild size="xl" className="arrow-link mt-10">
                <a href="#kontakt-formular">
                  {ui.offerCta}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="lg:col-span-5">
              <ImageSlot src="/ueber-uns-hero.jpg" alt={about.imageAlt} className="aspect-[4/3] w-full lg:aspect-[4/5] lg:max-h-[36rem]" lang={lang} />
            </div>
          </div>
        </section>

        {/* In Zahlen */}
        <section aria-label={about.statsLabel} className="bg-ink text-white">
          <div className="container">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {proof.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-3 border-white/10 py-10 lg:px-8 lg:first:pl-0 ${index % 2 === 0 ? "border-r pr-5" : "pl-5 lg:border-r"} ${index < 2 ? "max-lg:border-b" : ""} lg:last:border-r-0`}
                >
                  <dt className="order-2 text-sm leading-snug text-white/65">{item.label}</dt>
                  <dd className="order-1 font-display text-[clamp(1.75rem,1.2rem+1.4vw,3rem)] font-semibold leading-none tracking-[-0.03em] sm:whitespace-nowrap">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Zusagen */}
        <section aria-labelledby="zusagen" className="section">
          <div className="container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead id="zusagen" title={about.promises.title} className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]" />
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {about.promises.items.map((item) => (
                <li key={item.title} className="reveal border-t border-ink py-7">
                  <h3 className="t-h3 flex items-center gap-3 text-ink">
                    <Check className="h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mute">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ansprechperson und Registerdaten (R5d, N033, M47) */}
        <section className="section-tight bg-stone">
          <div className="container">
          <div className="grid gap-px bg-line md:grid-cols-2">
            <div className="bg-white p-8 md:p-12">
              <h2 className="t-h3 mb-4 text-ink">{about.contact.title}</h2>
              <p className="leading-relaxed text-mute">{about.contact.text}</p>
            </div>
            <div className="bg-white p-8 md:p-12">
              <h2 className="t-h3 mb-4 text-ink">{about.register.title}</h2>
              <p className="font-mono text-sm leading-7 text-ink-700">
                {company.legalName}
                <br />
                {about.register.court}
                <br />
                {about.register.uid} {company.uid}
              </p>
            </div>
          </div>
          </div>
        </section>

        <OfferCta title={about.cta.title} text={about.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/ueber-uns" />
    </div>
  );
}
