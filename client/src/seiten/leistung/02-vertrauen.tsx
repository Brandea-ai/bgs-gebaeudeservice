import TrustStrip from "@/components/TrustStrip";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Vertrauensleiste: belegte Angaben (E18), kompakt; Premium hell mit Champagner */
export default function LeistungVertrauen(props: LeistungProps) {
  const { premium } = leistungKontext(props);
  return (
    <div className={premium ? "border-b border-brass/30 bg-white" : "border-b border-line bg-white"}>
      <div className="container py-6">
        <TrustStrip lang={props.lang} compact tone={premium ? "premium" : "light"} />
      </div>
    </div>
  );
}
