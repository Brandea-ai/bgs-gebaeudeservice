import Link from "next/link";
import type { ReactNode } from "react";
import { localizeHref, type Locale } from "../../../shared/i18n";

// [Linktext](/pfad) für interne Seiten (content/types.ts); dazu https:// und
// mailto: für Rechtstexte (R08), die dann als normale Links ausgegeben werden.
const LINK = /\[([^\]]+)\]\((\/[^)\s]*|https?:\/\/[^)\s]+|mailto:[^)\s]+)\)/g;

const linkStyle = "link-inline";

/** Fliesstext aus der Inhaltsschicht mit Links. Auf dunklem Grund linkClassName setzen. Interne Links stehen mit deutscher Adresse und werden je Sprache übersetzt (M60). */
export default function RichText({
  text,
  linkClassName = linkStyle,
  lang = "de",
}: {
  text: string;
  linkClassName?: string;
  lang?: Locale;
}) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const start = match.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    const target = match[2];
    if (target.startsWith("/")) {
      parts.push(
        <Link key={start} href={localizeHref(target, lang)} className={linkClassName}>
          {match[1]}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={start}
          href={target}
          className={linkClassName}
          {...(target.startsWith("http") ? { rel: "noopener noreferrer" } : {})}
        >
          {match[1]}
        </a>
      );
    }
    last = start + match[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}
