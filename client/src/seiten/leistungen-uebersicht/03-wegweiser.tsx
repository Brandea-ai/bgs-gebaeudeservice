import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
 */
export default function UebersichtWegweiser(props: UebersichtProps) {
  const { lang } = props;
  const { servicesOverview, pages } = uebersichtKontext(props);
  const { guide } = servicesOverview;
  return (
    <section id="wegweiser" aria-labelledby="wegweiser-titel" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <SectionHead
          id="wegweiser-titel"
          title={guide.title}
          intro={guide.intro}
          className="lg:sticky lg:top-[calc(var(--header-offset)+var(--subnav-h,0px)+2rem)] lg:col-span-4 lg:self-start"
        />
        <RevealGroup as="ul" className="border-t border-line md:grid md:grid-cols-2 md:gap-x-10 lg:col-span-8">
          {guide.items.map(item => {
            const Glyph = iconFor(item.path);
            return (
              <li key={item.situation} className="border-b border-line">
                <Link
                  href={localizePath(item.path, lang)}
                  className="arrow-link group grid h-full grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 py-4 sm:py-5"
                >
                  <Glyph weight="duotone" className="mt-0.5 size-7 text-signal" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-[0.9375rem] font-medium leading-relaxed text-ink-600 sm:text-base">{item.situation}</span>
                    <span className="mt-2 inline-flex items-center gap-2 font-semibold text-ink transition-colors group-hover:text-signal">
                      {pages[item.path].label}
                      <ArrowRight weight="duotone" className="size-4 shrink-0 text-signal" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
