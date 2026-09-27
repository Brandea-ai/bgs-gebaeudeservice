import type { ReactNode } from "react";

/**
 * Kopf eines Abschnitts (F1, F14): Titel und Einleitung in festen Schriftstufen,
 * eine Kennzeile nur, wenn sie etwas sagt. Statisch, ohne Einblendung:
 * Überschriften werden nicht animiert. tone passt die Farben an dunkle Flächen an.
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
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className={`t-eyebrow mb-4 ${dark ? "text-brass" : "text-signal"}`}>
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
    </div>
  );
}
