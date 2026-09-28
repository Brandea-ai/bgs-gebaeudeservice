import TrustStrip from "@/components/TrustStrip";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Vertrauensleiste: belegte Angaben (E18), auf Leistungs- und Premiumseiten nur
 * drei Punkte (E85): Seit 2006, CHF 10 Mio., Offerte nach Besichtigung.
 * Premium hell mit Champagner.
 */
export default function LeistungVertrauen(props: LeistungProps) {
  const { premium } = leistungKontext(props);
  return (
    <div className={premium ? "border-b border-brass/30 bg-white" : "border-b border-line bg-white"}>
      <div className="container py-6">
        <TrustStrip
          lang={props.lang}
          compact
          only={["seit", "versichert", "offerte"]}
          tone={premium ? "premium" : "light"}
        />
      </div>
    </div>
  );
}
