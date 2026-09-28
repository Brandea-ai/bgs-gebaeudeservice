import { Fragment } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CaretDown, Phone } from "@phosphor-icons/react/dist/ssr";
import RichText from "@/components/RichText";
import TocNav from "@/components/TocNav";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import Werkzeug from "@/seiten/leistung/werkzeug";
import Abschnitt from "./abschnitt";
import { formatDate } from "./datum";
import { artikelKontext, type ArtikelProps } from "./kontext";

/**
 * Lesebereich (E80): links das klebende Verzeichnis mit Scrollspy und einer
 * kleinen Offerte-Karte, rechts der Text in lesbarer Zeilenlänge. Auf dem Handy
 * ein aufklappbares Verzeichnis über dem Text. Im Lesefluss keine Bewegung.
 * Werkzeuge (Tabelle, Checkliste, Zeitplan) stehen direkt nach ihrem Abschnitt,
 * in derselben Gestaltung wie auf den Leistungsseiten, mit «Drucken» (E85).
 */
export default function ArtikelInhalt(props: ArtikelProps) {
  const { article, lang } = props;
  const { ui, t, full, toc, sectionId, href } = artikelKontext(props);
  return (
    <div className="container grid gap-10 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
      {/* div statt aside: das Verzeichnis (nav) ist die Landmarke */}
      <div className="hidden lg:col-span-3 lg:block">
        <div className="sticky top-[calc(var(--header-offset)+2rem)] space-y-8">
          <TocNav label={ui.onThisPage} items={toc} />
          <div className="on-dark rounded-[3px] bg-ink p-6 text-white">
            <p className="font-display text-lg font-semibold leading-snug">{article.cta.title}</p>
            <Button asChild size="lg" className="arrow-link btn-lift mt-5 w-full whitespace-nowrap">
              <a href="#kontakt-formular" data-cta="aside">
                {t.offerShort}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </a>
            </Button>
            <a
              href={company.phone.href}
              className="mt-3 flex min-h-11 items-center justify-center gap-2 py-2 text-sm font-semibold tabular-nums text-white underline-offset-4 hover:underline"
            >
              <Phone weight="duotone" className="size-4" aria-hidden="true" />
              {company.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div className="min-w-0 space-y-12 lg:col-span-9 lg:space-y-16 xl:col-span-8 xl:col-start-5">
        {/* Verzeichnis auf dem Handy: aufklappbar, ohne JavaScript */}
        <details className="group rounded-[3px] border border-line bg-stone lg:hidden">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {ui.onThisPage}
            <CaretDown weight="duotone" className="size-5 shrink-0 text-signal transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <nav aria-label={ui.onThisPage} className="border-t border-line px-5 pb-3">
            <ul>
              {toc.map(item => (
                <li key={item.id} className="border-b border-line last:border-0">
                  <a href={`#${item.id}`} className="block py-3 font-medium leading-snug text-ink-700 hover:text-signal">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>

        {article.intro && (
          <div className="max-w-[36em] space-y-6 font-display text-[1.25rem] font-medium leading-[1.6] text-ink md:text-[1.375rem]">
            {article.intro.map(paragraph => (
              <p key={paragraph}>
                <RichText text={paragraph} lang={lang} />
              </p>
            ))}
          </div>
        )}

        {full.sections.map((section, index) => (
          <Fragment key={section.title}>
            <Abschnitt section={section} id={sectionId(index)} lang={lang} />
            {section.tool && <Werkzeug tool={section.tool} lang={lang} premium={false} pageTitle={article.h1} />}
          </Fragment>
        ))}

        {/* Ende des Artikels: Herkunft, Stand und der Weg zurück zur Übersicht */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-ink pt-6">
          <p className="text-sm font-medium text-mute">
            {t.byline} · {t.updatedLabel} <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
          </p>
          <Link
            href={href("/blog")}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal"
          >
            <ArrowLeft weight="duotone" className="size-5 text-signal" aria-hidden="true" />
            {t.allArticles}
          </Link>
        </div>
      </div>
    </div>
  );
}
