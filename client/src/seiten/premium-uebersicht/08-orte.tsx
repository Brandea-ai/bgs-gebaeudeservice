import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import CantonMap from "@/components/CantonMap";
import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { navDicts } from "../../../../content/navigation";
import { placePins } from "../../../../shared/canton-map";
import { localizePath } from "../../../../shared/i18n";
import PremiumTitel from "./titel";
import { darkLink, premiumKontext, type PremiumProps } from "./kontext";

// Orte der Premium-Linie auf der Karte. Luzern liegt zu nah am Sitz Emmenbrücke,
// die Beschriftungen würden sich überlagern (wie in AreaView).
const premiumPlaces = ["Weggis", "Zug", "Engelberg"];

/** Orte mit Karte: Text und Knopf vor der Karte, auf dem Handy nur der Sitz (P11) */
export default function PremiumOrte(props: PremiumProps) {
  const { lang } = props;
  const { dict, content } = premiumKontext(props);
  const pins = placePins
    .filter(pin => premiumPlaces.includes(pin.name))
    .map(pin => ({ x: pin.x, y: pin.y, label: pin.name }));
  return (
    <section id="orte" aria-labelledby="orte-titel" className="on-dark section bg-anthracite text-white">
      <div className="container grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <PremiumTitel
            id="orte-titel"
            title={content.places.title}
            intro={<RichText text={content.places.text} lang={lang} linkClassName={darkLink} />}
          />
          <Button asChild size="lg" variant="inverse" className="arrow-link glass-dark mt-8">
            <Link href={localizePath("/einzugsgebiet", lang)}>
              {dict.seiten.home.area.link}
              <ArrowRight weight="duotone" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          <CantonMap
            lang={lang}
            tone="dark"
            texts={{ ...dict.misc.map, seat: navDicts[lang].chrome.seat }}
            pins={pins}
            mobilePins="seat"
            className="mx-auto max-w-[40rem]"
          />
        </div>
      </div>
    </section>
  );
}
