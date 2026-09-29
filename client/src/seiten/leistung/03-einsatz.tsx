import RichText from "@/components/RichText";
import Zigzag from "@/components/Zigzag";
import { premiumLightLink } from "@/components/premiumStyles";
import { detailImage } from "../../../../shared/hero-images";
import { sceneImage } from "../../../../shared/scene-images";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Einsatz im Zickzack (E80): die ersten Abschnitte der Seite mit Bild, im
 * Wechsel links und rechts. Weitere Abschnitte folgen im Inhalt darunter.
 * Zeile 1 zeigt das Detailbild, Zeile 2 das eigene Motiv aus scene-images.ts;
 * ohne Eintrag steht Zeile 2 ohne Bild (E85: kein Hero-Bild ein zweites Mal).
 * Premium in der hellen Welt auf Weiss, Punkte in Champagner.
 */
export default function LeistungEinsatz(props: LeistungProps) {
  const { content, lang } = props;
  const { premium, sectionId } = leistungKontext(props);
  const detail = detailImage[content.path];
  const sections = (content.sections ?? []).slice(0, 2);
  if (!detail || sections.length === 0) return null;
  const pictures = [detail, sceneImage[content.path]];
  return (
    <section
      aria-label={sections[0].title}
      className={`section ${premium ? "bg-white text-anthracite" : "bg-stone"}`}
    >
      <div className="container">
        <Zigzag
          lang={lang}
          tone={premium ? "premium" : "light"}
          headingLevel="h2"
          items={sections.map((section, index) => ({
            id: sectionId(index),
            image: pictures[index],
            title: section.title,
            body: (
              <div className="space-y-4">
                {section.paragraphs?.map(paragraph => (
                  <p key={paragraph}>
                    <RichText text={paragraph} lang={lang} linkClassName={premium ? premiumLightLink : undefined} />
                  </p>
                ))}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map(item => (
                      <li key={item} className="flex gap-3">
                        <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${premium ? "bg-brass-dark" : "bg-signal"}`} aria-hidden="true" />
                        <span><RichText text={item} lang={lang} linkClassName={premium ? premiumLightLink : undefined} /></span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
