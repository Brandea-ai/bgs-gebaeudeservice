import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface NavItem {
  label: string;
  href?: string;
  megaMenu?: MegaMenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "Leistungen",
    megaMenu: [
      {
        title: "Fractional CXO",
        description: "Strategische Führungsexpertise für nachhaltiges Unternehmenswachstum",
        href: "/leistungen/fractional-cxo",
        image: "/fractional-cxo.jpg"
      },
      {
        title: "KI-Automatisierung",
        description: "Prozessoptimierung durch intelligente Automatisierung",
        href: "/leistungen/ki-automatisierung",
        image: "/ai-automation.jpg"
      },
      {
        title: "Turnaround & Restrukturierung",
        description: "Professionelle Beratung für erfolgreiche Unternehmenswenden",
        href: "/leistungen/turnaround",
        image: "/turnaround-strategy.jpg"
      }
    ]
  },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Brandea Methode", href: "/methode" },
  { label: "Kundenerfolge", href: "/referenzen" },
  { label: "Wissen", href: "/wissen" },
  { label: "Downloads", href: "/downloads" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glasmorphismus-Effekt bei Scroll
      setIsScrolled(currentScrollY > 20);
      
      // Navigation ein-/ausblenden basierend auf Scroll-Richtung
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Mobile Menu schließen bei Route-Wechsel
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "glass floating shadow-lg"
            : "bg-white/50"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center space-x-3 transition-smooth hover:opacity-80">
                <img
                  src="https://brandea.b-cdn.net/21844b22-60cc-442e-bc3b-bebff31a4053-removebg-preview.png"
                  alt="Brandea Logo"
                  className="h-12 w-auto object-contain"
                  style={{
                    filter: isScrolled ? "brightness(0)" : "none"
                  }}
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.label)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {item.href ? (
                    <Link href={item.href}>
                      <a className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth rounded-lg hover:bg-secondary/50">
                        {item.label}
                      </a>
                    </Link>
                  ) : (
                    <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-smooth rounded-lg hover:bg-secondary/50 flex items-center gap-1">
                      {item.label}
                      {item.megaMenu && <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}

                  {/* Mega Menu */}
                  {item.megaMenu && activeMegaMenu === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] glass floating rounded-2xl p-6 shadow-2xl">
                      <div className="grid grid-cols-3 gap-4">
                        {item.megaMenu.map((menuItem) => (
                          <Link key={menuItem.href} href={menuItem.href}>
                            <a className="group block rounded-xl overflow-hidden transition-smooth hover:scale-105">
                              <div className="aspect-video w-full overflow-hidden rounded-lg mb-3">
                                <img
                                  src={menuItem.image}
                                  alt={menuItem.title}
                                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                                />
                              </div>
                              <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-smooth">
                                {menuItem.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {menuItem.description}
                              </p>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <Button className="ml-4">
                Gespräch vereinbaren
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-smooth"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 left-0 right-0 bottom-0 glass overflow-y-auto p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link href={item.href}>
                      <a className="block px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-smooth font-medium">
                        {item.label}
                      </a>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveMegaMenu(activeMegaMenu === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-smooth font-medium"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-smooth ${activeMegaMenu === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {item.megaMenu && activeMegaMenu === item.label && (
                        <div className="mt-2 space-y-2 pl-4">
                          {item.megaMenu.map((menuItem) => (
                            <Link key={menuItem.href} href={menuItem.href}>
                              <a className="block p-3 rounded-lg hover:bg-secondary/50 transition-smooth">
                                <div className="font-medium text-foreground mb-1">
                                  {menuItem.title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {menuItem.description}
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Button className="w-full mt-4">
                Gespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
