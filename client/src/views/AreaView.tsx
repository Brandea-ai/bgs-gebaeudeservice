import {
  ArrowDown,
  ArrowRight,
  Envelope,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import PageFrame from "@/components/PageFrame";
import PageHero from "@/components/PageHero";
import CantonMap from "@/components/CantonMap";
import ConsentMap from "@/components/ConsentMap";
import KantonKarte from "@/components/KantonKarte";
import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import SectionNav from "@/components/SectionNav";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { kantonGerman, kantonKeys } from "../../../shared/cantons";
import { placePins } from "../../../shared/canton-map";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Einzugsgebiet (F5, F10, F15): ein Sitz, fünf Kantone, alle Leistungen im
 * ganzen Gebiet (R4b, W04, R4d). Statischer dunkler Kopf mit der Karte aus den
 * Kantonsgrenzen von swisstopo (S85), darunter Belege und die Abschnittsleiste
 * (Kantone, Orte, Sitz). Die Kantone stehen als Karten mit Bild neben der
 * stehenden Karte und führen auf die Kantonsseiten (E80, ersetzt E42 für
 * Kantone), die Orte als Gruppen an Seen und in den Bergen, der Sitz mit
 * Adresse und Karte nach Klick (E20). Texte aus content/<sprache>/seiten.ts und
 * kantone.ts, keine eigenen Ortsseiten (M48).
 */
export default function AreaView({ lang }: { lang: Locale }) {
  const dict = getDict(lang);
  const { area } = dict.seiten;
  const kantoneUebersicht = dict.kantone.uebersicht;
  const { ui, misc } = dict;
  const { chrome } = navDicts[lang];
  const mapTexts = { ...misc.map, seat: chrome.seat };
  // Luzern liegt auf der Karte direkt neben dem Sitz und würde dessen Beschriftung überdecken
  const pins = placePins
    .filter(pin => pin.name !== "Luzern")
    .map(pin => ({ x: pin.x, y: pin.y, label: pin.name }));

  const navItems = [
    { id: "kantone", title: area.cantonsTitle },
    { id: "orte", title: area.places.title },
    { id: "sitz", title: chrome.seat },
  ];

  // Sitz: Adresse, Telefon, E-Mail (EG-09, EG-14); Icons 20 px ohne Platte (icons.md)
  const seat: { icon: Icon; label: string; lines: string[]; href?: string }[] =
    [
      {
        icon: MapPin,
        label: chrome.address,
        lines: [
          company.legalName,
          company.address.street,
          `${company.address.postalCode} ${company.address.city}`,
        ],
      },
      {
        icon: Phone,
        label: chrome.phone,
        lines: [company.phone.display],
        href: company.phone.href,
      },
      {
        icon: Envelope,
        label: chrome.email,
        lines: [company.email],
        href: `mailto:${company.email}`,
      },
    ];

  return (
    <PageFrame lang={lang} path="/einzugsgebiet" contact={area.cta}>
      {/* Erster Bildschirm statisch: Titel, fünf Kantone im Lead, Aktionen, Karte (EG-07, S05) */}
      <PageHero
        path="/einzugsgebiet"
        lang={lang}
        tone="dark"
        title={area.h1}
        lead={<p>{dict.heroLines["/einzugsgebiet"]}</p>}
        aside={
          <CantonMap
            lang={lang}
            tone="dark"
            texts={mapTexts}
            pins={pins}
            mobilePins="seat"
            className="mx-auto w-full max-w-[44rem]"
          />
        }
        below={
          /* Belege direkt unter dem Kopf, vor jeder Bildfläche (Pflicht 7) */
          <div className="relative bg-white">
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
          {/* Echter Pfeil nach unten, ohne arrow-link: der Hover würde sonst diagonal schieben (EG-14) */}
          <Button asChild size="xl" variant="inverse">
            <a href="#kantone">
              {area.cantonsTitle}
              <ArrowDown weight="duotone" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Abschnittsleiste mit Scrollspy: Kantone, Orte, Sitz (motion.md) */}
      <SectionNav label={ui.onThisPage} items={navItems} />

      {/*
       * Kantone (EG-01, S06, E80): je Kanton eine Karte mit Bild, Kurztext und
       * Orten, verlinkt auf die eigene Kantonsseite. Sprungziel auf der Sektion,
       * nicht auf einem bewegten Element (EG-06).
       */}
      <section id="kantone" aria-labelledby="kantone-titel" className="section">
        <div className="container">
          <SectionHead
            id="kantone-titel"
            title={kantoneUebersicht.title}
            intro={kantoneUebersicht.text}
          />
          <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-12">
            {/*
             * Die Karte bleibt beim Lesen stehen: einzige gepinnte Sektion der
             * Seite. Unter lg steht die Karte im Kopf direkt darüber, darum
             * hier ausgeblendet.
             */}
            <div className="hidden lg:col-span-5 lg:block lg:self-start lg:sticky lg:top-[calc(var(--header-offset)+var(--subnav-h,0px)+2rem)]">
              <CantonMap lang={lang} texts={mapTexts} pins={pins} />
            </div>
            <RevealGroup as="ul" className="grid gap-5 lg:col-span-7">
              {kantonKeys.map(key => (
                <li key={key} className="min-w-0">
                  <KantonKarte
                    kanton={key}
                    lang={lang}
                    layout="row"
                    places={area.cantonPlaces[kantonGerman[key]]}
                  />
                </li>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Orte an Seen und in den Bergen: Gruppen als Liste ohne Bildflächen (EG-01); der Premium-Link bleibt im Text (EG-13) */}
      <section
        id="orte"
        aria-labelledby="orte-titel"
        className="section bg-stone"
      >
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              id="orte-titel"
              title={area.places.title}
              className="lg:col-span-6"
            />
            <p className="t-lead text-ink-600 lg:col-span-6">
              <RichText text={area.places.text} lang={lang} />
            </p>
          </div>
          <RevealGroup
            as="ul"
            className="mt-10 divide-y divide-line border-y border-line lg:mt-12"
          >
            {area.places.groups.map((group, index) => {
              const id = `orte-gruppe-${index + 1}`;
              return (
                <li
                  key={group.title}
                  className="grid gap-4 py-7 md:grid-cols-12 md:gap-8 md:py-8"
                >
                  <h3
                    id={id}
                    className="t-h3 text-ink md:col-span-5 lg:col-span-4"
                  >
                    {group.title}
                  </h3>
                  <ul
                    aria-labelledby={id}
                    className="flex flex-wrap gap-2 md:col-span-7 lg:col-span-8"
                  >
                    {group.items.map(place => (
                      <li
                        key={place}
                        className="inline-flex min-h-9 items-center rounded-[3px] border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink"
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Sitz (EG-09): Überschrift chrome.seat, Adresse mit Karte nach Klick statt Platzhalterfläche; statisch */}
      <section id="sitz" aria-labelledby="sitz-titel" className="section">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHead id="sitz-titel" title={chrome.seat} />
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {seat.map(({ icon: Glyph, label, lines, href }) => (
                <div key={label} className="relative py-5 pl-9">
                  <dt className="t-eyebrow text-ink-600">
                    <Glyph
                      weight="duotone"
                      className="absolute left-0 top-5 size-5 text-signal"
                      aria-hidden="true"
                    />
                    {label}
                  </dt>
                  <dd className="mt-1.5 break-words text-[1.0625rem] font-medium leading-snug text-ink">
                    {href ? (
                      <a
                        href={href}
                        className="inline-flex min-h-6 items-center tabular-nums transition-colors hover:text-signal"
                      >
                        {lines[0]}
                      </a>
                    ) : (
                      lines.map(line => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden border border-line bg-white lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <ConsentMap texts={misc.map} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
