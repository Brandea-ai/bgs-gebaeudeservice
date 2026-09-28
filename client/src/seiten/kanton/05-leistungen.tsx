import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { heroImage } from "../../../../shared/hero-images";
import { localizePath } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";
import { abschnitte, kantonKontext, type KantonProps } from "./kontext";

/**
 * Gefragte Leistungen als Bildkarten mit den Leistungsbildern; die ganze Karte
 * ist der Link. Ab lg zwei breite Karten oben, drei darunter.
 */
export default function KantonLeistungen(props: KantonProps) {
  const { lang } = props;
  const { ui, kui, page } = kantonKontext(props);
  const count = page.leistungen.length;
  const span = (index: number) => {
    const lastAlone = count % 2 === 1 && index === count - 1 ? "sm:col-span-2" : "";
    return `${lastAlone} ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`;
  };
  return (
    <section id={abschnitte.leistungen} aria-labelledby="leistungen-titel" className="section">
      <div className="container">
        <SectionHead id="leistungen-titel" title={kui.leistungen} />
        <RevealGroup as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6">
          {page.leistungen.map((item, index) => {
            const path = item.path as PagePath;
            return (
              <li
                key={item.path}
                className={`card-lift group min-w-0 overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_18px_40px_-28px_rgba(14,17,22,0.25)] ${span(index)}`}
              >
                <Link href={localizePath(path, lang)} className="arrow-link flex h-full flex-col">
                  <ImageSlot
                    image={heroImage[path]}
                    sizes={index < 2 ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    lang={lang}
                    hover
                    decorative
                    className={`w-full ${index < 2 ? "aspect-[16/9]" : "aspect-[16/10]"} ${span(index).includes("sm:col-span-2") ? "sm:aspect-[21/9] lg:aspect-[16/10]" : ""}`}
                  />
                  <span className="flex flex-1 flex-col p-6 lg:p-7">
                    <span className="t-h3 min-w-0 text-ink transition-colors group-hover:text-signal">
                      {item.title}
                    </span>
                    <span className="mt-3 block font-medium leading-relaxed text-ink-600">{item.text}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-signal">
                      {ui.toService}
                      <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
