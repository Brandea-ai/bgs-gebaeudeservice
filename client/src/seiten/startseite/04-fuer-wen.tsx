import Link from "next/link";
import { ArrowRight, Briefcase, Buildings, Check, Diamond, HouseLine } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import ImageSlot from "@/components/ImageSlot";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import type { ImageKey } from "../../../../shared/images";
import { startseiteKontext, type StartseiteProps } from "./kontext";

type AudienceKey = "verwaltungen" | "unternehmen" | "privat" | "premium";

// Andere Bilder als die Leistungskarten darüber; quadratisch und rechts ausgerichtet,
// weil die Heldenbilder links für Schrift abgedunkelt sind
const look: Record<AudienceKey, { icon: Icon; image: ImageKey }> = {
  verwaltungen: { icon: Buildings, image: "hero-hauswartung" },
  unternehmen: { icon: Briefcase, image: "hero-bueroreinigung" },
  privat: { icon: HouseLine, image: "detail-premium-luxusimmobilien" },
  premium: { icon: Diamond, image: "detail-premium-privatjet" },
};

/**
 * Für wen (E28, E34, E80): vier Kundengruppen mit konkretem Nutzen aus den
 * bestätigten Leistungstexten. Private nur im Premium-Segment; die beiden
 * Premium-Karten in Anthrazit mit Champagner.
 */
export default function StartFuerWen(props: StartseiteProps) {
  const { lang } = props;
  const { seiten, href } = startseiteKontext(props);
  const { audiences } = seiten.home;
  return (
    <section id="fuer-wen" aria-labelledby="fuer-wen-titel" className="section border-t border-line bg-stone">
      <div className="container">
        <SectionHead id="fuer-wen-titel" title={audiences.title} intro={audiences.intro} />
        <RevealGroup as="ul" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.items.map(item => {
            const { icon: Glyph, image } = look[item.key];
            const premium = item.key === "privat" || item.key === "premium";
            return (
              <li
                key={item.key}
                className={`flex min-w-0 flex-col overflow-hidden rounded-[3px] ${
                  premium
                    ? "on-dark bg-anthracite text-white"
                    : "border border-line bg-white text-ink shadow-[0_18px_40px_-32px_rgba(14,17,22,0.35)]"
                }`}
              >
                <ImageSlot
                  image={image}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  lang={lang}
                  decorative
                  className="aspect-[4/3] w-full md:aspect-square [&_img]:object-[88%_50%]"
                />
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <Glyph weight="duotone" className={`size-8 ${premium ? "text-brass" : "text-signal"}`} aria-hidden="true" />
                  <h3 className={`t-h3 mt-5 hyphens ${premium ? "text-white" : "text-ink"}`}>{item.title}</h3>
                  <p className={`mt-3 font-medium leading-relaxed ${premium ? "text-white/90" : "text-ink-600"}`}>{item.text}</p>
                  <ul className={`mt-6 space-y-3 border-t pt-6 ${premium ? "border-white/15" : "border-line"}`}>
                    {item.points.map(point => (
                      <li
                        key={point}
                        className={`flex items-start gap-3 text-[0.9375rem] font-medium leading-relaxed ${premium ? "text-white/90" : "text-ink-700"}`}
                      >
                        <Check weight="duotone" className={`mt-[0.2em] size-5 shrink-0 ${premium ? "text-brass" : "text-signal"}`} aria-hidden="true" />
                        <span className="min-w-0">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href(item.link.path)}
                    className={`arrow-link mt-auto inline-flex min-h-11 items-center gap-2 pt-6 font-semibold transition-colors ${
                      premium ? "text-brass hover:text-white" : "text-signal hover:text-signal-dark"
                    }`}
                  >
                    {item.link.text}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
