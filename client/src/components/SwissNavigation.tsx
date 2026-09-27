'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * Kopfzeile (F2): Oben eine schmale Zeile mit Telefon, E-Mail, Antwortzeit und
 * Sprachen, darunter die Hauptzeile. Die ganze Kopfzeile klebt oben, die schmale
 * Zeile rollt dabei weg (negativer top-Wert, ohne JavaScript). Leistungen als
 * breites Menü über die ganze Seite.
 */
export default function SwissNavigation({ lang = "de", path }: { lang?: Locale; path?: PagePath }) {
  // Ohne path (404) ist kein Menüpunkt aktiv, der Sprachumschalter führt zur Startseite
  const current = path ?? "/";
  const active = (target: string) => path !== undefined && (path === target || path.startsWith(`${target}/`));
  const { menu, serviceGroups, languageSwitch, chrome } = navDicts[lang];
  const href = (target: PagePath) => localizePath(target, lang);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Offenes Mobilmenü sperrt das Scrollen der Seite dahinter
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const isServices = active("/leistungen") || active("/premium");
  const navLink = (active: boolean) =>
    `relative py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-signal after:transition-transform after:duration-300 ${
      active ? "text-ink after:scale-x-100" : "text-ink/75 hover:text-ink after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <>
      <a href="#inhalt" className="skip-link">{chrome.skip}</a>
      <header className="sticky top-0 lg:-top-10 z-50">
        {/* Schmale Zeile, nur ab Tablet quer */}
        <div className="hidden lg:block h-10 bg-ink text-[0.8125rem] text-white/75">
          <div className="container flex h-full items-center justify-between gap-6">
            <p className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              {chrome.answer}
            </p>
            <div className="flex items-center gap-6">
              <a href={company.phone.href} className="tabular-nums hover:text-white transition-colors">{company.phone.display}</a>
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">{company.email}</a>
              <span className="text-white/50">{chrome.seat}</span>
              <LanguageSwitcher lang={lang} path={current} label={languageSwitch} tone="dark" compact />
            </div>
          </div>
        </div>

        <nav
          aria-label={menu.label}
          className={`relative border-b transition-[background-color,box-shadow,border-color] duration-300 ${
            scrolled || isOpen || megaOpen
              ? "bg-white border-line shadow-[0_1px_0_rgba(14,17,22,0.04),0_12px_32px_-18px_rgba(14,17,22,0.25)]"
              : "bg-white/90 border-transparent backdrop-blur-md"
          }`}
          onKeyDown={(e) => {
            if (e.key === "Escape" && megaOpen) {
              setMegaOpen(false);
              (document.getElementById("leistungen-knopf") as HTMLButtonElement | null)?.focus();
            }
          }}
        >
          <div className="container flex h-[var(--header-h)] items-center justify-between gap-8">
            <Link href={href("/")} className="group flex items-baseline gap-3" onClick={() => setIsOpen(false)}>
              {/* Schriftzug bis zum Logo von Brandea (R2d, E26, E49) */}
              <span className="font-display text-[1.375rem] font-semibold tracking-[-0.02em] text-ink">{company.brand}</span>
            </Link>

            <div className="hidden xl:flex items-center gap-9 self-stretch">
              <Link href={href(menu.home.path)} className={navLink(path === "/")}>
                {menu.home.label}
              </Link>

              {/* Per Maus und Tastatur bedienbar: Enter/Leertaste schaltet um, Escape schliesst (M40) */}
              <div
                className="flex self-stretch items-center"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMegaOpen(false);
                }}
              >
                <button
                  id="leistungen-knopf"
                  type="button"
                  className={`${navLink(isServices)} inline-flex items-center gap-1.5`}
                  aria-expanded={megaOpen}
                  aria-controls="leistungen-menu"
                  onClick={(e) => {
                    // Tastatur (detail 0) schaltet um, ein Mausklick lässt das per Hover geöffnete Menü offen
                    if (e.detail === 0) setMegaOpen(!megaOpen);
                    else setMegaOpen(true);
                  }}
                >
                  {menu.services}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>

                <div
                  id="leistungen-menu"
                  hidden={!megaOpen}
                  className="absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_32px_64px_-32px_rgba(14,17,22,0.35)]"
                >
                  <div className="container grid grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.15fr)] gap-12 py-12">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="t-eyebrow text-mute mb-5 pb-3 border-b border-line">{group.title}</p>
                        <ul className="space-y-0.5">
                          {group.links.map((link) => (
                            <li key={link.path}>
                              <Link
                                href={href(link.path)}
                                onClick={() => setMegaOpen(false)}
                                aria-current={link.path === path ? "page" : undefined}
                                className="arrow-link group flex items-center justify-between gap-4 py-2 text-[0.9875rem] text-ink/85 hover:text-signal aria-[current=page]:text-signal transition-colors"
                              >
                                {link.label}
                                <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="bg-ink p-8 text-white">
                      <p className="t-eyebrow text-brass mb-4">{chrome.megaTitle}</p>
                      <p className="text-white/80 leading-relaxed mb-6">{chrome.megaText}</p>
                      <div className="flex flex-col gap-3">
                        <Button asChild size="lg">
                          <a href={menu.cta.href} onClick={() => setMegaOpen(false)}>
                            {menu.cta.label}
                            <ArrowRight aria-hidden="true" />
                          </a>
                        </Button>
                        <a href={company.phone.href} className="inline-flex items-center gap-2 py-2 text-white/85 hover:text-white tabular-nums">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          {company.phone.display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {menu.after.map((link) => (
                <Link key={link.path} href={href(link.path)} className={navLink(active(link.path))}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={company.phone.href}
                className="hidden 2xl:inline-flex items-center gap-2 px-3 py-2 text-[0.9375rem] font-medium text-ink tabular-nums hover:text-signal transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone.display}
              </a>
              <Button asChild className="hidden sm:inline-flex">
                <a href={menu.cta.href}>
                  {menu.cta.label}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center text-ink"
                aria-label={isOpen ? menu.close : menu.open}
                aria-expanded={isOpen}
                aria-controls="mobil-menu"
              >
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div id="mobil-menu" className="xl:hidden absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line bg-white">
              <div className="container py-8 grid gap-10 md:grid-cols-2">
                <div className="space-y-8">
                  {serviceGroups.map((group) => (
                    <div key={group.title}>
                      <p className="t-eyebrow text-mute mb-3 pb-2 border-b border-line">{group.title}</p>
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.path}>
                            <Link
                              href={href(link.path)}
                              onClick={() => setIsOpen(false)}
                              aria-current={link.path === path ? "page" : undefined}
                              className="block py-2.5 text-[1.0625rem] text-ink aria-[current=page]:text-signal"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                  <ul className="border-t border-line">
                    {[menu.home, ...menu.after].map((link) => (
                      <li key={link.path} className="border-b border-line">
                        <Link
                          href={href(link.path)}
                          onClick={() => setIsOpen(false)}
                          aria-current={link.path === path ? "page" : undefined}
                          className="flex items-center justify-between py-4 font-display text-xl font-semibold text-ink aria-[current=page]:text-signal"
                        >
                          {link.label}
                          <ArrowRight className="h-5 w-5 text-mute" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button asChild size="lg" className="w-full">
                      <a href={menu.cta.href} onClick={() => setIsOpen(false)}>{menu.cta.label}</a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full">
                      <a href={company.phone.href}>
                        <Phone aria-hidden="true" />
                        {company.phone.display}
                      </a>
                    </Button>
                    <p className="text-sm text-mute pt-1">{chrome.answer}</p>
                  </div>
                  <LanguageSwitcher lang={lang} path={current} label={languageSwitch} className="-mx-2" />
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
