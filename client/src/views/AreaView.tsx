import PageFrame from "@/components/PageFrame";
import GebietKopf from "@/seiten/einzugsgebiet/01-kopf";
import GebietKantone from "@/seiten/einzugsgebiet/02-kantone";
import GebietVergleich from "@/seiten/einzugsgebiet/03-vergleich";
import GebietOrte from "@/seiten/einzugsgebiet/04-orte";
import GebietSitz from "@/seiten/einzugsgebiet/05-sitz";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Einzugsgebiet (F5, F10, F15, E30): ein Sitz, fünf Kantone, alle Leistungen
 * im ganzen Gebiet (R4b, W04, R4d). Nur Reihenfolge (Factory-Strukturnorm),
 * die Sektionen stehen in client/src/seiten/einzugsgebiet/: Kopf mit Bild,
 * Kantone mit klebender Karte und Scrollspy, Vergleich der Kantone
 * (Baustein 6.1), Seeufer und Ferienorte (6.2), Sitz mit Karte nach Klick.
 * Texte aus content/<sprache>/seiten.ts (area) und kantone.ts, keine eigenen
 * Ortsseiten (M48).
 */
export default function AreaView({ lang }: { lang: Locale }) {
  return (
    <PageFrame lang={lang} path="/einzugsgebiet" contact={getDict(lang).seiten.area.cta}>
      <GebietKopf lang={lang} />
      <GebietKantone lang={lang} />
      <GebietVergleich lang={lang} />
      <GebietOrte lang={lang} />
      <GebietSitz lang={lang} />
    </PageFrame>
  );
}
