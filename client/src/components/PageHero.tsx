import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Kopf der Übersichts- und Inhaltsseiten (F5, F7): Brotkrumen, Titel und
 * Einleitung links, rechts eine Bildfläche oder eine Übersicht. Keine
 * Kennzeile, die Brotkrumen sagen schon, wo man ist.
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
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section
      className={
        dark
          ? "relative overflow-hidden bg-ink text-white"
          : "relative overflow-hidden border-b border-line bg-stone"
      }
    >
      {dark && (
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
      )}
      <div className="container relative grid gap-10 pt-8 pb-14 md:pt-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20">
        <div className="min-w-0 lg:col-span-6">
          {path !== "/" && (
            <Breadcrumbs
              path={path}
              tone={dark ? "dark" : "light"}
              lang={lang}
            />
          )}
          <Reveal>
            {eyebrow && (
              <p
                className={`mb-5 inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${dark ? "bg-white/10 text-brass" : "bg-signal-light/60 text-signal-dark"}`}
              >
                {eyebrow}
              </p>
            )}
            <h1
              className={`t-h1 max-w-[20ch] ${dark ? "text-white" : "text-ink"}`}
            >
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={120}>
              <p
                className={`t-lead mt-7 max-w-[52ch] ${dark ? "text-white/90" : "text-ink-600"}`}
              >
                {lead}
              </p>
            </Reveal>
          )}
          {children && <Reveal delay={220}>{children}</Reveal>}
        </div>
        {(aside || image) && (
          <Reveal
            variant="scale"
            delay={150}
            className="min-w-0 lg:col-span-6 lg:col-start-7"
          >
            {aside ?? (
              <ImageSlot
                src={image?.src}
                alt={image?.alt}
                label={image?.label}
                lang={lang}
                tone={dark ? "dark" : "light"}
                className="aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[16/10]"
              />
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
