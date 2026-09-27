import { ImageIcon } from "lucide-react";
import { imagesArePlaceholders } from "../../../shared/features";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Bildfläche (E19, E59, F7): Bis echte Fotos freigegeben sind, eine ruhige
 * Fläche in derselben Grösse, damit das Layout stehen bleibt. Mit echtem Bild
 * ein Foto mit leichter Vergrösserung beim Überfahren, wenn hover gesetzt ist.
 * alt beschreibt das echte Bild und gilt erst, wenn es erscheint.
 */
export default function ImageSlot({
  src,
  alt = "",
  className = "",
  lang = "de",
  tone = "light",
  hover = false,
  label,
}: {
  src?: string;
  alt?: string;
  className?: string;
  lang?: Locale;
  tone?: "light" | "dark";
  hover?: boolean;
  /** Kurze Kennzeichnung unten links, etwa der Name der Leistung */
  label?: string;
}) {
  const { misc } = getDict(lang);
  const dark = tone === "dark";
  // Ohne freigegebenes Bild (src) bleibt die Fläche ein Platzhalter
  if (imagesArePlaceholders || !src) {
    return (
      <div
        role="img"
        aria-label={misc.imagePlaceholderLabel}
        className={`relative overflow-hidden ${dark ? "bg-ink-700" : "bg-stone-200"} ${className}`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: dark
              ? "radial-gradient(120% 90% at 20% 10%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(80% 60% at 90% 100%, rgba(200,169,110,0.16), transparent 60%)"
              : "radial-gradient(120% 90% at 20% 10%, rgba(255,255,255,0.9), transparent 60%), radial-gradient(80% 60% at 90% 100%, rgba(184,18,27,0.10), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageIcon
            className={`h-8 w-8 ${dark ? "text-white/25" : "text-ink/15"}`}
            aria-hidden="true"
          />
        </div>
        <span
          className={`absolute bottom-4 left-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] ${dark ? "text-white/60" : "text-ink/55"}`}
        >
          {label ?? misc.imagePlaceholder}
        </span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${hover ? "transition-transform duration-700 ease-out group-hover:scale-[1.04]" : ""}`}
      />
    </div>
  );
}
