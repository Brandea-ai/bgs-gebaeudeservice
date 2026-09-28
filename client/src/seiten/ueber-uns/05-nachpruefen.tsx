import Werkzeug from "../leistung/werkzeug";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Firmenangaben zum Nachprüfen (Audit 25, Baustein 8.1; E85): Werkzeug-Tabelle
 * der Leistungsvorlage mit Links auf Zefix, UID-Register und den
 * Handelsregisterauszug, zum Drucken für die Lieferantenakte. Ersetzt Zeitleiste,
 * Ansprechperson und Registerband: Die Registerdaten stehen nur noch hier.
 * Verzeichnisse wie local.ch fehlen bewusst, solange sie noch Winterdienst und
 * «24/7» nennen (E29, E18, NAP-Prüfung 28.09.2026). Der Druckkopf trägt den
 * kurzen Seitennamen, damit «2006» im Hauptinhalt nur zweimal steht.
 */
export default function UeberUnsNachpruefen(props: UeberUnsProps) {
  const { dict, about } = ueberUnsKontext(props);
  return (
    <div className="section border-t border-line bg-white">
      <div className="container">
        <Werkzeug tool={about.check} lang={props.lang} premium={false} pageTitle={dict.pages["/ueber-uns"].label} />
      </div>
    </div>
  );
}
