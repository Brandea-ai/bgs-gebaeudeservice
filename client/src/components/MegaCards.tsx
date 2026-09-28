import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PremiumOverviewIcon, premiumPageIcons } from "./PremiumIcons";
import { megaDicts } from "../../../content/mega";
import { navDicts } from "../../../content/navigation";
import { imagesArePlaceholders } from "../../../shared/features";
import { detailImage, heroImage } from "../../../shared/hero-images";
import { images } from "../../../shared/images";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Karten im Mega-Menü «Leistungen» (Premium hell, 28.09.2026). Zustand, Hover,
 * Tastatur und Escape bleiben in SwissNavigation. Bilder direkt aus dem
 * Bildregister über next/image statt ImageSlot: ImageSlot lädt das ganze
 * Wörterbuch, das Menü läuft im Browser und bleibt klein (M25). Die Bilder sind
 * dekorativ, der Text daneben trägt den Namen.
 */

type Props = {
  lang: Locale;
  path?: PagePath;
  /** Schliesst das Menü nach einem Klick */
  onNavigate: () => void;
};

/**
 * Premium als eigene Welt: Anthrazit über dem Premium-Bild, Champagner-Linie,
 * Serifenschrift. Der Kopf mit Titel und Text ist ein eigener Link auf
 * /premium, darunter die drei Premium-Seiten, keine verschachtelten Links.
 */
export function PremiumMegaCard({ lang, path, onNavigate, compact = false }: Props & { compact?: boolean }) {
  const { serviceGroups, chrome } = navDicts[lang];
  const premium = serviceGroups[2];
  const overview = premium.links.find(link => link.path === "/premium");
  const pages = premium.links.filter(link => link.path !== "/premium");
  const hero = images["hero-premium"];
  return (
    <div className="premium-surface on-dark relative isolate flex flex-col overflow-hidden rounded-[3px] text-white">
      {!imagesArePlaceholders && (
        <Image
          src={hero.src}
          alt=""
          fill
          sizes={compact ? "100vw" : "28rem"}
          className="-z-10 object-cover object-[70%_50%] opacity-60"
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(165deg,rgba(22,24,28,0.58)_0%,rgba(22,24,28,0.8)_45%,rgba(22,24,28,0.95)_100%)]"
        aria-hidden="true"
      />
      <Link
        href={localizePath("/premium", lang)}
        prefetch={false}
        onClick={onNavigate}
        aria-current={path === "/premium" ? "page" : undefined}
        className={`group relative block transition-colors hover:bg-white/[0.04] ${compact ? "p-5" : "px-7 pb-6 pt-7"}`}
      >
        <span className="flex items-start justify-between gap-4">
          <span className="t-eyebrow text-brass">{premium.title}</span>
          <PremiumOverviewIcon className={`shrink-0 text-brass ${compact ? "size-8" : "size-10"}`} aria-hidden="true" />
        </span>
        <span
          className={`block font-premium font-semibold leading-[1.08] text-white ${
            compact ? "mt-2 text-[1.625rem]" : "mt-3 text-[clamp(1.875rem,1.4rem+0.8vw,2.25rem)]"
          }`}
        >
          {chrome.premiumTeaser}
        </span>
        {overview && (
          <span className="arrow-link mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brass-light transition-colors group-hover:text-white">
            {overview.label}
            <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
          </span>
        )}
      </Link>
      <div className={`premium-rule ${compact ? "mx-5" : "mx-7"}`} aria-hidden="true" />
      <ul className={`relative ${compact ? "px-2 pb-3 pt-2" : "space-y-0.5 px-4 pb-5 pt-3"}`}>
        {pages.map(link => {
          const Glyph = premiumPageIcons[link.path] ?? PremiumOverviewIcon;
          return (
            <li key={link.path}>
              <Link
                href={localizePath(link.path, lang)}
                prefetch={false}
                onClick={onNavigate}
                aria-current={link.path === path ? "page" : undefined}
                className="group flex min-h-12 items-center gap-3.5 rounded-[3px] px-3 py-2 text-[1rem] font-semibold text-white transition-colors hover:bg-white/[0.06] hover:text-brass-light aria-[current=page]:text-brass-light"
              >
                <Glyph className="size-7 shrink-0 text-brass" aria-hidden="true" />
                <span className="flex-1">{link.label}</span>
                <ArrowRight
                  weight="duotone"
                  className="size-4 shrink-0 text-brass opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Bildkarte unter «Hauswartung und Pflege»: füllt die Spalte und führt auf die
 * Umzugsreinigung (E81, SEO 24). Kleines Bild aus dem Register, Kurztext.
 */
export function FeatureMegaCard({ lang, path, onNavigate }: Props) {
  const { feature } = megaDicts[lang];
  const picture = images[detailImage[feature.path] ?? heroImage[feature.path]];
  return (
    <Link
      href={localizePath(feature.path, lang)}
      prefetch={false}
      onClick={onNavigate}
      aria-current={feature.path === path ? "page" : undefined}
      className="group flex items-stretch gap-4 rounded-[3px] border border-ink/[0.1] bg-white p-3 shadow-[0_1px_0_rgba(14,17,22,0.03),0_18px_36px_-30px_rgba(14,17,22,0.4)] transition-[border-color,box-shadow] duration-300 hover:border-ink/25 hover:shadow-[0_1px_0_rgba(14,17,22,0.04),0_24px_44px_-28px_rgba(14,17,22,0.45)]"
    >
      <span className="img-zoom relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-[3px] bg-stone-200" aria-hidden="true">
        {!imagesArePlaceholders && (
          <Image src={picture.src} alt="" fill sizes="6rem" className="object-cover object-[58%_50%]" />
        )}
      </span>
      <span className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
        <span className="t-eyebrow text-[0.6875rem] text-signal-dark">{feature.eyebrow}</span>
        <span className="mt-1.5 block font-display text-[1rem] font-bold leading-snug text-ink transition-colors group-hover:text-signal-dark">
          {feature.title}
        </span>
        <span className="mt-1 block text-sm font-medium leading-snug text-ink-600">{feature.text}</span>
      </span>
      <ArrowRight
        weight="duotone"
        className="size-4 shrink-0 self-center text-signal -translate-x-1 opacity-60 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}
