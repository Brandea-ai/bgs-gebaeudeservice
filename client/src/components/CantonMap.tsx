import Reveal from "./Reveal";
import {
  cantonShapes,
  mapViewBox,
  seatPoint,
} from "../../../shared/canton-map";
import {
  cantonInfo,
  cantonName,
  kantonGerman,
  kantonKeys,
  type KantonKey,
} from "../../../shared/cantons";
import { company } from "../../../shared/company";
import type { Locale } from "../../../shared/i18n";

/** BFS-Nummer eines bedienten Kantons zum Schlüssel seiner Seite */
const keyByBfs = new Map<number, KantonKey>(
  kantonKeys.map(key => [cantonInfo[kantonGerman[key]].bfs, key])
);

/*
 * Hervorhebung per Scrollspy (spy): ein umgebendes Element trägt
 * data-map-active=<Schlüssel> (seiten/einzugsgebiet). Die Klassen stehen hier
 * ausgeschrieben, damit Tailwind sie findet.
 */
const spyMuted = "[[data-map-active]_&]:fill-signal-light";
const spyFill: Record<KantonKey, string> = {
  luzern: "[[data-map-active=luzern]_&]:!fill-signal",
  zug: "[[data-map-active=zug]_&]:!fill-signal",
  aargau: "[[data-map-active=aargau]_&]:!fill-signal",
  nidwalden: "[[data-map-active=nidwalden]_&]:!fill-signal",
  obwalden: "[[data-map-active=obwalden]_&]:!fill-signal",
};
const spyCodeMuted = "[[data-map-active]_&]:text-ink";
const spyCode: Record<KantonKey, string> = {
  luzern: "[[data-map-active=luzern]_&]:!text-white",
  zug: "[[data-map-active=zug]_&]:!text-white",
  aargau: "[[data-map-active=aargau]_&]:!text-white",
  nidwalden: "[[data-map-active=nidwalden]_&]:!text-white",
  obwalden: "[[data-map-active=obwalden]_&]:!text-white",
};

/** Umriss eines Kantons als Rechteck [x, y, Breite, Höhe] in Kartenkoordinaten */
function shapeBox(d: string) {
  const nums = (d.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
  const xs = nums.filter((_, i) => i % 2 === 0);
  const ys = nums.filter((_, i) => i % 2 === 1);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

/**
 * Karte des Einzugsgebiets (F3, F10, F14, E30; Umbau 9 aus 25-AUDIT/visuell.md):
 * Zentralschweiz und Aargau aus den Kantonsgrenzen von swisstopo, die fünf
 * Kantone in der Akzentfarbe, der Sitz als Punkt. Reines SVG im HTML, ohne
 * Kartendienst und ohne Daten an Dritte. Server-Komponente.
 *
 * active hebt einen Kanton hervor (voll in der Akzentfarbe, die übrigen bedienten
 * zurückgenommen), focus schneidet die Karte auf diesen Kanton und den Sitz zu
 * (Kantonsseiten). spy lässt ein umgebendes Element per data-map-active
 * bestimmen, welcher Kanton hervortritt (Scrollspy auf /einzugsgebiet); ohne
 * JavaScript bleiben alle fünf voll. Beschriftungen stehen als HTML über dem
 * SVG, damit sie bei jeder Kartengrösse mindestens 13 px gross sind.
 */
export default function CantonMap({
  lang = "de",
  tone = "light",
  className = "",
  pins = [],
  texts,
  mobilePins = "all",
  active,
  focus = false,
  spy = false,
}: {
  lang?: Locale;
  /** premium: helle Premium-Welt, Kantone in Champagner statt Signalrot */
  tone?: "light" | "dark" | "premium";
  className?: string;
  /** Weitere Orte als Pins, Kartenkoordinaten wie seatPoint; side «left» setzt den Namen links vom Punkt */
  pins?: { x: number; y: number; label: string; side?: "left" | "right" }[];
  /** Texte aus dem Wörterbuch; activeLabel beschriftet den hervorgehobenen Kanton in der Legende */
  texts: { areaLabel: string; source: string; seat: string; activeLabel?: string };
  /** Auf dem Handy nur den Sitz beschriften, Orte in der Bildunterschrift nennen */
  mobilePins?: "all" | "seat";
  active?: KantonKey;
  focus?: boolean;
  spy?: boolean;
}) {
  const dark = tone === "dark";
  const lux = tone === "premium";
  const names = company.cantons.map(name => cantonName(name, lang)).join(", ");
  const served = cantonShapes.filter(shape => keyByBfs.has(shape.id));
  const others = cantonShapes.filter(shape => !keyByBfs.has(shape.id));
  const [, , fullW, fullH] = mapViewBox.split(" ").map(Number);

  // Ausschnitt: aktiver Kanton und Sitz mit Rand, mindestens 320 Einheiten
  let box = [0, 0, fullW, fullH];
  const focusShape = focus && active ? served.find(s => keyByBfs.get(s.id) === active) : undefined;
  if (focusShape) {
    const [x0, y0, x1, y1] = shapeBox(focusShape.d);
    const minX = Math.min(x0, seatPoint.x);
    const minY = Math.min(y0, seatPoint.y);
    const maxX = Math.max(x1, seatPoint.x);
    const maxY = Math.max(y1, seatPoint.y);
    const pad = Math.max(maxX - minX, maxY - minY) * 0.14 + 24;
    let w = maxX - minX + 2 * pad;
    let h = maxY - minY + 2 * pad;
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    w = Math.max(w, 320);
    h = Math.max(h, 320);
    const x = Math.min(Math.max(cx - w / 2, 0), Math.max(fullW - w, 0));
    const y = Math.min(Math.max(cy - h / 2, 0), Math.max(fullH - h, 0));
    box = [Math.round(x), Math.round(y), Math.round(Math.min(w, fullW)), Math.round(Math.min(h, fullH))];
  }
  const [bx, by, bw, bh] = box;
  const inBox = (x: number, y: number) => x >= bx && x <= bx + bw && y >= by && y <= by + bh;
  const at = (x: number, y: number) => ({ left: `${((x - bx) / bw) * 100}%`, top: `${((y - by) / bh) * 100}%` });
  // transform-box view-box: Bezug ist der Ursprung des Koordinatensystems, nicht der Ausschnitt
  const origin = (x: number, y: number) =>
    ({ "--ox": `${(x / bw) * 100}%`, "--oy": `${(y / bh) * 100}%` }) as React.CSSProperties;
  // Orte direkt neben dem Sitz würden dessen Beschriftung überdecken: nur Punkt, kein Name
  const nearSeat = (x: number, y: number) => Math.hypot(x - seatPoint.x, y - seatPoint.y) < 45;
  const shownPins = pins.filter(pin => inBox(pin.x, pin.y));
  /*
   * Namen, die rechts über die Karte hinausragen würden, stehen links vom Punkt.
   * Geschätzt für die schmalste Karte (rund 340 px, Handy): 8,5 px je Zeichen
   * plus Abstand und Innenrand, umgerechnet in Kartenkoordinaten.
   */
  const fits = (x: number, label: string) => x + ((label.length * 8.5 + 28) * bw) / 340 <= bx + bw;
  const leftOf = (x: number, label: string, side?: "left" | "right") =>
    side === "left" || (side !== "right" && !fits(x, label));
  const pinClass = mobilePins === "seat" ? "max-sm:hidden" : "";
  const scale = bw / fullW; // Punkte und Linien wachsen im Ausschnitt nicht mit

  const fillOf = (key: KantonKey) => {
    const full = lux ? "fill-brass" : "fill-signal";
    const muted = lux ? "fill-brass/30" : dark ? "fill-signal/35" : "fill-signal-light";
    if (spy) return `${full} ${spyMuted} ${spyFill[key]}`;
    return !active || active === key ? full : muted;
  };
  const codeOf = (key: KantonKey) => {
    if (lux) return "text-anthracite";
    if (spy) return `text-white ${spyCodeMuted} ${spyCode[key]}`;
    return !active || active === key || dark ? "text-white" : "text-ink";
  };
  const chip = dark ? "bg-ink/85 text-white" : lux ? "bg-white/90 text-anthracite" : "bg-white/90 text-ink";

  return (
    <Reveal as="figure" className={className}>
      <div className="relative">
        <svg
          viewBox={box.join(" ")}
          role="img"
          aria-label={`${texts.areaLabel}: ${names}`}
          className={`h-auto w-full ${focusShape ? "overflow-hidden" : "overflow-visible"}`}
        >
          <g strokeLinejoin="round">
            {others.map(shape => (
              <path
                key={shape.id}
                d={shape.d}
                fillRule="evenodd"
                className={dark ? "fill-ink-700 stroke-ink" : lux ? "fill-ivory-200 stroke-white" : "fill-stone-200 stroke-white"}
                strokeWidth={2 * scale}
              />
            ))}
            {served.map((shape, index) => {
              const key = keyByBfs.get(shape.id) as KantonKey;
              return (
                <g key={shape.id} className="map-canton" style={{ "--i": index } as React.CSSProperties}>
                  <path
                    d={shape.d}
                    fillRule="evenodd"
                    data-kanton={key}
                    className={`${fillOf(key)} ${dark ? "stroke-ink" : "stroke-white"}`}
                    style={{ transition: "fill 450ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                    strokeWidth={2.5 * scale}
                  />
                </g>
              );
            })}
          </g>
          {shownPins.map((pin, index) => (
            <g key={pin.label} className={`map-pin ${pinClass}`} style={{ ...origin(pin.x, pin.y), "--i": index + 1 } as React.CSSProperties}>
              <circle
                cx={pin.x}
                cy={pin.y}
                r={8 * scale}
                className={dark ? "fill-brass stroke-ink" : "fill-ink stroke-white"}
                strokeWidth={2.5 * scale}
              />
            </g>
          ))}
          <g className="map-pin" style={{ ...origin(seatPoint.x, seatPoint.y), "--i": 0 } as React.CSSProperties}>
            <circle
              cx={seatPoint.x}
              cy={seatPoint.y}
              r={22 * scale}
              className={`map-pulse ${dark ? "fill-white/40" : "fill-ink/30"}`}
              style={origin(seatPoint.x, seatPoint.y)}
            />
            <circle
              cx={seatPoint.x}
              cy={seatPoint.y}
              r={9 * scale}
              className={dark ? "fill-white stroke-ink" : "fill-ink stroke-white"}
              strokeWidth={3 * scale}
            />
          </g>
        </svg>

        {/* Beschriftungen als HTML: Kürzel, Orte und Sitz, nie kleiner als 13 px (Umbau 9) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {served.map((shape, index) => {
            const key = keyByBfs.get(shape.id) as KantonKey;
            if (!inBox(shape.label[0], shape.label[1])) return null;
            return (
              <span key={shape.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={at(shape.label[0], shape.label[1])}>
                <span
                  className={`map-canton block font-mono text-[0.8125rem] font-semibold tracking-[0.12em] transition-colors ${codeOf(key)}`}
                  style={{ "--i": index } as React.CSSProperties}
                >
                  {cantonInfo[kantonGerman[key]].code}
                </span>
              </span>
            );
          })}
          {shownPins.filter(pin => !nearSeat(pin.x, pin.y)).map((pin, index) => (
            <span
              key={pin.label}
              className={`absolute -translate-y-1/2 ${leftOf(pin.x, pin.label, pin.side) ? "-translate-x-full pr-2.5" : "pl-2.5"} ${pinClass}`}
              style={at(pin.x, pin.y)}
            >
              <span
                className={`map-canton block whitespace-nowrap rounded-[3px] px-1.5 py-0.5 text-[0.8125rem] font-semibold leading-tight ${chip}`}
                style={{ "--i": index + 1 } as React.CSSProperties}
              >
                {pin.label}
              </span>
            </span>
          ))}
          <span
            className={`absolute -translate-y-1/2 ${leftOf(seatPoint.x, company.address.city) ? "-translate-x-full pr-3.5" : "pl-3.5"}`}
            style={at(seatPoint.x, seatPoint.y)}
          >
            <span className={`block whitespace-nowrap rounded-[3px] px-1.5 py-0.5 text-[0.9375rem] font-bold leading-tight ${chip}`}>
              {company.address.city}
            </span>
          </span>
        </div>
      </div>
      <figcaption
        className={`mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-[0.8125rem] font-medium ${dark ? "text-white/90" : "text-ink-600"}`}
      >
        {/* Legende: jedes Zeichen bleibt bei seinem Namen, umbrochen wird nur zwischen den Einträgen */}
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {active && texts.activeLabel && (
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className={`inline-block h-2.5 w-2.5 ${lux ? "bg-brass" : "bg-signal"}`} aria-hidden="true" />
              {texts.activeLabel}
            </span>
          )}
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <span
              className={`inline-block h-2.5 w-2.5 ${active ? (lux ? "bg-brass/30" : "bg-signal-light") : lux ? "bg-brass" : "bg-signal"}`}
              aria-hidden="true"
            />
            {texts.areaLabel}
          </span>
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${dark ? "bg-white" : "bg-ink"}`} aria-hidden="true" />
            {texts.seat}
          </span>
          {mobilePins === "seat" && pins.length > 0 && (
            <span className="sm:hidden">{pins.map(pin => pin.label).join(", ")}</span>
          )}
        </span>
        <span>{texts.source}</span>
      </figcaption>
    </Reveal>
  );
}
