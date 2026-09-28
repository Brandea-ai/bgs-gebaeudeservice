import type { ServicePageContent, Source } from '../../types'

/** Yacht et bateau (E85) : mêmes clés et mêmes affirmations que content/de/premium/yacht.ts, sources vérifiées le 28.09.2026 */
const sources = {
  sika: { label: 'Sika Marine Application Guide : Teak Decking, Maintenance and Repair (2017, en anglais)', href: 'https://gbr.sika.com/dms/getdocument.get/5f0d4442-0769-310e-8a04-89d6f3cb5c90/Marine%20Application%20Guide_12_Teak%20Decking_Maintenance_and_Repair.pdf' },
  hallbergRassy: { label: 'Hallberg-Rassy : Teak deck (en anglais)', href: 'https://shop.hallberg-rassy.com/deck-hull-mooring/teak.html' },
  axopar: { label: 'Axopar Owner’s Manual, 7.1 Cleaning and maintaining the gelcoat surface (en anglais)', href: 'https://manuals.axopar.com/content/p7len/2.0.1.0/en/189.html' },
  iser: { label: 'Informationsstelle Edelstahl Rostfrei : fiche 824 sur le nettoyage de l’acier inoxydable (2024, en allemand)', href: 'https://www.edelstahl-rostfrei.de/fileadmin/user_upload/ISER/images/publikationen/iser_MB824_2025.pdf' },
  roehm: { label: 'Röhm : nettoyer et désinfecter le PLEXIGLAS (211-13, en allemand)', href: 'https://www.plexiglas.de/files/plexiglas-content/pdf/technische-informationen/211-13-Reinigen-und-Desinfizieren-von-PLEXIGLAS.pdf' },
  sunbrella: { label: 'Sunbrella : Clean Sunbrella Marine Upholstery (en anglais)', href: 'https://www.sunbrella.com/clean-sunbrella-marine-upholstery' },
  meteo: { label: 'MétéoSuisse : bilan de la saison pollinique 2022 (en allemand)', href: 'https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog/de/2022/8/pollensaison-2022-der-rueckblick.html' },
  gschg: { label: 'Loi fédérale sur la protection des eaux (LEaux, RS 814.20), art. 6 Principe', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/fr#art_6' },
  bsv: { label: 'Ordonnance sur la navigation intérieure (ONI, RS 747.201.1), art. 10 et 108', href: 'https://www.fedlex.admin.ch/eli/cc/1979/337_337_337/fr#art_10' },
  hafenLuzern: { label: 'Bootshafen Luzern : règlement du port, en vigueur depuis le 1er avril 2024 (en allemand)', href: 'https://bootshafen-luzern.ch/hafenreglement/' },
  hafenKehrsiten: { label: 'Bootshafen Hostatt, Kehrsiten : règlement du port du 1er janvier 2018, chiffre 10 (en allemand)', href: 'https://s9de133486e03e91b.jimcontent.com/download/version/1466356984/module/10266661993/name/Hafenordnung.pdf' },
  smrv: { label: 'Canton de Lucerne : commentaire de l’ordonnance sur l’annonce et le nettoyage des bateaux (SMRV), 17 mars 2026 (en allemand)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Schiffe/Erlaeuterungen_zur_Verordnung.pdf?rev=d06e1b64f51c48c9a2ef5613ea8ef1ce' },
  smrp: { label: 'Umwelt Zentralschweiz : FAQ sur l’obligation d’annonce et de nettoyage des bateaux (en allemand)', href: 'https://www.umwelt-zentralschweiz.ch/was-wir-machen/themen/gebietsfremde-arten/aquatische-neobiota/faq-schiffsmelde-und-reinigungspflicht/' },
  zug: { label: 'Canton de Zoug : obligation de nettoyage des bateaux (en allemand)', href: 'https://zg.ch/de/natur-umwelt-tiere/arten-und-lebensraeume/artenmanagement-gewaesser/schiffsreinigungspflicht' },
} satisfies Record<string, Source>

export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Nettoyage de bateau et de yacht à la place d’amarrage',
  lead: [
    'Le pollen, les fientes d’oiseaux et l’humidité usent un bateau sur le lac à chaque saison. Nous le nettoyons là où il se trouve, au ponton ou au port : à l’intérieur et à l’extérieur, une seule fois avant un événement ou régulièrement pendant toute la saison.',
    'Ce qui s’écoule du pont finit dans le lac. C’est pourquoi le règlement du port de votre place d’amarrage et les instructions d’entretien de votre chantier naval font partie des premiers documents que nous consultons.',
  ],
  facts: [
    { label: 'Lieu', value: 'À votre place d’amarrage, sur les lacs des Quatre-Cantons et de Zoug' },
    { label: 'Horaires', value: 'Aussi le soir, le week-end et quand vous n’êtes pas à bord' },
    { label: 'Rythme', value: 'Une fois avant un événement ou régulièrement jusqu’à l’hivernage' },
    { label: 'Non compris', value: 'Carène, antifouling, moteur et équipement de bord' },
  ],
  sections: [
    {
      title: 'Pourquoi un bateau ne se nettoie pas comme une maison',
      paragraphs: [
        'Un bateau est fait de matériaux qu’on ne trouve guère dans une maison. Le teck a des fibres tendres que les brosses dures et la haute pression arrachent : le pont devient rugueux et les joints ressortent. Le gelcoat perd son brillant sous l’effet du soleil et de nettoyants inadaptés, et l’inox commence à rouiller au contact de laine d’acier ou de produits chlorés.',
        'Les nettoyants ménagers sont donc rarement le bon choix à bord. Nous travaillons avec des produits adaptés à chaque matériau et suivons les instructions d’entretien de votre chantier naval lorsqu’il y en a.',
      ],
    },
    {
      title: 'Sur un lac, beaucoup de choses sont différentes',
      paragraphs: [
        'Sur les lacs des Quatre-Cantons et de Zoug, il n’y a pas le sel qui attaque les ferrures en mer. En revanche, la rive apporte autre chose à bord : au printemps, le pollen jaune des conifères, puis les feuilles, les toiles d’araignée et les fientes d’oiseaux, surtout aux places d’amarrage sous les arbres. Dans le carré fermé, l’humidité persiste et les coussins se couvrent de taches de moisissure.',
        'Et l’eau est partout autour. Les produits autorisés au ponton sont fixés par la loi et par le règlement du port ; l’aperçu plus bas cite les règles avec leurs sources. Sur demande, nous utilisons des produits respectueux de l’environnement, et eux aussi ne vont sur le pont qu’avec parcimonie.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialien',
      title: 'Teck, gelcoat, inox : ce qui aide et ce qui abîme',
      intro: 'Ces indications proviennent d’instructions d’entretien de fabricants et d’organismes spécialisés. Si votre chantier naval a ses propres instructions pour votre bateau, elles priment.',
      columns: ['Matériau', 'Comment le nettoyer', 'Ce qui l’abîme'],
      rows: [
        [
          'Pont en teck',
          'À l’éponge ou à la brosse douce dans le sens du fil du bois, avec un nettoyant doux pour teck, puis rincer abondamment à l’eau claire. Le sens du fil est recommandé par Sika, fabricant de systèmes de pont en teck, et par le chantier Hallberg-Rassy.',
          'Les nettoyeurs haute pression et les brosses dures usent les fibres tendres, les lattes s’amincissent. Selon Sika, l’eau de Javel, les acides forts et les produits chimiques agressifs ne doivent jamais être utilisés sur le pont.',
        ],
        [
          'Gelcoat du pont et des superstructures',
          'Laver avec un nettoyant pour bateaux, dilué selon le mode d’emploi, et une brosse douce ; rincer à l’eau claire avant et après.',
          'Nettoyants ménagers, chlore et acides. Leur pH ne convient pas et peut endommager la surface.',
        ],
        [
          'Inox des balcons, taquets et ferrures',
          'Essuyer avec un chiffon doux dans le sens du polissage. Enlever tôt la rouille superficielle, par exemple avec un nettoyant pour inox légèrement acide à base d’acide citrique.',
          'Laine d’acier et brosses métalliques en acier ordinaire, crème à récurer, produits contenant de l’acide chlorhydrique ou du chlore. Les particules de fer de la laine d’acier restent dans la surface et font rouiller à l’humidité.',
        ],
        [
          'Hublots et capots en verre acrylique',
          'Nettoyer à l’eau avec un peu de liquide vaisselle et un chiffon doux non pelucheux, puis repasser avec un chiffon légèrement humide.',
          'Essuyer à sec, nettoyants à vitres courants, produits contenant de l’alcool, des solvants ou des diluants. Ils rayent ou attaquent le verre acrylique.',
        ],
        [
          'Coussins et sellerie en tissu d’extérieur',
          'Brosser la saleté non adhérente, nettoyer avec une solution savonneuse douce et une brosse souple, rincer tous les résidus de savon et laisser sécher à l’air.',
          'L’eau de Javel à proximité de l’eau, que le fabricant du tissu déconseille aussi. La saleté qui reste : la moisissure s’y développe.',
        ],
      ],
      note: 'Si un pont en teck reste mouillé plus longtemps à certains endroits après un nettoyage à l’eau, ou si le bois s’y décolore, un joint peut fuir. C’est l’affaire du chantier naval.',
      sources: [sources.sika, sources.hallbergRassy, sources.axopar, sources.iser, sources.roehm, sources.sunbrella],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'saisonkalender',
      title: 'Calendrier de saison pour votre bateau',
      intro: 'Quel nettoyage s’impose à quel moment sur le lac. Les mois sont indicatifs, la floraison et la météo varient d’une année à l’autre.',
      entries: [
        {
          label: 'Mars et avril',
          text: 'Avant la première sortie : aérer et nettoyer le carré et les cabines, vérifier les coussins sortis de l’hivernage pour détecter les taches de moisissure, préparer le pont, le gelcoat et les hublots pour la saison.',
        },
        {
          label: 'Avril et mai',
          text: 'Les épicéas et les pins fleurissent. Leur pollen se dépose en film jaune sur le pont, les coussins et l’eau. Si le bateau est amarré sous des arbres, un nettoyage plus fréquent vaut la peine pendant ces semaines.',
        },
        {
          label: 'Juin à août',
          text: 'Haute saison avec sorties et invités à bord. Dans son manuel, le constructeur Axopar recommande de laver le bateau après chaque sortie, et chaque semaine s’il reste dehors sans bâche.',
        },
        {
          label: 'Septembre et octobre',
          text: 'Fin de saison : nettoyer à fond et tout laisser sécher avant l’hivernage. Une bâche en plastique emprisonne l’humidité, une bâche en tissu est préférable.',
        },
        {
          label: 'Avant un changement de lac',
          text: 'Si le bateau rejoint un autre lac après l’hivernage, prévoyez l’annonce et le nettoyage par une station de nettoyage autorisée avant la mise à l’eau.',
        },
      ],
      sources: [sources.meteo, sources.axopar],
    },
    {
      kind: 'table',
      id: 'regeln-am-see',
      title: 'Ce qui s’applique à la place d’amarrage',
      intro: 'La loi, l’ordonnance et le règlement du port fixent ce qui peut aller à l’eau pendant le nettoyage. Cet aperçu résume les règles et ne remplace pas un conseil juridique ; dans chaque cas, c’est le texte qui fait foi.',
      columns: ['Règle', 'Ce qu’elle exige', 'Ce que cela signifie pour l’entretien'],
      rows: [
        [
          'Loi sur la protection des eaux, art. 6',
          'Il est interdit d’introduire directement ou indirectement dans une eau des substances de nature à la polluer.',
          'Tout produit utilisé sur le pont peut s’écouler dans le lac avec l’eau de rinçage. Donc le moins possible, et seulement ce qui convient au matériau.',
        ],
        [
          'Ordonnance sur la navigation intérieure, art. 10',
          'La navigation connaît la même interdiction. Si des substances dangereuses pour l’eau, comme de l’huile ou du carburant, tombent à l’eau et que le conducteur ne peut pas écarter lui-même le danger, il doit aviser la police sans délai.',
          'Ne pas simplement rincer un film d’huile dans la cale ou des traces de carburant sur la coque, mais les signaler au propriétaire.',
        ],
        [
          'Ordonnance sur la navigation intérieure, art. 108',
          'Les bateaux pourvus de locaux de séjour, d’une cuisine ou d’installations sanitaires doivent être munis de récipients pour les matières fécales, les eaux usées et les déchets, pouvant être vidés à terre.',
          'L’eau de nettoyage des salles d’eau et de la cuisine va dans ces réservoirs ou à terre, pas par-dessus bord.',
        ],
        [
          'Règlement du port',
          'Chaque port règle lui-même le lavage à la place d’amarrage, plus ou moins strictement. Le Bootshafen Luzern interdit les produits nocifs pour l’environnement, le Bootshafen Hostatt à Kehrsiten interdit totalement les produits de nettoyage et les nettoyeurs à vapeur.',
          'Le règlement du port de votre place d’amarrage détermine quels produits sont admis au ponton. Il fait partie des documents à réunir avant la première intervention.',
        ],
        [
          'Obligation d’annonce et de nettoyage des bateaux',
          'Avant qu’un bateau immatriculé change d’eaux, par exemple pour un autre lac, le changement doit être annoncé et le bateau nettoyé par une station de nettoyage autorisée. Il ne peut être mis à l’eau dans les nouvelles eaux qu’avec l’autorisation. La raison est la moule quagga, découverte pour la première fois dans le lac des Quatre-Cantons en été 2024.',
          'Cette règle vaut dans tous les cantons de Suisse centrale, à Lucerne avec une ordonnance propre depuis le 1er avril 2026. Laisser sécher le bateau ne compte pas comme nettoyage, et l’entretien à la place d’amarrage ne le remplace pas.',
        ],
      ],
      sources: [sources.gschg, sources.bsv, sources.hafenLuzern, sources.hafenKehrsiten, sources.smrv, sources.smrp, sources.zug],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Avant la première intervention à la place d’amarrage',
      intro: 'Avec ces informations, le premier rendez-vous au ponton est court. Imprimez la liste ou transmettez-la à votre skipper.',
      groups: [
        {
          title: 'Bateau',
          items: [
            'Chantier naval, modèle et longueur',
            'Instructions d’entretien du chantier ou du fabricant du pont, s’il y en a',
            'Matériaux à bord : teck, gelcoat, inox, verre acrylique, cuir ou tissu d’extérieur',
            'Dommages connus, par exemple des joints ouverts dans le teck ou des fissures dans le gelcoat',
            'Coffres et zones que nous ne devons pas ouvrir',
          ],
        },
        {
          title: 'Place d’amarrage',
          items: [
            'Port, ponton et numéro de place',
            'Règlement du port avec les règles sur le lavage à la place',
            'Eau et électricité au ponton',
            'Accès et place de parc près du ponton',
            'Élimination au port : déchets, pompage des eaux noires et de la cale',
          ],
        },
        {
          title: 'Accès et dates',
          items: [
            'Clé, badge ou code pour le portail et le ponton',
            'Qui ouvre le bateau quand vous n’êtes pas là',
            'Sorties prévues, invités à bord et date de l’hivernage',
            'Personne de contact au lac : vous-même, votre skipper ou le responsable du port',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Étendue du nettoyage du bateau',
    intro: 'À la place d’amarrage, une seule fois ou régulièrement pendant la saison :',
    items: [
      'Pont et surfaces en teck, avec les ferrures en inox',
      'Gelcoat du pont et des superstructures',
      'Hublots et capots, y compris en verre acrylique',
      'Sellerie, coussins et textiles',
      'Carré, cabines et cuisine',
      'Salles d’eau',
    ],
    notIncluded: [
      'Carène et antifouling. C’est le travail du chantier naval.',
      'Entretien technique du moteur et de l’équipement de bord, y compris l’hivernage du moteur.',
      'Réparations du pont, des joints ou du gelcoat.',
      'Le nettoyage obligatoire avant un changement de lac. Il revient à une station de nettoyage autorisée.',
    ],
  },
  steps: [
    {
      title: 'Clés et accès',
      text: 'C’est vous qui décidez comment nous montons à bord : avec une clé, avec un badge pour le ponton ou par une personne qui ouvre le bateau. Des règles fixes s’appliquent, y compris pendant votre absence.',
    },
    {
      title: 'Interventions selon le plan de saison',
      text: 'Nous venons aux dates convenues, une seule fois avant un événement ou régulièrement du printemps à l’automne, y compris le soir et le week-end.',
    },
    {
      title: 'Une équipe fixe',
      text: 'Une équipe fixe s’occupe de votre bateau. Après la première intervention, elle connaît les coffres, les raccordements et le règlement du port.',
    },
  ],
  faq: [
    {
      question: 'Combien coûte le nettoyage d’un bateau ?',
      answer:
        'L’effort dépend surtout de la longueur et de l’aménagement du bateau, c’est-à-dire s’il s’agit d’un bateau à moteur ouvert ou d’un yacht avec carré, cabines et salles d’eau. S’y ajoutent la surface de teck, l’état, le fait que nous nettoyions l’intérieur, l’extérieur ou les deux, la fréquence et la facilité d’accès à la place d’amarrage avec le matériel. Nous vous indiquons un prix dès que nous avons vu le bateau.',
    },
    {
      question: 'À quelle fréquence un bateau amarré doit-il être nettoyé ?',
      answer:
        'L’emplacement et l’usage sont déterminants. Sous les arbres et pendant la floraison en avril et en mai, un bateau se salit plus vite qu’à un ponton dégagé. Pour la haute saison, un rythme fixe est judicieux, par exemple chaque semaine ou avant les week-ends avec des invités. Ce qu’un constructeur recommande figure dans le calendrier de saison ci-dessus.',
    },
    {
      question: 'Un pont en teck gris est-il sale ?',
      answer:
        'Pas forcément. Au soleil, le teck prend avec le temps une patine gris argenté, et certains propriétaires souhaitent justement cette couleur. En revanche, le pont devient rugueux et taché à cause de brosses dures, de la haute pression ou de produits agressifs. Pour qu’il garde sa teinte d’origine, il faut des produits d’entretien pour teck adaptés au pont et aux joints.',
    },
    {
      question: 'Que faire contre les taches de moisissure dans le carré ?',
      answer:
        'De l’air et du sec. Laisser sécher complètement coussins et sellerie après le nettoyage, ne pas laisser la saleté en place, car la moisissure s’y développe, et ne pas emballer le bateau de façon étanche dans du plastique pour l’hiver. Si les taches sont déjà là, nous nettoyons les housses selon les instructions du fabricant du tissu.',
    },
    {
      question: 'Devons-nous être à bord pendant le nettoyage ?',
      answer:
        'Non. Vous n’avez besoin d’être ni au ponton ni à bord, et nous venons aussi le soir ou le week-end. Qui ouvre le bateau et le referme est réglé une fois avec vous, puis vaut pour chaque intervention.',
    },
    {
      question: 'Notre skipper ou le responsable du port peut-il fixer les rendez-vous ?',
      answer:
        'Oui. Indiquez-nous la personne qui connaît le bateau et peut répondre à nos questions au ponton. Le devis vous est adressé, ou à la personne que vous désignez.',
    },
    {
      question: 'Pouvez-vous nettoyer notre bateau pour un changement de lac ?',
      answer:
        'Non. Avant qu’un bateau rejoigne un autre lac, les cantons de Suisse centrale exigent un nettoyage par une station de nettoyage autorisée, en général un chantier naval. Vous annoncez le changement en ligne auprès d’Umwelt Zentralschweiz et recevez l’autorisation pour le nouveau lac après le nettoyage. Notre entretien à la place d’amarrage ne remplace pas ce nettoyage.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Si une maison ou une résidence secondaire au bord du lac va avec le bateau et doit être prête avant votre arrivée.' },
    { path: '/premium/privatjet', text: 'Si vous souhaitez aussi faire nettoyer la cabine de votre jet privé entre deux vols.' },
    { path: '/premium', text: 'Toutes les offres de notre ligne premium, de l’accord de confidentialité à l’équipe fixe.' },
  ],
  cta: {
    title: 'Demander un devis pour votre bateau',
    text: 'Indiquez-nous le chantier naval, le modèle et la longueur, le port ou le ponton et si nous devons nettoyer l’intérieur, l’extérieur ou les deux, ainsi que les dates souhaitées dans la saison. Dès que nous avons vu le bateau à sa place d’amarrage, nous vous envoyons le devis, gratuitement et sans engagement.',
  },
}
