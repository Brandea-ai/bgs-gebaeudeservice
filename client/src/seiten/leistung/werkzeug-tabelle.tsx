import RichText from "@/components/RichText";
import type { Text } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";

/**
 * Tabelle eines Werkzeugs (E85): ab md eine echte Tabelle mit caption und
 * th scope in einem eigenen Container mit waagerechtem Scroll, darunter als
 * Karten mit Spaltenbeschriftung. Beim Drucken immer die Tabelle (globals.css).
 * Die erste Spalte ist die Zeilenbeschriftung. Der Scrollbereich ist per
 * Tastatur erreichbar und trägt einen eigenen Namen («Tabelle: Titel»), damit
 * er sich vom Werkzeug-Abschnitt mit dem Titel unterscheidet (axe
 * landmark-unique, P2).
 */
export default function WerkzeugTabelle({
  title,
  regionLabel,
  columns,
  rows,
  lang,
  premium,
  link,
  form = false,
  formLabels,
}: {
  title: string;
  /** Anfang des Namens für den Scrollbereich, etwa «Tabelle: » (ui.tool.table) */
  regionLabel: string;
  columns: string[];
  rows: Text[][];
  lang: Locale;
  premium: boolean;
  link?: string;
  form?: boolean;
  formLabels: { property: string; date: string; name: string };
}) {
  const head = premium
    ? "border-anthracite text-anthracite"
    : "border-ink text-ink";
  const line = premium ? "border-brass-dark/20" : "border-line";
  const rowHead = premium ? "text-anthracite" : "text-ink";
  return (
    <>
      {form && (
        <dl className="tool-form-head">
          {[formLabels.property, formLabels.date, formLabels.name].map(
            label => (
              <div key={label}>
                <dt>{label}</dt>
                <dd aria-hidden="true">&nbsp;</dd>
              </div>
            )
          )}
        </dl>
      )}
      <div
        className="tool-table-wrap mt-7 hidden overflow-x-auto md:block"
        role="region"
        aria-label={`${regionLabel}${title}`}
        tabIndex={0}
      >
        <table
          className={`w-full min-w-[36rem] border-collapse text-left ${form ? "tool-form-table" : ""}`}
        >
          <caption className="sr-only">{title}</caption>
          {form && (
            <colgroup>
              {columns.map((column, c) => (
                <col
                  key={column}
                  style={{
                    width:
                      c === 0
                        ? "50%"
                        : c === columns.length - 1
                          ? "35%"
                          : undefined,
                  }}
                />
              ))}
            </colgroup>
          )}
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
                    <td
                      key={c}
                      className="py-4 pr-6 align-top font-medium leading-relaxed text-ink-600 last:pr-0"
                    >
                      <RichText text={cell} lang={lang} linkClassName={link} />
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {form ? (
        <div className="tool-table-cards mt-6 md:hidden">
          <p className="mb-3 text-sm font-semibold text-ink-600">
            {columns.slice(1).join(" · ")}
          </p>
          <ul className={`border-t ${line}`}>
            {rows.map((row, r) => (
              <li
                key={`${r}-${row[0]}`}
                className={`flex items-start gap-3 border-b py-3 ${line}`}
              >
                <span
                  className={`tool-box mt-1 size-[1.125rem] shrink-0 rounded-[3px] border-2 ${premium ? "border-brass-dark/60" : "border-ink/45"}`}
                  aria-hidden="true"
                />
                <div className="min-w-0 font-medium leading-relaxed text-ink-600">
                  <RichText text={row[0]} lang={lang} linkClassName={link} />
                  {row.slice(1).map(
                    (cell, c) =>
                      cell.trim() &&
                      cell !== "☐" && (
                        <p key={c} className="mt-1 text-sm">
                          <span className="font-semibold">
                            {columns[c + 1]}:{" "}
                          </span>
                          <RichText
                            text={cell}
                            lang={lang}
                            linkClassName={link}
                          />
                        </p>
                      )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="tool-table-cards mt-6 grid gap-3 md:hidden">
          {rows.map((row, r) => (
            <li
              key={`${r}-${row[0]}`}
              className={`rounded-[3px] border p-4 ${premium ? "border-brass-dark/20 bg-ivory" : "border-line bg-stone"}`}
            >
              <p
                className={`text-[0.8125rem] font-semibold ${premium ? "text-ink-600" : "text-mute"}`}
              >
                {columns[0]}
              </p>
              <p
                className={`mt-0.5 font-display text-[1.0625rem] font-bold leading-snug ${rowHead}`}
              >
                <RichText text={row[0]} lang={lang} linkClassName={link} />
              </p>
              <dl className={`mt-3 grid gap-3 border-t pt-3 ${line}`}>
                {row.slice(1).map((cell, c) => (
                  <div key={c}>
                    <dt
                      className={`text-[0.8125rem] font-semibold ${premium ? "text-ink-600" : "text-mute"}`}
                    >
                      {columns[c + 1]}
                    </dt>
                    <dd className="mt-0.5 font-medium leading-relaxed text-ink-600">
                      <RichText text={cell} lang={lang} linkClassName={link} />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
