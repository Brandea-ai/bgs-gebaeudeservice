import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import Faq from "./Faq";
import FaqHover from "./FaqHover";
import ImageSlot from "./ImageSlot";
import { Button } from "./ui/button";
import { company } from "../../../shared/company";
import { navDicts } from "../../../content/navigation";
import type { ImageKey } from "../../../shared/images";
import type { Locale } from "../../../shared/i18n";

/**
 * Fragen-Bereich (E82, E85): links Titel, darunter klebend Bild, Hinweis und
 * Kontakt, rechts die Fragen, die sich beim Überfahren öffnen.
 *
 * Reihenfolge im DOM: Titel, Fragen, Kontaktteil. So stehen die Fragen auf dem
 * Handy direkt unter dem Titel, Bild und Knöpfe danach (Audit visuell,
 * Umbau 1), und die Tab-Reihenfolge folgt der sichtbaren (WCAG 2.4.3, 1.3.2;
 * P3, F6). Ab lg setzt das Raster Titel und Kontaktteil in die linke Spalte
 * (Zeile 1 und 2) und die Fragen über beide Zeilen rechts, ohne order.
 *
 * Mit image die Variante mit Bild, aber erst ab sieben Fragen: darunter bliebe
 * neben der hohen Bildspalte eine Leerfläche (Audit visuell, Umbau 1; F7).
 * Ohne Bild eine schmalere linke Spalte und eine breitere Liste.
 */
export default function FaqBlock({
  id = "fragen",
  title,
  items,
  image,
  lang,
  tone = "light",
}: {
  id?: string;
  title: string;
  items: { question: string; answer: string }[];
  image?: ImageKey;
  lang: Locale;
  tone?: "light" | "premium";
}) {
  const { chrome, menu } = navDicts[lang];
  const premium = tone === "premium";
  const shownImage = items.length >= 7 ? image : undefined;
  const aside = shownImage ? "lg:col-span-5" : "lg:col-span-4";
  const list = shownImage
    ? "lg:col-span-7 lg:col-start-6"
    : "lg:col-span-8 lg:col-start-5";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titel`}
      className={`section ${premium ? "border-t border-brass/25 bg-ivory" : "bg-white"}`}
    >
      <div className="container grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
        <h2
          id={`${id}-titel`}
          className={`${aside} lg:col-start-1 lg:row-start-1 ${premium ? "font-premium text-[clamp(2.1rem,1.4rem+2vw,3.5rem)] font-semibold leading-[1.05] text-anthracite" : "t-h2 text-ink"}`}
        >
          {title}
        </h2>
        <div className={`min-w-0 ${list} lg:row-span-2 lg:row-start-1`}>
          <FaqHover>
            <Faq
              items={items}
              lang={lang}
              tone={premium ? "premium" : "light"}
            />
          </FaqHover>
        </div>
        <div
          className={`${aside} lg:sticky lg:col-start-1 lg:row-start-2 lg:top-[calc(var(--header-offset)+2rem)] lg:self-start`}
        >
          {shownImage && (
            <ImageSlot
              image={shownImage}
              lang={lang}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="hidden aspect-[16/9] w-full rounded-[3px] lg:block"
            />
          )}
          <p
            className={`text-[1.0625rem] font-semibold leading-relaxed ${premium ? "text-anthracite" : "text-ink"} ${shownImage ? "lg:mt-8" : ""}`}
          >
            {chrome.faqMore}
          </p>
          <div
            className={`mt-5 grid gap-3 ${shownImage ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-1"}`}
          >
            <a
              href={company.phone.href}
              className={`group flex min-h-14 items-center gap-3 rounded-[3px] border-2 bg-white px-4 py-3 transition-colors ${premium ? "border-brass-dark/30 text-anthracite hover:border-anthracite hover:bg-anthracite" : "border-ink/15 hover:border-ink hover:bg-ink"} hover:text-white`}
            >
              <Phone
                weight="duotone"
                className={`size-6 shrink-0 ${premium ? "text-brass-dark" : "text-signal"} group-hover:text-white`}
                aria-hidden="true"
              />
              <span className="font-bold tabular-nums">
                {company.phone.display}
              </span>
            </a>
            <Button
              asChild
              size="lg"
              className={`arrow-link h-14 ${premium ? "bg-anthracite text-white hover:bg-anthracite-700" : "btn-lift"}`}
            >
              <a href="#kontakt-formular" data-cta="faq">
                {menu.cta.label}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
