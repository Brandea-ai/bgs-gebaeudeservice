import FaqBlock from "@/components/FaqBlock";
import { detailImage, heroImage } from "../../../../shared/hero-images";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Einwände mit Bild und Kontakt, Fragen öffnen sich beim Überfahren (E82) */
export default function LeistungFragen(props: LeistungProps) {
  const { ui, premium } = leistungKontext(props);
  const path = props.content.path;
  return (
    <FaqBlock
      title={ui.faq}
      items={props.content.faq}
      image={detailImage[path] ?? heroImage[path]}
      lang={props.lang}
      tone={premium ? "premium" : "light"}
    />
  );
}
