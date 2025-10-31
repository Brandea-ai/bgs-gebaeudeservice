import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      <div className="pt-32 pb-20 container">
        <h1 className="text-5xl font-bold mb-6">Über Swiss Reinigungsfirma</h1>
        <p className="text-xl text-slate-600">Ihre professionelle Reinigungsfirma in der Schweiz seit Jahren.</p>
      </div>
      <SwissFooter />
    </div>
  );
}
