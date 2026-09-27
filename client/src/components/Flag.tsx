import type { Locale } from "../../../shared/i18n";

/** Kleine Flaggen für den Sprachumschalter (F7), als SVG ohne Bilddatei */
export default function Flag({
  lang,
  className = "h-3.5 w-5",
}: {
  lang: Locale;
  className?: string;
}) {
  const common = {
    className: `${className} shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]`,
    "aria-hidden": true as const,
    viewBox: "0 0 30 20",
  };
  switch (lang) {
    case "de":
      return (
        <svg {...common}>
          <rect width="30" height="20" fill="#000" />
          <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
          <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
        </svg>
      );
    case "fr":
      return (
        <svg {...common}>
          <rect width="10" height="20" fill="#0055A4" />
          <rect x="10" width="10" height="20" fill="#fff" />
          <rect x="20" width="10" height="20" fill="#EF4135" />
        </svg>
      );
    case "it":
      return (
        <svg {...common}>
          <rect width="10" height="20" fill="#009246" />
          <rect x="10" width="10" height="20" fill="#fff" />
          <rect x="20" width="10" height="20" fill="#CE2B37" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect width="30" height="20" fill="#012169" />
          <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
          <path d="M0 0l30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.6" />
          <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
          <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3.5" />
        </svg>
      );
  }
}
