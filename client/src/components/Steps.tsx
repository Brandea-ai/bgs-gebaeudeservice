import Reveal from "./Reveal";
import RichText from "./RichText";
import type { Step } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

/**
 * Ablauf als nummerierte Folge (F3, F7): Die Reihenfolge ist Teil der Aussage,
 * deshalb grosse Nummern und eine durchgehende Linie. Die Schritte erscheinen
 * nacheinander beim Scrollen.
 */
export default function Steps({
  steps,
  lang = "de",
  tone = "light",
  narrow = false,
}: {
  steps: Step[];
  lang?: Locale;
  tone?: "light" | "dark";
  /** In einer schmalen Spalte höchstens zwei nebeneinander */
  narrow?: boolean;
}) {
  const dark = tone === "dark";
  const cols = narrow
    ? ""
    : steps.length === 4
      ? "lg:grid-cols-4"
      : "lg:grid-cols-3";
  return (
    <ol className={`grid gap-6 md:grid-cols-2 ${cols}`}>
      {steps.map((step, index) => (
        <Reveal
          as="li"
          key={step.title}
          delay={index * 120}
          className={`card-lift relative flex flex-col p-7 md:p-8 ${dark ? "bg-white/[0.06] text-white" : "bg-white text-ink shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"}`}
        >
          <span
            className={`font-display text-[3.25rem] font-bold leading-none tracking-[-0.04em] ${dark ? "text-brass" : "text-signal"}`}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="t-h3 mt-6">{step.title}</h3>
          <p
            className={`mt-3 font-medium leading-relaxed ${dark ? "text-white/85" : "text-ink-600"}`}
          >
            <RichText
              text={step.text}
              lang={lang}
              linkClassName={
                dark
                  ? "font-semibold text-white underline underline-offset-4"
                  : undefined
              }
            />
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
