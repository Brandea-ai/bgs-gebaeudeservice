import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import PageFrame from "@/components/PageFrame";
import { navDicts } from "../../../content/navigation";
import { localizePath, type Locale } from "../../../shared/i18n";

/**
 * 404 mit Menü, Footer und Wegweisern statt einer Sackgasse (E61), Texte je
 * Sprache. Erster Bildschirm statisch (R04): Titel und Text ohne Einblendung,
 * nur die drei Wegweiser erscheinen als gestaffelte Gruppe. Auf Tinte dreht
 * on-dark den Fokusring (R05), der Pfeil kommt aus Phosphor (R13).
 */
export default function NotFoundView({ lang }: { lang: Locale }) {
  const { notFound } = navDicts[lang];
  return (
    <PageFrame lang={lang} mainClassName="bg-ink">
      <section
        id="nicht-gefunden"
        aria-labelledby="nicht-gefunden-titel"
        className="on-dark relative overflow-hidden bg-ink text-white"
      >
        <div
          className="container grid-lines pointer-events-none absolute inset-0 max-md:hidden"
          aria-hidden="true"
        />
        <div className="container hero-top relative grid gap-12 pb-16 md:pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
          <div className="min-w-0 lg:col-span-7">
            {/* Grosse Ziffer als Dekor, für Vorleser unsichtbar */}
            <p
              className="font-display text-[clamp(5rem,3rem+8vw,11rem)] font-bold leading-none tracking-[-0.05em] text-white/10"
              aria-hidden="true"
            >
              404
            </p>
            <h1 id="nicht-gefunden-titel" className="t-h1 mt-6 text-white">
              {notFound.title}
            </h1>
            <p className="t-lead mt-6 max-w-[48ch] text-white/90">
              {notFound.text}
            </p>
          </div>
          {/* Statisch: die Wegweiser liegen im ersten Bildschirm (R04) */}
          <ul
            className="min-w-0 self-end border-t border-white/15 lg:col-span-4 lg:col-start-9"
          >
            {notFound.links.map(link => (
              <li key={link.path} className="border-b border-white/15">
                <a
                  href={localizePath(link.path, lang)}
                  className="arrow-link flex items-center justify-between gap-4 py-5 font-display text-xl font-bold text-white transition-colors hover:text-brass"
                >
                  <span className="min-w-0">{link.label}</span>
                  <ArrowRight
                    weight="duotone"
                    className="size-5 shrink-0 text-brass"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageFrame>
  );
}
