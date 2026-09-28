import { getDict } from "../../../../content";
import type { RatgeberArtikel } from "../../../../content/de/ratgeber";
import type { ArticleContent } from "../../../../content/types";
import { localizePath, type Locale } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";

/** Gemeinsame Werte der Artikelvorlage, einmal berechnet für alle Sektionen */
export type ArtikelProps = { article: ArticleContent; lang: Locale };

export function artikelKontext({ article, lang }: ArtikelProps) {
  const dict = getDict(lang);
  const t = dict.ratgeber.overview;
  const all: RatgeberArtikel[] = Object.values(dict.ratgeber.articles);
  // Der Artikel aus dem Wörterbuch trägt Werkzeuge, Quellen und Weiterlesen (E85)
  const full: RatgeberArtikel = all.find(other => other.path === article.path) ?? article;
  const siblings = all.filter(other => other.path !== full.path);
  // Weiterlesen: die gewählten Artikel, sonst die ersten zwei übrigen
  const related = (full.related ?? [])
    .map(path => siblings.find(other => other.path === path))
    .filter((other): other is RatgeberArtikel => Boolean(other));
  const sectionId = (index: number) => `teil-${index + 1}`;
  const toc = [
    ...full.sections.flatMap((section, index) => [
      { id: sectionId(index), title: section.title },
      ...(section.tool ? [{ id: section.tool.id, title: section.tool.title }] : []),
    ]),
    { id: "verwandt", title: t.moreTitle },
  ];
  const href = (path: PagePath) => localizePath(path, lang);
  return {
    dict,
    ui: dict.ui,
    t,
    full,
    related: related.length > 0 ? related : siblings.slice(0, 2),
    service: full.service,
    sectionId,
    toc,
    href,
  };
}
