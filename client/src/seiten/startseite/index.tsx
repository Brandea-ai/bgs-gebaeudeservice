import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { websiteJsonLd } from "../../../../shared/structured-data";
import { getDict } from "../../../../content";
import type { StartseiteProps } from "./kontext";
import StartHero from "./01-hero";
import StartAufEinenBlick from "./02-auf-einen-blick";
import StartLeistungen from "./03-leistungen";
import StartFuerWen from "./04-fuer-wen";
import StartKlarGeregelt from "./05-klar-geregelt";
import StartGebiet from "./06-gebiet";
import StartFragen from "./07-fragen";

/**
 * Startseite (Factory-Strukturnorm, E80, E85): nur Reihenfolge. Aussage, auf
 * einen Blick (Kennzahlen, Profilsatz, Belege in einem Baustein), Leistungen
 * nach Gruppen, Kundengruppen, was geregelt ist und was nicht, Gebiet,
 * Fragen; den Abschluss mit dem Formular trägt PageFrame (home.cta).
 */
export default function Startseite(props: StartseiteProps) {
  const { home } = getDict(props.lang).seiten;
  return (
    <PageFrame lang={props.lang} path="/" contact={home.cta}>
      <JsonLd data={websiteJsonLd(props.lang)} />
      <StartHero {...props} />
      <StartAufEinenBlick {...props} />
      <StartLeistungen {...props} />
      <StartFuerWen {...props} />
      <StartKlarGeregelt {...props} />
      <StartGebiet {...props} />
      <StartFragen {...props} />
    </PageFrame>
  );
}
