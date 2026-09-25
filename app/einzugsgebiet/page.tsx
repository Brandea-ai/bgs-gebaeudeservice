import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { company } from "../../shared/company";

export const metadata: Metadata = {
  title: "Einzugsgebiet: Luzern, Zug, Aargau, Nidwalden und Obwalden",
  description: `${company.brand} arbeitet von ${company.address.city} aus in den Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden. Alle Leistungen im ganzen Gebiet.`,
};

// Bestätigt in den Rückfragen (R4b, W04, R4d): ein Sitz, fünf Kantone,
// alle Leistungen im ganzen Gebiet. Keine Ortsseiten ohne eigenen Inhalt (K09).
const cantons = ["Luzern", "Zug", "Aargau", "Nidwalden", "Obwalden"];

export default function Einzugsgebiet() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-red-50/40">
        <div className="container max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Einzugsgebiet: Luzern, Zug, Aargau, Nidwalden und Obwalden
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Wir arbeiten von unserem Sitz in {company.address.city} aus in fünf Kantonen. Alle Leistungen
            bieten wir im ganzen Gebiet an, für Unternehmen ebenso wie für anspruchsvolle Privatkunden.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Kantone</h2>
            <ul className="space-y-3">
              {cantons.map((canton) => (
                <li key={canton} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  Kanton {canton}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Sitz und Kontakt</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {company.legalName}
                  <br />
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <a href={company.phone.href} className="hover:text-primary">{company.phone.display}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-primary">{company.email}</a>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="pb-20">
        <div className="container max-w-4xl">
          <div className="rounded-xl bg-slate-900 text-white p-8">
            <h2 className="text-xl font-semibold mb-3">Liegt Ihr Objekt im Gebiet?</h2>
            <p className="text-slate-300 mb-6">
              Beschreiben Sie uns Objekt und Ort. Wir kommen für eine kostenlose und unverbindliche Offerte
              vorbei und melden uns {company.responseTime}.
            </p>
            <Link
              href="#kontakt-formular"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Offerte anfragen
            </Link>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
