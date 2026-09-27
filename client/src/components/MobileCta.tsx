"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Feste Leiste am unteren Rand auf dem Handy (F7, M31): Offerte und Telefon
 * immer erreichbar. Verschwindet, sobald das Formular selbst im Bild ist.
 */
export default function MobileCta({ lang = "de" }: { lang?: Locale }) {
  const { chrome, menu } = navDicts[lang];
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Ausblenden, sobald Formular oder Footer im Bild sind
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
      { threshold: 0.05 }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto] gap-2 border-t border-line bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-hidden={hidden}
    >
      <a
        href={menu.cta.href}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-[0.25rem] bg-signal px-5 text-[0.9375rem] font-semibold text-white"
        tabIndex={hidden ? -1 : undefined}
      >
        {chrome.mobileCta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href={company.phone.href}
        className="inline-flex h-12 w-12 items-center justify-center rounded-[0.25rem] border border-ink text-ink"
        aria-label={`${chrome.phone}: ${company.phone.display}`}
        tabIndex={hidden ? -1 : undefined}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
