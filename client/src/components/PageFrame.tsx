import type { ReactNode } from "react";
import SwissNavigation from "./SwissNavigation";
import { ContactSection, SiteFooter } from "./SwissFooter";
import MobileCta from "./MobileCta";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Rahmen jeder Seite (F7): Kopfzeile, Inhalt mit Kontaktbereich, darunter der
 * Footer. Der Inhalt liegt über dem Footer und gibt ihn beim Scrollen frei
 * (Stapel-Effekt). Auf dem Handy eine feste Leiste mit Offerte und Telefon.
 * mainClassName setzt den Hintergrund des Inhalts, damit der Footer verdeckt bleibt.
 */
export default function PageFrame({
  lang,
  path,
  children,
  mainClassName = "bg-white",
}: {
  lang: Locale;
  path?: PagePath;
  children: ReactNode;
  mainClassName?: string;
}) {
  return (
    <div className="min-h-screen bg-ink">
      <SwissNavigation lang={lang} path={path} />
      <main id="inhalt" className={`stack-main ${mainClassName}`}>
        {children}
        <ContactSection lang={lang} path={path ?? "/"} />
      </main>
      <div className="stack-footer">
        <SiteFooter lang={lang} path={path ?? "/"} />
      </div>
      <MobileCta lang={lang} />
    </div>
  );
}
