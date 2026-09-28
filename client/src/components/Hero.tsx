import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { images, type ImageKey } from "../../../shared/images";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Kopfbereich jeder Seite (Rebranding E80): volles Hintergrundbild unter der
 * schwebenden Kopfzeile, links dunkel verlaufend für weisse Schrift. Das Bild ist
 * Stimmung und darum für Screenreader ausgeblendet; die Aussage trägt der Titel.
 * Mit priority geladen, weil es das grösste Element beim ersten Bild ist (LCP).
 * Statisch, ohne Einblendung. Premium in Anthrazit mit Champagner und Serifenschrift.
 */
export default function Hero({
  image,
  path,
  lang,
  eyebrow,
  title,
  lead,
  children,
  aside,
  below,
  variant = "standard",
  size = "page",
  titleId = "seiten-titel",
}: {
  image: ImageKey;
  /** Ohne path keine Brotkrumen (Startseite) */
  path?: PagePath;
  lang: Locale;
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  /** Aktionen unter der Einleitung */
  children?: ReactNode;
  /** Rechte Spalte ab lg, etwa eine Glas-Karte mit Eckdaten */
  aside?: ReactNode;
  /** Zeile am unteren Rand, etwa Eckdaten über die ganze Breite */
  below?: ReactNode;
  variant?: "standard" | "premium";
  size?: "home" | "page" | "compact";
  titleId?: string;
}) {
  const img = images[image];
  const premium = variant === "premium";
  const height =
    size === "home"
      ? "min-h-[min(100svh,66rem)]"
      : size === "compact"
        ? "min-h-[min(60svh,34rem)]"
        : "min-h-[min(82svh,48rem)]";
  return (
    <section
      aria-labelledby={titleId}
      className={`on-dark relative isolate overflow-hidden text-white ${premium ? "bg-anthracite" : "bg-ink"}`}
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="hero-media absolute inset-x-0 top-0 h-[112%]">
          <Image
            src={img.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_50%]"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            premium
              ? "from-anthracite via-anthracite/80 to-anthracite/10"
              : "from-ink/95 via-ink/70 to-ink/10"
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 to-transparent" />
        {premium && (
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_15%,rgba(200,169,110,0.18),transparent_60%)]" />
        )}
      </div>

      <div
        className={`container hero-top relative grid content-end gap-10 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20 ${height}`}
      >
        <div className="min-w-0 lg:col-span-7 xl:col-span-7">
          {path && path !== "/" && (
            <Breadcrumbs path={path} tone="dark" lang={lang} />
          )}
          {eyebrow && (
            <p className="t-eyebrow mb-5 text-brass">{eyebrow}</p>
          )}
          <h1
            id={titleId}
            className={
              premium
                ? "max-w-[20ch] font-premium text-[clamp(2.4rem,1.2rem+4vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.01em] text-white"
                : `${size === "home" ? "t-display max-w-[18ch]" : "t-h1 max-w-[22ch]"} text-white`
            }
          >
            {title}
          </h1>
          {premium && <div className="premium-rule mt-8 max-w-xs" />}
          {lead && (
            <div className="t-lead mt-7 max-w-[50ch] text-white/90">{lead}</div>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
        {aside && (
          <div className="min-w-0 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            {aside}
          </div>
        )}
      </div>
      {below}
    </section>
  );
}
