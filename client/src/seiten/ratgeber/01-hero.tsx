import PageHero from "@/components/PageHero";
import RichText from "@/components/RichText";
import { ratgeberKontext, type RatgeberProps } from "./kontext";

/** Kopf mit Bild (E80): Titel, Einleitung und der Satz zu den Leistungen */
export default function RatgeberHero(props: RatgeberProps) {
  const { lang } = props;
  const { t } = ratgeberKontext(props);
  return (
    <PageHero path="/blog" lang={lang} title={t.h1} lead={t.intro} size="compact">
      <p className="max-w-[56ch] font-medium leading-relaxed text-white/90">
        <RichText text={t.services} lang={lang} linkClassName="font-semibold text-white underline decoration-white/50 underline-offset-4" />
      </p>
    </PageHero>
  );
}
