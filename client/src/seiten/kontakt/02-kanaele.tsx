import { ArrowRight, DeviceMobile, Envelope, MapPin, NotePencil, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { company } from "../../../../shared/company";
import { kontaktKontext, type KontaktProps } from "./kontext";

type Channel = {
  key: string;
  icon: Icon;
  title: string;
  value: string;
  hint: string;
  action: string;
  href: string;
  /** Hauptweg: dunkle Karte, Ziel ist das Formular */
  main?: boolean;
};

/**
 * Kontaktwege als Karten (E80): jede Karte ist als Ganzes ein Link und sagt,
 * wofür sich der Weg eignet. Oben drei gleich breite Karten, darunter zwei
 * breitere; das Formular als Hauptweg auf Tinte.
 */
export default function KontaktKanaele(props: KontaktProps) {
  const { contact } = kontaktKontext(props);
  const c = contact.channels;
  const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
  const channels: Channel[] = [
    { key: "phone", icon: Phone, ...c.phone, value: company.phone.display, href: company.phone.href },
    { key: "mobile", icon: DeviceMobile, ...c.mobile, value: company.mobile.display, href: company.mobile.href },
    { key: "email", icon: Envelope, ...c.email, value: company.email, href: `mailto:${company.email}` },
    { key: "form", icon: NotePencil, ...c.form, href: "#kontakt-formular", main: true },
    { key: "address", icon: MapPin, ...c.address, value: address, href: "#karte" },
  ];
  return (
    <section id="kontaktwege" aria-labelledby="kontaktwege-titel" className="section bg-white">
      <div className="container">
        <SectionHead id="kontaktwege-titel" title={c.title} />
        <RevealGroup as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {channels.map(({ key, icon: Glyph, title, value, hint, action, href, main }, index) => (
            <li key={key} className={`min-w-0 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${index === 4 ? "sm:col-span-2 lg:col-span-3" : ""}`}>
              <a
                href={href}
                data-cta={main ? "kontaktwege" : undefined}
                className={`card-lift group flex h-full flex-col rounded-[3px] p-6 md:p-8 ${
                  main
                    ? "on-dark bg-ink text-white"
                    : "border border-line bg-white text-ink shadow-[0_18px_40px_-32px_rgba(14,17,22,0.35)]"
                }`}
              >
                <Glyph weight="duotone" className={`size-9 ${main ? "text-white" : "text-signal"}`} aria-hidden="true" />
                <span className={`t-eyebrow mt-6 ${main ? "text-white/90" : "text-ink-600"}`}>{title}</span>
                <span
                  className={`mt-2 break-words font-display text-[1.375rem] font-bold leading-snug tabular-nums transition-colors md:text-[1.5rem] ${
                    main ? "text-white underline-offset-4 group-hover:underline" : "text-ink group-hover:text-signal"
                  }`}
                >
                  {value}
                </span>
                <span className={`mt-3 block max-w-[46ch] font-medium leading-relaxed ${main ? "text-white/90" : "text-ink-600"}`}>
                  {hint}
                </span>
                <span className={`mt-auto inline-flex items-center gap-2 pt-6 font-semibold ${main ? "text-white" : "text-signal"}`}>
                  {action}
                  <ArrowRight weight="duotone" className="size-4 shrink-0" aria-hidden="true" />
                </span>
              </a>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
