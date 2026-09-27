import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import TrustStrip from "@/components/TrustStrip";
import { formatDate } from "@/components/ArticlePage";
import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * Ratgeber-Übersicht (F5, F11, M53, P27): Artikel als Bildkarten, Titel als
 * einziger Link je Eintrag, «Stand» statt erfundener Daten und Lesezeiten (M19).
 */
export default function BlogOverviewView({ lang }: { lang: Locale }) {
  const { overview: t, articles } = getDict(lang).ratgeber;
  const artikel = Object.values(articles);
  return (
    <PageFrame lang={lang} path="/blog">
      <PageHero
        path="/blog"
        lang={lang}
        title={t.h1}
        lead={t.intro}
        image={{ label: t.byline }}
      />

      <section className="section-tight">
        <div className="container">
          <ul className="grid gap-6 md:grid-cols-2">
            {artikel.map((article, index) => (
              <Reveal
                as="li"
                key={article.path}
                delay={index * 120}
                className="card-lift group relative bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"
              >
                <article className="flex h-full flex-col">
                  <ImageSlot
                    lang={lang}
                    hover
                    label={t.byline}
                    className="aspect-[16/9] w-full"
                  />
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
                      {t.updatedLabel}{" "}
                      <time dateTime={article.updated}>
                        {formatDate(article.updated, lang)}
                      </time>
                    </p>
                    <h2 className="t-h3 mt-4 text-ink">
                      <Link
                        href={localizePath(article.path, lang)}
                        className="transition-colors after:absolute after:inset-0 group-hover:text-signal"
                      >
                        {article.h1}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 font-medium leading-relaxed text-ink-600">
                      {article.teaser}
                    </p>
                    <span className="arrow-link mt-6 inline-flex items-center gap-2 font-semibold text-signal">
                      {article.summary.title}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <p className="mt-10 max-w-[68ch] font-medium text-ink-700">
              <RichText text={t.services} lang={lang} />
            </p>
          </Reveal>
        </div>
      </section>

      <div className="border-t border-line">
        <div className="container py-6">
          <TrustStrip lang={lang} compact />
        </div>
      </div>
    </PageFrame>
  );
}
