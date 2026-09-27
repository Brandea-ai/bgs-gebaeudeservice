import type { Locale } from "./i18n";

/**
 * Kantone des Einzugsgebiets (E30) mit Namen je Sprache und BFS-Nummer für die
 * Karte (shared/canton-map.ts). Schlüssel ist der deutsche Name aus company.cantons.
 */
export const cantonInfo: Record<
  string,
  { bfs: number; code: string; names: Record<Locale, string> }
> = {
  Luzern: {
    bfs: 3,
    code: "LU",
    names: { de: "Luzern", en: "Lucerne", fr: "Lucerne", it: "Lucerna" },
  },
  Zug: {
    bfs: 9,
    code: "ZG",
    names: { de: "Zug", en: "Zug", fr: "Zoug", it: "Zugo" },
  },
  Aargau: {
    bfs: 19,
    code: "AG",
    names: { de: "Aargau", en: "Aargau", fr: "Argovie", it: "Argovia" },
  },
  Nidwalden: {
    bfs: 7,
    code: "NW",
    names: { de: "Nidwalden", en: "Nidwalden", fr: "Nidwald", it: "Nidvaldo" },
  },
  Obwalden: {
    bfs: 6,
    code: "OW",
    names: { de: "Obwalden", en: "Obwalden", fr: "Obwald", it: "Obvaldo" },
  },
};

const cantonPrefix: Record<Locale, (name: string) => string> = {
  de: name => `Kanton ${name}`,
  en: name => `Canton of ${name}`,
  fr: name =>
    /^[AEIOU]/.test(name) ? `Canton d’${name}` : `Canton de ${name}`,
  it: name => `Cantone di ${name}`,
};

/** Name eines Kantons in der Sprache der Seite */
export const cantonName = (german: string, lang: Locale) =>
  cantonInfo[german]?.names[lang] ?? german;

/** «Kanton Luzern», «Canton of Lucerne», «Canton d’Argovie» … */
export const cantonTitle = (german: string, lang: Locale) =>
  cantonPrefix[lang](cantonName(german, lang));
