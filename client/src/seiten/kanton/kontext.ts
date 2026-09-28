import {
  Bed,
  BuildingOffice,
  Buildings,
  Diamond,
  Factory,
  Gear,
  HardHat,
  House,
  Key,
  LockKey,
  Mountains,
  Sailboat,
  SquaresFour,
  Waves,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { getDict } from "../../../../content";
import { placePins } from "../../../../shared/canton-map";
import { cantonName, kantonPath, type KantonKey } from "../../../../shared/cantons";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Kantonsvorlage, einmal berechnet für alle Sektionen */
export type KantonProps = { kanton: KantonKey; lang: Locale };

/**
 * Ein Symbol je typischem Objekt, in der Reihenfolge von kantone.ts (E80:
 * Duotone ohne Fläche). Fehlt ein Eintrag, steht das Gebäude.
 */
const objektSymbole: Record<KantonKey, Icon[]> = {
  luzern: [Buildings, BuildingOffice, Key, Waves],
  zug: [BuildingOffice, SquaresFour, LockKey, Sailboat],
  aargau: [Factory, Gear, HardHat, Buildings],
  nidwalden: [Buildings, House, Diamond, Sailboat],
  obwalden: [Mountains, Bed, Buildings, Key],
};

/**
 * Orte auf der Kantonskarte (shared/canton-map.ts › placePins), je Kanton die
 * Pins, die in ihm liegen. Luzern und Weggis liegen direkt neben dem Sitz, Zug
 * (Stadt) auf dem Kürzel ZG: sie bleiben weg, damit Sitz und Kürzel auch bei
 * 390 px lesbar bleiben (die Orte stehen in der Liste daneben).
 */
const kartenOrte: Record<KantonKey, string[]> = {
  luzern: [],
  zug: [],
  aargau: ["Aarau", "Baden"],
  nidwalden: ["Stans"],
  obwalden: ["Sarnen", "Engelberg"],
};

/** Orte, deren Name links vom Punkt steht, damit er das Kantonskürzel nicht verdeckt */
export const linksBeschriftet = new Set(["Aarau"]);

/** Pins eines Kantons; der Ort Zug heisst auf Französisch und Italienisch wie der Kanton */
export function kartenPins(kanton: KantonKey, lang: Locale) {
  return placePins
    .filter(pin => kartenOrte[kanton].includes(pin.name))
    .map(pin => ({
      x: pin.x,
      y: pin.y,
      label: pin.name === "Zug" ? cantonName("Zug", lang) : pin.name,
      side: linksBeschriftet.has(pin.name) ? ("left" as const) : undefined,
    }));
}

export function kantonKontext({ kanton, lang }: KantonProps) {
  const dict = getDict(lang);
  const page = dict.kantone.seiten[kanton];
  const symbol = (index: number): Icon => objektSymbole[kanton][index] ?? Buildings;
  return { dict, ui: dict.ui, kui: dict.kantone.ui, page, path: kantonPath(kanton), symbol };
}

/** Sprungziele der Abschnittsleiste */
export const abschnitte = {
  regionen: "regionen",
  objekte: "objekte",
  leistungen: "leistungen",
  planung: "planung",
  daten: "kantonsdaten",
  fragen: "fragen",
} as const;
