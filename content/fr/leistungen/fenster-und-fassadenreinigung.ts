import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage de vitres et de façades pour entreprises et immeubles',
  lead: [
    'Des fenêtres sales et des façades grises se remarquent, sur les immeubles commerciaux comme sur les immeubles d’habitation. Nous nettoyons vitrages et façades de manière ponctuelle ou à intervalles réguliers.',
    'Pour les façades, nous utilisons aussi la haute pression. Nous déterminons lors de la visite sur place quelle méthode convient au matériau.',
  ],
  facts: [
    { label: 'Pour', value: 'Entreprises, gérances et propriétaires' },
    { label: 'Surfaces', value: 'Fenêtres, surfaces vitrées, cadres et façades' },
    { label: 'Fréquence', value: 'Ponctuellement ou à intervalles réguliers' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue après la visite. Prestations typiques :',
    items: [
      'Fenêtres côtés intérieur et extérieur, avec cadres et feuillures',
      'Façades vitrées, portes vitrées et cloisons vitrées',
      'Vitrines et entrées',
      'Tablettes de fenêtre et stores selon entente',
      'Nettoyage de façades, aussi à haute pression',
    ],
    notIncluded: [
      'Nettoyage des locaux intérieurs : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung) ou [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Rénovation, peinture et réparations de la façade.',
    ],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Immeubles de bureaux avec façades vitrées, arcades avec vitrines, immeubles d’habitation avec de nombreuses fenêtres dans la cage d’escalier, bâtiments commerciaux à la façade grise ou verdie. Partout, le verre marque la première impression, et la saleté se remarque aussitôt à contre-jour.',
        'Le nettoyage est souvent prévu au printemps après l’hiver, lorsque le pollen s’ajoute, ou avant un événement, une location ou une vente.',
      ],
    },
    {
      title: 'Comment nettoie-t-on le verre et les façades',
      paragraphs: [
        'Le verre se nettoie généralement avec de l’eau, un produit doux et une raclette, puis on essuie les cadres et les feuillures. Pour les grandes surfaces vitrées en hauteur, il existe des perches télescopiques avec de l’eau pure traitée, qui sèche sans laisser de résidus.',
        'Pour les façades, c’est le matériau qui décide. Les surfaces lisses et solides supportent souvent la haute pression, le crépi délicat, le bois ou la pierre naturelle ancienne demandent une méthode plus douce. Nous déterminons lors de la visite sur place quelle méthode convient.',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'La fréquence de nettoyage du verre dépend de l’emplacement, de l’utilisation et des exigences. Tout le monde voit les vitrines et les entrées, presque personne les fenêtres d’un entrepôt.',
      ],
      items: [
        'Entrées, vitrines et portes vitrées : plus souvent, car tout le monde les voit et les touche',
        'Fenêtres des bureaux et des cages d’escalier : à intervalles réguliers, souvent selon la saison',
        'Façades : moins souvent, lorsque des salissures, des algues ou un voile gris deviennent visibles',
        'Par gel, tempête ou forte pluie, on ne peut pas travailler proprement à l’extérieur, prévoyez donc une certaine marge',
      ],
    },
    {
      title: 'Ce que nous clarifions lors de la visite',
      items: [
        'La hauteur des surfaces et comment les atteindre en sécurité',
        'Si les fenêtres s’ouvrent ou ne sont accessibles que de l’extérieur',
        'Le matériau des cadres et de la façade',
        'L’accès, le stationnement et les barrages, par exemple sur le trottoir devant le bâtiment',
        'S’il faut informer les locataires, parce que des fenêtres sont nettoyées de l’intérieur',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage de vitres',
      items: [
        'Aucune trace n’est visible à contre-jour',
        'Le verre est propre jusque dans les coins, aussi au bord du cadre',
        'Les cadres, les feuillures et les tablettes sont nettoyés aussi, dans la mesure convenue',
        'À l’intérieur, il ne reste ni gouttes ni taches d’eau sur les sols et les tablettes',
      ],
    },
  ],
  steps: [
    {
      title: 'Intervention',
      text: 'Nous nettoyons à la date convenue, sur demande à intervalles fixes.',
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence faut-il nettoyer les fenêtres ?',
      answer:
        'Cela dépend de l’emplacement et de l’utilisation. Au bord d’une route très fréquentée, les vitres se salissent plus vite qu’en pleine verdure. Après la visite, nous vous proposons une fréquence.',
    },
    {
      question: 'Nettoyez-vous les façades à haute pression ?',
      answer: 'Oui, si le matériau le permet. Nous déterminons lors de la visite sur place quelle méthode convient à votre façade.',
    },
    {
      question: 'Comment nettoyez-vous les fenêtres et les façades en hauteur ?',
      answer:
        'Cela dépend du bâtiment et de l’accès. Nous le clarifions lors de la visite et précisons dans le devis comment nous atteignons les surfaces.',
    },
    {
      question: 'Les locataires doivent-ils être présents ?',
      answer:
        'Pour les fenêtres qui ne peuvent être nettoyées que de l’intérieur, il faut un accès à l’appartement ou au bureau. Nous le clarifions lors de la visite, pour que vous puissiez informer les locataires à temps.',
    },
    { question: 'Combien coûte le nettoyage ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Pour le nettoyage régulier d’immeubles et de surfaces commerciales.' },
    { path: '/leistungen/bueroreinigung', text: 'Pour les bureaux et les cabinets, en fonction de vos horaires de travail.' },
    { path: '/leistungen/baureinigung', text: 'Pour les vitrages et les cadres après des travaux de construction ou de transformation.' },
  ],
  cta: {
    title: 'Un devis pour vos vitres et votre façade',
    text: 'Indiquez-nous le bâtiment, les surfaces et la date souhaitée. Nous examinons tout sur place et établissons votre devis, gratuit et sans engagement.',
  },
}
