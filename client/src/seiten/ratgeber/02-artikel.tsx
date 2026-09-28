import Link from "next/link";
import { ArrowRight, CalendarBlank, Check } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import RichText from "@/components/RichText";
import { heroImage } from "../../../../shared/hero-images";
import { formatDate } from "../artikel/datum";
import { ratgeberKontext, type RatgeberProps } from "./kontext";

/**
 * Artikel als Karten (visuell.md, E85): der erste Artikel quer über die ganze
 * Breite, die übrigen zu zweit nebeneinander, Bild oben im Format 16:10. Je
 * Karte Stand, Titel als Link über die ganze Karte (h3), Anreisser und drei
 * Punkte aus «Kurz gesagt». Karten einer Reihe sind gleich hoch. Keine
 * Einblendung, die Liste steht sofort.
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
        <ul className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {artikel.map((article, index) => {
            const featured = index === 0;
            return (
              <li
                key={article.path}
                className={`card-lift group relative grid min-w-0 overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_24px_60px_-40px_rgba(14,17,22,0.45)] ${
                  featured ? "md:col-span-2 lg:grid-cols-2" : "grid-rows-[auto_1fr]"
                }`}
              >
                <ImageSlot
                  image={heroImage[article.path]}
                  sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
                  lang={lang}
                  hover
                  decorative
                  className={`aspect-[16/10] w-full [&_img]:object-[88%_50%] ${featured ? "lg:aspect-auto lg:h-full lg:min-h-[24rem]" : ""}`}
                />
                <div className={`flex min-w-0 flex-col p-6 md:p-8 ${featured ? "xl:p-12" : ""}`}>
                  <p className="flex items-center gap-2 text-sm font-medium text-mute">
                    <CalendarBlank weight="duotone" className="size-4 shrink-0 text-signal" aria-hidden="true" />
                    <span>
                      {t.updatedLabel} <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
                    </span>
                  </p>
                  <h3 className={`${featured ? "t-h2" : "t-h3"} mt-4 text-ink`}>
                    <Link href={href(article.path)} className="transition-colors after:absolute after:inset-0 group-hover:text-signal">
                      {article.h1}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-[36em] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{article.teaser}</p>

                  <div className="mt-7 border-t border-line pt-6">
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

                  {/* Pfeiltext nennt das Ziel (F05); aria-hidden, weil der Titel der Link ist */}
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-signal" aria-hidden="true">
                    {t.readMore}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
