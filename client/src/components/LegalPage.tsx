import SwissNavigation from './SwissNavigation'
import SwissFooter from './SwissFooter'
import RichText from './RichText'
import { formatDate } from './ArticlePage'
import { getDict } from '../../../content'
import type { LegalContent } from '../../../content/types'
import type { Locale } from '../../../shared/i18n'
import type { PagePath } from '../../../shared/seo'

/** Vorlage für Impressum und Datenschutz: Server-Komponente, alle Texte offen im HTML (M21) */
export default function LegalPage({ content, path, lang = 'de' }: { content: LegalContent; path: PagePath; lang?: Locale }) {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path={path} />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{content.h1}</h1>
          {content.intro && (
            <p className="text-lg text-slate-700 leading-relaxed mb-10">
              <RichText text={content.intro} lang={lang} />
            </p>
          )}

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {content.sections.map((section) => (
              <section key={section.title} className="py-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h2>
                {section.lines && (
                  <p className="text-slate-700 leading-relaxed">
                    {section.lines.map((line, index) => (
                      <span key={line}>
                        {index > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                )}
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
                    <RichText text={paragraph} lang={lang} />
                  </p>
                ))}
                {section.items && (
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <RichText text={item} lang={lang} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <p className="text-sm text-slate-600 mt-8">{getDict(lang).ratgeber.overview.updatedLabel}: {formatDate(content.updated, lang)}</p>
        </div>
      </main>

      <SwissFooter lang={lang} path={path} />
    </div>
  )
}
