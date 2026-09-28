import { getDict } from "../../../../content";
import { navDicts } from "../../../../content/navigation";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Startseite, einmal berechnet für alle Sektionen */
export type StartseiteProps = { lang: Locale };

export function startseiteKontext({ lang }: StartseiteProps) {
  const dict = getDict(lang);
  const nav = navDicts[lang];
  const href = (path: PagePath) => localizePath(path, lang);
  return { dict, ui: dict.ui, seiten: dict.seiten, nav, href };
}
