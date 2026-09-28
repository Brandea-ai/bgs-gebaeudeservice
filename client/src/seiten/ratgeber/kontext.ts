import { getDict } from "../../../../content";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Ratgeber-Übersicht, einmal berechnet für alle Sektionen */
export type RatgeberProps = { lang: Locale };

export function ratgeberKontext({ lang }: RatgeberProps) {
  const dict = getDict(lang);
  const href = (path: PagePath) => localizePath(path, lang);
  return { dict, t: dict.ratgeber.overview, artikel: Object.values(dict.ratgeber.articles), href };
}
