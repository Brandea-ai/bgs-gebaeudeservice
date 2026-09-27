import { ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";

// 404 mit Menü, Footer und Wegweisern statt einer Sackgasse (E61), Texte je Sprache
export default function NotFoundView({ lang }: { lang: Locale }) {
  const { notFound } = navDicts[lang];
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} />

      <main id="inhalt" className="relative overflow-hidden bg-ink text-white">
        <div className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden" aria-hidden="true" />
        <div className="container relative grid gap-12 py-24 lg:grid-cols-12 lg:py-36">
          <div className="lg:col-span-7">
            <p className="font-display text-[clamp(5rem,3rem+8vw,11rem)] font-semibold leading-none tracking-[-0.05em] text-white/10" aria-hidden="true">
              404
            </p>
            <h1 className="t-h1 mt-6 text-white">{notFound.title}</h1>
            <p className="t-lead mt-6 max-w-[48ch] text-white/70">{notFound.text}</p>
          </div>
          <ul className="self-end border-t border-white/20 lg:col-span-4 lg:col-start-9">
            {notFound.links.map((link) => (
              <li key={link.path} className="border-b border-white/15">
                <a
                  href={localizePath(link.path, lang)}
                  className="arrow-link flex items-center justify-between gap-4 py-5 font-display text-xl font-semibold text-white hover:text-brass transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-5 w-5 text-brass" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SwissFooter lang={lang} />
    </div>
  );
}
