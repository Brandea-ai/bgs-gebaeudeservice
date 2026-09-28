import { ContactSection } from "@/components/SwissFooter";
import AnfrageListe from "./anfrage-liste";
import { kontaktKontext, type KontaktProps } from "./kontext";

/**
 * Formular direkt unter den Kontaktwegen (Audit visuell /kontakt, Umbau 3):
 * früher stand es rund 3900 px tiefer. Daneben, was in die Anfrage gehört:
 * dieselben Punkte, nach denen das Formular fragt, als Liste mit Haarlinien
 * statt Karten, Titel und Text in einer Zeile, damit die Randspalte nicht
 * länger wird als das Formular. Unter 1024 px steht die Liste zugeklappt vor
 * dem Formular (Prüfbefund K6, AnfrageListe). Am Seitenende setzt PageFrame
 * auf /kontakt keinen zweiten Formularbereich (ContactSection liefert dort
 * nichts).
 */
export default function KontaktFormular(props: KontaktProps) {
  const { contact } = kontaktKontext(props);
  const { brief } = contact;
  // Französisch mit schmalem geschütztem Leerzeichen vor dem Doppelpunkt, wie im Bestand
  const colon = props.lang === "fr" ? "\u202f:" : ":";
  return (
    <ContactSection
      inline
      lang={props.lang}
      path="/kontakt"
      heading={contact.cta}
      aside={<AnfrageListe title={brief.title} items={brief.items} colon={colon} />}
    />
  );
}
