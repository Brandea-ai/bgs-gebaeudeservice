import { getDict } from "../../../../content";
import type { ServicePageContent } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Leistungsübersicht, einmal berechnet für alle Sektionen */
export type UebersichtProps = { lang: Locale };

export const groupId = (index: number) => `gruppe-${index + 1}`;

export function uebersichtKontext({ lang }: UebersichtProps) {
  const dict = getDict(lang);
  const { servicesOverview } = dict.seiten;
  const services = Object.values(dict.leistungen) as ServicePageContent[];
  // Inhalt einer Leistungsseite zur Adresse: Eckdaten und Umfang für die Zeilen
  const serviceFor = (path: PagePath) => services.find(item => item.path === path);
  const servicePaths = servicesOverview.groups.flatMap(group => group.items.map(item => item.path));
  return { dict, ui: dict.ui, pages: dict.pages, servicesOverview, serviceFor, servicePaths };
}
