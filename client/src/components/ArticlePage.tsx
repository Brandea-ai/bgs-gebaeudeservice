import { Check } from 'lucide-react'
import SwissNavigation from './SwissNavigation'
import SwissFooter from './SwissFooter'
import Breadcrumbs from './Breadcrumbs'
import JsonLd from './JsonLd'
import OfferCta from './OfferCta'
import RichText from './RichText'
import TocNav from './TocNav'
import { articleJsonLd } from '../../../shared/structured-data'
import { getDict } from '../../../content'
import type { Locale } from '../../../shared/i18n'
import type { ArticleContent } from '../../../content/types'

/** «26. September 2026» aus «2026-09-26», in der Sprache der Seite */
export function formatDate(isoDate: string, lang: Locale = 'de') {
  return new Intl.DateTimeFormat(getDict(lang).misc.dateLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${isoDate}T00:00:00Z`),
  )
}

/**
 * Vorlage für Ratgeberartikel (M53): Server-Komponente, alle Inhalte sichtbar
 * im HTML, Zeilenlänge für Fliesstext begrenzt. Datum als «Stand», das
 * Veröffentlichungsdatum erst ab dem Launch (M19).
 */
export default function ArticlePage({ article, lang = 'de' }: { article: ArticleContent; lang?: Locale }) {
  const { ratgeber, ui } = getDict(lang)
  const t = ratgeber.overview
  const sectionId = (index: number) => `teil-${index + 1}`

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path={article.path} />
      <JsonLd data={articleJsonLd(article.path, article, lang)} />

      <main id="inhalt">
        <article>
          <header className="border-b border-line bg-stone">
            <div className="container pt-10 pb-16 md:pt-14 lg:pb-20">
              <Breadcrumbs path={article.path} lang={lang} />
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="min-w-0 lg:col-span-9 xl:col-span-8">
                  <h1 className="t-h1 max-w-[22ch] text-ink">{article.h1}</h1>
                  <p className="t-lead mt-6 max-w-[56ch] text-mute">{article.subtitle}</p>
                  <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.12em] text-mute">
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
                </div>
              </div>
            </div>
          </header>

          <div className="container grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
            <aside className="hidden lg:col-span-3 lg:row-span-2 lg:row-start-1 lg:block">
              <div className="sticky top-[calc(var(--header-h)+2.5rem)]">
                <TocNav label={ui.onThisPage} items={article.sections.map((section, index) => ({ id: sectionId(index), title: section.title }))} />
              </div>
            </aside>

            {/* Kurz gesagt: auf dem Handy vor dem Text, auf breiten Bildschirmen klebend rechts */}
            <aside aria-labelledby="kurz-gesagt" className="lg:col-span-9 lg:col-start-4 xl:col-span-3 xl:col-start-10 xl:row-span-2 xl:row-start-1">
              <div className="border-t-2 border-ink bg-stone p-6 md:p-7 xl:sticky xl:top-[calc(var(--header-h)+2.5rem)]">
                <h2 id="kurz-gesagt" className="t-eyebrow mb-5 text-ink">{article.summary.title}</h2>
                <SummaryList items={article.summary.items} lang={lang} />
              </div>
            </aside>

            <div className="min-w-0 lg:col-span-9 lg:col-start-4 xl:col-span-6 xl:col-start-4 xl:row-start-1">
              <div className="prose-body text-[1.125rem] leading-[1.75]">
                {article.intro?.map((paragraph) => (
                  <p key={paragraph} className="mb-6 first:t-lead first:text-ink">
                    <RichText text={paragraph} lang={lang} />
                  </p>
                ))}
              </div>


              {article.sections.map((section, index) => (
                <section key={section.title} aria-labelledby={sectionId(index)} className="mt-16 first-of-type:mt-12">
                  <h2 id={sectionId(index)} className="t-h2 mb-6 text-ink">{section.title}</h2>
                  <div className="prose-body text-[1.0625rem] leading-[1.75]">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mb-5">
                        <RichText text={paragraph} lang={lang} />
                      </p>
                    ))}

                    {section.definitions && (
                      <dl className="mb-6 divide-y divide-line border-y border-line">
                        {section.definitions.map((definition) => (
                          <div key={definition.term} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                            <dt className="font-display font-semibold text-ink">{definition.term}</dt>
                            <dd>
                              <RichText text={definition.text} lang={lang} />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="mb-6">
                        <h3 className="t-h3 mb-2 text-ink">{subsection.title}</h3>
                        <p>
                          <RichText text={subsection.text} lang={lang} />
                        </p>
                      </div>
                    ))}

                    {section.items &&
                      (section.ordered ? (
                        <ol className="mb-6 border-t border-line">
                          {section.items.map((item, itemIndex) => (
                            <li key={item} className="flex gap-5 border-b border-line py-4">
                              <span className="font-mono text-sm font-medium text-signal tabular-nums" aria-hidden="true">
                                {String(itemIndex + 1).padStart(2, '0')}
                              </span>
                              <span>
                                <RichText text={item} lang={lang} />
                              </span>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="mb-6 border-t border-line">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 border-b border-line py-4">
                              <Check className="mt-1.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                              <span>
                                <RichText text={item} lang={lang} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      ))}

                    {section.note && (
                      <p className="mb-5">
                        <RichText text={section.note} lang={lang} />
                      </p>
                    )}
                  </div>
                </section>
              ))}
            </div>

          </div>
        </article>

        <OfferCta title={article.cta.title} text={article.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path={article.path} />
    </div>
  )
}

function SummaryList({ items, lang }: { items: string[]; lang: Locale }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-700">
          <Check className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
          <span>
            <RichText text={item} lang={lang} />
          </span>
        </li>
      ))}
    </ul>
  )
}
