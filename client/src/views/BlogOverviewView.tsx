import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import PageFrame from "@/components/PageFrame";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import TrustStrip from "@/components/TrustStrip";
import { formatDate } from "@/components/ArticlePage";
import { getDict } from "../../../content";
import { itemListJsonLd } from "../../../shared/structured-data";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * Ratgeber-Übersicht (M53, F04, F05, F14): statischer Kopf mit Titel,
 * Einleitung und dem Satz zu den Leistungen als nächstem Schritt; darunter die
 * Vertrauensleiste als erster Beleg, dann die Artikel als redaktionelle Reihen
 * statt Bildkarten: Bild, Titel, Anreisser, die ersten Punkte aus «Kurz gesagt»
 * und der Stand als <time>. Die ganze Reihe ist der Link (h3), der Pfeiltext
 * nennt das Ziel (ratgeber.overview.readMore). Einblendung als Gruppe erst ab
 * drei Artikeln (API.md). Den Abschluss beschriftet PageFrame mit home.cta.
 */
export default function BlogOverviewView({ lang }: { lang: Locale }) {
  const dict = getDict(lang);
  const { overview: t, articles } = dict.ratgeber;
  const artikel = Object.values(articles);
  const listClass = "divide-y divide-line border-y border-line";

  const rows = artikel.map(article => (
    <li
      key={article.path}
      className="arrow-link group relative grid gap-6 py-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10 lg:gap-14 lg:py-14"
    >
      {/* Ohne Label: der Titel daneben trägt den Namen (F14), Zoom nur mit echtem Foto */}
      <ImageSlot
        lang={lang}
        hover
        decorative
        className="aspect-[16/9] w-full md:aspect-[4/3]"
      />
      <div className="flex min-w-0 flex-col">
        <h3 className="t-h2 text-ink">
          <Link
            href={localizePath(article.path, lang)}
            className="transition-colors after:absolute after:inset-0 group-hover:text-signal"
          >
            {article.h1}
          </Link>
        </h3>
        <p className="mt-4 max-w-[60ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">
          {article.teaser}
        </p>

        {/* Echter Inhalt statt leerer Fläche: die ersten Punkte der Zusammenfassung (F04) */}
        <p className="t-eyebrow mt-7 text-signal">{article.summary.title}</p>
        <ul className="mt-3 space-y-2.5">
          {article.summary.items.slice(0, 2).map(item => (
            <li
              key={item}
              className="flex items-start gap-3 text-[0.9375rem] font-medium leading-relaxed text-ink-700"
            >
              <Check
                weight="duotone"
                className="mt-[0.2em] size-5 shrink-0 text-signal"
                aria-hidden="true"
              />
              <span className="min-w-0">
                <RichText text={item} lang={lang} />
              </span>
            </li>
          ))}
        </ul>

        {/* Pfeiltext nennt das Ziel (F05); aria-hidden, weil der Titel der Link ist.
            Der Stand klein am Ende der Reihe statt als Kennzeile (F04). */}
        <p className="mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 md:mt-auto md:pt-7">
          <span
            className="inline-flex items-center gap-2 font-semibold text-signal"
            aria-hidden="true"
          >
            {t.readMore}
            <ArrowRight
              weight="duotone"
              className="size-4 shrink-0"
              aria-hidden="true"
            />
          </span>
          <span className="text-sm font-medium text-mute">
            {t.updatedLabel}{" "}
            <time dateTime={article.updated}>
              {formatDate(article.updated, lang)}
            </time>
          </span>
        </p>
      </div>
    </li>
  ));

  return (
    <PageFrame lang={lang} path="/blog" contact={dict.seiten.home.cta}>
      <JsonLd
        data={itemListJsonLd(
          "/blog",
          artikel.map(article => article.path),
          lang
        )}
      />

      {/* Kopf mit Bild (E80): Titel, Einleitung und der Satz zu den Leistungen */}
      <PageHero path="/blog" lang={lang} title={t.h1} lead={t.intro}>
        <p className="max-w-[56ch] font-medium leading-relaxed text-white/85">
          <RichText
            text={t.services}
            lang={lang}
            linkClassName="font-semibold text-white underline decoration-white/50 underline-offset-4"
          />
        </p>
      </PageHero>

      {/* Vertrauensleiste vor der ersten Bildfläche (E18, F08, F11): eine Gruppe, ohne Platten */}
      <div className="border-b border-line">
        <div className="container py-6">
          <TrustStrip lang={lang} compact />
        </div>
      </div>

      <section
        id="artikel"
        aria-labelledby="artikel-titel"
        className="section-tight"
      >
        <div className="container">
          <h2 id="artikel-titel" className="sr-only">
            {dict.pages["/blog"].label}
          </h2>
          {artikel.length >= 3 ? (
            <RevealGroup as="ul" className={listClass}>
              {rows}
            </RevealGroup>
          ) : (
            <ul className={listClass}>{rows}</ul>
          )}
        </div>
      </section>
    </PageFrame>
  );
}
