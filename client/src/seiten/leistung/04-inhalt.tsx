import { ArrowRight, Phone, X } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import TocNav from "@/components/TocNav";
import { premiumHeadingSm, premiumLightLink } from "@/components/premiumStyles";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { detailImage } from "../../../../shared/hero-images";
import { navDicts } from "../../../../content/navigation";
import Checkliste from "./checkliste";
import { leistungKontext, type LeistungProps } from "./kontext";
import Werkzeug from "./werkzeug";
import { leistungVerzeichnis } from "./navigation";

/**
 * Hauptinhalt: Werkzeuge (E85), Umfang mit ehrlicher Abgrenzung, weitere
 * Abschnitte, daneben Verzeichnis in Seitenreihenfolge und Offerte-Karte.
 * Premium bis zum Ende in der hellen Welt: Elfenbein, Serifentitel, Champagner
 * statt Signalrot. Standard ohne Champagner (Audit visuell, Umbau 2).
 */
export default function LeistungInhalt(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, sectionId, premium } = leistungKontext(props);
  const { menu } = navDicts[lang];
  const h2 = premium ? premiumHeadingSm : "t-h2 text-ink";
  const link = premium ? premiumLightLink : undefined;
  const sections = content.sections ?? [];
  const tools = content.tools ?? [];
  // Die ersten zwei Abschnitte stehen im Zickzack, sobald die Seite ein Detailbild hat
  const shown = detailImage[content.path] ? 2 : 0;
  // Verzeichnis in der Reihenfolge der Seite: Zickzack, Werkzeuge, Umfang, übrige Abschnitte
  const toc = leistungVerzeichnis(props);
  return (
    <div
      className={
        premium
          ? "border-t border-brass/25 bg-ivory text-anthracite"
          : undefined
      }
    >
      <div className="container grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-[calc(var(--header-offset)+2rem)] space-y-8">
            <TocNav
              label={ui.onThisPage}
              items={toc}
              tone={premium ? "premium" : "light"}
            />
            <div
              className={
                premium
                  ? "premium-card rounded-[3px] p-6 text-anthracite"
                  : "on-dark rounded-[3px] bg-ink p-6 text-white"
              }
            >
              <p
                className={
                  premium
                    ? "font-premium text-[1.5rem] font-bold leading-tight"
                    : "font-display text-lg font-semibold leading-snug"
                }
              >
                {content.cta.title}
              </p>
              {/* Schmale Spalte ab lg (3 von 12): Beschriftung darf umbrechen, der Knopf wächst mit (P1) */}
              <Button
                asChild
                size="lg"
                className={`arrow-link mt-5 h-auto min-h-12 w-full py-3 text-center leading-snug text-balance has-[>svg]:px-4 ${premium ? "bg-anthracite text-white hover:bg-anthracite-700" : "btn-lift"}`}
              >
                <a href="#kontakt-formular" data-cta="aside">
                  {menu.cta.label}
                  <ArrowRight weight="duotone" aria-hidden="true" />
                </a>
              </Button>
              <a
                href={company.phone.href}
                className={`mt-3 flex min-h-11 items-center justify-center gap-2 py-2 text-sm font-semibold tabular-nums transition-colors ${premium ? "text-anthracite hover:text-brass-dark" : "text-white underline-offset-4 hover:underline"}`}
              >
                <Phone
                  weight="duotone"
                  className={`size-4 ${premium ? "text-brass-dark" : ""}`}
                  aria-hidden="true"
                />
                {company.phone.display}
              </a>
            </div>
          </div>
        </aside>

        <div className="min-w-0 space-y-16 lg:col-span-9 lg:space-y-24 xl:col-span-8 xl:col-start-5">
          {tools.length > 0 && (
            <div className="space-y-10 lg:space-y-14">
              {tools.map(tool => (
                <Werkzeug
                  key={tool.id}
                  tool={tool}
                  lang={lang}
                  premium={premium}
                  pageTitle={content.h1}
                />
              ))}
            </div>
          )}

          <section id="umfang" aria-labelledby="umfang-titel">
            <h2 id="umfang-titel" className={h2}>
              {content.scope.title}
            </h2>
            {content.scope.intro && (
              <p className="t-lead mt-5 max-w-[60ch] text-ink-600">
                <RichText
                  text={content.scope.intro}
                  lang={lang}
                  linkClassName={link}
                />
              </p>
            )}
            <div className="mt-8">
              <Checkliste
                items={content.scope.items}
                lang={lang}
                premium={premium}
              />
            </div>
            {content.scope.notIncluded && (
              <Reveal
                as="div"
                className={`mt-10 rounded-[3px] border p-6 md:p-8 ${premium ? "border-brass-dark/25 bg-white text-anthracite" : "border-ink/15 bg-stone text-ink"}`}
              >
                <h3
                  id="nicht-enthalten"
                  className={
                    premium
                      ? "font-premium text-[1.625rem] font-bold leading-tight"
                      : "font-display text-lg font-bold"
                  }
                >
                  {ui.notIncluded}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
                  {content.scope.notIncluded.map(item => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 font-medium leading-relaxed ${premium ? "text-ink-600" : "text-ink"}`}
                    >
                      <X
                        weight="duotone"
                        className={`mt-[0.2em] size-5 shrink-0 ${premium ? "text-brass-dark" : "text-signal"}`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0">
                        <RichText
                          text={item}
                          lang={lang}
                          linkClassName={link}
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
              <section
                key={section.title}
                id={sectionId(index)}
                aria-labelledby={`${sectionId(index)}-titel`}
              >
                <h2 id={`${sectionId(index)}-titel`} className={h2}>
                  {section.title}
                </h2>
                {section.paragraphs && (
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map(paragraph => (
                      <p
                        key={paragraph}
                        className="prose-body text-[1.0625rem]"
                      >
                        <RichText
                          text={paragraph}
                          lang={lang}
                          linkClassName={link}
                        />
                      </p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <div className="mt-7">
                    <Checkliste
                      items={section.items}
                      lang={lang}
                      premium={premium}
                    />
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
