import { company } from '../../shared/company'
import type { Step } from '../types'

/**
 * Textes communs des pages de prestations en français (M60), mêmes clés que
 * content/de/common.ts. Les cantons, le délai de réponse et les langues sont
 * écrits ici en français, sans les aides allemandes de shared/company.ts.
 */

/** Délai de réponse, repris dans le texte courant */
export const responseTime = 'dans les 24 heures les jours ouvrables'

/** Cantons de la zone d’intervention */
export const cantonList = 'Lucerne, Zoug, Argovie, Nidwald et Obwald'

/** Langues des collaboratrices et collaborateurs */
export const languageList = 'allemand, anglais, français et italien'

/** Registre du commerce */
export const register = 'Registre du commerce du canton de Lucerne'

/** Ligne au-dessus du titre principal des pages premium */
export const premiumLine = company.premiumBrand ? `${company.premiumBrand} · Ligne premium de ${company.brand}` : 'Premium'

/** Marque dans le titre des pages premium */
export const premiumTitleBrand = company.premiumBrand ? `${company.premiumBrand} de ${company.brand}` : company.brand

export const ui = {
  offerCta: 'Demander un devis gratuit',
  atAGlance: 'En bref',
  notIncluded: 'Non compris dans cette prestation',
  steps: 'Comment cela se passe',
  faq: 'Questions fréquentes',
  related: 'Cela peut aussi vous intéresser',
  premiumLine,
  factArea: 'Région',
  factAreaValue: `Cantons de ${cantonList}`,
  factOffer: 'Devis',
  factOfferValue: 'Gratuit et sans engagement, après une visite sur place',
  factAnswer: 'Réponse',
  factAnswerValue: 'Dans les 24 heures les jours ouvrables',
}

/** Les deux premières étapes sont les mêmes pour toutes les prestations */
export const steps = {
  anfrage: {
    title: 'Demande',
    text: `Vous nous appelez ou nous écrivez. Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
  },
  besichtigung: {
    title: 'Visite et devis',
    text: 'Nous examinons le bien sur place et définissons avec vous l’étendue des travaux et les horaires. Vous recevez ensuite un devis écrit, gratuit et sans engagement.',
  },
} satisfies Record<string, Step>

/** Réponses identiques sur plusieurs pages */
export const answers = {
  kosten:
    'Cela dépend du bien et de la charge de travail. C’est pourquoi nous n’indiquons un prix que dans le devis, après avoir vu le bien. La visite et le devis sont gratuits et sans engagement.',
  gebiet: `Dans l’ensemble des cantons de ${cantonList}, avec toutes nos prestations et partout aux mêmes conditions. Plus d’informations sous [Zone d’intervention](/einzugsgebiet).`,
  versicherung: 'Oui. Nous disposons d’une assurance responsabilité civile d’entreprise avec une couverture de CHF 10 millions.',
  mittel: 'Oui, sur demande, nous nettoyons avec des produits respectueux de l’environnement. Indiquez-le-nous lors de la visite.',
  sprachen: `Nos collaboratrices et collaborateurs parlent ${languageList}.`,
}
