import PageFrame from "@/components/PageFrame";
import { getDict } from "../../../../content";
import { kantonPath } from "../../../../shared/cantons";
import type { KantonProps } from "./kontext";
import KantonHero from "./01-hero";
import KantonVertrauen from "./02-vertrauen";
import KantonRegionen from "./03-regionen";
import KantonObjekte from "./04-objekte";
import KantonLeistungen from "./05-leistungen";
import KantonPlanung from "./06-planung";
import KantonFragen from "./07-fragen";
import KantonWeitere from "./08-weitere";

/**
 * Kantonsseiten /einzugsgebiet/<kanton> (E80, Factory-Strukturnorm): nur
 * Reihenfolge. Texte aus content/<sprache>/kantone.ts, der Abschluss mit dem
 * Formular kommt aus PageFrame. Brotkrumen, hreflang und Sitemap leiten sich
 * aus der Seitenliste ab (shared/seo.ts, shared/i18n.ts).
 */
export default function Kanton(props: KantonProps) {
  return (
    <PageFrame
      lang={props.lang}
      path={kantonPath(props.kanton)}
      contact={getDict(props.lang).kantone.ui.cta}
    >
      <KantonHero {...props} />
      <KantonVertrauen {...props} />
      <KantonRegionen {...props} />
      <KantonObjekte {...props} />
      <KantonLeistungen {...props} />
      <KantonPlanung {...props} />
      <KantonFragen {...props} />
      <KantonWeitere {...props} />
    </PageFrame>
  );
}
