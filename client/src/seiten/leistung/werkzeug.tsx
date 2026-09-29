import {
  ArrowSquareOut,
  CalendarDots,
  Lightbulb,
  ListChecks,
  Table,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import RichText from "@/components/RichText";
import { premiumLightLink } from "@/components/premiumStyles";
import { company } from "../../../../shared/company";
import { getDict } from "../../../../content";
import type { Source, Text, Tool } from "../../../../content/types";
import type { Locale } from "../../../../shared/i18n";
import { formatDate } from "../artikel/datum";
import DruckKnopf from "./drucken";
import WerkzeugCheckliste from "./werkzeug-checkliste";
import WerkzeugTabelle from "./werkzeug-tabelle";
import WerkzeugInhalt from "./werkzeug-inhalt";

const glyphs: Record<Tool["kind"], Icon> = {
  table: Table,
  checklist: ListChecks,
  timeline: CalendarDots,
  text: Lightbulb,
};

/**
 * Werkzeug-Baustein der Leistungsseiten (E85): Tabelle, Checkliste, Zeitplan
 * oder Wissenstext, mit Quellen darunter. Standard in Weiss und Graphit mit
 * Signalrot als Akzent, Premium in Elfenbein mit Serifentitel und Champagner.
 * printable zeigt «Drucken»; im Druck erscheinen nur dieses Werkzeug und
 * darüber Seitentitel, Firma und, falls im Inhalt gepflegt, der Stand der
 * letzten Prüfung (tool.updated, nie das Build-Datum).
 */
export default function Werkzeug({
  tool,
  lang,
  premium,
  pageTitle,
}: {
  tool: Tool;
  lang: Locale;
  premium: boolean;
  pageTitle: string;
}) {
  const { ui } = getDict(lang);
  const Glyph = glyphs[tool.kind];
  const link = premium ? premiumLightLink : undefined;
  const printable = tool.printable;
  const intro = tool.kind === "text" ? undefined : tool.intro;
  const updated = tool.updated;
  return (
    <section
      id={tool.id}
      aria-labelledby={`${tool.id}-titel`}
      data-tool={tool.kind}
      className={`tool rounded-[3px] border p-6 sm:p-8 lg:p-10 ${
        premium
          ? "border-brass-dark/25 bg-white text-anthracite shadow-[0_24px_60px_-44px_rgba(90,68,30,0.45)]"
          : "border-line bg-white text-ink shadow-[0_18px_40px_-32px_rgba(14,17,22,0.3)]"
      }`}
    >
      {tool.printHeader !== false && (
        <div className="tool-print-head" aria-hidden="true">
          <p className="tool-print-page">{pageTitle}</p>
          <p className="tool-print-meta">
            {company.legalName}
            {updated && ` · ${ui.tool.updated} ${formatDate(updated, lang)}`}
          </p>
        </div>
      )}
      <div className="tool-heading grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6">
        <div className="flex min-w-0 items-start gap-4">
          <Glyph
            weight="duotone"
            className={`mt-1 size-8 shrink-0 ${premium ? "text-brass-dark" : "text-signal"}`}
            aria-hidden="true"
          />
          <h2
            id={`${tool.id}-titel`}
            className={
              premium
                ? "font-premium text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-semibold leading-[1.08] text-anthracite"
                : "font-display text-[clamp(1.375rem,1.15rem+0.8vw,1.875rem)] font-bold leading-[1.15] tracking-[-0.01em] text-ink"
            }
          >
            {tool.title}
          </h2>
        </div>
        {printable && (
          <DruckKnopf
            targetId={tool.id}
            label={ui.tool.print}
            title={tool.title}
            premium={premium}
          />
        )}
      </div>

      <WerkzeugInhalt
        id={tool.id}
        title={tool.title}
        showLabel={ui.tool.show}
        hideLabel={ui.tool.hide}
        premium={premium}
      >
        {intro && (
          <p className="mt-5 max-w-[62ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">
            <RichText text={intro} lang={lang} linkClassName={link} />
          </p>
        )}

        {tool.kind === "table" && (
          <WerkzeugTabelle
            title={tool.title}
            regionLabel={ui.tool.table}
            columns={tool.columns}
            rows={tool.rows}
            lang={lang}
            premium={premium}
            link={link}
            form={tool.form}
            formLabels={ui.tool.form}
          />
        )}
        {tool.kind === "checklist" && (
          <WerkzeugCheckliste
            id={tool.id}
            groups={tool.groups}
            lang={lang}
            premium={premium}
            link={link}
          />
        )}
        {tool.kind === "timeline" && (
          <ol
            className={`mt-7 border-t ${premium ? "border-brass-dark/20" : "border-line"}`}
          >
            {tool.entries.map(entry => (
              <li
                key={entry.label}
                className={`grid gap-1 border-b py-4 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-8 ${premium ? "border-brass-dark/20" : "border-line"}`}
              >
                <span
                  className={`font-display font-bold leading-snug ${premium ? "text-anthracite" : "text-ink"}`}
                >
                  {entry.label}
                </span>
                <span className="min-w-0 font-medium leading-relaxed text-ink-600">
                  <RichText
                    text={entry.text}
                    lang={lang}
                    linkClassName={link}
                  />
                </span>
              </li>
            ))}
          </ol>
        )}
        {tool.kind === "text" && (
          <div className="mt-5 space-y-4">
            {tool.paragraphs.map(paragraph => (
              <p
                key={paragraph}
                className="max-w-[62ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600"
              >
                <RichText text={paragraph} lang={lang} linkClassName={link} />
              </p>
            ))}
            {tool.items && (
              <Punkte
                items={tool.items}
                lang={lang}
                premium={premium}
                link={link}
              />
            )}
          </div>
        )}

        {tool.note && (
          <Hinweis text={tool.note} lang={lang} premium={premium} link={link} />
        )}
        {tool.sources && tool.sources.length > 0 && (
          <Quellen
            sources={tool.sources}
            label={ui.tool.sources}
            external={ui.tool.external}
            premium={premium}
          />
        )}
      </WerkzeugInhalt>
    </section>
  );
}

function Punkte({
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
function Hinweis({
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
function Quellen({
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
