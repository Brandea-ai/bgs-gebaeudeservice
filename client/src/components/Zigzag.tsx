import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { images, type ImageKey } from "../../../shared/images";
import { getDict } from "../../../content";
import { localizeHref, type Locale } from "../../../shared/i18n";

export type ZigzagItem = {
  image: ImageKey;
  eyebrow?: string;
  title: string;
  body: ReactNode;
  /** Deutsche Adresse, die Darstellung setzt die Sprache ein */
  href?: string;
  linkLabel?: string;
};

/**
 * Bild und Text im Wechsel (E80): Zeile 1 Bild links, Zeile 2 Bild rechts und so
 * weiter. Auf dem Handy steht das Bild immer oben. Leichtes Parallax nur mit
 * Unterstützung und ohne reduced motion (globals.css).
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
  const dark = tone !== "light";
  const accent = tone === "premium" ? "text-brass" : "text-signal";
  return (
    <div className="grid gap-16 lg:gap-28">
      {items.map((item, index) => {
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
            </div>
            <div
              className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : ""}`}
            >
              {item.eyebrow && (
                <p className={`t-eyebrow mb-4 ${accent}`}>{item.eyebrow}</p>
              )}
              <Heading
                className={
                  tone === "premium"
                    ? "font-premium text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] leading-[1.1] text-white"
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
              {item.href && item.linkLabel && (
                <Link
                  href={localizeHref(item.href, lang)}
                  prefetch={false}
                  className={`arrow-link mt-8 inline-flex min-h-11 items-center gap-2 font-semibold ${
                    dark ? "text-white hover:text-brass-light" : "text-ink hover:text-signal"
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
