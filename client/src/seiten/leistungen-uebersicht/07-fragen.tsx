import Faq from "@/components/Faq";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/** Allgemeine Fragen zu allen Leistungen, Antworten im HTML ohne JavaScript lesbar (M22) */
export default function UebersichtFragen(props: UebersichtProps) {
  const { ui, servicesOverview } = uebersichtKontext(props);
  return (
    <section id="fragen" aria-labelledby="fragen-titel" className="section border-t border-line bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12">
        <h2 id="fragen-titel" className="t-h2 text-ink lg:col-span-4">{ui.faq}</h2>
        <div className="lg:col-span-8">
          <Faq items={servicesOverview.faq} lang={props.lang} />
        </div>
      </div>
    </section>
  );
}
