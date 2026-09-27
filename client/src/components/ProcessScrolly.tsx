import {
  CalendarCheck,
  Envelope,
  FileText,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import ProcessSection from "./ProcessSection";
import RichText from "./RichText";
import type { Step } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

export type FigureKey = "anfrage" | "besichtigung" | "offerte" | "start";

const glyphs: Record<FigureKey, Icon> = {
  anfrage: Envelope,
  besichtigung: MapPin,
  offerte: FileText,
  start: CalendarCheck,
};

// Stationen des Ablaufplans im 320er-Raster, je nach Zahl der Schritte
const stations: Record<number, [number, number][]> = {
  2: [
    [72, 96],
    [248, 224],
  ],
  3: [
    [64, 80],
    [236, 112],
    [176, 244],
  ],
  4: [
    [64, 76],
    [236, 100],
    [92, 226],
    [252, 252],
  ],
};

/**
 * Ablaufplan (F14): eine eigene Linienzeichnung in der Linienführung der
 * Phosphor-Icons. Stationen auf einem gestrichelten Weg, der aktive Schritt
 * leuchtet auf (CSS über data-active). Rein dekorativ, der Text steht daneben.
 */
function Figure({
  keys,
  dark,
}: {
  keys: FigureKey[];
  dark: boolean;
}) {
  const points = stations[keys.length] ?? stations[4];
  const route = points.map(([x, y], i) => `${i ? "L" : "M"} ${x} ${y}`).join(" ");
  const line = dark ? "stroke-white/40" : "stroke-ink/40";
  const face = dark ? "fill-ink-800 stroke-white" : "fill-white stroke-ink";
  const glyph = dark ? "text-white" : "text-ink";
  return (
    <svg
      viewBox="0 0 320 320"
      className="h-auto w-full max-h-[60vh]"
      aria-hidden="true"
      focusable="false"
    >
      {/* Planraster */}
      <g className={dark ? "stroke-white/10" : "stroke-ink/10"} strokeWidth="1">
        {[80, 160, 240].map(v => (
          <g key={v}>
            <line x1={v} y1="8" x2={v} y2="312" />
            <line x1="8" y1={v} x2="312" y2={v} />
          </g>
        ))}
      </g>
      <path
        d={route}
        className={line}
        strokeWidth="1.5"
        strokeDasharray="5 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {points.map(([x, y], i) => {
        const Glyph = glyphs[keys[i]];
        return (
          <g key={keys[i]} className={`pf pf-${i + 1}`}>
            <circle cx={x} cy={y} r="30" className={face} strokeWidth="1.5" />
            <circle
              cx={x}
              cy={y}
              r="30"
              className="pf-ring fill-none stroke-signal"
              strokeWidth="2"
            />
            <Glyph
              x={x - 15}
              y={y - 15}
              width={30}
              height={30}
              weight="regular"
              className={glyph}
            />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Prozess-Sektion (F14): Der Ablauf bis zur Offerte als stehende Figur links
 * und durchlaufende Schritte rechts (wide, narrow), auf dem Handy und in der
 * vertikalen Variante als Liste mit kleiner Marke je Schritt. Ohne JavaScript,
 * ohne Browserunterstützung und mit reduced motion: alles sofort sichtbar.
 * Ersetzt das Kartenraster Steps.tsx.
 */
export default function ProcessScrolly({
  steps,
  lang = "de",
  tone = "light",
  variant = "wide",
  figureKeys,
  labelledBy,
  idPrefix = "schritt",
}: {
  steps: Step[];
  lang?: Locale;
  tone?: "light" | "dark";
  variant?: "wide" | "narrow" | "vertical";
  figureKeys: FigureKey[];
  /** id der Überschrift über der Sektion */
  labelledBy?: string;
  idPrefix?: string;
}) {
  const dark = tone === "dark";
  const keys = steps.map((_, i) => figureKeys[i] ?? "start");
  const n = steps.length;
  const pinned = variant !== "vertical";
  const cols =
    variant === "wide"
      ? "lg:grid-cols-12"
      : variant === "narrow"
        ? "lg:grid-cols-12"
        : "";
  const figureCol = variant === "wide" ? "lg:col-span-5" : "lg:col-span-5";
  const stepsCol =
    variant === "wide" ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-7";

  const list = (
    <ol
      className={`relative ${pinned ? "" : ""}`}
      style={{ "--step-h": n <= 3 ? "44vh" : "38vh" } as React.CSSProperties}
    >
      <span
        className={`process-line ${dark ? "bg-white/20" : "bg-ink/15"}`}
        aria-hidden="true"
      >
        <span
          className={`process-line-fill block h-full w-full ${dark ? "bg-brass" : "bg-signal"}`}
        />
      </span>
      {steps.map((step, i) => {
        const Glyph = glyphs[keys[i]];
        return (
          <li
            key={step.title}
            id={`${idPrefix}-${i + 1}`}
            data-step={i + 1}
            className={`process-step pb-10 last:pb-0 ${pinned ? "lg:pb-0" : ""}`}
          >
            <span
              className={`process-num ${dark ? "text-brass" : "text-signal"}`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`process-dot ${dark ? "text-brass" : "text-signal"}`}
              aria-hidden="true"
            />
            {/* Kleine Marke je Schritt, wo die Figur nicht steht */}
            {(!pinned || true) && (
              <Glyph
                weight="regular"
                aria-hidden="true"
                className={`mb-3 size-6 ${dark ? "text-brass" : "text-signal"} ${pinned ? "lg:hidden" : ""}`}
              />
            )}
            <h3 className={`t-h3 ${dark ? "text-white" : "text-ink"}`}>
              {step.title}
            </h3>
            <p
              className={`mt-3 max-w-[46ch] font-medium leading-relaxed ${dark ? "text-white/85" : "text-ink-600"}`}
            >
              <RichText
                text={step.text}
                lang={lang}
                linkClassName={
                  dark
                    ? "font-semibold text-white underline underline-offset-4"
                    : undefined
                }
              />
            </p>
          </li>
        );
      })}
    </ol>
  );

  if (!pinned) {
    return (
      <ProcessSection
        n={n}
        labelledBy={labelledBy}
        className={dark ? "process--dark" : ""}
      >
        {list}
      </ProcessSection>
    );
  }

  return (
    <ProcessSection
      n={n}
      labelledBy={labelledBy}
      className={`grid gap-10 ${cols} lg:gap-12 ${dark ? "process--dark" : ""}`}
    >
      <figure
        className={`process-figure hidden ${figureCol} lg:block`}
        aria-hidden="true"
      >
        <Figure keys={keys} dark={dark} />
      </figure>
      <div className={stepsCol}>{list}</div>
    </ProcessSection>
  );
}
