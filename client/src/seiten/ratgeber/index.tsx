import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { itemListJsonLd } from "../../../../shared/structured-data";
import type { RatgeberProps } from "./kontext";
import RatgeberHero from "./01-hero";
import RatgeberArtikel from "./02-artikel";
import RatgeberLeistungen from "./03-leistungen";

/**
 * Ratgeber-Übersicht (Factory-Strukturnorm, E80): nur Reihenfolge; Abschluss mit
 * home.cta. Ohne Vertrauensleiste: Ein Ratgeber gewinnt Vertrauen über Inhalt,
 * Quellen und Stand (25-AUDIT/inhalt.md 10, E85).
 */
export default function Ratgeber(props: RatgeberProps) {
  const dict = getDict(props.lang);
  const paths = Object.values(dict.ratgeber.articles).map(article => article.path);
  return (
    <PageFrame lang={props.lang} path="/blog" contact={dict.seiten.home.cta}>
      <JsonLd data={itemListJsonLd("/blog", paths, props.lang)} />
      <RatgeberHero {...props} />
      <RatgeberArtikel {...props} />
      <RatgeberLeistungen {...props} />
    </PageFrame>
  );
}
