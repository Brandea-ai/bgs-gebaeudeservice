import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import { iconFor } from "@/components/serviceIcons";
import { detailImage, heroImage } from "../../../../shared/hero-images";
import type { PagePath } from "../../../../shared/seo";
import { artikelKontext, type ArtikelProps } from "./kontext";

const cardClass =
  "card-lift group relative flex min-w-0 flex-col overflow-hidden rounded-[3px] border border-line bg-white";
const sizes = "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw";

/**
 * Weiterlesen (visuell.md): gleich hohe Karten mit Bild oben, zuerst die
 * passende Leistung, dann zwei verwandte Artikel. Kennzeile und Pfeiltext
 * nennen das Ziel («Passende Leistung», «Ratgeber», «Artikel lesen»).
 */
export default function ArtikelVerwandt(props: ArtikelProps) {
  const { lang } = props;
  const { dict, t, related, service, href } = artikelKontext(props);
  const serviceText = service ? serviceSentence(dict, service) : undefined;
  const ServiceGlyph = service ? iconFor(service) : undefined;
  return (
    <section id="verwandt" aria-labelledby="verwandt-titel" className="section-tight border-t border-line bg-stone">
      <div className="container">
        <h2 id="verwandt-titel" className="t-h2 text-ink">
          {t.moreTitle}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service && (
            <li className={cardClass}>
              <ImageSlot
                image={detailImage[service] ?? heroImage[service]}
                sizes={sizes}
                lang={lang}
                hover
                decorative
                className="aspect-[16/10] w-full"
              />
              <div className="flex min-w-0 flex-1 flex-col p-6 md:p-7">
                <p className="t-eyebrow flex items-center gap-2 text-signal">
                  {ServiceGlyph && <ServiceGlyph weight="duotone" className="size-5 shrink-0" aria-hidden="true" />}
                  {t.serviceLabel}
                </p>
                <h3 className="t-h3 mt-3 text-ink">
                  <Link href={href(service)} className="transition-colors after:absolute after:inset-0 group-hover:text-signal">
                    {dict.pages[service].label}
                  </Link>
                </h3>
                {serviceText && <p className="mt-3 font-medium leading-relaxed text-ink-600">{serviceText}</p>}
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-signal" aria-hidden="true">
                  {dict.ui.toService}
                  <ArrowRight weight="duotone" className="size-4 shrink-0" />
                </span>
              </div>
            </li>
          )}
          {related.map(other => (
            <li key={other.path} className={cardClass}>
              <ImageSlot
                image={heroImage[other.path]}
                sizes={sizes}
                lang={lang}
                hover
                decorative
                className="aspect-[16/10] w-full [&_img]:object-[88%_50%]"
              />
              <div className="flex min-w-0 flex-1 flex-col p-6 md:p-7">
                <p className="t-eyebrow text-mute">{dict.pages["/blog"].label}</p>
                <h3 className="t-h3 mt-3 text-ink">
                  <Link href={href(other.path)} className="transition-colors after:absolute after:inset-0 group-hover:text-signal">
                    {other.h1}
                  </Link>
                </h3>
                <p className="mt-3 font-medium leading-relaxed text-ink-600">{other.teaser}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-signal" aria-hidden="true">
                  {t.readMore}
                  <ArrowRight weight="duotone" className="size-4 shrink-0" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Satz zur Leistung aus der Übersicht /leistungen (keine neuen Texte) */
export function serviceSentence(dict: ReturnType<typeof artikelKontext>["dict"], path: PagePath) {
  for (const group of dict.seiten.servicesOverview.groups) {
    const entry = group.items.find(item => item.path === path);
    if (entry) return entry.text;
  }
  return undefined;
}
