"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Feste Leiste am unteren Rand auf dem Handy (F7, F14, M31): Offerte und
 * Telefon immer erreichbar. Verschwindet, sobald Formular oder Footer im Bild
 * sind. Der Footer klebt nur ab 1024 px (globals.css), unter 768 px steht er
 * im Fluss; darum ist er hier wieder ein verlässliches Mass (T01).
 */
export default function MobileCta({ lang = "de" }: { lang?: Locale }) {
  const { chrome, menu } = navDicts[lang];
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
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t border-line bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_24px_-16px_rgba(14,17,22,0.25)] transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden}
    >
      <a
        href={menu.cta.href}
        className="press arrow-link inline-flex h-12 items-center justify-center gap-2 rounded-[0.25rem] bg-signal px-5 text-[0.9375rem] font-semibold text-white"
        tabIndex={hidden ? -1 : undefined}
        data-cta="mobil"
      >
        {chrome.mobileCta}
        <ArrowRight weight="regular" className="size-4" aria-hidden="true" />
      </a>
      <a
        href={company.phone.href}
        className="press inline-flex h-12 w-12 items-center justify-center rounded-[0.25rem] border border-ink text-ink"
        aria-label={`${chrome.phone}: ${company.phone.display}`}
        tabIndex={hidden ? -1 : undefined}
      >
        <Phone weight="regular" className="size-5" aria-hidden="true" />
      </a>
    </nav>
  );
}
