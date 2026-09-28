import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ArticlePage from "@/components/ArticlePage";
import LegalPage from "@/components/LegalPage";
import Startseite from "@/seiten/startseite";
import UeberUns from "@/seiten/ueber-uns";
import Kontakt from "@/seiten/kontakt";
import Ratgeber from "@/seiten/ratgeber";
import AreaView from "./AreaView";
import LeistungenUebersicht from "@/seiten/leistungen-uebersicht";
import PremiumUebersicht from "@/seiten/premium-uebersicht";
import Kanton from "@/seiten/kanton";
import { getDict } from "../../../content";
import { metaFor, type PagePath } from "../../../shared/seo";
import {
  pageForSlug,
  pagePaths,
  segmentsFor,
  type Locale,
} from "../../../shared/i18n";
import { kantonKeys, kantonPath } from "../../../shared/cantons";

/**
 * Eine Stelle für alle Seiten (M60): Zu jeder deutschen Adresse die Darstellung
 * und die Metadaten in der gewünschten Sprache. Die Catch-all-Routen je Sprache
 * in app/(de), app/(en), app/(fr) und app/(it) nutzen nur diese Funktionen.
 */
const views: Partial<Record<PagePath, (lang: Locale) => React.ReactNode>> = {
  "/": lang => <Startseite lang={lang} />,
  "/ueber-uns": lang => <UeberUns lang={lang} />,
  "/kontakt": lang => <Kontakt lang={lang} />,
  "/einzugsgebiet": lang => <AreaView lang={lang} />,
  "/leistungen": lang => <LeistungenUebersicht lang={lang} />,
  "/premium": lang => <PremiumUebersicht lang={lang} />,
  "/blog": lang => <Ratgeber lang={lang} />,
  // Kantonsseiten /einzugsgebiet/<kanton> (E80)
  ...Object.fromEntries(
    kantonKeys.map(key => [
      kantonPath(key),
      (lang: Locale) => <Kanton kanton={key} lang={lang} />,
    ])
  ),
  "/impressum": lang => (
    <LegalPage
      content={getDict(lang).recht.impressum}
      path="/impressum"
      lang={lang}
    />
  ),
  "/datenschutz": lang => (
    <LegalPage
      content={getDict(lang).recht.datenschutz}
      path="/datenschutz"
      lang={lang}
    />
  ),
};

export function renderPage(path: PagePath, lang: Locale): React.ReactNode {
  const view = views[path];
  if (view) return view(lang);
  const dict = getDict(lang);
  const service = [
    ...Object.values(dict.leistungen),
    ...Object.values(dict.premium),
  ].find(c => c.path === path);
  if (service) return <ServicePage content={service} lang={lang} />;
  const article = Object.values(dict.ratgeber.articles).find(
    a => a.path === path
  );
  if (article) return <ArticlePage article={article} lang={lang} />;
  throw new Error(`Keine Darstellung für ${path}`);
}

export function pageMetadata(path: PagePath, lang: Locale): Metadata {
  return metaFor(path, lang);
}

/** Parameter für generateStaticParams einer Sprache */
export function staticParams(lang: Locale) {
  return pagePaths.map(path => ({ slug: segmentsFor(path, lang) }));
}

export { pageForSlug };
