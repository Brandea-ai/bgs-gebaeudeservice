"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Schwebende Leiste aus Milchglas am unteren Rand auf dem Handy (F7, M31, E80):
 * Offerte und Telefon. Beim Runterscrollen fährt sie hinaus, beim Hochscrollen
 * wieder hinein (CSS über data-nav, gesetzt in SwissNavigation). Verschwindet, sobald Formular oder Footer im Bild
 * sind. Der Footer klebt nur ab 1024 px (globals.css), unter 768 px steht er
 * im Fluss; darum ist er hier wieder ein verlässliches Mass (T01).
 * Auf Premium-Seiten in Champagner und Anthrazit statt Signalrot (E85).
 */
export default function MobileCta({ lang = "de", path }: { lang?: Locale; path?: PagePath }) {
  const { chrome, menu } = navDicts[lang];
  const premium = path?.startsWith("/premium") ?? false;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Der Footer klebt nur ab 1024 px; hier (unter 768 px) steht er im Fluss und taugt als Mass
    const targets = [
      document.getElementById("kontakt-formular"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0 }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={chrome.mobileCta}
      id="mobil-cta"
      className={`glass fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] z-40 grid grid-cols-[1fr_auto] gap-2 rounded-[3px] p-2 md:hidden ${
        hidden ? "!translate-y-[calc(100%+2rem)]" : ""
      }`}
      aria-hidden={hidden}
    >
      <a
        href={menu.cta.href}
        className={`press arrow-link inline-flex h-12 items-center justify-center gap-2 rounded-[3px] px-5 text-[0.9375rem] font-semibold ${
          premium ? "bg-brass text-anthracite" : "btn-lift bg-signal text-white"
        }`}
        tabIndex={hidden ? -1 : undefined}
        data-cta="mobil"
      >
        {chrome.mobileCta}
        <ArrowRight weight="duotone" className="size-4" aria-hidden="true" />
      </a>
      <a
        href={company.phone.href}
        className="press inline-flex h-12 w-12 items-center justify-center rounded-[3px] border border-ink/15 bg-white/60 text-ink"
        aria-label={`${chrome.phone}: ${company.phone.display}`}
        tabIndex={hidden ? -1 : undefined}
      >
        <Phone weight="duotone" className={`size-5 ${premium ? "text-brass-dark" : "text-signal"}`} aria-hidden="true" />
      </a>
    </nav>
  );
}
