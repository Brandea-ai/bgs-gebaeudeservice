import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Weitere Anlässe als ruhige Liste mit Champagner-Haarlinien auf Elfenbein (P09) */
export default function PremiumAusserdem(props: PremiumProps) {
  const { content } = premiumKontext(props);
  return (
    <section id="ausserdem" aria-labelledby="ausserdem-titel" className="section border-t border-brass/25 bg-ivory text-anthracite">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <PremiumTitel id="ausserdem-titel" title={content.moreTitle} className="lg:col-span-4" />
        <RevealGroup as="ul" className="border-t border-brass-dark/30 md:grid md:grid-cols-2 md:gap-x-12 lg:col-span-8">
          {content.more.map(item => (
            <li key={item.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-brass-dark/20 py-7">
              <SealCheck weight="duotone" className="mt-1 size-7 text-brass-dark" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="hyphens font-premium text-[1.625rem] font-bold leading-snug text-anthracite">{item.title}</h3>
                <p className="mt-2 font-medium leading-relaxed text-ink-600">{item.text}</p>
              </div>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
