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

  const premiumServices = [
    { title: "Privatjet Reinigung", href: "/premium/privatjet" },
    { title: "Yacht Reinigung", href: "/premium/yacht" },
    { title: "Luxusimmobilien", href: "/premium/luxusimmobilien" }
  ];

  const businessServices = [
    { title: "Büroreinigung", href: "/business/bueroreinigung" },
    { title: "Baureinigung", href: "/business/baureinigung" },
    { title: "Industriereinigung", href: "/business/industriereinigung" },
    { title: "Fassadenreinigung", href: "/business/fassadenreinigung" },
    { title: "Fensterreinigung", href: "/business/fensterreinigung" },
    { title: "Außenanlagenpflege", href: "/business/aussenanlagen" },
    { title: "Hallenreinigung", href: "/business/hallenreinigung" },
    { title: "Maschinenreinigung", href: "/business/maschinenreinigung" },
    { title: "Facility Management", href: "/business/facility-management" }
  ];

  const basisServices = [
    { title: "Unterhaltsreinigung", href: "/basis/unterhaltsreinigung" },
    { title: "Hauswartung", href: "/basis/hausmeisterservice" },
    { title: "Beschaffungsmanagement", href: "/basis/beschaffung" },
    { title: "Sonderleistungen", href: "/basis/sonderleistungen" }
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
            
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('leistungen')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-foreground hover:text-primary transition-smooth font-medium">
                Leistungen
              </button>
              {activeDropdown === 'leistungen' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[800px]">
                  <div className="bg-white rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">Premium Services</h3>
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
                        <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">Business Lösungen</h3>
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
                        <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">Basisreinigung</h3>
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
            <Link href="/kontakt">
              <Button>Kontakt aufnehmen</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div className="py-2 font-semibold text-foreground">Premium Services</div>
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
              <div className="py-2 font-semibold text-foreground">Business Lösungen</div>
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
              <div className="py-2 font-semibold text-foreground">Basisreinigung</div>
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
            <Link href="/kontakt" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Kontakt aufnehmen</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
