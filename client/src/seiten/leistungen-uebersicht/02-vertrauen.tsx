import TrustStrip from "@/components/TrustStrip";
import type { UebersichtProps } from "./kontext";

/**
 * Vertrauensleiste direkt unter dem Kopf: belegte Angaben (E18), wie auf den
 * Leistungsseiten nur drei Punkte (E85). Die Antwortzeit nennt der
 * Kontaktbereich (visuell.md Umbau 8: je Seite höchstens einmal).
 */
export default function UebersichtVertrauen({ lang }: UebersichtProps) {
  return (
    <div className="border-b border-line bg-white">
      <div className="container py-6 max-sm:py-4">
        <TrustStrip lang={lang} compact only={["seit", "versichert", "offerte"]} />
      </div>
    </div>
  );
}
