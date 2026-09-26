import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import OfferCta from "@/components/OfferCta";
import { Card } from "@/components/ui/card";
import RichText from "@/components/RichText";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";

// Ein Sitz, fünf Kantone, alle Leistungen im ganzen Gebiet (R4b, W04, R4d).
// Texte aus content/de/seiten.ts, Kantone aus shared/company.ts (M54).
export default function AreaView({ lang }: { lang: Locale }) {
  const { area } = getDict(lang).seiten;
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/einzugsgebiet" />

      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-red-50/40">
          <div className="container max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {area.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {area.lead}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                {area.cantonsTitle}
              </h2>
              <ul className="space-y-3">
                {area.cantonLabels.map(canton => (
                  <li
                    key={canton}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    {canton}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                {area.seatTitle}
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    {company.legalName}
                    <br />
                    {company.address.street}, {company.address.postalCode}{" "}
                    {company.address.city}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-5 h-5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <a href={company.phone.href} className="hover:text-primary">
                    {company.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    className="w-5 h-5 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-primary"
                  >
                    {company.email}
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="pb-16">
          <div className="container max-w-4xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              {area.places.title}
            </h2>
            <p className="text-slate-700 mb-8 max-w-3xl">
              <RichText text={area.places.text} lang={lang} />
            </p>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {area.places.groups.map(group => (
                <div
                  key={group.title}
                  className="border-t border-slate-200 pt-4"
                >
                  <dt className="font-semibold text-slate-900">
                    {group.title}
                  </dt>
                  <dd className="text-slate-600 mt-1">
                    {group.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <OfferCta title={area.cta.title} text={area.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/einzugsgebiet" />
    </div>
  );
}
