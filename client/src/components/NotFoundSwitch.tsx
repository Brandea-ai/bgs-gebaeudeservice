"use client";

import { useEffect, useState } from "react";
import NotFoundView from "@/views/NotFoundView";
import { hreflang, isActiveLocale, type Locale } from "../../../shared/i18n";

/**
 * 404 in der Sprache der Adresse (T14): Die eine statische 404-Seite kommt auf
 * Deutsch aus dem Build (vollständiges HTML, auch ohne JavaScript). Liegt die
 * Adresse unter /en, /fr oder /it, wechselt sie im Browser in diese Sprache,
 * samt lang-Attribut. Next.js kennt bei einem Grundlayout je Sprache nur eine
 * globale 404-Seite.
 */
export default function NotFoundSwitch() {
  const [lang, setLang] = useState<Locale>("de");

  useEffect(() => {
    const prefix = window.location.pathname.split("/")[1];
    if (prefix && prefix !== "de" && isActiveLocale(prefix)) {
      setLang(prefix);
      document.documentElement.lang = hreflang[prefix];
    }
  }, []);

  return <NotFoundView lang={lang} />;
}
