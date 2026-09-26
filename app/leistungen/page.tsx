import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import OfferCta from "@/components/OfferCta";
import { Card } from "@/components/ui/card";
import { metaFor } from "../../shared/seo";
import { servicesOverview } from "../../content/de/seiten";

export const metadata: Metadata = metaFor("/leistungen");

// Auswahlhilfe nach Anlass, Texte aus content/de/seiten.ts
export default function Leistungen() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 to-red-50/40">
          <div className="container max-w-5xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {servicesOverview.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              {servicesOverview.lead}
            </p>
          </div>
        </section>

        {servicesOverview.groups.map(group => (
          <section key={group.title} className="py-12">
            <div className="container max-w-5xl">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {group.title}
              </h2>
              <p className="text-slate-600 mb-6">{group.text}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map(item => (
                  <Link key={item.path} href={item.path} className="group">
                    <Card className="h-full p-6 transition-shadow group-hover:shadow-lg">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between gap-4">
                        {item.title}
                        <ArrowRight
                          className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="text-slate-600">{item.text}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="rounded-xl border border-slate-200 p-8 md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {servicesOverview.premium.title}
                </h2>
                <p className="text-slate-600">
                  {servicesOverview.premium.text}
                </p>
              </div>
              <Link
                href="/premium"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 font-semibold text-red-700 underline-offset-4 hover:underline"
              >
                {servicesOverview.premium.link}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <OfferCta
          title={servicesOverview.cta.title}
          text={servicesOverview.cta.text}
        />
      </main>

      <SwissFooter />
    </div>
  );
}
