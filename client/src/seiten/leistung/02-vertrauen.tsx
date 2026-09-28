import TrustStrip from "@/components/TrustStrip";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Vertrauensleiste: belegte Angaben (E18), kompakt */
export default function LeistungVertrauen(props: LeistungProps) {
  const { premium } = leistungKontext(props);
  return (
    <div className={premium ? "on-dark border-b border-white/10 bg-anthracite" : "border-b border-line bg-white"}>
      <div className="container py-6">
        <TrustStrip lang={props.lang} compact tone={premium ? "dark" : "light"} />
      </div>
    </div>
  );
}
