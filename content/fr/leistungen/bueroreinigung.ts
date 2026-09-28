import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage de bureaux et de cabinets',
  lead: [
    'Dans les bureaux et les cabinets, le nettoyage ne doit pas perturber l’activité : pas d’aspirateur pendant une réunion, pas de sol mouillé pendant les consultations. C’est pourquoi nous fixons avec vous les horaires d’intervention, en fonction de vos heures de travail et d’ouverture.',
    'Nous nettoyons des bureaux, des administrations et des cabinets selon une fréquence fixe. Nos collaboratrices et collaborateurs parlent allemand, anglais, français et italien, un avantage pour les entreprises aux équipes internationales.',
  ],
  facts: [
    { label: 'Pour', value: 'Bureaux, administrations et cabinets' },
    { label: 'Horaires', value: 'Selon entente, en fonction de vos heures de travail et d’ouverture' },
    { label: 'Fréquence', value: 'Plusieurs fois par semaine, selon la surface et l’utilisation' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue exacte après la visite. Prestations typiques :',
    items: [
      'Postes de travail et surfaces dégagées',
      'Sols des bureaux, couloirs et salles de séance',
      'Réception, entrée et portes vitrées',
      'Kitchenettes et salles de pause',
      'Sanitaires',
      'Déchets et vieux papier, réapprovisionnement des consommables',
    ],
    notIncluded: [
      'Cages d’escalier et locaux communs d’immeubles entiers : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyages en profondeur ponctuels : voir [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
      'Le retraitement des instruments et des dispositifs médicaux, qui reste du ressort de l’équipe de votre cabinet.',
    ],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Petits bureaux de quelques postes de travail, administrations sur plusieurs étages, cabinets médicaux et de thérapie avec salle d’attente : les locaux sont différents, l’exigence est la même. Le matin, tout doit être propre et prêt, sans que personne ne remarque le nettoyage.',
        'La demande arrive souvent lors d’un déménagement dans de nouveaux locaux, lorsque l’équipe s’agrandit ou lorsque le nettoyage actuel ne correspond plus aux heures de travail.',
      ],
    },
    {
      title: 'Ce qui se passe lors d’une intervention',
      paragraphs: [
        'Un ordre fixe a fait ses preuves, de haut en bas et du propre vers le sale : vider les poubelles et le vieux papier, essuyer les surfaces dégagées et les postes de travail, nettoyer la kitchenette et les sanitaires, réapprovisionner les consommables et, pour finir, les sols. Ainsi, aucun sol nettoyé n’est de nouveau sali.',
        'Nous clarifions lors de la visite si les écrans, claviers, téléphones ou plantes sont aussi compris, puis nous le fixons dans le devis.',
      ],
    },
    {
      title: 'Nettoyage des cabinets',
      paragraphs: [
        'Dans les cabinets, nous nous conformons à votre plan d’hygiène. Nous clarifions lors de la visite quelles pièces et surfaces nous nettoyons et ce que l’équipe de votre cabinet prend elle-même en charge, puis nous le fixons dans le devis.',
        'À la réception et dans la salle d’attente, les poignées de porte, le comptoir, les chaises et les tablettes sont touchés par beaucoup de monde. Les produits à utiliser pour ces surfaces figurent dans votre plan d’hygiène. Les salles de traitement et les appareils restent tels que l’équipe de votre cabinet le prescrit.',
      ],
    },
    {
      title: 'Horaires et accès',
      paragraphs: [
        'La plupart des bureaux sont nettoyés en dehors des heures de travail, tôt le matin ou le soir. Dans les cabinets, l’horaire dépend des consultations. Nous fixons avec vous les horaires d’intervention.',
        'Pour l’accès, il faut généralement une clé ou un badge et des règles claires pour l’alarme, la lumière et la fermeture. Nous le clarifions avant la première intervention.',
      ],
    },
    {
      title: 'Ce qui détermine la charge de travail',
      paragraphs: [
        'La durée d’une intervention et la fréquence de nos passages dépendent moins de la seule surface que de l’usage des locaux. Nous clarifions ces points lors de la visite :',
      ],
      items: [
        'Surface et type de locaux, par exemple bureaux individuels, open space, salles de séance et réception',
        'Nombre de postes de travail et intensité d’utilisation des locaux',
        'Kitchenettes et sanitaires, qui demandent plus de temps que les surfaces de bureau',
        'Revêtements de sol comme moquette, parquet, pierre ou vinyle',
        'Portes vitrées, parois vitrées et autres surfaces vitrées',
        'Rythme et horaires d’intervention',
        'Accès par clé, badge ou système d’alarme',
        'Si le matériel de consommation comme le savon, le papier et les sacs poubelle est compris',
      ],
    },
    {
      title: 'Quelles informations joindre à votre demande de devis',
      paragraphs: [
        'Plus votre demande est précise, mieux nous pouvons préparer la visite. Ces informations sont utiles :',
      ],
      items: [
        'Adresse et type d’entreprise, par exemple bureau, administration ou cabinet',
        'Surface approximative et nombre d’étages',
        'Nombre de postes de travail, de salles de séance, de kitchenettes et de sanitaires',
        'Rythme souhaité et horaires auxquels le nettoyage doit avoir lieu',
        'Particularités comme des cabinets avec plan d’hygiène, des zones confidentielles ou de grandes surfaces vitrées',
        'Si vous souhaitez des produits de nettoyage respectueux de l’environnement',
        'Date de début souhaitée et personne de contact pour la visite',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage de bureaux',
      items: [
        'Les corbeilles sont vidées et munies de sacs neufs',
        'La kitchenette est sans traces de café, l’évier propre et sec',
        'Les portes et les cloisons vitrées sont sans empreintes de doigts',
        'Les distributeurs de savon et de papier des sanitaires sont remplis',
        'Les documents et les objets personnels sont restés tels que vous les avez laissés',
      ],
    },
  ],
  steps: [
    {
      title: 'Horaires et accès',
      text: 'Nous convenons des heures de nettoyage et de l’accès au bâtiment, par exemple avec une clé ou un badge.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si vos besoins changent, nous adaptons avec vous l’étendue et la fréquence.',
    },
  ],
  faq: [
    {
      question: 'Nettoyez-vous en dehors de nos heures de travail ?',
      answer:
        'Nous fixons les horaires d’intervention avec vous, en fonction de vos heures de travail et d’ouverture. Indiquez-nous dans votre demande quand le nettoyage doit avoir lieu.',
    },
    {
      question: 'Nettoyez-vous aussi les cabinets médicaux et de thérapie ?',
      answer:
        'Oui. Dans les cabinets, nous nous conformons à votre plan d’hygiène et clarifions lors de la visite quelles pièces et surfaces nous prenons en charge.',
    },
    {
      question: 'Devons-nous ranger les postes de travail avant le nettoyage ?',
      answer:
        'Nous nettoyons les surfaces dégagées. Moins il y a d’objets sur les bureaux, plus le nettoyage peut être minutieux. Nous clarifions lors de la visite comment vous souhaitez procéder avec les documents, les écrans et les claviers.',
    },
    {
      question: 'Comment se passe la remise des clés, et comment votre équipe accède-t-elle au bâtiment ?',
      answer:
        'Avant la première intervention, nous convenons avec vous des clés, badges ou codes que reçoit notre équipe et des règles applicables pour l’alarme, l’éclairage et la fermeture.',
    },
    {
      question: 'Vos collaboratrices et collaborateurs parlent-ils aussi anglais ?',
      answer: `${answers.sprachen} C’est pratique lorsque plusieurs langues sont parlées dans votre bureau.`,
    },
    {
      question: 'Qui répond des dommages causés lors du nettoyage ?',
      answer:
        'Nous disposons d’une assurance responsabilité civile d’entreprise avec une couverture de CHF 10 millions. Si vous constatez un dommage après une intervention, signalez-le-nous sans tarder.',
    },
    {
      question: 'Quelle est la durée du contrat, et comment le résilier ?',
      answer:
        'La durée et la résiliation sont convenues dans le devis. Faites-nous part de vos souhaits à ce sujet lors de la visite.',
    },
    { question: 'Nettoyez-vous aussi avec des produits respectueux de l’environnement ?', answer: answers.mittel },
    { question: 'Combien coûte le nettoyage de bureaux ?', answer: `${answers.kosten} Plus d’informations dans notre guide : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).` },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Pour les cages d’escalier et les locaux communs de tout l’immeuble.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les fenêtres et les surfaces vitrées, aussi côté extérieur.' },
    { path: '/leistungen/facility-services', text: 'Si le nettoyage, la conciergerie et l’entretien des abords doivent venir d’un seul prestataire.' },
  ],
  cta: {
    title: 'Un devis pour votre bureau ou votre cabinet',
    text: 'Indiquez-nous la surface, les pièces et les horaires souhaités. Nous passons chez vous et établissons votre devis, gratuit et sans engagement.',
  },
}
