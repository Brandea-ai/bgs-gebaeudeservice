import { ArrowsClockwise, Leaf, ListChecks, LockKey, Scales, SealCheck, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { RevealGroup } from "@/components/Reveal";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

const symbols: Record<string, Icon> = {
  ehrlich: Scales,
  klar: ListChecks,
  nachbessern: ArrowsClockwise,
  versichert: ShieldCheck,
  diskret: LockKey,
  umwelt: Leaf,
};

/** Werte als Handlungen (E18, E80): Titel links stehend, je Wert ein Duotone-Symbol */
export default function UeberUnsWerte(props: UeberUnsProps) {
  const { lang } = props;
  const { values } = ueberUnsKontext(props).about;
  return (
    <section id="werte" aria-labelledby="werte-titel" className="section border-t border-line bg-stone">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <SectionHead
          id="werte-titel"
          title={values.title}
          intro={values.intro}
          className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)] lg:col-span-4 lg:self-start"
        />
        <RevealGroup as="ul" className="grid min-w-0 gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:col-span-8">
          {values.items.map(item => {
            const Glyph = symbols[item.key] ?? SealCheck;
            return (
              <li key={item.key} className="flex min-w-0 flex-col bg-white p-6 md:p-8">
                <Glyph weight="duotone" className="size-8 text-signal" aria-hidden="true" />
                <h3 className="t-h3 mt-5 text-ink">{item.title}</h3>
                <p className="mt-3 font-medium leading-relaxed text-ink-600">
                  <RichText text={item.text} lang={lang} />
                </p>
              </li>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
