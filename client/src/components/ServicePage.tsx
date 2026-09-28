import Leistung from "@/seiten/leistung";
import type { ServicePageContent } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

/** Übergang: die Vorlage liegt seit E80 als Seitenordner in seiten/leistung (Factory-Strukturnorm) */
export default function ServicePage({
  content,
  lang = "de",
}: {
  content: ServicePageContent;
  lang?: Locale;
}) {
  return <Leistung content={content} lang={lang} />;
}
