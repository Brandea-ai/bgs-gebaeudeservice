'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SwissNavigation({ lang = "de", path = "/" }: { lang?: Locale; path?: PagePath }) {
  const { menu, serviceGroups, languageSwitch } = navDicts[lang];
  const href = (target: PagePath) => localizePath(target, lang);
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

  return (
    <nav aria-label={menu.label} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href={href("/")}>
            <div className="flex items-center gap-3 cursor-pointer">
              {/* Platzhalter bis zum neuen Logo (R2d, E26) */}
              <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{company.brand}</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href={href(menu.home.path)} className="text-foreground hover:text-primary transition-smooth font-medium">
              {menu.home.label}
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
                {menu.services}
              </button>
              {activeDropdown === 'leistungen' && (
                <div id="leistungen-menu" className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[800px]">
                  <div className="bg-white rounded-lg shadow-2xl p-8">
                    <div className="grid grid-cols-3 gap-8">
                      {serviceGroups.map((group) => (
                        <div key={group.title}>
                          <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wide">{group.title}</p>
                          <ul className="space-y-1">
                            {group.links.map((link) => (
                              <li key={link.path}>
                                <Link href={href(link.path)} className="block px-3 py-2 hover:bg-secondary rounded-md transition-smooth text-sm">
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {menu.after.map((link) => (
              <Link key={link.path} href={href(link.path)} className="text-foreground hover:text-primary transition-smooth font-medium">
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher lang={lang} path={path} label={languageSwitch} className="-mx-2" />
            <Button asChild>
              <a href={menu.cta.href}>{menu.cta.label}</a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? menu.close : menu.open}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t max-h-[80vh] overflow-y-auto">
          <div className="container py-4 space-y-4">
            <Link href={href(menu.home.path)} onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-primary transition-smooth">
              {menu.home.label}
            </Link>
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <p className="py-2 font-semibold text-foreground">{group.title}</p>
                <ul className="pl-4 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link href={href(link.path)} onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-primary transition-smooth text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {menu.after.map((link) => (
              <Link key={link.path} href={href(link.path)} onClick={() => setIsOpen(false)} className="block py-2 text-foreground hover:text-primary transition-smooth">
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher lang={lang} path={path} label={languageSwitch} className="-mx-2" />
            <Button asChild className="w-full">
              <a href={menu.cta.href} onClick={() => setIsOpen(false)}>{menu.cta.label}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
