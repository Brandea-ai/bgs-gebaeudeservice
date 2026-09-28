import {
  Clock,
  Diamond,
  FileText,
  Key,
  LockKey,
  SealCheck,
  ShieldCheck,
  Translate,
  UserCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { getDict } from "../../../../content";
import { company } from "../../../../shared/company";
import type { Locale } from "../../../../shared/i18n";

/** Gemeinsame Werte der Premium-Übersicht, einmal berechnet für alle Sektionen */
export type PremiumProps = { lang: Locale };

type PromiseKey = ReturnType<typeof getDict>["seiten"]["premiumOverview"]["promises"][number]["key"];

/** Ein Objekt-Symbol je Zusage (P05): duotone, Champagner, ohne Fläche */
export const promiseIcons: Record<PromiseKey, Icon> = {
  persoenlich: UserCheck,
  diskret: LockKey,
  teams: UsersThree,
  personal: SealCheck,
  schluessel: Key,
  zeiten: Clock,
  material: Diamond,
  sprachen: Translate,
  versichert: ShieldCheck,
  offerte: FileText,
};

/** Links auf Anthrazit: Weiss mit Champagner-Unterstrich, nie Signalrot */
export const darkLink =
  "font-semibold text-white underline decoration-brass underline-offset-4 hover:decoration-white";

export function premiumKontext({ lang }: PremiumProps) {
  const dict = getDict(lang);
  const content = dict.seiten.premiumOverview;
  const promise = (key: PromiseKey) => content.promises.find(item => item.key === key);
  // Kennzeile nur, wenn die Premium-Linie einen eigenen Namen trägt (S12, E38)
  const eyebrow = company.premiumBrand ? dict.ui.premiumLine : undefined;
  return { dict, ui: dict.ui, pages: dict.pages, content, promise, eyebrow };
}
