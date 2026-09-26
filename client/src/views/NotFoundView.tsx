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

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{notFound.title}</h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">{notFound.text}</p>
          <ul className="space-y-3">
            {notFound.links.map((link) => (
              <li key={link.path}>
                <a
                  href={localizePath(link.path, lang)}
                  className="inline-flex items-center gap-2 font-medium text-red-700 underline-offset-4 hover:underline"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
