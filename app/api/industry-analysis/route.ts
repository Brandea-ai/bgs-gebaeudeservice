import { NextResponse } from 'next/server'
import { company } from '../../../shared/company'

// Der KI-Berater liefert bis zur Reparatur keine Analyse (E14, M03).
// Die bisherige Antwort war ein fester Text für jede Branche, keine
// KI-Auswertung. 503 statt Scheinergebnis.
export async function POST() {
  const message = `Der KI-Berater wird gerade überarbeitet. Bitte rufen Sie uns an (${company.phone.display}) oder nutzen Sie das Kontaktformular.`
  return NextResponse.json(
    { success: false, unavailable: true, message, error: message },
    { status: 503 }
  )
}
