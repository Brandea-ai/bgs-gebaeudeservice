import Link from "next/link";
import { ArrowRight, CalendarBlank, Check } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import RichText from "@/components/RichText";
import { heroImage } from "../../../../shared/hero-images";
import { formatDate } from "../artikel/datum";
import { ratgeberKontext, type RatgeberProps } from "./kontext";

/**
 * Artikel als Bildkarten im Zickzack (E80): Bild des Artikels (rechts
 * ausgerichtet, die Heldenbilder sind links abgedunkelt), Stand, Titel als Link
 * über die ganze Karte (h3), Anreisser, «Kurz gesagt» und die Abschnitte als
 * Inhaltsübersicht. Keine Einblendung bei zwei Artikeln.
 */
export default function RatgeberArtikel(props: RatgeberProps) {
  const { lang } = props;
  const { dict, t, artikel, href } = ratgeberKontext(props);
  return (
    <section id="artikel" aria-labelledby="artikel-titel" className="section bg-white">
      <div className="container">
        <h2 id="artikel-titel" className="sr-only">
          {dict.pages["/blog"].label}
        </h2>
        <ul className="grid gap-8 lg:gap-12">
          {artikel.map((article, index) => (
            <li
              key={article.path}
              className="card-lift group relative grid min-w-0 overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_24px_60px_-40px_rgba(14,17,22,0.45)] lg:grid-cols-12"
            >
              <ImageSlot
                image={heroImage[article.path]}
                sizes="(min-width: 1024px) 42vw, 100vw"
                lang={lang}
                hover
                decorative
                className={`aspect-[4/3] w-full lg:col-span-5 lg:aspect-auto lg:h-full lg:min-h-[28rem] [&_img]:object-[88%_50%] ${index % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className={`flex min-w-0 flex-col p-6 md:p-9 lg:col-span-7 xl:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="flex items-center gap-2 text-sm font-medium text-mute">
                  <CalendarBlank weight="duotone" className="size-4 shrink-0 text-signal" aria-hidden="true" />
                  <span>
                    {t.updatedLabel} <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
                  </span>
                </p>
                <h3 className="t-h2 mt-4 text-ink">
                  <Link href={href(article.path)} className="transition-colors after:absolute after:inset-0 group-hover:text-signal">
                    {article.h1}
                  </Link>
                </h3>
                <p className="mt-4 max-w-[60ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{article.teaser}</p>

                <div className="mt-8 grid gap-8 border-t border-line pt-7 md:grid-cols-2">
                  <div className="min-w-0">
                    <p className="t-eyebrow text-signal">{article.summary.title}</p>
                    <ul className="mt-4 space-y-3">
                      {article.summary.items.slice(0, 3).map(item => (
                        <li key={item} className="flex items-start gap-3 text-[0.9375rem] font-medium leading-relaxed text-ink-700">
                          <Check weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
                          <span className="min-w-0">
                            <RichText text={item} lang={lang} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="min-w-0">
                    <p className="t-eyebrow text-mute">{t.inArticle}</p>
                    <ul className="mt-4 divide-y divide-line border-y border-line">
                      {article.sections.map(section => (
                        <li key={section.title} className="py-2.5 text-[0.9375rem] font-medium leading-snug text-ink">
                          {section.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pfeiltext nennt das Ziel (F05); aria-hidden, weil der Titel der Link ist */}
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-signal" aria-hidden="true">
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
