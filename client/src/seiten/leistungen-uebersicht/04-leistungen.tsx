import ImageSlot from "@/components/ImageSlot";
import SectionHead from "@/components/SectionHead";
import KapitelBuehne from "./kapitel-buehne";
import Leistungsreihe from "./leistungsreihe";
import LeistungZeile from "./zeile";
import {
  groupId,
  rowId,
  rowImage,
  uebersichtKontext,
  type UebersichtProps,
} from "./kontext";

/**
 * Leistungen als drei Kapitel (visuell.md Umbau 5): je Gruppe Titel und Satz,
 * links ab lg ein klebendes Bild, das beim Lesen zur jeweiligen Leistung
 * wechselt, rechts die Leistungen als Textzeilen mit Haarlinie. Kein überhoher
 * Scrollweg, die Höhe ergibt sich aus dem Text (era-residence Dossier 06, §8).
 * Mobil ohne Bühne, jede Zeile mit kleinem Vorschaubild (Umbau 7).
 */
export default function UebersichtLeistungen(props: UebersichtProps) {
  const { lang } = props;
  const { dict, ui, servicesOverview, serviceFor } = uebersichtKontext(props);
  return (
    <>
      {servicesOverview.groups.map((group, index) => {
        const id = groupId(index);
        const ids = group.items.map(item => rowId(item.path));
        const rows = group.items.map(item => (
          <LeistungZeile
            key={item.path}
            id={rowId(item.path)}
            path={item.path}
            label={item.title}
            text={item.text}
            image={rowImage[item.path]}
            content={serviceFor(item.path)}
            lang={lang}
            toService={ui.toService}
          />
        ));
        return (
          <section
            key={group.title}
            id={id}
            aria-labelledby={`${id}-titel`}
            className={`section border-t border-line max-sm:py-8 ${index % 2 === 0 ? "bg-stone" : "bg-white"}`}
          >
            <div className="container">
              <SectionHead
                id={`${id}-titel`}
                title={group.title}
                intro={group.text}
                className="max-w-3xl"
              />
              <div className="mt-6 sm:mt-8 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-x-14">
                <div className="hidden lg:sticky lg:top-[calc(var(--header-offset)+var(--subnav-h,0px)+2rem)] lg:col-span-5 lg:block lg:self-start">
                  <KapitelBuehne
                    ids={ids}
                    className="aspect-[4/5] max-h-[calc(100svh-var(--header-offset)-var(--subnav-h,0px)-4rem)] w-full"
                    images={group.items.map(item => (
                      <ImageSlot
                        key={item.path}
                        image={rowImage[item.path]}
                        lang={lang}
                        decorative
                        sizes="(min-width: 1024px) 40vw, 1px"
                        className="h-full w-full"
                      />
                    ))}
                  />
                </div>
                <div className="min-w-0 border-b border-line lg:col-span-7">
                  {group.items.length > 3 ? (
                    <Leistungsreihe
                      id={`${id}-leistungen`}
                      count={group.items.length}
                      swipe={dict.seiten.home.services.swipe}
                      previous={servicesOverview.carousel.previous}
                      next={servicesOverview.carousel.next}
                    >
                      {rows}
                    </Leistungsreihe>
                  ) : (
                    rows
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
