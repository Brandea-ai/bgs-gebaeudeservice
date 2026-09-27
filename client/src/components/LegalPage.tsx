import PageFrame from "@/components/PageFrame";
import Breadcrumbs from "./Breadcrumbs";
import RichText from "./RichText";
import TocNav from "./TocNav";
import { formatDate } from "./ArticlePage";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import type { LegalContent } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Kontaktangaben, die in den Zeilen der Rechtstexte vorkommen (R06): Telefon
 * und Mobil als tel:, E-Mail als mailto:. Der Wortlaut bleibt, nur der Wert
 * wird anklickbar; gilt so für alle vier Sprachen.
 */
const contactLinks = [
  { value: company.email, href: `mailto:${company.email}`, numeric: false },
  { value: company.phone.display, href: company.phone.href, numeric: true },
  { value: company.mobile.display, href: company.mobile.href, numeric: true },
];

const inlineLink = "link-inline inline-flex min-h-6 items-center";

/** Eine Zeile wie «Telefon 041 320 56 10»: der Wert wird zum Link, der Rest bleibt Text */
function linkifyLine(line: string) {
  for (const link of contactLinks) {
    const start = line.indexOf(link.value);
    if (start < 0) continue;
    const end = start + link.value.length;
    return (
      <>
        {line.slice(0, start)}
        <a
          href={link.href}
          className={link.numeric ? `${inlineLink} tabular-nums` : inlineLink}
        >
          {link.value}
        </a>
        {line.slice(end)}
      </>
    );
  }
  return line;
}

/**
 * E-Mail im Fliesstext als mailto: auszeichnen (R06, R08), ohne den Text zu
 * ändern. Steht sie im Inhalt schon als Link, bleibt der Text unverändert.
 */
function withEmailLink(text: string): string {
  if (!text.includes(company.email) || text.includes("mailto:")) return text;
  return text
    .split(company.email)
    .join(`[${company.email}](mailto:${company.email})`);
}

/**
 * Vorlage für Impressum und Datenschutz (F4, F15): Server-Komponente, alle
 * Texte offen im HTML (M21). Statischer Kopf mit Titel, Einleitung und Stand
 * als time-Element (R11), Verzeichnis links mit Scrollspy auf den Sektionen
 * (R03), nummerierte Abschnitte in lesbarer Zeilenlänge, Kontaktangaben als
 * Links (R06). Druck: Kopfzeile, Verzeichnis und Formular entfallen über die
 * Regeln in globals.css (R14); der Seitenkopf ist deshalb kein header-Element.
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
  const { ui, ratgeber, seiten } = getDict(lang);
  // Ankerziele liegen auf den Sektionen, damit der aktive Eintrag beim Lesen bleibt (R03)
  const sectionId = (index: number) => `punkt-${index + 1}`;
  const headingId = (index: number) => `${sectionId(index)}-titel`;

  return (
    <PageFrame lang={lang} path={path} contact={seiten.home.cta}>
      <div className="border-b border-line bg-stone print:border-0 print:bg-transparent">
        <div className="container pt-6 pb-12 md:pt-10 lg:pb-16">
          <Breadcrumbs path={path} lang={lang} />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="min-w-0 lg:col-span-8">
              <h1 className="t-h1 max-w-[22ch] text-ink">{content.h1}</h1>
              {content.intro && (
                <p className="t-lead mt-6 max-w-[56ch] text-ink-600">
                  <RichText text={withEmailLink(content.intro)} lang={lang} />
                </p>
              )}
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink-600 lg:col-span-4 lg:col-start-9 lg:text-right">
              {ratgeber.overview.updatedLabel}{" "}
              <time dateTime={content.updated}>
                {formatDate(content.updated, lang)}
              </time>
            </p>
          </div>
        </div>
      </div>

      <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <aside className="no-print hidden lg:col-span-3 lg:block">
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

        <div className="min-w-0 border-t border-ink lg:col-span-9 xl:col-span-7 xl:col-start-5 print:border-0">
          {content.sections.map((section, index) => (
            <section
              key={section.title}
              id={sectionId(index)}
              aria-labelledby={headingId(index)}
              className="grid gap-3 border-b border-line py-10 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-6"
            >
              <span
                className="font-mono text-sm font-medium text-signal tabular-nums md:pt-1"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h2
                  id={headingId(index)}
                  className="t-h3 mb-4 text-ink print:break-after-avoid"
                >
                  {section.title}
                </h2>
                <div className="prose-body leading-relaxed print:max-w-none">
                  {section.lines && (
                    <ul className="space-y-1 print:break-inside-avoid">
                      {section.lines.map(line => (
                        <li key={line} className="min-h-6">
                          {linkifyLine(line)}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.paragraphs?.map(paragraph => (
                    <p key={paragraph} className="mb-4 last:mb-0">
                      <RichText text={withEmailLink(paragraph)} lang={lang} />
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-signal">
                      {section.items.map(item => (
                        <li key={item}>
                          <RichText text={withEmailLink(item)} lang={lang} />
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
