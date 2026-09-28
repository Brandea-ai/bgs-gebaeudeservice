import TrustStrip from "@/components/TrustStrip";
import type { StartseiteProps } from "./kontext";

/** Vertrauensleiste (E18): nur, was die Kennzahlen im Hero nicht schon sagen */
export default function StartVertrauen({ lang }: StartseiteProps) {
  return (
    <div className="border-b border-line bg-white">
      <div className="container py-6 lg:py-8">
        <TrustStrip lang={lang} only={["register", "sprachen", "antwort", "offerte"]} />
      </div>
    </div>
  );
}
