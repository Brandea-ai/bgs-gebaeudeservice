import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ImageSlot from "@/components/ImageSlot";
import RichText from "@/components/RichText";
import { heroImage } from "../../../../shared/hero-images";
import { artikelKontext, type ArtikelProps } from "./kontext";

/** Weiterlesen: die übrigen Artikel als Bildkarte, daneben der Weg zu den Leistungen (keine neuen Texte) */
export default function ArtikelVerwandt(props: ArtikelProps) {
  const { lang } = props;
  const { t, siblings, href } = artikelKontext(props);
  return (
    <section id="verwandt" aria-labelledby="verwandt-titel" className="section-tight border-t border-line bg-white">
      <div className="container grid gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <h2 id="verwandt-titel" className="t-h2 text-ink">
            {t.moreTitle}
          </h2>
          <p className="mt-5 max-w-[46ch] font-medium leading-relaxed text-ink-700">
            <RichText text={t.services} lang={lang} />
          </p>
        </div>
        {siblings.length > 0 && (
          <ul className="grid min-w-0 gap-6 lg:col-span-8">
            {siblings.map(other => (
              <li
                key={other.path}
                className="card-lift group relative grid min-w-0 overflow-hidden rounded-[3px] border border-line bg-white md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
              >
                <ImageSlot
                  image={heroImage[other.path]}
                  sizes="(min-width: 1024px) 26vw, (min-width: 768px) 40vw, 100vw"
                  lang={lang}
                  hover
                  decorative
                  className="aspect-[4/3] w-full md:aspect-auto md:h-full [&_img]:object-[88%_50%]"
                />
                <div className="flex min-w-0 flex-col p-6 md:p-8">
                  <p className="t-eyebrow text-signal">{t.readMore}</p>
                  <h3 className="t-h3 mt-3 text-ink">
                    <Link href={href(other.path)} className="transition-colors after:absolute after:inset-0 group-hover:text-signal">
                      {other.h1}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-[60ch] font-medium leading-relaxed text-ink-600">{other.teaser}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-signal" aria-hidden="true">
                    {t.readMore}
                    <ArrowRight weight="duotone" className="size-4 shrink-0" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
