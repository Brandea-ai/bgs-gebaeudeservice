import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { pageJsonLd } from "../../../../shared/structured-data";
import type { KontaktProps } from "./kontext";
import KontaktHero from "./01-hero";
import KontaktKanaele from "./02-kanaele";
import KontaktFormular from "./03-formular";
import KontaktAblauf from "./04-ablauf";
import KontaktBesichtigung from "./05-besichtigung";
import KontaktKarte from "./06-karte";
import KontaktFragen from "./07-fragen";

/**
 * Kontakt (Factory-Strukturnorm, E80, Audit visuell /kontakt): nur Reihenfolge.
 * Kopf, Kontaktwege, direkt darunter das Formular mit dem, was in die Anfrage
 * gehört, dann was nach dem Absenden passiert, die Besichtigung vorbereiten
 * (Baustein 9.1), Karte und Fragen. Das Formular steht nur einmal auf der
 * Seite: ContactSection in PageFrame liefert auf /kontakt nichts.
 */
export default function Kontakt(props: KontaktProps) {
  const { contact } = getDict(props.lang).seiten;
  return (
    <PageFrame lang={props.lang} path="/kontakt" contact={contact.cta}>
      <JsonLd data={pageJsonLd("/kontakt", "ContactPage", props.lang)} />
      <KontaktHero {...props} />
      <KontaktKanaele {...props} />
      <KontaktFormular {...props} />
      <KontaktAblauf {...props} />
      <KontaktBesichtigung {...props} />
      <KontaktKarte {...props} />
      <KontaktFragen {...props} />
    </PageFrame>
  );
}
