import { getDict } from "../../../../content";
import type { ServicePageContent } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";
import type { ImageKey } from "../../../../shared/images";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Leistungsübersicht, einmal berechnet für alle Sektionen */
export type UebersichtProps = { lang: Locale };

export const groupId = (index: number) => `gruppe-${index + 1}`;

/** Sprungziel und Scrollspy-Ziel einer Leistung im Kapitel, etwa leistung-hauswartung */
export const rowId = (path: PagePath) => `leistung-${path.split("/").pop()}`;

/**
 * Bild je Leistung im Kapitel: das Detailbild der Leistung, nie ein Heldenbild
 * (links für Schrift abgedunkelt) und nie ein Motiv, das sonst auf dieser Seite
 * steht. detail-facility-services zeigt der Kontaktbereich, darum hier die Szene.
 */
export const rowImage: Record<string, ImageKey> = {
  "/leistungen/unterhaltsreinigung": "detail-unterhaltsreinigung",
  "/leistungen/bueroreinigung": "detail-bueroreinigung",
  "/leistungen/sonderreinigungen": "detail-grundreinigung",
  "/leistungen/umzugsreinigung": "detail-umzugsreinigung",
  "/leistungen/baureinigung": "detail-baureinigung",
  "/leistungen/fenster-und-fassadenreinigung": "detail-fenster-fassaden",
  "/leistungen/industrie-und-hallenreinigung": "detail-industrie-hallen",
  "/leistungen/hauswartung": "detail-hauswartung",
  "/leistungen/aussen-und-gruenflaechenpflege": "detail-aussen-gruenflaechen",
  "/leistungen/facility-services": "szene-facility-services",
};

export function uebersichtKontext({ lang }: UebersichtProps) {
  const dict = getDict(lang);
  const { servicesOverview } = dict.seiten;
  const services = Object.values(dict.leistungen) as ServicePageContent[];
  // Inhalt einer Leistungsseite zur Adresse: Eckdaten und Umfang für die Zeilen
  const serviceFor = (path: PagePath) => services.find(item => item.path === path);
  const servicePaths = servicesOverview.groups.flatMap(group => group.items.map(item => item.path));
  return { dict, ui: dict.ui, pages: dict.pages, servicesOverview, serviceFor, servicePaths };
}
