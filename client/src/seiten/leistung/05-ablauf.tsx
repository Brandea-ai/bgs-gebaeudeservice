import ProcessScrolly from "@/components/ProcessScrolly";
import { premiumHeading } from "@/components/premiumStyles";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Ablauf als Prozess-Sektion; auf Premium-Seiten hell auf Weiss mit Champagner */
export default function LeistungAblauf(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, premium } = leistungKontext(props);
  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-titel"
      className={`section ${premium ? "border-t border-brass/25 bg-white text-anthracite" : "border-y border-line bg-stone"}`}
    >
      <div className="container">
        <h2 id="ablauf-titel" className={premium ? `${premiumHeading} mb-12` : "t-h2 mb-10 text-ink"}>
          {ui.steps}
        </h2>
        <ProcessScrolly
          steps={content.steps}
          lang={lang}
          tone={premium ? "premium" : "light"}
          variant="wide"
          figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
          idPrefix="schritt"
        />
      </div>
    </section>
  );
}
