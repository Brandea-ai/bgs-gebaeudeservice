import { ArrowsClockwise, Leaf, ListChecks, MagnifyingGlass, Prohibit, UserCircle } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import SectionHead from "@/components/SectionHead";
import { RevealGroup } from "@/components/Reveal";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/** Ein Symbol je Grundsatz, in der Reihenfolge der Texte (content/<sprache>/seiten.ts) */
const icons: Icon[] = [MagnifyingGlass, ListChecks, UserCircle, ArrowsClockwise, Leaf, Prohibit];

/** Was bei allen Leistungen gilt: Haarlinienraster, Symbole duotone ohne Fläche */
export default function UebersichtGrundsaetze(props: UebersichtProps) {
  const { servicesOverview } = uebersichtKontext(props);
  const { principles } = servicesOverview;
  return (
    <section id="grundsaetze" aria-labelledby="grundsaetze-titel" className="section border-t border-line bg-white">
      <div className="container">
        <SectionHead id="grundsaetze-titel" title={principles.title} className="mb-12 max-w-3xl" />
        <RevealGroup as="ul" className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {principles.items.map((item, index) => {
            const Glyph = icons[index] ?? ListChecks;
            return (
              <li key={item.title} className="bg-white p-6 lg:p-8">
                <Glyph weight="duotone" className="size-7 text-signal" aria-hidden="true" />
                <h3 className="t-h3 mt-5 text-ink">{item.title}</h3>
                <p className="mt-2 font-medium leading-relaxed text-ink-600">{item.text}</p>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
