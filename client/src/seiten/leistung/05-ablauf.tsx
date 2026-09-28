import { ArrowRight, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";
import ProcessScrolly, { type FigureKey } from "@/components/ProcessScrolly";
import { premiumHeading } from "@/components/premiumStyles";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Ohne eigene Figur je Schritt: Planungsschritte zeigen das Dokument, der
 * letzte Schritt den Kalender (Anfrage und Besichtigung stehen in der Zeile
 * darüber, E85). Premium zeigt statt Videos das Symbol auf Elfenbein.
 */
function fallbackFigures(n: number): FigureKey[] {
  return Array.from({ length: n }, (_, i) => (i === n - 1 ? "start" : "offerte"));
}

/**
 * Ablauf (E85): über den seitentypischen Schritten eine ruhige Zeile mit den
 * zwei Schritten, die bei jeder Leistung gleich sind (Anfrage, Besichtigung
 * vor Ort mit schriftlicher Offerte), darunter die klebende Szene. Premium
 * hell auf Weiss mit Champagner.
 */
export default function LeistungAblauf(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, premium } = leistungKontext(props);
  const before = ui.stepsBefore;
  const accent = premium ? "text-brass-dark" : "text-signal";
  const strong = premium ? "text-anthracite" : "text-ink";
  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-titel"
      className={`section lg:pb-12 ${premium ? "border-t border-brass/25 bg-white text-anthracite" : "border-y border-line bg-stone"}`}
    >
      <div className="container">
        <h2 id="ablauf-titel" className={premium ? premiumHeading : "t-h2 text-ink"}>
          {ui.steps}
        </h2>
        <div
          className={`mb-10 mt-8 grid gap-4 border-y py-5 lg:grid-cols-12 lg:items-center lg:gap-12 ${premium ? "border-brass-dark/25" : "border-ink/15"}`}
        >
          <p className={`t-eyebrow lg:col-span-3 ${premium ? "text-ink-600" : "text-mute"}`}>{before.label}</p>
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
        <ProcessScrolly
          steps={content.steps}
          lang={lang}
          tone={premium ? "premium" : "light"}
          variant="wide"
          figureKeys={fallbackFigures(content.steps.length)}
          idPrefix="schritt"
        />
      </div>
    </section>
  );
}
