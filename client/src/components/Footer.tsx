import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Über Brandea */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Über Brandea</h3>
            <p className="text-sm text-muted-foreground mb-4">
              KI-Beratung für DACH & Benelux. Wir optimieren Ihre Geschäftsprozesse und treiben Innovation voran.
            </p>
            <img
              src="https://brandea.b-cdn.net/21844b22-60cc-442e-bc3b-bebff31a4053-removebg-preview.png"
              alt="Brandea Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/leistungen/fractional-cxo">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Fractional CXO
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/leistungen/ki-automatisierung">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    KI-Automatisierung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/leistungen/turnaround">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Turnaround & Restrukturierung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/methode">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Brandea Methode
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ueber-uns">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Über Uns
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/referenzen">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Kundenerfolge
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/wissen">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Wissen
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/downloads">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Downloads
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/karriere">
                  <a className="text-muted-foreground hover:text-accent transition-smooth">
                    Karriere
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@brandea.de"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Mail className="w-4 h-4" />
                  info@brandea.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+4999547006266"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Phone className="w-4 h-4" />
                  +49 9954 7006266
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Brandea GmbH · KI-Beratung für DACH & Benelux
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/impressum">
                <a className="text-muted-foreground hover:text-accent transition-smooth">
                  Impressum
                </a>
              </Link>
              <Link href="/datenschutz">
                <a className="text-muted-foreground hover:text-accent transition-smooth">
                  Datenschutz
                </a>
              </Link>
              <Link href="/rechtliches">
                <a className="text-muted-foreground hover:text-accent transition-smooth">
                  Rechtliches
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
