import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Languages, UserCheck, ClipboardCheck } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { company } from "../../shared/company";

export const metadata: Metadata = {
  title: "Premium: Reinigung für besondere Ansprüche",
  description: `Diskrete Reinigung für Villen, Lofts und Luxusimmobilien, Privatjets und Yachten in Luzern, Zug und Umgebung. ${company.brand}.`,
};

// Premium-Bereich (E16, E28): vermögende Privatkunden und Häuser mit
// besonderen Wünschen. Nur belegte Angaben (E18), keine Referenzen (R6f).
const offers = [
  { title: "Luxusimmobilien", href: "/premium/luxusimmobilien", text: "Villen, Lofts und Residenzen, regelmässig oder vor besonderen Anlässen, mit Pflege empfindlicher Materialien." },
  { title: "Privatjet", href: "/premium/privatjet", text: "Kabinenreinigung mit Rücksicht auf hochwertige Materialien, nach Absprache mit Ihnen." },
  { title: "Yacht", href: "/premium/yacht", text: "Reinigung von Booten und Yachten am Vierwaldstättersee und am Zugersee." },
];

const promises = [
  { icon: UserCheck, title: "Persönlich", text: "Ihre Anfrage bearbeitet der Geschäftsführer persönlich." },
  { icon: Languages, title: "Vier Sprachen", text: "Deutsch, Englisch, Französisch und Italienisch." },
  { icon: Shield, title: "Versichert", text: "Betriebshaftpflicht mit CHF 10 Mio. Deckung." },
  { icon: ClipboardCheck, title: "Offerte vor Ort", text: "Kostenlos und unverbindlich, nach einer Besichtigung." },
];

export default function Premium() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <section className="pt-32 pb-16 bg-slate-900 text-white">
        <div className="container max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-300 mb-4">Premium</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Reinigung für besondere Ansprüche</h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Für Villen, Lofts und Luxusimmobilien, Privatjets und Yachten sowie Hotels mit besonderen Wünschen.
            Diskret, sorgfältig und in Ihrer Sprache.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <Link key={offer.href} href={offer.href} className="group">
              <Card className="h-full p-6 transition-shadow group-hover:shadow-lg">
                <h2 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between gap-4">
                  {offer.title}
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </h2>
                <p className="text-slate-600">{offer.text}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container max-w-5xl">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">Worauf Sie sich verlassen können</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {promises.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 pb-20">
        <div className="container max-w-5xl">
          <div className="rounded-xl border border-slate-200 p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Diskret anfragen</h2>
              <p className="text-slate-600">Rufen Sie uns an oder schreiben Sie uns. Wir melden uns {company.responseTime}.</p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
              <a
                href={company.phone.href}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {company.phone.display}
              </a>
              <Link
                href="#kontakt-formular"
                className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Zum Formular
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
