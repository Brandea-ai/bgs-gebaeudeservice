import type { Step } from '../../types'
import { responseTime } from '../common'

/** Gemeinsame Teile der drei Premium-Seiten: Schritt «Ihr Team» und Abschluss */
export const team: Step = {
  title: 'Your team',
  text: 'The same team always works for you. Everyone who works for you has been vetted by us.',
}

export const cta = {
  title: 'Enquire discreetly',
  text: `Call us or write to us. Your enquiry is handled personally by our managing director, and you will hear from us ${responseTime}.`,
}
