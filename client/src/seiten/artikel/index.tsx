import JsonLd from "@/components/JsonLd";
import PageFrame from "@/components/PageFrame";
import { articleJsonLd } from "../../../../shared/structured-data";
import type { ArtikelProps } from "./kontext";
import ArtikelKopf from "./01-kopf";
import ArtikelInhalt from "./02-inhalt";
import ArtikelVerwandt from "./03-verwandt";

/**
 * Vorlage der Ratgeberartikel (Factory-Strukturnorm, E80): nur Reihenfolge.
 * Artikeltexte bleiben unverändert (Quellen), die Vorlage regelt nur die
 * Gestaltung. Den Abschluss beschriftet PageFrame mit dem cta des Artikels.
 */
export default function Artikel(props: ArtikelProps) {
  const { article, lang } = props;
  return (
    <PageFrame lang={lang} path={article.path} contact={article.cta}>
      <JsonLd data={articleJsonLd(article.path, article, lang)} />
      <article>
        <ArtikelKopf {...props} />
        <ArtikelInhalt {...props} />
      </article>
      <ArtikelVerwandt {...props} />
    </PageFrame>
  );
}
