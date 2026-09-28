import { Check, CheckCircle, Question } from "@phosphor-icons/react/dist/ssr";
import RichText from "@/components/RichText";
import type { ArticleSection } from "../../../../content/types";
import { company } from "../../../../shared/company";
import type { Locale } from "../../../../shared/i18n";

/** Überschrift eines Artikelabschnitts: eine Stufe ruhiger als t-h2, gut im Lesefluss */
export const sectionTitle = "font-display text-[clamp(1.6rem,1.15rem+1.3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink";

/**
 * Ein Abschnitt des Artikels (Text unverändert, nur Gestaltung): Ankerziel auf
 * der Sektion, Überschrift per aria-labelledby. Abschnitte, die das Unternehmen
 * im Titel nennen, sind dessen Antwort auf die neutrale Beratung und stehen
 * abgesetzt auf Stein (F06). Unterabschnitte als Tafeln, nummerierte Listen
 * als stehende Ablauflinie (F10), Fragenlisten mit Fragezeichen statt Häkchen.
 */
export default function Abschnitt({ section, id, lang }: { section: ArticleSection; id: string; lang: Locale }) {
  const answer = section.title.includes(company.brand);
  const questions = section.items?.every(item => item.trimEnd().endsWith("?")) ?? false;
  const odd = (section.subsections?.length ?? 0) % 2 === 1;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titel`}
      className={answer ? "rounded-[3px] border border-line bg-stone p-6 sm:p-8 lg:p-10" : "border-t border-line pt-10 lg:pt-12"}
    >
      <h2 id={`${id}-titel`} className={sectionTitle}>
        {section.title}
      </h2>
      <div className="mt-6 space-y-7 text-[1.0625rem] leading-[1.75] text-ink-700 md:text-[1.125rem]">
        {section.paragraphs && (
          <div className="max-w-[68ch] space-y-5">
            {section.paragraphs.map(paragraph => (
              <p key={paragraph}>
                <RichText text={paragraph} lang={lang} />
              </p>
            ))}
          </div>
        )}

        {section.definitions && (
          <dl className="divide-y divide-line overflow-hidden rounded-[3px] border border-line bg-white">
            {section.definitions.map(definition => (
              <div key={definition.term} className="grid gap-1.5 p-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 md:p-6">
                <dt className="hyphens font-display font-bold leading-snug text-ink">{definition.term}</dt>
                <dd className="min-w-0 text-[1rem] leading-relaxed md:text-[1.0625rem]">
                  <RichText text={definition.text} lang={lang} />
                </dd>
              </div>
            ))}
          </dl>
        )}

        {section.subsections && (
          <div className="grid gap-4 md:grid-cols-2">
            {section.subsections.map((subsection, index) => (
              <div
                key={subsection.title}
                className={`min-w-0 rounded-[3px] border border-line bg-white p-6 ${odd && index === section.subsections!.length - 1 ? "md:col-span-2" : ""}`}
              >
                <h3 className="font-display text-[1.1875rem] font-bold leading-snug text-ink">{subsection.title}</h3>
                <p className="mt-2.5 text-[1rem] leading-relaxed md:text-[1.0625rem]">
                  <RichText text={subsection.text} lang={lang} />
                </p>
              </div>
            ))}
          </div>
        )}

        {section.items &&
          (section.ordered ? (
            <ol className="max-w-[68ch]">
              {section.items.map((item, index) => (
                <li key={item} className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 pb-6 last:pb-0">
                  {/* Stehende Linie zwischen den Schritten, ohne Ziffern */}
                  {index < section.items!.length - 1 && (
                    <span className="absolute bottom-0 left-4 top-9 w-px -translate-x-1/2 bg-ink/15" aria-hidden="true" />
                  )}
                  <CheckCircle weight="duotone" className="size-8 text-signal" aria-hidden="true" />
                  <p className="pt-1 font-medium leading-relaxed text-ink">
                    <RichText text={item} lang={lang} />
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <ul className={`max-w-[68ch] ${questions ? "grid gap-3" : "border-t border-line"}`}>
              {section.items.map(item => (
                <li
                  key={item}
                  className={
                    questions
                      ? "flex items-start gap-3 rounded-[3px] border border-line bg-white px-5 py-4 font-medium text-ink"
                      : "flex items-start gap-3 border-b border-line py-4"
                  }
                >
                  {questions ? (
                    <Question weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
                  ) : (
                    <Check weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-signal" aria-hidden="true" />
                  )}
                  <span className="min-w-0">
                    <RichText text={item} lang={lang} />
                  </span>
                </li>
              ))}
            </ul>
          ))}

        {section.note && (
          <p className="max-w-[68ch]">
            <RichText text={section.note} lang={lang} />
          </p>
        )}
      </div>
    </section>
  );
}
