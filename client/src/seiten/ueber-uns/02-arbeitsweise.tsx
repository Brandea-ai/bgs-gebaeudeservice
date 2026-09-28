import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import Zigzag from "@/components/Zigzag";
import type { ImageKey } from "../../../../shared/images";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

// Symbolbilder zu Handlungen, keine Personen als «Team» (E19)
const pictures: ImageKey[] = [
  "hero-artikel-reinigungsfirma",
  "detail-facility-services",
  "hero-facility-services",
  "hero-leistungen",
];

/** Arbeitsweise im Zickzack (E80): vier Grundsätze aus den bestätigten Leistungstexten */
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
        {/* Heldenbilder sind links abgedunkelt: Ausschnitt nach rechts */}
        <div className="[&_img]:object-[85%_50%]">
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
      </div>
    </section>
  );
}
