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

/**
 * Ablauf-Bühne (E80): je Schritt ein kurzes Remotion-Video ohne Schrift
 * (sprachneutral), gestapelt; sichtbar ist das Video des aktiven Schritts
 * (CSS über data-active), abgespielt wird nur dieses (ProcessSection). Ohne
 * JavaScript oder mit reduced motion steht das Standbild des ersten Schritts.
 */
function Stage({ keys }: { keys: FigureKey[] }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-stone shadow-[0_1px_0_rgba(14,17,22,0.04),0_28px_60px_-36px_rgba(14,17,22,0.45)] ring-1 ring-ink/10">
      {keys.map((key, i) => (
        <video
          key={key}
          data-step-video={i + 1}
          className={`pv pv-${i + 1} absolute inset-0 h-full w-full object-cover`}
          muted
          loop
          playsInline
          preload={i === 0 ? "metadata" : "none"}
          poster={`/video/ablauf/${key}-poster.jpg`}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={`/video/ablauf/${key}.webm`} type="video/webm" />
          <source src={`/video/ablauf/${key}.mp4`} type="video/mp4" />
        </video>
      ))}
    </div>
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
  const figureCol = "lg:col-span-5";
  const stepsCol =
    variant === "wide" ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-7";

  const list = (
    <ol
      className="relative"
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
              <Glyph weight="duotone" className="size-6" />
            </span>
            <span
              className={`process-dot ${dark ? "text-brass" : "text-signal"}`}
              aria-hidden="true"
            />
            <h3 className={`t-h3 ${dark ? "text-white" : "text-ink"}`}>
              {step.title}
            </h3>
            <p
              className={`mt-3 max-w-[46ch] font-medium leading-relaxed ${dark ? "text-white/90" : "text-ink-600"}`}
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
        <Stage keys={keys} />
      </figure>
      <div className={stepsCol}>{list}</div>
    </ProcessSection>
  );
}
