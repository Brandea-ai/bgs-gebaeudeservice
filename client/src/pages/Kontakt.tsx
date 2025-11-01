import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <div className="pt-32 pb-20 container">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Kontakt</h1>
        <Card className="p-8 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Swiss Reinigungsfirma</h2>
          <p className="mb-2">Tannhof 10</p>
          <p className="mb-2">6020 Emmenbrücke</p>
          <p className="mb-4">Luzern, Schweiz</p>
          <p className="mb-2"><strong>Telefon:</strong> +41 41 320 56 10</p>
          <p className="mb-4"><strong>E-Mail:</strong> info@bgs-service.ch</p>
          <p className="mb-2"><strong>UID:</strong> CHE-108.687.458</p>
          <p><strong>Geschäftsführung:</strong> Nezir Bozhdaraj</p>
        </Card>
      </div>
      <SwissFooter />
    </div>
  );
}
