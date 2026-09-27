import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import AppointmentButton from "@/components/AppointmentButton";
import { LazyIndustryAdvisor } from "@/components/LazyChat";
import OfferCta from "@/components/OfferCta";
import Steps from "@/components/Steps";
import HeroBackground from "@/components/HeroBackground";
import SectionHead from "@/components/SectionHead";
import CantonMap from "@/components/CantonMap";
import { Button } from "@/components/ui/button";
import { chatEnabled } from "../../../shared/features";
import { company } from "../../../shared/company";
import { cantonName } from "../../../shared/cantons";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Startseite (F3, M39): Server-Komponente, alle Texte im HTML (M21). Hero ohne
 * Einblendung (M23). Aufbau: Aussage und Kennzahlen, Leistungen mit klebender
 * Einleitung, Ablauf, Einzugsgebiet mit Karte, Abschluss mit Formular im Footer.
 */
export default function HomeView({ lang }: { lang: Locale }) {
  const { home, proof } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const { serviceGroups, menu } = navDicts[lang];
  const href = (path: PagePath) => localizePath(path, lang);

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/" />

      <main id="inhalt">
        {/* Aussage und Kennzahlen */}
        <section aria-labelledby="start-titel" className="relative isolate overflow-hidden text-white">
          <HeroBackground src="/swiss-hero-main.jpg" />
          <div className="container relative grid gap-14 pt-16 pb-14 md:pt-24 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:pb-20 xl:pt-36">
            <div className="lg:col-span-7 xl:col-span-7">
              <p className="t-eyebrow mb-7 flex items-center gap-3 text-white/70">
                <span className="inline-block h-px w-10 bg-signal" aria-hidden="true" />
                {home.eyebrow}
              </p>
              <h1 id="start-titel" className="t-display max-w-[16ch] text-white">
                {home.h1}
              </h1>
              <p className="t-lead mt-8 max-w-[44ch] text-white/75">{home.lead}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" className="arrow-link">
                  <a href="#kontakt-formular">
                    {ui.offerCta}
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                {chatEnabled ? (
                  <AppointmentButton size="lg" variant="inverse" className="h-14 px-7" />
                ) : (
                  <Button asChild size="xl" variant="inverse">
                    <a href={company.phone.href} className="tabular-nums">
                      <Phone aria-hidden="true" />
                      {company.phone.display}
                    </a>
                  </Button>
                )}
              </div>

              {/* KI-Berater erst mit Modell und Zugang (E35), bis dahin keine Handlungsaufforderung dorthin (M31) */}
              {chatEnabled && (
                <div className="mt-12 max-w-3xl">
                  <LazyIndustryAdvisor />
                </div>
              )}
            </div>

            <aside aria-labelledby="auf-einen-blick" className="lg:col-span-5 lg:col-start-8 lg:self-end">
              <h2 id="auf-einen-blick" className="t-eyebrow mb-5 text-white/55">
                {home.proofTitle}
              </h2>
              <dl className="grid grid-cols-2 border-t border-white/15">
                {proof.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex flex-col gap-3 border-b border-white/15 py-7 ${index % 2 === 0 ? "pr-5 border-r" : "pl-5"}`}
                  >
                    <dt className="order-2 text-sm leading-snug text-white/65">{item.label}</dt>
                    <dd className="order-1 sm:whitespace-nowrap font-display text-[clamp(1.75rem,1.2rem+1.3vw,2.75rem)] font-semibold leading-none tracking-[-0.03em] text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          {/* Gebiet und Sprachen als ruhige Leiste am Fuss */}
          <div className="relative border-t border-white/10">
            <div className="container flex flex-col gap-2 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
              <p>
                <span className="t-eyebrow mr-3 text-white/45">{ui.factArea}</span>
                {company.cantons.map((name) => cantonName(name, lang)).join(" · ")}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/45">
                {company.address.city} · {company.address.postalCode}
              </p>
            </div>
          </div>
        </section>

        {/* Leistungen: Einleitung klebt links, Gruppen rollen rechts */}
        <section aria-labelledby="leistungen" className="section">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
                <SectionHead id="leistungen" eyebrow={menu.services} title={home.services.title} intro={home.services.intro} />
                <Link href={href("/leistungen")} className="arrow-link mt-8 inline-flex items-center gap-2 font-medium text-ink hover:text-signal transition-colors">
                  {home.services.groups[0].link.text}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 lg:col-start-5 xl:col-span-7 xl:col-start-6">
              <ul className="border-t border-ink">
                {home.services.groups.map((group, index) => {
                  const links = serviceGroups[index]?.links.filter((link) => link.path !== "/leistungen") ?? [];
                  const premium = group.key === "premium";
                  return (
                    <li key={group.key} className={`reveal border-b border-line ${premium ? "mt-10 border-b-0 bg-ink p-8 text-white md:p-12" : "py-10 md:py-12"}`}>
                      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                        <div>
                          {premium && <p className="t-eyebrow mb-4 text-brass">{ui.premiumLine}</p>}
                          <h3 className={`t-h3 ${premium ? "text-white" : "text-ink"}`}>
                            <Link href={href(group.link.path)} className="hover:text-signal transition-colors">
                              {group.title}
                            </Link>
                          </h3>
                          <p className={`mt-3 leading-relaxed ${premium ? "text-white/70" : "text-mute"}`}>{group.text}</p>
                          <Link
                            href={href(group.link.path)}
                            className={`arrow-link mt-6 inline-flex items-center gap-2 text-sm font-medium ${premium ? "text-brass hover:text-white" : "text-signal hover:text-signal-dark"} transition-colors`}
                          >
                            {group.link.text}
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </div>
                        <ul className={`divide-y ${premium ? "divide-white/15 border-y border-white/15" : "divide-line border-y border-line"}`}>
                          {links.map((link) => (
                            <li key={link.path}>
                              <Link
                                href={href(link.path)}
                                className={`arrow-link group flex items-center justify-between gap-4 py-3.5 text-[1rem] transition-colors ${premium ? "text-white/85 hover:text-white" : "text-ink hover:text-signal"}`}
                              >
                                {link.label}
                                <ArrowRight className={`h-4 w-4 shrink-0 ${premium ? "text-brass" : "text-mute group-hover:text-signal"}`} aria-hidden="true" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Ablauf bis zur Offerte */}
        <section aria-labelledby="ablauf" className="section bg-stone">
          <div className="container">
            <div className="mb-14 grid gap-6 lg:grid-cols-12">
              <SectionHead id="ablauf" eyebrow={ui.steps} title={home.steps.title} className="lg:col-span-6" />
            </div>
            <Steps steps={home.steps.items} lang={lang} />
          </div>
        </section>

        {/* Einzugsgebiet mit Karte */}
        <section aria-labelledby="gebiet" className="section">
          <div className="container grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHead id="gebiet" eyebrow={ui.factArea} title={home.area.title} intro={home.area.text} />
              <ul className="mt-10 grid grid-cols-2 border-t border-line sm:grid-cols-3">
                {company.cantons.map((name) => (
                  <li key={name} className="flex items-center gap-3 border-b border-line py-4 text-ink">
                    <span className="inline-block h-2 w-2 bg-signal" aria-hidden="true" />
                    {cantonName(name, lang)}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="outline" className="arrow-link mt-10">
                <Link href={href("/einzugsgebiet")}>
                  {home.area.link}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
              <CantonMap lang={lang} className="mx-auto max-w-[44rem]" />
            </div>
          </div>
        </section>

        <OfferCta title={home.cta.title} text={home.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/" />
    </div>
  );
}
