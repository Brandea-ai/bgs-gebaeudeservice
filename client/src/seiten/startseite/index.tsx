import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { websiteJsonLd } from "../../../../shared/structured-data";
import { getDict } from "../../../../content";
import type { StartseiteProps } from "./kontext";
import StartHero from "./01-hero";
import StartVertrauen from "./02-vertrauen";
import StartLeistungen from "./03-leistungen";
import StartFuerWen from "./04-fuer-wen";
import StartAblauf from "./05-ablauf";
import StartZusagen from "./06-zusagen";
import StartGebiet from "./07-gebiet";
import StartFragen from "./08-fragen";

/**
 * Startseite (Factory-Strukturnorm, E80): nur Reihenfolge. Aussage, Belege,
 * Leistungen, Kundengruppen, Ablauf, Zusagen, Gebiet, Einwände; den Abschluss
 * mit dem Formular trägt PageFrame (home.cta).
 */
export default function Startseite(props: StartseiteProps) {
  const { home } = getDict(props.lang).seiten;
  return (
    <PageFrame lang={props.lang} path="/" contact={home.cta}>
      <JsonLd data={websiteJsonLd(props.lang)} />
      <StartHero {...props} />
      <StartVertrauen {...props} />
      <StartLeistungen {...props} />
      <StartFuerWen {...props} />
      <StartAblauf {...props} />
      <StartZusagen {...props} />
      <StartGebiet {...props} />
      <StartFragen {...props} />
    </PageFrame>
  );
}
