import Link from "next/link";
import { ArrowRight, Briefcase, Buildings, Check, Diamond } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import ImageSlot from "@/components/ImageSlot";
import SectionHead from "@/components/SectionHead";
import type { ImageKey } from "../../../../shared/images";
import { startseiteKontext, type StartseiteProps } from "./kontext";
import FuerWenWahl from "./fuer-wen-wahl";

type AudienceKey = "verwaltungen" | "unternehmen" | "premium";

// Motive, die sonst nicht auf der Startseite stehen (Szenen der Leistungen, keine Heldenbilder)
const look: Record<AudienceKey, { icon: Icon; image: ImageKey }> = {
  verwaltungen: { icon: Buildings, image: "szene-hauswartung" },
  unternehmen: { icon: Briefcase, image: "szene-bueroreinigung" },
  premium: { icon: Diamond, image: "szene-luxusimmobilien" },
};

/**
 * Für wen (K6, E28, E34, visuell.md Container 04): drei Kundengruppen als
 * Wahlbaustein statt eines zweiten Kartenrasters. Links die Gruppen als Reiter,
 * rechts Bild, Anliegen, drei konkrete Punkte und der Weg zu einem Werkzeug der
 * passenden Seite (Pflichtenheft, Leistungsverzeichnis, Materialkunde; inhalt.md 04).
 * Premium in Anthrazit mit Champagner und Serifenschrift, nie Signalrot. Mobil
 * drei kurze Reiter über dem Feld, ohne Bild (Umbau 7).
 */
export default function StartFuerWen(props: StartseiteProps) {
  const { lang } = props;
  const { seiten, href } = startseiteKontext(props);
  const { audiences } = seiten.home;
  const ids = audiences.items.map(item => `fuer-wen-${item.key}`);

  const tabs = audiences.items.map(item => {
    const Glyph = look[item.key].icon;
    return (
      <>
        <Glyph
          weight="duotone"
          className={`size-7 shrink-0 max-lg:hidden ${item.key === "premium" ? "text-brass-dark" : "text-signal"}`}
          aria-hidden="true"
        />
        <span className="lg:hidden">{item.short}</span>
        <span className="min-w-0 flex-1 font-display text-[1.25rem] font-bold leading-snug max-lg:hidden">{item.title}</span>
        <ArrowRight
          weight="duotone"
          className="size-5 shrink-0 text-signal opacity-0 transition-opacity group-aria-selected:opacity-100 max-lg:hidden"
          aria-hidden="true"
        />
      </>
    );
  });

  const panels = audiences.items.map(item => {
    const premium = item.key === "premium";
    return (
      <div
        className={`grid overflow-hidden rounded-[3px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] ${
          premium ? "on-dark bg-anthracite text-white" : "border border-line bg-white text-ink"
        }`}
      >
        <ImageSlot
          image={look[item.key].image}
          lang={lang}
          decorative
          sizes="(min-width: 1024px) 28vw, 40vw"
          className="hidden h-full min-h-[22rem] w-full md:block"
        />
        <div className="flex min-w-0 flex-col p-5 sm:p-8 lg:p-10">
          <p
            className={
              premium
                ? "font-premium text-[1.625rem] font-medium leading-snug text-white"
                : "text-[1.0625rem] font-semibold leading-relaxed text-ink sm:text-[1.125rem]"
            }
          >
            {item.text}
          </p>
          <ul className={`mt-5 divide-y border-y sm:mt-6 ${premium ? "divide-white/15 border-white/15" : "divide-line border-line"}`}>
            {item.points.map(point => (
              <li key={point} className={`flex items-start gap-3 py-2.5 font-medium leading-relaxed sm:py-3 ${premium ? "text-white/90" : "text-ink"}`}>
                <Check weight="duotone" className={`mt-[0.2em] size-5 shrink-0 ${premium ? "text-brass" : "text-signal"}`} aria-hidden="true" />
                <span className="min-w-0">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href={item.link.hash ? `${href(item.link.path)}#${item.link.hash}` : href(item.link.path)}
            className={`arrow-link mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-6 font-semibold transition-colors ${
              premium ? "text-brass hover:text-white" : "text-signal hover:text-signal-dark"
            }`}
          >
            {item.link.text}
            <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section id="fuer-wen" aria-labelledby="fuer-wen-titel" className="section bg-white max-sm:py-12">
      <div className="container">
        <SectionHead id="fuer-wen-titel" title={audiences.title} intro={audiences.intro} />
        <FuerWenWahl label={audiences.title} ids={ids} tabs={tabs} panels={panels} />
      </div>
    </section>
  );
}
