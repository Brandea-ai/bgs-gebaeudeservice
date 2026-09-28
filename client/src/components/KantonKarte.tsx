import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "./ImageSlot";
import { getDict } from "../../../content";
import { cantonInfo, kantonGerman, kantonPath, type KantonKey } from "../../../shared/cantons";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * Karte einer Kantonsseite (E80) mit Kantonsbild, Name, Kurztext aus dem
 * Mega-Menü und Link; die ganze Karte ist der Link. layout «row» liegt auf der
 * Übersicht /einzugsgebiet neben der Karte (Bild links ab sm), «tile» steht
 * auf den Kantonsseiten unter «Weitere Kantone». places ergänzt Orte.
 */
export default function KantonKarte({
  kanton,
  lang,
  layout = "tile",
  places,
  headingLevel = "h3",
}: {
  kanton: KantonKey;
  lang: Locale;
  layout?: "row" | "tile";
  places?: string[];
  headingLevel?: "h2" | "h3";
}) {
  const dict = getDict(lang);
  const page = dict.kantone.seiten[kanton];
  const path = kantonPath(kanton);
  const Heading = headingLevel;
  const row = layout === "row";
  return (
    <Link
      href={localizePath(path, lang)}
      className={`card-lift arrow-link group grid h-full min-w-0 overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_18px_40px_-28px_rgba(14,17,22,0.25)] ${
        row ? "sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : "grid-rows-[auto_1fr]"
      }`}
    >
      <ImageSlot
        image={`hero-kanton-${kanton}`}
        sizes={row ? "(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        lang={lang}
        hover
        decorative
        className={`w-full ${row ? "aspect-[16/9] sm:aspect-auto sm:h-full sm:min-h-44" : "aspect-[16/10]"}`}
      />
      <div className={`flex min-w-0 flex-col ${row ? "p-6 lg:p-7" : "p-6"}`}>
        <p className="t-eyebrow text-signal" aria-hidden="true">
          {cantonInfo[kantonGerman[kanton]]?.code}
        </p>
        <Heading className="t-h3 mt-2 text-ink transition-colors group-hover:text-signal">
          {dict.pages[path].label}
        </Heading>
        <p className="mt-2.5 font-medium leading-relaxed text-ink-600">{page.menuText}</p>
        {places && places.length > 0 && (
          <p className="mt-2 text-sm leading-relaxed text-mute">{places.join(", ")}</p>
        )}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-signal">
          {dict.kantone.ui.toCanton}
          <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
