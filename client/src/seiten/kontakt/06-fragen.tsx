import Faq from "@/components/Faq";
import SectionHead from "@/components/SectionHead";
import { kontaktKontext, type KontaktProps } from "./kontext";

/** Einwände vor dem Abschluss: Antworten im HTML, Titel bleibt beim Lesen stehen */
export default function KontaktFragen(props: KontaktProps) {
  const { ui, contact } = kontaktKontext(props);
  return (
    <section id="fragen" aria-labelledby="fragen-titel" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-4">
          <SectionHead id="fragen-titel" title={ui.faq} className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]" />
        </div>
        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <Faq items={contact.faq} lang={props.lang} />
        </div>
      </div>
    </section>
  );
}
