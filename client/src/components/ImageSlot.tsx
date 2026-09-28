import Image from "next/image";
import { Image as ImageGlyph } from "@phosphor-icons/react/dist/ssr";
import { images, type ImageKey } from "../../../shared/images";
import { imagesArePlaceholders } from "../../../shared/features";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Bildfläche (E19, E59, F7, F14): Bis echte Fotos freigegeben sind, eine ruhige
 * Fläche in derselben Grösse, damit das Layout stehen bleibt. Mit echtem Bild
 * ein Foto. decorative blendet die Fläche für Screenreader aus (in Karten, deren
 * Text den Namen schon trägt). parallax setzt nur eine Klasse; die Bewegung
 * steht in globals.css und läuft nur mit Unterstützung und ohne reduced motion.
 */
export default function ImageSlot({
  image,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  src,
  alt = "",
  className = "",
  lang = "de",
  tone = "light",
  hover = false,
  label,
  decorative = false,
  parallax,
}: {
  /** Bild aus dem Register (E80); geht vor src */
  image?: ImageKey;
  sizes?: string;
  src?: string;
  alt?: string;
  className?: string;
  lang?: Locale;
  tone?: "light" | "dark";
  /** Zoom beim Überfahren, nur innerhalb eines Links sinnvoll */
  hover?: boolean;
  /** Kurze Kennzeichnung unten links, etwa der Name der Leistung */
  label?: string;
  /** Für Screenreader ausblenden, wenn der Text daneben alles sagt */
  decorative?: boolean;
  parallax?: "drift" | "depth-slow" | "depth-fast";
}) {
  const { misc, bilder } = getDict(lang);
  const dark = tone === "dark";
  const px =
    parallax === "drift"
      ? "hero-media"
      : parallax === "depth-slow"
        ? "px-depth-slow"
        : parallax === "depth-fast"
          ? "px-depth-fast"
          : "";
  // Bild aus dem Register, optimiert über next/image (AVIF/WebP, passende Breite)
  if (image && !imagesArePlaceholders) {
    const img = images[image];
    return (
      <div
        className={`relative overflow-hidden ${hover ? "img-zoom" : ""} ${className}`}
        aria-hidden={decorative ? "true" : undefined}
      >
        <Image
          src={img.src}
          alt={decorative ? "" : bilder[image]}
          fill
          sizes={sizes}
          className={`object-cover ${image.startsWith("hero-") ? "object-[78%_50%]" : ""} ${px} ${parallax ? "min-h-[112%]" : ""}`}
        />
      </div>
    );
  }
  // Ohne freigegebenes Bild (src) bleibt die Fläche ein Platzhalter
  if (imagesArePlaceholders || !src) {
    return (
      <div
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : misc.imagePlaceholderLabel}
        aria-hidden={decorative ? "true" : undefined}
        className={`relative overflow-hidden ${dark ? "bg-ink-700" : "bg-stone-200"} ${className}`}
      >
        <div
          className={`absolute inset-0 ${px}`}
          style={{
            backgroundImage: dark
              ? "radial-gradient(120% 90% at 20% 10%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(80% 60% at 90% 100%, rgba(200,169,110,0.16), transparent 60%)"
              : "radial-gradient(120% 90% at 20% 10%, rgba(255,255,255,0.9), transparent 60%), radial-gradient(80% 60% at 90% 100%, rgba(184,18,27,0.10), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageGlyph
            weight="duotone"
            className={`size-8 ${dark ? "text-white/25" : "text-ink/15"}`}
            aria-hidden="true"
          />
        </div>
        <span
          className={`absolute bottom-4 left-4 font-mono text-xs font-medium uppercase tracking-[0.14em] ${dark ? "text-white/75" : "text-ink/75"}`}
        >
          {label ?? misc.imagePlaceholder}
        </span>
      </div>
    );
  }
  return (
    <div
      className={`relative overflow-hidden ${hover ? "img-zoom" : ""} ${className}`}
      aria-hidden={decorative ? "true" : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={decorative ? "" : alt}
        className={`h-full w-full object-cover ${px} ${parallax ? "min-h-[112%]" : ""}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
