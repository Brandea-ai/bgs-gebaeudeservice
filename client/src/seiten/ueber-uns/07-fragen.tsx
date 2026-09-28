import Faq from "@/components/Faq";
import SectionHead from "@/components/SectionHead";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/** Einwände (Conversion H8): Kosten, Regionen, kurzfristige Einsätze */
export default function UeberUnsFragen(props: UeberUnsProps) {
  const { ui, about } = ueberUnsKontext(props);
  return (
    <section id="fragen" aria-labelledby="fragen-titel" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <SectionHead id="fragen-titel" title={ui.faq} className="lg:col-span-4" />
        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <Faq items={about.faq} lang={props.lang} />
        </div>
      </div>
    </section>
  );
}
