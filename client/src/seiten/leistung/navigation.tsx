import SectionNav from "@/components/SectionNav";
import { detailImage } from "../../../../shared/hero-images";
import { leistungKontext, type LeistungProps } from "./kontext";

/** Eine Reihenfolge für die mobile Leiste und das Verzeichnis am Desktop. */
export function leistungVerzeichnis(props: LeistungProps) {
  const { content } = props;
  const { ui, sectionId } = leistungKontext(props);
  const shown = detailImage[content.path] ? 2 : 0;
  const entries = (content.sections ?? []).map((section, index) => ({
    id: sectionId(index),
    title: section.title,
  }));
  return [
    ...entries.slice(0, shown),
    ...(content.tools ?? []).map(tool => ({ id: tool.id, title: tool.title })),
    { id: "umfang", title: content.scope.title },
    ...entries.slice(shown),
    { id: "ablauf", title: ui.steps },
    { id: "fragen", title: ui.faq },
    { id: "verwandt", title: ui.related },
  ];
}

export default function LeistungNavigation(props: LeistungProps) {
  const { ui, premium } = leistungKontext(props);
  return (
    <SectionNav
      label={ui.onThisPage}
      items={leistungVerzeichnis(props)}
      tone={premium ? "premium" : "light"}
      className="lg:hidden"
    />
  );
}
