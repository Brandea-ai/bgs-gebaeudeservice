import ProcessScrolly, { type FigureKey } from "./ProcessScrolly";
import type { Step } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

/**
 * Ablauf (F3, F14): Hülle um ProcessScrolly in der vertikalen Variante, damit
 * bestehende Aufrufe weiter funktionieren. Neue Seiten rufen ProcessScrolly
 * direkt auf und wählen die Variante.
 */
export default function Steps({
  steps,
  lang = "de",
  tone = "light",
  figureKeys,
}: {
  steps: Step[];
  lang?: Locale;
  tone?: "light" | "dark";
  narrow?: boolean;
  figureKeys?: FigureKey[];
}) {
  const keys: FigureKey[] =
    figureKeys ??
    (steps.length === 3
      ? ["anfrage", "besichtigung", "start"]
      : ["anfrage", "besichtigung", "offerte", "start"]);
  return (
    <ProcessScrolly
      steps={steps}
      lang={lang}
      tone={tone}
      variant="vertical"
      figureKeys={keys}
    />
  );
}
