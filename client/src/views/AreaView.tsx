import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import OfferCta from "@/components/OfferCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import CantonMap from "@/components/CantonMap";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import RichText from "@/components/RichText";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { cantonInfo } from "../../../shared/cantons";
import { placePins } from "../../../shared/canton-map";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * Einzugsgebiet (F5, F10): ein Sitz, fünf Kantone, alle Leistungen im ganzen
 * Gebiet (R4b, W04, R4d). Dunkler Kopf mit animierter Karte: Kantone erscheinen
 * nacheinander, Orte springen als Pins auf. Darunter die fünf Kantone als
 * Bildkarten, die Regionen mit Bildfläche, Sitz und Kontakt.
 * Karte aus den Kantonsgrenzen von swisstopo (S85), Texte aus content/<sprache>/seiten.ts.
 */
export default function AreaView({ lang }: { lang: Locale }) {
  const { area } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  const { chrome } = navDicts[lang];

  return (
    <PageFrame lang={lang} path="/einzugsgebiet">
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid items-center gap-10 pt-8 pb-14 md:pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-20">
          <div className="lg:col-span-5">
            <Breadcrumbs path="/einzugsgebiet" lang={lang} tone="dark" />
            <Reveal>
              <h1 className="t-h1 max-w-[18ch] text-white">{area.h1}</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-7 max-w-[48ch] text-white/90">
                {area.lead}
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
                <Button asChild size="xl" variant="inverse">
                  <a href="#kantone">
                    {area.cantonsTitle}
                    <ArrowRight className="rotate-90" aria-hidden="true" />
                  </a>
                </Button>
              </div>
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
              pins={placePins
                .filter(pin => pin.name !== "Luzern")
                .map(pin => ({ x: pin.x, y: pin.y, label: pin.name }))}
              className="mx-auto max-w-[46rem]"
            />
          </div>
        </div>
      </section>

      <div className="border-b border-line">
        <div className="container py-6">
          <TrustStrip lang={lang} compact />
        </div>
      </div>

      {/* Fünf Kantone als Bildkarten */}
      <section aria-labelledby="kantone" className="section">
        <div className="container">
          <SectionHead
            id="kantone"
            title={area.cantonsTitle}
            className="mb-10"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {area.cantonLabels.map((label, index) => {
              const code = cantonInfo[company.cantons[index]]?.code;
              return (
                <Reveal
                  as="li"
                  key={label}
                  delay={index * 90}
                  className="card-lift group bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"
                >
                  <a href="#kontakt-formular" className="flex h-full flex-col">
                    <div className="relative">
                      <ImageSlot
                        lang={lang}
                        hover
                        label={label}
                        className="aspect-[4/3] w-full"
                      />
                      <span className="absolute left-4 top-4 bg-signal px-3 py-1.5 font-mono text-sm font-bold tracking-[0.14em] text-white">
                        {code}
                      </span>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-3 p-5">
                      <span className="font-display text-lg font-bold leading-tight text-ink transition-colors group-hover:text-signal">
                        {label}
                      </span>
                      <ArrowRight
                        className="h-5 w-5 shrink-0 text-signal"
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Orte an Seen und in den Bergen */}
      <section aria-labelledby="orte" className="section bg-stone">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead
              id="orte"
              title={area.places.title}
              className="lg:col-span-7"
            />
            <Reveal delay={100} className="lg:col-span-5">
              <p className="t-lead text-ink-600">
                <RichText text={area.places.text} lang={lang} />
              </p>
            </Reveal>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {area.places.groups.map((group, index) => (
              <Reveal
                as="li"
                key={group.title}
                delay={index * 90}
                className={`card-lift group bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)] ${index === 0 ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                <ImageSlot
                  lang={lang}
                  hover
                  label={group.title}
                  className="aspect-[16/9] w-full"
                />
                <div className="p-6 md:p-7">
                  <h3 className="t-h3 text-ink">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map(place => (
                      <li
                        key={place}
                        className="rounded-full border border-line bg-stone px-3 py-1.5 text-sm font-semibold text-ink"
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="mt-10">
            <Button asChild size="lg" variant="outline" className="arrow-link">
              <Link href={localizePath("/premium", lang)}>
                {getDict(lang).seiten.servicesOverview.premium.link}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Sitz und Kontakt */}
      <section aria-labelledby="sitz" className="section">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHead id="sitz" title={area.seatTitle} />
            <Reveal delay={100}>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {[
                  {
                    icon: MapPin,
                    label: chrome.address,
                    value: `${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
                  },
                  {
                    icon: Phone,
                    label: chrome.phone,
                    value: company.phone.display,
                    href: company.phone.href,
                  },
                  {
                    icon: Mail,
                    label: chrome.email,
                    value: company.email,
                    href: `mailto:${company.email}`,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="relative py-5 pl-10">
                    <dt className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
                      <Icon
                        className="absolute left-0 top-5 h-5 w-5 text-signal"
                        aria-hidden="true"
                      />
                      {label}
                    </dt>
                    <dd className="mt-1 break-words text-[1.0625rem] font-medium text-ink">
                      {href ? (
                        <a
                          href={href}
                          className="tabular-nums transition-colors hover:text-signal"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal

            delay={150}
            className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7"
          >
            <ImageSlot
              lang={lang}
              label={chrome.seat}
              className="aspect-[16/10] w-full"
            />
          </Reveal>
        </div>
      </section>

      <OfferCta title={area.cta.title} text={area.cta.text} lang={lang} />
    </PageFrame>
  );
}
