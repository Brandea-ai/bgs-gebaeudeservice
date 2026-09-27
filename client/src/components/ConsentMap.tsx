"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { company } from "../../../shared/company";

// Karte erst nach Klick laden, nur der Sitz (E20). Vorher werden keine Daten
// an Google übertragen.
type MapTexts = { label: string; notice: string; load: string; open: string };

export default function ConsentMap({ texts }: { texts: MapTexts }) {
  const [loaded, setLoaded] = useState(false);
  const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
  const query = encodeURIComponent(`${company.legalName}, ${address}`);

  if (loaded) {
    return (
      <iframe
        title={`${texts.label}: ${address}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="w-full h-[28rem] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div
      className="w-full min-h-[28rem] bg-white flex flex-col items-center justify-center gap-5 p-8 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(14,17,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,17,22,0.05) 1px, transparent 1px)",
        backgroundSize: "2.5rem 2.5rem",
      }}
    >
      <MapPin className="w-8 h-8 text-signal" aria-hidden="true" />
      <p className="font-display text-lg font-semibold text-ink">
        {company.legalName}
        <br />
        {address}
      </p>
      <p className="text-sm text-mute max-w-md">{texts.notice}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="h-12 rounded-[0.25rem] bg-signal px-6 font-medium text-white hover:bg-signal-dark"
        >
          {texts.load}
        </button>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-[0.25rem] border border-ink/20 bg-white px-6 font-medium text-ink hover:border-ink"
        >
          {texts.open}
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
