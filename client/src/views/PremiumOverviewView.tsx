import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Clock,
  Gem,
  KeyRound,
  Languages,
  Lock,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import OfferCta from "@/components/OfferCta";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import RichText from "@/components/RichText";

// Premium-Bereich (E16, E28, F5), Texte aus content/<sprache>/seiten.ts
const promiseIcons = {
  persoenlich: UserCheck,
  diskret: Lock,
  teams: Users,
  personal: BadgeCheck,
  schluessel: KeyRound,
  zeiten: Clock,
  material: Gem,
  sprachen: Languages,
  versichert: Shield,
  offerte: ClipboardCheck,
};

/**
 * Premium-Linie (F5): Graphit mit Messington. Angebote als drei grosse
 * Einstiege, Zusagen als Raster, Orte als Text mit Verweis aufs Gebiet.
 */
export default function PremiumOverviewView({ lang }: { lang: Locale }) {
  const { premiumOverview: content } = getDict(lang).seiten;
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/premium" />

      <main id="inhalt">
        <PageHero path="/premium" lang={lang} tone="dark" eyebrow={content.line} title={content.h1} lead={content.lead}>
          {content.nameMeaning && <p className="mt-6 max-w-[56ch] border-l border-brass/60 pl-5 text-white/60">{content.nameMeaning}</p>}
        </PageHero>

        {/* Drei Angebote als Einstiege */}
        <section aria-label={content.h1} className="bg-ink pb-20 text-white lg:pb-28">
          <div className="container">
            <ul className="grid gap-px bg-white/10 md:grid-cols-3">
              {content.offers.map((offer) => (
                <li key={offer.path} className="bg-ink">
                  <Link
                    href={localizePath(offer.path, lang)}
                    className="arrow-link group flex h-full min-h-[18rem] flex-col justify-between gap-10 p-8 transition-colors hover:bg-ink-800 md:p-10"
                  >
                    <span>
                      <span className="t-h2 block text-white">{offer.title}</span>
                      <span className="mt-5 block leading-relaxed text-white/65">{offer.text}</span>
                    </span>
                    <span className="flex justify-end border-t border-white/15 pt-5 text-brass">
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Weitere Anlässe */}
        <section aria-labelledby="ausserdem" className="section">
          <div className="container grid gap-12 lg:grid-cols-12">
            <SectionHead id="ausserdem" title={content.moreTitle} className="lg:col-span-4" />
            <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {content.more.map((item) => (
                <div key={item.title} className="reveal border-t border-ink py-6">
                  <dt className="t-h3 text-ink">{item.title}</dt>
                  <dd className="mt-3 leading-relaxed text-mute">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Zusagen */}
        <section aria-labelledby="zusagen" className="section bg-stone">
          <div className="container">
            <SectionHead id="zusagen" title={content.promisesTitle} className="mb-14 max-w-3xl" />
            <ul className="grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-5">
              {content.promises.map((item) => {
                const Icon = promiseIcons[item.key];
                return (
                  <li key={item.title} className="bg-stone p-7">
                    <Icon className="h-6 w-6 text-brass-dark" aria-hidden="true" />
                    <h3 className="mt-6 font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-mute">{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Orte */}
        <section aria-labelledby="orte" className="section">
          <div className="container grid gap-10 lg:grid-cols-12">
            <SectionHead id="orte" title={content.places.title} className="lg:col-span-4" />
            <p className="t-lead text-ink-700 lg:col-span-7 lg:col-start-6">
              <RichText text={content.places.text} lang={lang} />
            </p>
          </div>
        </section>

        <OfferCta title={content.cta.title} text={content.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/premium" />
    </div>
  );
}
