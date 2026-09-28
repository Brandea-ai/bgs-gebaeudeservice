import RichText from "@/components/RichText";
import Zigzag from "@/components/Zigzag";
import { detailImage, heroImage } from "../../../../shared/hero-images";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Einsatz im Zickzack (E80): die ersten Abschnitte der Seite mit Bild, im
 * Wechsel links und rechts. Weitere Abschnitte folgen im Inhalt darunter.
 */
export default function LeistungEinsatz(props: LeistungProps) {
  const { content, lang } = props;
  const { premium, sectionId } = leistungKontext(props);
  const detail = detailImage[content.path];
  const sections = (content.sections ?? []).slice(0, 2);
  if (!detail || sections.length === 0) return null;
  const pictures = [detail, heroImage[content.path]];
  return (
    <section
      aria-label={sections[0].title}
      className={`section ${premium ? "on-dark bg-anthracite text-white" : "bg-stone"}`}
    >
      <div className="container">
        <Zigzag
          lang={lang}
          tone={premium ? "premium" : "light"}
          headingLevel="h2"
          items={sections.map((section, index) => ({
            image: pictures[index],
            title: section.title,
            body: (
              <div id={sectionId(index)} className="space-y-4">
                {section.paragraphs?.map(paragraph => (
                  <p key={paragraph}>
                    <RichText text={paragraph} lang={lang} />
                  </p>
                ))}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map(item => (
                      <li key={item} className="flex gap-3">
                        <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${premium ? "bg-brass" : "bg-signal"}`} aria-hidden="true" />
                        <span><RichText text={item} lang={lang} /></span>
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
