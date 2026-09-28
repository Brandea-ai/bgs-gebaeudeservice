import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import RichText from "@/components/RichText";
import { iconFor } from "@/components/serviceIcons";
import type { ServicePageContent } from "../../../../content/types";
import type { ImageKey } from "../../../../shared/images";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/**
 * Eine Leistung als Textzeile im Kapitel (visuell.md Umbau 5 und 7): ab lg nur
 * Text mit Haarlinie, das Bild steht klebend daneben (kapitel-buehne.tsx).
 * Darunter ein 88 px grosses Vorschaubild links neben Name und Nutzen. Der Name
 * ist der Link; die drei typischen Arbeiten und der Textlink erst ab sm, sie
 * stehen vollständig auf der Leistungsseite. Keine Eckdaten der Leistungsseite:
 * deren facts sind seitentypisch und haben keine feste Reihenfolge (Prüfbefund
 * S4), wofür die Leistung gedacht ist, sagt der eigene Text. Die id ist das
 * Ziel des Scrollspys.
 */
export default function LeistungZeile({
  id,
  path,
  label,
  text,
  image,
  content,
  lang,
  toService,
}: {
  id: string;
  path: PagePath;
  label: string;
  text: string;
  image: ImageKey;
  content?: ServicePageContent;
  lang: Locale;
  toService: string;
}) {
  const Glyph = iconFor(path);
  const titleId = `${id}-titel`;
  const typical = content?.scope.items.slice(0, 3) ?? [];
  const href = localizePath(path, lang);
  return (
    <article
      id={id}
      aria-labelledby={titleId}
      className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 border-t border-line py-5 sm:py-9 lg:block lg:py-12"
    >
      <Link href={href} tabIndex={-1} aria-hidden="true" className="group block self-start overflow-hidden rounded-[3px] lg:hidden">
        <ImageSlot image={image} lang={lang} hover decorative sizes="88px" className="aspect-square w-full" />
      </Link>
      <div className="min-w-0">
        <h3
          id={titleId}
          className="flex items-start gap-3 font-display text-[clamp(1.25rem,1.05rem+0.9vw,2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink"
        >
          <Glyph weight="duotone" className="mt-[0.1em] size-7 shrink-0 text-signal max-sm:hidden lg:size-8" aria-hidden="true" />
          <Link href={href} className="arrow-link min-w-0 transition-colors hover:text-signal lg:text-balance">
            {label}
            <ArrowRight weight="duotone" className="ml-1.5 inline size-5 align-[-0.1em] text-signal sm:hidden" aria-hidden="true" />
          </Link>
        </h3>
        <p className="mt-2 max-w-[56ch] text-[0.9375rem] font-medium leading-relaxed text-ink-600 sm:mt-4 sm:text-[1.0625rem]">{text}</p>
        {typical.length > 0 && (
          <ul className="mt-4 space-y-2 max-sm:hidden">
            {typical.map(item => (
              <li key={item} className="flex items-start gap-3 font-medium leading-relaxed text-ink">
                <Check weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
                <span className="min-w-0">
                  <RichText text={item} lang={lang} />
                </span>
              </li>
            ))}
          </ul>
        )}
        <Link
          href={href}
          className="arrow-link mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal max-sm:hidden"
        >
          {toService}
          <span className="sr-only">: {label}</span>
          <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
