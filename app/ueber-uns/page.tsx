import { ArrowRight, Check } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import ImageSlot from "@/components/ImageSlot";
import OfferCta from "@/components/OfferCta";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { company } from "../../shared/company";
import { metaFor } from "../../shared/seo";
import { ui } from "../../content/de/common";
import { about, proof } from "../../content/de/seiten";

export const metadata = metaFor("/ueber-uns");

// Über uns als Server-Komponente (M21, M47), Texte aus content/de/seiten.ts.
// Personen erst mit Einwilligung, Bildfläche als Platzhalter bis zur Freigabe (E19, E59).
export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <main>
        <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-slate-50 to-red-50/40">
          <div className="container max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {about.h1}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mb-8">
                {about.lead}
              </p>
              <Button asChild size="lg" className="text-sm sm:text-base px-6">
                <a href="#kontakt-formular">
                  {ui.offerCta}
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <ImageSlot
              src="/ueber-uns-hero.jpg"
              alt={about.imageAlt}
              className="w-full h-72 lg:h-[420px]"
            />
          </div>
        </section>

        <section
          aria-label="In Zahlen"
          className="py-12 border-b border-slate-200"
        >
          <div className="container max-w-5xl">
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {proof.map(item => (
                <div key={item.label}>
                  <dt className="text-sm text-slate-600">{item.label}</dt>
                  <dd className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="zusagen" className="py-16">
          <div className="container max-w-5xl">
            <h2
              id="zusagen"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
            >
              {about.promises.title}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {about.promises.items.map(item => (
                <li key={item.title} className="flex items-start gap-4">
                  <Check
                    className="w-6 h-6 text-red-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ansprechperson und Registerdaten (R5d, N033, M47) */}
        <section className="pb-20">
          <div className="container max-w-5xl grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {about.contact.title}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {about.contact.text}
              </p>
            </Card>
            <Card className="p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                {about.register.title}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {company.legalName}
                <br />
                {about.register.court}
                <br />
                UID {company.uid}
              </p>
            </Card>
          </div>
        </section>

        <OfferCta title={about.cta.title} text={about.cta.text} />
      </main>

      <SwissFooter />
    </div>
  );
}
