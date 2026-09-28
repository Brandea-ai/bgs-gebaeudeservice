import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const yacht: ServicePageContent = {
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
    intro: 'Nous fixons l’étendue après une visite à la place d’amarrage. Prestations typiques :',
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
  sections: [
    {
      title: 'Les matériaux à bord',
      paragraphs: [
        'Le teck devient gris et rugueux lorsqu’il est mal nettoyé : des brosses trop dures et la haute pression arrachent les fibres tendres du bois. Le gelcoat perd son brillant sous l’effet du soleil et des taches d’eau, l’inox présente des traces de rouille superficielle, les coussins absorbent l’humidité.',
        'C’est pourquoi chaque matériau demande sa propre méthode. Nous clarifions au préalable avec vous quels produits nous utilisons pour votre bateau.',
      ],
    },
    {
      title: 'Sur un lac, beaucoup de choses sont différentes',
      paragraphs: [
        'Sur le lac des Quatre-Cantons et le lac de Zoug, il n’y a pas de sel, mais le pollen, les feuilles, les araignées et les fientes d’oiseaux apportent beaucoup de saleté à bord, surtout au printemps et en été. Dans l’espace intérieur fermé, l’humidité et la poussière s’installent.',
        'Comme l’eau du pont s’écoule directement dans le lac, le choix des produits de nettoyage demande du soin. Sur demande, nous nettoyons avec des produits respectueux de l’environnement.',
      ],
    },
    {
      title: 'Occasions typiques',
      items: [
        'Avant la première sortie de la saison',
        'Régulièrement pendant la saison',
        'Avant et après la venue d’invités à bord',
        'À la fin de la saison, avant l’hivernage du bateau',
      ],
    },
    {
      title: 'Accès à la place d’amarrage',
      paragraphs: [
        'Nous clarifions au préalable avec vous l’accès au ponton ou au port, ainsi que l’électricité et l’eau à la place d’amarrage et qui nous ouvre le bateau. Chez vous, c’est toujours la même équipe qui travaille.',
      ],
    },
  ],
  steps: [
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
    {
      question: 'À quelle fréquence faut-il nettoyer un bateau sur un lac ?',
      answer:
        'Cela dépend de la place d’amarrage, de l’utilisation et de la saison. Sous les arbres et pendant la floraison, un bateau se salit plus vite. Après la visite, nous vous proposons des dates, ponctuelles ou régulières.',
    },
    {
      question: 'Travaillez-vous aussi sur la carène ou le moteur ?',
      answer: 'Non. Les travaux sur la carène, par exemple l’antifouling, et l’entretien technique du moteur et de l’équipement de bord n’en font pas partie.',
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
  cta: {
    title: cta.title,
    text: 'Indiquez-nous le bateau, la place d’amarrage et les dates souhaitées. Nous examinons le bateau à sa place d’amarrage et vous remettons un devis, gratuitement et sans engagement.',
  },
}
