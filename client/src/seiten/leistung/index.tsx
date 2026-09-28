import PageFrame from "@/components/PageFrame";
import JsonLd from "@/components/JsonLd";
import { serviceJsonLd } from "../../../../shared/structured-data";
import type { LeistungProps } from "./kontext";
import LeistungHero from "./01-hero";
import LeistungVertrauen from "./02-vertrauen";
import LeistungEinsatz from "./03-einsatz";
import LeistungInhalt from "./04-inhalt";
import LeistungAblauf from "./05-ablauf";
import LeistungFragen from "./06-fragen";
import LeistungVerwandt from "./07-verwandt";

/** Vorlage der Leistungs- und Premiumseiten (Factory-Strukturnorm, E80): nur Reihenfolge */
export default function Leistung(props: LeistungProps) {
  return (
    <PageFrame lang={props.lang} path={props.content.path} contact={props.content.cta}>
      <JsonLd data={serviceJsonLd(props.content.path, props.lang)} />
      <LeistungHero {...props} />
      <LeistungVertrauen {...props} />
      <LeistungEinsatz {...props} />
      <LeistungInhalt {...props} />
      <LeistungAblauf {...props} />
      <LeistungFragen {...props} />
      <LeistungVerwandt {...props} />
    </PageFrame>
  );
}
