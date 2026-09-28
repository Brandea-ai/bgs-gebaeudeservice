import { getDict } from "../../../../content";
import type { Locale } from "../../../../shared/i18n";

/** «26. September 2026» aus «2026-09-26», in der Sprache der Seite */
export function formatDate(isoDate: string, lang: Locale = "de") {
  return new Intl.DateTimeFormat(getDict(lang).misc.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
