import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { company } from "../../shared/company";

export const metadata: Metadata = {
  title: "Leistungen: Reinigung und Hauswartung",
  description: `Unterhalts-, Büro-, Sonder-, Bau-, Fenster- und Industriereinigung, Hauswartung und Facility Services von ${company.brand} in Luzern, Zug und Umgebung.`,
};

// Auswahlhilfe nach Anlass (Zielbild v2, Webseite-Analyse/03, Abschnitt 2a).
// Nur Leistungen, die der Kunde bestätigt hat (R3a–R3c).
const groups = [
  {
    title: "Laufende Reinigung",
    text: "Für Liegenschaften, Büros und Gewerbeflächen in einem festen Rhythmus.",
    items: [
      { title: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung", text: "Regelmässige Reinigung von Liegenschaften und Gewerbeflächen, Nachfüllservice inklusive." },
      { title: "Büro- und Praxisreinigung", href: "/leistungen/bueroreinigung", text: "Reinigung von Büros und Praxen, abgestimmt auf Ihre Arbeitszeiten." },
    ],
  },
  {
    title: "Einmalige und besondere Reinigung",
    text: "Für Bau, Umzug, Glasflächen und Produktion.",
    items: [
      { title: "Sonderreinigungen", href: "/leistungen/sonderreinigungen", text: "Grundreinigung sowie Umzugs- und Wohnungsendreinigung mit Abnahmegarantie." },
      { title: "Bau- und Bauendreinigung", href: "/leistungen/baureinigung", text: "Reinigung während und nach Bau- und Umbauarbeiten." },
      { title: "Fenster- und Fassadenreinigung", href: "/leistungen/fenster-und-fassadenreinigung", text: "Fenster, Glasflächen und Fassaden, auch mit Hochdruck." },
      { title: "Industrie- und Hallenreinigung", href: "/leistungen/industrie-und-hallenreinigung", text: "Produktions- und Lagerhallen, Maschinen und Anlagen." },
    ],
  },
  {
    title: "Betreuung von Liegenschaften",
    text: "Für Verwaltungen, Eigentümer und Unternehmen, die alles aus einer Hand wollen.",
    items: [
      { title: "Hauswartung", href: "/leistungen/hauswartung", text: "Kontrollgänge, Treppenhaus, Waschküche, Kleinreparaturen, Haustechnik, Wohnungsübergaben, Entsorgung und Umgebung." },
      { title: "Aussen- und Grünflächenpflege", href: "/leistungen/aussen-und-gruenflaechenpflege", text: "Pflege von Umgebung und Grünflächen Ihrer Liegenschaft." },
      { title: "Facility Services", href: "/leistungen/facility-services", text: "Mehrere Leistungen in einem Vertrag mit einer Ansprechperson." },
    ],
  },
];

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 to-red-50/40">
        <div className="container max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Leistungen: Reinigung und Hauswartung
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
            Wählen Sie nach Anlass. Alle Leistungen bieten wir in den Kantonen Luzern, Zug, Aargau, Nidwalden und
            Obwalden an. Für eine Offerte kommen wir kostenlos und unverbindlich vorbei.
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="py-12">
          <div className="container max-w-5xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{group.title}</h2>
            <p className="text-slate-600 mb-6">{group.text}</p>
            <div className="grid gap-6 md:grid-cols-2">
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className="group">
                  <Card className="h-full p-6 transition-shadow group-hover:shadow-lg">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center justify-between gap-4">
                      {item.title}
                      <ArrowRight className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </h3>
                    <p className="text-slate-600">{item.text}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-12 pb-20">
        <div className="container max-w-5xl">
          <div className="rounded-xl bg-slate-900 text-white p-8 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Villen, Privatjets oder Yachten?</h2>
              <p className="text-slate-300">Für besondere Ansprüche gibt es unseren Premium-Bereich.</p>
            </div>
            <Link
              href="/premium"
              className="mt-6 md:mt-0 inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Zum Premium-Bereich
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
