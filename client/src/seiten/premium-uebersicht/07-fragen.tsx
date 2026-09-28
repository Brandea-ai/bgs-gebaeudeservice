import Faq from "@/components/Faq";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Fragen aus den Unterseiten, ohne «Wo sind Sie tätig?» (beantwortet die Karte darunter) */
export default function PremiumFragen(props: PremiumProps) {
  const { dict, ui } = premiumKontext(props);
  const faq = dict.premium.luxusimmobilien.faq.filter(item => item.answer !== dict.answers.gebiet).slice(0, 7);
  return (
    <section id="fragen" aria-labelledby="fragen-titel" className="on-dark section border-t border-white/10 bg-anthracite-800 text-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <PremiumTitel id="fragen-titel" title={ui.faq} className="lg:col-span-4" />
        <div className="lg:col-span-8">
          <Faq items={faq} lang={props.lang} tone="dark" />
        </div>
      </div>
    </section>
  );
}
