import type { Step } from '../../types'
import { responseTime } from '../common'

/** Gemeinsame Teile der drei Premium-Seiten: Schritt «Ihr Team» und Abschluss */
export const team: Step = {
  title: 'Votre équipe',
  text: 'Chez vous, c’est toujours la même équipe qui travaille. Les personnes qui interviennent chez vous ont été vérifiées par nos soins.',
}

export const cta = {
  title: 'Demandez en toute discrétion',
  text: `Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
}
