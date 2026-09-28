import { ArrowRight, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";
import ProcessScrolly, { hasStage } from "@/components/ProcessScrolly";
import { premiumHeading } from "@/components/premiumStyles";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Ablauf (E85) als zwei ruhige Zeilen im selben Raster: oben die zwei
 * Schritte, die bei jeder Leistung gleich sind (Anfrage, Besichtigung vor Ort
 * mit schriftlicher Offerte), darunter die seitentypischen Schritte.
 *
 * Die Bühne erscheint nur, wenn jeder Schritt im Inhalt eine eigene Figur trägt
 * (step.figure; Premium nur Bilder). Die Vorlage rät keine Figur nach Position
 * (F2) und stellt keine leere Symbolbühne auf (F4). Ohne Bühne stehen die
 * Schritte ab lg nebeneinander auf einer Linie, ab vier Schritten senkrecht.
 * Premium hell auf Weiss mit Champagner, nie Signalrot.
 */
export default function LeistungAblauf(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, premium } = leistungKontext(props);
  const before = ui.stepsBefore;
  const staged = hasStage(content.steps, premium);
  const accent = premium ? "text-brass-dark" : "text-signal";
  const strong = premium ? "text-anthracite" : "text-ink";
  const rule = premium ? "border-brass-dark/25" : "border-ink/15";
  const label = `t-eyebrow ${premium ? "text-ink-600" : "text-mute"}`;
  const steps = (
    <ProcessScrolly
      steps={content.steps}
      lang={lang}
      tone={premium ? "premium" : "light"}
      variant={staged ? "wide" : content.steps.length <= 3 ? "row" : "vertical"}
      idPrefix="schritt"
    />
  );
  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-titel"
      className={`section ${premium ? "border-t border-brass/25 bg-white text-anthracite" : "border-y border-line bg-stone"}`}
    >
      <div className="container">
        <h2 id="ablauf-titel" className={premium ? premiumHeading : "t-h2 text-ink"}>
          {ui.steps}
        </h2>
        <div className={`mt-8 border-t ${rule}`}>
          <div className={`grid gap-4 border-b py-5 lg:grid-cols-12 lg:items-center lg:gap-12 ${rule}`}>
            <p className={`${label} lg:col-span-3`}>{before.label}</p>
            <ol className="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:col-span-9">
              <li className="flex items-start gap-3">
                <Envelope weight="duotone" className={`mt-0.5 size-6 shrink-0 ${accent}`} aria-hidden="true" />
                <span className="min-w-0 leading-snug">
                  <span className={`block font-display text-[1.0625rem] font-bold ${strong}`}>
                    {premium ? before.anfragePremium : before.anfrage}
                  </span>
                  <span className="mt-1 block font-medium text-ink-600">{before.anfrageText}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight weight="duotone" className={`mt-1 hidden size-5 shrink-0 sm:block ${accent}`} aria-hidden="true" />
                <MapPin weight="duotone" className={`mt-0.5 size-6 shrink-0 ${accent}`} aria-hidden="true" />
                <span className="min-w-0 leading-snug">
                  <span className={`block font-display text-[1.0625rem] font-bold ${strong}`}>{before.besichtigung}</span>
                  <span className="mt-1 block font-medium text-ink-600">{before.besichtigungText}</span>
                </span>
              </li>
            </ol>
          </div>
          {staged ? (
            <div className="pt-8">
              <p className={`${label} mb-6`}>{before.service}</p>
              {steps}
            </div>
          ) : (
            <div className={`grid gap-6 border-b py-8 lg:grid-cols-12 lg:gap-12 lg:py-10 ${rule}`}>
              <p className={`${label} lg:col-span-3`}>{before.service}</p>
              <div className="min-w-0 lg:col-span-9">{steps}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
