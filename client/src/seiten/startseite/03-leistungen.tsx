import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import SectionHead from "@/components/SectionHead";
import { iconFor } from "@/components/serviceIcons";
import type { ImageKey } from "../../../../shared/images";
import type { PagePath } from "../../../../shared/seo";
import { startseiteKontext, type StartseiteProps } from "./kontext";
import Schiene from "./schiene";

const premiumPages: PagePath[] = ["/premium/luxusimmobilien", "/premium/privatjet", "/premium/yacht"];

/**
 * Rhythmus je Gruppe (visuell.md Umbau 5): laufende Reinigung zwei grosse Karten,
 * einmalige Einsätze fünf schmale Karten nur mit Namen, Betreuung drei mittlere.
 * So bleibt ab lg keine Zelle leer. Mobil ist jede Gruppe eine Schiene (Umbau 7).
 */
const rhythm = [
  { cols: "lg:grid-cols-2", image: "aspect-[2/1] sm:aspect-[16/10] lg:aspect-[16/9]", sizes: "(min-width: 1024px) 45vw, 82vw", text: true },
  { cols: "lg:grid-cols-5", image: "aspect-[2/1] sm:aspect-[16/10] lg:aspect-[4/5]", sizes: "(min-width: 1024px) 18vw, 82vw", text: false },
  { cols: "lg:grid-cols-3", image: "aspect-[2/1] sm:aspect-[16/10] lg:aspect-[4/3]", sizes: "(min-width: 1024px) 30vw, 82vw", text: true },
];

/**
 * Bilder der Karten: kein Motiv, das sonst auf der Startseite steht. Für wen,
 * Fragen und Kontaktbereich zeigen andere Bilder (detail-facility-services gehört
 * dem Kontaktbereich, darum hier die Szene der Facility Services).
 */
const cardImage: Record<string, ImageKey> = {
  "/leistungen/unterhaltsreinigung": "szene-unterhaltsreinigung",
  "/leistungen/bueroreinigung": "detail-bueroreinigung",
  "/leistungen/sonderreinigungen": "detail-grundreinigung",
  "/leistungen/umzugsreinigung": "detail-umzugsreinigung",
  "/leistungen/baureinigung": "detail-baureinigung",
  "/leistungen/fenster-und-fassadenreinigung": "detail-fenster-fassaden",
  "/leistungen/industrie-und-hallenreinigung": "detail-industrie-hallen",
  "/leistungen/hauswartung": "detail-hauswartung",
  "/leistungen/aussen-und-gruenflaechenpflege": "detail-aussen-gruenflaechen",
  "/leistungen/facility-services": "szene-facility-services",
};

/**
 * Leistungen nach Gruppen (E80, E85): Gruppentitel einmal über der Reihe, auf den
 * Karten nur Bild, Symbol, Name und bei grossen und mittleren Karten ein eigener
 * Kurztext. Die ganze Karte ist der Link. Premium darunter als eigene Welt.
 */
export default function StartLeistungen(props: StartseiteProps) {
  const { lang } = props;
  const { dict, ui, seiten, href } = startseiteKontext(props);
  const { home, servicesOverview } = seiten;
  return (
    <section id="leistungen" aria-labelledby="leistungen-titel" className="section bg-stone max-sm:py-12">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <SectionHead id="leistungen-titel" title={home.services.title} intro={home.services.intro} className="lg:col-span-8" />
          <Link
            href={href("/leistungen")}
            className="arrow-link inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal lg:col-span-4 lg:justify-self-end"
          >
            {home.services.all}
            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-14 lg:gap-14">
          {servicesOverview.groups.map((group, index) => {
            const look = rhythm[index] ?? rhythm[2];
            return (
              <Schiene key={group.title} id={`leistungen-gruppe-${index + 1}`} title={group.title} swipe={home.services.swipe} cols={look.cols}>
                {group.items.map(item => {
                  const Glyph = iconFor(item.path);
                  const text = look.text ? home.services.cards[item.path] : undefined;
                  return (
                    <li
                      key={item.path}
                      className="card-lift group relative flex min-w-0 shrink-0 basis-[82%] snap-start flex-col overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_18px_40px_-30px_rgba(14,17,22,0.35)] sm:basis-[46%] lg:basis-auto"
                    >
                      <ImageSlot
                        image={cardImage[item.path]}
                        sizes={look.sizes}
                        lang={lang}
                        hover
                        decorative
                        className={`${look.image} w-full`}
                      />
                      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                        <h4 className="flex items-start gap-3 font-display text-[1.1875rem] font-bold leading-snug tracking-[-0.01em] text-ink">
                          <Glyph weight="duotone" className="mt-[0.1em] size-6 shrink-0 text-signal" aria-hidden="true" />
                          <Link href={href(item.path)} className="min-w-0 transition-colors after:absolute after:inset-0 group-hover:text-signal">
                            {item.title}
                          </Link>
                        </h4>
                        {text && <p className="mt-2 text-[0.9375rem] font-medium leading-relaxed text-ink-600 sm:mt-3 sm:text-base">{text}</p>}
                        <span className="mt-auto inline-flex items-center gap-2 pt-3 font-semibold text-signal sm:pt-5" aria-hidden="true">
                          {look.text && ui.toService}
                          <ArrowRight weight="duotone" className="size-4 shrink-0" />
                        </span>
                      </div>
                    </li>
                  );
                })}
              </Schiene>
            );
          })}
        </div>

        {/* Premium als eigene Welt (E80): Anthrazit, Champagner, Serifenschrift, nie Signalrot. Mobil ohne Bild (Umbau 7) */}
        <div className="on-dark mt-10 grid overflow-hidden rounded-[3px] bg-anthracite text-white sm:mt-12 md:grid-cols-2 lg:mt-16">
          <ImageSlot
            image="hero-premium"
            sizes="50vw"
            lang={lang}
            decorative
            className="hidden w-full md:block md:h-full md:min-h-[24rem] [&_img]:object-[80%_50%]"
          />
          <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 md:p-10 xl:p-14">
            <h3 className="font-premium text-[clamp(1.9rem,1.2rem+1.8vw,3rem)] font-medium leading-[1.08] text-white">
              {home.services.premium.title}
            </h3>
            <div className="premium-rule mt-5 max-w-[10rem]" />
            <p className="mt-5 max-w-[52ch] text-[1.0625rem] font-medium leading-relaxed text-white/90">{home.services.premium.text}</p>
            {/* Mobil ohne die drei Einzelseiten: «Zum Premium-Bereich» und das Menü führen dorthin (Umbau 7) */}
            <ul className="mt-6 divide-y divide-white/15 border-y border-white/15 max-sm:hidden">
              {premiumPages.map(path => (
                <li key={path}>
                  <Link
                    href={href(path)}
                    className="arrow-link flex min-h-11 items-center justify-between gap-4 py-3 font-medium text-white transition-colors hover:text-brass"
                  >
                    {dict.pages[path].label}
                    <ArrowRight weight="duotone" className="size-4 shrink-0 text-brass" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={href("/premium")}
              className="arrow-link mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-brass transition-colors hover:text-white"
            >
              {home.services.premium.link}
              <ArrowRight weight="duotone" className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
