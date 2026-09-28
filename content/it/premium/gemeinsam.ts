import type { Step } from '../../types'
import { responseTime } from '../common'

/** Gemeinsame Teile der drei Premium-Seiten: Schritt «Ihr Team» und Abschluss */
export const team: Step = {
  title: 'Il Suo team',
  text: 'Da Lei lavora sempre lo stesso team. Chi lavora da Lei è stato verificato da noi.',
}

export const cta = {
  title: 'Richiesta discreta',
  text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.`,
}
