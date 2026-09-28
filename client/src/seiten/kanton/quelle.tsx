import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { Source } from "../../../../content/types";

/** Domain einer Quelle ohne www, etwa «srl.lu.ch» */
export function hostOf(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

/**
 * Quellenlink wie unter den Werkzeugen der Leistungsseiten (E85): klein, mit
 * Domain und Symbol, öffnet in neuem Fenster, rel="noopener noreferrer".
 * Auch von der Übersicht /einzugsgebiet genutzt.
 */
export default function QuelleLink({ source, external }: { source: Source; external: string }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-6 flex-wrap items-baseline gap-x-1.5 text-[0.8125rem] font-medium leading-snug text-ink"
    >
      <span className="underline decoration-ink/30 underline-offset-2 transition-colors group-hover:decoration-signal">
        {source.label}
      </span>
      <span className="text-ink-600">({hostOf(source.href)})</span>
      <ArrowSquareOut weight="duotone" className="size-3.5 shrink-0 self-center" aria-hidden="true" />
      <span className="sr-only">, {external}</span>
    </a>
  );
}

/** Mehrere Quellen unter einem Abschnitt, mit Überschrift «Quellen» */
export function QuellenListe({
  sources,
  label,
  external,
  className = "",
}: {
  sources: Source[];
  label: string;
  external: string;
  className?: string;
}) {
  if (!sources.length) return null;
  return (
    <div className={`border-t border-line pt-4 ${className}`}>
      <p className="text-[0.8125rem] font-semibold text-ink-600">{label}</p>
      <ul className="mt-1.5 flex flex-col gap-0.5">
        {sources.map(source => (
          <li key={source.href}>
            <QuelleLink source={source} external={external} />
          </li>
        ))}
      </ul>
    </div>
  );
}
