import type { Metadata } from 'next'
import Link from 'next/link'
import SwissNavigation from '@/components/SwissNavigation'
import SwissFooter from '@/components/SwissFooter'
import RichText from '@/components/RichText'
import { formatDate } from '@/components/ArticlePage'
import { artikel, ratgeberUebersicht as t } from '../../content/de/ratgeber'
import { metaFor } from '../../shared/seo'

export const metadata: Metadata = metaFor('/blog')

// Übersicht nur der überarbeiteten Artikel (M53, P27). Titel als einziger Link je
// Karte, «Stand» statt erfundener Daten und Lesezeiten (M19).
export default function Ratgeber() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <main>
        <section className="pt-28 md:pt-32 pb-12 bg-gradient-to-br from-slate-50 to-red-50/40">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-6">{t.h1}</h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{t.intro}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-6xl">
            <ul className="grid gap-6 md:grid-cols-2">
              {artikel.map((article) => (
                <li key={article.path}>
                  <article className="relative h-full rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-lg">
                    <h2 className="text-xl font-semibold text-slate-900 mb-3">
                      <Link href={article.path} className="after:absolute after:inset-0 hover:text-red-700">
                        {article.h1}
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4">{article.teaser}</p>
                    <p className="text-sm text-slate-500">
                      {t.updatedLabel}: <time dateTime={article.updated}>{formatDate(article.updated)}</time>
                    </p>
                  </article>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-slate-700">
              <RichText text={t.services} />
            </p>
          </div>
        </section>
      </main>

      <SwissFooter />
    </div>
  )
}
