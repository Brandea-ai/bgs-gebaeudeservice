import type { ReactNode } from "react";
import Hero from "./Hero";
import { heroImage } from "../../../shared/hero-images";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Kopf der Übersichts- und Inhaltsseiten (E80): seit dem Rebranding immer mit
 * Hintergrundbild der Seite (shared/hero-images.ts) unter der schwebenden
 * Kopfzeile. Rechts optional eine Übersicht (aside), etwa als Glas-Karte.
 * Premium-Seiten erhalten Anthrazit, Champagner und die Serifenschrift.
 */
export default function PageHero({
  path,
  lang,
  eyebrow,
  title,
  lead,
  aside,
  children,
  below,
  size = "page",
}: {
  path: PagePath;
  lang: Locale;
  /** Kleine Kennzeichnung über dem Titel, nur wenn sie etwas sagt (Premium-Linie) */
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  /** Früher hell oder dunkel; seit E80 immer dunkel über dem Bild */
  tone?: "light" | "dark";
  aside?: ReactNode;
  /** Früher eine Bildfläche rechts; seit E80 trägt das Hintergrundbild */
  image?: { src?: string; alt?: string; label?: string };
  /** Aktionen unter der Einleitung: Button und Telefon */
  children?: ReactNode;
  /** Zeile unter dem Raster, etwa Eckdaten oder Belege */
  below?: ReactNode;
  size?: "page" | "compact";
}) {
  return (
    <Hero
      image={heroImage[path]}
      path={path}
      lang={lang}
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      aside={aside}
      below={below}
      size={size}
      variant={path.startsWith("/premium") ? "premium" : "standard"}
    >
      {children}
    </Hero>
  );
}
