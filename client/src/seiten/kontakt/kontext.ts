import { getDict } from "../../../../content";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Kontaktseite, einmal berechnet für alle Sektionen */
export type KontaktProps = { lang: Locale };

export function kontaktKontext({ lang }: KontaktProps) {
  const dict = getDict(lang);
  return { dict, ui: dict.ui, contact: dict.seiten.contact };
}
