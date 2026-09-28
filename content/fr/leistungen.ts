import type { ServicePageContent } from '../types'
import { answers, steps } from './common'

/**
 * Textes des neuf pages de prestations sous /leistungen en français (M29, M60).
 * Traduction fidèle de content/de/leistungen.ts. Les descriptions générales
 * d’une prestation (« prestations typiques ») ne sont pas un engagement, l’étendue
 * contractuelle figure dans le devis.
 */

const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage d’entretien pour immeubles et surfaces commerciales',
  lead: [
    'La cage d’escalier, l’entrée et les locaux communs façonnent l’image d’un immeuble, pour les locataires comme pour la clientèle et les visiteurs. Avec un nettoyage d’entretien, ils restent propres sans que vous ayez à vous en occuper vous-même.',
    'Nous nettoyons des immeubles locatifs, des immeubles mixtes d’habitation et de commerce ainsi que des surfaces commerciales selon une fréquence fixe, que nous définissons avec vous après la visite. Nous réapprovisionnons également les consommables.',
  ],
  facts: [
    { label: 'Pour', value: 'Immeubles locatifs, immeubles mixtes d’habitation et de commerce, surfaces commerciales' },
    { label: 'Fréquence', value: 'Plusieurs fois par semaine, selon la surface et l’utilisation' },
    { label: 'Compris', value: 'Service de réapprovisionnement des consommables' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons après la visite ce que nous nettoyons et à quelle fréquence. Prestations typiques :',
    items: [
      'Cages d’escalier, entrées et ascenseurs',
      'Sols dans toutes les pièces convenues',
      'Portes, mains courantes, interrupteurs et vitrages de l’entrée',
      'Sanitaires, cuisines et salles de pause',
      'Buanderies, caves et locaux annexes',
      'Vider les poubelles et réapprovisionner les consommables',
    ],
    notIncluded: [
      'Bureaux et cabinets : voir [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Nettoyages en profondeur ponctuels : voir [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen), nettoyages finaux avant la remise sous [Nettoyage de fin de bail](/leistungen/umzugsreinigung).',
      'Fenêtres côté extérieur et façades : voir [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
      'Ménages privés. Pour les villas et les résidences, nous proposons notre [offre Premium](/premium).',
    ],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Un nettoyage d’entretien vaut la peine partout où de nombreuses personnes utilisent les mêmes surfaces. Dans un immeuble locatif, ce sont la cage d’escalier, l’ascenseur et la buanderie. Dans un immeuble mixte d’habitation et de commerce s’ajoutent des entrées fréquentées par le public, dans les surfaces commerciales la réception, les couloirs et les sanitaires.',
        'La demande arrive souvent lorsque la solution actuelle ne suffit plus : le nettoyage par les locataires ne fonctionne pas, l’entreprise actuelle arrête, ou une gérance reprend un nouvel immeuble.',
      ],
    },
    {
      title: 'Service de réapprovisionnement',
      paragraphs: [
        'Dans le cadre du nettoyage d’entretien, nous réapprovisionnons les consommables. Le devis précise les articles concernés et qui les fournit.',
      ],
      items: [
        'Papier toilette, essuie-mains en papier et savon',
        'Sacs à ordures et chiffons de nettoyage',
        'Autres consommables selon entente',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'La fréquence de nettoyage dépend de l’utilisation, pas seulement de la surface. Une entrée très fréquentée demande plus de soin qu’un couloir de cave où peu de gens passent. Il est donc judicieux de fixer une fréquence par zone plutôt qu’une seule pour tout l’immeuble. Nous discutons de notre proposition avec vous après la visite.',
      ],
      items: [
        'Entrée, ascenseur et cage d’escalier : plus souvent, car c’est là qu’entre la plus grande partie de la saleté',
        'Sanitaires et cuisines : plus souvent, pour des raisons d’hygiène',
        'Caves, galetas et locaux annexes : moins souvent, selon l’utilisation',
        'Vitrages de l’entrée : selon les besoins, plus souvent par temps de pluie et en hiver',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage d’entretien',
      paragraphs: [
        'Propre ne veut pas seulement dire un sol lavé. Ces points vous montrent rapidement, lors d’un tour de l’immeuble, avec quel soin le nettoyage est fait :',
      ],
      items: [
        'Les mains courantes, les interrupteurs et les boutons d’ascenseur sont propres, pas seulement les sols',
        'Aucune saleté ne reste dans les coins, sur les nez de marche et derrière les portes',
        'Les sanitaires sentent le frais, le savon et le papier sont réapprovisionnés',
        'Les portes vitrées de l’entrée sont sans traces ni empreintes de doigts',
        'L’étendue convenue est fixée par écrit, pour que les deux parties sachent ce qui s’applique',
      ],
    },
    {
      title: 'Collaboration avec la gérance et les propriétaires',
      paragraphs: [
        'Avant le début, nous clarifions avec vous l’accès à l’immeuble, par exemple avec une clé ou un badge, et l’endroit où les appareils et les produits de nettoyage peuvent être rangés. Un local de nettoyage fermant à clé ou un compartiment de cave facilite le travail.',
        'Pour les locataires, un court avis indiquant les jours de nettoyage est utile. Les escaliers et les couloirs restent alors libres de chaussures, de vélos et d’autres objets ces jours-là.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Accord',
      text: 'Avec votre accord, nous fixons les pièces à nettoyer, la fréquence et les consommables à réapprovisionner.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si l’utilisation change, nous revoyons avec vous l’étendue ou la fréquence.',
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence faut-il nettoyer ?',
      answer:
        'Cela dépend de l’intensité d’utilisation des surfaces. Après la visite, nous vous proposons une fréquence. Le nettoyage d’entretien est conçu pour des biens nettoyés plusieurs fois par semaine.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage en profondeur ?',
      answer:
        'Le nettoyage d’entretien maintient les surfaces propres selon une fréquence fixe. Un nettoyage en profondeur est une intervention ponctuelle et minutieuse, qui élimine aussi les salissures que le nettoyage courant n’atteint pas. Plus d’informations sous [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Pourrons-nous modifier la fréquence plus tard ?',
      answer: 'Oui. Si l’utilisation change, nous revoyons avec vous l’étendue ou la fréquence.',
    },
    {
      question: 'Les locataires doivent-ils préparer quelque chose ?',
      answer:
        'Non. Il est utile que les escaliers et les couloirs soient libres de chaussures, de vélos et d’autres objets les jours de nettoyage. Un court avis dans la cage d’escalier suffit généralement.',
    },
    { question: 'Nettoyez-vous avec des produits respectueux de l’environnement ?', answer: answers.mittel },
    { question: 'Combien coûte un nettoyage d’entretien ?', answer: `${answers.kosten} Plus d’informations dans notre guide : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).` },
    {
      question: 'À quoi faut-il veiller en choisissant une entreprise de nettoyage ?',
      answer:
        'À une étendue des prestations clairement décrite, à une assurance attestée, à un interlocuteur attitré et à un devis établi après une visite. Plus d’informations dans notre guide : [Comment trouver la bonne entreprise de nettoyage ?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'S’il s’agit surtout de bureaux ou d’un cabinet.' },
    { path: '/leistungen/hauswartung', text: 'Si, en plus du nettoyage, il faut des rondes de contrôle, des petites réparations et l’élimination des déchets.' },
    { path: '/leistungen/sonderreinigungen', text: 'Pour un nettoyage en profondeur, par exemple avant le début ou après une utilisation intensive.' },
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
    steps.anfrage,
    steps.besichtigung,
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

const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage en profondeur et spécial pour immeubles et surfaces commerciales',
  lead: [
    'Certaines salissures ne sont plus atteintes par le nettoyage courant : le calcaire dans les sanitaires, la graisse dans les cuisines, la saleté dans les joints et les coins, les anciennes couches sur les sols. Il faut alors un nettoyage en profondeur, ponctuel ou à intervalles plus espacés.',
    'Nous réalisons des nettoyages en profondeur et spéciaux pour des gérances, des propriétaires et des entreprises. Pour le nettoyage final lors de la remise d’un logement, nous proposons le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung).',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires, communautés de PPE et entreprises' },
    { label: 'Type', value: 'Ponctuel ou à intervalles plus espacés' },
    { label: 'Surfaces', value: 'Logements, bureaux et surfaces commerciales' },
  ],
  scope: {
    title: 'Nos nettoyages en profondeur et spéciaux',
    items: [
      'Nettoyage en profondeur de logements, de bureaux et de surfaces commerciales',
      '[Nettoyage de déménagement et de fin de bail](/leistungen/umzugsreinigung) avec garantie de remise',
      '[Nettoyage de fin de chantier](/leistungen/baureinigung) après des travaux de construction ou de transformation',
      '[Nettoyage de fenêtres et de vitres](/leistungen/fenster-und-fassadenreinigung)',
      '[Nettoyage de façades](/leistungen/fenster-und-fassadenreinigung), aussi à haute pression',
    ],
    notIncluded: [
      'Nettoyage régulier : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyages de fin de bail mandatés par les locataires d’appartements individuels.',
    ],
  },
  sections: [
    {
      title: 'Ce qui caractérise un nettoyage en profondeur',
      paragraphs: [
        'Un nettoyage en profondeur va plus loin que le nettoyage courant. Il élimine les salissures incrustées avec le temps : le calcaire et le tartre urinaire dans les sanitaires, la graisse dans les cuisines, la saleté dans les joints, les coins et sur les plinthes, les résidus d’anciens produits d’entretien sur les sols.',
        'Pour les sols, la façon de procéder dépend du revêtement, par exemple pierre naturelle, carrelage, linoléum ou parquet. Nous clarifions lors de la visite quelle méthode et quels produits conviennent.',
      ],
    },
    {
      title: 'Occasions typiques',
      paragraphs: [
        'Un nettoyage en profondeur vaut toujours la peine lorsqu’une surface repart à zéro ou a été fortement utilisée pendant longtemps :',
      ],
      items: [
        'Avant la relocation de surfaces de bureaux ou commerciales',
        'Après une utilisation intensive ou une longue période d’inoccupation',
        'Avant le début d’un [nettoyage d’entretien](/leistungen/unterhaltsreinigung)',
        'Lorsque le nettoyage courant n’élimine plus les salissures incrustées',
      ],
    },
    {
      title: 'Nettoyage de déménagement et de fin de bail',
      paragraphs: [
        'Pour le nettoyage final lors de la remise d’un appartement ou d’une surface commerciale, une page séparée donne tous les détails : [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung). Nous le proposons aux gérances, aux propriétaires et aux entreprises et, pour les villas et les résidences, également aux particuliers dans le cadre de notre [offre Premium](/premium).',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'Un nettoyage en profondeur demande du temps et des locaux aussi dégagés que possible. Dans les bureaux et les surfaces commerciales, il peut souvent être placé sur un week-end, pendant les vacances d’entreprise ou entre deux baux. Dans les immeubles habités, il faut un avis préalable, car la cage d’escalier ou la buanderie, par exemple, ne sont pas utilisables pendant un court moment.',
        'La fréquence utile d’un nettoyage en profondeur dépend de l’utilisation et de la sollicitation. Avec un bon nettoyage courant, il devient moins souvent nécessaire.',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage en profondeur',
      items: [
        'Les joints sont de nouveau clairs, pas seulement les carreaux',
        'La robinetterie et le carrelage sont sans traces de calcaire',
        'Le sol est sans traces ni endroits collants',
        'Les plinthes, les portes et les encadrements sont nettoyés aussi',
        'Les surfaces délicates sont intactes, car les produits sont adaptés au matériau',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Date',
      text: 'Nous planifions l’intervention à la date qui convient à votre utilisation ou à votre activité.',
    },
    {
      title: 'Remise',
      text: 'Après l’intervention, nous vous remettons les locaux. Si un nettoyage régulier doit suivre, nous en discutons volontiers avec vous.',
    },
  ],
  faq: [
    {
      question: 'Qu’est-ce qu’un nettoyage en profondeur ?',
      answer:
        'Une intervention ponctuelle et minutieuse, qui élimine aussi les salissures incrustées avec le temps, par exemple le calcaire, la graisse, la saleté dans les joints ou les anciennes couches d’entretien sur les sols.',
    },
    {
      question: 'Quand un nettoyage en profondeur vaut-il la peine ?',
      answer:
        'Par exemple avant une relocation, après une utilisation intensive ou lorsque le nettoyage courant n’élimine plus les salissures incrustées. Lors de la visite, nous vous disons si un nettoyage en profondeur est nécessaire.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage d’entretien ?',
      answer:
        'Le nettoyage d’entretien maintient les surfaces propres selon une fréquence fixe, le nettoyage en profondeur est une intervention ponctuelle et minutieuse. Les deux se combinent : d’abord un nettoyage en profondeur, puis le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) régulier.',
    },
    {
      question: 'Les locaux doivent-ils être vides pour le nettoyage en profondeur ?',
      answer:
        'Pas entièrement, mais plus les surfaces sont dégagées, plus le nettoyage peut être minutieux. Nous clarifions lors de la visite ce qui reste en place et qui le déplace.',
    },
    {
      question: 'Prenez-vous aussi en charge les nettoyages de fin de bail ?',
      answer:
        'Oui, avec garantie de remise, pour les gérances, les propriétaires et les entreprises. Tout le reste figure sous [Nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung).',
    },
    { question: 'Combien coûte un nettoyage en profondeur ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/umzugsreinigung', text: 'Pour le nettoyage final avant la remise d’un appartement ou d’une surface commerciale, avec garantie de remise.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Si un nettoyage régulier doit suivre le nettoyage en profondeur.' },
    { path: '/leistungen/baureinigung', text: 'Pour le nettoyage pendant et après des travaux de construction ou de transformation.' },
  ],
  cta: {
    title: 'Un devis pour votre nettoyage en profondeur',
    text: 'Décrivez-nous le bien, le motif et la date. Nous examinons les locaux et établissons votre devis, gratuit et sans engagement.',
  },
}

const umzugsreinigung: ServicePageContent = {
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
    steps.anfrage,
    {
      title: 'Visite et devis',
      text: 'Nous examinons l’appartement ou la surface, si possible avant le déménagement, et définissons avec vous l’étendue et la date. Vous recevez ensuite un devis écrit, gratuit et sans engagement.',
    },
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

const baureinigung: ServicePageContent = {
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

const industrieUndHallen: ServicePageContent = {
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

const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Conciergerie pour immeubles d’habitation et de bureaux',
  lead: [
    'Un immeuble demande plus que du nettoyage : quelqu’un doit régulièrement vérifier que tout est en ordre, réparer les petits dégâts, organiser l’élimination des déchets et être présent lors des états des lieux. C’est le rôle de la conciergerie.',
    'Pour les gérances, les propriétaires et les communautés de PPE qui ne peuvent ou ne veulent pas veiller eux-mêmes à l’immeuble. Les tâches que nous prenons en charge, la fréquence de nos passages et la personne à qui nous signalons les défauts sont fixées par écrit.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et communautés de PPE' },
    { label: 'Biens', value: 'Immeubles d’habitation et commerciaux' },
    { label: 'Étendue', value: 'Tâches selon les besoins, fixées par écrit' },
  ],
  scope: {
    title: 'Ce que la conciergerie prend en charge',
    intro: 'Nous composons la conciergerie de votre immeuble à partir de ces tâches :',
    items: [
      'Rondes de contrôle : vérifier régulièrement que tout est en ordre et signaler les défauts',
      'Cage d’escalier : nettoyer et maintenir en ordre',
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
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Immeubles locatifs et ensembles résidentiels, propriétés par étages, immeubles mixtes avec commerces ou bureaux au rez-de-chaussée. Partout, il faut quelqu’un qui passe régulièrement, maintient la buanderie en ordre et voit quand quelque chose ne va pas.',
        'La demande arrive souvent lorsque le concierge actuel arrête, lorsqu’une gérance reprend un nouvel immeuble ou lorsque plus personne dans une communauté de PPE ne veut assumer les tâches.',
      ],
    },
    {
      title: 'Ce qui se passe lors d’une ronde de contrôle',
      paragraphs: [
        'Lors de la ronde de contrôle, nous vérifions que tout est en ordre, aussi souvent que convenu avec vous. Ce que nous pouvons régler nous-mêmes, par exemple remplacer une ampoule, nous le faisons. Tout le reste, nous le signalons à la personne que nous avons désignée avec vous.',
      ],
      items: [
        'Éclairage de la cage d’escalier, de la cave et des abords',
        'Portes, serrures et boîtes aux lettres',
        'Buanderie, séchoirs et caves',
        'Chaufferie et technique du bâtiment, pour les pannes visibles',
        'Emplacement des conteneurs et abords',
      ],
    },
    {
      title: 'La technique du bâtiment sous surveillance',
      paragraphs: [
        'Conciergerie ne veut pas dire entretien des installations. Le chauffage, la ventilation, l’ascenseur et la protection incendie sont entretenus par des entreprises spécialisées. La conciergerie les observe régulièrement, remarque tôt les pannes et les signale, par exemple un message d’erreur sur le chauffage, un robinet qui goutte à la buanderie ou un ascenseur qui s’arrête mal.',
      ],
    },
    {
      title: 'États des lieux',
      paragraphs: [
        'Nous fixons avec la gérance la façon dont nous participons aux états des lieux, par exemple si nous ouvrons l’appartement, remettons les clés ou relevons les compteurs. L’état des lieux et le procès-verbal restent du ressort de la gérance.',
        'Si l’appartement a besoin d’un nettoyage final avant la remise, nous proposons le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Collaboration avec la gérance et les propriétaires',
      paragraphs: [
        'Une bonne conciergerie repose sur des accords clairs : quelles tâches, à quelle fréquence, qui reçoit les signalements et quels petits travaux peuvent être faits sans demander. Nous le fixons par écrit.',
        'Les locataires aussi doivent savoir à qui s’adresser. Nous définissons avec vous qui est leur interlocuteur.',
      ],
    },
    {
      title: 'Cahier des charges de la conciergerie : ce qu’il doit contenir',
      paragraphs: [
        'Un cahier des charges fixe ce que la conciergerie prend en charge dans un immeuble, à quelle fréquence et qui est responsable de quoi. Il apporte de la clarté à la gérance, aux propriétaires, aux locataires et à la conciergerie, et rend les devis comparables.',
        'Chez nous, cette liste est établie après le tour des lieux : nous consignons par écrit les tâches que nous prenons en charge, la fréquence de nos passages et à qui nous signalons les défauts. Ces points font partie d’un cahier des charges :',
      ],
      items: [
        'Tâches et rythme par zone : cage d’escalier, entrée, buanderie et séchoirs, cave et emplacement des déchets, avec l’activité et sa fréquence',
        'Rondes de contrôle : à quelle fréquence, quels locaux et installations sont concernés et comment les constats sont consignés',
        'Extérieurs : quelles surfaces sont entretenues, par exemple pelouses, haies, massifs, chemins et places',
        'Responsabilités et voies de signalement : qui reçoit les signalements de la conciergerie, quels petits travaux peuvent être faits sans demander et à qui s’adressent les locataires',
        'Clés et accès : quelles clés, badges et codes la conciergerie reçoit et comment ils sont conservés',
        'Matériel : qui fournit les produits de nettoyage, le matériel de consommation et les appareils, et où ils sont entreposés',
        'Limites avec les artisans : quels travaux relèvent d’entreprises spécialisées, par exemple les réparations importantes et l’entretien du chauffage, de l’ascenseur et de la protection incendie, et qui les mandate',
      ],
    },
  ],
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
      text: 'Nous commençons à la date convenue. Si les besoins de l’immeuble évoluent par la suite, nous adaptons les tâches avec vous.',
    },
  ],
  faq: [
    {
      question: 'Quelles tâches une conciergerie prend-elle en charge ?',
      answer:
        'Typiquement les rondes de contrôle, le nettoyage de la cage d’escalier, de la buanderie et des séchoirs, les petites réparations, la surveillance de la technique du bâtiment, l’élimination des déchets, la participation aux états des lieux et l’entretien des extérieurs. Les tâches que nous prenons en charge dans votre immeuble et leur fréquence sont fixées avec vous par écrit, comme dans un cahier des charges.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage d’entretien ?',
      answer:
        'Le nettoyage d’entretien se fait selon une fréquence fixe. La conciergerie va plus loin : rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets, états des lieux et entretien des abords. Si vous n’avez besoin que du nettoyage, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) vous convient.',
    },
    {
      question: 'Prenez-vous aussi en charge des réparations importantes ?',
      answer:
        'Non, nous nous chargeons des petites réparations. Les travaux plus importants nécessitent une entreprise spécialisée. Nous vous signalons les dégâts constatés lors des rondes de contrôle.',
    },
    {
      question: 'Proposez-vous un service hivernal ou un service de piquet ?',
      answer: 'Non. Le service hivernal et le service de piquet ne font pas partie de notre offre.',
    },
    {
      question: 'Pouvons-nous choisir certaines tâches ?',
      answer: 'Oui. Nous composons la conciergerie à partir des tâches dont votre immeuble a besoin.',
    },
    {
      question: 'À quelle fréquence la conciergerie passe-t-elle ?',
      answer:
        'Cela dépend de la taille, de l’âge et de l’utilisation de l’immeuble. La fréquence de nos passages est fixée par écrit avec les autres tâches.',
    },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
    { question: 'Combien coûte la conciergerie ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
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
    intro: 'Nous fixons après la visite les travaux que nous prenons en charge. Prestations typiques :',
    items: [
      'Tondre le gazon et tailler les bordures',
      'Entretenir haies, arbustes et plates-bandes',
      'Ramasser les feuilles mortes',
      'Maintenir propres chemins, places et places de parc',
      'Désherber les places et les joints',
      'Ramasser les déchets aux abords',
    ],
    notIncluded: ['Nous ne proposons pas de service hivernal.', 'Aménagement paysager et création de nouveaux espaces verts.'],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Ensembles résidentiels avec gazon, haies et place de jeux, immeubles commerciaux avec parking et entrée, bâtiments artisanaux avec plates-bandes et surfaces en gravier. Les abords sont la première chose que voient les visiteurs, et ce que les locataires utilisent tous les jours.',
        'La demande arrive souvent lorsque les abords étaient jusqu’ici entretenus à côté et que cela ne suffit plus, ou lorsque le nettoyage, la conciergerie et les abords doivent être confiés ensemble.',
      ],
    },
    {
      title: 'L’entretien au fil des saisons',
      paragraphs: [
        'Les travaux suivent la saison. Le déroulement typique est le suivant :',
      ],
      items: [
        'Printemps : débarrasser chemins et places des salissures de l’hiver, entretenir les plates-bandes, première tonte',
        'Été : tondre régulièrement le gazon, tailler les haies, désherber les places et les joints',
        'Automne : ramasser les feuilles mortes, rabattre les arbustes, préparer les plates-bandes pour l’hiver',
        'Hiver : nous ne proposons pas de service hivernal, le déneigement et le salage nécessitent une autre solution',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'La fréquence d’entretien dépend de la saison et de la météo. Pendant la période de croissance, le gazon demande plus d’attention qu’à la fin de l’automne. Nous fixons le plan d’entretien. Pour des interventions supplémentaires, par exemple avant un événement, il suffit de nous en parler.',
        'Dans le cadre de la [conciergerie](/leistungen/hauswartung), l’entretien des abords et les rondes de contrôle peuvent être combinés : qui travaille dehors voit aussi quand quelque chose ne va pas au bâtiment.',
      ],
    },
    {
      title: 'À quoi reconnaître des abords bien entretenus',
      items: [
        'Les bordures du gazon sont nettement taillées',
        'Les chemins et les places sont sans feuilles, déchets ni mauvaises herbes dans les joints',
        'Les haies sont en forme, les passages et les champs de vision restent dégagés',
        'Les plates-bandes sont soignées et sans mauvaises herbes',
      ],
    },
  ],
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
    { question: 'Assurez-vous aussi le service hivernal ?', answer: 'Non, nous ne proposons pas de service hivernal.' },
    {
      question: 'Puis-je confier l’entretien des abords sans la conciergerie ?',
      answer: 'Oui. L’entretien des extérieurs et des espaces verts est proposé séparément ou dans le cadre de la [conciergerie](/leistungen/hauswartung).',
    },
    {
      question: 'Quand vaut-il mieux tailler les haies ?',
      answer:
        'Le plus souvent au début de l’été et, si nécessaire, une nouvelle fois à la fin de l’été. Pendant la période de nidification des oiseaux, il faut faire attention aux nids. Nous fixons le moment adapté à vos haies dans le plan d’entretien.',
    },
    {
      question: 'Aménagez-vous aussi de nouveaux jardins ?',
      answer: 'Non. L’aménagement paysager et la création de nouveaux espaces verts ne font pas partie de notre offre. Nous entretenons des abords existants.',
    },
    { question: 'Combien coûte l’entretien des abords ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
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
  h1: 'Facility services : nettoyage, conciergerie et abords d’un seul prestataire',
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
    intro: 'Nous composons les facility services à partir de nos propres prestations :',
    items: [
      '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung) avec service de réapprovisionnement',
      '[Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung)',
      '[Conciergerie](/leistungen/hauswartung)',
      '[Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung)',
      '[Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen)',
      '[Nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Le facility management technique, comme l’entretien du chauffage, de la ventilation ou des ascenseurs.',
      'Le service hivernal.',
      'La mise en relation avec des entreprises tierces, par exemple des artisans.',
    ],
  },
  sections: [
    {
      title: 'Situations typiques',
      paragraphs: [
        'Une gérance s’occupe de plusieurs immeubles et ne veut pas coordonner une entreprise différente pour chaque tâche. Une entreprise a des bureaux, une halle et des abords et veut un seul interlocuteur pour tout. Ou des propriétaires reprennent un immeuble et cherchent une solution cohérente dès le départ.',
      ],
    },
    {
      title: 'Comment des prestations séparées deviennent un contrat',
      paragraphs: [
        'Lors du tour des lieux, nous examinons ce dont votre bien a besoin : nettoyage intérieur, vitres, conciergerie, abords. Il en résulte un contrat dans lequel chaque prestation figure avec son étendue et sa fréquence.',
        'Si quelque chose s’ajoute ou disparaît par la suite, vous en discutez à un seul endroit, avec votre interlocuteur chez nous.',
      ],
    },
    {
      title: 'Ce que cela vous apporte',
      items: [
        'Un seul interlocuteur pour le nettoyage, la conciergerie et les abords',
        'Un seul contrat au lieu de plusieurs, avec une vue d’ensemble de toutes les prestations',
        'Moins de coordination entre entreprises, par exemple pour savoir qui nettoie la cage d’escalier après des travaux aux abords',
        'Un regard sur l’ensemble du bien : qui nettoie à l’intérieur voit aussi quand quelque chose ne va pas dehors',
      ],
    },
    {
      title: 'Limites et collaboration',
      paragraphs: [
        'Chez nous, facility services signifie : les prestations que nous fournissons nous-mêmes. Le facility management technique, par exemple l’entretien du chauffage, de la ventilation ou des ascenseurs, n’en fait pas partie, pas plus que la mise en relation avec des artisans.',
        'Nous vous signalons les pannes que nous remarquons pendant le travail, pour que vous puissiez mandater l’entreprise spécialisée adéquate.',
      ],
    },
  ],
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
      question: 'Qu’entendez-vous par facility services ?',
      answer:
        'Le nettoyage, la conciergerie et l’entretien des abords d’un seul prestataire, dans un seul contrat et avec un seul interlocuteur. Le facility management technique, par exemple l’entretien du chauffage et de la ventilation, n’en fait pas partie.',
    },
    {
      question: 'Pouvons-nous commencer par une seule prestation ?',
      answer:
        'Oui. Vous pouvez commencer par une prestation, par exemple le [nettoyage d’entretien](/leistungen/unterhaltsreinigung), et en ajouter d’autres plus tard.',
    },
    {
      question: 'Quelle est la différence avec la conciergerie ?',
      answer:
        'La [conciergerie](/leistungen/hauswartung) est une prestation à part, avec des rondes de contrôle, des petites réparations, la technique du bâtiment et l’élimination des déchets. Les facility services la combinent avec le nettoyage et l’entretien des abords dans un seul contrat.',
    },
    {
      question: 'Qui est notre interlocuteur ?',
      answer: 'Pour toutes les prestations, vous avez un seul interlocuteur chez nous. Vous discutez des modifications à un seul endroit.',
    },
    { question: 'Combien coûtent les facility services ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
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
  umzugsreinigung,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
