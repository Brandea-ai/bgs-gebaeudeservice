import { getDict } from "../../../../content";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Seite Über uns, einmal berechnet für alle Sektionen */
export type UeberUnsProps = { lang: Locale };

export function ueberUnsKontext({ lang }: UeberUnsProps) {
  const dict = getDict(lang);
  const href = (path: PagePath) => localizePath(path, lang);
  return { dict, ui: dict.ui, seiten: dict.seiten, about: dict.seiten.about, href };
}
