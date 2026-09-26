import type { ServicePageContent } from '../types'
import { answers, steps } from './common'

/**
 * Textes des neuf pages de prestations sous /leistungen en français (M29, M60).
 * Traduction fidèle de content/de/leistungen.ts. Les descriptions générales
 * d’une prestation (« typiquement ») ne sont pas un engagement, l’étendue
 * contractuelle figure dans le devis.
 */

const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage d’entretien pour immeubles et surfaces commerciales',
  lead: [
    'La cage d’escalier, l’entrée et les locaux communs marquent l’image d’un immeuble, pour les locataires comme pour la clientèle et les visiteurs. Avec un nettoyage d’entretien, ils restent propres sans que vous ayez à vous en occuper vous-même.',
    'Nous nettoyons des immeubles locatifs, des immeubles mixtes d’habitation et de commerce ainsi que des surfaces commerciales selon une fréquence fixe, que nous définissons avec vous après la visite. Nous réapprovisionnons également les consommables.',
  ],
  facts: [
    { label: 'Pour', value: 'Immeubles locatifs, immeubles mixtes d’habitation et de commerce, surfaces commerciales' },
    { label: 'Fréquence', value: 'Plusieurs fois par semaine, selon la surface et l’utilisation' },
    { label: 'Compris', value: 'Service de réapprovisionnement des consommables' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Ce que nous nettoyons et à quelle fréquence, nous le fixons après la visite. Typiquement :',
    items: [
      'Cages d’escalier, entrées et ascenseurs',
      'Sols dans toutes les pièces convenues',
      'Portes, mains courantes, interrupteurs et vitrages de l’entrée',
      'Sanitaires, cuisines et salles de pause',
      'Buanderies, caves et locaux annexes',
      'Vider les poubelles et réapprovisionner les consommables',
    ],
    notIncluded: [
      'Bureaux et cabinets : voir [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Nettoyages en profondeur ou de fin de bail ponctuels : voir [Nettoyages spéciaux](/leistungen/sonderreinigungen).',
      'Fenêtres côté extérieur et façades : voir [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
      'Ménages privés. Pour les villas et les résidences, nous proposons notre [offre Premium](/premium).',
    ],
  },
  sections: [
    {
      title: 'Service de réapprovisionnement',
      paragraphs: [
        'Dans le cadre du nettoyage d’entretien, nous réapprovisionnons les consommables. Les articles concernés et qui les achète sont fixés dans le devis.',
      ],
      items: [
        'Papier toilette, essuie-mains en papier et savon',
        'Sacs à ordures et chiffons de nettoyage',
        'Autres consommables selon entente',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Accord',
      text: 'Avec votre accord, il est établi quelles pièces nous nettoyons, à quelle fréquence et ce que nous réapprovisionnons.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si l’utilisation change, nous convenons avec vous d’une nouvelle étendue ou d’une nouvelle fréquence.',
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence faut-il nettoyer ?',
      answer:
        'Cela dépend de l’intensité d’utilisation des surfaces. Après la visite, nous vous proposons une fréquence. Le nettoyage d’entretien est conçu pour des biens nettoyés plusieurs fois par semaine.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage en profondeur ?',
      answer:
        'Le nettoyage d’entretien maintient les surfaces propres selon une fréquence fixe. Un nettoyage en profondeur est une intervention ponctuelle et minutieuse, qui élimine aussi les salissures que le nettoyage courant n’atteint pas. Il fait partie de nos [Nettoyages spéciaux](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Pourrons-nous modifier la fréquence plus tard ?',
      answer: 'Oui. Si l’utilisation change, nous convenons avec vous d’une nouvelle étendue ou d’une nouvelle fréquence.',
    },
    { question: 'Nettoyez-vous avec des produits respectueux de l’environnement ?', answer: answers.mittel },
    { question: 'Combien coûte un nettoyage d’entretien ?', answer: `${answers.kosten} Plus d’informations dans nos conseils : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).` },
    {
      question: 'À quoi faut-il veiller en choisissant une entreprise de nettoyage ?',
      answer:
        'À une étendue des prestations clairement décrite, à une assurance attestée, à un interlocuteur fixe et à un devis établi après une visite. Plus d’informations dans nos conseils : [Comment trouver la bonne entreprise de nettoyage ?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'S’il s’agit surtout de bureaux ou d’un cabinet.' },
    { path: '/leistungen/hauswartung', text: 'Si, en plus du nettoyage, il faut des rondes de contrôle, des petites réparations et l’élimination des déchets.' },
    { path: '/leistungen/sonderreinigungen', text: 'Pour un nettoyage en profondeur ou un nettoyage de fin de bail avec garantie de remise.' },
  ],
  cta: {
    title: 'Un devis pour votre immeuble',
    text: 'Décrivez-nous le bien, la surface et la fréquence souhaitée. Nous passons pour la visite et établissons votre devis, gratuit et sans engagement.',
  },
}

const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage de bureaux et de cabinets',
  lead: [
    'Dans les bureaux et les cabinets, le nettoyage ne doit pas perturber l’activité : pas d’aspirateur pendant une réunion, pas de sol mouillé pendant les consultations. C’est pourquoi nous fixons avec vous les horaires d’intervention, en fonction de vos heures de travail et d’ouverture.',
    'Nous nettoyons des bureaux, des administrations et des cabinets selon une fréquence fixe. Nos collaboratrices et collaborateurs parlent allemand, anglais, français et italien, un avantage pour les entreprises aux équipes internationales.',
  ],
  facts: [
    { label: 'Pour', value: 'Bureaux, administrations et cabinets' },
    { label: 'Horaires', value: 'Selon entente, en fonction de vos heures de travail et d’ouverture' },
    { label: 'Fréquence', value: 'Plusieurs fois par semaine, selon la surface et l’utilisation' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue exacte après la visite. Typiquement :',
    items: [
      'Postes de travail et surfaces dégagées',
      'Sols des bureaux, couloirs et salles de séance',
      'Réception, entrée et portes vitrées',
      'Cafétérias et salles de pause',
      'Sanitaires',
      'Déchets et vieux papier, réapprovisionnement des consommables',
    ],
    notIncluded: [
      'Cages d’escalier et locaux communs d’immeubles entiers : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyages en profondeur ponctuels : voir [Nettoyages spéciaux](/leistungen/sonderreinigungen).',
      'Le retraitement des instruments et des dispositifs médicaux, qui reste du ressort de l’équipe de votre cabinet.',
    ],
  },
  sections: [
    {
      title: 'Nettoyage des cabinets',
      paragraphs: [
        'Dans les cabinets, nous nous conformons à votre plan d’hygiène. Nous clarifions lors de la visite quelles pièces et surfaces nous nettoyons et ce que l’équipe de votre cabinet prend elle-même en charge, puis nous le fixons dans le devis.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Horaires et accès',
      text: 'Nous fixons quand nous nettoyons et comment nous accédons au bâtiment, par exemple avec une clé ou un badge.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si vos besoins changent, nous adaptons avec vous l’étendue et la fréquence.',
    },
  ],
  faq: [
    {
      question: 'Nettoyez-vous en dehors de nos heures de travail ?',
      answer:
        'Nous fixons les horaires d’intervention avec vous, en fonction de vos heures de travail et d’ouverture. Indiquez-nous dans votre demande quand le nettoyage doit avoir lieu.',
    },
    {
      question: 'Nettoyez-vous aussi les cabinets médicaux et de thérapie ?',
      answer:
        'Oui. Dans les cabinets, nous nous conformons à votre plan d’hygiène et clarifions lors de la visite quelles pièces et surfaces nous prenons en charge.',
    },
    {
      question: 'Vos collaboratrices et collaborateurs parlent-ils aussi anglais ?',
      answer: `${answers.sprachen} C’est pratique lorsque plusieurs langues sont parlées dans votre bureau.`,
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Combien coûte le nettoyage de bureaux ?', answer: `${answers.kosten} Plus d’informations dans nos conseils : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).` },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
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

const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyages spéciaux : nettoyage en profondeur et de fin de bail',
  lead: [
    'Certains nettoyages ne reviennent pas chaque semaine : avant la remise d’un appartement, lorsque la saleté s’est incrustée avec le temps ou lorsque de la poussière subsiste après des travaux. C’est à cela que servent nos nettoyages spéciaux.',
    'Nous les réalisons pour des gérances, des propriétaires et des entreprises, de manière ponctuelle ou à intervalles plus espacés.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires, communautés de PPE et entreprises' },
    { label: 'Type', value: 'Ponctuel ou à intervalles plus espacés' },
    { label: 'Nettoyage de fin de bail', value: 'Avec garantie de remise' },
  ],
  scope: {
    title: 'Nos nettoyages spéciaux',
    items: [
      'Nettoyage en profondeur de surfaces d’habitation, de bureaux et commerciales',
      'Nettoyage de fin de bail et nettoyage final d’appartement avec garantie de remise',
      '[Nettoyage de fin de chantier](/leistungen/baureinigung) après des travaux de construction ou de transformation',
      '[Nettoyage de fenêtres et de vitres](/leistungen/fenster-und-fassadenreinigung)',
      '[Nettoyage de façades](/leistungen/fenster-und-fassadenreinigung), aussi à haute pression',
    ],
    notIncluded: [
      'Nettoyage régulier : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyages de fin de bail mandatés par les locataires d’appartements individuels.',
    ],
  },
  sections: [
    {
      title: 'Nettoyage en profondeur',
      paragraphs: [
        'Un nettoyage en profondeur va plus loin que le nettoyage courant. Il élimine les salissures incrustées avec le temps, sur les sols, dans les sanitaires et les cuisines, sur les portes et les surfaces.',
        'Il est utile par exemple avant la relocation de surfaces de bureaux ou commerciales, après une utilisation intensive ou avant le début d’un [nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      ],
    },
    {
      title: 'Nettoyage de fin de bail et nettoyage final d’appartement avec garantie de remise',
      paragraphs: [
        'Lors de la remise d’un appartement ou d’une surface commerciale, tout doit être propre pour que l’état des lieux se passe sans réclamation. Nous nettoyons les locaux à fond avant la remise, avec garantie de remise : si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement. Les détails figurent dans le devis.',
        'Nous proposons le nettoyage de fin de bail aux gérances, aux propriétaires et aux entreprises et, pour les villas et les résidences, également aux particuliers dans le cadre de notre [offre Premium](/premium).',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Date',
      text: 'Nous planifions l’intervention à la date qui convient à votre remise ou à votre activité.',
    },
    {
      title: 'Remise',
      text: 'Après l’intervention, nous vous remettons les locaux. Pour le nettoyage de fin de bail, la garantie de remise s’applique selon le devis.',
    },
  ],
  faq: [
    {
      question: 'Que signifie la garantie de remise ?',
      answer:
        'Si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement. Les détails figurent dans le devis.',
    },
    {
      question: 'Quand un nettoyage en profondeur vaut-il la peine ?',
      answer:
        'Par exemple avant une relocation, après une utilisation intensive ou lorsque le nettoyage courant n’élimine plus les salissures incrustées. Lors de la visite, nous vous disons si un nettoyage en profondeur est nécessaire.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage d’entretien ?',
      answer:
        'Le nettoyage d’entretien maintient les surfaces propres selon une fréquence fixe, le nettoyage en profondeur est une intervention ponctuelle et minutieuse. Les deux se combinent : d’abord un nettoyage en profondeur, puis le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) régulier.',
    },
    { question: 'Combien coûte un nettoyage spécial ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Pour le nettoyage pendant et après des travaux de construction ou de transformation.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les surfaces vitrées et les façades, aussi à haute pression.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Si un nettoyage régulier doit suivre le nettoyage en profondeur.' },
  ],
  cta: {
    title: 'Un devis pour votre nettoyage spécial',
    text: 'Décrivez-nous le bien, l’occasion et la date. Nous examinons les locaux et établissons votre devis, gratuit et sans engagement.',
  },
}

const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage de chantier et de fin de chantier pour constructions et transformations',
  lead: [
    'Après des travaux de construction ou de transformation, la poussière, les restes de mortier et les films de protection sont partout. Avant l’arrivée des locataires, des acheteurs ou de votre équipe, tout doit être prêt à l’emménagement, souvent pour une date de remise fixe.',
    'Nous nettoyons pendant et après les travaux, jusqu’à ce que les locaux puissent être remis. Pour les maîtres d’ouvrage, les bureaux d’architectes, les entreprises générales et les gérances.',
  ],
  facts: [
    { label: 'Pour', value: 'Maîtres d’ouvrage, bureaux d’architectes, entreprises générales et gérances' },
    { label: 'Biens', value: 'Constructions neuves, transformations et rénovations' },
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
      'Nettoyage régulier après l’emménagement : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Façades : voir [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Visite et devis',
      text: 'Nous visitons le chantier et définissons avec vous l’étendue des travaux et les dates. Vous recevez ensuite un devis écrit, gratuit et sans engagement.',
    },
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
      question: 'Quelle est la différence entre nettoyage de chantier et nettoyage de fin de chantier ?',
      answer:
        'Le nettoyage de chantier comprend les interventions pendant la phase de construction, par exemple un nettoyage grossier ou des nettoyages intermédiaires. Le nettoyage de fin de chantier est le dernier nettoyage minutieux avant la remise, après lequel les locaux sont prêts à l’emménagement.',
    },
    {
      question: 'Quand faut-il planifier le nettoyage de fin de chantier ?',
      answer:
        'Dès que la date de remise est connue. Le nettoyage intervient après les derniers travaux des artisans et avant la réception. Plus tôt nous connaissons la date, mieux nous pouvons planifier.',
    },
    {
      question: 'Le nettoyage des fenêtres est-il compris ?',
      answer:
        'Oui, nous nettoyons les fenêtres, les cadres et les vitrages lors du nettoyage de fin de chantier. Pour les façades, il y a le [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
    },
    { question: 'Combien coûte un nettoyage de chantier ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Pour les nettoyages en profondeur et les nettoyages de fin de bail avec garantie de remise.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les surfaces vitrées et les façades du bâtiment terminé.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Pour le nettoyage régulier après l’emménagement.' },
  ],
  cta: {
    title: 'Un devis pour votre chantier',
    text: 'Indiquez-nous le bien, la surface et la date de remise. Nous visitons le chantier et établissons votre devis, gratuit et sans engagement.',
  },
}

const fensterUndFassade: ServicePageContent = {
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
    intro: 'Nous fixons l’étendue après la visite. Typiquement :',
    items: [
      'Fenêtres côtés intérieur et extérieur, avec cadres et feuillures',
      'Façades vitrées, portes vitrées et cloisons vitrées',
      'Vitrines et entrées',
      'Tablettes de fenêtre et stores selon entente',
      'Nettoyage de façades, aussi à haute pression',
    ],
    notIncluded: [
      'Nettoyage des locaux intérieurs : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung) ou [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Rénovation, peinture et réparations de la façade.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Visite et devis',
      text: 'Nous examinons sur place les surfaces vitrées et la façade, clarifions l’accès et la méthode et établissons votre devis écrit, gratuit et sans engagement.',
    },
    {
      title: 'Intervention',
      text: 'Nous nettoyons à la date convenue, sur demande à intervalles fixes.',
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence faut-il nettoyer les fenêtres ?',
      answer:
        'Cela dépend de l’emplacement et de l’utilisation. Au bord d’une route très fréquentée, les vitres se salissent plus vite qu’en pleine verdure. Après la visite, nous vous proposons une fréquence.',
    },
    {
      question: 'Nettoyez-vous les façades à haute pression ?',
      answer: 'Oui, si le matériau le permet. Nous déterminons lors de la visite sur place quelle méthode convient à votre façade.',
    },
    {
      question: 'Comment nettoyez-vous les fenêtres et les façades en hauteur ?',
      answer:
        'Cela dépend du bâtiment et de l’accès. Nous le clarifions lors de la visite et précisons dans le devis comment nous atteignons les surfaces.',
    },
    { question: 'Combien coûte le nettoyage ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
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

const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage industriel et de halles pour la production et l’entreposage',
  lead: [
    'Dans la production et l’entreposage apparaissent poussière, copeaux, films d’huile et de graisse. Ils rendent les sols glissants et s’incrustent dans les installations. En même temps, le nettoyage ne doit pas freiner l’exploitation.',
    'Nous nettoyons halles, sols, machines et installations, de manière ponctuelle ou régulière, à des horaires que nous coordonnons avec vous en fonction de la production et des équipes.',
  ],
  facts: [
    { label: 'Pour', value: 'Entreprises industrielles et artisanales, logistique et entrepôts' },
    { label: 'Surfaces', value: 'Halles de production et entrepôts, ateliers, machines et installations' },
    { label: 'Horaires', value: 'Coordonnés avec la production et le travail en équipes' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons l’étendue après un tour de votre entreprise. Typiquement :',
    items: [
      'Sols de halles et de production',
      'Zones de stockage, rayonnages et voies de circulation',
      'Ateliers et locaux annexes',
      'Machines et installations selon vos prescriptions',
      'Locaux du personnel, vestiaires et sanitaires',
    ],
    notIncluded: [
      'Entretien et réparation des machines.',
      'Bureaux de l’entreprise : voir [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Machines et installations',
      paragraphs: [
        'Nous nettoyons les machines selon vos prescriptions et en accord avec votre service de maintenance. Quand une installation est à l’arrêt, ce qui est nettoyé et quels produits conviennent, nous le fixons avant l’intervention.',
        'Vos règles de sécurité et d’exploitation s’appliquent aussi à notre équipe. Nous les clarifions avec vous avant la première intervention.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Tour des lieux et devis',
      text: 'Nous examinons sur place les halles, les installations et les processus. Vous recevez ensuite un devis écrit, gratuit et sans engagement.',
    },
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
      question: 'Pouvez-vous nettoyer pendant l’exploitation ?',
      answer:
        'Nous le clarifions lors du tour des lieux. Certaines zones peuvent être nettoyées en cours d’exploitation, d’autres seulement pendant les pauses, entre deux équipes ou lors des arrêts. Nous fixons les horaires avec vous.',
    },
    {
      question: 'Nettoyez-vous aussi les machines ?',
      answer: 'Oui. Ce qui est nettoyé sur une machine et quand elle est arrêtée à cet effet, nous le fixons avec vous et votre service de maintenance.',
    },
    {
      question: 'Quelles règles s’appliquent à votre équipe dans notre entreprise ?',
      answer: 'Vos règles de sécurité et d’exploitation. Nous les clarifions avec vous avant la première intervention.',
    },
    { question: 'Combien coûte un nettoyage industriel ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
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

const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Conciergerie pour immeubles d’habitation et commerciaux',
  lead: [
    'Un immeuble a besoin de plus que de nettoyage : quelqu’un doit régulièrement vérifier que tout est en ordre, réparer les petits dégâts, organiser l’élimination des déchets et être présent lors des états des lieux. C’est le rôle de la conciergerie.',
    'Pour les gérances, les propriétaires et les communautés de PPE. Les tâches que nous prenons en charge sont fixées par écrit.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et communautés de PPE' },
    { label: 'Biens', value: 'Immeubles d’habitation et commerciaux' },
    { label: 'Pas dans notre offre', value: 'Service hivernal et service de piquet' },
  ],
  scope: {
    title: 'Ce que la conciergerie prend en charge',
    intro: 'Nous composons la conciergerie de votre immeuble à partir de ces tâches :',
    items: [
      'Rondes de contrôle : vérifier régulièrement que tout est en ordre et signaler les défauts',
      'Cage d’escalier : nettoyer et maintenir en ordre',
      'Maintenir propres la buanderie et les séchoirs',
      'Petites réparations, par exemple remplacer des ampoules',
      'Surveiller la technique du bâtiment et signaler les pannes',
      'Participer aux états des lieux',
      'Organiser l’élimination des déchets et des matériaux recyclables',
      'Entretien des abords, voir [Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Nous ne proposons pas de service hivernal.',
      'Service de piquet et d’urgence 24 heures sur 24.',
      'Réparations importantes et travaux d’artisans.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Tour des lieux et devis',
      text: 'Nous visitons l’immeuble et clarifions avec vous les tâches à assurer. Vous recevez ensuite un devis écrit, gratuit et sans engagement.',
    },
    {
      title: 'Définir les tâches',
      text: 'Nous fixons les tâches que nous prenons en charge, la fréquence de nos passages et à qui nous signalons les défauts.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si l’immeuble a plus tard besoin de davantage ou de moins, nous adaptons les tâches avec vous.',
    },
  ],
  faq: [
    {
      question: 'Quelle est la différence avec le nettoyage d’entretien ?',
      answer:
        'Le nettoyage d’entretien nettoie selon une fréquence fixe. La conciergerie va plus loin : rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets, états des lieux et entretien des abords. Si vous n’avez besoin que du nettoyage, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) vous convient.',
    },
    {
      question: 'Prenez-vous aussi en charge des réparations importantes ?',
      answer:
        'Non, nous nous chargeons des petites réparations. Les travaux plus importants nécessitent une entreprise spécialisée. Nous vous signalons les dégâts constatés lors des rondes de contrôle.',
    },
    {
      question: 'Proposez-vous un service hivernal ou un service de piquet ?',
      answer: 'Non. Le service hivernal et le service de piquet ne font pas partie de notre offre.',
    },
    {
      question: 'Pouvons-nous choisir certaines tâches ?',
      answer: 'Oui. Nous composons la conciergerie à partir des tâches dont votre immeuble a besoin.',
    },
    { question: 'Combien coûte la conciergerie ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Pour les abords et les espaces verts de l’immeuble.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Si seul le nettoyage doit être confié.' },
    { path: '/leistungen/facility-services', text: 'Si le nettoyage, la conciergerie et l’entretien des abords doivent figurer dans un seul contrat.' },
  ],
  cta: {
    title: 'Un devis pour votre immeuble',
    text: 'Indiquez-nous le bien, le nombre d’appartements ou les surfaces et les tâches que vous souhaitez confier. Nous faisons un tour des lieux et établissons votre devis, gratuit et sans engagement.',
  },
}

const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Entretien des extérieurs et des espaces verts pour immeubles',
  lead: [
    'Les abords sont la première chose que locataires, clientèle et visiteurs voient d’un immeuble. Des espaces verts soignés, des chemins et des places propres font donc autant partie de l’entretien que la cage d’escalier.',
    'Nous entretenons les abords de votre immeuble, séparément ou dans le cadre de la [conciergerie](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et entreprises' },
    { label: 'Intervention', value: 'Séparément ou dans le cadre de la conciergerie' },
    { label: 'Pas dans notre offre', value: 'Service hivernal' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons après la visite les travaux que nous prenons en charge. Typiquement :',
    items: [
      'Tondre le gazon et tailler les bordures',
      'Entretenir haies, arbustes et plates-bandes',
      'Ramasser les feuilles mortes',
      'Maintenir propres chemins, places et places de parc',
      'Désherber les places et les joints',
      'Ramasser les déchets aux abords',
    ],
    notIncluded: ['Nous ne proposons pas de service hivernal.', 'Aménagement paysager et nouvelles plantations.'],
  },
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Plan d’entretien',
      text: 'Nous fixons les travaux que nous prenons en charge et leur fréquence, en fonction de la saison.',
    },
    {
      title: 'Entretien',
      text: 'Nous entretenons les abords selon le plan. Pour des interventions supplémentaires, par exemple avant un événement, il suffit de nous en parler.',
    },
  ],
  faq: [
    { question: 'Assurez-vous aussi le service hivernal ?', answer: 'Non, nous ne proposons pas de service hivernal.' },
    {
      question: 'Puis-je confier l’entretien des abords sans la conciergerie ?',
      answer: 'Oui. L’entretien des extérieurs et des espaces verts est proposé séparément ou dans le cadre de la [conciergerie](/leistungen/hauswartung).',
    },
    { question: 'Combien coûte l’entretien des abords ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Si, en plus des abords, le bâtiment et sa technique doivent aussi être suivis.' },
    { path: '/leistungen/facility-services', text: 'Si le nettoyage, la conciergerie et l’entretien des abords doivent figurer dans un seul contrat.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les façades et les surfaces vitrées.' },
  ],
  cta: {
    title: 'Un devis pour l’entretien de vos abords',
    text: 'Indiquez-nous l’immeuble et les surfaces. Nous examinons les abords et établissons votre devis, gratuit et sans engagement.',
  },
}

const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Facility services : nettoyage, conciergerie et abords d’un seul prestataire',
  lead: [
    'Confier le nettoyage, la conciergerie et l’entretien des abords à différentes entreprises, c’est plusieurs contrats, plusieurs interlocuteurs et beaucoup de coordination. Avec les facility services, tout vient de nous.',
    'Vous avez un seul contrat et un seul interlocuteur. Nous composons avec vous les prestations comprises.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et entreprises' },
    { label: 'Étendue', value: 'Composée à partir de nos prestations selon vos besoins' },
    { label: 'Contrat', value: 'Un contrat, un interlocuteur' },
  ],
  scope: {
    title: 'Ce qui peut être combiné',
    intro: 'Nous composons les facility services à partir de nos propres prestations :',
    items: [
      '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung) avec service de réapprovisionnement',
      '[Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung)',
      '[Conciergerie](/leistungen/hauswartung)',
      '[Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung)',
      '[Nettoyages spéciaux](/leistungen/sonderreinigungen), par exemple des nettoyages en profondeur',
      '[Nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Le facility management technique, comme l’entretien du chauffage, de la ventilation ou des ascenseurs.',
      'Le service hivernal.',
      'La mise en relation avec des entreprises tierces, par exemple des artisans.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Tour des lieux et devis',
      text: 'Nous visitons vos immeubles et clarifions les prestations nécessaires. Vous recevez ensuite un devis écrit, gratuit et sans engagement.',
    },
    {
      title: 'Un contrat',
      text: 'Les prestations dont votre bien a besoin sont fixées dans un seul contrat.',
    },
    {
      title: 'Un interlocuteur',
      text: 'Pour toutes les prestations, vous avez un seul interlocuteur chez nous. Vous discutez des modifications à un seul endroit.',
    },
  ],
  faq: [
    {
      question: 'Qu’entendez-vous par facility services ?',
      answer:
        'Le nettoyage, la conciergerie et l’entretien des abords d’un seul prestataire, dans un seul contrat et avec un seul interlocuteur. Le facility management technique, par exemple l’entretien du chauffage et de la ventilation, n’en fait pas partie.',
    },
    {
      question: 'Pouvons-nous commencer par une seule prestation ?',
      answer:
        'Oui. Vous pouvez commencer par une prestation, par exemple le [nettoyage d’entretien](/leistungen/unterhaltsreinigung), et en ajouter d’autres plus tard.',
    },
    { question: 'Combien coûtent les facility services ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets et états des lieux.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Nettoyage régulier d’immeubles et de surfaces commerciales.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Entretien des abords et des espaces verts.' },
  ],
  cta: {
    title: 'Un devis pour vos facility services',
    text: 'Indiquez-nous vos immeubles et les prestations que vous souhaitez confier. Nous faisons un tour des lieux et établissons votre devis, gratuit et sans engagement.',
  },
}

export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
