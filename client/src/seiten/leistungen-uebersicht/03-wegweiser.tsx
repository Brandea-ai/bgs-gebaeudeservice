import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import MobilerWegweiser from "./mobiler-wegweiser";
import SectionHead from "@/components/SectionHead";
import { RevealGroup } from "@/components/Reveal";
import { iconFor } from "@/components/serviceIcons";
import { localizePath } from "../../../../shared/i18n";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/**
 * Wegweiser «Welche Leistung passt?»: häufige Situationen, je eine Zeile mit
 * der passenden Leistung. Die ganze Zeile ist der Link, Symbole duotone ohne
 * Fläche, Haarlinien statt Karten. Der Titel klebt ab lg neben der Liste,
 * damit die linke Spalte keine Leerfläche lässt (visuell.md, /leistungen).
 * Mobil dichter gesetzt (Prüfbefund S2), die Situation bleibt stehen: Sie ist
 * der Grund für den Wegweiser.
 */
export default function UebersichtWegweiser(props: UebersichtProps) {
  const { lang } = props;
  const { servicesOverview, pages } = uebersichtKontext(props);
  const { guide } = servicesOverview;
  return (
    <section
      id="wegweiser"
      aria-labelledby="wegweiser-titel"
      className="section bg-white max-sm:py-8"
    >
      <div className="container grid gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-x-16">
        <SectionHead
          id="wegweiser-titel"
          title={guide.title}
          intro={guide.intro}
          className="lg:sticky lg:top-[calc(var(--header-offset)+var(--subnav-h,0px)+2rem)] lg:col-span-4 lg:self-start"
        />
        <MobilerWegweiser showLabel={guide.show} hideLabel={guide.hide}>
          <RevealGroup
            as="ul"
            className="border-t border-line md:grid md:grid-cols-2 md:gap-x-10"
          >
            {guide.items.map(item => {
              const Glyph = iconFor(item.path);
              return (
                <li key={item.situation} className="border-b border-line">
                  <Link
                    href={localizePath(item.path, lang)}
                    className="arrow-link group grid h-full grid-cols-[1.5rem_minmax(0,1fr)] gap-x-3 py-3 sm:grid-cols-[1.75rem_minmax(0,1fr)] sm:gap-x-4 sm:py-5"
                  >
                    <Glyph
                      weight="duotone"
                      className="mt-0.5 size-6 text-signal sm:size-7"
                      aria-hidden="true"
                    />
                    <span className="min-w-0">
                      <span className="block text-[0.9375rem] font-medium leading-relaxed text-ink-600 sm:text-base">
                        {item.situation}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-2 font-semibold text-ink transition-colors group-hover:text-signal sm:mt-2">
                        {pages[item.path].label}
                        <ArrowRight
                          weight="duotone"
                          className="size-4 shrink-0 text-signal"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </RevealGroup>
        </MobilerWegweiser>
      </div>
    </section>
  );
}
