import Werkzeug from "../leistung/werkzeug";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Firmenangaben zum Nachprüfen (Audit 25, Baustein 8.1; E85): Werkzeug-Tabelle
 * der Leistungsvorlage, zum Drucken für die Lieferantenakte. Jede Angabe mit dem
 * Feld im UID-Register, in dem sie steht; hier nennt die Seite auch Marke und
 * eingetragene Firma. Zefix und der Handelsregisterauszug folgen erst, wenn
 * Brandea geklärt hat, worauf sich «seit 2006» bezieht (Befund UU-01).
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
