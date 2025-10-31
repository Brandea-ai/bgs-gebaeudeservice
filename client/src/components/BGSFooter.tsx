import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BGSFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BGS</span>
              </div>
              <div>
                <div className="font-bold text-lg">BGS Gebäudeservice</div>
                <div className="text-sm text-slate-400">Professionelle Reinigung</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für professionelle Gebäudereinigung in der Schweiz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Leistungen</h3>
            <div className="space-y-2">
              <Link href="/leistungen/bueroreinigung">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Büroreinigung</div>
              </Link>
              <Link href="/leistungen/unterhaltsreinigung">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Unterhaltsreinigung</div>
              </Link>
              <Link href="/leistungen/glasreinigung">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Glasreinigung</div>
              </Link>
              <Link href="/leistungen/industriereinigung">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Industriereinigung</div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Standorte</h3>
            <div className="space-y-2">
              <Link href="/standorte/zuerich">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Zürich</div>
              </Link>
              <Link href="/standorte/luzern">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">Luzern</div>
              </Link>
              <Link href="/standorte/st-gallen">
                <div className="text-slate-400 hover:text-white transition-smooth cursor-pointer">St. Gallen</div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  Tannhof 10<br />
                  6020 Emmenbrücke<br />
                  Luzern, Schweiz
                </div>
              </div>
              <a href="tel:+41413205610" className="flex items-center gap-3 text-slate-400 hover:text-white transition-smooth">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+41 41 320 56 10</span>
              </a>
              <a href="mailto:info@bgs-service.ch" className="flex items-center gap-3 text-slate-400 hover:text-white transition-smooth">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@bgs-service.ch</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {new Date().getFullYear()} BGS Gebäudeservice. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/impressum">
                <span className="hover:text-white transition-smooth cursor-pointer">Impressum</span>
              </Link>
              <Link href="/datenschutz">
                <span className="hover:text-white transition-smooth cursor-pointer">Datenschutz</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
