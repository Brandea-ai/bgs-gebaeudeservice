import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ImageSlot from "./ImageSlot";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Kopf der Übersichts- und Inhaltsseiten (F5, F14): Brotkrumen, Titel und
 * Einleitung links, rechts eine Bildfläche oder eine Übersicht. Statisch, ohne
 * Einblendung, damit der erste Bildschirm sofort lesbar ist und der Titel das
 * grösste Element beim Laden bleibt (LCP). Kennzeile als Mono-Zeile ohne Fläche.
 */
export default function PageHero({
  path,
  lang,
  eyebrow,
  title,
  lead,
  tone = "light",
  aside,
  image,
  children,
  below,
}: {
  path: PagePath;
  lang: Locale;
  /** Kleine Kennzeichnung über dem Titel, nur wenn sie etwas sagt (Premium-Linie) */
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  tone?: "light" | "dark";
  aside?: ReactNode;
  /** Bildfläche rechts, mit Kennzeichnung unten links */
  image?: { src?: string; alt?: string; label?: string };
  /** Aktionen unter der Einleitung: Button und Telefon */
  children?: ReactNode;
  /** Zeile unter dem Raster, etwa Eckdaten oder Belege */
  below?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section
      className={
        dark
          ? "on-dark relative overflow-hidden bg-ink text-white"
          : "relative overflow-hidden border-b border-line bg-stone"
      }
    >
      {dark && (
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
      )}
      <div className="container relative grid gap-10 pt-6 pb-12 md:pt-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-16">
        <div className="min-w-0 lg:col-span-7 xl:col-span-6">
          {path !== "/" && (
            <Breadcrumbs
              path={path}
              tone={dark ? "dark" : "light"}
              lang={lang}
            />
          )}
          {eyebrow && (
            <p
              className={`t-eyebrow mb-4 ${dark ? "text-brass" : "text-signal"}`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={`t-h1 max-w-[22ch] ${dark ? "text-white" : "text-ink"}`}
          >
            {title}
          </h1>
          {lead && (
            <p
              className={`t-lead mt-6 max-w-[52ch] ${dark ? "text-white/90" : "text-ink-600"}`}
            >
              {lead}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {(aside || image) && (
          <div className="min-w-0 lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7">
            {aside ?? (
              <ImageSlot
                src={image?.src}
                alt={image?.alt}
                label={image?.label}
                lang={lang}
                tone={dark ? "dark" : "light"}
                parallax="drift"
                className="aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[16/10]"
              />
            )}
          </div>
        )}
      </div>
      {below}
    </section>
  );
}
