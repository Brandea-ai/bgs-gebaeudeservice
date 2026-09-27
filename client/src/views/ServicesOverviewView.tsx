import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import OfferCta from "@/components/OfferCta";
import PageHero from "@/components/PageHero";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * Leistungen im Überblick (F5): Auswahlhilfe nach Anlass. Rechts im Kopf die
 * Gruppen als Sprungziele, darunter je Gruppe eine klebende Einleitung links
 * und die Leistungen als Kacheln rechts. Texte aus content/<sprache>/seiten.ts.
 */
export default function ServicesOverviewView({ lang }: { lang: Locale }) {
  const { servicesOverview } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const { menu } = navDicts[lang];
  const groupId = (index: number) => `gruppe-${index + 1}`;

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/leistungen" />

      <main id="inhalt">
        <PageHero
          path="/leistungen"
          lang={lang}
          eyebrow={menu.services}
          title={servicesOverview.h1}
          lead={servicesOverview.lead}
          aside={
            <nav aria-label={ui.onThisPage}>
              <p className="t-eyebrow mb-4 text-mute">{ui.onThisPage}</p>
              <ol className="border-t border-ink">
                {servicesOverview.groups.map((group, index) => (
                  <li key={group.title} className="border-b border-line">
                    <a href={`#${groupId(index)}`} className="arrow-link group flex items-center justify-between gap-4 py-4 text-ink hover:text-signal transition-colors">
                      <span className="font-medium">{group.title}</span>
                      <span className="flex items-center gap-3 font-mono text-xs text-mute">
                        {group.items.length}
                        <ArrowRight className="h-4 w-4 rotate-90 transition-transform" aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          }
        />

        {servicesOverview.groups.map((group, index) => (
          <section key={group.title} aria-labelledby={groupId(index)} className={`section-tight ${index > 0 ? "border-t border-line" : ""}`}>
            <div className="container grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
                  <h2 id={groupId(index)} className="t-h2 text-ink">{group.title}</h2>
                  <p className="t-lead mt-5 max-w-[34ch] text-mute">{group.text}</p>
                </div>
              </div>
              <ul className="grid gap-px self-start bg-line sm:grid-cols-2 lg:col-span-8">
                {group.items.map((item) => (
                  <li key={item.path} className="bg-white sm:[&:last-child:nth-child(odd)]:col-span-2">
                    <Link href={localizePath(item.path, lang)} className="arrow-link group flex h-full min-h-[14rem] flex-col justify-between gap-8 p-8 transition-colors hover:bg-ink md:p-10">
                      <span>
                        <span className="t-h3 block text-ink transition-colors group-hover:text-white">{item.title}</span>
                        <span className="mt-4 block leading-relaxed text-mute transition-colors group-hover:text-white/70">{item.text}</span>
                      </span>
                      <ArrowRight className="h-5 w-5 text-signal transition-colors group-hover:text-brass" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="border-t border-line">
          <div className="container py-10">
            <Link
              href={localizePath("/premium", lang)}
              className="arrow-link group grid gap-6 bg-ink p-8 text-white transition-colors hover:bg-ink-800 md:grid-cols-12 md:items-center md:p-12"
            >
              <span className="md:col-span-8">
                <span className="t-eyebrow mb-4 block text-brass">{ui.premiumLine}</span>
                <span className="t-h2 block text-white">{servicesOverview.premium.title}</span>
                <span className="mt-4 block max-w-[56ch] leading-relaxed text-white/70">{servicesOverview.premium.text}</span>
              </span>
              <span className="inline-flex items-center gap-2 font-medium text-brass md:col-span-4 md:justify-self-end">
                {servicesOverview.premium.link}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>

        <OfferCta title={servicesOverview.cta.title} text={servicesOverview.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/leistungen" />
    </div>
  );
}
