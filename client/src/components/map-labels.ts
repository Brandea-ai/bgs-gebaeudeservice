/**
 * Platzierung der Ortsnamen auf der Karte des Einzugsgebiets (CantonMap,
 * Prüfung Welle 2, K-KARTE-UEBERDECKUNG). Reine Geometrie in Pixeln, ohne DOM:
 * Der Server rechnet damit bei der schmalsten Kartenbreite (MapLabels.tsx ›
 * SSR_WIDTH), der Browser danach mit der echten Breite und den gemessenen
 * Grössen. So gilt die Regel gegen Überdeckung für jeden Aufrufer der Karte,
 * nicht nur für die Seiten, die ihre Orte selbst auswählen.
 *
 * Reihenfolge je Ort: die gewünschte Seite, die andere Seite, darunter,
 * darüber. Passt keine, steht nur der Punkt (wie bei Orten direkt am Sitz).
 */

export type Side = "right" | "left" | "below" | "above" | "none";

/** Rechteck [links, oben, rechts, unten] in Pixeln */
export type Rect = readonly [number, number, number, number];

/** Abstand zwischen Punkt und Namen (entspricht pl-2.5, pr-2.5, pt-2, pb-2) */
export const GAP_X = 10;
export const GAP_Y = 8;
/** Halbe Kantenlänge eines Ortspunkts samt Rand, grosszügig */
export const DOT = 5;
/** Halbe Kantenlänge des Sitzpunkts samt Rand */
export const SEAT_DOT = 7;

/** Geschätzte Grössen für den Server (13 px halbfett mit Innenrand, Kürzel 13 px Mono, Sitz 15 px fett) */
export const estimate = {
  pin: (label: string) => ({ w: label.length * 7.6 + 12, h: 20.5 }),
  code: (text: string) => ({ w: text.length * 8.6 + 3, h: 13 }),
  seat: (label: string) => ({ w: label.length * 9.2 + 12, h: 23 }),
};

export function overlaps(a: Rect, b: Rect) {
  return a[0] < b[2] - 0.5 && b[0] < a[2] - 0.5 && a[1] < b[3] - 0.5 && b[1] < a[3] - 0.5;
}

export const around = (x: number, y: number, w: number, h: number): Rect => [x - w / 2, y - h / 2, x + w / 2, y + h / 2];

/** Rechteck des Namens neben dem Punkt (x, y) */
export function labelRect(side: Exclude<Side, "none">, x: number, y: number, w: number, h: number): Rect {
  switch (side) {
    case "right":
      return [x + GAP_X, y - h / 2, x + GAP_X + w, y + h / 2];
    case "left":
      return [x - GAP_X - w, y - h / 2, x - GAP_X, y + h / 2];
    case "below":
      return [x - w / 2, y + GAP_Y, x + w / 2, y + GAP_Y + h];
    case "above":
      return [x - w / 2, y - GAP_Y - h, x + w / 2, y - GAP_Y];
  }
}

/** Reihenfolge der Versuche: gewünschte Seite zuerst */
export function preference(side?: "left" | "right"): Exclude<Side, "none">[] {
  return side === "left" ? ["left", "right", "below", "above"] : ["right", "left", "below", "above"];
}

export type PlacePin = { x: number; y: number; w: number; h: number; prefer: Exclude<Side, "none">[]; hidden?: boolean };

/**
 * Setzt die Namen der Reihe nach: frei von Hindernissen (Kürzel, Sitz),
 * fremden Punkten und schon gesetzten Namen, innerhalb der Karte.
 */
export function placeLabels({
  width,
  height,
  obstacles,
  pins,
}: {
  width: number;
  height: number;
  obstacles: Rect[];
  pins: PlacePin[];
}): Side[] {
  const dots = pins.map(pin => around(pin.x, pin.y, 2 * DOT, 2 * DOT));
  const taken: Rect[] = [...obstacles];
  return pins.map((pin, index) => {
    if (pin.hidden) return "none";
    const others = dots.filter((_, j) => j !== index && !pins[j].hidden);
    for (const side of pin.prefer) {
      const rect = labelRect(side, pin.x, pin.y, pin.w, pin.h);
      if (rect[0] < 0 || rect[1] < 0 || rect[2] > width || rect[3] > height) continue;
      if (taken.some(o => overlaps(rect, o)) || others.some(o => overlaps(rect, o))) continue;
      taken.push(rect);
      return side;
    }
    return "none";
  });
}

/**
 * Kürzel, auf dem ein Punkt liegt (Stadt Zug auf «ZG»): um so viele Pixel
 * nach rechts schieben, dass zwischen Punkt und Kürzel Luft bleibt. Gerechnet
 * bei der schmalsten Breite, bei breiteren Karten wird der Abstand nur grösser.
 */
export function codeShift(code: { x: number; y: number; w: number; h: number }, dots: { x: number; y: number; r: number }[]) {
  const box = around(code.x, code.y, code.w + 6, code.h + 6);
  let shift = 0;
  for (const dot of dots) {
    if (overlaps(box, around(dot.x, dot.y, 2 * dot.r, 2 * dot.r))) {
      shift = Math.max(shift, dot.x + dot.r + 4 + code.w / 2 - code.x);
    }
  }
  return Math.max(0, Math.ceil(shift));
}
