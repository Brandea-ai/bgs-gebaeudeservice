import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BGSNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "Büroreinigung", href: "/leistungen/bueroreinigung" },
    { title: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung" },
    { title: "Glasreinigung", href: "/leistungen/glasreinigung" },
    { title: "Industriereinigung", href: "/leistungen/industriereinigung" }
  ];

  const regions = [
    { title: "Zürich", href: "/standorte/zuerich" },
    { title: "Luzern", href: "/standorte/luzern" },
    { title: "St. Gallen", href: "/standorte/st-gallen" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BGS</span>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-xl text-foreground">BGS Gebäudeservice</div>
                <div className="text-xs text-muted-foreground">Professionelle Reinigung</div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-smooth font-medium">
                Leistungen
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-lg shadow-xl p-4 min-w-[200px]">
                  {services.map((service, index) => (
                    <Link key={index} href={service.href}>
                      <div className="px-4 py-2 hover:bg-secondary rounded-md transition-smooth cursor-pointer">
                        {service.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-smooth font-medium">
                Standorte
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-lg shadow-xl p-4 min-w-[200px]">
                  {regions.map((region, index) => (
                    <Link key={index} href={region.href}>
                      <div className="px-4 py-2 hover:bg-secondary rounded-md transition-smooth cursor-pointer">
                        {region.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/ueber-uns" className="text-foreground hover:text-primary transition-smooth font-medium">
              Über uns
            </Link>
            <Link href="/referenzen" className="text-foreground hover:text-primary transition-smooth font-medium">
              Referenzen
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
        <div className="lg:hidden bg-white border-t">
          <div className="container py-4 space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-primary transition-smooth">Home</div>
            </Link>
            <div>
              <div className="py-2 font-semibold text-foreground">Leistungen</div>
              <div className="pl-4 space-y-2">
                {services.map((service, index) => (
                  <Link key={index} href={service.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-primary transition-smooth">
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="py-2 font-semibold text-foreground">Standorte</div>
              <div className="pl-4 space-y-2">
                {regions.map((region, index) => (
                  <Link key={index} href={region.href} onClick={() => setIsOpen(false)}>
                    <div className="py-2 text-muted-foreground hover:text-primary transition-smooth">
                      {region.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-primary transition-smooth">Über uns</div>
            </Link>
            <Link href="/referenzen" onClick={() => setIsOpen(false)}>
              <div className="py-2 text-foreground hover:text-primary transition-smooth">Referenzen</div>
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
