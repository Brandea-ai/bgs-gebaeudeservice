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
  MapPin,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import OfferCta from "@/components/OfferCta";
import { Card } from "@/components/ui/card";
import RichText from "@/components/RichText";

// Premium-Bereich (E16, E28), Texte aus content/de/seiten.ts
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

export default function PremiumOverviewView({ lang }: { lang: Locale }) {
  const { premiumOverview: content } = getDict(lang).seiten;
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/premium" />

      <main>
        <section className="pt-32 pb-16 bg-slate-900 text-white">
          <div className="container max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-300 mb-4">
              {content.line}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              {content.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {content.lead}
            </p>
            {content.nameMeaning && (
              <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mt-4">
                {content.nameMeaning}
              </p>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-5xl grid gap-6 md:grid-cols-3">
            {content.offers.map(offer => (
              <Link
                key={offer.path}
                href={localizePath(offer.path, lang)}
                className="group"
              >
                <Card className="h-full p-6 transition-shadow group-hover:shadow-lg">
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between gap-4">
                    {offer.title}
                    <ArrowRight
                      className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </h2>
                  <p className="text-slate-600">{offer.text}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="container max-w-5xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
              {content.moreTitle}
            </h2>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {content.more.map(item => (
                <div
                  key={item.title}
                  className="border-t border-slate-200 pt-4"
                >
                  <dt className="font-semibold text-slate-900">{item.title}</dt>
                  <dd className="text-slate-600 mt-1">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container max-w-5xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
              {content.promisesTitle}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {content.promises.map(item => {
                const Icon = promiseIcons[item.key];
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <Icon
                      className="w-6 h-6 text-primary shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-5xl flex items-start gap-4">
            <MapPin
              className="w-6 h-6 text-primary shrink-0 mt-1"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {content.places.title}
              </h2>
              <p className="text-slate-600 max-w-3xl">
                <RichText text={content.places.text} lang={lang} />
              </p>
            </div>
          </div>
        </section>

        <OfferCta
          title={content.cta.title}
          text={content.cta.text}
          lang={lang}
        />
      </main>

      <SwissFooter lang={lang} path="/premium" />
    </div>
  );
}
