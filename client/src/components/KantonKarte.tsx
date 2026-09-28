import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "./ImageSlot";
import { getDict } from "../../../content";
import { cantonInfo, kantonGerman, kantonPath, type KantonKey } from "../../../shared/cantons";
import { localizePath, type Locale } from "../../../shared/i18n";

/** Scrollspy der Übersicht: Klassen ausgeschrieben, damit Tailwind sie findet */
const spyBorder: Record<KantonKey, string> = {
  luzern: "[[data-map-active=luzern]_&]:!border-signal",
  zug: "[[data-map-active=zug]_&]:!border-signal",
  aargau: "[[data-map-active=aargau]_&]:!border-signal",
  nidwalden: "[[data-map-active=nidwalden]_&]:!border-signal",
  obwalden: "[[data-map-active=obwalden]_&]:!border-signal",
};

/**
 * Karte einer Kantonsseite (E80) mit Name, Kurztext aus dem Mega-Menü und
 * Link; die ganze Karte ist der Link. layout «row» liegt auf der Übersicht
 * /einzugsgebiet neben der Karte (Bild links ab lg, darunter oben), «tile» als Bildkarte,
 * «compact» als ruhige Verweiszeile ohne Foto unter «Weitere Kantone» der
 * Kantonsseiten (Audit visuell, /einzugsgebiet/zug: keine Wiederholung der
 * Seebilder, mobil deutlich kürzer). places ergänzt Orte. data-kanton-karte
 * dient dem Scrollspy der Übersicht (seiten/einzugsgebiet); mit spy erhält die
 * Karte des Kantons, der gerade auf der Karte hervortritt, eine rote Kontur.
 */
export default function KantonKarte({
  kanton,
  lang,
  layout = "tile",
  places,
  headingLevel = "h3",
  spy = false,
}: {
  kanton: KantonKey;
  lang: Locale;
  layout?: "row" | "tile" | "compact";
  places?: string[];
  headingLevel?: "h2" | "h3";
  spy?: boolean;
}) {
  const dict = getDict(lang);
  const page = dict.kantone.seiten[kanton];
  const path = kantonPath(kanton);
  const Heading = headingLevel;
  const code = cantonInfo[kantonGerman[kanton]]?.code;

  if (layout === "compact") {
    return (
      <Link
        href={localizePath(path, lang)}
        data-kanton-karte={kanton}
        className="arrow-link group grid h-full min-h-11 grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-x-4 border-t border-line py-6"
      >
        <span className="pt-0.5 font-mono text-[0.9375rem] font-semibold tracking-[0.12em] text-signal" aria-hidden="true">
          {code}
        </span>
        <div className="min-w-0">
          <Heading className="t-h3 text-ink transition-colors group-hover:text-signal">
            {dict.pages[path].label}
          </Heading>
          <p className="mt-1.5 font-medium leading-relaxed text-ink-600">{page.menuText}</p>
        </div>
        <ArrowRight weight="duotone" className="mt-1 size-5 shrink-0 text-signal" aria-hidden="true" />
      </Link>
    );
  }

  const row = layout === "row";
  return (
    <Link
      href={localizePath(path, lang)}
      data-kanton-karte={kanton}
      className={`card-lift arrow-link group grid h-full min-w-0 overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_18px_40px_-28px_rgba(14,17,22,0.25)] transition-colors ${
        row ? "grid-rows-[auto_1fr] lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-rows-none" : "grid-rows-[auto_1fr]"
      } ${spy ? spyBorder[kanton] : ""}`}
    >
      <ImageSlot
        image={`hero-kanton-${kanton}`}
        sizes={row ? "(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 82vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        lang={lang}
        hover
        decorative
        className={`w-full ${row ? "aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-44" : "aspect-[16/10]"}`}
      />
      <div className={`flex min-w-0 flex-col ${row ? "p-6 lg:p-7" : "p-6"}`}>
        <p className="t-eyebrow text-signal" aria-hidden="true">
          {code}
        </p>
        <Heading className="t-h3 mt-2 text-ink transition-colors group-hover:text-signal">
          {dict.pages[path].label}
        </Heading>
        <p className="mt-2.5 font-medium leading-relaxed text-ink-600">{page.menuText}</p>
        {places && places.length > 0 && (
          <p className="mt-2 text-[0.9375rem] font-medium leading-relaxed text-ink-600">{places.join(", ")}</p>
        )}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-signal">
          {dict.kantone.ui.toCanton}
          <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
