import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import CantonMap from "@/components/CantonMap";
import SectionHead from "@/components/SectionHead";
import { Button } from "@/components/ui/button";
import { company } from "../../../../shared/company";
import { placePins } from "../../../../shared/canton-map";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/**
 * Einzugsgebiet mit Karte (E30): links Aussage und Orte je Kanton aus der Seite
 * /einzugsgebiet (keine neuen Orte), rechts die Karte als reines SVG.
 */
export default function StartGebiet(props: StartseiteProps) {
  const { lang } = props;
  const { dict, seiten, nav, href } = startseiteKontext(props);
  const { home, area } = seiten;
  const pins = placePins.filter(pin => ["Aarau", "Stans", "Sarnen"].includes(pin.name));
  return (
    <section id="gebiet" aria-labelledby="gebiet-titel" className="on-dark relative overflow-hidden bg-ink text-white">
      <div className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden" aria-hidden="true" />
      <div className="container relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="min-w-0 lg:col-span-5">
          <SectionHead id="gebiet-titel" title={home.area.title} intro={home.area.text} tone="dark" />
          <dl className="mt-8 divide-y divide-white/15 border-y border-white/15">
            {company.cantons.map((canton, index) => (
              <div key={canton} className="grid gap-1 py-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
                <dt className="font-display font-bold text-white">{area.cantonLabels[index]}</dt>
                <dd className="min-w-0 text-[0.9375rem] font-medium leading-relaxed text-white/90">
                  {area.cantonPlaces[canton].join(", ")}
                </dd>
              </div>
            ))}
          </dl>
          <Button asChild size="lg" variant="inverse" className="arrow-link glass-dark mt-8">
            <Link href={href("/einzugsgebiet")}>
              {home.area.link}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="min-w-0 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          <CantonMap
            lang={lang}
            texts={{ ...dict.misc.map, seat: nav.chrome.seat }}
            tone="dark"
            pins={pins.map(pin => ({ x: pin.x, y: pin.y, label: pin.name }))}
            className="mx-auto max-w-[44rem]"
          />
        </div>
      </div>
    </section>
  );
}
