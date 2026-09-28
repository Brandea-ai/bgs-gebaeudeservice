import Faq from "@/components/Faq";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Einwände: Antworten im HTML, ohne JavaScript lesbar (M22) */
export default function LeistungFragen(props: LeistungProps) {
  const { ui } = leistungKontext(props);
  return (
    <section id="fragen" aria-labelledby="fragen-titel" className="section">
      <div className="container grid gap-10 lg:grid-cols-12">
        <h2 id="fragen-titel" className="t-h2 text-ink lg:col-span-4">{ui.faq}</h2>
        <div className="lg:col-span-8">
          <Faq items={props.content.faq} lang={props.lang} />
        </div>
      </div>
    </section>
  );
}
