import SectionHead from "@/components/SectionHead";
import LeistungZeile from "./zeile";
import { groupId, uebersichtKontext, type UebersichtProps } from "./kontext";

/**
 * Alle Leistungen nach Anlass: je Gruppe eine Sektion mit Titel und Satz,
 * darin die Leistungen als Zickzack-Zeilen. Der Wechsel links und rechts läuft
 * über alle Gruppen weiter. Sprungziel auf der Sektion selbst (L06).
 */
export default function UebersichtLeistungen(props: UebersichtProps) {
  const { lang } = props;
  const { ui, servicesOverview, serviceFor } = uebersichtKontext(props);
  let row = 0;
  return (
    <>
      {servicesOverview.groups.map((group, index) => {
        const id = groupId(index);
        return (
          <section
            key={group.title}
            id={id}
            aria-labelledby={`${id}-titel`}
            className={`section border-t border-line ${index % 2 === 0 ? "bg-stone" : "bg-white"}`}
          >
            <div className="container">
              <SectionHead id={`${id}-titel`} title={group.title} intro={group.text} className="mb-14 max-w-3xl lg:mb-20" />
              <div className="grid gap-16 lg:gap-24">
                {group.items.map(item => (
                  <LeistungZeile
                    key={item.path}
                    path={item.path}
                    label={item.title}
                    text={item.text}
                    content={serviceFor(item.path)}
                    flip={row++ % 2 === 1}
                    lang={lang}
                    toService={ui.toService}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
