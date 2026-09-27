import { ArrowRight } from "lucide-react";
import PageFrame from "@/components/PageFrame";
import Reveal from "@/components/Reveal";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";

// 404 mit Menü, Footer und Wegweisern statt einer Sackgasse (E61), Texte je Sprache
export default function NotFoundView({ lang }: { lang: Locale }) {
  const { notFound } = navDicts[lang];
  return (
    <PageFrame lang={lang} mainClassName="bg-ink">
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container relative grid gap-12 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <Reveal>
              <p
                className="font-display text-[clamp(5rem,3rem+8vw,11rem)] font-bold leading-none tracking-[-0.05em] text-white/10"
                aria-hidden="true"
              >
                404
              </p>
              <h1 className="t-h1 mt-6 text-white">{notFound.title}</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-6 max-w-[48ch] text-white/90">
                {notFound.text}
              </p>
            </Reveal>
          </div>
          <ul className="grid gap-3 self-end lg:col-span-4 lg:col-start-9">
            {notFound.links.map((link, index) => (
              <Reveal as="li" key={link.path} delay={index * 100}>
                <a
                  href={localizePath(link.path, lang)}
                  className="arrow-link flex items-center justify-between gap-4 bg-white/[0.06] px-6 py-5 font-display text-xl font-bold text-white transition-colors hover:bg-signal"
                >
                  {link.label}
                  <ArrowRight
                    className="h-5 w-5 text-brass"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  );
}
