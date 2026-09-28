import CantonMap from "@/components/CantonMap";
import KantonKarte from "@/components/KantonKarte";
import { RevealGroup } from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { kantonGerman, kantonKeys } from "../../../../shared/cantons";
import KantoneSpy from "./kantone-spy";
import { abschnitte, gebietKontext, type GebietProps } from "./kontext";

/**
 * Kantone (EG-01, E80, Umbau 9): ab lg links die klebende Karte, rechts die
 * fünf Kantonskarten. Beim Scrollen tritt der Kanton hervor, dessen Karte in
 * der Bildschirmmitte steht (KantoneSpy); die Kantonskarte bekommt dazu eine
 * rote Kontur. Unter lg steht die Karte still über einer waagerechten Schiene
 * mit Scroll-Snap statt fünf gestapelter Bildkarten.
 */
export default function GebietKantone(props: GebietProps) {
  const { lang } = props;
  const { dict, area, mapTexts, pins } = gebietKontext(props);
  const uebersicht = dict.kantone.uebersicht;
  return (
    <section id={abschnitte.kantone} aria-labelledby="kantone-titel" className="section">
      <div className="container">
        <SectionHead id="kantone-titel" title={uebersicht.title} intro={uebersicht.text} />
        <KantoneSpy className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-x-12">
          <div className="min-w-0 lg:sticky lg:top-[calc(var(--header-offset)+var(--subnav-h,0px)+2rem)] lg:col-span-5 lg:self-start">
            <CantonMap
              lang={lang}
              texts={mapTexts}
              pins={pins}
              mobilePins="seat"
              spy
              className="mx-auto w-full max-w-[34rem]"
            />
          </div>
          <RevealGroup
            as="ul"
            className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 lg:col-span-7 lg:mx-0 lg:grid lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {kantonKeys.map(key => (
              <li key={key} className="w-[82%] min-w-0 shrink-0 snap-start sm:w-[46%] lg:w-auto">
                <KantonKarte kanton={key} lang={lang} layout="row" places={area.cantonPlaces[kantonGerman[key]]} spy />
              </li>
            ))}
          </RevealGroup>
        </KantoneSpy>
      </div>
    </section>
  );
}
