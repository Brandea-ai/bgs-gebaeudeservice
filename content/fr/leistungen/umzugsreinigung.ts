import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage de déménagement et de fin de bail avec garantie de remise',
  lead: [
    'Lors de la remise d’un logement, la gérance contrôle chaque pièce : cuisine, salle de bains, fenêtres, stores, armoires et locaux annexes. Pour que l’état des lieux se passe sans réclamation, le logement doit être nettoyé à fond, et cela pour une date fixe.',
    'Nous réalisons le nettoyage de déménagement et de fin de bail d’appartements et de surfaces commerciales pour des gérances, des propriétaires et des entreprises, avec garantie de remise : si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires, communautés de PPE et entreprises' },
    { label: 'Biens', value: 'Appartements et surfaces commerciales avant la remise' },
    { label: 'Garantie', value: 'Garantie de remise, détails dans le devis' },
  ],
  scope: {
    title: 'Ce que comprend le nettoyage final',
    intro: 'Nous fixons l’étendue exacte du nettoyage du logement dans le devis, après la visite. Prestations typiques :',
    items: [
      'Cuisine avec four, plaques de cuisson, hotte, réfrigérateur et armoires, à l’intérieur et à l’extérieur',
      'Salle de bains et WC avec robinetterie, carrelage, joints et miroirs, détartrés',
      'Fenêtres côtés intérieur et extérieur, avec cadres, feuillures et tablettes',
      'Stores et volets selon entente',
      'Armoires encastrées, portes, encadrements, interrupteurs et prises',
      'Sols et plinthes dans toutes les pièces',
      'Balcon ou terrasse, compartiments de cave et de galetas',
    ],
    notIncluded: [
      'Nettoyages de fin de bail mandatés par les locataires d’appartements individuels. Pour les villas et les résidences, nous proposons notre [offre Premium](/premium).',
      'Transport de déménagement et débarras de meubles.',
      'Réparations, travaux de peinture et remise en état de dégâts.',
      'Nettoyage en profondeur sans remise : voir [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'La garantie de remise',
      paragraphs: [
        'Si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement. Les détails figurent dans le devis.',
        'La garantie porte sur notre nettoyage. Les dégâts, l’usure ou les réparations constatés lors de l’état des lieux ne concernent pas le nettoyage et n’en font donc pas partie.',
      ],
    },
    {
      title: 'Quel doit être l’état de propreté d’un logement lors de la remise ?',
      paragraphs: [
        'Le degré de propreté exigé est généralement réglé par le contrat de bail. En Suisse, l’usage est un nettoyage minutieux de tout le logement, locaux annexes compris. Lors de l’état des lieux, la gérance regarde donc aussi là où l’on nettoie rarement au quotidien : dans le four, dans la hotte, sur les stores, dans les feuillures des fenêtres et dans les armoires.',
        'Ce qui s’applique dans chaque cas figure dans le contrat de bail et dans le procès-verbal d’état des lieux. Cette page donne un aperçu et ne remplace pas un conseil juridique.',
      ],
    },
    {
      title: 'Planification et date',
      paragraphs: [
        'Le nettoyage final se situe entre le déménagement et l’état des lieux. Idéalement, les locaux sont alors vides, pour que les armoires, les sols derrière les meubles et les éléments encastrés puissent aussi être nettoyés. Planifiez le nettoyage de sorte qu’il s’écoule le moins de temps possible entre le nettoyage et l’état des lieux.',
        'Réservez tôt, dès que la date de remise est connue. Autour des fins de mois et aux termes de déménagement usuels de la région, les dates sont très demandées.',
      ],
      items: [
        'Les meubles et les objets personnels sont débarrassés',
        'L’électricité et l’eau sont encore raccordées',
        'Les clés du logement, de la cave, du galetas et de la boîte aux lettres sont disponibles',
      ],
    },
    {
      title: 'Pour qui nous réalisons le nettoyage de fin de bail',
      paragraphs: [
        'Pour les gérances qui préparent des appartements entre deux baux. Pour les propriétaires et les copropriétaires qui vendent, remettent ou relouent un appartement. Et pour les entreprises qui restituent des surfaces de bureaux ou commerciales.',
        'Nous ne servons pas les locataires d’appartements individuels. Pour les villas et les résidences, nous réalisons aussi le nettoyage final pour des particuliers dans le cadre de notre [offre Premium](/premium).',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage final',
      items: [
        'Le four, les plaques et la hotte sont sans film de graisse',
        'La robinetterie, les parois de douche et le carrelage sont sans traces de calcaire',
        'Les fenêtres, les cadres et les feuillures sont sans traces ni poussière',
        'Les armoires sont propres et sèches à l’intérieur',
        'Aucune trace de poussière ne reste le long des plinthes',
      ],
    },
  ],
  steps: [
    {
      title: 'Nettoyage final',
      text: 'Nous nettoyons entre le déménagement et l’état des lieux, à la date convenue.',
    },
    {
      title: 'État des lieux',
      text: 'Lors de l’état des lieux, la garantie de remise s’applique selon le devis.',
    },
  ],
  faq: [
    {
      question: 'Combien coûte un nettoyage de fin de bail ?',
      answer:
        'Cela dépend surtout de la taille et de l’état du logement, du nombre de fenêtres et de stores, des locaux annexes comme la cave, le galetas ou le balcon et de la date. C’est pourquoi nous n’indiquons un prix que dans le devis, après avoir vu le bien. La visite et le devis sont gratuits et sans engagement.',
    },
    {
      question: 'Quel doit être l’état de propreté d’un logement lors de la remise en Suisse ?',
      answer:
        'L’usage est un nettoyage minutieux de tout le logement, locaux annexes compris : cuisine avec appareils, salle de bains et WC, fenêtres côtés intérieur et extérieur avec cadres, stores, armoires, sols, cave, galetas et balcon. Ce qui s’applique dans chaque cas est réglé par le contrat de bail et le procès-verbal d’état des lieux. Cette réponse n’est pas un conseil juridique.',
    },
    {
      question: 'Que se passe-t-il si la gérance émet une réclamation lors de l’état des lieux ?',
      answer:
        'Si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement. Les détails figurent dans le devis.',
    },
    {
      question: 'Quand faut-il réserver le nettoyage de fin de bail ?',
      answer:
        'Dès que la date de remise est connue. Autour des fins de mois et aux termes de déménagement usuels de la région, les dates sont très demandées. Nous plaçons le nettoyage entre le déménagement et l’état des lieux.',
    },
    {
      question: 'Les locaux doivent-ils être vides pour le nettoyage final ?',
      answer:
        'Idéalement oui. Dans des locaux vides, les armoires, les éléments encastrés et les sols derrière les meubles peuvent aussi être nettoyés, et ce sont précisément ces endroits que la gérance contrôle lors de l’état des lieux.',
    },
    {
      question: 'Réalisez-vous aussi le nettoyage de fin de bail pour les locataires ?',
      answer:
        'Non. Nous réalisons le nettoyage de fin de bail pour les gérances, les propriétaires et les entreprises. Pour les villas et les résidences, il est aussi proposé aux particuliers dans le cadre de notre [offre Premium](/premium).',
    },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Pour un nettoyage en profondeur sans remise, par exemple avant le début d’un nettoyage d’entretien.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les surfaces vitrées et les façades de tout l’immeuble.' },
    { path: '/leistungen/hauswartung', text: 'Si la conciergerie doit participer aux états des lieux.' },
  ],
  cta: {
    title: 'Un devis pour votre nettoyage de fin de bail',
    text: 'Indiquez-nous le bien, sa taille et la date de remise. Nous examinons les locaux et établissons votre devis, gratuit et sans engagement.',
  },
}
