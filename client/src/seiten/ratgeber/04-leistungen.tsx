import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import { iconFor } from "@/components/serviceIcons";
import { detailImage, heroImage } from "../../../../shared/hero-images";
import type { PagePath } from "../../../../shared/seo";
import { ratgeberKontext, type RatgeberProps } from "./kontext";

// Dieselben Leistungen wie im Satz unter dem Titel (ratgeber.overview.services)
const paths: PagePath[] = ["/leistungen/unterhaltsreinigung", "/leistungen/hauswartung"];

/** Direkt zu den Leistungen: Bildkarten mit dem Satz aus der Übersicht /leistungen */
export default function RatgeberLeistungen(props: RatgeberProps) {
  const { lang } = props;
  const { dict, t, href } = ratgeberKontext(props);
  const items = dict.seiten.servicesOverview.groups.flatMap(group =>
    group.items.map(entry => ({ path: entry.path as PagePath, text: entry.text }))
  );
  return (
    <section id="leistungen" aria-labelledby="leistungen-titel" className="section-tight border-t border-line bg-stone">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="leistungen-titel" className="t-h2 text-ink">
            {t.servicesTitle}
          </h2>
          <Link
            href={href("/leistungen")}
            className="arrow-link inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal"
          >
            {t.allServices}
            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {paths.map(path => {
            const item = items.find(entry => entry.path === path);
            const Glyph = iconFor(path);
            return (
              <li
                key={path}
                className="card-lift group relative grid min-w-0 overflow-hidden rounded-[3px] border border-line bg-white sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
              >
                <ImageSlot
                  image={detailImage[path] ?? heroImage[path]}
                  sizes="(min-width: 768px) 20vw, 100vw"
                  lang={lang}
                  hover
                  decorative
                  className="aspect-[16/10] w-full sm:aspect-auto sm:h-full"
                />
                <div className="flex min-w-0 flex-col p-6 md:p-7">
                  <Glyph weight="duotone" className="size-7 text-signal" aria-hidden="true" />
                  <h3 className="t-h3 mt-4 text-ink">
                    <Link href={href(path)} className="transition-colors after:absolute after:inset-0 group-hover:text-signal">
                      {dict.pages[path].label}
                    </Link>
                  </h3>
                  {item && <p className="mt-3 font-medium leading-relaxed text-ink-600">{item.text}</p>}
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-signal" aria-hidden="true">
                    {dict.ui.toService}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
