import { Mail, MapPin, Phone } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import OfferCta from "@/components/OfferCta";
import Breadcrumbs from "@/components/Breadcrumbs";
import CantonMap from "@/components/CantonMap";
import SectionHead from "@/components/SectionHead";
import RichText from "@/components/RichText";
import { company } from "../../../shared/company";
import { cantonInfo } from "../../../shared/cantons";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Einzugsgebiet (F5): ein Sitz, fünf Kantone, alle Leistungen im ganzen Gebiet
 * (R4b, W04, R4d). Karte aus den Kantonsgrenzen von swisstopo, Texte aus
 * content/<sprache>/seiten.ts, Kantone aus shared/company.ts (M54).
 */
export default function AreaView({ lang }: { lang: Locale }) {
  const { area } = getDict(lang).seiten;
  const { chrome } = navDicts[lang];

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/einzugsgebiet" />

      <main id="inhalt">
        <section className="border-b border-line bg-stone">
          <div className="container grid items-center gap-12 pt-10 pb-16 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-20">
            <div className="lg:col-span-6">
              <Breadcrumbs path="/einzugsgebiet" lang={lang} />
              <h1 className="t-h1 max-w-[18ch] text-ink">{area.h1}</h1>
              <p className="t-lead mt-8 max-w-[48ch] text-mute">{area.lead}</p>
            </div>
            <div className="lg:col-span-6 xl:col-span-5 xl:col-start-8">
              <CantonMap lang={lang} />
            </div>
          </div>
        </section>

        {/* Kantone als Reihe */}
        <section aria-labelledby="kantone" className="section-tight">
          <div className="container">
            <h2 id="kantone" className="t-eyebrow mb-6 text-mute">{area.cantonsTitle}</h2>
            <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
              {area.cantonLabels.map((label, index) => (
                <li key={label} className="flex min-h-[9rem] flex-col justify-between bg-white p-6">
                  <span className="font-mono text-sm font-medium tracking-[0.14em] text-signal" aria-hidden="true">
                    {cantonInfo[company.cantons[index]]?.code}
                  </span>
                  <span className="font-display text-xl font-semibold leading-tight text-ink">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Orte an Seen und in den Bergen */}
        <section aria-labelledby="orte" className="section bg-stone">
          <div className="container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]">
                <SectionHead id="orte" title={area.places.title} />
                <p className="t-lead mt-6 max-w-[40ch] text-mute">
                  <RichText text={area.places.text} lang={lang} />
                </p>
              </div>
            </div>
            <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {area.places.groups.map((group) => (
                <div key={group.title} className="border-t border-ink py-6">
                  <dt className="t-h3 text-ink">{group.title}</dt>
                  <dd className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((place) => (
                      <span key={place} className="border border-line bg-white px-3 py-1.5 text-sm text-ink-700">
                        {place}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Sitz und Kontakt */}
        <section aria-labelledby="sitz" className="section-tight">
          <div className="container grid gap-10 lg:grid-cols-12">
            <h2 id="sitz" className="t-h2 text-ink lg:col-span-4">{area.seatTitle}</h2>
            <dl className="grid gap-px bg-line sm:grid-cols-3 lg:col-span-8">
              <div className="bg-white p-6">
                <dt className="t-eyebrow mb-3 flex items-center gap-2 text-mute">
                  <MapPin className="h-4 w-4 text-signal" aria-hidden="true" />
                  {chrome.address}
                </dt>
                <dd className="leading-relaxed text-ink">
                  {company.legalName}
                  <br />
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </dd>
              </div>
              <div className="bg-white p-6">
                <dt className="t-eyebrow mb-3 flex items-center gap-2 text-mute">
                  <Phone className="h-4 w-4 text-signal" aria-hidden="true" />
                  {chrome.phone}
                </dt>
                <dd>
                  <a href={company.phone.href} className="font-medium text-ink tabular-nums hover:text-signal">{company.phone.display}</a>
                </dd>
              </div>
              <div className="bg-white p-6">
                <dt className="t-eyebrow mb-3 flex items-center gap-2 text-mute">
                  <Mail className="h-4 w-4 text-signal" aria-hidden="true" />
                  {chrome.email}
                </dt>
                <dd className="break-words">
                  <a href={`mailto:${company.email}`} className="font-medium text-ink hover:text-signal">{company.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <OfferCta title={area.cta.title} text={area.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/einzugsgebiet" />
    </div>
  );
}
