"use client";

import Link from "next/link";
import {
  ArrowRight,
  CaretDown,
  MapPin,
  MapTrifold,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import { kantonKeys, kantonPath } from "../../../shared/cantons";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Mega-Menü «Einzugsgebiet» (E80) im Stil des Leistungsmenüs: fünf Kantone mit
 * Kurztext, die Übersicht und rechts eine ruhige Karte mit dem Sitz. Zustand,
 * Hover, Tastatur und Escape bleiben in SwissNavigation. AreaMobileGroup ist
 * dieselbe Liste als aufklappbare Gruppe im Mobilmenü.
 */

type Props = {
  lang: Locale;
  path?: PagePath;
  /** Schliesst das Menü nach einem Klick */
  onNavigate: () => void;
};

export function AreaMegaPanel({ lang, path, onNavigate }: Props) {
  const { areaMenu: area, chrome, menu } = navDicts[lang];
  const links = [
    ...kantonKeys.map(key => ({ path: kantonPath(key) as PagePath, ...area.cantons[key], icon: MapPin })),
    { path: area.overview.path, label: area.overview.label, text: area.overviewText, icon: MapTrifold },
  ];
  return (
    <div className="glass-strong overflow-hidden rounded-[3px]">
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1.05fr)] gap-6 p-6">
        <div>
          <p className="t-eyebrow mb-3 px-3 text-mute">{area.cantonsTitle}</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
            {links.map(({ path: target, label, text, icon: Glyph }) => (
              <li key={target}>
                <Link
                  href={localizePath(target, lang)}
                  prefetch={false}
                  onClick={onNavigate}
                  aria-current={target === path ? "page" : undefined}
                  className="group flex min-h-12 items-start gap-3.5 rounded-[3px] px-3 py-3 text-ink/85 transition-colors hover:bg-ink/[0.045] hover:text-ink aria-[current=page]:text-signal"
                >
                  <Glyph weight="duotone" className="mt-0.5 size-[1.375rem] shrink-0 text-signal" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.96875rem] font-semibold text-ink group-aria-[current=page]:text-signal">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm leading-snug text-mute">{text}</span>
                  </span>
                  <ArrowRight
                    weight="duotone"
                    className="mt-1 size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ruhige Karte mit dem Sitz: Punktraster als Kartengrund, darüber der Ort */}
        <div className="relative flex flex-col overflow-hidden rounded-[3px] border border-ink/[0.08] bg-white/70 p-7">
          <div
            className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle,rgba(14,17,22,0.14)_1px,transparent_1.6px)] [background-size:14px_14px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="t-eyebrow text-mute">{area.seatTitle}</p>
            <p className="mt-4 flex items-center gap-2.5 font-display text-[1.75rem] font-semibold leading-none tracking-[-0.02em] text-ink">
              <MapPin weight="duotone" className="size-7 shrink-0 text-signal" aria-hidden="true" />
              {company.address.city}
            </p>
            <p className="mt-2 text-sm text-mute">
              {company.address.street}, {company.address.postalCode}
            </p>
          </div>
          <p className="relative mt-5 text-[0.9375rem] leading-relaxed text-ink/80">{area.seatText}</p>
          <div className="relative mt-auto border-t border-ink/[0.08] pt-4">
            <a
              href={company.phone.href}
              className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium tabular-nums text-ink transition-colors hover:text-signal"
            >
              <Phone weight="duotone" className="size-5 text-signal" aria-hidden="true" />
              {company.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Offerte als ruhige Leiste unter dem Menü, wie beim Leistungsmenü */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/[0.08] bg-white/50 px-9 py-4">
        <p className="text-[0.9375rem] text-ink/80">
          <span className="font-semibold text-ink">{chrome.megaTitle}</span>
          <span className="mx-2 text-ink/30" aria-hidden="true">
            ·
          </span>
          {chrome.megaText}
        </p>
        <Button asChild className="arrow-link btn-lift">
          <a href={menu.cta.href} onClick={onNavigate} data-cta="menu-gebiet">
            {menu.cta.label}
            <ArrowRight weight="duotone" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function AreaMobileGroup({ lang, path, onNavigate, open }: Props & { open: boolean }) {
  const { areaMenu: area } = navDicts[lang];
  const links = [
    ...kantonKeys.map(key => ({ path: kantonPath(key) as PagePath, ...area.cantons[key] })),
    { path: area.overview.path, label: area.overview.label, text: area.overviewText },
  ];
  return (
    <details className="group" open={open}>
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-display text-xl font-semibold text-ink [&::-webkit-details-marker]:hidden">
        {area.label}
        <CaretDown
          weight="duotone"
          className="size-5 text-mute motion-safe:transition-transform group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <ul className="pb-3">
        {links.map(link => (
          <li key={link.path}>
            <Link
              href={localizePath(link.path, lang)}
              prefetch={false}
              onClick={onNavigate}
              aria-current={link.path === path ? "page" : undefined}
              className="flex min-h-12 items-start gap-3.5 rounded-[3px] px-3 py-2.5 text-ink/85 transition-colors hover:bg-ink/[0.045] aria-[current=page]:text-signal"
            >
              <MapPin weight="duotone" className="mt-0.5 size-5 shrink-0 text-signal" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-semibold text-ink">{link.label}</span>
                <span className="block text-sm leading-snug text-mute">{link.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
