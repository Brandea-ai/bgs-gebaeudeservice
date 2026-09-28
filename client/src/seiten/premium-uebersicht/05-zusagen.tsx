import { RevealGroup } from "@/components/Reveal";
import PremiumTitel from "./titel";
import { premiumKontext, promiseIcons, type PremiumProps } from "./kontext";

/** Zusagen der Premium-Linie: Haarlinienraster, Symbole ohne Kreis (P05, P07) */
export default function PremiumZusagen(props: PremiumProps) {
  const { content } = premiumKontext(props);
  return (
    <section id="zusagen" aria-labelledby="zusagen-titel" className="on-dark section border-t border-white/10 bg-anthracite-800 text-white">
      <div className="container">
        <PremiumTitel id="zusagen-titel" title={content.promisesTitle} className="mb-12 max-w-3xl" />
        <RevealGroup as="ul" className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-5">
          {content.promises.map(item => {
            const Glyph = promiseIcons[item.key];
            return (
              <li key={item.key} className="bg-anthracite-800 p-6 lg:p-7">
                <Glyph weight="duotone" className="mb-5 size-7 text-brass" aria-hidden="true" />
                <h3 className="hyphens font-display text-lg font-semibold leading-snug text-white">{item.title}</h3>
                <p className="hyphens mt-2 font-medium leading-relaxed text-white/80 [overflow-wrap:anywhere]">{item.text}</p>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
