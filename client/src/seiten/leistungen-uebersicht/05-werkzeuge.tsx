import { HandSwipeRight, ListChecks, Prohibit } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import Werkzeug from "../leistung/werkzeug";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/** Ein Symbol je Grundsatz, Reihenfolge wie servicesOverview.principles (Umfang, Grenzen) */
const icons: Icon[] = [ListChecks, Prohibit];

/**
 * Unter md werden die Karten der Vergleichstabelle und die Zeitabschnitte des
 * Jahresplans zu einer wischbaren Schiene mit CSS-Scroll-Snap (visuell.md
 * Umbau 7): nebeneinander vergleichen statt vier Karten untereinander. Der
 * Baustein selbst (leistung/werkzeug.tsx) bleibt unverändert, die Klassen
 * greifen auf seine Listen (tool-table-cards, ol). Im Druck gilt die Tabelle.
 * Jede Karte ist nur so hoch wie ihr Inhalt (self-start), damit kurze Karten
 * keine Leerfläche mitschleppen (Prüfbefund S9).
 */
const rail: Partial<Record<string, string>> = {
  table:
    "max-md:[&_.tool-table-cards]:flex max-md:[&_.tool-table-cards]:snap-x max-md:[&_.tool-table-cards]:snap-mandatory max-md:[&_.tool-table-cards]:overflow-x-auto max-md:[&_.tool-table-cards]:pb-2 max-md:[&_.tool-table-cards]:[scrollbar-width:none] max-md:[&_.tool-table-cards>li]:shrink-0 max-md:[&_.tool-table-cards>li]:basis-[88%] max-md:[&_.tool-table-cards>li]:snap-start max-md:[&_.tool-table-cards>li]:self-start",
  timeline:
    "max-md:[&_ol]:flex max-md:[&_ol]:snap-x max-md:[&_ol]:snap-mandatory max-md:[&_ol]:gap-3 max-md:[&_ol]:overflow-x-auto max-md:[&_ol]:border-t-0 max-md:[&_ol]:pb-2 max-md:[&_ol]:[scrollbar-width:none] max-md:[&_ol>li]:shrink-0 max-md:[&_ol>li]:basis-[88%] max-md:[&_ol>li]:snap-start max-md:[&_ol>li]:self-start max-md:[&_ol>li]:content-start max-md:[&_ol>li]:rounded-[3px] max-md:[&_ol>li]:border max-md:[&_ol>li]:bg-stone max-md:[&_ol>li]:p-4",
};

/**
 * Entscheidungshilfen, die nur die Übersicht bündeln kann (inhalt.md 2.1 und 2.2):
 * Vergleich der vier leicht verwechselten Leistungen (druckbar) und der
 * Jahresplan mit Quellen, im Baustein der Leistungsseiten (Werkzeug). Darunter
 * die zwei Grundsätze, die für jede Leistung gelten, als Haarlinien-Zeile.
 */
export default function UebersichtWerkzeuge(props: UebersichtProps) {
  const { lang } = props;
  const { dict, servicesOverview } = uebersichtKontext(props);
  const { tools, principles } = servicesOverview;
  const swipe = dict.seiten.home.services.swipe;
  return (
    <div className="border-t border-line bg-white">
      <div className="container section space-y-10 lg:space-y-14">
        {tools.map(tool => (
          <div key={tool.id} className={rail[tool.kind] ?? ""}>
            {rail[tool.kind] && (
              <p className="mb-3 flex items-center justify-end gap-2 text-sm font-semibold text-ink-600 md:hidden" aria-hidden="true">
                <HandSwipeRight weight="duotone" className="size-5 text-signal" />
                {swipe}
              </p>
            )}
            <Werkzeug tool={tool} lang={lang} premium={false} pageTitle={servicesOverview.h1} />
          </div>
        ))}

        <section id="grundsaetze" aria-labelledby="grundsaetze-titel" className="pt-2">
          <h2 id="grundsaetze-titel" className="t-h3 text-ink">
            {principles.title}
          </h2>
          <ul className="mt-5 grid border-t border-ink md:grid-cols-2 md:gap-x-12">
            {principles.items.map((item, index) => {
              const Glyph = icons[index] ?? ListChecks;
              return (
                <li key={item.title} className="flex items-start gap-4 border-b border-line py-5">
                  <Glyph weight="duotone" className="mt-0.5 size-7 shrink-0 text-signal" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-display text-[1.125rem] font-bold leading-snug text-ink">{item.title}</span>
                    <span className="mt-1 block font-medium leading-relaxed text-ink-600">{item.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
