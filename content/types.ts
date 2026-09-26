import type { PagePath } from '../shared/seo'

/**
 * Inhaltsschicht der Leistungs- und Premiumseiten (M29), vorbereitet für die
 * Übersetzung (M60): Texte stehen je Sprache in content/<sprache>/, die
 * Darstellung in client/src/components/ServicePage.tsx. Titel, Beschreibung und
 * Name einer Seite stehen in shared/seo.ts, Firmenangaben in shared/company.ts.
 *
 * Regeln für die Texte (Webseite-Analyse/00, 01 Abschnitt D, E18):
 * - Über das Unternehmen nur Eigenangaben oder Belegtes, keine Zahlen, Preise,
 *   Zertifikate, Kundenstimmen oder Zusagen ohne Grundlage.
 * - Aus Sicht der Kundschaft: Anlass, Umfang, Grenzen, Ablauf, Gebiet.
 * - Schweizer Rechtschreibung («ss»), Schweizer Begriffe («Offerte», «Hauswartung»).
 */

/** Fliesstext. Interne Links im Format [Linktext](/pfad), nur Seiten aus shared/seo.ts. */
export type Text = string

export type Step = { title: string; text: Text }

export type ServicePageContent = {
  /** Deutsche Adresse, zugleich Schlüssel für Titel, Beschreibung und Namen in shared/seo.ts */
  path: PagePath
  /** B2B-Leistung unter /leistungen oder Premium-Linie unter /premium (E16) */
  area: 'leistungen' | 'premium'
  /** Kurze Zeile über der Hauptüberschrift. Premium-Seiten zeigen stattdessen die Premium-Linie. */
  eyebrow?: string
  h1: string
  /** Einstieg aus Sicht der Kundschaft: Anlass und Lösung in ein bis zwei Absätzen */
  lead: Text[]
  /** «Auf einen Blick». Gebiet, Offerte und Rückmeldung ergänzt die Vorlage, ausser die Seite nennt sie selbst. */
  facts: { label: string; value: string }[]
  scope: {
    title: string
    intro?: Text
    items: Text[]
    /** Was nicht dazugehört, mit Verweis auf die passende Leistung */
    notIncluded?: Text[]
  }
  /** Weitere Abschnitte, etwa Nachfüllservice oder Maschinen */
  sections?: { title: string; paragraphs?: Text[]; items?: Text[] }[]
  steps: Step[]
  faq: { question: string; answer: Text }[]
  /** Verwandte Leistungen mit einem Satz, wann sie passen */
  related: { path: PagePath; text: string }[]
  cta: { title: string; text: string }
}

/** Abschnitt eines Ratgeberartikels. Reihenfolge der Darstellung wie hier. */
export type ArticleSection = {
  title: string
  paragraphs?: Text[]
  /** Begriffe mit Erklärung, dargestellt als Definitionsliste */
  definitions?: { term: string; text: Text }[]
  /** Unterabschnitte mit eigener Überschrift */
  subsections?: { title: string; text: Text }[]
  items?: Text[]
  /** Liste als nummerierte Schritte */
  ordered?: boolean
  /** Satz nach der Liste */
  note?: Text
}

export type ArticleContent = {
  /** Adresse, zugleich Schlüssel für Titel und Beschreibung in shared/seo.ts */
  path: PagePath
  h1: string
  subtitle: string
  /** Anreisser für die Übersicht /blog */
  teaser: string
  /** Stand der Inhalte (JJJJ-MM-TT), sichtbar und als dateModified */
  updated: string
  /** Veröffentlichung auf der Launch-Domain (JJJJ-MM-TT). Erst zum Launch eintragen, keine Scheinaktualität (M19). */
  published?: string
  intro?: Text[]
  summary: { title: string; items: Text[] }
  sections: ArticleSection[]
  cta: { title: string; text: string }
}
