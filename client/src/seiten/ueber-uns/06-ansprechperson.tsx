import { Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import { company } from "../../../../shared/company";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/**
 * Ansprechperson und Register (R5d, N033): ein Band auf Tinte. Links die
 * Person mit Telefon und E-Mail, rechts die Registerdaten als Nebenangabe.
 */
export default function UeberUnsAnsprechperson(props: UeberUnsProps) {
  const { about } = ueberUnsKontext(props);
  return (
    <section id="ansprechperson" aria-labelledby="ansprechperson-titel" className="on-dark relative overflow-hidden bg-ink text-white">
      <div className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden" aria-hidden="true" />
      <div className="container relative grid gap-12 py-16 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/15 lg:py-24">
        <div className="min-w-0 md:pr-12 lg:pr-16">
          <h2 id="ansprechperson-titel" className="t-h2 text-white">
            {about.contact.title}
          </h2>
          <p className="t-lead mt-5 max-w-[46ch] text-white/85">{about.contact.text}</p>
          <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
            <li>
              <a
                href={company.phone.href}
                className="inline-flex min-h-6 items-center gap-3 font-display text-lg font-bold text-white tabular-nums transition-colors hover:text-brass"
              >
                <Phone weight="duotone" className="size-5 shrink-0 text-brass" aria-hidden="true" />
                {company.phone.display}
              </a>
            </li>
            <li className="min-w-0">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-6 max-w-full items-center gap-3 font-display text-lg font-bold text-white transition-colors hover:text-brass"
              >
                <Envelope weight="duotone" className="size-5 shrink-0 text-brass" aria-hidden="true" />
                <span className="min-w-0 break-all">{company.email}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="min-w-0 md:pl-12 lg:pl-16">
          <h3 className="t-eyebrow text-brass">{about.register.title}</h3>
          <p className="mt-4 font-display text-xl font-bold leading-snug text-white">{company.legalName}</p>
          <p className="mt-1 font-medium leading-relaxed text-white/85">
            {company.address.street}, {company.address.postalCode} {company.address.city}
          </p>
          <p className="mt-6 font-mono text-sm leading-6 text-white/85">{about.register.court}</p>
          <dl className="mt-1 flex gap-3 font-mono text-sm leading-6">
            <dt className="text-white/70">{about.register.uid}</dt>
            <dd className="text-white">{company.uid}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
