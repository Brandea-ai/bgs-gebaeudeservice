import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import ConsentMap from "@/components/ConsentMap";
import Faq from "@/components/Faq";
import OfferCta from "@/components/OfferCta";
import Steps from "@/components/Steps";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { company } from "../../shared/company";
import { metaFor } from "../../shared/seo";
import { ui } from "../../content/de/common";
import { contact } from "../../content/de/seiten";

export const metadata = metaFor("/kontakt");

// Kontakt als Server-Komponente (M21, M49), Texte aus content/de/seiten.ts.
// Das Formular steht im Footer jeder Seite (#kontakt-formular), die Karte lädt erst nach Klick (E20).
export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <main>
        <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-slate-50 to-red-50/40">
          <div className="container max-w-5xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{contact.h1}</h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mb-8">{contact.lead}</p>
            <Button asChild size="lg" className="text-sm sm:text-base px-6">
              <a href="#kontakt-formular">
                {contact.formLink}
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        <section aria-label="Kontaktwege" className="py-16">
          <div className="container max-w-5xl grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <Phone className="w-10 h-10 text-red-700 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-bold text-xl text-slate-900 mb-2">{contact.phone.title}</h2>
              <p className="text-slate-600 mb-4">{contact.phone.text}</p>
              <p className="space-y-1">
                <a href={company.phone.href} className="block text-red-700 font-semibold hover:underline">
                  {company.phone.display}
                </a>
                <a href={company.mobile.href} className="block text-red-700 font-semibold hover:underline">
                  {contact.phone.mobile} {company.mobile.display}
                </a>
              </p>
            </Card>

            <Card className="p-8 text-center">
              <Mail className="w-10 h-10 text-red-700 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-bold text-xl text-slate-900 mb-2">{contact.email.title}</h2>
              <p className="text-slate-600 mb-4">{contact.email.text}</p>
              <a href={`mailto:${company.email}`} className="text-red-700 font-semibold hover:underline break-all">
                {company.email}
              </a>
            </Card>

            <Card className="p-8 text-center">
              <MapPin className="w-10 h-10 text-red-700 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-bold text-xl text-slate-900 mb-2">{contact.address.title}</h2>
              <p className="text-slate-600 mb-4">{contact.address.text}</p>
              <p className="text-slate-900 font-semibold">
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </p>
            </Card>
          </div>
        </section>

        <section aria-labelledby="ablauf" className="py-16 bg-slate-50">
          <div className="container max-w-5xl">
            <h2 id="ablauf" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{contact.steps.title}</h2>
            <Steps steps={contact.steps.items} />
          </div>
        </section>

        <section aria-labelledby="karte" className="py-16">
          <div className="container max-w-5xl">
            <h2 id="karte" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{contact.map.title}</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ConsentMap />
            </div>
            <p className="text-slate-600 mt-4">{contact.map.text}</p>
          </div>
        </section>

        <section aria-labelledby="fragen" className="py-16 bg-slate-50">
          <div className="container max-w-5xl">
            <h2 id="fragen" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{ui.faq}</h2>
            <Faq items={contact.faq} />
          </div>
        </section>

        <div className="pt-16">
          <OfferCta title={contact.cta.title} text={contact.cta.text} />
        </div>
      </main>

      <SwissFooter />
    </div>
  );
}
