import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { AnyGlyph } from "./PremiumIcons";
import { images, type ImageKey } from "../../../shared/images";
import { getDict } from "../../../content";
import { localizeHref, type Locale } from "../../../shared/i18n";

export type ZigzagItem = {
  /** Ohne Bild steht die Zeile als ruhiger Textblock: Titel links, Text rechts (E85) */
  image?: ImageKey;
  eyebrow?: string;
  /** Symbol über dem Titel, dekorativ (Phosphor oder PremiumIcons) */
  icon?: AnyGlyph;
  title: string;
  body: ReactNode;
  /** Deutsche Adresse, die Darstellung setzt die Sprache ein */
  href?: string;
  linkLabel?: string;
};

/**
 * Bild und Text im Wechsel (E80): Zeile 1 Bild links, Zeile 2 Bild rechts und so
 * weiter. Auf dem Handy steht das Bild immer oben. Leichtes Parallax nur mit
 * Unterstützung und ohne reduced motion (globals.css). premium ist die helle
 * Premium-Welt: Serifentitel in Anthrazit, Champagner-Akzente, mit Link ist
 * auch das Bild klickbar (für Tastatur und Screenreader zählt nur der Textlink).
 * Eine Zeile ohne Bild bekommt keinen leeren Bildplatz, sondern Titel links und
 * Text rechts unter einer Haarlinie (E85, kein Bild zweimal auf einer Seite).
 */
export default function Zigzag({
  items,
  lang,
  tone = "light",
  headingLevel = "h3",
}: {
  items: ZigzagItem[];
  lang: Locale;
  tone?: "light" | "dark" | "premium";
  headingLevel?: "h2" | "h3";
}) {
  const alt = getDict(lang).bilder;
  const Heading = headingLevel;
  const lux = tone === "premium";
  const dark = tone === "dark";
  const accent = lux ? "text-brass-dark" : "text-signal";
  return (
    <div className="grid gap-16 lg:gap-28">
      {items.map((item, index) => {
        if (!item.image) return <TextRow key={item.title} item={item} lang={lang} tone={tone} Heading={Heading} />;
        const img = images[item.image];
        const flip = index % 2 === 1;
        return (
          <article
            key={item.title}
            className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
          >
            <div
              className={`zz-media relative aspect-[4/3] overflow-hidden rounded-[3px] lg:col-span-7 ${
                flip ? "lg:order-2 lg:col-start-6" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={alt[item.image]}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={`px-depth-slow object-cover ${item.image.startsWith("hero-") ? "object-[78%_50%]" : ""}`}
              />
              {lux && item.href && (
                <Link
                  href={localizeHref(item.href, lang)}
                  prefetch={false}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="zz-link absolute inset-0 z-[1] ring-1 ring-inset ring-brass/30 transition-[box-shadow] duration-300 hover:ring-2 hover:ring-brass"
                />
              )}
            </div>
            <div
              className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : ""}`}
            >
              {item.icon && (
                <item.icon weight="duotone" className={`mb-5 size-11 ${accent}`} aria-hidden="true" />
              )}
              {item.eyebrow && (
                <p className={`t-eyebrow mb-4 ${accent}`}>{item.eyebrow}</p>
              )}
              <Heading
                className={
                  lux
                    ? "font-premium text-[clamp(1.875rem,1.25rem+1.7vw,3rem)] font-semibold leading-[1.08] text-anthracite"
                    : `t-h2 ${dark ? "text-white" : "text-ink"}`
                }
              >
                {item.title}
              </Heading>
              <div
                className={`mt-6 space-y-4 text-[1.0625rem] leading-relaxed ${dark ? "text-white/90" : "text-ink-600"}`}
              >
                {item.body}
              </div>
              {lux && <div className="premium-rule-light mt-6 max-w-[10rem]" aria-hidden="true" />}
              {item.href && item.linkLabel && (
                <Link
                  href={localizeHref(item.href, lang)}
                  prefetch={false}
                  className={`arrow-link mt-8 inline-flex min-h-11 items-center gap-2 font-semibold ${
                    dark
                      ? "text-white hover:text-brass-light"
                      : lux
                        ? "text-anthracite underline decoration-brass-dark/50 underline-offset-[0.3em] hover:text-brass-dark hover:decoration-brass-dark"
                        : "text-ink hover:text-signal"
                  }`}
                >
                  {item.linkLabel}
                  <ArrowRight weight="duotone" className={`size-5 ${accent}`} aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** Zeile ohne Bild: Titel links, Text rechts, oben eine Haarlinie; mobil untereinander */
function TextRow({
  item,
  lang,
  tone,
  Heading,
}: {
  item: ZigzagItem;
  lang: Locale;
  tone: "light" | "dark" | "premium";
  Heading: "h2" | "h3";
}) {
  const lux = tone === "premium";
  const dark = tone === "dark";
  const accent = lux ? "text-brass-dark" : "text-signal";
  return (
    <article
      className={`grid gap-6 border-t pt-10 lg:grid-cols-12 lg:gap-14 lg:pt-14 ${
        dark ? "border-white/15" : lux ? "border-brass-dark/25" : "border-ink/15"
      }`}
    >
      <div className="min-w-0 lg:col-span-5">
        {item.icon && <item.icon weight="duotone" className={`mb-5 size-11 ${accent}`} aria-hidden="true" />}
        {item.eyebrow && <p className={`t-eyebrow mb-4 ${accent}`}>{item.eyebrow}</p>}
        <Heading
          className={
            lux
              ? "font-premium text-[clamp(1.875rem,1.25rem+1.7vw,3rem)] font-semibold leading-[1.08] text-anthracite"
              : `t-h2 ${dark ? "text-white" : "text-ink"}`
          }
        >
          {item.title}
        </Heading>
        {lux && <div className="premium-rule-light mt-6 max-w-[10rem]" aria-hidden="true" />}
      </div>
      <div
        className={`min-w-0 space-y-4 text-[1.0625rem] leading-relaxed lg:col-span-7 ${dark ? "text-white/90" : "text-ink-600"}`}
      >
        {item.body}
        {item.href && item.linkLabel && (
          <Link
            href={localizeHref(item.href, lang)}
            prefetch={false}
            className={`arrow-link inline-flex min-h-11 items-center gap-2 font-semibold ${
              dark ? "text-white hover:text-brass-light" : lux ? "text-anthracite hover:text-brass-dark" : "text-ink hover:text-signal"
            }`}
          >
            {item.linkLabel}
            <ArrowRight weight="duotone" className={`size-5 ${accent}`} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
