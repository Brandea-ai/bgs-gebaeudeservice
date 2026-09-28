import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import ProcessScrolly from "@/components/ProcessScrolly";
import SectionHead from "@/components/SectionHead";
import { Button } from "@/components/ui/button";
import { startseiteKontext, type StartseiteProps } from "./kontext";

/** Ablauf bis zur Offerte (H02, E80): gepinnte Prozess-Sektion mit einem Video je Schritt */
export default function StartAblauf(props: StartseiteProps) {
  const { lang } = props;
  const { ui, seiten } = startseiteKontext(props);
  const { steps } = seiten.home;
  return (
    <section id="ablauf" aria-labelledby="ablauf-titel" className="section border-t border-line bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead id="ablauf-titel" title={steps.title} intro={steps.intro} className="lg:col-span-7" />
          <div className="lg:col-span-5 lg:justify-self-end">
            <Button asChild size="lg" className="arrow-link btn-lift">
              <a href="#kontakt-formular" data-cta="ablauf">
                {ui.offerCta}
                <ArrowRight weight="duotone" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-12 lg:mt-16">
          <ProcessScrolly
            steps={steps.items}
            lang={lang}
            variant="wide"
            figureKeys={["anfrage", "besichtigung", "offerte", "start"]}
            idPrefix="ablauf-schritt"
          />
        </div>
      </div>
    </section>
  );
}
