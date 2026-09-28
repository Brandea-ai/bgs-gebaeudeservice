import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage industriel et de halles pour la production et l’entreposage',
  lead: [
    'La production et l’entreposage génèrent de la poussière, des copeaux et des films d’huile et de graisse. Ils rendent les sols glissants et s’incrustent dans les installations. En même temps, le nettoyage ne doit pas freiner l’exploitation.',
    'Nous nettoyons halles, sols, machines et installations, de manière ponctuelle ou régulière, à des horaires que nous coordonnons avec vous en fonction de la production et des équipes.',
  ],
  facts: [
    { label: 'Pour', value: 'Entreprises industrielles et artisanales, logistique et entrepôts' },
    { label: 'Surfaces', value: 'Halles de production et entrepôts, ateliers, machines et installations' },
    { label: 'Horaires', value: 'Coordonnés avec la production et le travail en équipes' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue après avoir fait le tour de votre site. Prestations typiques :',
    items: [
      'Sols de halles et de production',
      'Zones de stockage, rayonnages et voies de circulation',
      'Ateliers et locaux annexes',
      'Machines et installations selon vos prescriptions',
      'Locaux du personnel, vestiaires et sanitaires',
    ],
    notIncluded: [
      'Entretien et réparation des machines.',
      'Bureaux de l’entreprise : voir [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Machines et installations',
      paragraphs: [
        'Nous nettoyons les machines selon vos prescriptions et en accord avec votre service de maintenance. Avant l’intervention, nous fixons quand l’installation est à l’arrêt, ce qui est nettoyé et quels produits conviennent.',
        'Vos règles de sécurité et d’exploitation s’appliquent aussi à notre équipe. Nous les clarifions avec vous avant la première intervention.',
      ],
    },
    {
      title: 'Sols de halles et voies de circulation',
      paragraphs: [
        'Les sols de halles portent de la poussière, des copeaux, de l’abrasion de pneus et des films d’huile ou de graisse. Les grandes surfaces sont le plus souvent nettoyées avec des autolaveuses, qui brossent et aspirent l’eau sale en un seul passage. Le sol est ensuite rapidement praticable et carrossable.',
        'La méthode et le produit adaptés dépendent du revêtement, par exemple béton, revêtement de sol ou parquet industriel, et du type de salissure. Nous le clarifions lors du tour des lieux.',
      ],
    },
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Entreprises de production, ateliers, halles d’entreposage et de logistique, entreprises artisanales avec atelier et bureau sous un même toit. Les occasions sont par exemple un audit ou la visite d’un client, une réorganisation de la production, les vacances d’entreprise ou le souhait d’avoir des horaires de nettoyage fixes plutôt qu’un nettoyage fait à côté.',
      ],
    },
    {
      title: 'Sécurité dans l’entreprise',
      paragraphs: [
        'La production et l’entreposage ont leurs propres règles : équipement de protection, voies de circulation des chariots élévateurs, zones délimitées, manipulation de substances dangereuses. Nous clarifions ces règles avec vous avant la première intervention.',
        'Pour les machines, il faut aussi définir qui les arrête et les sécurise et qui les remet en service après le nettoyage. Nous le fixons avec votre service de maintenance avant l’intervention.',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'Toutes les zones n’ont pas besoin de la même fréquence. Les locaux du personnel et les sanitaires demandent un entretien fréquent. Les sols de halles, les rayonnages et les machines demandent un nettoyage minutieux à intervalles plus espacés.',
        'Une combinaison est souvent judicieuse : un nettoyage régulier pendant l’exploitation et un nettoyage en profondeur pendant les vacances d’entreprise ou lors des arrêts planifiés.',
      ],
    },
  ],
  steps: [
    {
      title: 'Planification des interventions',
      text: 'Nous fixons les horaires, les zones et l’ordre des travaux, en fonction de la production, des équipes et des arrêts.',
    },
    {
      title: 'Intervention',
      text: 'Nous nettoyons selon le plan. Si votre exploitation change, nous adaptons le plan avec vous.',
    },
  ],
  faq: [
    {
      question: 'Pouvez-vous nettoyer pendant l’exploitation ?',
      answer:
        'Nous le clarifions lors du tour des lieux. Certaines zones peuvent être nettoyées en cours d’exploitation, d’autres seulement pendant les pauses, entre deux équipes ou lors des arrêts. Nous fixons les horaires avec vous.',
    },
    {
      question: 'Nettoyez-vous aussi les machines ?',
      answer: 'Oui. Nous fixons avec vous et votre service de maintenance ce qui est nettoyé sur une machine et quand elle est arrêtée à cet effet.',
    },
    {
      question: 'Quelles règles s’appliquent à votre équipe dans notre entreprise ?',
      answer: 'Vos règles de sécurité et d’exploitation. Nous les clarifions avec vous avant la première intervention.',
    },
    {
      question: 'Comment nettoie-t-on un sol de halle ?',
      answer:
        'Le plus souvent avec une autolaveuse, qui brosse et aspire aussitôt l’eau sale. Le produit adapté dépend du revêtement et de la salissure, par exemple poussière, huile ou abrasion. Nous le clarifions lors du tour des lieux.',
    },
    { question: 'Combien coûte un nettoyage industriel ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Pour un nettoyage en profondeur ponctuel et minutieux.' },
    { path: '/leistungen/bueroreinigung', text: 'Pour les bureaux et les locaux du personnel de l’entreprise.' },
    { path: '/leistungen/facility-services', text: 'Si le nettoyage, la conciergerie et l’entretien des abords doivent venir d’un seul prestataire.' },
  ],
  cta: {
    title: 'Un devis pour votre entreprise',
    text: 'Indiquez-nous les surfaces, les machines et les horaires d’exploitation. Nous faisons un tour des lieux et établissons votre devis, gratuit et sans engagement.',
  },
}
