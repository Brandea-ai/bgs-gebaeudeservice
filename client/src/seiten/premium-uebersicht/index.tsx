import PageFrame from "@/components/PageFrame";
import JsonLd from "@/components/JsonLd";
import SectionNav from "@/components/SectionNav";
import { itemListJsonLd } from "../../../../shared/structured-data";
import { premiumKontext, type PremiumProps } from "./kontext";
import PremiumHero from "./01-hero";
import PremiumBereiche from "./02-bereiche";
import PremiumAusserdem from "./03-ausserdem";
import PremiumDiskretion from "./04-diskretion";
import PremiumZusagen from "./05-zusagen";
import PremiumAblauf from "./06-ablauf";
import PremiumFragen from "./07-fragen";
import PremiumOrte from "./08-orte";

/**
 * Premium-Übersicht /premium (Factory-Strukturnorm, E80): eigene Welt in
 * Anthrazit und Champagner mit Serifenschrift, nie Signalrot. Nur Reihenfolge.
 * Der Abschluss «Diskret anfragen» beschriftet den Formularabschnitt.
 */
export default function PremiumUebersicht(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui, content } = premiumKontext(props);
  const navItems = [
    { id: "bereiche", title: dict.seiten.servicesOverview.premium.title },
    { id: "diskretion", title: content.discretion.title },
    { id: "zusagen", title: content.promisesTitle },
    { id: "ablauf", title: ui.steps },
    { id: "orte", title: dict.misc.map.areaLabel },
  ];
  return (
    <PageFrame lang={lang} path="/premium" mainClassName="bg-anthracite" contact={content.cta}>
      {/* Hub zu den drei Premium-Seiten als ItemList */}
      <JsonLd data={itemListJsonLd("/premium", content.offers.map(offer => offer.path), lang)} />
      <PremiumHero {...props} />
      <SectionNav label={ui.onThisPage} items={navItems} tone="dark" />
      <PremiumBereiche {...props} />
      <PremiumAusserdem {...props} />
      <PremiumDiskretion {...props} />
      <PremiumZusagen {...props} />
      <PremiumAblauf {...props} />
      <PremiumFragen {...props} />
      <PremiumOrte {...props} />
    </PageFrame>
  );
}
