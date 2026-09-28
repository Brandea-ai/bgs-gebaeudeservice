import ImageSlot from "@/components/ImageSlot";
import { DiscretionIcon } from "@/components/PremiumIcons";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Diskretion: bestätigte Zusagen als Text neben einem grossen, ruhigen Bild (E41, ohne E52) */
export default function PremiumDiskretion(props: PremiumProps) {
  const { lang } = props;
  const { content } = premiumKontext(props);
  const { discretion } = content;
  return (
    <section id="diskretion" aria-labelledby="diskretion-titel" className="section bg-white text-anthracite">
      <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <DiscretionIcon className="mb-6 size-12 text-brass-dark" aria-hidden="true" />
          <PremiumTitel id="diskretion-titel" title={discretion.title} />
          <div className="mt-8 space-y-5 text-[1.0625rem] font-medium leading-relaxed text-ink-600">
            {discretion.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-7 lg:col-start-6">
          {/* Champagner-Kontur leicht versetzt hinter dem Bild, wie ein Passepartout */}
          <div className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-[3px] border border-brass/50 lg:block" aria-hidden="true" />
          <ImageSlot
            image="detail-premium-luxusimmobilien"
            lang={lang}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="relative aspect-[4/3] w-full rounded-[3px] shadow-[0_40px_80px_-48px_rgba(22,24,28,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
