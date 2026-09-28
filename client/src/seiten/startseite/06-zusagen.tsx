import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { startseiteKontext, type StartseiteProps } from "./kontext";
import { zusagenSymbole } from "./zusagen-symbole";

// Offerte und Gebiet stehen schon im Ablauf und im Einzugsgebiet daneben (S-07)
const shown = ["persoenlich", "versichert", "sprachen", "umwelt"];

/** Zusagen (E18, M47): belegte Punkte mit Duotone-Symbol, ohne Fläche dahinter */
export default function StartZusagen(props: StartseiteProps) {
  const { promises } = startseiteKontext(props).seiten.about;
  return (
    <section id="zusagen" aria-labelledby="zusagen-titel" className="section border-t border-line bg-stone">
      <div className="container">
        <SectionHead id="zusagen-titel" title={promises.title} />
        <RevealGroup as="ul" className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {promises.items
            .filter(item => shown.includes(item.key))
            .map(item => {
              const Glyph = zusagenSymbole[item.key] ?? SealCheck;
              return (
                <li key={item.key} className="min-w-0 border-t border-ink pt-6">
                  <Glyph weight="duotone" className="size-9 text-signal" aria-hidden="true" />
                  <h3 className="t-h3 mt-5 text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-[42ch] font-medium leading-relaxed text-ink-600">{item.text}</p>
                </li>
              );
            })}
        </RevealGroup>
      </div>
    </section>
  );
}
