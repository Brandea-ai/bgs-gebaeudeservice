import { company } from '../../../shared/company'
import type { Step } from '../../types'

/** Gemeinsame Teile der drei Premium-Seiten: Schritt «Ihr Team» und Abschluss */
export const team: Step = {
  title: 'Ihr Team',
  text: 'Bei Ihnen arbeitet immer dasselbe Team. Wer bei Ihnen arbeitet, ist von uns überprüft.',
}

export const cta = {
  title: 'Diskret anfragen',
  text: `Rufen Sie uns an oder schreiben Sie uns. Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören ${company.responseTime} von uns.`,
}
