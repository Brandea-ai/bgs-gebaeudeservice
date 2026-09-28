import Image from "next/image";
import {
  CalendarCheck,
  CheckCircle,
  Envelope,
  FileText,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import ProcessSection from "./ProcessSection";
import RichText from "./RichText";
import { premiumLightLink } from "./premiumStyles";
import { images, type ImageKey } from "../../../shared/images";
import type { FigureKey, Step } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

export type { FigureKey };

const glyphs: Record<FigureKey, Icon> = {
  anfrage: Envelope,
  besichtigung: MapPin,
  offerte: FileText,
  start: CalendarCheck,
};

type Figure = { image: ImageKey } | { video: FigureKey };

const isImage = (key: FigureKey | ImageKey): key is ImageKey => key in images;

/**
 * Bühne (E80, E85): je Schritt ein Remotion-Video ohne Schrift oder ein Bild
 * aus dem Register, gestapelt; sichtbar ist die Figur des aktiven Schritts
 * (CSS über data-active), abgespielt wird nur dessen Video (ProcessSection).
 * Ohne JavaScript oder mit reduced motion steht die erste Figur. Premium in
 * Elfenbein mit Champagner-Ring und ohne Videos, weil diese Signalrot zeigen:
 * statt Video das Symbol des Schritts gross auf Elfenbein.
 */
function Stage({ figures, lux, marks }: { figures: Figure[]; lux: boolean; marks: Icon[] }) {
  return (
    <div
      className={`process-stage relative aspect-[4/3] overflow-hidden rounded-[3px] ${
        lux
          ? "bg-ivory shadow-[0_1px_0_rgba(125,98,49,0.12),0_36px_70px_-38px_rgba(90,68,30,0.5)] ring-1 ring-brass-dark/30"
          : "bg-stone shadow-[0_1px_0_rgba(14,17,22,0.04),0_28px_60px_-36px_rgba(14,17,22,0.45)] ring-1 ring-ink/10"
      }`}
    >
      {figures.map((figure, i) => {
        const cls = `pv pv-${i + 1} absolute inset-0 h-full w-full`;
        if ("image" in figure) {
          return (
            <div key={i} className={cls}>
              <Image
                src={images[figure.image].src}
                alt=""
                fill
                sizes="(min-width: 1024px) 55vw, 1px"
                className="object-cover"
              />
            </div>
          );
        }
        if (lux) {
          const Mark = marks[i];
          return (
            <div
              key={i}
              className={`${cls} grid place-items-center bg-[radial-gradient(120%_90%_at_25%_15%,#fff_0%,rgba(255,255,255,0)_60%),radial-gradient(80%_70%_at_85%_95%,rgba(200,169,110,0.22),rgba(200,169,110,0)_70%)]`}
            >
              <span className="grid size-[clamp(8rem,14vw,12rem)] place-items-center rounded-full border border-brass-dark/35 bg-white/70 shadow-[0_24px_50px_-30px_rgba(90,68,30,0.45)]">
                <Mark weight="duotone" className="size-[42%] text-brass-dark" />
              </span>
            </div>
          );
        }
        return (
          <video
            key={i}
            data-step-video={i + 1}
            className={`${cls} object-cover`}
            muted
            loop
            playsInline
            preload={i === 0 ? "metadata" : "none"}
            poster={`/video/ablauf/${figure.video}-poster.jpg`}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={`/video/ablauf/${figure.video}.webm`} type="video/webm" />
            <source src={`/video/ablauf/${figure.video}.mp4`} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
}

/**
 * Prozess-Sektion (F14, E85) nach dem Muster era-residence Dossier 06: ab lg
 * eine klebende Szene über die volle Bildschirmhöhe, links die Bühne, rechts
 * alle Schritte ohne Mindesthöhe. Ein Scrollweg darunter (process-track) lässt
 * die Szene stehen, der Fortschritt setzt nur data-active. Kein Pin, nur
 * position: sticky. Auf dem Handy, in der vertikalen Variante, mit reduced
 * motion und wenn die Szene nicht in den Bildschirm passt: ruhige Liste bzw.
 * statisches Raster. Die Figur je Schritt kommt aus step.figure, sonst aus
 * figureKeys (nach Position), sonst «start».
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
  variant?: "wide" | "narrow" | "vertical";
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
  const keys = steps.map((step, i) => step.figure ?? figureKeys[i] ?? "start");
  const figures: Figure[] = keys.map(key => (isImage(key) ? { image: key } : { video: key }));
  const marks = keys.map(key => (isImage(key) ? CheckCircle : glyphs[key]));
  const n = steps.length;
  const pinned = variant !== "vertical";

  const list = (
    <ol className="relative">
      <span
        className={`process-line ${dark ? "bg-white/20" : lux ? "bg-brass/40" : "bg-ink/15"}`}
        aria-hidden="true"
      >
        <span
          className={`process-line-fill block h-full w-full ${dark ? "bg-brass" : lux ? "bg-brass-dark" : "bg-signal"}`}
        />
      </span>
      {steps.map((step, i) => {
        const Glyph = marks[i];
        return (
          <li
            key={step.title}
            id={`${idPrefix}-${i + 1}`}
            data-step={i + 1}
            className="process-step pb-10 last:pb-0"
          >
            <span className={`process-num ${accent}`} aria-hidden="true">
              <Glyph weight="duotone" className="size-6" />
            </span>
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
              className={`mt-3 max-w-[46ch] font-medium leading-relaxed ${dark ? "text-white/90" : "text-ink-600"}`}
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

  if (!pinned) {
    return (
      <ProcessSection n={n} labelledBy={labelledBy} className={toneClass}>
        {list}
      </ProcessSection>
    );
  }

  const figureCol = variant === "wide" ? "lg:col-span-7" : "lg:col-span-6";
  const stepsCol = variant === "wide" ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-6 lg:col-start-7";
  return (
    <ProcessSection n={n} labelledBy={labelledBy} className={`process--area ${toneClass}`}>
      <div className="process-screen grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <figure className={`process-figure hidden ${figureCol} lg:block`} aria-hidden="true">
          <Stage figures={figures} lux={lux} marks={marks} />
        </figure>
        <div className={`process-list min-w-0 ${stepsCol}`}>{list}</div>
      </div>
      <div className="process-track" aria-hidden="true" />
    </ProcessSection>
  );
}
