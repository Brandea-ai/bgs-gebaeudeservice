import TrustStrip from "@/components/TrustStrip";
import type { UebersichtProps } from "./kontext";

/** Vertrauensleiste direkt unter dem Kopf: belegte Angaben (E18), kompakt */
export default function UebersichtVertrauen({ lang }: UebersichtProps) {
  return (
    <div className="border-b border-line bg-white">
      <div className="container py-6">
        <TrustStrip lang={lang} compact />
      </div>
    </div>
  );
}
