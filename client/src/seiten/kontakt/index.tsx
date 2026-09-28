import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { pageJsonLd } from "../../../../shared/structured-data";
import type { KontaktProps } from "./kontext";
import KontaktHero from "./01-hero";
import KontaktKanaele from "./02-kanaele";
import KontaktAnfrage from "./03-anfrage";
import KontaktAblauf from "./04-ablauf";
import KontaktKarte from "./05-karte";
import KontaktFragen from "./06-fragen";

/**
 * Kontakt (Factory-Strukturnorm, E80): nur Reihenfolge. Kopf, Kontaktwege,
 * was die Anfrage enthalten sollte, Ablauf danach, Karte, Einwände; das
 * Formular (unverändert) trägt PageFrame mit dem Abschluss der Seite.
 */
export default function Kontakt(props: KontaktProps) {
  const { contact } = getDict(props.lang).seiten;
  return (
    <PageFrame lang={props.lang} path="/kontakt" contact={contact.cta}>
      <JsonLd data={pageJsonLd("/kontakt", "ContactPage", props.lang)} />
      <KontaktHero {...props} />
      <KontaktKanaele {...props} />
      <KontaktAnfrage {...props} />
      <KontaktAblauf {...props} />
      <KontaktKarte {...props} />
      <KontaktFragen {...props} />
    </PageFrame>
  );
}
