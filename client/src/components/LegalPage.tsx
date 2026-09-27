import PageFrame from "@/components/PageFrame";
import RichText from "./RichText";
import TocNav from "./TocNav";
import { formatDate } from "./ArticlePage";
import { getDict } from "../../../content";
import type { LegalContent } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Vorlage für Impressum und Datenschutz (F4): Server-Komponente, alle Texte
 * offen im HTML (M21). Verzeichnis links, Text in lesbarer Zeilenlänge.
 */
export default function LegalPage({
  content,
  path,
  lang = "de",
}: {
  content: LegalContent;
  path: PagePath;
  lang?: Locale;
}) {
  const { ui, ratgeber } = getDict(lang);
  const sectionId = (index: number) => `punkt-${index + 1}`;
  return (
    <PageFrame lang={lang} path={path}>
      <header className="border-b border-line bg-stone">
        <div className="container pt-14 pb-14 md:pt-20 lg:pb-20">
          <h1 className="t-h1 text-ink">{content.h1}</h1>
          {content.intro && (
            <p className="t-lead mt-6 max-w-[60ch] text-ink-600">
              <RichText text={content.intro} lang={lang} />
            </p>
          )}
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-ink-600">
            {ratgeber.overview.updatedLabel} {formatDate(content.updated, lang)}
          </p>
        </div>
      </header>

      <div className="container grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-[calc(var(--header-h)+2.5rem)]">
            <TocNav
              label={ui.onThisPage}
              items={content.sections.map((section, index) => ({
                id: sectionId(index),
                title: section.title,
              }))}
            />
          </div>
        </aside>

        <div className="min-w-0 border-t border-ink lg:col-span-9 xl:col-span-7 xl:col-start-5">
          {content.sections.map((section, index) => (
            <section
              key={section.title}
              aria-labelledby={sectionId(index)}
              className="grid gap-4 border-b border-line py-10 md:grid-cols-[3rem_1fr]"
            >
              <span
                className="font-mono text-sm font-medium text-signal tabular-nums"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h2 id={sectionId(index)} className="t-h3 mb-4 text-ink">
                  {section.title}
                </h2>
                <div className="prose-body leading-relaxed">
                  {section.lines && (
                    <p>
                      {section.lines.map((line, lineIndex) => (
                        <span key={line}>
                          {lineIndex > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </p>
                  )}
                  {section.paragraphs?.map(paragraph => (
                    <p key={paragraph} className="mb-4 last:mb-0">
                      <RichText text={paragraph} lang={lang} />
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-signal">
                      {section.items.map(item => (
                        <li key={item}>
                          <RichText text={item} lang={lang} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
