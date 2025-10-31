import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function SwissFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="/swiss-logo.webp" alt="Swiss Reinigung" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Ihre professionelle Reinigungsfirma in der Schweiz. Qualität, Zuverlässigkeit und Präzision seit Jahren.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Premium Services</h3>
            <div className="space-y-2">
              <Link href="/premium/privatjet"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Privatjet-Reinigung</div></Link>
              <Link href="/premium/yacht"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Yacht-Reinigung</div></Link>
              <Link href="/premium/housekeeping"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Private Housekeeping</div></Link>
              <Link href="/premium/luxusimmobilien"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Luxusimmobilien</div></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">B2B Lösungen</h3>
            <div className="space-y-2">
              <Link href="/b2b/bueroreinigung"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Büroreinigung</div></Link>
              <Link href="/b2b/industriereinigung"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Industriereinigung</div></Link>
              <Link href="/b2b/fassadenreinigung"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Fassadenreinigung</div></Link>
              <Link href="/b2b/facility-management"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer text-sm">Facility Management</div></Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Standorte</h3>
            <div className="space-y-2 mb-6">
              <Link href="/standorte/zuerich"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Zürich</div></Link>
              <Link href="/standorte/zug"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Zug</div></Link>
              <Link href="/standorte/st-gallen"><div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">St. Gallen</div></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {new Date().getFullYear()} Swiss Reinigungsfirma. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/impressum"><span className="hover:text-white transition-smooth cursor-pointer">Impressum</span></Link>
              <Link href="/datenschutz"><span className="hover:text-white transition-smooth cursor-pointer">Datenschutz</span></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
