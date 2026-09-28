import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { pageJsonLd } from "../../../../shared/structured-data";
import type { UeberUnsProps } from "./kontext";
import UeberUnsHero from "./01-hero";
import UeberUnsArbeitsweise from "./02-arbeitsweise";
import UeberUnsPassen from "./03-passen";
import UeberUnsSprachenGebiet from "./04-sprachen-gebiet";
import UeberUnsNachpruefen from "./05-nachpruefen";

/**
 * Über uns (Factory-Strukturnorm, E80; Umbau E85 nach Audit 25, Abschnitt 8):
 * nur Reihenfolge. Kopf mit Steckbrief, Arbeitsweise, für wen wir passen,
 * Sprachen und Gebiet mit echten Links, Firmenangaben zum Nachprüfen; den
 * Abschluss mit dem Formular trägt PageFrame. Die eigenen Texte wiederholen
 * weder einander noch ihre Überschriften; die Kennzahlen stehen im Steckbrief
 * mit Stichtag, der Kurzsatz im Kopf kommt aus hero.ts (Fundament) und nennt
 * sie derzeit ein zweites Mal. «2006» steht im Hauptinhalt zweimal. Keine
 * Personenbilder als «Team» (E19), kein Name des Geschäftsführers (F6).
 */
export default function UeberUns(props: UeberUnsProps) {
  const { about } = getDict(props.lang).seiten;
  return (
    <PageFrame lang={props.lang} path="/ueber-uns" contact={about.cta}>
      <JsonLd data={pageJsonLd("/ueber-uns", "AboutPage", props.lang)} />
      <UeberUnsHero {...props} />
      <UeberUnsArbeitsweise {...props} />
      <UeberUnsPassen {...props} />
      <UeberUnsSprachenGebiet {...props} />
      <UeberUnsNachpruefen {...props} />
    </PageFrame>
  );
}
