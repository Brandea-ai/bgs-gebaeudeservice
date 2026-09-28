"use client";

import { useEffect, useRef, useState } from "react";
import { around, placeLabels, SEAT_DOT, DOT, type Rect, type Side } from "./map-labels";

/** Breite, für die der Server die Namen setzt: die schmalste Karte (Handy, rund 340 px) */
export const SSR_WIDTH = 340;

export type MapCode = { id: number; x: number; y: number; shift: number; text: string; className: string; i: number };
export type MapPinLabel = {
  key: string;
  x: number;
  y: number;
  label: string;
  prefer: Exclude<Side, "none">[];
  side: Side;
  className: string;
  chipClass: string;
  i: number;
};
export type MapSeat = { x: number; y: number; left: boolean; label: string; chipClass: string };

const sideClass: Record<Side, string> = {
  right: "-translate-y-1/2 pl-2.5",
  left: "-translate-x-full -translate-y-1/2 pr-2.5",
  below: "-translate-x-1/2 pt-2",
  above: "-translate-x-1/2 -translate-y-full pb-2",
  // unsichtbar statt ausgeblendet: die Grösse bleibt messbar, falls die Karte breiter wird
  none: "-translate-y-1/2 pl-2.5 invisible",
};

/**
 * Beschriftungen der Karte als HTML über dem SVG (CantonMap): Kantonskürzel,
 * Ortsnamen und Sitz, nie kleiner als 13 px. Der Server setzt die Namen für
 * die schmalste Karte (map-labels.ts); im Browser misst diese Ebene die echte
 * Breite und die Grösse jedes Namens und setzt neu, bei jeder Grössenänderung.
 * So verdeckt kein Name ein Kürzel, den Sitz oder einen anderen Namen, auf
 * der Startseite und der Premium-Übersicht ebenso wie auf /einzugsgebiet.
 */
export default function MapLabels({
  view,
  codes,
  pins,
  seat,
  dots,
}: {
  /** Kartenausschnitt [x, y, Breite, Höhe] in Kartenkoordinaten */
  view: [number, number, number, number];
  codes: MapCode[];
  pins: MapPinLabel[];
  seat: MapSeat;
  /** Punkte ohne Namen (Orte direkt am Sitz), damit kein Name sie verdeckt */
  dots: { x: number; y: number }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [sides, setSides] = useState<Side[]>(() => pins.map(pin => pin.side));
  const [bx, by, bw, bh] = view;
  const at = (x: number, y: number) => ({ left: `${((x - bx) / bw) * 100}%`, top: `${((y - by) / bh) * 100}%` });

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const run = () => {
      const width = root.clientWidth;
      const height = root.clientHeight;
      if (!width || !height) return;
      const k = width / bw;
      const px = (x: number, y: number) => [(x - bx) * k, (y - by) * k] as const;
      const obstacles: Rect[] = [];
      root.querySelectorAll<HTMLElement>("[data-map-code]").forEach(el => {
        const inner = el.firstElementChild as HTMLElement | null;
        if (!inner) return;
        const [cx, cy] = px(Number(el.dataset.x), Number(el.dataset.y));
        obstacles.push(around(cx + Number(el.dataset.shift ?? 0), cy, inner.offsetWidth, inner.offsetHeight));
      });
      const seatChip = root.querySelector<HTMLElement>("[data-map-seat]");
      const [sx, sy] = px(seat.x, seat.y);
      obstacles.push(around(sx, sy, 2 * SEAT_DOT, 2 * SEAT_DOT));
      if (seatChip) {
        const w = seatChip.offsetWidth;
        const h = seatChip.offsetHeight;
        obstacles.push(seat.left ? [sx - 14 - w, sy - h / 2, sx - 14, sy + h / 2] : [sx + 14, sy - h / 2, sx + 14 + w, sy + h / 2]);
      }
      for (const dot of dots) {
        const [dx, dy] = px(dot.x, dot.y);
        obstacles.push(around(dx, dy, 2 * DOT, 2 * DOT));
      }
      const next = placeLabels({
        width,
        height,
        obstacles,
        pins: pins.map(pin => {
          const chip = root.querySelector<HTMLElement>(`[data-map-chip="${pin.key}"]`);
          const [x, y] = px(pin.x, pin.y);
          const w = chip?.offsetWidth ?? 0;
          // offsetWidth 0: auf dieser Breite ausgeblendet (mobilePins «seat»)
          return { x, y, w, h: chip?.offsetHeight ?? 0, prefer: pin.prefer, hidden: w === 0 };
        }),
      });
      setSides(prev => (prev.length === next.length && prev.every((side, i) => side === next[i]) ? prev : next));
    };
    run();
    const observer = new ResizeObserver(run);
    observer.observe(root);
    document.fonts?.ready.then(run).catch(() => undefined);
    return () => observer.disconnect();
  }, [bx, by, bw, pins, seat, dots]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {codes.map(code => (
        <span
          key={code.id}
          data-map-code=""
          data-x={code.x}
          data-y={code.y}
          data-shift={code.shift}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ ...at(code.x, code.y), marginLeft: code.shift ? `${code.shift}px` : undefined }}
        >
          <span className={code.className} style={{ "--i": code.i } as React.CSSProperties}>
            {code.text}
          </span>
        </span>
      ))}
      {pins.map((pin, index) => (
        <span key={pin.key} className={`absolute ${sideClass[sides[index] ?? "none"]} ${pin.className}`} style={at(pin.x, pin.y)}>
          <span data-map-chip={pin.key} className={pin.chipClass} style={{ "--i": pin.i } as React.CSSProperties}>
            {pin.label}
          </span>
        </span>
      ))}
      <span className={`absolute -translate-y-1/2 ${seat.left ? "-translate-x-full pr-3.5" : "pl-3.5"}`} style={at(seat.x, seat.y)}>
        <span data-map-seat="" className={seat.chipClass}>
          {seat.label}
        </span>
      </span>
    </div>
  );
}
