/**
 * Gemeinsame Klassen der hellen Premium-Welt (Elfenbein, Weiss, Anthrazit,
 * Champagner). Champagner als Text nur in brass-dark (5:1 auf Elfenbein).
 */

/** Links im Fliesstext auf Hell: Anthrazit mit Champagner-Unterstrich, nie Signalrot */
export const premiumLightLink =
  "font-semibold text-anthracite underline decoration-brass-dark/60 decoration-[0.08em] underline-offset-[0.22em] transition-colors hover:decoration-anthracite";

/** Abschnittstitel in der Serifenschrift, kräftig statt dünn */
export const premiumHeading =
  "font-premium text-[clamp(2.1rem,1.4rem+2.4vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.005em] text-anthracite";

/** Kleinere Stufe für Titel im Inhalt neben einer Seitenspalte */
export const premiumHeadingSm =
  "font-premium text-[clamp(2rem,1.4rem+1.8vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.005em] text-anthracite";
