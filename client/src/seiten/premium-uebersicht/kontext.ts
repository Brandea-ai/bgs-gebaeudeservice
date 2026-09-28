import {
  FileText,
  Key,
  SealCheck,
  ShieldCheck,
  Translate,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import {
  AppointmentIcon,
  DiscretionIcon,
  MaterialsIcon,
  PersonalIcon,
  type AnyGlyph,
} from "@/components/PremiumIcons";
import { getDict } from "../../../../content";
import { company } from "../../../../shared/company";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Premium-Übersicht, einmal berechnet für alle Sektionen */
export type PremiumProps = { lang: Locale };

type PromiseKey = ReturnType<typeof getDict>["seiten"]["premiumOverview"]["promises"][number]["key"];

/**
 * Ein Objekt-Symbol je Zusage (P05): Champagner, ohne Fläche. Wo ein eigenes
 * Premium-Symbol passt, steht es statt Phosphor Duotone (PremiumIcons.tsx).
 */
export const promiseIcons: Record<PromiseKey, AnyGlyph> = {
  persoenlich: PersonalIcon,
  diskret: DiscretionIcon,
  teams: UsersThree,
  personal: SealCheck,
  schluessel: Key,
  zeiten: AppointmentIcon,
  material: MaterialsIcon,
  sprachen: Translate,
  versichert: ShieldCheck,
  offerte: FileText,
};

/** Links in der hellen Premium-Welt: Anthrazit mit Champagner-Unterstrich, nie Signalrot */
export { premiumLightLink as lightLink } from "@/components/premiumStyles";

export function premiumKontext({ lang }: PremiumProps) {
  const dict = getDict(lang);
  const content = dict.seiten.premiumOverview;
  const promise = (key: PromiseKey) => content.promises.find(item => item.key === key);
  // Kennzeile nur, wenn die Premium-Linie einen eigenen Namen trägt (S12, E38)
  const eyebrow = company.premiumBrand ? dict.ui.premiumLine : undefined;
  return { dict, ui: dict.ui, pages: dict.pages, content, promise, eyebrow };
}
