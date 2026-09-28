import RichText from "@/components/RichText";
import type { Text } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";

/**
 * Tabelle eines Werkzeugs (E85): ab md eine echte Tabelle mit caption und
 * th scope in einem eigenen Container mit waagerechtem Scroll, darunter als
 * Karten mit Spaltenbeschriftung. Beim Drucken immer die Tabelle (globals.css).
 * Die erste Spalte ist die Zeilenbeschriftung.
 */
export default function WerkzeugTabelle({
  id,
  title,
  columns,
  rows,
  lang,
  premium,
  link,
}: {
  id: string;
  title: string;
  columns: string[];
  rows: Text[][];
  lang: Locale;
  premium: boolean;
  link?: string;
}) {
  const head = premium ? "border-anthracite text-anthracite" : "border-ink text-ink";
  const line = premium ? "border-brass-dark/20" : "border-line";
  const rowHead = premium ? "text-anthracite" : "text-ink";
  return (
    <>
      <div
        className="tool-table-wrap mt-7 hidden overflow-x-auto md:block"
        role="region"
        aria-labelledby={`${id}-titel`}
        tabIndex={0}
      >
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr>
              {columns.map(column => (
                <th
                  key={column}
                  scope="col"
                  className={`border-b-2 py-3 pr-6 align-bottom font-display text-[0.9375rem] font-bold leading-snug last:pr-0 ${head}`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={`${r}-${row[0]}`} className={`border-b ${line}`}>
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th
                      key={c}
                      scope="row"
                      className={`py-4 pr-6 align-top font-semibold leading-relaxed ${rowHead}`}
                    >
                      <RichText text={cell} lang={lang} linkClassName={link} />
                    </th>
                  ) : (
                    <td key={c} className="py-4 pr-6 align-top font-medium leading-relaxed text-ink-600 last:pr-0">
                      <RichText text={cell} lang={lang} linkClassName={link} />
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="tool-table-cards mt-6 grid gap-3 md:hidden">
        {rows.map((row, r) => (
          <li
            key={`${r}-${row[0]}`}
            className={`rounded-[3px] border p-4 ${premium ? "border-brass-dark/20 bg-ivory" : "border-line bg-stone"}`}
          >
            <p className={`text-[0.8125rem] font-semibold ${premium ? "text-ink-600" : "text-mute"}`}>{columns[0]}</p>
            <p className={`mt-0.5 font-display text-[1.0625rem] font-bold leading-snug ${rowHead}`}>
              <RichText text={row[0]} lang={lang} linkClassName={link} />
            </p>
            <dl className={`mt-3 grid gap-3 border-t pt-3 ${line}`}>
              {row.slice(1).map((cell, c) => (
                <div key={c}>
                  <dt className={`text-[0.8125rem] font-semibold ${premium ? "text-ink-600" : "text-mute"}`}>{columns[c + 1]}</dt>
                  <dd className="mt-0.5 font-medium leading-relaxed text-ink-600">
                    <RichText text={cell} lang={lang} linkClassName={link} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
