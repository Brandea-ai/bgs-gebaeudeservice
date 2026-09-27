import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import JsonLd from "./JsonLd";
import { trailFor, type PagePath } from "../../../shared/seo";
import { localizePath, type Locale } from "../../../shared/i18n";
import { getDict } from "../../../content";
import { breadcrumbJsonLd } from "../../../shared/structured-data";

/**
 * Sichtbare Brotkrumen mit BreadcrumbList (M20, GLOBAL-033), auf Seiten ab der
 * zweiten Ebene. Aufbau nach dem Breadcrumb-Muster der W3C-ARIA-Praktiken:
 * Liste in einer benannten Navigation, die aktuelle Seite mit aria-current.
 * Links mindestens 24 px hoch (WCAG 2.5.8).
 */
export default function Breadcrumbs({
  path,
  tone = "light",
  lang = "de",
}: {
  path: PagePath;
  tone?: "light" | "dark";
  lang?: Locale;
}) {
  const trail = trailFor(path, lang);
  const muted = tone === "dark" ? "text-white/70" : "text-mute";
  const current = tone === "dark" ? "text-white" : "text-ink";

  return (
    <>
      <nav aria-label={getDict(lang).misc.breadcrumbs} className="mb-6">
        <ol
          className={`flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[0.8125rem] font-medium ${muted}`}
        >
          {trail.map((crumb, index) => {
            const isCurrent = index === trail.length - 1;
            return (
              <li key={crumb.path} className="inline-flex items-center gap-1">
                {isCurrent ? (
                  <span
                    aria-current="page"
                    className={`inline-flex min-h-6 items-center font-medium ${current}`}
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={localizePath(crumb.path, lang)}
                      prefetch={false}
                      className="inline-flex min-h-6 items-center py-0.5 underline-offset-4 transition-colors hover:underline"
                    >
                      {crumb.label}
                    </Link>
                    <CaretRight
                      weight="regular"
                      className="size-3.5 shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(path, lang)} />
    </>
  );
}
