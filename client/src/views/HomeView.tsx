import Link from "next/link";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import AppointmentButton from "@/components/AppointmentButton";
import { LazyIndustryAdvisor } from "@/components/LazyChat";
import OfferCta from "@/components/OfferCta";
import Steps from "@/components/Steps";
import HeroBackground from "@/components/HeroBackground";
import SectionHead from "@/components/SectionHead";
import CantonMap from "@/components/CantonMap";
import CountUp from "@/components/CountUp";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { chatEnabled } from "../../../shared/features";
import { company } from "../../../shared/company";
import { cantonName } from "../../../shared/cantons";
import { placePins } from "../../../shared/canton-map";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";

/**
 * Startseite (F3, F8, M39): Server-Komponente, alle Texte im HTML (M21).
 * Aufbau: Aussage mit grosser Bildfläche und Kennzahlen, Vertrauensleiste,
 * Leistungen als Bildkarten, Ablauf, Einzugsgebiet mit animierter Karte,
 * Abschluss mit Formular. Bewegung nur als Einblendung beim Scrollen (Reveal).
 */
export default function HomeView({ lang }: { lang: Locale }) {
  const { home, proof } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const { serviceGroups, chrome } = navDicts[lang];
  const href = (path: PagePath) => localizePath(path, lang);
  const pins = placePins.filter(pin =>
    ["Zug", "Aarau", "Stans", "Sarnen"].includes(pin.name)
  );

  return (
    <PageFrame lang={lang} path="/">
      {/* Aussage, Bild und Kennzahlen */}
      <section
        aria-labelledby="start-titel"
        className="relative isolate overflow-hidden text-white"
      >
        <HeroBackground src="/swiss-hero-main.jpg" />
        <div className="container relative grid gap-10 pt-12 pb-10 md:pt-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-20 lg:pb-16 xl:pt-24">
          <div className="lg:col-span-6">
            <Reveal>
              <h1
                id="start-titel"
                className="t-display max-w-[18ch] text-white"
              >
                {home.h1}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-7 max-w-[42ch] text-white/90">
                {home.lead}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" className="arrow-link">
                  <a href="#kontakt-formular">
                    {ui.offerCta}
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                {chatEnabled ? (
                  <AppointmentButton
                    size="lg"
                    variant="inverse"
                    className="h-14 px-7"
                  />
                ) : (
                  <Button asChild size="xl" variant="inverse">
                    <a href={company.phone.href} className="tabular-nums">
                      <Phone aria-hidden="true" />
                      {company.phone.display}
                    </a>
                  </Button>
                )}
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80">
                <span
                  className="inline-block h-2 w-2 rounded-full bg-brass"
                  aria-hidden="true"
                />
                {chrome.answer} · {chrome.seat}
              </p>
            </Reveal>

            {/* KI-Berater erst mit Modell und Zugang (E35), bis dahin keine Handlungsaufforderung dorthin (M31) */}
            {chatEnabled && (
              <div className="mt-12 max-w-3xl">
                <LazyIndustryAdvisor />
              </div>
            )}
          </div>

          {/* Grosse Bildfläche (E19): später ein Foto des Teams bei der Arbeit */}
          <Reveal
            variant="scale"
            delay={150}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="group relative">
              <ImageSlot
                src="/swiss-hero-main.jpg"
                alt={home.eyebrow}
                lang={lang}
                tone="dark"
                hover
                className="aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[4/3]"
              />
              {/* Kennzahl schwebt über dem Bild */}
              <div className="absolute -bottom-5 left-5 bg-signal px-5 py-4 text-white shadow-[0_24px_48px_-20px_rgba(184,18,27,0.7)] sm:-left-6 sm:bottom-8">
                <p className="font-display text-3xl font-bold leading-none">
                  <CountUp value={proof[0].value} />
                </p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  {proof[0].label}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Kennzahlen mit Zähler */}
        <div className="container relative pb-12 pt-10 lg:pb-16">
          <h2 id="auf-einen-blick" className="sr-only">
            {home.proofTitle}
          </h2>
          <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {proof.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 100}
                className="flex flex-col gap-2 bg-ink/80 px-5 py-6 backdrop-blur-sm sm:px-7 sm:py-8"
              >
                <dd className="order-1 font-display text-[clamp(2rem,1.4rem+1.8vw,3.25rem)] font-bold leading-none tracking-[-0.03em] text-white sm:whitespace-nowrap">
                  <CountUp value={item.value} />
                </dd>
                <dt className="order-2 text-sm font-medium leading-snug text-white/85">
                  {item.label}
                </dt>
              </Reveal>
            ))}
          </dl>
          <a
            href="#leistungen"
            className="mt-8 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 hover:text-white lg:inline-flex"
          >
            {chrome.scrollHint}
            <ChevronDown
              className="h-4 w-4 animate-bounce"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      {/* Vertrauensleiste, nur belegte Angaben (E18) */}
      <section aria-label={home.proofTitle} className="border-b border-line">
        <div className="container py-6 lg:py-8">
          <TrustStrip lang={lang} />
        </div>
      </section>

      {/* Leistungen als Bildkarten */}
      <section aria-labelledby="leistungen" className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              id="leistungen"
              title={home.services.title}
              intro={home.services.intro}
              className="lg:col-span-8"
            />
            <Reveal className="lg:col-span-4 lg:justify-self-end">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="arrow-link"
              >
                <Link href={href("/leistungen")}>
                  {home.services.groups[0].link.text}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {home.services.groups.map((group, index) => {
              const links =
                serviceGroups[index]?.links.filter(
                  link => link.path !== "/leistungen"
                ) ?? [];
              const premium = group.key === "premium";
              return (
                <Reveal
                  as="li"
                  key={group.key}
                  delay={index * 120}
                  className={`card-lift group flex flex-col overflow-hidden ${premium ? "bg-ink text-white md:col-span-2 xl:col-span-1" : "bg-white text-ink shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"}`}
                >
                  <Link
                    href={href(group.link.path)}
                    className="block"
                    aria-label={group.title}
                  >
                    <ImageSlot
                      lang={lang}
                      tone={premium ? "dark" : "light"}
                      hover
                      label={group.title}
                      className="aspect-[16/10] w-full"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    {premium && (
                      <p className="mb-3 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brass">
                        {ui.premiumLine}
                      </p>
                    )}
                    <h3 className="t-h3">
                      <Link
                        href={href(group.link.path)}
                        className={`transition-colors ${premium ? "hover:text-brass" : "hover:text-signal"}`}
                      >
                        {group.title}
                      </Link>
                    </h3>
                    <p
                      className={`mt-3 font-medium leading-relaxed ${premium ? "text-white/85" : "text-ink-600"}`}
                    >
                      {group.text}
                    </p>
                    <ul
                      className={`mt-6 divide-y border-y ${premium ? "divide-white/15 border-white/15" : "divide-line border-line"}`}
                    >
                      {links.map(link => (
                        <li key={link.path}>
                          <Link
                            href={href(link.path)}
                            className={`arrow-link group/item flex items-center justify-between gap-4 py-3 text-[0.9875rem] font-medium transition-colors ${premium ? "text-white hover:text-brass" : "text-ink hover:text-signal"}`}
                          >
                            {link.label}
                            <ArrowRight
                              className={`h-4 w-4 shrink-0 ${premium ? "text-brass" : "text-signal"}`}
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href(group.link.path)}
                      className={`arrow-link mt-6 inline-flex items-center gap-2 font-semibold ${premium ? "text-brass hover:text-white" : "text-signal hover:text-signal-dark"}`}
                    >
                      {group.link.text}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Ablauf bis zur Offerte */}
      <section aria-labelledby="ablauf" className="section bg-stone">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              id="ablauf"
              title={home.steps.title}
              className="lg:col-span-7"
            />
            <Reveal className="lg:col-span-5 lg:justify-self-end">
              <Button asChild size="lg" className="arrow-link">
                <a href="#kontakt-formular">
                  {ui.offerCta}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </Reveal>
          </div>
          <div className="mt-12">
            <Steps steps={home.steps.items} lang={lang} />
          </div>
        </div>
      </section>

      {/* Einzugsgebiet mit animierter Karte */}
      <section
        aria-labelledby="gebiet"
        className="relative overflow-hidden bg-ink text-white"
      >
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHead
              id="gebiet"
              title={home.area.title}
              intro={home.area.text}
              tone="dark"
            />
            <Reveal delay={150}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {company.cantons.map(name => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white"
                  >
                    <span
                      className="inline-block h-2 w-2 bg-signal"
                      aria-hidden="true"
                    />
                    {cantonName(name, lang)}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <Button
                asChild
                size="lg"
                variant="inverse"
                className="arrow-link mt-8"
              >
                <Link href={href("/einzugsgebiet")}>
                  {home.area.link}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <CantonMap
              lang={lang}
              texts={{
                ...getDict(lang).misc.map,
                seat: navDicts[lang].chrome.seat,
              }}
              tone="dark"
              pins={pins.map(pin => ({ x: pin.x, y: pin.y, label: pin.name }))}
              className="mx-auto max-w-[44rem]"
            />
          </div>
        </div>
      </section>

      <OfferCta title={home.cta.title} text={home.cta.text} lang={lang} />
    </PageFrame>
  );
}
