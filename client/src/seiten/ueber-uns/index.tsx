import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { pageJsonLd } from "../../../../shared/structured-data";
import type { UeberUnsProps } from "./kontext";
import UeberUnsHero from "./01-hero";
import UeberUnsArbeitsweise from "./02-arbeitsweise";
import UeberUnsGeschichte from "./03-geschichte";
import UeberUnsSprachenGebiet from "./04-sprachen-gebiet";
import UeberUnsWerte from "./05-werte";
import UeberUnsAnsprechperson from "./06-ansprechperson";
import UeberUnsFragen from "./07-fragen";

/**
 * Über uns (Factory-Strukturnorm, E80): nur Reihenfolge. Kopf mit Kennzahlen,
 * Arbeitsweise, Geschichte, Sprachen und Gebiet, Werte, Ansprechperson mit
 * Registerdaten, Einwände; den Abschluss mit dem Formular trägt PageFrame.
 * Keine Personenbilder als «Team» (E19).
 */
export default function UeberUns(props: UeberUnsProps) {
  const { about } = getDict(props.lang).seiten;
  return (
    <PageFrame lang={props.lang} path="/ueber-uns" contact={about.cta}>
      <JsonLd data={pageJsonLd("/ueber-uns", "AboutPage", props.lang)} />
      <UeberUnsHero {...props} />
      <UeberUnsArbeitsweise {...props} />
      <UeberUnsGeschichte {...props} />
      <UeberUnsSprachenGebiet {...props} />
      <UeberUnsWerte {...props} />
      <UeberUnsAnsprechperson {...props} />
      <UeberUnsFragen {...props} />
    </PageFrame>
  );
}
