import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage de chantier et de fin de chantier pour constructions neuves et transformations',
  lead: [
    'Après des travaux de construction ou de transformation, la poussière, les restes de mortier et les films de protection sont partout. Avant l’arrivée des locataires, des acheteurs ou de votre équipe, tout doit être prêt à l’emménagement, souvent pour une date de remise fixe.',
    'Nous nettoyons pendant et après les travaux, jusqu’à ce que les locaux puissent être remis. Pour les maîtres d’ouvrage, les bureaux d’architectes, les entreprises générales et les gérances.',
  ],
  facts: [
    { label: 'Pour', value: 'Maîtres d’ouvrage, bureaux d’architectes, entreprises générales et gérances' },
    { label: 'Chantiers', value: 'Constructions neuves, transformations et rénovations' },
    { label: 'Moment', value: 'Pendant la phase de construction et avant la remise' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro:
      'Un nettoyage de chantier se déroule le plus souvent par étapes, en fonction de l’avancement des travaux. Nous fixons avec vous les étapes que nous prenons en charge.',
    items: [
      'Nettoyage grossier pendant la phase de construction',
      'Nettoyages intermédiaires, par exemple avant les aménagements intérieurs',
      'Nettoyage de fin de chantier avant la remise',
      'Débarrasser fenêtres, cadres et vitrages de la poussière et des résidus',
      'Retirer les restes de colle et les films de protection',
      'Nettoyer sols, sanitaires, cuisines et armoires encastrées pour un emménagement immédiat',
    ],
    notIncluded: [
      'Nettoyage régulier après l’emménagement : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Façades : voir [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Constructions neuves d’immeubles d’habitation et commerciaux, transformations d’étages, appartements rénovés avant la relocation ou arcades avant l’ouverture. Tous ont en commun une date fixe : remise, emménagement ou ouverture.',
        'Souvent, le nettoyage n’est demandé que peu avant cette date. Il vaut mieux l’inscrire tôt dans le planning, pour qu’il trouve sa place après les derniers travaux des artisans et avant la réception.',
      ],
    },
    {
      title: 'Ce qui se passe lors du nettoyage de fin de chantier',
      paragraphs: [
        'La poussière de chantier est fine et se dépose partout : sur les sols, dans les feuillures des fenêtres, sur les encadrements de porte, dans les armoires et les tiroirs. C’est pourquoi on nettoie de haut en bas et souvent en plus d’un passage.',
        'S’y ajoutent des résidus comme les restes de colle, les étiquettes et les films de protection. Ils sont retirés avec des produits et des outils adaptés à la surface, pour que le verre, la robinetterie et les sols neufs ne soient pas rayés.',
      ],
    },
    {
      title: 'Les étapes en un coup d’œil',
      items: [
        'Nettoyage grossier : enlever la saleté grossière et la poussière, pour que les travaux suivants commencent sur une base propre',
        'Nettoyage intermédiaire : avant les aménagements intérieurs, par exemple avant la pose des sols ou le montage des cuisines',
        'Nettoyage de fin de chantier : minutieux et prêt à l’emménagement, après les derniers travaux des artisans et avant la réception',
      ],
      paragraphs: [
        'Si des artisans travaillent encore dans les locaux après le nettoyage de fin de chantier, de la nouvelle poussière se forme. Planifiez donc le nettoyage final après les derniers travaux.',
      ],
    },
    {
      title: 'Collaboration avec la direction des travaux',
      paragraphs: [
        'Sur le chantier, les règles de la direction des travaux s’appliquent. Avant la première intervention, nous clarifions l’accès, les règles de sécurité, l’électricité et l’eau, un emplacement pour les appareils et la gestion des déchets.',
        'Une personne de contact sur le chantier, qui confirme les dates et l’accès, est utile. Si le planning change, nous coordonnons à nouveau les interventions avec vous.',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage de fin de chantier',
      items: [
        'Aucun film de poussière sur les tablettes de fenêtre, les encadrements de porte et dans les tiroirs',
        'Des vitres sans restes de colle, traces ni rayures',
        'Les films de protection des fenêtres, des portes et des appareils sont retirés',
        'La robinetterie et le carrelage sont sans résidus',
        'Les sols sont propres, aussi dans les coins et le long des plinthes',
      ],
    },
  ],
  steps: [
    {
      title: 'Planifier les étapes',
      text: 'Nous coordonnons les interventions avec la direction des travaux et le planning, afin que le nettoyage suive l’avancement du chantier.',
    },
    {
      title: 'Remise',
      text: 'Avant la remise, nous nettoyons les locaux pour qu’ils soient prêts à l’emménagement. Nous alignons la date sur votre date de remise ou d’emménagement.',
    },
  ],
  faq: [
    {
      question: 'Quelle est la différence entre nettoyage de chantier et nettoyage de fin de chantier ?',
      answer:
        'Le nettoyage de chantier comprend les interventions pendant la phase de construction, par exemple un nettoyage grossier ou des nettoyages intermédiaires. Le nettoyage de fin de chantier est le dernier nettoyage minutieux avant la remise, après lequel les locaux sont prêts à l’emménagement.',
    },
    {
      question: 'Quand faut-il planifier le nettoyage de fin de chantier ?',
      answer:
        'Dès que la date de remise est connue. Le nettoyage intervient après les derniers travaux des artisans et avant la réception. Plus tôt nous connaissons la date, mieux nous pouvons planifier.',
    },
    {
      question: 'Le nettoyage des fenêtres est-il compris ?',
      answer:
        'Oui, nous nettoyons les fenêtres, les cadres et les vitrages lors du nettoyage de fin de chantier. Pour les façades, nous proposons le [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'De quoi a-t-on besoin sur le chantier pour le nettoyage ?',
      answer:
        'D’un accès aux locaux, d’électricité et d’eau ainsi que d’un emplacement pour les appareils. Nous clarifions lors de la visite, avec vous ou la direction des travaux, où nous les trouvons.',
    },
    { question: 'Combien coûte un nettoyage de chantier ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Pour un nettoyage en profondeur, lorsque des surfaces doivent redevenir parfaitement propres après une longue utilisation.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les surfaces vitrées et les façades du bâtiment terminé.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Pour le nettoyage régulier après l’emménagement.' },
  ],
  cta: {
    title: 'Un devis pour votre chantier',
    text: 'Indiquez-nous le bien, la surface et la date de remise. Nous visitons le chantier et établissons votre devis, gratuit et sans engagement.',
  },
}
