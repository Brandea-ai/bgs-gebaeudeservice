import SwissNavigation from "@/components/SwissNavigation";
import { scrollToContact } from "../utils/scroll";
import SwissFooter from "@/components/SwissFooter";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
export default function StGallen() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <div className="pt-32 pb-20 container">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Reinigungsfirma StGallen</h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8">Professionelle Gebäudereinigung in StGallen und Umgebung.</p>
        <Link href="/kontakt"><Button size="lg" className="border-2">Jetzt Kontakt aufnehmen</Button></Link>
      </div>
      <SwissFooter />
    </div>
  );
}
