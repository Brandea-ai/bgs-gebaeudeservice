import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import { RevealGroup } from "@/components/Reveal";
import { heroImage } from "../../../../shared/hero-images";
import { localizePath } from "../../../../shared/i18n";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Verwandte Leistungen als Bildkarten, die ganze Karte ist der Link */
export default function LeistungVerwandt(props: LeistungProps) {
  const { content, lang } = props;
  const { dict, ui, premium } = leistungKontext(props);
  return (
    <section
      id="verwandt"
      aria-labelledby="verwandt-titel"
      className={`section-tight ${premium ? "on-dark bg-anthracite text-white" : "border-t border-line bg-white"}`}
    >
      <div className="container">
        <h2 id="verwandt-titel" className={`t-h2 mb-10 ${premium ? "font-premium font-medium text-white" : "text-ink"}`}>
          {ui.related}
        </h2>
        <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.related.map(item => (
            <li
              key={item.path}
              className={`card-lift group min-w-0 overflow-hidden rounded-[3px] ${
                premium ? "premium-surface" : "border border-line bg-white shadow-[0_18px_40px_-28px_rgba(14,17,22,0.25)]"
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
                <span className="flex flex-1 flex-col p-6">
                  <span className={`t-h3 min-w-0 transition-colors ${premium ? "text-white group-hover:text-brass" : "text-ink group-hover:text-signal"}`}>
                    {dict.pages[item.path].label}
                  </span>
                  <span className={`mt-3 block font-medium leading-relaxed ${premium ? "text-white/90" : "text-ink-600"}`}>
                    {item.text}
                  </span>
                  <span className={`mt-auto inline-flex items-center gap-2 pt-6 font-semibold ${premium ? "text-brass" : "text-signal"}`}>
                    {ui.toService}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
