import Faq from "@/components/Faq";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/** Fragen zum Kanton: Antworten im HTML, ohne JavaScript lesbar (M22) */
export default function KantonFragen(props: KantonProps) {
  const { ui, page } = kantonKontext(props);
  return (
    <section id={abschnitte.fragen} aria-labelledby="fragen-titel" className="section">
      <div className="container grid gap-10 lg:grid-cols-12">
        <h2 id="fragen-titel" className="t-h2 text-ink lg:col-span-4">
          {ui.faq}
        </h2>
        <div className="lg:col-span-8">
          <Faq items={page.faq} lang={props.lang} />
        </div>
      </div>
    </section>
  );
}
