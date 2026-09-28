import Link from "next/link";
import { ArrowRight, Check, MapTrifold, Translate } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { cantonTitle, kantonGerman, kantonKeys, kantonPath } from "../../../../shared/cantons";
import { activeLocales, hreflang, languageNames, localizePath } from "../../../../shared/i18n";
import type { PagePath } from "../../../../shared/seo";
import { ueberUnsKontext, type UeberUnsProps } from "./kontext";

const row =
  "flex min-h-12 items-center justify-between gap-4 py-3 font-semibold text-ink transition-colors hover:text-signal";

/**
 * Sprachen und Gebiet (E18, E30, E44). Zwei Spalten ohne Kasten, unten je eine
 * Linkliste mit Haarlinien statt Chips, die wie Knöpfe aussahen (Audit visuell):
 * die Sprachfassungen dieser Seite und die fünf Kantonsseiten.
 */
export default function UeberUnsSprachenGebiet(props: UeberUnsProps) {
  const { lang } = props;
  const { about, href } = ueberUnsKontext(props);
  return (
    <div id="sprachen-gebiet" className="section bg-white">
      <div className="container grid gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">
        <Spalte id="sprachen" glyph={Translate} title={about.languages.title} text={about.languages.text}>
          {activeLocales.length > 1 && (
            <>
              <p id="sprachen-liste" className="mt-8 text-sm font-semibold text-ink-600">
                {about.languages.switchLabel}
              </p>
              <ul aria-labelledby="sprachen-liste" className="mt-2 divide-y divide-line border-y border-line">
                {activeLocales.map(code => {
                  const current = code === lang;
                  return (
                    <li key={code}>
                      <Link
                        href={localizePath("/ueber-uns", code)}
                        hrefLang={hreflang[code]}
                        lang={code}
                        aria-current={current ? "page" : undefined}
                        prefetch={false}
                        className={row}
                      >
                        <span>{languageNames[code]}</span>
                        <span className="flex items-center gap-3 font-mono text-sm text-ink-600">
                          {code.toUpperCase()}
                          {current ? (
                            <Check weight="bold" className="size-5 text-signal" aria-hidden="true" />
                          ) : (
                            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
                          )}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </Spalte>
        <Spalte id="gebiet" glyph={MapTrifold} title={about.region.title} text={about.region.text}>
          <p id="gebiet-liste" className="mt-8 text-sm font-semibold text-ink-600">
            {about.region.listLabel}
          </p>
          <ul aria-labelledby="gebiet-liste" className="mt-2 divide-y divide-line border-y border-line">
            {kantonKeys.map(key => (
              <li key={key}>
                <Link href={href(kantonPath(key) as PagePath)} className={row}>
                  <span>{cantonTitle(kantonGerman[key], lang)}</span>
                  <ArrowRight weight="duotone" className="size-5 shrink-0 text-signal" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={href("/einzugsgebiet")}
            className="arrow-link mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-ink underline decoration-signal/60 underline-offset-4 transition-colors hover:text-signal"
          >
            {about.region.link}
            <ArrowRight weight="duotone" className="size-5 text-signal" aria-hidden="true" />
          </Link>
        </Spalte>
      </div>
    </div>
  );
}

function Spalte({
  id,
  glyph: Glyph,
  title,
  text,
  children,
}: {
  id: string;
  glyph: Icon;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col">
      <Glyph weight="duotone" className="size-9 text-signal" aria-hidden="true" />
      <h2 id={`${id}-titel`} className="t-h2 mt-5 text-ink">
        {title}
      </h2>
      <p className="mt-5 max-w-[52ch] text-[1.0625rem] font-medium leading-relaxed text-ink-600">{text}</p>
      {children}
    </div>
  );
}
