import Reveal from "./Reveal";
import {
  cantonShapes,
  mapViewBox,
  seatPoint,
} from "../../../shared/canton-map";
import { cantonInfo, cantonName } from "../../../shared/cantons";
import { company } from "../../../shared/company";
import type { Locale } from "../../../shared/i18n";

/**
 * Karte des Einzugsgebiets (F3, F10, F14, E30): Zentralschweiz und Aargau aus
 * den Kantonsgrenzen von swisstopo, die fünf Kantone rot, der Sitz als Punkt.
 * Reines SVG im HTML, ohne Kartendienst und ohne Daten an Dritte. Server-
 * Komponente; Reveal setzt «in», dann erscheinen die Kantone nacheinander und
 * der Sitz pulsiert dreimal (globals.css). Ohne JavaScript alles sichtbar.
 * Beschriftungen über CSS-Klassen, auf dem Handy grösser.
 */
export default function CantonMap({
  lang = "de",
  tone = "light",
  className = "",
  pins = [],
  texts,
  mobilePins = "all",
}: {
  lang?: Locale;
  /** premium: helle Premium-Welt, Kantone in Champagner statt Signalrot */
  tone?: "light" | "dark" | "premium";
  className?: string;
  /** Weitere Orte als Pins, Kartenkoordinaten wie seatPoint */
  pins?: { x: number; y: number; label: string }[];
  /** Texte aus dem Wörterbuch */
  texts: { areaLabel: string; source: string; seat: string };
  /** Auf dem Handy nur den Sitz beschriften, Orte in der Bildunterschrift nennen */
  mobilePins?: "all" | "seat";
}) {
  const served = new Map(
    company.cantons.map(name => [cantonInfo[name]?.bfs, name])
  );
  const dark = tone === "dark";
  const lux = tone === "premium";
  const names = company.cantons.map(name => cantonName(name, lang)).join(", ");
  const active = cantonShapes.filter(shape => served.has(shape.id));
  const inactive = cantonShapes.filter(shape => !served.has(shape.id));
  const [, , vw, vh] = mapViewBox.split(" ").map(Number);
  const origin = (x: number, y: number) =>
    ({
      "--ox": `${(x / vw) * 100}%`,
      "--oy": `${(y / vh) * 100}%`,
    }) as React.CSSProperties;
  const pinClass = mobilePins === "seat" ? "max-sm:hidden" : "";

  return (
    <Reveal as="figure" className={className}>
      <svg
        viewBox={mapViewBox}
        role="img"
        aria-label={`${texts.areaLabel}: ${names}`}
        className="h-auto w-full overflow-visible"
      >
        <g strokeLinejoin="round">
          {inactive.map(shape => (
            <path
              key={shape.id}
              d={shape.d}
              fillRule="evenodd"
              className={
                dark ? "fill-ink-700 stroke-ink" : lux ? "fill-ivory-200 stroke-white" : "fill-stone-200 stroke-white"
              }
              strokeWidth={2}
            />
          ))}
          {active.map((shape, index) => (
            <path
              key={shape.id}
              d={shape.d}
              fillRule="evenodd"
              className={`map-canton ${dark ? "fill-signal stroke-ink" : lux ? "fill-brass stroke-white" : "fill-signal stroke-white"}`}
              style={{ "--i": index } as React.CSSProperties}
              strokeWidth={2.5}
            />
          ))}
        </g>
        <g className="font-mono" letterSpacing="1.5">
          {active.map((shape, index) => (
            <text
              key={shape.id}
              x={shape.label[0]}
              y={shape.label[1]}
              textAnchor="middle"
              className={`map-canton map-code ${lux ? "fill-anthracite" : "fill-white"}`}
              style={{ "--i": index } as React.CSSProperties}
              fontWeight="600"
            >
              {cantonInfo[served.get(shape.id) as string].code}
            </text>
          ))}
        </g>
        {pins.map((pin, index) => (
          <g
            key={pin.label}
            className={`map-pin ${pinClass}`}
            style={
              {
                ...origin(pin.x, pin.y),
                "--i": index + 1,
              } as React.CSSProperties
            }
          >
            <circle
              cx={pin.x}
              cy={pin.y}
              r="7"
              className={
                dark ? "fill-brass stroke-ink" : "fill-ink stroke-white"
              }
              strokeWidth="3"
            />
            <text
              x={pin.x + 13}
              y={pin.y + 5}
              className={`map-label ${dark ? "fill-white stroke-ink" : "fill-ink stroke-white"}`}
              fontWeight="600"
              strokeWidth="4"
              paintOrder="stroke"
              strokeLinejoin="round"
            >
              {pin.label}
            </text>
          </g>
        ))}
        <g
          className="map-pin"
          style={
            {
              ...origin(seatPoint.x, seatPoint.y),
              "--i": 0,
            } as React.CSSProperties
          }
        >
          <circle
            cx={seatPoint.x}
            cy={seatPoint.y}
            r="22"
            className={`map-pulse ${dark ? "fill-white/40" : "fill-ink/30"}`}
            style={origin(seatPoint.x, seatPoint.y)}
          />
          <circle
            cx={seatPoint.x}
            cy={seatPoint.y}
            r="9"
            className={dark ? "fill-white stroke-ink" : "fill-ink stroke-white"}
            strokeWidth="3"
          />
          <text
            x={seatPoint.x + 30}
            y={seatPoint.y + 7}
            className={`map-seat ${dark ? "fill-white stroke-ink" : "fill-ink stroke-white"}`}
            fontWeight="700"
            strokeWidth="6"
            paintOrder="stroke"
            strokeLinejoin="round"
          >
            {company.address.city}
          </text>
        </g>
      </svg>
      <figcaption
        className={`mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-xs font-medium ${dark ? "text-white/90" : "text-ink-600"}`}
      >
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-block h-2.5 w-2.5 ${lux ? "bg-brass" : "bg-signal"}`}
            aria-hidden="true"
          />
          {texts.areaLabel}
          <span className="mx-1" aria-hidden="true">
            ·
          </span>
          <span
            className={`inline-block h-2.5 w-2.5 rounded-full ${dark ? "bg-white" : "bg-ink"}`}
            aria-hidden="true"
          />
          {texts.seat}
          {mobilePins === "seat" && pins.length > 0 && (
            <span className="sm:hidden">
              <span className="mx-1" aria-hidden="true">
                ·
              </span>
              {pins.map(pin => pin.label).join(", ")}
            </span>
          )}
        </span>
        <span>{texts.source}</span>
      </figcaption>
    </Reveal>
  );
}
