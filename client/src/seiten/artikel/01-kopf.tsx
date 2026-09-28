import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import Hero from "@/components/Hero";
import RichText from "@/components/RichText";
import { heroImage } from "../../../../shared/hero-images";
import { formatDate } from "./datum";
import { artikelKontext, type ArtikelProps } from "./kontext";

/**
 * Kopf mit Bild (E80, E84), statisch: Titel, Untertitel, Autor und Stand. Die
 * Zusammenfassung «Kurz gesagt» steht direkt darunter auf hellem Grund, damit
 * sie ohne Bildhintergrund gut lesbar ist. Veröffentlichung erst ab Launch (M19).
 */
export default function ArtikelKopf(props: ArtikelProps) {
  const { article, lang } = props;
  const { ui, t } = artikelKontext(props);
  return (
    <>
      <Hero
        image={heroImage[article.path]}
        path={article.path}
        lang={lang}
        title={article.h1}
        titleId="artikel-titel"
        lead={
          <>
            <p className="max-w-[56ch]">{article.subtitle}</p>
            <p className="t-eyebrow mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/90">
              <span>{t.byline}</span>
              <span aria-hidden="true">·</span>
              <span>
                {t.updatedLabel}{" "}
                <time dateTime={article.updated}>
                  {formatDate(article.updated, lang)}
                </time>
              </span>
              {article.published && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    {t.publishedLabel}{" "}
                    <time dateTime={article.published}>
                      {formatDate(article.published, lang)}
                    </time>
                  </span>
                </>
              )}
            </p>
          </>
        }
      />
      <section
        id="kurz-gesagt"
        aria-labelledby="kurz-gesagt-titel"
        className="border-b border-line bg-white"
      >
        <div className="container py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 rounded-[3px] border border-line bg-stone p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
            <div className="lg:col-span-4">
              <h2 id="kurz-gesagt-titel" className="t-h3 text-ink">
                {article.summary.title}
              </h2>
              <a
                href="#kontakt-formular"
                data-cta="summary"
                className="arrow-link mt-5 inline-flex min-h-6 items-center gap-2 py-2 font-semibold text-signal transition-colors hover:text-ink"
              >
                {ui.offerCta}
                <ArrowRight
                  weight="duotone"
                  className="size-4 shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>
            <ul className="grid gap-4 lg:col-span-8">
              {article.summary.items.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-semibold leading-relaxed text-ink"
                >
                  <Check
                    weight="duotone"
                    className="mt-[0.2em] size-5 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <RichText
                      text={item}
                      lang={lang}
                      linkClassName="font-semibold text-ink underline decoration-signal/60 underline-offset-4 hover:text-signal"
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
