"use client";

import { Fragment, useEffect, useRef, useState } from "react";
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
import { company, newBrandActive } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { activeLocales, languageNames, localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import LanguageSwitcher from "./LanguageSwitcher";
import { iconFor } from "./serviceIcons";
import { AreaMegaPanel, AreaMobileGroup } from "./AreaMenu";
import { FeatureMegaCard, PremiumMegaCard } from "./MegaCards";

type MegaMenu = "leistungen" | "einzugsgebiet";

/**
 * Kopfzeile (Rebranding E80): eine schwebende Leiste aus Milchglas mit 3 px
 * Radius, fest oben. Beim Runterscrollen fährt sie aus dem Bild, beim
 * Hochscrollen wieder hinein, ebenso die Mobil-Leiste (CSS über data-nav am
 * html-Element, ein einziger Scroll-Beobachter). Offene Menüs und Tastaturfokus
 * halten sie sichtbar. Ab xl steht darüber ganz oben eine schmale Infozeile auf
 * dem dunklen Hero. Leistungen als Mega-Menü mit eigener Premium-Welt in
 * Anthrazit und Champagner (Karte mit klickbarem Kopf) und einer Bildkarte
 * unter «Hauswartung und Pflege» (MegaCards.tsx), daneben das Einzugsgebiet
 * mit den Kantonsseiten (AreaMenu.tsx). Immer nur ein Mega-Menü offen. Escape schliesst, das
 * Mobilmenü macht den Inhalt dahinter inert. Auf Premium-Seiten (/premium…)
 * tragen Knopf, Unterstrich, Punkt und Telefon Champagner statt Signalrot, wie
 * die Mobil-Leiste (Brief 23, E85; F5, P5). Auf Premium-Seiten erscheint Clavea.
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
  const premiumPage = path?.startsWith("/premium") ?? false;
  const ctaTone = premiumPage ? "bg-brass text-anthracite hover:bg-brass-light" : "btn-lift";
  const active = (target: string) =>
    path !== undefined && (path === target || path.startsWith(`${target}/`));
  const { menu, areaMenu, serviceGroups, languageSwitch, chrome } = navDicts[lang];
  const [cleaning, care, premium] = serviceGroups;
  const href = (target: PagePath) => localizePath(target, lang);
  const [isOpen, setIsOpen] = useState(false);
  // Offenes Mega-Menü: Leistungen oder Einzugsgebiet, nie beide
  const [openMenu, setOpenMenu] = useState<MegaMenu | null>(null);
  const megaOpen = openMenu === "leistungen";
  const areaOpen = openMenu === "einzugsgebiet";
  const setMegaOpen = (open: boolean) => setOpenMenu(open ? "leistungen" : null);
  const setAreaOpen = (open: boolean) => setOpenMenu(open ? "einzugsgebiet" : null);
  const toggle = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Scrollrichtung: ein Beobachter setzt data-nav und data-nav-top am html-Element
  useEffect(() => {
    const root = document.documentElement;
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      root.dataset.navTop = y < 24 ? "1" : "0";
      if (root.dataset.navLock === "1" || y < 96) {
        root.dataset.nav = "shown";
        last = y;
        return;
      }
      // Ausgleichs-Scroll (etwa FaqHover): Zustand der Kopfzeile beibehalten
      if (root.dataset.navHold === "1") {
        last = y;
        return;
      }
      const delta = y - last;
      if (Math.abs(delta) < 8) return;
      root.dataset.nav = delta > 0 ? "hidden" : "shown";
      last = y;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Offene Menüs halten die Kopfzeile sichtbar
  useEffect(() => {
    const root = document.documentElement;
    const locked = isOpen || openMenu !== null;
    root.dataset.navLock = locked ? "1" : "0";
    if (locked) root.dataset.nav = "shown";
  }, [isOpen, openMenu]);

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
    setOpenMenu(null);
  }, [pathname]);

  // Ein Zeitgeber für beide Menüs: Der Wechsel von einem zum anderen öffnet das neue
  const hover = (target: MegaMenu, open: boolean) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(
      () => setOpenMenu(current => (open ? target : current === target ? null : current)),
      open ? 120 : 180
    );
  };

  const isServices = active("/leistungen") || active("/premium");
  const isArea = active("/einzugsgebiet");
  const navLink = (on: boolean) =>
    `relative inline-flex min-h-11 items-center px-1 py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-1 after:bottom-1.5 after:h-px after:origin-left ${premiumPage ? "after:bg-brass-dark" : "after:bg-signal"} after:transition-transform after:duration-300 ${
      on
        ? "text-ink after:scale-x-100"
        : "text-ink/90 hover:text-ink after:scale-x-0 hover:after:scale-x-100"
    }`;

  const serviceLink = (link: { path: PagePath; label: string }) => {
    const Glyph = iconFor(link.path);
    return (
      <li key={link.path}>
        <Link
          href={href(link.path)}
          prefetch={false}
          onClick={() => setMegaOpen(false)}
          aria-current={link.path === path ? "page" : undefined}
          className="group flex min-h-12 items-center gap-3.5 rounded-[3px] px-3 py-2.5 text-[0.96875rem] font-semibold text-ink transition-colors hover:bg-ink/[0.045] hover:text-ink aria-[current=page]:text-signal"
        >
          <Glyph
            weight="duotone"
            className="size-[1.375rem] shrink-0 text-signal"
            aria-hidden="true"
          />
          <span className="flex-1">{link.label}</span>
          <ArrowRight
            weight="duotone"
            className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden="true"
          />
        </Link>
      </li>
    );
  };

  return (
    <>
      <a href="#inhalt" className="skip-link">
        {chrome.skip}
      </a>
      <header className="site-header">
        {/* Infozeile ab xl, nur ganz oben auf dem dunklen Hero */}
        <div className="util-row on-dark hidden text-[0.8125rem] text-white/90 xl:block">
          <div className="container flex h-[var(--util-h)] items-center justify-between gap-6">
            <p className="flex items-center gap-2">
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${premiumPage ? "bg-brass" : "bg-signal"}`}
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
              <span className="text-white/90">{chrome.seat}</span>
            </div>
          </div>
        </div>

        <div className="container pt-[var(--nav-top)]">
          <nav
            aria-label={menu.label}
            className="glass relative rounded-[3px]"
            onKeyDown={e => {
              if (e.key !== "Escape") return;
              if (openMenu) {
                setOpenMenu(null);
                (
                  document.getElementById(
                    `${openMenu}-knopf`
                  ) as HTMLButtonElement | null
                )?.focus();
              }
              if (isOpen) {
                setIsOpen(false);
                toggle.current?.focus();
              }
            }}
          >
            <div className="flex h-[var(--header-h)] items-center justify-between gap-4 pl-5 pr-2.5 lg:pl-6">
              <Link
                href={href(premiumPage && newBrandActive ? "/premium" : "/")}
                prefetch={false}
                className="flex min-h-11 min-w-0 items-center"
                onClick={() => setIsOpen(false)}
              >
                {/* Dachmarke oder Premium-Linie passend zur aktuellen Seite. */}
                {newBrandActive ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={premiumPage ? "/marke/clavea-wortmarke.svg" : "/marke/mantena-logo.svg"}
                    alt={premiumPage ? company.premiumBrand ?? company.brand : company.brand}
                    width={premiumPage ? 204 : 177}
                    height={premiumPage ? 32 : 36}
                    className={premiumPage ? "h-6 w-auto max-w-full object-contain sm:h-7" : "h-7 w-auto max-w-full object-contain sm:h-8"}
                  />
                ) : (
                  <span className="font-display text-[1.3125rem] font-semibold tracking-[-0.025em] text-ink">
                    {company.brand}
                  </span>
                )}
              </Link>

              <div className="hidden items-center gap-5 self-stretch xl:flex">
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
                  onMouseEnter={() => hover("leistungen", true)}
                  onMouseLeave={() => hover("leistungen", false)}
                  onBlur={e => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                      setOpenMenu(current => (current === "leistungen" ? null : current));
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
                      weight="duotone"
                      className={`size-4 motion-safe:transition-transform motion-safe:duration-300 ${megaOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id="leistungen-menu"
                    hidden={!megaOpen}
                    className="absolute inset-x-0 top-full pt-2.5"
                  >
                    <div className="glass-strong overflow-hidden rounded-[3px]">
                      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.05fr)] gap-6 p-6">
                        <div>
                          <p className="t-eyebrow mb-3 px-3 text-mute">
                            {cleaning.title}
                          </p>
                          <ul className="space-y-0.5">
                            {cleaning.links.map(serviceLink)}
                          </ul>
                        </div>

                        {/* Hauswartung und Pflege, darunter eine Bildkarte statt leerer Fläche */}
                        <div className="flex flex-col">
                          <p className="t-eyebrow mb-3 px-3 text-mute">
                            {care.title}
                          </p>
                          <ul className="space-y-0.5">
                            {care.links.map(serviceLink)}
                          </ul>
                          <div className="mt-auto pt-5">
                            <FeatureMegaCard lang={lang} path={path} onNavigate={() => setMegaOpen(false)} />
                          </div>
                        </div>

                        {/* Premium als eigene Welt, der Kopf der Karte führt auf /premium (MegaCards.tsx) */}
                        <PremiumMegaCard lang={lang} path={path} onNavigate={() => setMegaOpen(false)} />
                      </div>

                      {/* Offerte als ruhige Leiste unter dem Menü */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/[0.08] bg-white/50 px-9 py-4">
                        <p className="text-[0.9375rem] text-ink/90">
                          <span className="font-semibold text-ink">
                            {chrome.megaTitle}
                          </span>
                          <span className="mx-2 text-ink/30" aria-hidden="true">
                            ·
                          </span>
                          {chrome.megaText}
                        </p>
                        <div className="flex items-center gap-5">
                          <a
                            href={company.phone.href}
                            className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium tabular-nums text-ink transition-colors hover:text-signal"
                          >
                            <Phone weight="duotone" className="size-5 text-signal" aria-hidden="true" />
                            {company.phone.display}
                          </a>
                          <Button asChild className="arrow-link btn-lift">
                            <a
                              href={menu.cta.href}
                              onClick={() => setMegaOpen(false)}
                              data-cta="menu"
                            >
                              {menu.cta.label}
                              <ArrowRight weight="duotone" aria-hidden="true" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Einzugsgebiet: gleiche Bedienung wie Leistungen, eigene id (E80) */}
                <div
                  className="flex items-center self-stretch"
                  onMouseEnter={() => hover("einzugsgebiet", true)}
                  onMouseLeave={() => hover("einzugsgebiet", false)}
                  onBlur={e => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                      setOpenMenu(current => (current === "einzugsgebiet" ? null : current));
                  }}
                >
                  <button
                    id="einzugsgebiet-knopf"
                    type="button"
                    className={`${navLink(isArea)} gap-1.5`}
                    aria-expanded={areaOpen}
                    aria-controls="einzugsgebiet-menu"
                    onClick={e => {
                      if (e.detail === 0) setAreaOpen(!areaOpen);
                      else setAreaOpen(true);
                    }}
                  >
                    {areaMenu.label}
                    <CaretDown
                      weight="duotone"
                      className={`size-4 motion-safe:transition-transform motion-safe:duration-300 ${areaOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id="einzugsgebiet-menu"
                    hidden={!areaOpen}
                    className="absolute inset-x-0 top-full pt-2.5"
                  >
                    <AreaMegaPanel lang={lang} path={path} onNavigate={() => setAreaOpen(false)} />
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
                <a
                  href={company.phone.href}
                  className={`hidden items-center gap-2 px-3 py-2 text-[0.9375rem] font-medium tabular-nums text-ink transition-colors 2xl:inline-flex ${premiumPage ? "hover:text-brass-dark" : "hover:text-signal"}`}
                >
                  <Phone weight="duotone" className={`size-5 ${premiumPage ? "text-brass-dark" : "text-signal"}`} aria-hidden="true" />
                  {company.phone.display}
                </a>
                {activeLocales.length > 1 && (
                  <select
                    data-nav-language
                    aria-label={languageSwitch}
                    value={lang}
                    onChange={event => window.location.assign(localizePath(current, event.target.value as Locale))}
                    className="h-11 w-20 shrink-0 rounded-[3px] border border-line bg-transparent px-2 font-mono text-xs font-semibold text-ink md:hidden"
                  >
                    {activeLocales.map(locale => (
                      <option key={locale} value={locale} aria-label={languageNames[locale]}>
                        {({ de: "🇩🇪", en: "🇬🇧", fr: "🇫🇷", it: "🇮🇹" } as const)[locale]} {locale.toUpperCase()}
                      </option>
                    ))}
                  </select>
                )}
                {/* Sprachen bleiben neben dem Telefon in der schwebenden Menüleiste. */}
                <LanguageSwitcher
                  lang={lang}
                  path={current}
                  label={languageSwitch}
                  compact
                  as="div"
                  flags
                  className="hidden shrink-0 md:block"
                />
                <Button asChild className={`arrow-link hidden sm:inline-flex ${ctaTone}`}>
                  <a href={menu.cta.href} data-cta="kopf">
                    {menu.cta.label}
                    <ArrowRight weight="duotone" aria-hidden="true" />
                  </a>
                </Button>
                <button
                  ref={toggle}
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="press inline-flex h-11 w-11 items-center justify-center rounded-[3px] text-ink transition-colors hover:bg-ink/[0.05] xl:hidden"
                  aria-label={isOpen ? menu.close : menu.open}
                  aria-expanded={isOpen}
                  aria-controls="mobil-menu"
                >
                  {isOpen ? (
                    <X weight="duotone" className="size-6" aria-hidden="true" />
                  ) : (
                    <List weight="duotone" className="size-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {isOpen && (
              <div
                id="mobil-menu"
                className="glass-strong absolute inset-x-0 top-full mt-2.5 max-h-[calc(100dvh-var(--header-h)-var(--nav-top)*3)] overflow-y-auto rounded-[3px] xl:hidden"
              >
                <div className="grid gap-7 p-5 md:grid-cols-2 md:gap-10 md:p-8">
                  <div className="space-y-6">
                    <LanguageSwitcher
                      lang={lang}
                      path={current}
                      label={languageSwitch}
                      as="div"
                      className="md:hidden"
                    />
                    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                      <Button asChild size="lg" className={`arrow-link w-full ${ctaTone}`}>
                        <a
                          href={menu.cta.href}
                          onClick={() => setIsOpen(false)}
                          data-cta="mobilmenu"
                        >
                          {menu.cta.label}
                          <ArrowRight weight="duotone" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="w-full">
                        <a href={company.phone.href} className="tabular-nums">
                          <Phone weight="duotone" aria-hidden="true" />
                          {company.phone.display}
                        </a>
                      </Button>
                    </div>
                    <p className="text-sm text-mute">{chrome.answer}</p>
                    <ul className="border-t border-ink/10">
                      {[menu.home, ...menu.after].map((link, index) => (
                        <Fragment key={link.path}>
                          <li className="border-b border-ink/10">
                            <Link
                              href={href(link.path)}
                              prefetch={false}
                              onClick={() => setIsOpen(false)}
                              aria-current={link.path === path ? "page" : undefined}
                              className="flex min-h-12 items-center justify-between gap-4 py-3 font-display text-xl font-semibold text-ink aria-[current=page]:text-signal"
                            >
                              {link.label}
                              <ArrowRight weight="duotone" className="size-5 text-mute" aria-hidden="true" />
                            </Link>
                          </li>
                          {/* Einzugsgebiet direkt nach Home als aufklappbare Gruppe mit den Kantonen */}
                          {index === 0 && (
                            <li className="border-b border-ink/10">
                              <AreaMobileGroup
                                lang={lang}
                                path={path}
                                open={isArea}
                                onNavigate={() => setIsOpen(false)}
                              />
                            </li>
                          )}
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="t-eyebrow text-mute">{menu.services}</p>
                    {[cleaning, care].map((group, index) => (
                      <details
                        key={group.title}
                        className="group border-b border-ink/10"
                        open={index === 0 || group.links.some(link => active(link.path))}
                      >
                        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                          {group.title}
                          <CaretDown
                            weight="duotone"
                            className="size-5 text-mute motion-safe:transition-transform group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <ul className="pb-3">{group.links.map(serviceLink)}</ul>
                      </details>
                    ))}
                    <PremiumMegaCard lang={lang} path={path} onNavigate={() => setIsOpen(false)} compact />
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
