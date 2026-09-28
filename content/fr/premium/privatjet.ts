import type { ServicePageContent, Source } from '../../types'

/** Privatjet (E85), mêmes clés et sources que content/de/premium/privatjet.ts */
const source = {
  faa: {
    label: 'FAA Advisory Circular 43.13-1B, ch. 3-25 : nettoyage des plastiques transparents (en anglais)',
    href: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43.13-1B_w-chg1.pdf',
  },
  who: {
    label: 'OMS, Guide to Hygiene and Sanitation in Aviation, 3e édition 2009, chapitre 3 et annexe F (en anglais)',
    href: 'https://iris.who.int/handle/10665/44164',
  },
  cfr: {
    label: '14 CFR 25.853 (a) : comportement au feu des matériaux de cabine, règle américaine pour les grands avions (en anglais)',
    href: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-D/subject-group-ECFR1e1f52030ba4797/section-25.853',
  },
  cuir: {
    label: 'Townsend Leather : entretien du cuir aniline, indications du fabricant (en anglais)',
    href: 'https://townsendleather.com/care-for-anilne-leathers',
  },
  textile: {
    label: 'Duncan Aviation : entretien des tissus et des cuirs dans les avions d’affaires (en anglais)',
    href: 'https://www.duncanaviation.aero/intelligence/caring-for-the-fabrics-and-leathers-in-your-business-aircraft',
  },
  ospa: {
    label: 'Ordonnance concernant les sous-produits animaux (OSPA), art. 2, al. 2bis, art. 4, 5 et 22',
    href: 'https://www.fedlex.admin.ch/eli/cc/2011/372/fr',
  },
} satisfies Record<string, Source>

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Nettoyage de jet privé : cabine, office de bord et toilettes',
  lead: [
    'Après un long-courrier, des traces de café marquent la ronce de noyer, des miettes se logent dans les rails des sièges et les hublots portent des traces de doigts. Avant le prochain départ, il ne reste parfois que quelques heures.',
    'Nous nettoyons la cabine, l’office de bord et les toilettes de votre jet privé entre deux vols, avec les produits approuvés pour votre appareil. Vous trouverez ci-dessous ce que supportent les matériaux à bord, ce qui tient dans quel temps d’escale et ce qui doit être fixé avant la première intervention.',
  ],
  facts: [
    { label: 'Étendue', value: 'Cabine, office de bord et toilettes' },
    { label: 'Non compris', value: 'Extérieur, réservoirs et technique' },
    { label: 'Produits', value: 'Uniquement ceux approuvés pour votre appareil' },
    { label: 'Horaires', value: 'Entre deux vols, aussi le soir et le week-end' },
    { label: 'Accès', value: 'Réglé par votre exploitant avec l’aérodrome' },
  ],
  sections: [
    {
      title: 'La cabine entre deux vols',
      paragraphs: [
        'L’occasion détermine ce dont la cabine a besoin. Après un vol complet, ce sont les garnitures, la moquette et l’office. Après un passage à l’atelier d’entretien, poussière et traces de doigts couvrent habillages, tables et hublots. Avant un vol avec des invités, chaque détail visible à l’embarquement compte.',
        'Votre programme de vols fixe le créneau. Plus le prochain départ est connu tôt, plus il est possible de planifier précisément ce qui doit être terminé avant. Le tableau des temps d’escale, plus bas, montre quels travaux tiennent en une heure et lesquels demandent une nuit.',
      ],
    },
    {
      title: 'Office de bord et toilettes',
      paragraphs: [
        'Dans l’office, les boissons s’infiltrent dans les joints, les glissières de tiroirs et les compartiments que l’on ne voit qu’une fois les inserts retirés. Aux toilettes comptent la cuvette, le lavabo, la robinetterie, le miroir, les poignées de porte et le sol autour de la cuvette.',
        'Dans le plan type de l’OMS, les toilettes figurent entièrement sur la liste dès une escale de moins d’une heure. Les restes d’aliments de vols transfrontaliers suivent leurs propres règles, voir la liste de contrôle plus bas.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'kabinenmaterialien',
      title: 'Les matériaux de la cabine et ce qui les abîme',
      intro:
        'Ce sont le constructeur de l’appareil et votre exploitant qui décident des produits admis à bord. Selon le guide de l’OMS, le service technique de l’exploitant approuve chaque produit avant usage, la liste figure en général dans le manuel de maintenance.',
      columns: ['Matériau', 'Ce qui compte', 'Ce qui l’abîme'],
      rows: [
        [
          'Hublots, côté intérieur',
          'Produits approuvés et chiffon non abrasif, puis rincer à l’eau et sécher. Pour le plastique, la FAA recommande beaucoup d’eau, un savon doux et un chiffon souple sans grains.',
          'Sur le plastique : alcool, acétone, diluants et nettoyants à vitres en spray le ramollissent, de fines fissures apparaissent. Frotter à sec raye et charge d’électricité statique.',
        ],
        [
          'Cuir aniline (sans finition pigmentée)',
          'Enlever la poussière avec un chiffon doux légèrement humide, les salissures plus fortes avec de l’eau et un savon doux sans détergent. Sécher à l’air, loin de la chaleur et du soleil.',
          'Les nettoyants inadaptés le foncent immédiatement, l’eau calcaire laisse des auréoles. Ne pas frotter fort ni détremper, tamponner aussitôt ce qui a coulé.',
        ],
        [
          'Tissus et moquette',
          'Tamponner les taches aussitôt avec un chiffon propre. Décoller les résidus collants avec une spatule, puis aspirer.',
          'Frotter fait pénétrer la saleté plus profondément dans le tissu. Détachants non approuvés.',
        ],
        [
          'Bois laqué, surfaces brillantes, habillages',
          'Produits de la liste approuvée, chiffons doux et propres.',
          'Polish, cire ou imprégnation sans approbation. Selon la règle américaine pour les grands avions, les finitions appliquées doivent aussi passer l’essai de comportement au feu.',
        ],
        [
          'Désinfection à l’office et aux toilettes',
          'Uniquement des produits approuvés par le constructeur de l’appareil, selon le mode d’emploi exact.',
          'Beaucoup de désinfectants sont oxydants. Ils peuvent attaquer les métaux et réduire la résistance au feu des garnitures.',
        ],
      ],
      note: 'Si les documents du constructeur ou de l’aménageur disent autre chose, ce sont eux qui font foi.',
      sources: [source.who, source.faa, source.cuir, source.textile, source.cfr],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'bodenzeit',
      title: 'Ce qui tient dans quel temps d’escale',
      intro:
        'Dans son plan type, l’Organisation mondiale de la santé répartit le nettoyage de la cabine selon le temps passé au sol. Le plan vient du transport de ligne. Pour un jet privé, il montre ce qui vaut la peine lors d’une courte escale et ce qui demande une nuit au sol.',
      columns: ['Temps au sol', 'Standard dans le plan de l’OMS', 'Sur demande seulement dans le plan de l’OMS'],
      rows: [
        [
          'Moins de 60 minutes',
          'Déchets de la cabine, des placards et de l’office, ranger coussins et couvertures. Toilettes au complet : cuvette et abattant, lavabo, robinetterie, miroir, parois, poignées de porte et sol.',
          'Tablettes et accoudoirs, évier et plans de travail de l’office, four, recharger savon et articles de toilette. Moquette et sols seulement si nécessaire.',
        ],
        [
          'Plus de 60 minutes',
          'En plus, vider les pochettes des sièges, à l’office l’évier, la robinetterie, les plans de travail et les tablettes rabattables, les sols en vinyle de la cabine, recharger savon et articles de toilette.',
          'Aspirer les sièges en tissu, essuyer les sièges en cuir, aspirer la moquette, four à l’intérieur et à l’extérieur, tablettes et accoudoirs.',
        ],
        [
          'Pendant la nuit',
          'Tout ce qui figure dans les lignes ci-dessus, plus les hublots à l’intérieur, retirer les coussins de sièges pour aspirer dessous, taches de moquette, rails de sièges, plafond, parois latérales, placards, portes, écrans, four et grilles de ventilation de l’office.',
          'Aucun : à ce niveau, tout est prévu.',
        ],
      ],
      note: 'Si le temps manque, l’OMS donne la priorité aux déchets, à l’office et aux toilettes. Comme pièges à saleté, elle cite les glissières des équipements de catering, les compartiments de l’office, l’écoulement de l’évier, les placards des toilettes et le compartiment de la pharmacie de bord.',
      sources: [source.who],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Liste de contrôle pour la première intervention à bord',
      intro:
        'Fixez ces points avec votre exploitant avant la première intervention. Ils valent ensuite pour chacune des suivantes.',
      groups: [
        {
          title: 'Lieu et accès',
          items: [
            'Aérodrome et hangar ou aire de stationnement où se trouve l’appareil',
            'Qui accompagne notre équipe jusqu’à l’appareil ou autorise l’accès, avec numéro de téléphone',
            'Si le courant et la lumière sont disponibles à bord (hangar ou groupe de parc)',
            'Le créneau entre l’atterrissage et le prochain départ',
          ],
        },
        {
          title: 'Cabine et produits',
          items: [
            'Quelles zones sont comprises et lesquelles ne le sont pas',
            'Liste des produits de nettoyage et désinfectants approuvés',
            'Indications d’entretien de l’aménageur pour le cuir, le bois et les textiles',
            'Qui décide des produits d’entretien, du polish ou de l’imprégnation',
          ],
        },
        {
          title: 'Office et déchets',
          items: [
            'Qui reprend les restes d’aliments : provenant d’appareils opérant au niveau international, ce sont des sous-produits animaux de catégorie 1 à incinérer',
            'Où vont les autres déchets',
          ],
        },
        {
          title: 'Remise et discrétion',
          items: [
            'Qui reprend la cabine et apprend de nous ce qui n’a pas pu être enlevé, par exemple une rayure dans la laque',
            'Comment nous traitons les objets personnels et les documents à bord',
            'Si vous souhaitez un accord de confidentialité',
          ],
        },
      ],
      sources: [source.ospa, source.who],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Ce que nous nettoyons à bord',
    intro: 'Selon l’occasion et le temps d’escale, cela comprend :',
    items: [
      'Sièges en cuir et housses en tissu, rails de sièges et tablettes latérales',
      'Moquettes et sols, y compris sous les sièges',
      'Tables, habillages et meubles en bois ou en laque brillante',
      'Hublots côté intérieur, miroirs et vitrages',
      'Points souvent touchés : poignées de porte, interrupteurs et commandes des sièges',
      'Office : plans de travail, évier, compartiments et tiroirs',
      'Toilettes : cuvette, lavabo, robinetterie, miroir et sol',
    ],
    notIncluded: [
      'Nettoyage extérieur du fuselage, des hublots et des moteurs',
      'Vidange des réservoirs des toilettes et remplissage de l’eau potable',
      'Démontage de sièges, de moquettes ou d’habillages',
      'Réparations du cuir, du bois ou de la laque',
    ],
  },
  steps: [
    {
      title: 'Approbations',
      text: 'Votre exploitant nous indique les produits admis et règle l’accès à l’appareil. Les deux valent ensuite pour chaque intervention suivante.',
    },
    {
      title: 'Nettoyage pendant l’escale',
      text: 'Nous nettoyons dans le créneau que laisse votre programme de vols, aussi le soir ou le week-end.',
    },
    {
      title: 'Remise à l’équipage',
      text: 'La cabine est reprise par la personne que vous avez désignée. Ce que nous n’avons pas pu enlever, elle l’apprend directement de nous.',
    },
  ],
  faq: [
    {
      question: 'Combien coûte le nettoyage de la cabine d’un jet privé ?',
      answer:
        'Il n’y a pas de forfait. L’effort dépend de la taille de la cabine et du nombre de sièges, des matériaux, de l’état après le vol et du temps d’escale. S’y ajoutent les interventions le soir ou le week-end, le temps d’attente pour accéder à l’appareil et la question de savoir si nous venons une fois ou régulièrement. Vous recevez le montant par écrit, après que nous avons vu la cabine.',
    },
    {
      question: 'Quels produits de nettoyage utilisez-vous à bord ?',
      answer:
        'Les produits approuvés pour votre appareil. La liste figure en général dans le manuel de maintenance ou se trouve chez votre atelier d’entretien. Les nettoyants ménagers n’ont pas leur place à bord : les sprays pour vitres et l’alcool ramollissent les vitres en plastique, les nettoyants inadaptés foncent le cuir aniline (voir le tableau des matériaux de la cabine plus haut).',
    },
    {
      question: 'Entretenez-vous ou imprégnez-vous aussi le cuir et le bois ?',
      answer:
        'Nous nettoyons. Les produits d’entretien, polish et imprégnations qui laissent une couche ne sont appliqués qu’avec l’approbation de votre atelier d’entretien. Selon la règle américaine pour les grands avions, les finitions appliquées doivent elles aussi passer l’essai de comportement au feu.',
    },
    {
      question: 'Nettoyez-vous aussi l’extérieur de l’appareil ?',
      answer:
        'Non. Nous nettoyons la cabine, office et toilettes compris. Le nettoyage extérieur, les réservoirs des toilettes et l’eau potable relèvent de l’entretien et de l’assistance en escale.',
    },
    {
      question: 'Comment votre équipe accède-t-elle à l’appareil ?',
      answer:
        'Vous ou votre exploitant réglez l’accès au hangar ou à l’aire de stationnement avec l’aérodrome, par exemple avec un accompagnement. Prévoyez un peu de temps pour cela, il fait partie de l’intervention.',
    },
    {
      question: 'Que deviennent les restes d’aliments de l’office ?',
      answer:
        'Provenant d’appareils qui franchissent la frontière, les restes d’aliments sont en Suisse des sous-produits animaux de catégorie 1, le groupe au risque le plus élevé. L’ordonnance impose leur incinération. Qui les reprend se règle dans la liste de contrôle pour la première intervention, plus haut.',
    },
    {
      question: 'Notre exploitant ou notre family office peut-il commander le nettoyage ?',
      answer:
        'Oui. Les demandes viennent de propriétaires, d’exploitants, de family offices ou d’assistantes et assistants. L’essentiel est une personne qui peut approuver produits et accès.',
    },
    {
      question: 'Comment traitez-vous les objets personnels à bord ?',
      answer:
        'Comme vous le décidez : les laisser en place, les ranger dans un compartiment précis ou ne pas y toucher du tout. Cela vaut aussi pour les documents et les appareils.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Si, à côté du jet, une villa, une résidence ou une résidence secondaire doit aussi être entretenue.' },
    { path: '/premium/yacht', text: 'Si, en été, un bateau sur le lac des Quatre-Cantons ou le lac de Zoug s’y ajoute.' },
    { path: '/premium', text: 'Si vous souhaitez confier aussi votre family office, vos bureaux et vos événements en toute discrétion.' },
  ],
  cta: {
    title: 'Demander le nettoyage de cabine en toute discrétion',
    text: 'Pour le devis, il nous faut le type d’appareil, l’aérodrome où il est habituellement basé, vos créneaux habituels et, si vous l’avez, la liste des produits approuvés. Après un coup d’œil à la cabine, vous recevez le devis, gratuit et sans engagement.',
  },
}
