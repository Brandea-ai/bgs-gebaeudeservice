import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <div className="pt-32 pb-20 container">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Über Swiss Reinigungsfirma</h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 text-xs sm:text-sm md:text-base">Ihre professionelle Reinigungsfirma in der Schweiz seit Jahren.</p>
      </div>
      <SwissFooter />
    </div>
  );
}
