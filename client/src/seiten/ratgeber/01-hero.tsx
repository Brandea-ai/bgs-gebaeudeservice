import IntroBand, { FactList } from "@/components/IntroBand";
import PageHero from "@/components/PageHero";
import { getDict } from "../../../../content";
import { ratgeberKontext, type RatgeberProps } from "./kontext";

/** Kopf mit Bild (E84): Titel und ein Satz; Einleitung und Hinweis zu Quellen und Stand im IntroBand (ohne Linkzeile, die Leistungen stehen weiter unten) */
export default function RatgeberHero(props: RatgeberProps) {
  const { lang } = props;
  const { t } = ratgeberKontext(props);
  const dict = getDict(lang);
  return (
    <>
      <PageHero
        path="/blog"
        lang={lang}
        title={t.h1}
        lead={<p>{dict.heroLines["/blog"]}</p>}
        size="compact"
      />
      <IntroBand
        title={dict.ui.atAGlance}
        paragraphs={[t.intro, t.note]}
        lang={lang}
        aside={<FactList facts={t.facts} />}
      />
    </>
  );
}
