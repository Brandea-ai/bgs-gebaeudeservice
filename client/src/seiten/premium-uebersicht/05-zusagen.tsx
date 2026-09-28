import { RevealGroup } from "@/components/Reveal";
import PremiumTitel from "./titel";
import { premiumKontext, promiseIcons, type PremiumProps } from "./kontext";

/** Zusagen der Premium-Linie: weisse Felder im Champagner-Haarlinienraster auf Elfenbein (P05, P07) */
export default function PremiumZusagen(props: PremiumProps) {
  const { content } = premiumKontext(props);
  return (
    <section id="zusagen" aria-labelledby="zusagen-titel" className="section border-t border-brass/25 bg-ivory text-anthracite">
      <div className="container">
        <PremiumTitel id="zusagen-titel" title={content.promisesTitle} className="mb-14 max-w-3xl" />
        <RevealGroup as="ul" className="grid gap-px overflow-hidden rounded-[3px] border border-brass-dark/25 bg-brass-dark/20 sm:grid-cols-2 xl:grid-cols-5">
          {content.promises.map(item => {
            const Glyph = promiseIcons[item.key];
            return (
              <li key={item.key} className="bg-white p-6 lg:p-8">
                <Glyph weight="duotone" className="mb-6 size-9 text-brass-dark" aria-hidden="true" />
                <h3 className="hyphens font-premium text-[1.5rem] font-bold leading-tight text-anthracite">{item.title}</h3>
                <p className="hyphens mt-3 font-medium leading-relaxed text-ink-600 [overflow-wrap:anywhere]">{item.text}</p>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
