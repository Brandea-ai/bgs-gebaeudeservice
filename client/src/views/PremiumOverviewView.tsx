import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Diamond,
  FileText,
  Key,
  LockKey,
  Phone,
  SealCheck,
  ShieldCheck,
  Translate,
  UserCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import PageFrame from "@/components/PageFrame";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import SectionNav from "@/components/SectionNav";
import StackPanels from "@/components/StackPanels";
import ProcessScrolly from "@/components/ProcessScrolly";
import Faq from "@/components/Faq";
import RichText from "@/components/RichText";
import CantonMap from "@/components/CantonMap";
import { Button } from "@/components/ui/button";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { company } from "../../../shared/company";
import { imagesArePlaceholders } from "../../../shared/features";
import { placePins } from "../../../shared/canton-map";
import { localizePath, type Locale } from "../../../shared/i18n";
import { itemListJsonLd } from "../../../shared/structured-data";

type PromiseKey = ReturnType<
  typeof getDict
>["seiten"]["premiumOverview"]["promises"][number]["key"];

/** Ein Objekt-Icon je Zusage (P05, icons.md): duotone, 28 px, Messing, ohne Fläche */
const promiseIcons: Record<PromiseKey, Icon> = {
  persoenlich: UserCheck,
  diskret: LockKey,
  teams: UsersThree,
  personal: SealCheck,
  schluessel: Key,
  zeiten: Clock,
  material: Diamond,
  sprachen: Translate,
  versichert: ShieldCheck,
  offerte: FileText,
};

// Orte der Premium-Linie auf der Karte. Luzern liegt 20 Karteneinheiten neben dem
// Sitz Emmenbrücke, die Beschriftungen würden sich überlagern (wie in AreaView).
const premiumPlaces = ["Weggis", "Zug", "Engelberg"];

// Links auf dunklem Grund: Weiss mit Messing-Unterstrich (kein Signalrot auf Tinte)
const darkLink =
  "font-semibold text-white underline decoration-brass underline-offset-4 hover:decoration-white";

/**
 * Premium-Übersicht (F9, F15, E16, E28): Graphit mit Messington auf der ganzen
 * Seite. Kopf statisch mit Anfrage und Telefon (P03), darunter die
 * Abschnittsleiste mit Scrollspy. Die drei Anlässe als Stapel-Tafeln (einzige
 * gepinnte Sektion), weitere Anlässe als ruhige Liste (P09), der Ablauf und die
 * Fragen aus den bereits übersetzten Texten der Unterseiten (P04), Zusagen mit
 * Phosphor-Icons ohne Kreise (P05, P07), Orte mit Karte. Der Abschluss
 * «Diskret anfragen» beschriftet den Formularabschnitt (PageFrame contact).
 */
export default function PremiumOverviewView({ lang }: { lang: Locale }) {
  const dict = getDict(lang);
  const { premiumOverview: content, home, servicesOverview } = dict.seiten;
  const { ui, pages, misc, premium } = dict;
  const nav = navDicts[lang];

  const offerPaths = content.offers.map(offer => offer.path);
  const panels = content.offers.map(offer => ({
    path: offer.path,
    label: pages[offer.path].label,
    text: offer.text,
  }));

  // Vertrauenszeile im Kopf aus zwei belegten Zusagen (P03, E18)
  const promise = (key: PromiseKey) =>
    content.promises.find(item => item.key === key)?.text;
  const trustLine = [promise("persoenlich"), promise("diskret")]
    .filter(Boolean)
    .join(" ");

  // Ablauf: die ersten drei Schritte der Luxusimmobilien-Seite (Anfrage, Rundgang
  // und Offerte, feste Regeln). «Ihr Team» folgt inhaltlich in den Zusagen.
  const steps = premium.luxusimmobilien.steps.slice(0, 3);
  // Fragen ohne «Wo sind Sie tätig?», das beantwortet die Karte direkt darunter
  const faq = premium.luxusimmobilien.faq.slice(0, 6);

  const pins = placePins
    .filter(pin => premiumPlaces.includes(pin.name))
    .map(pin => ({ x: pin.x, y: pin.y, label: pin.name }));

  // Kennzeile nur, wenn die Premium-Linie einen eigenen Namen trägt (S12, E38)
  const eyebrow = company.premiumBrand ? ui.premiumLine : undefined;

  // Titel der Anlässe-Sektion: die Frage aus dem Premium-Einstieg der Leistungsübersicht
  const offersTitle = servicesOverview.premium.title;

  const navItems = [
    { id: "anlaesse", title: offersTitle },
    { id: "ausserdem", title: content.moreTitle },
    { id: "zusagen", title: content.promisesTitle },
    { id: "orte", title: misc.map.areaLabel },
  ];

  return (
    <PageFrame
      lang={lang}
      path="/premium"
      mainClassName="bg-ink"
      contact={content.cta}
    >
      {/* Hub zu den drei Premium-Seiten als ItemList */}
      <JsonLd data={itemListJsonLd("/premium", offerPaths, lang)} />

      <PageHero
        path="/premium"
        lang={lang}
        tone="dark"
        eyebrow={eyebrow}
        title={content.h1}
        lead={content.lead}
        aside={
          /* Bildfläche erst ab lg, solange kein Foto freigegeben ist: auf dem
             Handy kein Platzhalter vor dem ersten Beleg (P10, E19) */
          <ImageSlot
            lang={lang}
            tone="dark"
            label={content.line}
            parallax="drift"
            className={`aspect-[16/10] w-full lg:aspect-[5/4] xl:aspect-[16/10] ${
              imagesArePlaceholders ? "max-lg:hidden" : ""
            }`}
          />
        }
      >
        {content.nameMeaning && (
          <p className="mb-8 max-w-[56ch] font-medium text-white/80">
            {content.nameMeaning}
          </p>
        )}
        {/* Nächster Schritt im ersten Bildschirm: Anfrage und Telefon (P03) */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="xl" className="arrow-link">
            <a href="#kontakt-formular" data-cta="kopf-seite">
              {content.cta.title}
              <ArrowRight weight="regular" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="xl" variant="inverse">
            <a href={company.phone.href} className="tabular-nums">
              <Phone weight="regular" aria-hidden="true" />
              {company.phone.display}
            </a>
          </Button>
        </div>
        {trustLine && (
          <p className="mt-6 max-w-[56ch] text-[0.9375rem] font-medium leading-relaxed text-white/75">
            {trustLine}
          </p>
        )}
      </PageHero>

      {/* Abschnittsleiste mit Scrollspy: Anlässe, Ausserdem, Zusagen, Orte */}
      <SectionNav label={ui.onThisPage} items={navItems} tone="dark" />

      {/* Drei Anlässe als Stapel-Tafeln, die einzige gepinnte Sektion der Seite (P04, P08, P13, P15) */}
      <section
        id="anlaesse"
        aria-labelledby="anlaesse-titel"
        className="on-dark bg-ink text-white"
      >
        <div className="container pt-12 pb-10 lg:pt-16 lg:pb-12">
          <SectionHead
            id="anlaesse-titel"
            title={offersTitle}
            tone="dark"
            className="max-w-3xl"
          />
        </div>
        <StackPanels
          items={panels}
          lang={lang}
          eyebrow={eyebrow}
          linkLabel={ui.toService}
        />
      </section>

      {/* Weitere Anlässe als ruhige, nummerierte Liste mit Hairlines statt Karten (P09) */}
      <section
        id="ausserdem"
        aria-labelledby="ausserdem-titel"
        className="on-dark section bg-ink text-white"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <SectionHead
            id="ausserdem-titel"
            title={content.moreTitle}
            tone="dark"
            className="lg:col-span-4"
          />
          <RevealGroup
            as="ol"
            className="border-t border-white/15 md:grid md:grid-cols-2 md:gap-x-12 lg:col-span-8"
          >
            {content.more.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-white/15 py-6"
              >
                <span
                  className="t-eyebrow pt-1.5 tabular-nums text-brass"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="hyphens font-display text-[1.125rem] font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-medium leading-relaxed text-white/80">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Ablauf aus den Schritten der Luxusimmobilien-Seite, vertikal ohne Pinning (P04) */}
      <section
        id="ablauf"
        aria-labelledby="ablauf-titel"
        className="on-dark section border-t border-white/10 bg-ink-800 text-white"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <SectionHead
            id="ablauf-titel"
            title={ui.steps}
            tone="dark"
            className="lg:col-span-4"
          />
          <div className="lg:col-span-7 lg:col-start-6">
            <ProcessScrolly
              steps={steps}
              lang={lang}
              tone="dark"
              variant="vertical"
              figureKeys={["anfrage", "besichtigung", "offerte"]}
              idPrefix="ablauf-schritt"
            />
          </div>
        </div>
      </section>

      {/* Zusagen: Hairline-Raster in Spalten, die zehn teilen (P07), Icons ohne Kreis (P05) */}
      <section
        id="zusagen"
        aria-labelledby="zusagen-titel"
        className="on-dark section bg-ink text-white"
      >
        <div className="container">
          <SectionHead
            id="zusagen-titel"
            title={content.promisesTitle}
            tone="dark"
            className="mb-12 max-w-3xl"
          />
          <RevealGroup
            as="ul"
            className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-5"
          >
            {content.promises.map(item => {
              const Glyph = promiseIcons[item.key];
              return (
                <li key={item.key} className="bg-ink p-6 lg:p-7">
                  <Glyph
                    weight="duotone"
                    className="mb-5 size-7 text-brass"
                    aria-hidden="true"
                  />
                  <h3 className="hyphens font-display text-lg font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-medium leading-relaxed text-white/80">
                    {item.text}
                  </p>
                </li>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Einwände: Fragen und Antworten der Unterseiten, ohne JavaScript lesbar (P04) */}
      <section
        id="fragen"
        aria-labelledby="fragen-titel"
        className="on-dark section border-t border-white/10 bg-ink-800 text-white"
      >
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
          <SectionHead
            id="fragen-titel"
            title={ui.faq}
            tone="dark"
            className="lg:col-span-4"
          />
          <div className="lg:col-span-8">
            <Faq items={faq} lang={lang} tone="dark" />
          </div>
        </div>
      </section>

      {/* Orte mit Karte: Text und Button vor der Karte, Orte auf dem Handy in der Bildunterschrift (P11) */}
      <section
        id="orte"
        aria-labelledby="orte-titel"
        className="on-dark section bg-ink text-white"
      >
        <div className="container grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead
              id="orte-titel"
              title={content.places.title}
              tone="dark"
              intro={
                <RichText
                  text={content.places.text}
                  lang={lang}
                  linkClassName={darkLink}
                />
              }
            />
            <Button
              asChild
              size="lg"
              variant="inverse"
              className="arrow-link mt-8"
            >
              <Link href={localizePath("/einzugsgebiet", lang)}>
                {home.area.link}
                <ArrowRight weight="regular" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <CantonMap
              lang={lang}
              tone="dark"
              texts={{ ...misc.map, seat: nav.chrome.seat }}
              pins={pins}
              mobilePins="seat"
              className="mx-auto max-w-[40rem]"
            />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
