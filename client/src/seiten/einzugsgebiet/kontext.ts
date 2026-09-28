import { getDict } from "../../../../content";
import { navDicts } from "../../../../content/navigation";
import { placePins } from "../../../../shared/canton-map";
import { linksBeschriftet } from "../kanton/kontext";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Übersicht /einzugsgebiet, einmal berechnet für alle Sektionen */
export type GebietProps = { lang: Locale };

/** Sprungziele der Abschnittsleiste */
export const abschnitte = {
  kantone: "kantone",
  vergleich: "vergleich",
  orte: "orte",
  sitz: "sitz",
} as const;

export function gebietKontext({ lang }: GebietProps) {
  const dict = getDict(lang);
  const { chrome } = navDicts[lang];
  const mapTexts = { ...dict.misc.map, seat: chrome.seat };
  // Nur Orte, deren Name frei steht: Luzern und Weggis liegen am Sitz, Zug auf dem Kürzel ZG (Audit visuell, Umbau 9)
  const pins = placePins
    .filter(pin => !["Luzern", "Weggis", "Zug"].includes(pin.name))
    .map(pin => ({
      x: pin.x,
      y: pin.y,
      label: pin.name,
      side: linksBeschriftet.has(pin.name) ? ("left" as const) : undefined,
    }));
  return { dict, ui: dict.ui, area: dict.seiten.area, chrome, mapTexts, pins };
}
