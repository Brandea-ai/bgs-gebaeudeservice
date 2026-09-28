import { getDict } from "../../../../content";
import Werkzeug from "../leistung/werkzeug";
import { abschnitte, gebietKontext, type GebietProps } from "./kontext";

/**
 * Baustein 6.1 (25-AUDIT/inhalt.md): die fünf Kantone im Vergleich als
 * Werkzeug-Tabelle der Leistungsvorlage (mobil Karten, Drucken, Quellen,
 * Stand). Nur Angaben, die auf den Kantonsseiten mit Quelle stehen.
 */
export default function GebietVergleich(props: GebietProps) {
  const { lang } = props;
  const { area } = gebietKontext(props);
  const { vergleich } = area;
  const kantonUi = getDict(lang).kantone.ui;
  return (
    <div className="section-tight bg-white">
      <div className="container">
        <Werkzeug
          lang={lang}
          premium={false}
          pageTitle={area.h1}
          tool={{
            kind: "table",
            id: abschnitte.vergleich,
            title: vergleich.title,
            intro: vergleich.intro,
            columns: vergleich.columns,
            rows: vergleich.rows,
            note: vergleich.note,
            sources: vergleich.sources.map(key => kantonUi.quellen[key]),
            printable: true,
            updated: kantonUi.datenStand,
          }}
        />
      </div>
    </div>
  );
}
