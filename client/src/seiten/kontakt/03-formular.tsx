import {
  Broom,
  Buildings,
  CalendarCheck,
  Clock,
  IdentificationBadge,
  Key,
  MapPin,
  Ruler,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { ContactSection } from "@/components/SwissFooter";
import { kontaktKontext, type KontaktProps } from "./kontext";

const symbols: Record<string, Icon> = {
  rolle: IdentificationBadge,
  objekt: Buildings,
  ort: MapPin,
  groesse: Ruler,
  leistung: Broom,
  rhythmus: Clock,
  start: CalendarCheck,
  zugang: Key,
};

/**
 * Formular direkt unter den Kontaktwegen (Audit visuell /kontakt, Umbau 3):
 * früher stand es rund 3900 px tiefer. Daneben, was in die Anfrage gehört:
 * dieselben Punkte, nach denen das Formular fragt, als Liste mit Haarlinien
 * statt Karten, Titel und Text in einer Zeile, damit die Randspalte nicht
 * länger wird als das Formular. Am Seitenende setzt PageFrame auf /kontakt
 * keinen zweiten Formularbereich (ContactSection liefert dort nichts).
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
      aside={
        <div>
          {/* Die Einleitung dazu steht als Satz unter dem Titel des Bereichs (contact.cta) */}
          <h3 className="font-display text-lg font-bold text-ink">{brief.title}</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {brief.items.map(item => {
              const Glyph = symbols[item.key] ?? SealCheck;
              return (
                <li key={item.key} className="flex items-start gap-4 py-2.5">
                  <Glyph weight="duotone" className="mt-0.5 size-6 shrink-0 text-signal" aria-hidden="true" />
                  <p className="min-w-0 leading-relaxed">
                    <span className="font-bold text-ink">
                      {item.title}
                      {colon}
                    </span>{" "}
                    <span className="font-medium text-ink-600">{item.text}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      }
    />
  );
}
