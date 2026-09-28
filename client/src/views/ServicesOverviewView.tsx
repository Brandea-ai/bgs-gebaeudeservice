import Link from "next/link";
import {
  ArrowCircleDown,
  ArrowRight,
  BuildingOffice,
  Factory,
  HardHat,
  House,
  Key,
  Phone,
  Sparkle,
  SquaresFour,
  StackSimple,
  TreeEvergreen,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import PageFrame from "@/components/PageFrame";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import SectionNav from "@/components/SectionNav";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { getDict } from "../../../content";
import { company } from "../../../shared/company";
import { localizePath, type Locale } from "../../../shared/i18n";
import type { PagePath } from "../../../shared/seo";
import { itemListJsonLd } from "../../../shared/structured-data";

/** Ein Symbol je Leistung (L03, icons.md), Schlüssel ist die deutsche Adresse */
const serviceIcons: Partial<Record<PagePath, Icon>> = {
  "/leistungen/unterhaltsreinigung": House,
  "/leistungen/bueroreinigung": BuildingOffice,
  "/leistungen/sonderreinigungen": Sparkle,
  "/leistungen/baureinigung": HardHat,
  "/leistungen/fenster-und-fassadenreinigung": SquaresFour,
  "/leistungen/industrie-und-hallenreinigung": Factory,
  "/leistungen/hauswartung": Key,
  "/leistungen/aussen-und-gruenflaechenpflege": TreeEvergreen,
  "/leistungen/facility-services": StackSimple,
};

const premiumPaths: PagePath[] = [
  "/premium/luxusimmobilien",
  "/premium/privatjet",
  "/premium/yacht",
];

type Item = { title: string; text: string; path: PagePath };

type GroupProps = {
  items: Item[];
  groupId: string;
  lang: Locale;
  toService: string;
};

const cardShadow =
  "shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]";

/** Textblock einer Karte: Symbol über dem Titel, ein Satz, Linktext (L03, L07) */
function CardBody({
  item,
  titleId,
  toService,
  className = "",
}: {
  item: Item;
  titleId: string;
  toService: string;
  className?: string;
}) {
  const Glyph = serviceIcons[item.path] ?? Wrench;
  return (
    <div className={`flex flex-1 flex-col p-6 md:p-7 ${className}`}>
      <Glyph
        weight="duotone"
        className="mb-4 size-6 text-signal"
        aria-hidden="true"
      />
      <h3
        id={titleId}
        className="t-h3 text-ink transition-colors group-hover:text-signal"
      >
        {item.title}
      </h3>
      <p className="mt-3 flex-1 font-medium leading-relaxed text-ink-600">
        {item.text}
      </p>
      <span className="arrow-link mt-6 inline-flex items-center gap-2 font-semibold text-signal">
        {toService}
        <ArrowRight weight="duotone" className="size-4" aria-hidden="true" />
      </span>
    </div>
  );
}

/** Gruppe 01: zwei breite, liegende Bildkarten (L02) */
function WideCards({ items, groupId, lang, toService }: GroupProps) {
  return (
    <RevealGroup as="ul" className="mt-10 grid gap-6 lg:grid-cols-2">
      {items.map((item, index) => {
        const titleId = `${groupId}-leistung-${index + 1}`;
        return (
          <li
            key={item.path}
            className={`card-lift group bg-white ${cardShadow}`}
          >
            <Link
              href={localizePath(item.path, lang)}
              aria-labelledby={titleId}
              className="grid h-full grid-cols-[5.5rem_minmax(0,1fr)] md:grid-cols-[5fr_7fr]"
            >
              <ImageSlot
                lang={lang}
                hover
                decorative
                className="aspect-square w-full self-start md:aspect-auto md:min-h-[14rem] md:h-full"
              />
              <CardBody item={item} titleId={titleId} toService={toService} />
            </Link>
          </li>
        );
      })}
    </RevealGroup>
  );
}

/** Gruppe 02: kompakte Übersichtsliste mit Symbol, Titel und einem Satz (L02, L05) */
function CompactList({ items, groupId, lang, toService }: GroupProps) {
  return (
    <RevealGroup
      as="ul"
      className="mt-10 divide-y divide-line border-y border-line"
    >
      {items.map((item, index) => {
        const titleId = `${groupId}-leistung-${index + 1}`;
        const Glyph = serviceIcons[item.path] ?? Wrench;
        return (
          <li key={item.path}>
            <Link
              href={localizePath(item.path, lang)}
              aria-labelledby={titleId}
              className="group grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 py-6 sm:grid-cols-[1.5rem_minmax(0,1fr)_auto] sm:gap-x-6 md:py-7"
            >
              <Glyph
                weight="duotone"
                className="mt-0.5 size-6 text-signal"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <h3
                  id={titleId}
                  className="t-h3 text-ink transition-colors group-hover:text-signal"
                >
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[60ch] font-medium leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </div>
              <span className="arrow-link col-start-2 inline-flex items-center gap-2 font-semibold text-signal sm:col-start-3 sm:self-center">
                {toService}
                <ArrowRight
                  weight="duotone"
                  className="size-4"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </li>
        );
      })}
    </RevealGroup>
  );
}

/**
 * Gruppe 03: eine grosse Bildkarte (Hauswartung trägt den längsten Text) und
 * daneben zwei Textkarten; kein Leerraum durch ungleiche Textlängen (L02).
 */
function FeaturedGrid({ items, groupId, lang, toService }: GroupProps) {
  return (
    <RevealGroup as="ul" className="mt-10 grid gap-6 lg:grid-cols-12">
      {items.map((item, index) => {
        const titleId = `${groupId}-leistung-${index + 1}`;
        const featured = index === 0;
        return (
          <li
            key={item.path}
            className={`card-lift group bg-white ${cardShadow} ${
              featured ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
            }`}
          >
            <Link
              href={localizePath(item.path, lang)}
              aria-labelledby={titleId}
              className="flex h-full flex-col"
            >
              {featured && (
                <ImageSlot
                  lang={lang}
                  hover
                  decorative
                  className="aspect-[16/10] w-full lg:aspect-auto lg:min-h-[16rem] lg:flex-1"
                />
              )}
              <CardBody
                item={item}
                titleId={titleId}
                toService={toService}
                className={featured ? "lg:flex-none" : ""}
              />
            </Link>
          </li>
        );
      })}
    </RevealGroup>
  );
}

const layouts = [WideCards, CompactList, FeaturedGrid];

/**
 * Leistungen im Überblick (F5, F9, F15): Auswahlhilfe nach Anlass. Kopf statisch
 * mit Aktionen und Sprungliste, darunter die Abschnittsleiste mit Scrollspy
 * (L04). Jede Gruppe hat ein eigenes, aus dem Inhalt abgeleitetes Layout (L02),
 * Premium als eigener Einstieg mit drei Hochformat-Bildflächen (L10).
 */
export default function ServicesOverviewView({ lang }: { lang: Locale }) {
  const dict = getDict(lang);
  const { servicesOverview } = dict.seiten;
  const { ui, pages, nav } = dict;
  const groupId = (index: number) => `gruppe-${index + 1}`;
  const total = servicesOverview.groups.reduce(
    (sum, group) => sum + group.items.length,
    0
  );
  const servicePaths = servicesOverview.groups.flatMap(group =>
    group.items.map(item => item.path)
  );
  const navItems = [
    ...servicesOverview.groups.map((group, index) => ({
      id: groupId(index),
      title: group.title,
    })),
    { id: "premium", title: pages["/premium"].label },
  ];

  return (
    <PageFrame lang={lang} path="/leistungen" contact={servicesOverview.cta}>
      {/* Hub zu den neun Leistungen als ItemList (L13) */}
      <JsonLd data={itemListJsonLd("/leistungen", servicePaths, lang)} />

      <PageHero
        path="/leistungen"
        lang={lang}
        title={servicesOverview.h1}
        lead={servicesOverview.lead}
        aside={
          /* Auswahlhilfe: drei Anlässe als Sprungliste, kein zweites nav-Landmark (L14) */
          <div className={`bg-white p-6 md:p-8 ${cardShadow}`}>
            <p id="auswahl-titel" className="t-eyebrow text-signal">
              {ui.onThisPage} · {total} {nav.menu.services}
            </p>
            <ol
              aria-labelledby="auswahl-titel"
              className="mt-4 divide-y divide-line"
            >
              {servicesOverview.groups.map((group, index) => (
                <li key={group.title}>
                  <a
                    href={`#${groupId(index)}`}
                    className="arrow-link group flex items-center gap-4 py-4 text-ink transition-colors hover:text-signal"
                  >
                    <ArrowCircleDown
                      weight="duotone"
                      className="size-7 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="hyphens block font-display text-lg font-bold leading-tight">
                        {group.title}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink-600">
                        {group.text}
                      </span>
                    </span>
                    <ArrowRight
                      weight="duotone"
                      className="size-5 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        }
        below={
          /* Belege direkt im Kopf, vor der ersten Bildfläche (L05, L11) */
          <div className="relative border-t border-line bg-white">
            <div className="container py-5 md:py-6">
              <TrustStrip lang={lang} compact />
            </div>
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="xl" className="arrow-link">
            <a href="#kontakt-formular" data-cta="kopf-seite">
              {ui.offerCta}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href={company.phone.href} className="tabular-nums">
              <Phone weight="duotone" aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Abschnittsleiste mit Scrollspy: drei Gruppen und Premium (L04) */}
      {/* Auf dem Handy bleibt die Sprungliste im Kopf die Auswahl (LU-07) */}
      <SectionNav label={ui.onThisPage} items={navItems} className="max-lg:hidden" />

      {servicesOverview.groups.map((group, index) => {
        const id = groupId(index);
        const Layout = layouts[index] ?? WideCards;
        return (
          /* Sprungziel auf der Sektion selbst, nicht auf einem bewegten Element (L06) */
          <section
            key={group.title}
            id={id}
            aria-labelledby={`${id}-titel`}
            className={`section-tight ${index % 2 === 1 ? "bg-stone" : "bg-white"}`}
          >
            <div className="container">
              <SectionHead
                id={`${id}-titel`}
                title={group.title}
              />
              <Layout
                items={group.items}
                groupId={id}
                lang={lang}
                toService={ui.toService}
              />
            </div>
          </section>
        );
      })}

      {/* Premium als eigener Einstieg: drei Hochformat-Bildflächen mit Tiefenversatz (L10) */}
      <section
        id="premium"
        aria-labelledby="premium-titel"
        className="on-dark relative overflow-hidden bg-ink text-white"
      >
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="lg:col-span-6">
            {/* Kennzeile nur, wenn die Premium-Linie einen eigenen Namen trägt (S12, E38) */}
            {company.premiumBrand && (
              <p className="t-eyebrow mb-4 text-brass">{ui.premiumLine}</p>
            )}
            <h2 id="premium-titel" className="t-h2 text-white">
              {servicesOverview.premium.title}
            </h2>
            <p className="t-lead mt-5 max-w-[48ch] text-white/90">
              {servicesOverview.premium.text}
            </p>
            <Button
              asChild
              size="xl"
              variant="inverse"
              className="arrow-link mt-8"
            >
              <Link href={localizePath("/premium", lang)}>
                {servicesOverview.premium.link}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          {/* Unter md eine seitlich scrollbare Reihe, ab md drei Spalten mit Versatz in der Mitte */}
          <RevealGroup
            as="ul"
            className="flex gap-4 overflow-x-auto overflow-y-hidden pb-3 max-md:-mx-[var(--gutter)] max-md:px-[var(--gutter)] md:grid md:grid-cols-3 md:items-start md:overflow-visible md:pb-0 lg:col-span-6"
          >
            {premiumPaths.map((path, index) => (
              <li key={path} className="w-[62vw] shrink-0 md:w-auto">
                {/* Versatz auf dem Link, nicht auf dem Listenpunkt: die Einblendung setzt dort transform zurück */}
                <Link
                  href={localizePath(path, lang)}
                  className={`group block ${index === 1 ? "md:translate-y-6" : ""}`}
                >
                  <ImageSlot
                    lang={lang}
                    tone="dark"
                    hover
                    decorative
                    parallax={
                      index === 0
                        ? "depth-slow"
                        : index === 2
                          ? "depth-fast"
                          : undefined
                    }
                    className="aspect-[3/4] w-full"
                  />
                  <span className="hyphens mt-3 block font-display text-[1.0625rem] font-semibold leading-snug text-white transition-colors group-hover:text-brass">
                    {pages[path].label}
                  </span>
                </Link>
              </li>
            ))}
          </RevealGroup>
        </div>
      </section>
    </PageFrame>
  );
}
