import Artikel from "@/seiten/artikel";
import type { ArticleContent } from "../../../content/types";
import type { Locale } from "../../../shared/i18n";

// Datum weiter von hier erreichbar, etwa für LegalPage
export { formatDate } from "@/seiten/artikel/datum";

/** Übergang: die Vorlage liegt seit E80 als Seitenordner in seiten/artikel (Factory-Strukturnorm) */
export default function ArticlePage({ article, lang = "de" }: { article: ArticleContent; lang?: Locale }) {
  return <Artikel article={article} lang={lang} />;
}
