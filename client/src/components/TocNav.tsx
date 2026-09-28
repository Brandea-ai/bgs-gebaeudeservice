"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";

/**
 * Inhaltsverzeichnis einer Seite (F4, F14): klebt in der linken Spalte und
 * markiert den Abschnitt, der gerade gelesen wird (useScrollSpy). Ohne
 * JavaScript bleiben es normale Sprunglinks.
 */
export default function TocNav({
  label,
  items,
  tone = "light",
}: {
  label: string;
  items: { id: string; title: string }[];
  tone?: "light" | "dark" | "premium";
}) {
  const active = useScrollSpy(items.map(item => item.id));
  const dark = tone === "dark";
  const lux = tone === "premium";
  return (
    <nav aria-label={label}>
      <p className={`t-eyebrow mb-4 ${dark ? "text-white/90" : "text-mute"}`}>
        {label}
      </p>
      <ol className={`border-l ${dark ? "border-white/15" : lux ? "border-brass/35" : "border-line"}`}>
        {items.map(item => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px block border-l-2 py-2 pl-4 text-[0.9375rem] font-medium leading-snug transition-colors ${
                  isActive
                    ? dark
                      ? "border-brass text-white"
                      : lux
                        ? "border-brass-dark font-semibold text-anthracite"
                        : "border-signal text-ink"
                    : `border-transparent ${dark ? "text-white/90 hover:text-white" : "text-mute hover:text-ink"}`
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
