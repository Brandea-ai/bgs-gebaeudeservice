import Link from "next/link";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { getDict } from "../../../../content";
import { kantonKeys, kantonPath } from "../../../../shared/cantons";
import { localizePath, type Locale } from "../../../../shared/i18n";

/**
 * Die fünf Kantonsseiten als Links mit dem Kantonsnamen als Ankertext
 * (25-AUDIT/seo.md, Befund N6): Leistungs- und Premiumseiten verlinken so im
 * Hauptinhalt das Einzugsgebiet, die Kantonsseiten erhalten Links aus jeder
 * Leistung. Steht unter «Passt auch dazu». Premium in Anthrazit und
 * Champagner, nie Signalrot.
 */
export default function LeistungGebiet({ lang, premium }: { lang: Locale; premium: boolean }) {
  const dict = getDict(lang);
  return (
    <div className={`mt-12 border-t pt-8 lg:mt-14 ${premium ? "border-brass/25" : "border-line"}`}>
      <p id="gebiet-titel" className={`text-[0.9375rem] font-semibold ${premium ? "text-anthracite" : "text-ink"}`}>
        {dict.kantone.ui.gebiet}
      </p>
      <ul aria-labelledby="gebiet-titel" className="mt-3 flex flex-wrap gap-x-7 gap-y-1">
        {kantonKeys.map(key => {
          const path = kantonPath(key);
          return (
            <li key={key}>
              <Link
                href={localizePath(path, lang)}
                className={`group inline-flex min-h-11 items-center gap-2 font-semibold transition-colors ${
                  premium ? "text-anthracite hover:text-brass-dark" : "text-ink hover:text-signal"
                }`}
              >
                <MapPin
                  weight="duotone"
                  className={`size-5 shrink-0 ${premium ? "text-brass-dark" : "text-signal"}`}
                  aria-hidden="true"
                />
                <span
                  className={`underline decoration-[0.08em] underline-offset-[0.22em] ${
                    premium ? "decoration-brass-dark/50 group-hover:decoration-anthracite" : "decoration-signal/40 group-hover:decoration-signal"
                  }`}
                >
                  {dict.pages[path].label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
