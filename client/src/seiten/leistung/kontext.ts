import { getDict } from "../../../../content";
import type { ServicePageContent } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Leistungsvorlage, einmal berechnet für alle Sektionen */
export type LeistungProps = { content: ServicePageContent; lang: Locale };

export function leistungKontext({ content, lang }: LeistungProps) {
  const dict = getDict(lang);
  const { ui } = dict;
  const premium = content.area === "premium";
  // Eckdaten: das Gebiet ergänzt die Vorlage, ausser die Seite nennt es selbst (L13, F08)
  const facts = content.facts.some(fact => fact.label === ui.factArea)
    ? content.facts
    : [...content.facts, { label: ui.factArea, value: ui.factAreaValue }];
  const sectionId = (index: number) => `abschnitt-${index + 1}`;
  return { dict, ui, premium, facts, sectionId };
}
