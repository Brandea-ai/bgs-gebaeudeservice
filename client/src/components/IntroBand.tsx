import type { ReactNode } from "react";
import RichText from "./RichText";
import type { Locale } from "../../../shared/i18n";

/**
 * Einleitung direkt unter dem Hero (E84). Der Hero trägt nur noch Titel, einen
 * Satz und die Aktionen; die ausführliche Einleitung und die Eckdaten stehen hier,
 * hell und gut lesbar. Links der Text, rechts Fakten, Kennzahlen oder eine
 * Sprungliste. Premium in Elfenbein mit Serifenschrift und Champagner.
 */
export default function IntroBand({
  id = "auf-einen-blick",
  title,
  paragraphs,
  lang,
  aside,
  tone = "light",
}: {
  id?: string;
  title: string;
  paragraphs: readonly string[];
  lang: Locale;
  aside?: ReactNode;
  tone?: "light" | "premium";
}) {
  const premium = tone === "premium";
  const [first, ...rest] = paragraphs;
  const link = premium
    ? "font-semibold text-ink underline decoration-brass underline-offset-4 hover:text-brass-dark"
    : "font-semibold text-ink underline decoration-signal/60 underline-offset-4 hover:text-signal";
  return (
    <section
      aria-labelledby={id}
      className={`border-b border-line ${premium ? "bg-ivory" : "bg-white"}`}
    >
      <div className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-x-16 lg:py-20">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
          <h2
            id={id}
            className={`t-eyebrow ${premium ? "text-brass-dark" : "text-signal"}`}
          >
            {title}
          </h2>
          {first && (
            <p
              className={`mt-5 max-w-[42ch] text-ink ${
                premium
                  ? "font-premium text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] font-medium leading-snug"
                  : "text-[clamp(1.25rem,1rem+0.8vw,1.625rem)] font-semibold leading-snug tracking-[-0.01em]"
              }`}
            >
              <RichText text={first} lang={lang} linkClassName={link} />
            </p>
          )}
          {rest.map(paragraph => (
            <p
              key={paragraph}
              className="mt-5 max-w-[62ch] text-[1.0625rem] font-medium leading-relaxed text-ink"
            >
              <RichText text={paragraph} lang={lang} linkClassName={link} />
            </p>
          ))}
        </div>
        {aside && <div className="min-w-0 lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}

/** Eckdaten als ruhige Liste mit Linien, Beschriftung über dem Wert */
export function FactList({
  facts,
  labelledBy,
  tone = "light",
}: {
  facts: readonly { label: string; value: string }[];
  labelledBy?: string;
  tone?: "light" | "premium";
}) {
  return (
    <dl
      aria-labelledby={labelledBy}
      className="divide-y divide-line border-y border-line"
    >
      {facts.map(fact => (
        <div
          key={fact.label}
          className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
        >
          <dt
            className={`text-sm font-semibold ${tone === "premium" ? "text-brass-dark" : "text-mute"}`}
          >
            {fact.label}
          </dt>
          <dd className="hyphens font-semibold leading-snug text-ink [overflow-wrap:anywhere]">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Kennzahlen (E18, E58) als Raster mit grossen Werten, statisch ohne Zähler */
export function FigureGrid({
  items,
  labelledBy,
}: {
  items: readonly { value: string; label: string }[];
  labelledBy?: string;
}) {
  return (
    <dl
      aria-labelledby={labelledBy}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-line bg-line"
    >
      {items.map(item => (
        <div
          key={item.label}
          className="figure-cell flex min-w-0 flex-col gap-1.5 bg-white p-4 sm:p-5"
        >
          <dt className="order-2 text-sm font-semibold leading-snug text-mute">
            {item.label}
          </dt>
          <dd className="figure-value t-figure order-1 text-ink">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
