import { ArrowRight, DeviceMobile, Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import SectionHead from "@/components/SectionHead";
import { company } from "../../../../shared/company";
import { kontaktKontext, type KontaktProps } from "./kontext";

type Line = { icon: Icon; label: string; value: string; href: string };
type Channel = { key: string; icon: Icon; title: string; hint: string; action: string; lines: Line[] };

/**
 * Kontaktwege (E80, Audit visuell /kontakt und Umbau 7): Telefon mit Festnetz
 * und Mobil in einer Karte, E-Mail, Adresse. Das Formular steht direkt darunter
 * und braucht hier keine eigene Karte mehr.
 *
 * Ab 640 px drei gleich hohe Karten mit Haarlinie statt Schatten, mit Hinweis,
 * wofür sich der Weg eignet. Hat eine Karte nur einen Link, ist die ganze Karte
 * der Link. Auf dem Handy Aktionszeilen: Symbol, Bezeichnung, Wert und Pfeil,
 * die ganze Zeile ist der Link, der Hinweis entfällt (spart rund 1000 px).
 */
export default function KontaktKanaele(props: KontaktProps) {
  const { contact } = kontaktKontext(props);
  const c = contact.channels;
  const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
  const channels: Channel[] = [
    {
      key: "phone",
      icon: Phone,
      ...c.phone,
      lines: [
        { icon: Phone, label: c.phone.title, value: company.phone.display, href: company.phone.href },
        { icon: DeviceMobile, label: c.phone.mobile, value: company.mobile.display, href: company.mobile.href },
      ],
    },
    {
      key: "email",
      icon: Envelope,
      ...c.email,
      lines: [{ icon: Envelope, label: c.email.title, value: company.email, href: `mailto:${company.email}` }],
    },
    {
      key: "address",
      icon: MapPin,
      ...c.address,
      lines: [{ icon: MapPin, label: c.address.title, value: address, href: "#karte" }],
    },
  ];
  return (
    <section id="kontaktwege" aria-labelledby="kontaktwege-titel" className="section bg-white">
      <div className="container">
        <SectionHead id="kontaktwege-titel" title={c.title} />
        <ul className="mt-8 border-t border-line sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-6 sm:border-t-0">
          {channels.map(({ key, icon: Glyph, title, hint, action, lines }) => {
            const single = lines.length === 1;
            return (
              <li
                key={key}
                className="group/karte relative min-w-0 sm:flex sm:flex-col sm:rounded-[3px] sm:border sm:border-line sm:p-6 sm:transition-colors sm:hover:border-ink/40 md:p-8"
              >
                <Glyph weight="duotone" className="hidden size-9 text-signal sm:block" aria-hidden="true" />
                <h3 className="t-eyebrow mt-6 hidden text-ink-600 sm:block">{title}</h3>
                <div className="sm:mt-2">
                  {lines.map((line, index) => (
                    <a
                      key={line.href}
                      href={line.href}
                      className={`group flex min-h-16 items-center gap-4 border-b border-line py-3 sm:min-h-11 sm:border-0 sm:py-1 ${
                        single ? "sm:after:absolute sm:after:inset-0" : ""
                      }`}
                    >
                      <line.icon weight="duotone" className="size-6 shrink-0 text-signal sm:hidden" aria-hidden="true" />
                      <span className="min-w-0 flex-1">
                        {/* Mobil trägt jede Zeile ihre Bezeichnung; in der Karte nennt die Kennzeile den Weg */}
                        <span className={`block text-sm font-semibold text-mute ${index === 0 ? "sm:hidden" : "sm:mt-2"}`}>
                          {line.label}
                        </span>
                        <span
                          className={`block break-words text-[1.0625rem] font-bold leading-snug tabular-nums text-ink transition-colors group-hover:text-signal sm:font-display ${
                            index === 0 ? "sm:text-[1.375rem] md:text-[1.5rem]" : "sm:text-[1.125rem]"
                          } ${single ? "sm:group-hover/karte:text-signal" : ""}`}
                        >
                          {line.value}
                        </span>
                      </span>
                      <ArrowRight weight="duotone" className="size-5 shrink-0 text-signal sm:hidden" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <p className="mt-3 hidden max-w-[46ch] font-medium leading-relaxed text-ink-600 sm:block">{hint}</p>
                {single && (
                  <span
                    className="mt-auto hidden items-center gap-2 pt-6 font-semibold text-signal sm:inline-flex"
                    aria-hidden="true"
                  >
                    {action}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" />
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
