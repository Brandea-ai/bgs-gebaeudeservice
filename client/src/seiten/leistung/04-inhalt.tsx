import { ArrowRight, Phone, X } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import TocNav from "@/components/TocNav";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { detailImage } from "../../../../shared/hero-images";
import Checkliste from "./checkliste";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Umfang mit ehrlicher Abgrenzung, weitere Abschnitte, daneben Verzeichnis und Offerte-Karte */
export default function LeistungInhalt(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, sectionId } = leistungKontext(props);
  const sections = content.sections ?? [];
  // Die ersten zwei Abschnitte stehen im Zickzack, sobald die Seite ein Detailbild hat
  const shown = detailImage[content.path] ? 2 : 0;
  const toc = [
    ...sections.map((section, index) => ({ id: sectionId(index), title: section.title })),
    { id: "umfang", title: content.scope.title },
    { id: "ablauf", title: ui.steps },
    { id: "fragen", title: ui.faq },
    { id: "verwandt", title: ui.related },
  ];
  return (
    <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
      <aside className="hidden lg:col-span-3 lg:block">
        <div className="sticky top-[calc(var(--header-offset)+2rem)] space-y-8">
          <TocNav label={ui.onThisPage} items={toc} />
          <div className="on-dark rounded-[3px] bg-ink p-6 text-white">
            <p className="font-display text-lg font-semibold leading-snug">{content.cta.title}</p>
            <Button asChild size="lg" className="arrow-link btn-lift mt-5 w-full">
              <a href="#kontakt-formular" data-cta="aside">
                {ui.offerCta}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </a>
            </Button>
            <a
              href={company.phone.href}
              className="mt-3 flex min-h-11 items-center justify-center gap-2 py-2 text-sm font-semibold tabular-nums text-white transition-colors hover:text-brass"
            >
              <Phone weight="duotone" className="size-4" aria-hidden="true" />
              {company.phone.display}
            </a>
          </div>
        </div>
      </aside>

      <div className="min-w-0 space-y-16 lg:col-span-9 lg:space-y-24 xl:col-span-8 xl:col-start-5">
        <section id="umfang" aria-labelledby="umfang-titel">
          <h2 id="umfang-titel" className="t-h2 text-ink">{content.scope.title}</h2>
          {content.scope.intro && (
            <p className="t-lead mt-5 max-w-[60ch] text-ink-600">
              <RichText text={content.scope.intro} lang={lang} />
            </p>
          )}
          <div className="mt-8">
            <Checkliste items={content.scope.items} lang={lang} />
          </div>
          {content.scope.notIncluded && (
            <Reveal as="div" className="on-dark mt-8 rounded-[3px] bg-ink p-6 text-white md:p-8">
              <h3 id="nicht-enthalten" className="font-display text-lg font-semibold">{ui.notIncluded}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {content.scope.notIncluded.map(item => (
                  <li key={item} className="flex items-start gap-3 font-medium leading-relaxed text-white/90">
                    <X weight="duotone" className="mt-[0.2em] size-5 shrink-0 text-brass" aria-hidden="true" />
                    <span className="min-w-0">
                      <RichText
                        text={item}
                        lang={lang}
                        linkClassName="font-semibold text-brass underline underline-offset-4 hover:text-white"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </section>

        {sections.slice(shown).map((section, offset) => {
          const index = offset + shown;
          return (
            <section key={section.title} id={sectionId(index)} aria-labelledby={`${sectionId(index)}-titel`}>
              <h2 id={`${sectionId(index)}-titel`} className="t-h2 text-ink">{section.title}</h2>
              {section.paragraphs && (
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph} className="prose-body text-[1.0625rem]">
                      <RichText text={paragraph} lang={lang} />
                    </p>
                  ))}
                </div>
              )}
              {section.items && (
                <div className="mt-7">
                  <Checkliste items={section.items} lang={lang} />
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
