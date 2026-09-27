import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import PageHero from "@/components/PageHero";
import RichText from "@/components/RichText";
import { formatDate } from "@/components/ArticlePage";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * Ratgeber-Übersicht (F5, M53, P27): Titel als einziger Link je Eintrag,
 * «Stand» statt erfundener Daten und Lesezeiten (M19).
 */
export default function BlogOverviewView({ lang }: { lang: Locale }) {
  const { overview: t, articles } = getDict(lang).ratgeber;
  const artikel = Object.values(articles);
  const eyebrow = navDicts[lang].menu.after.find((link) => link.path === "/blog")?.label;
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/blog" />

      <main id="inhalt">
        <PageHero path="/blog" lang={lang} eyebrow={eyebrow} title={t.h1} lead={t.intro} />

        <section className="section-tight">
          <div className="container">
            <ul className="grid gap-px bg-line md:grid-cols-2">
              {artikel.map((article) => (
                <li key={article.path} className="min-w-0 bg-white">
                  <article className="arrow-link group relative flex h-full min-h-[20rem] flex-col justify-between gap-10 p-8 transition-colors hover:bg-stone md:p-12">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-mute">
                        {t.updatedLabel} <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
                      </p>
                      <h2 className="t-h2 mt-6 max-w-[22ch] text-ink">
                        <Link href={localizePath(article.path, lang)} className="after:absolute after:inset-0 group-hover:text-signal transition-colors">
                          {article.h1}
                        </Link>
                      </h2>
                      <p className="mt-5 max-w-[56ch] leading-relaxed text-mute">{article.teaser}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-signal" aria-hidden="true" />
                  </article>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-[68ch] text-ink-700">
              <RichText text={t.services} lang={lang} />
            </p>
          </div>
        </section>
      </main>

      <SwissFooter lang={lang} path="/blog" />
    </div>
  );
}
