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
 * Fragen-Bereich (E82): links klebend Titel, Bild, Hinweis und Kontakt, rechts
 * die Fragen, die sich beim Überfahren öffnen. Ein Baustein für alle Seiten.
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
  image: ImageKey;
  lang: Locale;
  tone?: "light" | "premium";
}) {
  const { chrome, menu } = navDicts[lang];
  const premium = tone === "premium";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titel`}
      className={`section ${premium ? "border-t border-brass/25 bg-ivory" : "bg-white"}`}
    >
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:self-start lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
          <h2
            id={`${id}-titel`}
            className={premium ? "font-premium text-[clamp(2.1rem,1.4rem+2vw,3.5rem)] font-semibold leading-[1.05] text-anthracite" : "t-h2 text-ink"}
          >
            {title}
          </h2>
          <ImageSlot
            image={image}
            lang={lang}
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="mt-8 aspect-[4/3] w-full rounded-[3px]"
          />
          <p className="mt-8 text-[1.0625rem] font-semibold leading-relaxed text-ink">
            {chrome.faqMore}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={company.phone.href}
              className={`group flex min-h-14 items-center gap-3 rounded-[3px] border-2 bg-white px-4 py-3 transition-colors ${premium ? "border-brass-dark/30 text-anthracite hover:border-anthracite hover:bg-anthracite" : "border-ink/15 hover:border-ink hover:bg-ink"} hover:text-white`}
            >
              <Phone weight="duotone" className={`size-6 shrink-0 ${premium ? "text-brass-dark" : "text-signal"} group-hover:text-white`} aria-hidden="true" />
              <span className="font-bold tabular-nums">{company.phone.display}</span>
            </a>
            <Button asChild size="lg" className={`arrow-link h-14 ${premium ? "bg-anthracite text-white hover:bg-anthracite-700" : "btn-lift"}`}>
              <a href="#kontakt-formular" data-cta="faq">
                {menu.cta.label}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="min-w-0 lg:col-span-7">
          <FaqHover>
            <Faq items={items} lang={lang} tone={premium ? "premium" : "light"} />
          </FaqHover>
        </div>
      </div>
    </section>
  );
}
