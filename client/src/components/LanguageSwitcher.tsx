import Flag from "./Flag";
import {
  activeLocales,
  hreflang,
  languageNames,
  localizePath,
  type Locale,
} from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Sprachumschalter (M60, F7, F14): führt zur selben Seite in der anderen Sprache,
 * keine automatische Umleitung (14, Abschnitt 5). Normale Links, weil jede
 * Sprache ein eigenes Grundlayout hat. Mit Flagge und Kürzel (Wunsch Brandea,
 * 27.09.2026). Nur einer je Seite ist eine nav-Landmarke (Kopfzeile), die
 * anderen sind Gruppen mit eigenem Namen, damit Landmarken eindeutig bleiben.
 */
export default function LanguageSwitcher({
  lang,
  path,
  label,
  className = "",
  tone = "light",
  compact = false,
  as = "nav",
  flags = true,
}: {
  lang: Locale;
  path: PagePath;
  label: string;
  className?: string;
  tone?: "light" | "dark";
  compact?: boolean;
  as?: "nav" | "div";
  flags?: boolean;
}) {
  if (activeLocales.length < 2) return null;
  const dark = tone === "dark";
  const Tag = as;
  return (
    <Tag
      aria-label={label}
      role={as === "div" ? "group" : undefined}
      className={className}
    >
      <ul className="flex flex-wrap items-center gap-1">
        {activeLocales.map(locale => {
          const isCurrent = locale === lang;
          return (
            <li key={locale}>
              <a
                href={localizePath(path, locale)}
                hrefLang={hreflang[locale]}
                lang={hreflang[locale]}
                aria-current={isCurrent ? "true" : undefined}
                title={languageNames[locale]}
                className={`inline-flex min-h-11 items-center gap-2 rounded-[3px] border font-mono font-semibold uppercase tracking-wider transition-colors sm:min-h-0 ${
                  compact ? "sm:h-7 px-2 text-[0.6875rem]" : "sm:h-9 px-3 text-xs"
                } ${
                  isCurrent
                    ? dark
                      ? "border-white/80 bg-white text-ink"
                      : "border-ink bg-ink text-white"
                    : dark
                      ? "border-white/25 text-white hover:border-white hover:bg-white/10"
                      : "border-line text-ink hover:border-ink"
                }`}
              >
                {flags && (
                  <Flag
                    lang={locale}
                    className={compact ? "h-3 w-[1.125rem]" : "h-3.5 w-5"}
                  />
                )}
                <span aria-hidden="true">{locale}</span>
                <span className="sr-only">{languageNames[locale]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Tag>
  );
}
