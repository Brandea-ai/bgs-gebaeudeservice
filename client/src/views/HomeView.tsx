import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  Clock,
  Shield,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import AppointmentButton from "@/components/AppointmentButton";
import IndustryAdvisor from "@/components/IndustryAdvisor";
import OfferCta from "@/components/OfferCta";
import Steps from "@/components/Steps";
import { ParallaxBackground } from "@/components/PremiumParallax";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { chatEnabled } from "../../../shared/features";
import { getDict } from "../../../content";
import { localizePath, type Locale } from "../../../shared/i18n";

const proofIcons = [Award, Users, Clock, Shield];
const serviceIcons = {
  reinigung: Building2,
  hauswartung: Wrench,
  premium: Sparkles,
};

// Startseite als Server-Komponente (M21, M39), Texte aus content/de/seiten.ts.
// Hero ohne Einblendung (M23), Hintergrund und Chat als Client-Inseln.
export default function HomeView({ lang }: { lang: Locale }) {
  const { home, proof } = getDict(lang).seiten;
  const { ui } = getDict(lang);
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation lang={lang} path="/" />

      <main>
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <ParallaxBackground
            src="/swiss-hero-main.jpg"
            speed={0.5}
            overlay={true}
          />
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-4xl">
              <p className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-4 sm:mb-6 text-white font-semibold text-sm sm:text-base">
                {home.eyebrow}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {home.h1}
              </h1>
              <p className="text-base md:text-lg text-white/95 mb-8 leading-relaxed max-w-2xl">
                {home.lead}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8"
                >
                  <a href="#kontakt-formular">
                    {ui.offerCta}
                    <ArrowRight
                      className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
                <AppointmentButton
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 bg-white/10 border-white text-white hover:bg-white hover:text-slate-900"
                />
              </div>

              {/* KI-Berater erst mit Modell und Zugang (E35), bis dahin keine Handlungsaufforderung dorthin (M31) */}
              {chatEnabled && (
                <div className="mt-12 max-w-3xl">
                  <IndustryAdvisor />
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="auf-einen-blick"
          className="py-16 bg-slate-50"
        >
          <div className="container">
            <h2 id="auf-einen-blick" className="sr-only">
              {home.proofTitle}
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {proof.map((item, index) => {
                const Icon = proofIcons[index];
                return (
                  <li key={item.label}>
                    <Card className="h-full p-6 md:p-8 text-center">
                      <Icon
                        className="w-10 h-10 text-red-700 mx-auto mb-4"
                        aria-hidden="true"
                      />
                      <p className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                        {item.value}
                      </p>
                      <p className="text-sm md:text-base text-slate-600">
                        {item.label}
                      </p>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section aria-labelledby="leistungen" className="py-20 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2
                id="leistungen"
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
              >
                {home.services.title}
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
                {home.services.intro}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {home.services.groups.map(group => {
                const Icon =
                  serviceIcons[group.key as keyof typeof serviceIcons];
                return (
                  <Card
                    key={group.key}
                    className="p-8 md:p-10 h-full flex flex-col"
                  >
                    <Icon
                      className="w-12 h-12 text-red-700 mb-6"
                      aria-hidden="true"
                    />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {group.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{group.text}</p>
                    <ul className="space-y-3 mb-8">
                      {group.items.map(item => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-slate-700"
                        >
                          <Check
                            className="w-5 h-5 text-red-700 shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-auto"
                    >
                      <Link href={group.link.path}>
                        {group.link.text}
                        <ArrowRight
                          className="ml-2 w-4 h-4"
                          aria-hidden="true"
                        />
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="ablauf" className="py-16 bg-slate-50">
          <div className="container max-w-6xl">
            <h2
              id="ablauf"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
            >
              {home.steps.title}
            </h2>
            <Steps steps={home.steps.items} lang={lang} />
          </div>
        </section>

        <section aria-labelledby="gebiet" className="py-20">
          <div className="container max-w-4xl text-center">
            <h2
              id="gebiet"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6"
            >
              {home.area.title}
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-8">
              {home.area.text}
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-sm sm:text-base"
            >
              <Link href={localizePath("/einzugsgebiet", lang)}>
                {home.area.link}
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        <OfferCta title={home.cta.title} text={home.cta.text} lang={lang} />
      </main>

      <SwissFooter lang={lang} path="/" />
    </div>
  );
}
