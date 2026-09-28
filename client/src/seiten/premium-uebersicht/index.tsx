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
 * Premium-Übersicht /premium (Factory-Strukturnorm, E80): eigene Welt mit
 * Serifenschrift, nie Signalrot. Nur der Kopf ist dunkel mit Bild, alles
 * darunter hell in Elfenbein und Weiss mit Champagner (Premium hell). Eigene
 * Wege, Fragen, Ablauf und der Kasten zur Geheimhaltung (Audit 25, Abschnitt 5).
 * Nur Reihenfolge. Der Abschluss «Diskret anfragen» beschriftet den Formularabschnitt.
 */
export default function PremiumUebersicht(props: PremiumProps) {
  const { lang } = props;
  const { dict, ui, content } = premiumKontext(props);
  const navItems = [
    { id: "bereiche", title: content.offersTitle },
    { id: "diskretion", title: content.discretion.title },
    { id: "zusagen", title: content.promisesTitle },
    { id: "ablauf", title: content.stepsTitle },
    { id: "fragen", title: ui.faq },
    { id: "orte", title: dict.misc.map.areaLabel },
  ];
  return (
    <PageFrame lang={lang} path="/premium" mainClassName="bg-white" contact={content.cta}>
      {/* Hub zu den drei Premium-Seiten als ItemList */}
      <JsonLd data={itemListJsonLd("/premium", content.offers.map(offer => offer.path), lang)} />
      <PremiumHero {...props} />
      <SectionNav label={ui.onThisPage} items={navItems} tone="premium" />
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
