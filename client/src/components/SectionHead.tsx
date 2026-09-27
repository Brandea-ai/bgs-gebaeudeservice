import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Kopf eines Abschnitts (F1, F7): Titel und Einleitung in festen Schriftstufen,
 * eine kleine Kennzeichnung nur, wenn sie etwas sagt (etwa «Häufige Fragen»).
 * tone passt die Farben an dunkle Flächen an.
 */
export default function SectionHead({
  id,
  eyebrow,
  title,
  intro,
  tone = "light",
  as: Tag = "h2",
  align = "left",
  className = "",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] ${dark ? "bg-white/10 text-brass" : "bg-signal-light/60 text-signal-dark"}`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`${Tag === "h1" ? "t-h1" : "t-h2"} ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={`t-lead mt-5 max-w-[46ch] ${align === "center" ? "mx-auto" : ""} ${dark ? "text-white/85" : "text-ink-600"}`}
        >
          {intro}
        </p>
      )}
      {children}
    </Reveal>
  );
}
