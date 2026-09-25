'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";

export default function SwissNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Leistungsgruppen nach Zielbild v2 (Webseite-Analyse/03, Abschnitt 2a)
  const premiumServices = [
    { title: "Premium im Überblick", href: "/premium" },
    { title: "Luxusimmobilien", href: "/premium/luxusimmobilien" },
    { title: "Privatjet-Reinigung", href: "/premium/privatjet" },
    { title: "Yacht-Reinigung", href: "/premium/yacht" }
  ];

  const businessServices = [
    { title: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung" },
    { title: "Büro- und Praxisreinigung", href: "/leistungen/bueroreinigung" },
    { title: "Sonderreinigungen", href: "/leistungen/sonderreinigungen" },
    { title: "Bau- und Bauendreinigung", href: "/leistungen/baureinigung" },
    { title: "Fenster und Fassaden", href: "/leistungen/fenster-und-fassadenreinigung" },
    { title: "Industrie und Hallen", href: "/leistungen/industrie-und-hallenreinigung" }
  ];

  const basisServices = [
    { title: "Hauswartung", href: "/leistungen/hauswartung" },
    { title: "Aussen- und Grünflächenpflege", href: "/leistungen/aussen-und-gruenflaechenpflege" },
    { title: "Facility Services", href: "/leistungen/facility-services" },
    { title: "Alle Leistungen", href: "/leistungen" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              {/* Platzhalter bis zum neuen Logo (R2d, E26) */}
              <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{company.brand}</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            
            {/* Per Maus und Tastatur bedienbar: Enter/Leertaste schaltet um, Escape schliesst (M40) */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('leistungen')}
              onMouseLeave={() => setActiveDropdown(null)}
              onKeyDown={(e) => {
                if (e.key === 'Escape' && activeDropdown === 'leistungen') {
                  setActiveDropdown(null);
                  e.currentTarget.querySelector('button')?.focus();
                }
              }}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActiveDropdown(null);
              }}
            >
              <button
                type="button"
                className="text-foreground hover:text-primary transition-smooth font-medium"
                aria-expanded={activeDropdown === 'leistungen'}
                aria-controls="leistungen-menu"
                onClick={(e) => {
                  // Tastatur (detail 0) schaltet um, ein Mausklick lässt das per Hover geöffnete Menü offen
                  if (e.detail === 0) setActiveDropdown(activeDropdown === 'leistungen' ? null : 'leistungen');
                  else setActiveDropdown('leistungen');
                }}
              >
                Leistungen
              </button>
              {activeDropdown === 'leistungen' && (
                <div id="leistungen-menu" className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[800px]">
                  <div className="bg-white rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">Premium</p>
                        <div className="space-y-2">
                          {premiumServices.map((service, index) => (
                            <Link key={index} href={service.href}>
                              <div className="px-3 py-2 hover:bg-secondary rounded-md transition-smooth cursor-pointer text-sm">
                                {service.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">Reinigung</p>
                        <div className="space-y-2">
                          {businessServices.map((service, index) => (
                            <Link key={index} href={service.href}>
                              <div className="px-3 py-2 hover:bg-secondary rounded-md transition-smooth cursor-pointer text-sm">
                                {service.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">Hauswartung und Pflege</p>
                        <div className="space-y-2">
                          {basisServices.map((service, index) => (
                            <Link key={index} href={service.href}>
                              <div className="px-3 py-2 hover:bg-secondary rounded-md transition-smooth cursor-pointer text-sm">
                                {service.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/einzugsgebiet" className="text-foreground hover:text-primary transition-smooth font-medium">
              Einzugsgebiet
            </Link>

            <Link href="/ueber-uns" className="text-foreground hover:text-primary transition-smooth font-medium">
              Über uns
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-smooth font-medium">
              Blog
            </Link>
            <Button asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="container py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-primary transition-smooth">Home</div>
            </Link>
            <div>
              <div className="py-2 font-semibold text-foreground">Premium</div>
              <div className="pl-4 space-y-2">
                {premiumServices.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-primary transition-smooth text-sm">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="py-2 font-semibold text-foreground">Reinigung</div>
              <div className="pl-4 space-y-2">
                {businessServices.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-primary transition-smooth text-sm">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="py-2 font-semibold text-foreground">Hauswartung und Pflege</div>
              <div className="pl-4 space-y-2">
                {basisServices.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-primary transition-smooth text-sm">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="pl-0 space-y-2">
                <Link href="/einzugsgebiet" onClick={() => setIsOpen(false)}>
                  <div className="py-2 text-foreground hover:text-primary transition-smooth">Einzugsgebiet</div>
                </Link>
              </div>
            </div>
            <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-primary transition-smooth">Über uns</div>
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-primary transition-smooth">Blog</div>
            </Link>
            <Button asChild className="w-full">
              <Link href="/kontakt" onClick={() => setIsOpen(false)}>Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
