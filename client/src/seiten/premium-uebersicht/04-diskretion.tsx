import ImageSlot from "@/components/ImageSlot";
import PremiumTitel from "./titel";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Diskretion: bestätigte Zusagen als Text neben einem ruhigen Bild (E41, ohne E52) */
export default function PremiumDiskretion(props: PremiumProps) {
  const { lang } = props;
  const { content } = premiumKontext(props);
  const { discretion } = content;
  return (
    <section id="diskretion" aria-labelledby="diskretion-titel" className="on-dark section bg-anthracite text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <PremiumTitel id="diskretion-titel" title={discretion.title} />
          <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-white/85">
            {discretion.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ImageSlot
          image="detail-premium-luxusimmobilien"
          lang={lang}
          tone="dark"
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="aspect-[4/3] w-full rounded-[3px] lg:col-span-6 lg:col-start-7"
        />
      </div>
    </section>
  );
}
