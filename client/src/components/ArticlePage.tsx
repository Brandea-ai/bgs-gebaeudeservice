import { Check } from 'lucide-react'
import SwissNavigation from './SwissNavigation'
import SwissFooter from './SwissFooter'
import Breadcrumbs from './Breadcrumbs'
import JsonLd from './JsonLd'
import OfferCta from './OfferCta'
import RichText from './RichText'
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
  const t = getDict(lang).ratgeber.overview

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path={article.path} />
      <JsonLd data={articleJsonLd(article.path, article, lang)} />

      <main>
        <article>
          <header className="pt-28 md:pt-32 pb-12 bg-gradient-to-br from-slate-50 to-red-50/40">
            <div className="container max-w-6xl">
              <Breadcrumbs path={article.path} lang={lang} />
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-4">{article.h1}</h1>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">{article.subtitle}</p>
                <p className="text-sm text-slate-600">
                  {t.byline} · {t.updatedLabel}: <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
                  {article.published && (
                    <>
                      {' '}
                      · {t.publishedLabel} <time dateTime={article.published}>{formatDate(article.published, lang)}</time>
                    </>
                  )}
                </p>
              </div>
            </div>
          </header>

          <div className="container max-w-6xl py-12 md:py-16">
            <div className="max-w-3xl text-slate-700 leading-relaxed">
              {article.intro?.map((paragraph) => (
                <p key={paragraph} className="text-base md:text-lg mb-6">
                  <RichText text={paragraph} lang={lang} />
                </p>
              ))}

              <aside aria-labelledby="kurz-gesagt" className="rounded-xl border border-slate-200 bg-slate-50 p-6 my-10">
                <h2 id="kurz-gesagt" className="text-lg font-semibold text-slate-900 mb-4">
                  {article.summary.title}
                </h2>
                <ul className="space-y-3">
                  {article.summary.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-700 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        <RichText text={item} lang={lang} />
                      </span>
                    </li>
                  ))}
                </ul>
              </aside>

              {article.sections.map((section) => (
                <section key={section.title} className="mt-12 first-of-type:mt-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">{section.title}</h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mb-5">
                      <RichText text={paragraph} lang={lang} />
                    </p>
                  ))}

                  {section.definitions && (
                    <dl className="space-y-5 mb-5">
                      {section.definitions.map((definition) => (
                        <div key={definition.term} className="border-l-2 border-red-700 pl-4">
                          <dt className="font-semibold text-slate-900">{definition.term}</dt>
                          <dd className="mt-1">
                            <RichText text={definition.text} lang={lang} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {section.subsections?.map((subsection) => (
                    <div key={subsection.title} className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{subsection.title}</h3>
                      <p>
                        <RichText text={subsection.text} lang={lang} />
                      </p>
                    </div>
                  ))}

                  {section.items &&
                    (section.ordered ? (
                      <ol className="list-decimal space-y-2 pl-6 mb-5 marker:font-semibold marker:text-slate-900">
                        {section.items.map((item) => (
                          <li key={item} className="pl-1">
                            <RichText text={item} lang={lang} />
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="space-y-2 mb-5">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-red-700 mt-0.5 shrink-0" aria-hidden="true" />
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
