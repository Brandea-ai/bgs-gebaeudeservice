import { ArrowRight, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import ConsentMap from "@/components/ConsentMap";
import Faq from "@/components/Faq";
import OfferCta from "@/components/OfferCta";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

/**
 * Kontakt (F5, M21, M49): Kontaktwege im Kopf, Ablauf, Karte und Fragen. Das
 * Formular steht im Footer jeder Seite (#kontakt-formular), die Karte lädt erst
 * nach Klick (E20).
 */
export default function ContactView({ lang }: { lang: Locale }) {
  const { contact } = getDict(lang).seiten;
  const { ui, misc } = getDict(lang);
  const { chrome } = navDicts[lang];

  const channels = [
    { icon: Phone, title: contact.phone.title, value: company.phone.display, href: company.phone.href },
    { icon: Smartphone, title: contact.phone.mobile, value: company.mobile.display, href: company.mobile.href },
    { icon: Mail, title: contact.email.title, value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, title: contact.address.title, value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/kontakt" />

      <main id="inhalt">
        <PageHero
          path="/kontakt"
          lang={lang}
          eyebrow={chrome.contactEyebrow}
          title={contact.h1}
          lead={contact.lead}
          aside={
            <dl aria-label={contact.channelsLabel} className="border-t border-ink">
              {channels.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="relative border-b border-line py-5 pl-9">
                  <dt className="t-eyebrow mb-1 text-mute">
                    <Icon className="absolute left-0 top-6 h-5 w-5 text-signal" aria-hidden="true" />
                    {title}
                  </dt>
                  <dd className="break-words text-[1.125rem] text-ink">
                    {href ? (
                      <a href={href} className="font-medium tabular-nums hover:text-signal transition-colors">{value}</a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          }
        >
          <Button asChild size="xl" className="arrow-link mt-10">
            <a href="#kontakt-formular">
              {contact.formLink}
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </PageHero>

        <section aria-labelledby="ablauf" className="section">
          <div className="container">
            <SectionHead id="ablauf" eyebrow={ui.steps} title={contact.steps.title} className="mb-14 max-w-3xl" />
            <Steps steps={contact.steps.items} lang={lang} />
          </div>
        </section>

        <section aria-labelledby="karte" className="section bg-stone">
          <div className="container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead id="karte" title={contact.map.title} intro={contact.map.text} />
            </div>
            <div className="overflow-hidden bg-white lg:col-span-8">
              <ConsentMap texts={misc.map} />
            </div>
          </div>
        </section>

        <section aria-labelledby="fragen" className="section">
          <div className="container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead id="fragen" title={ui.faq} className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)]" />
            </div>
            <div className="lg:col-span-8">
              <Faq items={contact.faq} lang={lang} />
            </div>
          </div>
        </section>

        <OfferCta title={contact.cta.title} text={contact.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/kontakt" />
    </div>
  );
}
