import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup } from "@/components/Reveal";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Weitere Anlässe als ruhige Liste mit Haarlinien statt Karten (P09) */
export default function PremiumAusserdem(props: PremiumProps) {
  const { content } = premiumKontext(props);
  return (
    <section id="ausserdem" aria-labelledby="ausserdem-titel" className="on-dark section border-t border-white/10 bg-anthracite-800 text-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-x-16">
        <PremiumTitel id="ausserdem-titel" title={content.moreTitle} className="lg:col-span-4" />
        <RevealGroup as="ul" className="border-t border-white/15 md:grid md:grid-cols-2 md:gap-x-12 lg:col-span-8">
          {content.more.map(item => (
            <li key={item.title} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-b border-white/15 py-6">
              <SealCheck weight="duotone" className="mt-0.5 size-6 text-brass" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="hyphens font-premium text-[1.5rem] leading-snug text-white">{item.title}</h3>
                <p className="mt-2 font-medium leading-relaxed text-white/80">{item.text}</p>
              </div>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
