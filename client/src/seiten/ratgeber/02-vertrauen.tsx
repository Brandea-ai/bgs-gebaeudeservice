import TrustStrip from "@/components/TrustStrip";
import type { RatgeberProps } from "./kontext";

/** Vertrauensleiste vor den Artikeln (E18): eine Gruppe, ohne Platten */
export default function RatgeberVertrauen({ lang }: RatgeberProps) {
  return (
    <div className="border-b border-line bg-white">
      <div className="container py-6">
        <TrustStrip lang={lang} compact />
      </div>
    </div>
  );
}
