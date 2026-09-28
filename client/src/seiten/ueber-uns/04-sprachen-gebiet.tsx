import Link from "next/link";
import { ArrowRight, MapTrifold, Translate } from "@phosphor-icons/react/dist/ssr";
import Flag from "@/components/Flag";
import { languageNames, locales } from "../../../../shared/i18n";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

/** Sprachen und Gebiet (E18, E30, E44): zwei gleich hohe Tafeln, unten je eine Liste (Sprachen, Kantone); die Karte steht auf Startseite und Einzugsgebiet */
export default function UeberUnsSprachenGebiet(props: UeberUnsProps) {
  const { seiten, about, href } = ueberUnsKontext(props);
  const panel = "flex min-w-0 flex-col rounded-[3px] border border-line bg-white p-7 md:p-10";
  return (
    <div id="sprachen-gebiet" className="section bg-white">
      <div className="container grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className={panel}>
          <Translate weight="duotone" className="size-9 text-signal" aria-hidden="true" />
          <h2 className="t-h2 mt-6 text-ink">{about.languages.title}</h2>
          <p className="mt-5 max-w-[56ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{about.languages.text}</p>
          <ul className="mt-auto grid grid-cols-2 gap-3 pt-8 sm:grid-cols-4">
            {locales.map(code => (
              <li key={code} lang={code} className="flex items-center gap-3 rounded-[3px] border border-line px-4 py-3 font-medium text-ink">
                <Flag lang={code} />
                {languageNames[code]}
              </li>
            ))}
          </ul>
        </div>
        <div className={panel}>
          <MapTrifold weight="duotone" className="size-9 text-signal" aria-hidden="true" />
          <h2 className="t-h2 mt-6 text-ink">{about.region.title}</h2>
          <p className="mt-5 max-w-[56ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{about.region.text}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {seiten.area.cantonLabels.map(label => (
              <li key={label} className="rounded-[3px] border border-line px-4 py-3 font-medium text-ink">
                {label}
              </li>
            ))}
          </ul>
          <Link
            href={href("/einzugsgebiet")}
            className="arrow-link mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-6 font-semibold text-ink transition-colors hover:text-signal"
          >
            {about.region.link}
            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
