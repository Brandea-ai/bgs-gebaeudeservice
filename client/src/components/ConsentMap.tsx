'use client'

import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { company } from '../../../shared/company';

// Karte erst nach Klick laden, nur der Sitz (E20). Vorher werden keine Daten
// an Google übertragen.
export default function ConsentMap() {
  const [loaded, setLoaded] = useState(false);
  const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`;
  const query = encodeURIComponent(`${company.legalName}, ${address}`);

  if (loaded) {
    return (
      <iframe
        title={`Karte: ${address}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="w-full h-[400px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="w-full h-[400px] bg-slate-100 flex flex-col items-center justify-center gap-4 p-6 text-center">
      <MapPin className="w-10 h-10 text-primary" aria-hidden="true" />
      <p className="font-semibold text-slate-900">
        {company.legalName}
        <br />
        {address}
      </p>
      <p className="text-sm text-slate-600 max-w-md">
        Die Karte wird von Google Maps geladen. Dabei werden Daten an Google übertragen.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Karte laden
        </button>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-white"
        >
          In Google Maps öffnen
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
