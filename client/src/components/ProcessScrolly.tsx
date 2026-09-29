import {
  CalendarCheck,
  Envelope,
  FileText,
  ClipboardText,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import ProcessSection from "./ProcessSection";
import Stage, { type Figure } from "./ProcessStage";
import RichText from "./RichText";
import { premiumLightLink } from "./premiumStyles";
import { images, type ImageKey } from "../../../shared/images";
import type { FigureKey, Step } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

export type { FigureKey };

const glyphs: Record<FigureKey, Icon> = {
  anfrage: Envelope,
  besichtigung: ClipboardText,
  offerte: FileText,
  start: CalendarCheck,
};

const isImage = (key: FigureKey | ImageKey): key is ImageKey => key in images;

/**
 * Figur je Schritt nur aus ausdrücklicher Angabe: step.figure, sonst
 * figureKeys an derselben Stelle. Nie nach Position raten (F2).
 */
function explicitKeys(steps: Step[], figureKeys: FigureKey[] = []) {
  return steps.map((step, i) => step.figure ?? figureKeys[i]);
}

/**
 * Bühne nur, wenn jeder Schritt eine zeigbare Figur hat. Premium zeigt nur
 * Bilder, weil die Videos Signalrot enthalten (E85, F4): ohne eigene Bilder
 * keine leere Symbolbühne, sondern die ruhige Liste.
 */
export function hasStage(
  steps: Step[],
  premium: boolean,
  figureKeys: FigureKey[] = []
) {
  const keys = explicitKeys(steps, figureKeys);
  return (
    keys.length > 0 &&
    keys.every(key => key !== undefined && (!premium || isImage(key)))
  );
}

/**
 * Prozess-Sektion (F14, E85) nach dem Muster era-residence Dossier 06.
 *
 * Mit Bühne (jeder Schritt hat eine zeigbare Figur, siehe hasStage):
 * - ab drei Schritten ab lg eine klebende Szene, links die Bühne, rechts alle
 *   Schritte ohne Mindesthöhe. Die Szene ist so hoch wie ihr Inhalt und klebt
 *   mittig im freien Bildschirm; ein Scrollweg darunter (process-track) lässt
 *   sie stehen, der Fortschritt setzt nur data-active (F3). Höhe und Lage
 *   hängen nicht an der ein- und ausfahrenden Kopfzeile (F1).
 * - bis zwei Schritte ein ruhiges Raster, Bühne neben der Liste, ohne Scrollweg.
 *
 * Ohne Bühne die Liste: variant "row" ab lg als Zeile nebeneinander (der
 * Aufruf wählt sie nur, wenn die Spalten breit genug sind), sonst senkrecht.
 * Schrittsymbole nur, wenn jeder Schritt ein Video als Figur hat; sonst
 * ruhige Punkte auf der Linie (F2). Auf dem Handy,
 * mit reduced motion und wenn die Szene nicht in den Bildschirm passt: ruhige
 * Liste bzw. statisches Raster.
 */
export default function ProcessScrolly({
  steps,
  lang = "de",
  tone = "light",
  variant = "wide",
  figureKeys = [],
  labelledBy,
  idPrefix = "schritt",
}: {
  steps: Step[];
  lang?: Locale;
  /** premium: helle Premium-Welt, Champagner statt Signalrot, keine Videos */
  tone?: "light" | "dark" | "premium";
  /** wide/narrow: mit Bühne, falls jeder Schritt eine Figur hat; row: Zeile ab lg; vertical: Liste */
  variant?: "wide" | "narrow" | "row" | "vertical";
  /** Video je Stelle für Abläufe, deren Schritte keine eigene figure tragen (Startseite, Kontakt) */
  figureKeys?: FigureKey[];
  /** id der Überschrift über der Sektion */
  labelledBy?: string;
  idPrefix?: string;
}) {
  const dark = tone === "dark";
  const lux = tone === "premium";
  // Akzent: Signalrot, auf Anthrazit Champagner, in der hellen Premium-Welt Champagner für Hell
  const accent = dark ? "text-brass" : lux ? "text-brass-dark" : "text-signal";
  const toneClass = dark ? "process--dark" : lux ? "process--premium" : "";
  const keys = explicitKeys(steps, figureKeys);
  const n = steps.length;
  const staged =
    (variant === "wide" || variant === "narrow") &&
    hasStage(steps, lux, figureKeys);
  // Symbol je Schritt nur aus einem Video-Schlüssel; sonst Punkte ohne Symbol
  const marks = keys.every(key => key !== undefined && !isImage(key))
    ? keys.map(key => glyphs[key as FigureKey])
    : null;
  // Zeile nebeneinander nur ohne Bühne; wie viele Spalten passen, entscheidet der Aufruf
  const row = !staged && variant === "row";

  const list = (
    <ol className="relative">
      {n > 1 && (
        <span
          className={`process-line ${dark ? "bg-white/20" : lux ? "bg-brass/40" : "bg-ink/15"}`}
          aria-hidden="true"
        >
          <span
            className={`process-line-fill block h-full w-full ${dark ? "bg-brass" : lux ? "bg-brass-dark" : "bg-signal"}`}
          />
        </span>
      )}
      {steps.map((step, i) => {
        const Glyph = marks?.[i];
        return (
          <li
            key={step.title}
            id={`${idPrefix}-${i + 1}`}
            data-step={i + 1}
            className="process-step pb-10 last:pb-0"
          >
            {Glyph && (
              <span className={`process-num ${accent}`} aria-hidden="true">
                <Glyph weight="duotone" className="size-6" />
              </span>
            )}
            <span className={`process-dot ${accent}`} aria-hidden="true" />
            <h3
              className={
                lux
                  ? "font-premium text-[clamp(1.5rem,1.2rem+0.8vw,2rem)] font-bold leading-tight text-anthracite"
                  : `t-h3 ${dark ? "text-white" : "text-ink"}`
              }
            >
              {step.title}
            </h3>
            <p
              className={`hyphens mt-3 max-w-[46ch] font-medium leading-relaxed ${dark ? "text-white/90" : "text-ink-600"}`}
            >
              <RichText
                text={step.text}
                lang={lang}
                linkClassName={
                  dark
                    ? "font-semibold text-white underline underline-offset-4"
                    : lux
                      ? premiumLightLink
                      : undefined
                }
              />
            </p>
          </li>
        );
      })}
    </ol>
  );
  const plain = marks ? "" : "process--plain";

  if (!staged) {
    return (
      <ProcessSection
        n={n}
        labelledBy={labelledBy}
        className={`${toneClass} ${plain} ${row ? "process--row" : ""}`}
      >
        {list}
      </ProcessSection>
    );
  }

  const figures: Figure[] = keys.map(key => {
    const k = key as FigureKey | ImageKey;
    return isImage(k) ? { image: k } : { video: k };
  });
  const scene = n >= 3;
  const figureCol = variant === "wide" ? "lg:col-span-7" : "lg:col-span-6";
  const stepsCol =
    variant === "wide"
      ? "lg:col-span-5 lg:col-start-8"
      : "lg:col-span-6 lg:col-start-7";
  return (
    <ProcessSection
      n={n}
      labelledBy={labelledBy}
      className={`process--area ${scene ? "process--scene" : ""} ${toneClass} ${plain}`}
    >
      <div className="process-screen grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <figure
          className={`process-figure hidden ${figureCol} lg:block`}
          aria-hidden="true"
        >
          <Stage figures={figures} lux={lux} />
        </figure>
        <div className={`process-list min-w-0 ${stepsCol}`}>{list}</div>
      </div>
      {scene && <div className="process-track" aria-hidden="true" />}
    </ProcessSection>
  );
}
