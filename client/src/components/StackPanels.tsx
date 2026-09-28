import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "./ImageSlot";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Stapel-Tafeln (F14), nur Premium-Übersicht: drei hohe Tafeln, die ab lg
 * nacheinander übereinander gleiten (position: sticky, Zurücktreten über
 * view()-Timelines in globals.css). Auf dem Handy und bei reduced motion eine
 * normale Abfolge. Kein Client-JavaScript. Je Tafel genau ein Link.
 */
export default function StackPanels({
  items,
  lang,
  eyebrow,
  linkLabel,
}: {
  items: { path: PagePath; label: string; text: string; image?: { src?: string; alt?: string } }[];
  lang: Locale;
  /** Kennzeile über dem Titel, etwa die Premium-Linie */
  eyebrow?: string;
  /** Linktext, gleich für alle Tafeln (ui.toService) */
  linkLabel: string;
}) {
  return (
    <div className="stack grid">
      {items.map((item, index) => (
        <article
          key={item.path}
          className="stack-panel relative overflow-hidden border-t border-white/10 bg-ink-800 text-white"
          style={{ "--i": index } as React.CSSProperties}
        >
          <div className="container grid gap-8 py-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-16">
            <div className="lg:col-span-6">
              <ImageSlot
                src={item.image?.src}
                alt={item.image?.alt}
                label={item.label}
                lang={lang}
                tone="dark"
                decorative
                parallax={index % 2 ? "depth-fast" : "depth-slow"}
                className="aspect-[4/3] w-full lg:aspect-[5/4]"
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="t-eyebrow text-brass">
                {eyebrow}
              </p>
              <h3 className="t-h2 mt-4 text-white">{item.label}</h3>
              <p className="t-lead mt-5 max-w-[44ch] text-white/90">{item.text}</p>
              <Link
                href={localizePath(item.path, lang)}
                className="arrow-link on-dark mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-white"
              >
                {linkLabel}
                <ArrowRight weight="duotone" className="size-4 text-brass" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
