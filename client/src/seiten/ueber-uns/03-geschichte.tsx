import SectionHead from "@/components/SectionHead";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Geschichte (E18, E58): nur belegte Eckdaten als stehende Linie, auf dem
 * Handy senkrecht, ab lg waagrecht. Jahreszahl und Stichwort als Marke, keine
 * Nummerierung.
 */
export default function UeberUnsGeschichte(props: UeberUnsProps) {
  const { history } = ueberUnsKontext(props).about;
  return (
    <section id="geschichte" aria-labelledby="geschichte-titel" className="section border-t border-line bg-stone">
      <div className="container">
        <SectionHead id="geschichte-titel" title={history.title} />
        <ol className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          <span className="absolute bottom-2 left-[0.3125rem] top-2 w-px bg-ink/20 lg:inset-x-0 lg:bottom-auto lg:top-[0.3125rem] lg:h-px lg:w-auto" aria-hidden="true" />
          {history.items.map(item => (
            <li key={item.label} className="relative min-w-0 pl-9 lg:pl-0 lg:pt-10">
              <span className="absolute left-0 top-1.5 size-[0.6875rem] rounded-full border-2 border-signal bg-stone lg:top-0" aria-hidden="true" />
              <p className="t-figure text-[2rem] text-signal lg:text-[2.5rem]">{item.label}</p>
              <h3 className="t-h3 mt-3 text-ink">{item.title}</h3>
              <p className="mt-3 max-w-[40ch] font-medium leading-relaxed text-ink-600">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
