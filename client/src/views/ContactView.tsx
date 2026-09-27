import { ArrowRight, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import ConsentMap from "@/components/ConsentMap";
import Faq from "@/components/Faq";
import OfferCta from "@/components/OfferCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import TrustStrip from "@/components/TrustStrip";
import { Button } from "@/components/ui/button";
import { company } from "../../../shared/company";
import { getDict } from "../../../content";
import type { Locale } from "../../../shared/i18n";

/**
 * Kontakt (F5, F11, M21, M49): Kontaktwege als Karten im Kopf, Ablauf, Karte
 * und Fragen. Das Formular steht im Footer jeder Seite (#kontakt-formular),
 * die Karte lädt erst nach Klick (E20).
 */
export default function ContactView({ lang }: { lang: Locale }) {
  const { contact } = getDict(lang).seiten;
  const { ui, misc } = getDict(lang);

  const channels = [
    {
      icon: Phone,
      title: contact.phone.title,
      value: company.phone.display,
      href: company.phone.href,
    },
    {
      icon: Smartphone,
      title: contact.phone.mobile,
      value: company.mobile.display,
      href: company.mobile.href,
    },
    {
      icon: Mail,
      title: contact.email.title,
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      title: contact.address.title,
      value: `${company.address.street}, ${company.address.postalCode} ${company.address.city}`,
    },
  ];

  return (
    <PageFrame lang={lang} path="/kontakt">
      <PageHero
        path="/kontakt"
        lang={lang}
        title={contact.h1}
        lead={contact.lead}
        aside={
          <ul
            aria-label={contact.channelsLabel}
            className="grid gap-3 sm:grid-cols-2"
          >
            {channels.map(({ icon: Icon, title, value, href }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={index * 80}
                className="card-lift bg-white p-5 shadow-[0_1px_0_rgba(14,17,22,0.04),0_18px_40px_-28px_rgba(14,17,22,0.35)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-600">
                  {title}
                </p>
                <p className="mt-1 break-words font-display text-[1.0625rem] font-bold leading-snug text-ink">
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
                </p>
              </Reveal>
            ))}
          </ul>
        }
      >
        <Button asChild size="xl" className="arrow-link mt-9">
          <a href="#kontakt-formular">
            {contact.formLink}
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </PageHero>

      <div className="border-b border-line">
        <div className="container py-6">
          <TrustStrip lang={lang} compact />
        </div>
      </div>

      <section aria-labelledby="ablauf" className="section">
        <div className="container">
          <SectionHead
            id="ablauf"
            title={contact.steps.title}
            className="mb-10 max-w-3xl"
          />
          <Steps steps={contact.steps.items} lang={lang} />
        </div>
      </section>

      <section aria-labelledby="karte" className="section bg-stone">
        <div className="container grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHead
              id="karte"
              title={contact.map.title}
              intro={contact.map.text}
            />
          </div>
          <Reveal
            variant="scale"
            className="overflow-hidden bg-white shadow-[0_1px_0_rgba(14,17,22,0.04),0_28px_56px_-32px_rgba(14,17,22,0.35)] lg:col-span-8"
          >
            <ConsentMap texts={misc.map} />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="fragen" className="section">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead
              id="fragen"
              title={ui.faq}
              className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]"
            />
          </div>
          <div className="lg:col-span-8">
            <Faq items={contact.faq} lang={lang} />
          </div>
        </div>
      </section>

      <OfferCta title={contact.cta.title} text={contact.cta.text} lang={lang} />
    </PageFrame>
  );
}
