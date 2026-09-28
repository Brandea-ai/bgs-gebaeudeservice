import type { ReactNode } from "react";
import SwissNavigation from "./SwissNavigation";
import { ContactSection, SiteFooter } from "./SwissFooter";
import MobileCta from "./MobileCta";
import type { Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Rahmen jeder Seite (F7, F14): Kopfzeile, Inhalt mit Kontaktbereich, darunter
 * der Footer. Auf grossen Bildschirmen liegt der Inhalt über dem Footer und
 * gibt ihn beim Scrollen frei (Stapel-Effekt, globals.css). Auf dem Handy eine
 * feste Leiste mit Offerte und Telefon, die verschwindet, sobald Formular oder
 * Footer im Bild sind. contact überschreibt Titel
 * und Einleitung des Formularabschnitts mit dem Abschluss der Seite.
 */
export default function PageFrame({
  lang,
  path,
  children,
  mainClassName = "bg-white",
  contact,
}: {
  lang: Locale;
  path?: PagePath;
  children: ReactNode;
  mainClassName?: string;
  contact?: { title: string; text: string };
}) {
  return (
    <div className="min-h-screen bg-ink">
      <SwissNavigation lang={lang} path={path} />
      <main id="inhalt" className={`stack-main ${mainClassName}`}>
        {children}
        <ContactSection lang={lang} path={path ?? "/"} heading={contact} />
      </main>
      <div className="stack-footer">
        <SiteFooter lang={lang} path={path ?? "/"} />
      </div>
      <MobileCta lang={lang} path={path} />
    </div>
  );
}
