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
import PageFrame from "@/components/PageFrame";
import OfferCta from "@/components/OfferCta";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import RichText from "@/components/RichText";
import CantonMap from "@/components/CantonMap";
import { Button } from "@/components/ui/button";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { placePins } from "../../../shared/canton-map";
import { localizePath, type Locale } from "../../../shared/i18n";

// Premium-Bereich (E16, E28, F9), Texte aus content/<sprache>/seiten.ts
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
 * Premium-Linie (F9): Graphit mit Messington. Drei grosse Bildkarten als
 * Einstieg, weitere Anlässe, Zusagen als Raster, Orte mit Karte.
 */
export default function PremiumOverviewView({ lang }: { lang: Locale }) {
  const { premiumOverview: content } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const pins = placePins.filter(pin =>
    ["Zug", "Weggis", "Engelberg"].includes(pin.name)
  );
  return (
    <PageFrame lang={lang} path="/premium">
      <PageHero
        path="/premium"
        lang={lang}
        tone="dark"
        eyebrow={content.line}
        title={content.h1}
        lead={content.lead}
        image={{ label: content.line }}
      >
        {content.nameMeaning && (
          <p className="mt-6 max-w-[56ch] font-medium text-white/80">
            {content.nameMeaning}
          </p>
        )}
      </PageHero>

      {/* Drei Angebote als Bildkarten */}
      <section
        aria-label={content.h1}
        className="bg-ink pb-20 text-white lg:pb-28"
      >
        <div className="container">
          <ul className="grid gap-6 md:grid-cols-3">
            {content.offers.map((offer, index) => (
              <Reveal
                as="li"
                key={offer.path}
                delay={index * 120}
                className="card-lift group bg-ink-800"
              >
                <Link
                  href={localizePath(offer.path, lang)}
                  className="flex h-full flex-col"
                >
                  <ImageSlot
                    lang={lang}
                    tone="dark"
                    hover
                    label={offer.title}
                    className="aspect-[4/3] w-full"
                  />
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <h2 className="t-h3 text-white transition-colors group-hover:text-brass">
                      {offer.title}
                    </h2>
                    <p className="mt-3 flex-1 font-medium leading-relaxed text-white/85">
                      {offer.text}
                    </p>
                    <span className="arrow-link mt-6 inline-flex items-center gap-2 font-semibold text-brass">
                      {ui.offerCta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Weitere Anlässe */}
      <section aria-labelledby="ausserdem" className="section">
        <div className="container">
          <SectionHead
            id="ausserdem"
            title={content.moreTitle}
            className="mb-10"
          />
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {content.more.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 80}
                className="card-lift flex gap-5 bg-stone p-6 md:p-7"
              >
                <span
                  className="font-display text-3xl font-bold leading-none text-signal"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3 className="t-h3 text-ink">{item.title}</h3>
                  <p className="mt-2 font-medium leading-relaxed text-ink-600">
                    {item.text}
                  </p>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Zusagen */}
      <section aria-labelledby="zusagen" className="section bg-ink text-white">
        <div className="container">
          <SectionHead
            id="zusagen"
            title={content.promisesTitle}
            tone="dark"
            className="mb-12 max-w-3xl"
          />
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {content.promises.map((item, index) => {
              const Icon = promiseIcons[item.key];
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={index * 60}
                  className="bg-ink p-6 transition-colors hover:bg-ink-800"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brass">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-medium leading-relaxed text-white/85">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Orte mit Karte */}
      <section aria-labelledby="orte" className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead id="orte" title={content.places.title} />
            <Reveal delay={120}>
              <p className="t-lead mt-5 text-ink-600">
                <RichText text={content.places.text} lang={lang} />
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="arrow-link mt-8"
              >
                <Link href={localizePath("/einzugsgebiet", lang)}>
                  {getDict(lang).seiten.home.area.link}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <CantonMap
              lang={lang}
              texts={{
                ...getDict(lang).misc.map,
                seat: navDicts[lang].chrome.seat,
              }}
              pins={pins.map(pin => ({ x: pin.x, y: pin.y, label: pin.name }))}
              className="mx-auto max-w-[40rem]"
            />
          </div>
        </div>
      </section>

      <OfferCta title={content.cta.title} text={content.cta.text} lang={lang} />
    </PageFrame>
  );
}
