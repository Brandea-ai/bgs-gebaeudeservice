import PageFrame from "@/components/PageFrame";
import JsonLd from "@/components/JsonLd";
import SectionNav from "@/components/SectionNav";
import { itemListJsonLd } from "../../../../shared/structured-data";
import { groupId, uebersichtKontext, type UebersichtProps } from "./kontext";
import UebersichtHero from "./01-hero";
import UebersichtVertrauen from "./02-vertrauen";
import UebersichtWegweiser from "./03-wegweiser";
import UebersichtLeistungen from "./04-leistungen";
import UebersichtWerkzeuge from "./05-werkzeuge";
import UebersichtPremium from "./06-premium";
import UebersichtFragen from "./07-fragen";

/**
 * Leistungsübersicht /leistungen (Factory-Strukturnorm, E80, E85): nur
 * Reihenfolge. Wegweiser, drei Kapitel mit klebendem Bild, Vergleich und
 * Jahresplan, Premium, Fragen. Abschnittsleiste mit Scrollspy ab lg, auf dem
 * Handy trägt der Kopf die Sprungliste.
 */
export default function LeistungenUebersicht(props: UebersichtProps) {
  const { lang } = props;
  const { ui, pages, servicesOverview, servicePaths } = uebersichtKontext(props);
  const navItems = [
    { id: "wegweiser", title: servicesOverview.guide.title },
    ...servicesOverview.groups.map((group, index) => ({ id: groupId(index), title: group.title })),
    ...servicesOverview.tools.map(tool => ({ id: tool.id, title: servicesOverview.toolNav[tool.id] ?? tool.title })),
    { id: "premium", title: pages["/premium"].label },
    { id: "fragen", title: ui.faq },
  ];
  return (
    <PageFrame lang={lang} path="/leistungen" contact={servicesOverview.cta}>
      {/* Hub zu allen Leistungen als ItemList (L13) */}
      <JsonLd data={itemListJsonLd("/leistungen", servicePaths, lang)} />
      <UebersichtHero {...props} />
      <UebersichtVertrauen {...props} />
      <SectionNav label={ui.onThisPage} items={navItems} className="max-lg:hidden" />
      <UebersichtWegweiser {...props} />
      <UebersichtLeistungen {...props} />
      <UebersichtWerkzeuge {...props} />
      <UebersichtPremium {...props} />
      <UebersichtFragen {...props} />
    </PageFrame>
  );
}
