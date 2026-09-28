import RichText from "@/components/RichText";
import type { Text } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";

/**
 * Checkliste eines Werkzeugs (E85): Gruppen mit leerem Kästchen je Punkt,
 * zum Abhaken auf Papier. Nicht interaktiv, damit nichts einen Zustand
 * vortäuscht; die Kästchen drucken als Kontur mit.
 */
export default function WerkzeugCheckliste({
  id,
  groups,
  lang,
  premium,
  link,
}: {
  id: string;
  groups: { title: string; items: Text[] }[];
  lang: Locale;
  premium: boolean;
  link?: string;
}) {
  const line = premium ? "border-brass-dark/20" : "border-line";
  return (
    <div className={`mt-7 grid gap-x-10 gap-y-8 ${groups.length > 1 ? "md:grid-cols-2" : ""}`}>
      {groups.map((group, g) => (
        <div key={group.title} className="tool-group min-w-0">
          <h3
            id={`${id}-gruppe-${g + 1}`}
            className={`font-display text-[1.0625rem] font-bold leading-snug ${premium ? "text-anthracite" : "text-ink"}`}
          >
            {group.title}
          </h3>
          <ul aria-labelledby={`${id}-gruppe-${g + 1}`} className={`mt-3 border-t ${line}`}>
            {group.items.map(item => (
              <li key={item} className={`flex items-start gap-3 border-b py-3 ${line}`}>
                <span
                  className={`tool-box mt-[0.2em] size-[1.125rem] shrink-0 rounded-[3px] border-2 bg-white ${premium ? "border-brass-dark/60" : "border-ink/45"}`}
                  aria-hidden="true"
                />
                <span className="min-w-0 font-medium leading-relaxed text-ink-600">
                  <RichText text={item} lang={lang} linkClassName={link} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
