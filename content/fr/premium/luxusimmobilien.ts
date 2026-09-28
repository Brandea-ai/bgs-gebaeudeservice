import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Nettoyage et entretien de villas et de résidences',
  lead: [
    'Dans une maison faite de pierre naturelle, de parquet et de surfaces laquées brillantes, chaque détail compte, tout comme la confiance envers les personnes qui y travaillent. Nous nettoyons villas, lofts et résidences régulièrement ou avant des événements particuliers, dans le respect des matériaux délicats.',
    'Chez vous, c’est toujours la même équipe qui travaille, aux heures qui vous conviennent : aussi le soir, le week-end ou pendant votre absence.',
  ],
  facts: [
    { label: 'Pour', value: 'Villas, lofts, résidences et résidences secondaires' },
    { label: 'Fréquence', value: 'Régulièrement ou avant des événements particuliers' },
    { label: 'Équipe', value: 'Toujours la même équipe' },
    { label: 'Discrétion', value: 'Sur demande, avec un accord de confidentialité' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue après avoir fait le tour de votre maison. Prestations typiques :',
    items: [
      'Pièces de séjour, chambres à coucher et chambres d’amis',
      'Cuisines et salles de bains',
      'Pierre naturelle, parquet et surfaces laquées brillantes, nettoyés selon leur matériau',
      'Surfaces vitrées et miroirs',
      'Nettoyage avant votre arrivée et après votre départ',
      'Rondes de contrôle pendant votre absence',
      'Nettoyage avant et après des événements, aussi le week-end',
      'Pièces abritant des œuvres d’art et des antiquités, les œuvres uniquement avec votre accord',
      'Pour les courtiers et les gérances : à bref délai avant une vente, une séance photo ou une remise',
    ],
    notIncluded: ['Restauration d’œuvres d’art et d’antiquités.'],
  },
  sections: [
    {
      title: 'Des matériaux traités avec soin',
      paragraphs: [
        'La pierre naturelle comme le marbre et le calcaire réagit mal à l’acide, même aux produits ménagers doux et au vinaigre. Le parquet supporte peu d’eau, les surfaces laquées brillantes se rayent avec de mauvais chiffons. Le laiton et la robinetterie perdent leur surface avec des produits agressifs.',
        'C’est pourquoi nous clarifions lors du tour des lieux quels matériaux se trouvent dans votre maison et quel entretien ils demandent. Si vous disposez de consignes d’entretien du fabricant ou de l’architecte d’intérieur, nous nous y conformons.',
      ],
    },
    {
      title: 'Clés, alarme et discrétion',
      paragraphs: [
        'Pour les clés et le système d’alarme, nous convenons avec vous de règles fixes. Sur demande, nous signons un accord de confidentialité.',
        'Notre directeur traite personnellement votre demande. Les personnes qui interviennent chez vous ont été vérifiées par nos soins.',
      ],
    },
    {
      title: 'Situations typiques',
      items: [
        'Entretien régulier de votre résidence, à heures fixes et toujours avec la même équipe',
        'Résidence secondaire : nettoyage avant votre arrivée et après votre départ, rondes de contrôle entre-temps',
        'Avant et après un événement, aussi le week-end',
        'Pièces abritant des œuvres d’art et des antiquités, les œuvres uniquement avec votre accord',
        'Pour les agents immobiliers et les gérances : à court terme avant une vente, une séance photo ou une remise',
      ],
    },
    {
      title: 'Pendant votre absence',
      paragraphs: [
        'Pour les résidences secondaires et les longs voyages, nous vérifions que tout est en ordre, aussi souvent que convenu avec vous. Ce que nous contrôlons et à qui nous signalons ce qui sort de l’ordinaire, nous le fixons au préalable avec vous.',
        'Avant votre arrivée, nous nettoyons la maison, pour que vous arriviez sans avoir plus rien à faire. Après votre départ, nous la remettons en ordre.',
      ],
    },
  ],
  steps: [
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
      question: 'Comment entretenez-vous la pierre naturelle et le parquet ?',
      answer:
        'Dans le respect du matériau : jamais de produits acides sur la pierre naturelle comme le marbre, peu d’humidité sur le parquet. Nous clarifions avec vous lors du tour des lieux quels produits nous utilisons dans votre maison.',
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
