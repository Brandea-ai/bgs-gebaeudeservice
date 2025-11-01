import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
export default function StGallen() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <div className="pt-32 pb-20 container">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">Reinigungsfirma StGallen</h1>
        <p className="text-xl text-slate-600 mb-8">Professionelle Gebäudereinigung in StGallen und Umgebung.</p>
        <Link href="/kontakt"><Button size="lg" className="border-2">Jetzt Kontakt aufnehmen</Button></Link>
      </div>
      <SwissFooter />
    </div>
  );
}
