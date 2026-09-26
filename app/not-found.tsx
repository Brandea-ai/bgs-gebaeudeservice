import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { notFound } from "../content/de/navigation";

// Immer noindex, auch nach dem Launch, damit die robots-Angaben nicht widersprechen (M17)
export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false, follow: true },
};

// 404 mit Menü, Footer und Wegweisern statt einer Sackgasse (E61), Texte aus content/de/navigation.ts
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{notFound.title}</h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">{notFound.text}</p>
          <ul className="space-y-3">
            {notFound.links.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="inline-flex items-center gap-2 font-medium text-red-700 underline-offset-4 hover:underline">
                  {link.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SwissFooter />
    </div>
  );
}
