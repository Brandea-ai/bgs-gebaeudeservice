import Faq from "@/components/Faq";
import SectionHead from "@/components/SectionHead";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/** Einwände vor dem Abschluss (H11): Antworten im HTML, keine FAQ-Strukturdaten */
export default function StartFragen(props: StartseiteProps) {
  const { ui, seiten } = startseiteKontext(props);
  return (
    <section id="fragen" aria-labelledby="fragen-titel" className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-12">
        <SectionHead
          id="fragen-titel"
          title={ui.faq}
          className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)] lg:col-span-4 lg:self-start"
        />
        <div className="min-w-0 lg:col-span-7 lg:col-start-6">
          <Faq items={seiten.home.faq} lang={props.lang} />
        </div>
      </div>
    </section>
  );
}
