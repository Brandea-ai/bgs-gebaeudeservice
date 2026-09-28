import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import Zigzag from "@/components/Zigzag";
import type { ImageKey } from "../../../../shared/images";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Ein Motiv je Grundsatz (E19, Audit visuell /ueber-uns): Besichtigung einer
 * Fläche, Umfang am Plan festlegen, Zutritt übergeben, Beläge im Vergleich.
 * Nicht verwenden: das Hero-Bild der Seite und das Bild des Kontaktbereichs
 * (detail-facility-services, SwissFooter), sonst steht ein Bild zweimal (F4).
 */
const pictures: ImageKey[] = [
  "frage-sonderreinigungen",
  "frage-facility-services",
  "frage-bueroreinigung",
  "hero-artikel-bodenarten",
];

/** Arbeitsweise im Zickzack (E80): vier Grundsätze, nur Belegtes (E18, E41, E56) */
export default function UeberUnsArbeitsweise(props: UeberUnsProps) {
  const { lang } = props;
  const { work } = ueberUnsKontext(props).about;
  return (
    <section
      id="arbeitsweise"
      aria-labelledby="arbeitsweise-titel"
      className="section bg-white"
    >
      <div className="container">
        <SectionHead
          id="arbeitsweise-titel"
          title={work.title}
          intro={work.intro}
          className="mb-14 lg:mb-20"
        />
        <Zigzag
          lang={lang}
          items={work.items.map((item, index) => ({
            image: pictures[index % pictures.length],
            title: item.title,
            body: item.paragraphs.map(paragraph => (
              <p key={paragraph}>
                <RichText text={paragraph} lang={lang} />
              </p>
            )),
          }))}
        />
      </div>
    </section>
  );
}
