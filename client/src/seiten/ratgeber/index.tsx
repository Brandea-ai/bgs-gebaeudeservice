import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { itemListJsonLd } from "../../../../shared/structured-data";
import type { RatgeberProps } from "./kontext";
import RatgeberHero from "./01-hero";
import RatgeberVertrauen from "./02-vertrauen";
import RatgeberArtikel from "./03-artikel";
import RatgeberLeistungen from "./04-leistungen";

/** Ratgeber-Übersicht (Factory-Strukturnorm, E80): nur Reihenfolge; Abschluss mit home.cta */
export default function Ratgeber(props: RatgeberProps) {
  const dict = getDict(props.lang);
  const paths = Object.values(dict.ratgeber.articles).map(article => article.path);
  return (
    <PageFrame lang={props.lang} path="/blog" contact={dict.seiten.home.cta}>
      <JsonLd data={itemListJsonLd("/blog", paths, props.lang)} />
      <RatgeberHero {...props} />
      <RatgeberVertrauen {...props} />
      <RatgeberArtikel {...props} />
      <RatgeberLeistungen {...props} />
    </PageFrame>
  );
}
