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
  title: 'Demandez en toute discrétion',
  text: `Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
}

const luxusimmobilien: ServicePageContent = {
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

export const premium = { luxusimmobilien, privatjet, yacht }
