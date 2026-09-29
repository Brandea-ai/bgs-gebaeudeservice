import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import RichText from "@/components/RichText";
import type { Source, Text } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";

export function Punkte({
  items,
  lang,
  premium,
  link,
}: {
  items: Text[];
  lang: Locale;
  premium: boolean;
  link?: string;
}) {
  return (
    <ul className="space-y-2 pt-1">
      {items.map(item => (
        <li
          key={item}
          className="flex gap-3 font-medium leading-relaxed text-ink-600"
        >
          <span
            className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${premium ? "bg-brass-dark" : "bg-signal"}`}
            aria-hidden="true"
          />
          <span className="min-w-0">
            <RichText text={item} lang={lang} linkClassName={link} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Hinweis unter dem Werkzeug: dünne Kontur rundum, kein Seitenstrich */
export function Hinweis({
  text,
  lang,
  premium,
  link,
}: {
  text: Text;
  lang: Locale;
  premium: boolean;
  link?: string;
}) {
  return (
    <p
      className={`tool-note mt-6 rounded-[3px] border px-5 py-4 text-[0.9375rem] font-medium leading-relaxed ${
        premium
          ? "border-brass-dark/25 bg-ivory text-anthracite"
          : "border-line bg-stone text-ink"
      }`}
    >
      <RichText text={text} lang={lang} linkClassName={link} />
    </p>
  );
}

/** Quellen klein darunter: externer Link mit Domain und Symbol, öffnet in neuem Fenster */
export function Quellen({
  sources,
  label,
  external,
  premium,
}: {
  sources: Source[];
  label: string;
  external: string;
  premium: boolean;
}) {
  return (
    <div
      className={`tool-sources mt-6 border-t pt-4 ${premium ? "border-brass-dark/20" : "border-line"}`}
    >
      <p className="text-[0.8125rem] font-semibold text-ink-600">{label}</p>
      <ul className="mt-1.5 flex flex-col gap-0.5">
        {sources.map(source => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-6 flex-wrap items-baseline gap-x-1.5 text-[0.8125rem] font-medium leading-snug text-ink"
            >
              <span
                className={`underline underline-offset-2 transition-colors ${
                  premium
                    ? "decoration-brass-dark/50 group-hover:decoration-anthracite"
                    : "decoration-ink/30 group-hover:decoration-signal"
                }`}
              >
                {source.label}
              </span>
              <span className="text-ink-600"> ({hostOf(source.href)})</span>
              <ArrowSquareOut
                weight="duotone"
                className="size-3.5 shrink-0 self-center"
                aria-hidden="true"
              />
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
