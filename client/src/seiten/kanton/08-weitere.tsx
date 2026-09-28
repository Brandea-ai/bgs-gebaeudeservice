import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import KantonKarte from "@/components/KantonKarte";
import { RevealGroup } from "@/components/Reveal";
import { kantonKeys } from "../../../../shared/cantons";
import { localizePath } from "../../../../shared/i18n";
import { kantonKontext, type KantonProps } from "./kontext";

/** Die anderen Kantone als Bildkarten und der Weg zurück zur Übersicht (interne Verlinkung) */
export default function KantonWeitere(props: KantonProps) {
  const { kanton, lang } = props;
  const { kui } = kantonKontext(props);
  const others = kantonKeys.filter(key => key !== kanton);
  return (
    <section aria-labelledby="weitere-titel" className="section-tight border-t border-line bg-white">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <h2 id="weitere-titel" className="t-h2 text-ink">
            {kui.weitere}
          </h2>
          <Link
            href={localizePath("/einzugsgebiet", lang)}
            className="arrow-link inline-flex min-h-11 items-center gap-2 font-semibold text-ink transition-colors hover:text-signal"
          >
            {kui.overview}
            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
          </Link>
        </div>
        <RevealGroup as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {others.map(key => (
            <li key={key} className="min-w-0">
              <KantonKarte kanton={key} lang={lang} />
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
