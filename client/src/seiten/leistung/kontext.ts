import { getDict } from "../../../../content";
import type { ServicePageContent } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Leistungsvorlage, einmal berechnet für alle Sektionen */
export type LeistungProps = { content: ServicePageContent; lang: Locale };

export function leistungKontext({ content, lang }: LeistungProps) {
  const dict = getDict(lang);
  const { ui } = dict;
  const premium = content.area === "premium";
  // Eckdaten nur aus der Seite (E85): die Vorlage hängt kein Gebiet mehr an
  const facts = content.facts;
  const sectionId = (index: number) => `abschnitt-${index + 1}`;
  return { dict, ui, premium, facts, sectionId };
}
