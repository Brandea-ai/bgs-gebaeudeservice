import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import Hero from "@/components/Hero";
import RichText from "@/components/RichText";
import { heroImage } from "../../../../shared/hero-images";
import { formatDate } from "./datum";
import { artikelKontext, type ArtikelProps } from "./kontext";

/**
 * Kopf mit Bild (E80), statisch; der Titel bleibt das grösste Element beim
 * Laden. Rechts «Kurz gesagt» als Glas-Karte, damit die Zusammenfassung im
 * ersten Bildschirm steht. Datum als «Stand», Veröffentlichung erst ab Launch (M19).
 */
export default function ArtikelKopf(props: ArtikelProps) {
  const { article, lang } = props;
  const { ui, t } = artikelKontext(props);
  return (
    <Hero
      image={heroImage[article.path]}
      path={article.path}
      lang={lang}
      title={article.h1}
      titleId="artikel-titel"
      lead={
        <>
          <p className="max-w-[56ch]">{article.subtitle}</p>
          <p className="t-eyebrow mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/75">
            <span>{t.byline}</span>
            <span aria-hidden="true">·</span>
            <span>
              {t.updatedLabel} <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
            </span>
            {article.published && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  {t.publishedLabel} <time dateTime={article.published}>{formatDate(article.published, lang)}</time>
                </span>
              </>
            )}
          </p>
        </>
      }
      aside={
        <section id="kurz-gesagt" aria-labelledby="kurz-gesagt-titel" className="glass-dark on-dark min-w-0 rounded-[3px] p-6 text-white md:p-8">
          <h2 id="kurz-gesagt-titel" className="font-display text-lg font-bold">
            {article.summary.title}
          </h2>
          <ul className="mt-5 space-y-3.5">
            {article.summary.items.map(item => (
              <li key={item} className="flex items-start gap-3 font-medium leading-relaxed text-white/90">
                <Check weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-brass" aria-hidden="true" />
                <span className="min-w-0">
                  <RichText text={item} lang={lang} linkClassName="font-semibold text-brass underline underline-offset-4 hover:text-white" />
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt-formular"
            data-cta="summary"
            className="arrow-link mt-5 inline-flex min-h-6 items-center gap-2 py-2 text-sm font-semibold text-brass transition-colors hover:text-white"
          >
            {ui.offerCta}
            <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
          </a>
        </section>
      }
    />
  );
}
