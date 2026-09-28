import FaqBlock from "@/components/FaqBlock";
import { faqImage } from "../../../../shared/scene-images";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Einwände mit Kontakt, Fragen öffnen sich beim Überfahren (E82). Bild nur mit
 * eigenem Motiv aus scene-images.ts (faqImage), sonst die Variante ohne Bild,
 * damit kein Bild der Seite doppelt erscheint (E85).
 */
export default function LeistungFragen(props: LeistungProps) {
  const { ui, premium } = leistungKontext(props);
  return (
    <FaqBlock
      title={ui.faq}
      items={props.content.faq}
      image={faqImage[props.content.path]}
      lang={props.lang}
      tone={premium ? "premium" : "light"}
    />
  );
}
