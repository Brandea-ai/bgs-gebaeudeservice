import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Nettoyage de cabine pour jets privés',
  lead: [
    'Dans la cabine d’un jet privé, cuir, bois, surfaces laquées brillantes et textiles fins se côtoient dans un espace restreint. Le nettoyage demande du soin, de la discrétion et une planification adaptée à vos vols.',
    'Nous nettoyons la cabine en accord avec vous et votre exploitant, dans le respect des matériaux haut de gamme.',
  ],
  facts: [
    { label: 'Pour', value: 'Propriétaires et exploitants de jets privés' },
    { label: 'Étendue', value: 'Nettoyage de la cabine' },
    { label: 'Dates', value: 'Selon entente, en fonction de votre programme de vols' },
    { label: 'Discrétion', value: 'Sur demande, avec un accord de confidentialité' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue au préalable avec vous. Prestations typiques :',
    items: [
      'Sièges et garnitures en cuir et en tissu',
      'Moquettes et sols',
      'Surfaces en bois et laquées brillantes',
      'Hublots, miroirs et vitrages de la cabine',
      'Office de bord et cabinet de toilette',
    ],
  },
  sections: [
    {
      title: 'Les matériaux de la cabine',
      paragraphs: [
        'Cuir, bois laqué, surfaces brillantes, moquette et textiles fins se côtoient dans une cabine. Chaque matériau demande son propre produit et son propre chiffon, pour que rien ne se décolore, ne se dessèche ou ne se raye.',
        'Nous clarifions au préalable avec vous et votre exploitant quels produits conviennent à votre cabine.',
      ],
    },
    {
      title: 'Une planification autour de vos vols',
      paragraphs: [
        'Nous coordonnons avec vous et votre exploitant le lieu et le moment du nettoyage de la cabine. Ainsi, l’intervention s’intègre dans votre programme de vols.',
        'Souvent, le nettoyage a lieu entre deux vols, après un long voyage ou avant un vol avec des invités. Si le créneau est serré, il est utile de convenir des dates tôt.',
      ],
    },
    {
      title: 'Ce qui doit être fixé avant l’intervention',
      items: [
        'L’emplacement de l’appareil et la manière dont l’accès est réglé pour notre équipe',
        'Le créneau entre les vols',
        'Les zones de la cabine comprises',
        'Les produits autorisés pour les matériaux',
        'Qui reprend la cabine après le nettoyage',
      ],
    },
    {
      title: 'Discrétion à bord',
      paragraphs: [
        'C’est vous qui fixez la manière dont nous traitons les objets personnels et les documents à bord. Chez vous, c’est toujours la même équipe qui travaille, vérifiée par nos soins. Sur demande, nous signons un accord de confidentialité.',
      ],
    },
  ],
  steps: [
    {
      title: 'Nettoyage',
      text: 'Nous nettoyons la cabine au moment convenu.',
    },
    team,
  ],
  faq: [
    {
      question: 'Comment planifiez-vous le nettoyage autour de nos vols ?',
      answer: 'Nous coordonnons le moment avec vous et votre exploitant, afin que la cabine soit prête avant le prochain vol.',
    },
    {
      question: 'Comment traitez-vous le cuir et le bois ?',
      answer: 'Nous nettoyons dans le respect des matériaux et clarifions au préalable quels produits conviennent à votre cabine.',
    },
    {
      question: 'Nettoyez-vous aussi l’extérieur de l’appareil ?',
      answer: 'Non. Notre offre comprend le nettoyage de la cabine.',
    },
    {
      question: 'Qui travaille dans notre cabine ?',
      answer:
        'Toujours la même équipe. Les personnes qui interviennent chez vous ont été vérifiées par nos soins. Sur demande, nous signons un accord de confidentialité.',
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Dans quelles langues pouvons-nous communiquer ?', answer: answers.sprachen },
    { question: 'Combien coûte le nettoyage ?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Pour les villas, les résidences et les résidences secondaires.' },
    { path: '/premium/yacht', text: 'Pour les yachts et les bateaux à moteur sur le lac des Quatre-Cantons et le lac de Zoug.' },
    { path: '/premium', text: 'Toutes les offres et tous les engagements de notre ligne premium.' },
  ],
  cta,
}
