import { getDict } from "../../../../content";
import type { ArticleContent } from "../../../../content/types";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Artikelvorlage, einmal berechnet für alle Sektionen */
export type ArtikelProps = { article: ArticleContent; lang: Locale };

export function artikelKontext({ article, lang }: ArtikelProps) {
  const dict = getDict(lang);
  const t = dict.ratgeber.overview;
  const siblings = Object.values(dict.ratgeber.articles).filter(other => other.path !== article.path);
  const sectionId = (index: number) => `teil-${index + 1}`;
  const toc = [
    ...article.sections.map((section, index) => ({ id: sectionId(index), title: section.title })),
    { id: "verwandt", title: t.moreTitle },
  ];
  const href = (path: PagePath) => localizePath(path, lang);
  return { dict, ui: dict.ui, t, siblings, sectionId, toc, href };
}
