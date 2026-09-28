import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import PageFrame from "@/components/PageFrame";
import Hero from "./Hero";
import { heroImage } from "../../../shared/hero-images";
import JsonLd from "./JsonLd";
import RichText from "./RichText";
import TocNav from "./TocNav";
import { articleJsonLd } from "../../../shared/structured-data";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { ArticleContent, ArticleSection } from "../../../content/types";

/** «26. September 2026» aus «2026-09-26», in der Sprache der Seite */
export function formatDate(isoDate: string, lang: Locale = "de") {
  return new Intl.DateTimeFormat(getDict(lang).misc.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

/**
 * Vorlage für Ratgeberartikel (M53, F01, F03, F07, F10, F14): Server-Komponente,
 * alle Inhalte im HTML. Kopf statisch und ohne Bildfläche: links Titel,
 * Untertitel und Stand, rechts «Kurz gesagt» auf Tinte, damit die
 * Zusammenfassung im ersten Bildschirm steht. Darunter Verzeichnis mit
 * Scrollspy links (Ankerziele auf den Sektionen), Text rechts; im Lesefluss
 * keine Bewegung. Den Abschluss beschriftet PageFrame mit dem cta des Artikels.
 * Datum als «Stand», das Veröffentlichungsdatum erst ab dem Launch (M19).
 */
export default function ArticlePage({
  article,
  lang = "de",
}: {
  article: ArticleContent;
  lang?: Locale;
}) {
  const { ratgeber, ui, pages } = getDict(lang);
  const t = ratgeber.overview;
  const siblings = Object.values(ratgeber.articles).filter(
    other => other.path !== article.path
  );
  const sectionId = (index: number) => `teil-${index + 1}`;
  const toc = [
    ...article.sections.map((section, index) => ({
      id: sectionId(index),
      title: section.title,
    })),
    { id: "verwandt", title: ui.related },
  ];

  return (
    <PageFrame lang={lang} path={article.path} contact={article.cta}>
      <JsonLd data={articleJsonLd(article.path, article, lang)} />
      <article>
        {/* Kopf: statisch, der Titel bleibt das grösste Element beim Laden (F01) */}
        {/* Kopf mit Bild (E80), statisch; der Titel bleibt das grösste Element beim Laden */}
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
          aside={
              <section
                id="kurz-gesagt"
                aria-labelledby="kurz-gesagt-titel"
                className="glass-dark on-dark min-w-0 rounded-[3px] p-6 text-white md:p-8"
              >
                <h2
                  id="kurz-gesagt-titel"
                  className="font-display text-lg font-bold"
                >
                  {article.summary.title}
                </h2>
                <SummaryList items={article.summary.items} lang={lang} />
                {/* Nächster Schritt, zurückhaltend: ein Link zum Formular, Messing auf Tinte */}
                <a
                  href="#kontakt-formular"
                  data-cta="summary"
                  className="arrow-link mt-5 inline-flex min-h-6 items-center gap-2 py-2 text-sm font-semibold text-brass transition-colors hover:text-white"
                >
                  {ui.offerCta}
                  <ArrowRight
                    weight="duotone"
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </section>
          }
        />

        {/* Inhalt: Verzeichnis klebt links, der Text rechts in lesbarer Zeilenlänge */}
        <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* div statt aside: das Verzeichnis (nav) ist die Landmarke, ein aside in einer Region wäre eine verschachtelte */}
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-[calc(var(--header-offset)+2rem)]">
              <TocNav label={ui.onThisPage} items={toc} />
            </div>
          </div>

          <div className="min-w-0 space-y-14 lg:col-span-9 lg:space-y-16 xl:col-span-8 xl:col-start-5">
            {article.intro && (
              <div className="prose-body text-[1.125rem] leading-[1.75]">
                {article.intro.map(paragraph => (
                  <p key={paragraph} className="mb-6 last:mb-0">
                    <RichText text={paragraph} lang={lang} />
                  </p>
                ))}
              </div>
            )}

            {article.sections.map((section, index) => (
              <ArticleSectionView
                key={section.title}
                section={section}
                id={sectionId(index)}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </article>

      {/* Passt auch dazu: die Leistungen aus dem Ratgeber und die übrigen Artikel (E18, keine neuen Texte) */}
      <section
        id="verwandt"
        aria-labelledby="verwandt-titel"
        className="section-tight border-t border-line"
      >
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <h2 id="verwandt-titel" className="t-h2 text-ink">
              {ui.related}
            </h2>
            <p className="mt-5 max-w-[46ch] font-medium leading-relaxed text-ink-700">
              <RichText text={t.services} lang={lang} />
            </p>
          </div>
          {siblings.length > 0 && (
            <ul className="divide-y divide-line border-y border-line lg:col-span-8">
              {siblings.map(other => (
                <li
                  key={other.path}
                  className="arrow-link group relative flex min-w-0 flex-col py-7"
                >
                  <p className="t-eyebrow text-signal">
                    {pages["/blog"].label}
                  </p>
                  <h3 className="t-h3 mt-3 text-ink">
                    <Link
                      href={localizePath(other.path, lang)}
                      className="transition-colors after:absolute after:inset-0 group-hover:text-signal"
                    >
                      {other.h1}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-[60ch] font-medium leading-relaxed text-ink-600">
                    {other.teaser}
                  </p>
                  {/* Pfeiltext nennt das Ziel (F05); aria-hidden, weil der Titel der Link ist */}
                  <span
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-signal"
                    aria-hidden="true"
                  >
                    {t.readMore}
                    <ArrowRight
                      weight="duotone"
                      className="size-4 shrink-0"
                      aria-hidden="true"
                    />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </PageFrame>
  );
}

/**
 * Ein Abschnitt des Artikels: Ankerziel auf der Sektion, Überschrift per
 * aria-labelledby. Abschnitte, die das Unternehmen im Titel nennen, sind die
 * Antwort des Unternehmens auf die neutrale Beratung und stehen abgesetzt auf
 * Stein (F06). Nummerierte Listen als stehende Ablauflinie in der Sprache der
 * Prozess-Sektion (F10), Fragenlisten ohne Häkchen (F07).
 */
function ArticleSectionView({
  section,
  id,
  lang,
}: {
  section: ArticleSection;
  id: string;
  lang: Locale;
}) {
  const answer = section.title.includes(company.brand);
  const questions =
    section.items?.every(item => item.trimEnd().endsWith("?")) ?? false;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-titel`}
      className={answer ? "bg-stone p-6 sm:p-8 lg:p-10" : undefined}
    >
      <h2 id={`${id}-titel`} className="t-h2 text-ink">
        {section.title}
      </h2>
      <div className="prose-body mt-6 space-y-6 text-[1.0625rem] leading-[1.75]">
        {section.paragraphs && (
          <div className="space-y-5">
            {section.paragraphs.map(paragraph => (
              <p key={paragraph}>
                <RichText text={paragraph} lang={lang} />
              </p>
            ))}
          </div>
        )}

        {section.definitions && (
          <dl className="divide-y divide-line border-y border-line">
            {section.definitions.map(definition => (
              <div
                key={definition.term}
                className="grid gap-1 py-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="hyphens font-display font-bold text-ink">
                  {definition.term}
                </dt>
                <dd className="min-w-0">
                  <RichText text={definition.text} lang={lang} />
                </dd>
              </div>
            ))}
          </dl>
        )}

        {section.subsections && (
          <div className="space-y-7">
            {section.subsections.map(subsection => (
              <div key={subsection.title}>
                <h3 className="t-h3 mb-2 text-ink">{subsection.title}</h3>
                <p>
                  <RichText text={subsection.text} lang={lang} />
                </p>
              </div>
            ))}
          </div>
        )}

        {section.items &&
          (section.ordered ? (
            <ol className="relative">
              <span className="process-line bg-ink/15" aria-hidden="true" />
              {section.items.map((item, index) => (
                <li key={item} className="process-step pb-7 last:pb-0">
                  <span className="process-num text-signal" aria-hidden="true">
                    <CheckCircle weight="duotone" className="size-6" />
                  </span>
                  <span
                    className="process-dot text-signal"
                    aria-hidden="true"
                  />
                  <p className="max-w-[56ch] font-medium leading-relaxed text-ink">
                    <RichText text={item} lang={lang} />
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <ul className="border-t border-line">
              {section.items.map(item => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line py-4"
                >
                  {questions ? (
                    <span
                      className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-signal"
                      aria-hidden="true"
                    />
                  ) : (
                    <Check
                      weight="duotone"
                      className="mt-[0.2em] size-5 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                  )}
                  <span className="min-w-0">
                    <RichText text={item} lang={lang} />
                  </span>
                </li>
              ))}
            </ul>
          ))}

        {section.note && (
          <p>
            <RichText text={section.note} lang={lang} />
          </p>
        )}
      </div>
    </section>
  );
}

/** «Kurz gesagt» auf Tinte: Häkchen in Messing, nie Signalrot auf Tinte (icons.md) */
function SummaryList({ items, lang }: { items: string[]; lang: Locale }) {
  return (
    <ul className="mt-5 space-y-3.5">
      {items.map(item => (
        <li
          key={item}
          className="flex items-start gap-3 font-medium leading-relaxed text-white/90"
        >
          <Check
            weight="duotone"
            className="mt-[0.2em] size-5 shrink-0 text-brass"
            aria-hidden="true"
          />
          <span className="min-w-0">
            <RichText
              text={item}
              lang={lang}
              linkClassName="font-semibold text-brass underline underline-offset-4 hover:text-white"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
