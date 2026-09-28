import type { ComponentType, ReactNode } from "react";
import type { IconWeight } from "@phosphor-icons/react";
import type { PagePath } from "../../../shared/seo";

/**
 * Eigene Premium-Symbole der Clavea-Linie (Recraft-Entwurf, auf dem 48er-Raster
 * nachgezeichnet, Quelle icons-premium/ im Projektordner, 28.09.2026). Linie in
 * currentColor, Duotone-Fläche mit Deckkraft 0,2, kein Hintergrund. Inline-SVG,
 * damit die Textfarbe greift (Champagner in der Premium-Welt). Dieselbe
 * Aufrufform wie Phosphor (className, weight wird ignoriert), damit beide in
 * einer Symboltabelle stehen können. Immer dekorativ, der Name steht im Text.
 */
export type PremiumGlyphProps = {
  className?: string;
  /** Nur für die gleiche Aufrufform wie Phosphor, ohne Wirkung */
  weight?: IconWeight;
  "aria-hidden"?: boolean | "true" | "false";
};
export type PremiumGlyph = (props: PremiumGlyphProps) => ReactNode;
/** Phosphor-Symbol oder eigenes Premium-Symbol, gleiche Aufrufform */
export type AnyGlyph = ComponentType<PremiumGlyphProps>;

function Svg({ className, children }: PremiumGlyphProps & { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** Clavea-Bogen mit Raute (premium-ueberblick.svg) */
export const PremiumOverviewIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M13 41V21a11 11 0 0 1 22 0v20h-4V21a7 7 0 0 0-14 0v20Z" />
    <path d="M13 41V21a11 11 0 0 1 22 0v20" />
    <path d="M17 41V21a7 7 0 0 1 14 0v20" />
    <path d="M24 23.5l3 4.5-3 4.5-3-4.5Z" />
  </Svg>
);

/** Flachdach-Villa mit Glasfront (villa.svg) */
export const VillaIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M11 29h14v12H11Z" />
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M21 15h18v4H21Z" />
    <path d="M3 41h42" />
    <path d="M15 11h30v12H15Z" />
    <path d="M7 23v18" />
    <path d="M29 23v18" />
    <path d="M3 23h12" />
    <path d="M11 41V29h14v12" />
    <path d="M18 29v12" />
    <path d="M21 15h18v4H21Z" />
    <path d="M35 29v12" />
  </Svg>
);

/** Businessjet mit T-Leitwerk (privatjet.svg) */
export const PrivateJetIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M8 21H35C39.5 21 42.5 22.3 44 24C42.5 25.7 39.5 27 35 27H17C12.5 27 9.5 25.5 8 23.5Z" />
    <path d="M8 21H35C39.5 21 42.5 22.3 44 24C42.5 25.7 39.5 27 35 27H17C12.5 27 9.5 25.5 8 23.5Z" />
    <path d="M14 21L9.5 11" />
    <path d="M8 21L6 11" />
    <path d="M3 11h9" />
    <path d="M17 15h7a2 2 0 0 1 0 4h-7a2 2 0 0 1 0-4Z" />
    <path d="M20.5 19v2" />
    <path d="M30 27l-7 8h-3l3-8" />
    <path d="M27 24h0" />
    <path d="M31 24h0" />
    <path d="M35 24h0" />
  </Svg>
);

/** Motoryacht mit Wellenlinie (yacht.svg) */
export const YachtIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M4 31H44L39.5 36.5H8Z" />
    <path d="M4 31H44L39.5 36.5H8Z" />
    <path d="M9 31v-6h23l5 6" />
    <path d="M14 25v-4h12l3 4" />
    <path d="M13 28h17" />
    <path d="M20 21v-4" />
    <path d="M6 42c3 0 4-1.5 7-1.5s4 1.5 7 1.5 4-1.5 7-1.5 4 1.5 7 1.5 4-1.5 7-1.5" />
  </Svg>
);

/** geschlossene Doppeltür im Rundbogen (diskretion.svg) */
export const DiscretionIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M16 41V21a8 8 0 0 1 16 0v20Z" />
    <path d="M12 41V21a12 12 0 0 1 24 0v20" />
    <path d="M16 41V21a8 8 0 0 1 16 0v20" />
    <path d="M24 13v28" />
    <path d="M7 41h34" />
    <path d="M21.5 29h0" />
    <path d="M26.5 29h0" />
  </Svg>
);

/** Person mit Sprechblase (persoenlich.svg) */
export const PersonalIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M7 41v-4a9 9 0 0 1 9-9h8a9 9 0 0 1 9 9v4Z" />
    <path d="M20 16m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0" />
    <path d="M7 41v-4a9 9 0 0 1 9-9h8a9 9 0 0 1 9 9v4" />
    <path d="M33 7h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5l-3 3v-3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
  </Svg>
);

/** Natursteinplatte mit Glanzpunkt (materialien.svg) */
export const MaterialsIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M5 35L17 25H43L31 35Z" />
    <path d="M5 35L17 25H43L31 35Z" />
    <path d="M5 35v4h26l12-10v-4" />
    <path d="M31 35v4" />
    <path d="M12 35c3-3 7-3.5 10-5.5s4-3.5 8-4.5" />
    <path d="M24 35c2-2 5-2.5 7-4" />
    <path d="M37 5c.5 4 1.5 5 5.5 5.5-4 .5-5 1.5-5.5 5.5-.5-4-1.5-5-5.5-5.5 4-.5 5-1.5 5.5-5.5Z" />
  </Svg>
);

/** Kalenderblatt mit Uhr (termin.svg) */
export const AppointmentIcon: PremiumGlyph = props => (
  <Svg {...props}>
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M7 19V12a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v7Z" />
    <path fill="currentColor" fillOpacity="0.2" stroke="none" d="M36 36m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0" />
    <path d="M27 40H9a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v14" />
    <path d="M7 19h30" />
    <path d="M15 6v7" />
    <path d="M29 6v7" />
    <path d="M14 26h0" />
    <path d="M21 26h0" />
    <path d="M28 26h0" />
    <path d="M14 33h0" />
    <path d="M21 33h0" />
    <path d="M14 26m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0" />
    <path d="M36 36m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0" />
    <path d="M36 32.5V36h3" />
  </Svg>
);

/** Symbol je Premium-Seite (Mega-Menü, Karten, Übersicht) */
export const premiumPageIcons: Partial<Record<PagePath, PremiumGlyph>> = {
  "/premium": PremiumOverviewIcon,
  "/premium/luxusimmobilien": VillaIcon,
  "/premium/privatjet": PrivateJetIcon,
  "/premium/yacht": YachtIcon,
};
