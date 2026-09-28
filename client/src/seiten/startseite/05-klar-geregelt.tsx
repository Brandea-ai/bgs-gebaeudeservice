import { FileText, HandSwipeRight, Prohibit } from "@phosphor-icons/react/dist/ssr";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/**
 * Klar geregelt (inhalt.md 1.1 und 1.2, ersetzt Ablauf und Zusagen): was
 * schriftlich vereinbart wird und was wir nicht übernehmen. Den Ablauf in
 * Kürze zeigt der Kontaktbereich darunter («So geht es weiter»), darum hier
 * keine zweite Schrittfolge. Haarlinien statt Kästen (visuell.md Umbau 8),
 * mobil die beiden Listen als wischbare Schiene (Umbau 7).
 */
export default function StartKlarGeregelt(props: StartseiteProps) {
  const { lang } = props;
  const { seiten } = startseiteKontext(props);
  const { agreed } = seiten.home;
  return (
    <section id="klar-geregelt" aria-labelledby="klar-geregelt-titel" className="section border-t border-line bg-stone max-sm:py-12">
      <div className="container">
        <SectionHead id="klar-geregelt-titel" title={agreed.title} intro={agreed.intro} className="max-w-3xl" />

        {/* Mobil zwei Karten in einer wischbaren Schiene (visuell.md Umbau 7), ab lg zwei Spalten mit Haarlinien */}
        <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-600 lg:hidden" aria-hidden="true">
          <HandSwipeRight weight="duotone" className="size-5 text-signal" />
          {seiten.home.services.swipe}
        </p>
        <div className="mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] max-lg:-mx-[var(--gutter)] max-lg:scroll-px-[var(--gutter)] max-lg:px-[var(--gutter)] lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-16 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          <div className="min-w-0 shrink-0 basis-[86%] snap-start rounded-[3px] border border-line bg-white p-4 sm:basis-[60%] sm:p-5 lg:col-span-7 lg:basis-auto lg:border-0 lg:bg-transparent lg:p-0">
            <h3 className="t-h3 text-ink">{agreed.written.title}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line lg:mt-5">
              {agreed.written.items.map(item => (
                <li key={item.title} className="flex items-start gap-3 py-2.5 sm:py-3">
                  <FileText weight="duotone" className="mt-0.5 size-5 shrink-0 text-signal max-sm:hidden" aria-hidden="true" />
                  <p className="min-w-0 font-medium leading-relaxed text-ink-600">
                    <span className="font-semibold text-ink">{item.title}: </span>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-[60ch] font-semibold leading-relaxed text-ink lg:mt-5">{agreed.written.note}</p>
          </div>
          <div className="min-w-0 shrink-0 basis-[86%] snap-start rounded-[3px] border border-line bg-white p-4 sm:basis-[60%] sm:p-5 lg:col-span-5 lg:basis-auto lg:border-0 lg:bg-transparent lg:p-0">
            <h3 className="t-h3 text-ink">{agreed.limits.title}</h3>
            <p className="mt-2 font-medium leading-relaxed text-ink-600 lg:mt-3">{agreed.limits.intro}</p>
            <ul className="mt-4 divide-y divide-line border-y border-line lg:mt-5">
              {agreed.limits.items.map(item => (
                <li key={item} className="flex items-start gap-3 py-2.5 sm:py-3">
                  <Prohibit weight="duotone" className="mt-0.5 size-5 shrink-0 text-ink max-sm:hidden" aria-hidden="true" />
                  <span className="min-w-0 font-medium leading-relaxed text-ink">
                    <RichText text={item} lang={lang} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
