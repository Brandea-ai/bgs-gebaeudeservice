import Link from "next/link";
import { ArrowRight, Clock, LockKey, UsersThree } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import ImageSlot from "@/components/ImageSlot";
import { RevealGroup } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { heroImage } from "../../../../shared/hero-images";
import { localizePath } from "../../../../shared/i18n";
import { uebersichtKontext, type UebersichtProps } from "./kontext";

/** Drei Zusagen der Premium-Linie als Vorschau, Texte aus der Premium-Übersicht (E41) */
const preview: { key: "teams" | "diskret" | "zeiten"; icon: Icon }[] = [
  { key: "teams", icon: UsersThree },
  { key: "diskret", icon: LockKey },
  { key: "zeiten", icon: Clock },
];

/**
 * Premium als deutlich abgesetzter Block (E80): Anthrazit, Champagner,
 * Serifenschrift, nie Signalrot. Die drei Bereiche als Bildkarten, darunter drei
 * Zusagen und der Weg zur Premium-Übersicht.
 */
export default function UebersichtPremium(props: UebersichtProps) {
  const { lang } = props;
  const { ui, pages, servicesOverview, dict } = uebersichtKontext(props);
  const { premiumOverview } = dict.seiten;
  const promise = (key: string) => premiumOverview.promises.find(item => item.key === key);
  return (
    <section id="premium" aria-labelledby="premium-titel" className="on-dark section relative overflow-hidden bg-anthracite text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_90%_0%,rgba(200,169,110,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            {company.premiumBrand && <p className="t-eyebrow mb-5 text-brass">{ui.premiumLine}</p>}
            <h2 id="premium-titel" className="font-premium text-[clamp(2.25rem,1.4rem+2.8vw,4rem)] font-normal leading-[1.05] text-white">
              {servicesOverview.premium.title}
            </h2>
            <div className="premium-rule mt-7 max-w-xs" />
          </div>
          <div className="lg:col-span-5">
            <p className="t-lead text-white/90">{servicesOverview.premium.text}</p>
            <p className="mt-4 font-medium leading-relaxed text-white/75">{servicesOverview.premium.detail}</p>
          </div>
        </div>

        <RevealGroup as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
          {premiumOverview.offers.map(offer => (
            <li key={offer.path} className="premium-surface card-lift group min-w-0 overflow-hidden rounded-[3px]">
              <Link href={localizePath(offer.path, lang)} className="arrow-link flex h-full flex-col">
                <ImageSlot
                  image={heroImage[offer.path]}
                  lang={lang}
                  tone="dark"
                  hover
                  decorative
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/3] w-full"
                />
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-premium text-[1.75rem] leading-tight text-white transition-colors group-hover:text-brass-light">
                    {pages[offer.path].label}
                  </span>
                  <span className="mt-3 block font-medium leading-relaxed text-white/80">{offer.text}</span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brass">
                    {ui.toService}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </RevealGroup>

        <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-12 lg:items-center">
          <ul className="grid gap-6 sm:grid-cols-3 lg:col-span-9">
            {preview.map(({ key, icon: Glyph }) => {
              const item = promise(key);
              if (!item) return null;
              return (
                <li key={key} className="flex items-start gap-4">
                  <Glyph weight="duotone" className="mt-0.5 size-7 shrink-0 text-brass" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-display text-[1.0625rem] font-semibold text-white">{item.title}</span>
                    <span className="mt-1 block text-[0.9375rem] font-medium leading-snug text-white/75">{item.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="lg:col-span-3 lg:text-right">
            <Button asChild size="xl" className="arrow-link bg-brass text-anthracite hover:bg-brass-light">
              <Link href={localizePath("/premium", lang)}>
                {servicesOverview.premium.link}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
