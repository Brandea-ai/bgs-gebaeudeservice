import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { iconFor } from "@/components/serviceIcons";
import { detailImage, heroImage } from "../../../../shared/hero-images";
import type { PagePath } from "../../../../shared/seo";
import { startseiteKontext, type StartseiteProps } from "./kontext";

const premiumPages: PagePath[] = ["/premium/luxusimmobilien", "/premium/privatjet", "/premium/yacht"];

/**
 * Leistungen als Bildkarten (E80): alle neun Leistungen mit ihrem Detailbild
 * (die Heldenbilder sind links für Schrift abgedunkelt), Gruppe,
 * Symbol und dem Satz aus der Übersicht /leistungen (eine Quelle). Die ganze
 * Karte ist der Link, der Titel trägt ihn (h3). Premium darunter als eigene
 * Welt in Anthrazit und Champagner.
 */
export default function StartLeistungen(props: StartseiteProps) {
  const { lang } = props;
  const { dict, ui, seiten, href } = startseiteKontext(props);
  const { home, servicesOverview } = seiten;
  const cards = servicesOverview.groups.flatMap(group => group.items.map(item => ({ ...item, group: group.title })));
  return (
    <section id="leistungen" aria-labelledby="leistungen-titel" className="section bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead id="leistungen-titel" title={home.services.title} intro={home.services.intro} className="lg:col-span-8" />
          <Link
            href={href("/leistungen")}
            className="arrow-link inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal lg:col-span-4 lg:justify-self-end"
          >
            {home.services.all}
            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
          </Link>
        </div>

        <RevealGroup as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map(card => {
            const Glyph = iconFor(card.path);
            return (
              <li
                key={card.path}
                className="card-lift group relative flex min-w-0 flex-col overflow-hidden rounded-[3px] border border-line bg-white shadow-[0_18px_40px_-30px_rgba(14,17,22,0.35)]"
              >
                <ImageSlot
                  image={detailImage[card.path] ?? heroImage[card.path]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  lang={lang}
                  hover
                  decorative
                  className="aspect-[16/10] w-full"
                />
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <p className="t-eyebrow text-mute">{card.group}</p>
                  <h3 className="t-h3 mt-3 flex items-start gap-3 text-ink">
                    <Glyph weight="duotone" className="mt-[0.1em] size-7 shrink-0 text-signal" aria-hidden="true" />
                    <Link
                      href={href(card.path)}
                      className="min-w-0 transition-colors after:absolute after:inset-0 group-hover:text-signal"
                    >
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-medium leading-relaxed text-ink-600">{card.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-signal" aria-hidden="true">
                    {ui.toService}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" />
                  </span>
                </div>
              </li>
            );
          })}
        </RevealGroup>

        {/* Premium als eigene Welt (E80): Anthrazit, Champagner, Serifenschrift, nie Signalrot */}
        <div className="on-dark mt-8 grid overflow-hidden rounded-[3px] bg-anthracite text-white md:grid-cols-2 lg:mt-10">
          <ImageSlot
            image="hero-premium"
            sizes="(min-width: 768px) 50vw, 100vw"
            lang={lang}
            decorative
            className="aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[24rem] [&_img]:object-[80%_50%]"
          />
          <div className="flex min-w-0 flex-col justify-center p-7 md:p-10 xl:p-14">
            <h3 className="font-premium text-[clamp(1.9rem,1.2rem+1.8vw,3rem)] font-normal leading-[1.08] text-white">
              {home.services.premium.title}
            </h3>
            <div className="premium-rule mt-6 max-w-[10rem]" />
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] font-medium leading-relaxed text-white/85">
              {home.services.premium.text}
            </p>
            <ul className="mt-7 divide-y divide-white/15 border-y border-white/15">
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
              className="arrow-link mt-7 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-brass transition-colors hover:text-white"
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
