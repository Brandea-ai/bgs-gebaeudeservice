import { Handshake, Leaf, SealCheck } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/** Ein Duotone-Symbol je Fakt, Schlüssel wie home.profile.facts */
const factIcons: Record<string, Icon> = {
  register: SealCheck,
  persoenlich: Handshake,
  umwelt: Leaf,
};

/**
 * Auf einen Blick (seo.md M4 und T5, visuell.md Umbau 8): die vier Kennzahlen als
 * Haarlinienraster, darunter der zitierfähige Profilsatz (der erste Satz nur mit
 * NEW_BRAND) und drei belegte Fakten. Ersetzt Kennzahlenband, Vertrauensleiste
 * und Zusagen, damit jede Aussage einmal auf der Seite steht. Statisch, ohne
 * Einblendung, weil der Block direkt an den ersten Bildschirm anschliesst.
 */
export default function StartAufEinenBlick(props: StartseiteProps) {
  const { seiten } = startseiteKontext(props);
  const { profile } = seiten.home;
  return (
    <section id="auf-einen-blick" aria-labelledby="auf-einen-blick-titel" className="border-b border-line bg-white">
      <div className="container py-10 sm:py-16 lg:py-20">
        <h2 id="auf-einen-blick-titel" className="t-eyebrow text-signal">
          {profile.title}
        </h2>
        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-line bg-line lg:grid-cols-4">
          {seiten.proof.map(item => (
            <div key={item.label} className="flex min-w-0 flex-col gap-1 bg-white px-4 py-3.5 sm:gap-1.5 sm:p-6 lg:p-7">
              <dt className="order-2 text-[0.9375rem] font-semibold leading-snug text-ink-600">{item.label}</dt>
              <dd className="t-figure order-1 text-[1.625rem] text-ink sm:text-[2.25rem] lg:text-[2.625rem]">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-16">
          <p className="max-w-[58ch] text-[1.0625rem] font-medium leading-relaxed text-ink sm:text-[1.125rem] lg:col-span-7 lg:text-[1.25rem]">
            {profile.brand && <strong className="font-semibold">{profile.brand} </strong>}
            {profile.text}
          </p>
          <dl className="divide-y divide-line self-start border-y border-line lg:col-span-5">
            {profile.facts.map(fact => {
              const Glyph = factIcons[fact.key] ?? SealCheck;
              return (
                <div key={fact.key} className="py-3 sm:py-3.5">
                  <dt className="flex items-center gap-3 text-sm font-semibold text-ink-600">
                    <Glyph weight="duotone" className="size-6 shrink-0 text-signal" aria-hidden="true" />
                    {fact.label}
                  </dt>
                  <dd className="mt-0.5 pl-9 font-semibold leading-snug text-ink [overflow-wrap:anywhere]">{fact.value}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
