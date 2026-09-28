import ProcessScrolly from "@/components/ProcessScrolly";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Ablauf als Prozess-Sektion; auf Premium-Seiten in Anthrazit mit Champagner */
export default function LeistungAblauf(props: LeistungProps) {
  const { content, lang } = props;
  const { ui, premium } = leistungKontext(props);
  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-titel"
      className={`section ${premium ? "on-dark bg-anthracite text-white" : "border-y border-line bg-stone"}`}
    >
      <div className="container">
        <h2 id="ablauf-titel" className={`t-h2 mb-10 ${premium ? "font-premium font-medium text-white" : "text-ink"}`}>
          {ui.steps}
        </h2>
        <ProcessScrolly
          steps={content.steps}
          lang={lang}
          tone={premium ? "dark" : "light"}
          variant="wide"
          figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
          idPrefix="schritt"
        />
      </div>
    </section>
  );
}
