import type { ServicePageContent, Step } from '../types'
import { answers, responseTime } from './common'

/**
 * Textes des trois pages premium sous /premium en français (M29, M57, M60).
 * Traduction fidèle de content/de/premium.ts, sans références, chiffres ni prix (E18).
 */

const anfrage: Step = {
  title: 'Demande discrète',
  text: `Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
}

const team: Step = {
  title: 'Votre équipe',
  text: 'Chez vous, c’est toujours la même équipe qui travaille. Les personnes qui interviennent chez vous ont été vérifiées par nos soins.',
}

const cta = {
  title: 'Demande discrète',
  text: `Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
}

const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Nettoyage et entretien de villas et de résidences',
  lead: [
    'Dans une maison faite de pierre naturelle, de parquet et de surfaces laquées brillantes, chaque détail compte, tout comme la confiance envers les personnes qui y travaillent. Nous nettoyons villas, lofts et résidences régulièrement ou avant des occasions particulières, dans le respect des matériaux délicats.',
    'Chez vous, c’est toujours la même équipe qui travaille, aux heures qui vous conviennent : aussi le soir, le week-end ou pendant votre absence.',
  ],
  facts: [
    { label: 'Pour', value: 'Villas, lofts, résidences et résidences secondaires' },
    { label: 'Fréquence', value: 'Régulièrement ou avant des occasions particulières' },
    { label: 'Équipe', value: 'Toujours la même équipe' },
    { label: 'Discrétion', value: 'Sur demande, avec un accord de confidentialité' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue après un tour de votre maison. Typiquement :',
    items: [
      'Pièces de séjour, chambres à coucher et chambres d’amis',
      'Cuisines et salles de bains',
      'Pierre naturelle, parquet et surfaces laquées brillantes, nettoyés selon leur matériau',
      'Surfaces vitrées et miroirs',
      'Nettoyage avant votre arrivée et après votre départ',
      'Rondes de contrôle pendant votre absence',
      'Nettoyage avant et après des réceptions, aussi le week-end',
      'Pièces abritant des œuvres d’art et des antiquités, les œuvres uniquement avec votre accord',
      'Pour les courtiers et les gérances : à bref délai avant une vente, une séance photo ou une remise',
    ],
    notIncluded: ['Restauration d’œuvres d’art et d’antiquités.'],
  },
  sections: [
    {
      title: 'Clés, alarme et discrétion',
      paragraphs: [
        'Pour les clés et le système d’alarme, nous convenons avec vous de règles fixes. Sur demande, nous signons un accord de confidentialité.',
        'Notre directeur traite personnellement votre demande. Les personnes qui interviennent chez vous ont été vérifiées par nos soins.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Tour des lieux et devis',
      text: 'Nous visitons votre maison et clarifions les matériaux, les horaires et l’accès. Vous recevez ensuite un devis, gratuit et sans engagement.',
    },
    {
      title: 'Règles fixes',
      text: 'Nous convenons des horaires, de la remise des clés et de l’utilisation du système d’alarme, sur demande avec un accord de confidentialité.',
    },
    team,
  ],
  faq: [
    {
      question: 'Est-ce toujours la même équipe qui travaille chez nous ?',
      answer: 'Oui. Chez vous, c’est toujours la même équipe qui travaille, une équipe qui connaît votre maison et vos souhaits.',
    },
    {
      question: 'Comment traitez-vous les œuvres d’art et les antiquités ?',
      answer: 'Nous nettoyons les pièces avec soin. Les œuvres d’art elles-mêmes, nous ne les nettoyons qu’avec votre accord explicite.',
    },
    {
      question: 'Pouvez-vous nettoyer pendant notre absence ?',
      answer: 'Oui, aussi pendant votre absence, le soir ou le week-end. Pour les clés et l’alarme, nous convenons de règles fixes.',
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Dans quelles langues pouvons-nous communiquer ?', answer: answers.sprachen },
    { question: 'Combien coûte le nettoyage ?', answer: answers.kosten },
    { question: 'Où intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/premium/yacht', text: 'Pour les yachts et les bateaux à moteur sur le lac des Quatre-Cantons et le lac de Zoug.' },
    { path: '/premium/privatjet', text: 'Pour la cabine de votre jet privé.' },
    { path: '/premium', text: 'Toutes les offres et tous les engagements de notre ligne premium.' },
  ],
  cta,
}

const privatjet: ServicePageContent = {
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
    { label: 'Dates', value: 'Selon entente, en fonction de votre plan de vol' },
    { label: 'Discrétion', value: 'Sur demande, avec un accord de confidentialité' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue au préalable avec vous. Typiquement :',
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
      title: 'Une planification autour de vos vols',
      paragraphs: [
        'Où et quand nous nettoyons la cabine, nous le coordonnons avec vous et votre exploitant. Ainsi, l’intervention s’intègre dans votre plan de vol.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Visite et devis',
      text: 'Nous examinons la cabine et clarifions les matériaux, le lieu et le créneau avec vous et votre exploitant. Vous recevez ensuite un devis, gratuit et sans engagement.',
    },
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

const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Nettoyage de yachts et de bateaux à moteur',
  lead: [
    'Sur le lac, un bateau est exposé au vent, aux intempéries, au pollen et aux fientes d’oiseaux, tandis que l’humidité et la poussière s’installent à l’intérieur. Nous nettoyons votre bateau à l’intérieur et à l’extérieur, sur le lac des Quatre-Cantons et le lac de Zoug.',
    'Le teck, le gelcoat et la sellerie demandent chacun un traitement spécifique. Nous clarifions au préalable avec vous les produits que nous utilisons pour votre bateau.',
  ],
  facts: [
    { label: 'Pour', value: 'Propriétaires de yachts et de bateaux à moteur' },
    { label: 'Région', value: 'Sur le lac des Quatre-Cantons et le lac de Zoug' },
    { label: 'Matériaux', value: 'Teck, gelcoat et sellerie' },
    { label: 'Dates', value: 'Selon entente, ponctuellement ou régulièrement' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue après une visite à la place d’amarrage. Typiquement :',
    items: [
      'Pont et surfaces en teck',
      'Surfaces en gelcoat sur le pont et les superstructures',
      'Sellerie et textiles',
      'Carré, cabines et cuisine',
      'Salles d’eau',
      'Hublots et vitrages',
    ],
    notIncluded: ['Travaux sur la carène, par exemple l’antifouling.', 'Entretien technique du moteur et de l’équipement de bord.'],
  },
  steps: [
    anfrage,
    {
      title: 'Visite à la place d’amarrage',
      text: 'Nous examinons le bateau et clarifions les matériaux et l’accès à la place d’amarrage. Vous recevez ensuite un devis, gratuit et sans engagement.',
    },
    {
      title: 'Dates',
      text: 'Nous nettoyons aux dates convenues avec vous, ponctuellement ou régulièrement.',
    },
    team,
  ],
  faq: [
    {
      question: 'Où nettoyez-vous les bateaux ?',
      answer: 'À la place d’amarrage, sur le lac des Quatre-Cantons et le lac de Zoug. Nous clarifions au préalable avec vous l’accès au ponton ou au port.',
    },
    {
      question: 'Quels matériaux nettoyez-vous ?',
      answer: 'Le teck, le gelcoat et la sellerie ainsi que l’intérieur. Nous clarifions lors de la visite les produits que nous utilisons pour votre bateau.',
    },
    { question: 'Pouvez-vous nettoyer avec des produits respectueux de l’environnement ?', answer: answers.mittel },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Combien coûte le nettoyage ?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Pour les villas, les résidences et les résidences secondaires au bord du lac.' },
    { path: '/premium/privatjet', text: 'Pour la cabine de votre jet privé.' },
    { path: '/premium', text: 'Toutes les offres et tous les engagements de notre ligne premium.' },
  ],
  cta,
}

export const premium = { luxusimmobilien, privatjet, yacht }
