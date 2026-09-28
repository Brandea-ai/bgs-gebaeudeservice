import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import { premiumLightLink } from "@/components/premiumStyles";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/**
 * Typische Objekte des Kantons (Audit visuell, Umbau 8): statt vier gleicher
 * Kästen eine ruhige Liste im Zweispalter mit Haarlinie oben. Objekte, die zum
 * Premium-Bereich führen, stehen als helle Premium-Karte mit Champagner-Kontur,
 * Serifentitel und Champagner-Symbol, nie in Signalrot.
 */
export default function KantonObjekte(props: KantonProps) {
  const { lang } = props;
  const { kui, page, symbol } = kantonKontext(props);
  return (
    <section id={abschnitte.objekte} aria-labelledby="objekte-titel" className="section border-y border-line bg-stone">
      <div className="container">
        <SectionHead id="objekte-titel" title={kui.objekte} />
        <RevealGroup as="ul" className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:mt-12">
          {page.objekte.map((objekt, index) => {
            const Glyph = symbol(index);
            const premium = Boolean(objekt.premium);
            return (
              <li
                key={objekt.title}
                className={`flex min-w-0 gap-5 ${premium ? "premium-card rounded-[3px] p-6 lg:p-7" : "border-t-2 border-ink/10 pt-7"}`}
              >
                <Glyph
                  weight="duotone"
                  className={`mt-0.5 size-8 shrink-0 ${premium ? "text-brass-dark" : "text-signal"}`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3
                    className={
                      premium
                        ? "font-premium text-[1.75rem] font-semibold leading-tight text-anthracite"
                        : "t-h3 text-ink"
                    }
                  >
                    {objekt.title}
                  </h3>
                  <p className="mt-3 max-w-[58ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">
                    <RichText text={objekt.text} lang={lang} linkClassName={premium ? premiumLightLink : undefined} />
                  </p>
                </div>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
