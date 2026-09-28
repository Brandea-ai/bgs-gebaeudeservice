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
import { kantonPath, type KantonKey } from "../../../../shared/cantons";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Kantonsvorlage, einmal berechnet für alle Sektionen */
export type KantonProps = { kanton: KantonKey; lang: Locale };

/**
 * Ein Symbol je typischem Objekt, in der Reihenfolge von kantone.ts (E80:
 * Duotone ohne Fläche). Fehlt ein Eintrag, steht das Gebäude.
 */
const objektSymbole: Record<KantonKey, Icon[]> = {
  luzern: [Buildings, BuildingOffice, Key, Waves],
  zug: [BuildingOffice, LockKey, SquaresFour, Sailboat],
  aargau: [Factory, Gear, HardHat, Buildings],
  nidwalden: [House, Diamond, Buildings, Sailboat],
  obwalden: [Mountains, Bed, Buildings, Key],
};

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
  fragen: "fragen",
} as const;
