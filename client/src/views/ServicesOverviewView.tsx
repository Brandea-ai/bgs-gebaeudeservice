import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Construction,
  Factory,
  Hammer,
  Home,
  KeyRound,
  Layers,
  Sparkles,
  Trees,
  Wind,
} from "lucide-react";
import PageFrame from "@/components/PageFrame";
import OfferCta from "@/components/OfferCta";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/** Ein Symbol je Leistung, Schlüssel ist die deutsche Adresse */
const serviceIcons: Partial<Record<PagePath, typeof Home>> = {
  "/leistungen/unterhaltsreinigung": Home,
  "/leistungen/bueroreinigung": Building2,
  "/leistungen/sonderreinigungen": Sparkles,
  "/leistungen/baureinigung": Construction,
  "/leistungen/fenster-und-fassadenreinigung": Wind,
  "/leistungen/industrie-und-hallenreinigung": Factory,
  "/leistungen/hauswartung": KeyRound,
  "/leistungen/aussen-und-gruenflaechenpflege": Trees,
  "/leistungen/facility-services": Layers,
};

/**
 * Leistungen im Überblick (F5, F9): Auswahlhilfe nach Anlass. Jede Leistung als
 * Bildkarte mit Symbol, Titel und einem Satz. Gruppen als Sprungziele im Kopf.
 */
export default function ServicesOverviewView({ lang }: { lang: Locale }) {
  const { servicesOverview } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const groupId = (index: number) => `gruppe-${index + 1}`;
  const total = servicesOverview.groups.reduce(
    (sum, group) => sum + group.items.length,
    0
  );

  return (
    <PageFrame lang={lang} path="/leistungen">
      <PageHero
        path="/leistungen"
        lang={lang}
        title={servicesOverview.h1}
        lead={servicesOverview.lead}
        aside={
          <nav
            aria-label={ui.onThisPage}
            className="bg-white p-6 shadow-[0_1px_0_rgba(14,17,22,0.04),0_28px_56px_-32px_rgba(14,17,22,0.35)] md:p-8"
          >
            <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
              {ui.onThisPage} · {total}
            </p>
            <ol className="mt-4 divide-y divide-line">
              {servicesOverview.groups.map((group, index) => (
                <li key={group.title}>
                  <a
                    href={`#${groupId(index)}`}
                    className="arrow-link group flex items-center gap-4 py-4 text-ink transition-colors hover:text-signal"
                  >
                    <span className="font-display text-2xl font-bold text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-lg font-bold leading-tight">
                        {group.title}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink-600">
                        {group.text}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      <div className="border-b border-line">
        <div className="container py-6">
          <TrustStrip lang={lang} compact />
        </div>
      </div>

      {servicesOverview.groups.map((group, index) => (
        <section
          key={group.title}
          aria-labelledby={groupId(index)}
          className={`section-tight ${index % 2 === 1 ? "bg-stone" : ""}`}
        >
          <div className="container">
            <SectionHead
              id={groupId(index)}
              eyebrow={String(index + 1).padStart(2, "0")}
              title={group.title}
              intro={group.text}
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {group.items.map((item, itemIndex) => {
                const Icon = serviceIcons[item.path] ?? Hammer;
                return (
                  <Reveal
                    as="li"
                    key={item.path}
                    delay={itemIndex * 100}
                    className="card-lift group bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"
                  >
                    <Link
                      href={localizePath(item.path, lang)}
                      className="flex h-full flex-col"
                    >
                      <div className="relative">
                        <ImageSlot
                          lang={lang}
                          hover
                          label={item.title}
                          className="aspect-[16/10] w-full"
                        />
                        <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-signal shadow-md">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6 md:p-7">
                        <h3 className="t-h3 text-ink transition-colors group-hover:text-signal">
                          {item.title}
                        </h3>
                        <p className="mt-3 flex-1 font-medium leading-relaxed text-ink-600">
                          {item.text}
                        </p>
                        <span className="arrow-link mt-6 inline-flex items-center gap-2 font-semibold text-signal">
                          {ui.offerCta}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      {/* Premium als eigener Einstieg */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-6">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brass">
              {ui.premiumLine}
            </p>
            <h2 className="t-h2 text-white">
              {servicesOverview.premium.title}
            </h2>
            <p className="t-lead mt-5 max-w-[48ch] text-white/90">
              {servicesOverview.premium.text}
            </p>
            <Button
              asChild
              size="xl"
              variant="inverse"
              className="arrow-link mt-8"
            >
              <Link href={localizePath("/premium", lang)}>
                {servicesOverview.premium.link}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
          <Reveal

            delay={150}
            className="grid grid-cols-3 gap-3 lg:col-span-6"
          >
            {(
              [
                "/premium/luxusimmobilien",
                "/premium/privatjet",
                "/premium/yacht",
              ] as PagePath[]
            ).map((path, i) => (
              <Link
                key={path}
                href={localizePath(path, lang)}
                className={`group ${i === 1 ? "translate-y-6" : ""}`}
              >
                <ImageSlot
                  lang={lang}
                  tone="dark"
                  hover
                  label={getDict(lang).pages[path].label}
                  className="aspect-[3/4] w-full"
                />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <OfferCta
        title={servicesOverview.cta.title}
        text={servicesOverview.cta.text}
        lang={lang}
      />
    </PageFrame>
  );
}
