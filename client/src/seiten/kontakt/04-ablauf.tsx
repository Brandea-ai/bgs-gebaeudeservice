import ProcessScrolly from "@/components/ProcessScrolly";
import SectionHead from "@/components/SectionHead";
import { kontaktKontext, type KontaktProps } from "./kontext";

/** Nach der Anfrage (E80): Prozess-Sektion mit einem Video je Schritt, wie auf der Startseite */
export default function KontaktAblauf(props: KontaktProps) {
  const { contact } = kontaktKontext(props);
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-line bg-white">
      <div className="container">
        <SectionHead id="ablauf-titel" title={contact.steps.title} className="mb-12 lg:mb-16" />
        <ProcessScrolly
          steps={contact.steps.items}
          lang={props.lang}
          variant="wide"
          figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
          idPrefix="ablauf-schritt"
        />
      </div>
    </section>
  );
}
