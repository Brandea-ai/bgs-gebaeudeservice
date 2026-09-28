import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import RichText from "@/components/RichText";
import { iconFor } from "@/components/serviceIcons";
import type { ServicePageContent } from "../../../../content/types";
import { heroImage } from "../../../../shared/hero-images";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/**
 * Eine Leistung als Zickzack-Zeile (E80): Bild wechselt die Seite, daneben
 * Symbol, Name, kurzer Nutzen, für wen sie gedacht ist, drei typische Arbeiten
 * aus dem Umfang der Leistungsseite und der Link. Auf dem Handy Bild oben.
 */
export default function LeistungZeile({
  path,
  label,
  text,
  content,
  flip,
  lang,
  toService,
}: {
  path: PagePath;
  label: string;
  text: string;
  content?: ServicePageContent;
  flip: boolean;
  lang: Locale;
  toService: string;
}) {
  const Glyph = iconFor(path);
  const titleId = `zeile-${path.split("/").pop()}`;
  const audience = content?.facts[0];
  const typical = content?.scope.items.slice(0, 3) ?? [];
  return (
    <article aria-labelledby={titleId} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <Link
        href={localizePath(path, lang)}
        tabIndex={-1}
        aria-hidden="true"
        className={`group block overflow-hidden rounded-[3px] lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}
      >
        <ImageSlot
          image={heroImage[path]}
          lang={lang}
          hover
          decorative
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[16/10] w-full"
        />
      </Link>
      <div className={`min-w-0 lg:col-span-6 ${flip ? "lg:order-1 lg:col-start-1" : ""}`}>
        <Glyph weight="duotone" className="size-8 text-signal" aria-hidden="true" />
        <h3 id={titleId} className="hyphens mt-5 font-display text-[clamp(1.5rem,1.15rem+1vw,2.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink">
          {label}
        </h3>
        <p className="t-lead mt-4 max-w-[52ch] text-ink-600">{text}</p>
        {audience && (
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-600">
            <span className="font-semibold text-ink">{audience.label}: </span>
            {audience.value}
          </p>
        )}
        {typical.length > 0 && (
          <ul className="mt-5 space-y-2 border-t border-line pt-5">
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
          href={localizePath(path, lang)}
          className="arrow-link mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal"
        >
          {toService}
          <span className="sr-only">: {label}</span>
          <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
