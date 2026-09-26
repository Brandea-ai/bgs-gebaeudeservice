/**
 * Strukturierte Daten als JSON-LD (GLOBAL-010). Die Daten kommen aus
 * shared/structured-data.ts. «<» wird maskiert, damit kein Text in den Daten
 * den Script-Block beenden kann.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
