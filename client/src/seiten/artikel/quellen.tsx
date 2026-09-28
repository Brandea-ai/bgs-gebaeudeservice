import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { Source } from "../../../../content/types";

/**
 * Quellen unter einem Artikelabschnitt (E85): klein, mit Domain und Symbol,
 * öffnen in neuem Fenster. Gleiche Gestaltung wie unter den Werkzeugen.
 */
export default function Quellen({ sources, label, external }: { sources: Source[]; label: string; external: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-[0.8125rem] font-semibold text-ink-600">{label}</p>
      <ul className="mt-1.5 flex flex-col gap-0.5">
        {sources.map(source => (
          <li key={source.href + source.label}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

function hostOf(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}
