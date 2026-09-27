"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  CaretDown,
  List,
  Phone,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * Kopfzeile (F2, F14): Ab xl eine schmale Zeile mit Antwortzeit, Telefon,
 * E-Mail und Sprachen, darunter die Hauptzeile. Die ganze Kopfzeile klebt oben,
 * die schmale Zeile rollt dabei weg (negativer top-Wert, ohne JavaScript).
 * Solides Weiss mit Linie, kein Glas; der Schatten kommt über einen Beobachter
 * auf einer 1-px-Marke, nicht über einen Scroll-Listener. Leistungen als
 * breites Menü mit kurzer Verzögerung beim Überfahren. Mobilmenü: Offerte,
 * Telefon und Sprachen zuerst, Leistungsgruppen zusammenklappbar, Escape
 * schliesst, der Inhalt dahinter ist inert.
 */
export default function SwissNavigation({
  lang = "de",
  path,
}: {
  lang?: Locale;
  path?: PagePath;
}) {
  // Ohne path (404) ist kein Menüpunkt aktiv, der Sprachumschalter führt zur Startseite
  const current = path ?? "/";
  const active = (target: string) =>
    path !== undefined && (path === target || path.startsWith(`${target}/`));
  const { menu, serviceGroups, languageSwitch, chrome } = navDicts[lang];
  const href = (target: PagePath) => localizePath(target, lang);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Schatten, sobald die Marke über der Kopfzeile aus dem Bild ist
  useEffect(() => {
    const el = sentinel.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Offenes Mobilmenü sperrt das Scrollen und macht den Inhalt dahinter inert
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    const behind = [
      document.getElementById("inhalt"),
      document.querySelector("footer"),
      document.getElementById("mobil-cta"),
    ];
    behind.forEach(el => el?.toggleAttribute("inert", isOpen));
    return () => {
      document.documentElement.style.overflow = "";
      behind.forEach(el => el?.removeAttribute("inert"));
    };
  }, [isOpen]);

  // Bei Seitenwechsel beide Menüs schliessen
  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const hover = (open: boolean) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMegaOpen(open), open ? 120 : 160);
  };

  const isServices = active("/leistungen") || active("/premium");
  const navLink = (active: boolean) =>
    `relative inline-flex min-h-11 items-center py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:bg-signal after:transition-transform after:duration-300 ${
      active
        ? "text-ink after:scale-x-100"
        : "text-ink/75 hover:text-ink after:scale-x-0 hover:after:scale-x-100"
    }`;
  const mobileLink =
    "flex min-h-11 items-center justify-between gap-4 py-3 text-[1.0625rem] font-medium text-ink aria-[current=page]:text-signal";

  return (
    <>
      <a href="#inhalt" className="skip-link">
        {chrome.skip}
      </a>
      <div ref={sentinel} aria-hidden="true" className="h-px w-full bg-ink" />
      <header className="sticky top-0 z-50 -mt-px xl:-top-10">
        {/* Schmale Zeile, nur auf breiten Bildschirmen */}
        <div className="on-dark hidden h-10 bg-ink text-[0.8125rem] text-white/75 xl:block">
          <div className="container flex h-full items-center justify-between gap-6">
            <p className="flex items-center gap-2">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-signal"
                aria-hidden="true"
              />
              {chrome.answer}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={company.phone.href}
                className="tabular-nums transition-colors hover:text-white"
              >
                {company.phone.display}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-white"
              >
                {company.email}
              </a>
              <span className="text-white/60">{chrome.seat}</span>
              <LanguageSwitcher
                lang={lang}
                path={current}
                label={languageSwitch}
                tone="dark"
                compact
              />
            </div>
          </div>
        </div>

        <nav
          aria-label={menu.label}
          className={`relative border-b border-line bg-white transition-shadow duration-300 ${
            scrolled || isOpen || megaOpen
              ? "shadow-[0_1px_0_rgba(14,17,22,0.04),0_12px_32px_-18px_rgba(14,17,22,0.25)]"
              : ""
          }`}
          onKeyDown={e => {
            if (e.key !== "Escape") return;
            if (megaOpen) {
              setMegaOpen(false);
              (
                document.getElementById(
                  "leistungen-knopf"
                ) as HTMLButtonElement | null
              )?.focus();
            }
            if (isOpen) {
              setIsOpen(false);
              toggle.current?.focus();
            }
          }}
        >
          <div className="container flex h-[var(--header-h)] items-center justify-between gap-6">
            <Link
              href={href("/")}
              prefetch={false}
              className="group flex min-h-11 items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              {/* Schriftzug bis zum Logo von Brandea (R2d, E26, E49) */}
              <span className="font-display text-[1.375rem] font-semibold tracking-[-0.02em] text-ink">
                {company.brand}
              </span>
            </Link>

            <div className="hidden items-center gap-8 self-stretch xl:flex">
              <Link
                href={href(menu.home.path)}
                prefetch={false}
                className={navLink(path === "/")}
              >
                {menu.home.label}
              </Link>

              {/* Per Maus und Tastatur bedienbar: Enter/Leertaste schaltet um, Escape schliesst (M40) */}
              <div
                className="flex items-center self-stretch"
                onMouseEnter={() => hover(true)}
                onMouseLeave={() => hover(false)}
                onBlur={e => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                    setMegaOpen(false);
                }}
              >
                <button
                  id="leistungen-knopf"
                  type="button"
                  className={`${navLink(isServices)} gap-1.5`}
                  aria-expanded={megaOpen}
                  aria-controls="leistungen-menu"
                  onClick={e => {
                    // Tastatur (detail 0) schaltet um, ein Mausklick lässt das per Hover geöffnete Menü offen
                    if (e.detail === 0) setMegaOpen(!megaOpen);
                    else setMegaOpen(true);
                  }}
                >
                  {menu.services}
                  <CaretDown
                    weight="regular"
                    className={`size-4 motion-safe:transition-transform motion-safe:duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="leistungen-menu"
                  hidden={!megaOpen}
                  className="absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_32px_64px_-32px_rgba(14,17,22,0.35)]"
                >
                  <div className="container grid grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.15fr)] gap-12 py-12">
                    {serviceGroups.map(group => (
                      <div key={group.title}>
                        <p className="t-eyebrow mb-5 border-b border-line pb-3 text-mute">
                          {group.title}
                        </p>
                        <ul className="space-y-0.5">
                          {group.links.map(link => (
                            <li key={link.path}>
                              <Link
                                href={href(link.path)}
                                prefetch={false}
                                onClick={() => setMegaOpen(false)}
                                aria-current={
                                  link.path === path ? "page" : undefined
                                }
                                className="arrow-link group flex min-h-11 items-center justify-between gap-4 py-2 text-[0.9875rem] text-ink/85 transition-colors hover:text-signal aria-[current=page]:text-signal"
                              >
                                {link.label}
                                <ArrowRight
                                  weight="regular"
                                  className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                                  aria-hidden="true"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="on-dark bg-ink p-8 text-white">
                      <p className="t-eyebrow mb-4 text-brass">
                        {chrome.megaTitle}
                      </p>
                      <p className="mb-6 leading-relaxed text-white/80">
                        {chrome.megaText}
                      </p>
                      <div className="flex flex-col gap-3">
                        <Button asChild size="lg" className="arrow-link">
                          <a
                            href={menu.cta.href}
                            onClick={() => setMegaOpen(false)}
                            data-cta="menu"
                          >
                            {menu.cta.label}
                            <ArrowRight weight="regular" aria-hidden="true" />
                          </a>
                        </Button>
                        <a
                          href={company.phone.href}
                          className="inline-flex min-h-11 items-center gap-2 py-2 tabular-nums text-white/85 hover:text-white"
                        >
                          <Phone weight="regular" className="size-4" aria-hidden="true" />
                          {company.phone.display}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {menu.after.map(link => (
                <Link
                  key={link.path}
                  href={href(link.path)}
                  prefetch={false}
                  className={navLink(active(link.path))}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sprachen auf Tablets in der Hauptzeile, auf dem Handy als erste Zeile im Menü */}
              <LanguageSwitcher
                lang={lang}
                path={current}
                label={languageSwitch}
                compact
                as="div"
                flags={false}
                className="hidden md:block xl:hidden"
              />
              <a
                href={company.phone.href}
                className="hidden items-center gap-2 px-3 py-2 text-[0.9375rem] font-medium tabular-nums text-ink transition-colors hover:text-signal 2xl:inline-flex"
              >
                <Phone weight="regular" className="size-4" aria-hidden="true" />
                {company.phone.display}
              </a>
              <Button asChild className="hidden sm:inline-flex">
                <a href={menu.cta.href} data-cta="kopf">
                  {menu.cta.label}
                  <ArrowRight weight="regular" aria-hidden="true" />
                </a>
              </Button>
              <button
                ref={toggle}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="press -mr-2 inline-flex h-11 w-11 items-center justify-center text-ink xl:hidden"
                aria-label={isOpen ? menu.close : menu.open}
                aria-expanded={isOpen}
                aria-controls="mobil-menu"
              >
                {isOpen ? (
                  <X weight="regular" className="size-6" aria-hidden="true" />
                ) : (
                  <List weight="regular" className="size-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div
              id="mobil-menu"
              className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line bg-white xl:hidden"
            >
              <div className="container grid gap-8 py-6 md:grid-cols-2 md:gap-12 md:py-8">
                <div className="space-y-6">
                  <LanguageSwitcher
                    lang={lang}
                    path={current}
                    label={languageSwitch}
                    as="div"
                    className="md:hidden"
                  />
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                    <Button asChild size="lg" className="arrow-link w-full">
                      <a
                        href={menu.cta.href}
                        onClick={() => setIsOpen(false)}
                        data-cta="mobilmenu"
                      >
                        {menu.cta.label}
                        <ArrowRight weight="regular" aria-hidden="true" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full"
                    >
                      <a href={company.phone.href} className="tabular-nums">
                        <Phone weight="regular" aria-hidden="true" />
                        {company.phone.display}
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-mute">{chrome.answer}</p>
                  <ul className="border-t border-line">
                    {[menu.home, ...menu.after].map(link => (
                      <li key={link.path} className="border-b border-line">
                        <Link
                          href={href(link.path)}
                          prefetch={false}
                          onClick={() => setIsOpen(false)}
                          aria-current={link.path === path ? "page" : undefined}
                          className={`${mobileLink} font-display text-xl font-semibold`}
                        >
                          {link.label}
                          <ArrowRight
                            weight="regular"
                            className="size-5 text-mute"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="t-eyebrow mb-2 text-mute">{menu.services}</p>
                  {serviceGroups.map((group, index) => (
                    <details
                      key={group.title}
                      className="group border-b border-line"
                      open={index === 0 || group.links.some(link => active(link.path))}
                    >
                      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                        {group.title}
                        <CaretDown
                          weight="regular"
                          className="size-5 text-mute motion-safe:transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <ul className="pb-3">
                        {group.links.map(link => (
                          <li key={link.path}>
                            <Link
                              href={href(link.path)}
                              prefetch={false}
                              onClick={() => setIsOpen(false)}
                              aria-current={
                                link.path === path ? "page" : undefined
                              }
                              className="block min-h-11 py-2.5 text-[1.0625rem] text-ink aria-[current=page]:text-signal"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
