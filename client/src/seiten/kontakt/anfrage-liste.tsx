"use client";

import {
  Broom,
  Buildings,
  CalendarCheck,
  CaretDown,
  Clock,
  IdentificationBadge,
  Key,
  MapPin,
  Ruler,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { useId, useState } from "react";

const symbols: Record<string, Icon> = {
  rolle: IdentificationBadge,
  objekt: Buildings,
  ort: MapPin,
  groesse: Ruler,
  leistung: Broom,
  rhythmus: Clock,
  start: CalendarCheck,
  zugang: Key,
};

type Item = { key: string; title: string; text: string };

/**
 * «Was in die Anfrage gehört» neben dem Formular auf /kontakt (Prüfbefund K6).
 * Ab 1024 px offen als Randspalte. Darunter steht die Liste vor dem Formular
 * und ist zugeklappt: eine Zeile mit Knopf statt rund 860 px nach «Anfrage
 * senden». Der Knopf steuert die Liste über aria-expanded und aria-controls.
 * Zwei Überschriften, von denen je Breite nur eine sichtbar ist, damit der
 * Knopf auf dem Desktop nicht einen Zustand meldet, den man nicht sieht.
 */
export default function AnfrageListe({ title, items, colon }: { title: string; items: Item[]; colon: string }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  return (
    <div>
      <h3 className="hidden font-display text-lg font-bold text-ink lg:block">{title}</h3>
      <h3 className="lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(value => !value)}
          className="flex min-h-14 w-full items-center justify-between gap-4 rounded-[3px] border border-line bg-white px-4 py-3 text-left font-display text-lg font-bold text-ink transition-colors hover:border-ink/40"
        >
          {title}
          <CaretDown
            weight="duotone"
            className={`size-5 shrink-0 text-signal transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <ul id={listId} className={`mt-4 divide-y divide-line border-y border-line ${open ? "" : "max-lg:hidden"}`}>
        {items.map(item => {
          const Glyph = symbols[item.key] ?? SealCheck;
          return (
            <li key={item.key} className="flex items-start gap-4 py-2.5">
              <Glyph weight="duotone" className="mt-0.5 size-6 shrink-0 text-signal" aria-hidden="true" />
              <p className="min-w-0 leading-relaxed">
                <span className="font-bold text-ink">
                  {item.title}
                  {colon}
                </span>{" "}
                <span className="font-medium text-ink-600">{item.text}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
