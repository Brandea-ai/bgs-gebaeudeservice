import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import { premiumPageIcons } from "@/components/PremiumIcons";
import { premiumHeading } from "@/components/premiumStyles";
import { RevealGroup } from "@/components/Reveal";
import { heroImage } from "../../../../shared/hero-images";
import { localizePath } from "../../../../shared/i18n";
import LeistungGebiet from "./gebiet";
import { leistungKontext, type LeistungProps } from "./kontext";

/**
 * Verwandte Leistungen als Bildkarten, die ganze Karte ist der Link. Premium
 * hell: weisse Karte mit Champagner-Kontur, beim Überfahren hebt sie sich und
 * unten zieht eine Champagner-Linie auf, Premium-Seiten mit eigenem Symbol.
 */
export default function LeistungVerwandt(props: LeistungProps) {
  const { content, lang } = props;
  const { dict, ui, premium } = leistungKontext(props);
  return (
    <section
      id="verwandt"
      aria-labelledby="verwandt-titel"
      className={`section-tight ${premium ? "border-t border-brass/25 bg-white text-anthracite" : "border-t border-line bg-white"}`}
    >
      <div className="container">
        <h2 id="verwandt-titel" className={premium ? `${premiumHeading} mb-12` : "t-h2 mb-10 text-ink"}>
          {ui.related}
        </h2>
        <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.related.map(item => {
            const Glyph = premium ? premiumPageIcons[item.path] : undefined;
            return (
              <li
                key={item.path}
                className={`card-lift group min-w-0 overflow-hidden rounded-[3px] ${
                  premium ? "premium-card" : "border border-line bg-white shadow-[0_18px_40px_-28px_rgba(14,17,22,0.25)]"
                }`}
              >
                <Link href={localizePath(item.path, lang)} className="arrow-link flex h-full flex-col">
                  <ImageSlot
                    image={heroImage[item.path]}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    lang={lang}
                    hover
                    decorative
                    className="aspect-[16/10] w-full"
                  />
                  <span className={`flex flex-1 flex-col ${premium ? "p-7" : "p-6"}`}>
                    {Glyph && <Glyph className="mb-4 size-9 text-brass-dark" aria-hidden="true" />}
                    <span
                      className={`min-w-0 transition-colors ${
                        premium
                          ? "font-premium text-[1.75rem] font-bold leading-tight text-anthracite group-hover:text-brass-dark"
                          : "t-h3 text-ink group-hover:text-signal"
                      }`}
                    >
                      {dict.pages[item.path].label}
                    </span>
                    <span className="mt-3 block font-medium leading-relaxed text-ink-600">
                      {item.text}
                    </span>
                    <span className={`mt-auto inline-flex items-center gap-2 pt-6 font-semibold ${premium ? "text-brass-dark" : "text-signal"}`}>
                      {ui.toService}
                      <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </RevealGroup>
        <LeistungGebiet lang={lang} premium={premium} />
      </div>
    </section>
  );
}
