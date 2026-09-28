import type { ServicePageContent } from '../../types'

// Traduction de content/de/leistungen/baureinigung.ts (E85). Sources comme dans le fichier allemand,
// liées aux versions françaises de fedlex et à l’article bilingue du SIGAB.
// Deuxième tour (constats R1 à R6, BR-SO-1 à BR-SO-9) : message FF 2022 2743, ch. 4.2 (droit
// transitoire), SIGAB nommé comme sur sigab.ch/fr.
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage de chantier et nettoyage de fin de chantier pour le neuf et les transformations',
  lead: [
    'Après les aménagements intérieurs, une poussière fine couvre chaque surface, des films de protection restent collés sur les fenêtres et les appareils, des projections de mortier et de peinture marquent le verre et le carrelage. D’ici la réception, le bâtiment doit être prêt pour que locataires, acheteurs ou votre équipe puissent emménager le jour de la remise.',
    'Nous nettoyons selon les étapes dont votre chantier a besoin : un nettoyage grossier après le gros œuvre, des nettoyages intermédiaires avant les aménagements intérieurs et un nettoyage minutieux avant la remise. Les interventions suivent le planning de la direction des travaux. La réception commence ainsi sur des surfaces propres, où les défauts se voient.',
  ],
  facts: [
    { label: 'Pour', value: 'Maîtres d’ouvrage, entreprises générales, bureaux d’architectes et gérances' },
    { label: 'Étapes', value: 'Nettoyage grossier, intermédiaire et de fin de chantier, séparément ou ensemble' },
    { label: 'Nettoyage final', value: 'Après les derniers artisans, avant la réception' },
    { label: 'Requis sur place', value: 'Accès, électricité, eau et un emplacement pour les appareils' },
    { label: 'Non compris', value: 'Façade et nettoyage régulier après l’emménagement' },
  ],
  scope: {
    title: 'Ce que comprend le nettoyage de chantier',
    intro:
      'Le nettoyage de chantier se déroule par étapes, au rythme de l’avancement des travaux. Vous pouvez confier toutes les étapes ou seulement le nettoyage de fin de chantier avant la remise.',
    items: [
      'Nettoyage grossier après le gros œuvre : enlever la saleté grossière et la poussière des étages',
      'Nettoyages intermédiaires avant la pose des sols ou le montage des cuisines',
      'Nettoyage de fin de chantier avant la réception, de haut en bas et au besoin en plusieurs passages',
      'Débarrasser fenêtres, cadres, feuillures et vitrages de la poussière de chantier et des résidus',
      'Retirer films de protection, étiquettes, restes de colle ainsi que projections de mortier et de peinture',
      'Nettoyer sols, sanitaires, cuisines et armoires encastrées à l’intérieur et à l’extérieur, prêts à l’emménagement',
    ],
    notIncluded: [
      'La façade du bâtiment terminé relève du [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
      'Après l’emménagement, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) prend le relais pour le nettoyage régulier.',
    ],
  },
  sections: [
    {
      title: 'Poussière, films et projections : ce que règle le nettoyage de fin de chantier',
      paragraphs: [
        'La poussière de chantier est fine et se dépose partout : sur les sols, dans les feuillures des fenêtres, sur les encadrements de porte, dans les armoires et les tiroirs. On nettoie donc de haut en bas, souvent en plus d’un passage, pour qu’aucune poussière ne retombe sur des surfaces déjà propres.',
        'Films, colle et projections séchées adhèrent plus fort que la poussière. Chaque surface demande son propre produit et son propre outil, car le verre, l’inox, la robinetterie et les sols neufs doivent être remis sans rayures. Le tableau plus bas montre ce qui compte pour le verre.',
      ],
    },
    {
      title: 'Nettoyage grossier du gros œuvre, pour des aménagements sur une base propre',
      paragraphs: [
        'Tant que les étages sont vides, gravats et poussière s’enlèvent vite et à fond. Poseurs de sols, plâtriers et cuisinistes commencent alors sur une base propre, et à chaque intervention, moins de poussière se propage vers les étapes suivantes.',
        'Chaque nettoyage intermédiaire allège le nettoyage de fin de chantier. C’est surtout utile lorsque quelques jours seulement séparent le dernier artisan de la remise : le nettoyage final ne part alors pas de zéro.',
      ],
    },
    {
      title: 'Transformation dans un immeuble habité ou en exploitation',
      paragraphs: [
        'Lors du remplacement des colonnes montantes ou de la transformation d’un étage, le reste de l’immeuble demeure occupé. Chaque jour de travail apporte de la poussière dans la cage d’escalier, l’ascenseur et jusque devant les portes des logements. Un nettoyage intermédiaire de ces passages communs à un rythme fixe limite la gêne pour les habitants et le personnel.',
        'Le nettoyage de fin de chantier suit ensuite étape par étape, dès que les artisans quittent un logement ou une section. Les logements terminés peuvent ainsi être remis avant la fin de toute la rénovation.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bauablauf',
      title: 'Le nettoyage dans le déroulement du chantier',
      intro: 'Quel nettoyage intervient quand et qui donne le feu vert pour la zone, comme modèle pour la direction des travaux et l’appel d’offres.',
      columns: ['Étape', 'À quel moment', 'Ce qui est nettoyé', 'Feu vert donné par'],
      rows: [
        [
          'Nettoyage grossier',
          'Après le gros œuvre, avant le début des aménagements intérieurs',
          'Enlever la saleté grossière et la poussière des étages',
          'Direction des travaux',
        ],
        [
          'Nettoyage intermédiaire',
          'Avant les travaux délicats comme le parquet, le carrelage ou le montage de la cuisine',
          'Poussière sur les sols, les fenêtres, les installations et les éléments déjà posés',
          'Direction des travaux',
        ],
        [
          'Nettoyage de fin de chantier',
          'À la fin, une fois tous les corps de métier partis',
          'Tout prêt à l’emménagement, de haut en bas, souvent en plusieurs passages',
          'Direction des travaux ou maître d’ouvrage',
        ],
        [
          'Nettoyage de reprise',
          'Lorsque des travaux ont lieu après le nettoyage final, par exemple pour éliminer des défauts',
          'Uniquement les pièces où des artisans sont encore intervenus après le nettoyage final',
          'Direction des travaux',
        ],
      ],
      note: 'Si des artisans travaillent encore dans les locaux après le nettoyage de fin de chantier, de la nouvelle poussière se forme. Réservez donc un créneau pour des nettoyages de reprise.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'ausschreibung',
      title: 'Soumission du nettoyage de fin de chantier : les indications qui rendent les devis comparables',
      intro: 'Si tous les prestataires reçoivent les mêmes indications, les devis se comparent ligne par ligne. La liste sert aussi de modèle pour votre demande auprès de nous.',
      groups: [
        {
          title: 'Bien et surfaces',
          items: [
            'Type de bien, étages et surface utile',
            'Nombre de logements ou d’unités',
            'Plans indiquant les pièces à nettoyer',
            'Pierre naturelle, parquet ou sols huilés',
            'Caves et parking : compris ou non',
          ],
        },
        {
          title: 'Verre et fenêtres',
          items: [
            'Fenêtres, portes et garde-corps vitrés',
            'Verre en hauteur, par exemple impostes',
            'Où du verre trempé (VST) est posé',
            'Stores et volets roulants : compris ou non',
          ],
        },
        {
          title: 'Dates',
          items: [
            'Étapes souhaitées avec leur date',
            'Date de remise et date de la réception',
            'Créneau avant la réception',
            'Réserve pour un nettoyage de reprise',
          ],
        },
        {
          title: 'Chantier',
          items: [
            'Accès au chantier, clés ou badges',
            'Électricité, eau, ascenseur et dépôt',
            'Règles de sécurité et personne de contact',
            'Bennes : qui les fournit et qui les vide',
          ],
        },
      ],
      note: 'L’ordonnance sur les déchets (OLED) exige d’éliminer séparément les déchets spéciaux et de trier le reste des déchets de chantier sur place. Si l’exploitation ne le permet pas, le tri se fait dans une installation appropriée (art. 17 OLED). Clarifiez donc aussi où vont les films et emballages issus du nettoyage.',
      sources: [
        { label: 'Ordonnance sur les déchets OLED, art. 17 : tri des déchets de chantier', href: 'https://www.fedlex.admin.ch/eli/cc/2015/891/fr#art_17' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'glas',
      title: 'Verre neuf : ce qui l’abîme et ce que recommande la branche du verre',
      intro: 'Les fenêtres sont souvent posées des mois avant la remise et subissent tout ce que produit le chantier. Les recommandations viennent du département technique SIGAB de l’Association Suisse du Verre Plat.',
      columns: ['Situation', 'Pourquoi c’est délicat', 'Recommandation'],
      rows: [
        [
          'Laitance de ciment, mortier ou crépi sur la vitre',
          'Ils sont fortement alcalins et peuvent attaquer le verre et le ternir. Une forte corrosion est irréparable, le verre doit alors être remplacé.',
          'Retirer immédiatement. Ramollir d’abord les résidus de béton, puis les essuyer avec soin.',
        ],
        [
          'Poussière de chantier séchée',
          'Frotter un chiffon humide sur de la saleté sèche entraîne des grains pointus sur la vitre et la raye.',
          'Travailler avec beaucoup d’eau propre : ramollir, dissoudre, rincer. Chiffons en microfibre seulement avec prudence.',
        ],
        [
          'Projections de peinture et de mortier',
          'Passer une lame ou un racloir sur toute la vitre fait pénétrer des particules de saleté dans le verre. Il en résulte un réseau de fines rayures. Le polissage devrait alors traiter tout le champ visuel et revient plus cher que le remplacement du verre.',
          'N’utiliser la lame que ponctuellement et avec grand soin, jamais sur toute la surface.',
        ],
        [
          'Étiquettes et ruban adhésif',
          'Particulièrement délicat sur le verre à revêtement et par temps chaud. Les nettoyants contenant des lessives alcalines ou des acides peuvent détruire le revêtement et la surface du verre.',
          'Retirer la colle au plus vite, avec précaution à l’isopropanol ou à l’acétone.',
        ],
        [
          'Verre de sécurité trempé (VST)',
          'Plus sensible aux rayures que le verre flotté ordinaire, sans être de moindre qualité. Selon les normes de produit, le verre précontraint ne peut plus être travaillé après la trempe, donc pas non plus poli.',
          'Nettoyer avec un soin particulier.',
        ],
      ],
      note: 'Selon la longue expérience d’expertise du SIGAB, une grande partie des rayures est due à un nettoyage de fin de chantier inapproprié, et elles ne se voient souvent qu’avec un soleil rasant. Examinez donc les vitrages avec la direction des travaux avant le nettoyage final et consignez les dommages existants. Sinon, une expertise est souvent nécessaire plus tard pour établir quand une rayure est apparue.',
      sources: [
        {
          label: 'SIGAB : Des verres sales et un nettoyage inapproprié entraînent des dommages (metall, avril 2020, en allemand et en français)',
          href: 'https://www.sigab.ch/fileadmin/dam/upload/sigab/news/Fachartikel_DE/2020_04_Metall_Glaeser-im-Baualltag.pdf',
        },
        { label: 'SIGAB : nettoyer les fenêtres sans provoquer de rayures (mars 2021, en allemand)', href: 'https://www.sigab.ch/de/wissen/detail/fensterputzen-ohne-kratzer-zu-verursachen' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'uebergabe',
      title: 'Check-list de remise après le nettoyage de fin de chantier',
      intro: 'Pour la visite avant la réception. Regardez le verre à la lumière du jour, aussi de biais.',
      groups: [
        {
          title: 'Verre, fenêtres et portes',
          items: [
            'Films, étiquettes et colle retirés',
            'Verre sans traces, projections ni rayures',
            'Feuillures et cadres sans poussière de chantier',
          ],
        },
        {
          title: 'Cuisine, salle de bains et agencements',
          items: [
            'Robinetterie et appareils sanitaires sans restes de mortier ni de peinture',
            'Armoires et tiroirs propres à l’intérieur',
            'Carrelage et joints sans résidus',
          ],
        },
        {
          title: 'Sols et surfaces',
          items: [
            'Sols propres jusque dans les coins',
            'Tablettes et portes sans poussière',
            'Escaliers et rampes sans poussière',
          ],
        },
        {
          title: 'Avant la réception de l’ouvrage',
          items: [
            'Plus aucun artisan dans les locaux',
            'Dommages préexistants consignés',
            'Liste des défauts par pièce et élément',
            'Délai d’avis clarifié (voir remarque)',
          ],
        },
      ],
      note: 'Le CO prévoit que le maître de l’ouvrage vérifie la construction après la livraison et en signale les défauts aux entrepreneurs (art. 367 CO). Pour les contrats d’entreprise portant sur un ouvrage immobilier conclus depuis le 1er janvier 2026, le délai est d’au moins 60 jours, et pour les défauts qui n’apparaissent que plus tard, il court dès leur découverte (art. 370 CO). Pour les contrats plus anciens, l’ancien droit continue de s’appliquer : l’avis doit être donné sans délai. Clarifiez avec votre direction des travaux ou votre conseil juridique ce que prévoit votre contrat.',
      sources: [
        { label: 'Code des obligations, art. 367 et 370 : vérification, avis des défauts et acceptation', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_367' },
        { label: 'Message sur les défauts de construction, FF 2022 2743, ch. 4.2 : droit transitoire', href: 'https://www.fedlex.admin.ch/eli/fga/2022/2743/fr' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Étapes dans le planning',
      text: 'Nettoyage grossier, intermédiaire et final figurent avec leur date dans le planning de la direction des travaux. Si le chantier prend du retard, les interventions sont replanifiées avec la direction des travaux.',
      figure: 'start',
    },
    {
      title: 'Nettoyage final pièce par pièce',
      text: 'Après les derniers artisans, chaque pièce est nettoyée de haut en bas, films et résidus sont retirés, jusqu’à ce que la surface soit prête à l’emménagement.',
      figure: 'besichtigung',
    },
    {
      title: 'Réception sur des surfaces propres',
      text: 'Vous ou votre direction des travaux contrôlez avec la check-list de remise. Sur des surfaces propres apparaissent aussi les défauts de construction cachés sous la poussière.',
      figure: 'offerte',
    },
  ],
  faq: [
    {
      question: 'Quelle différence entre nettoyage de chantier, nettoyage de fin de chantier et nettoyage après travaux ?',
      answer:
        'Le nettoyage de chantier est le terme général pour toutes les interventions sur le chantier, du nettoyage grossier après le gros œuvre aux nettoyages intermédiaires. Le nettoyage de fin de chantier est le dernier nettoyage minutieux avant la réception, après lequel le bien est prêt à l’emménagement. Le nettoyage après travaux désigne le plus souvent ce même nettoyage de fin de chantier.',
    },
    {
      question: 'Quand inscrire le nettoyage de fin de chantier dans le planning ?',
      answer:
        'Dès que vous connaissez la date de remise. Il intervient après les derniers travaux des artisans et avant la réception, et il lui faut un créneau propre. Sa durée dépend de la surface, de la part de verre et du nombre de passages.',
    },
    {
      question: 'Combien coûte un nettoyage de chantier ?',
      answer:
        'L’effort dépend surtout de la surface et du nombre d’étages, de la part de verre et de sa hauteur, de la quantité de films, de colle et de projections, du nombre d’étapes et de passages, du délai jusqu’à la remise ainsi que de l’électricité, de l’eau et d’un ascenseur sur le chantier. Avec la liste pour l’appel d’offres de cette page, vous réunissez les indications dont nous avons besoin pour le devis.',
    },
    {
      question: 'Pourquoi le verre neuf présente-t-il parfois des rayures après le nettoyage de chantier ?',
      answer:
        'Selon les experts du verre du SIGAB, le plus souvent à cause d’un nettoyage incorrect : une lame passée sur toute la vitre, ou un chiffon frotté sur de la poussière de chantier séchée. Le verre de sécurité trempé (VST) y est particulièrement sensible. Ces rayures fines ne se remarquent souvent pas tout de suite, mais seulement avec un soleil rasant.',
    },
    {
      question: 'Qui retire les films de protection, les étiquettes et les restes de colle ?',
      answer:
        'Cela fait partie du nettoyage de fin de chantier, avec des produits adaptés à chaque surface. Les précautions à prendre sur le verre figurent dans le tableau sur le verre neuf. Indiquez-nous dès votre demande les surfaces vitrées qui portent des étiquettes ou du ruban adhésif.',
    },
    {
      question: 'Nettoyage de chantier ou nettoyage de fin de bail : que choisir après une rénovation ?',
      answer:
        'Si les sols, la cuisine ou la salle de bains d’un logement ont été refaits, la poussière de chantier se trouve dans les feuillures, les armoires et sur toutes les surfaces, avec des films et des projections : c’est un nettoyage de chantier. Si des locataires partent sans travaux, c’est le [nettoyage de fin de bail](/leistungen/umzugsreinigung) avec garantie de remise qui convient.',
    },
    {
      question: 'Les fenêtres font-elles partie du nettoyage de fin de chantier ?',
      answer:
        'Oui, cadres, feuillures et vitrages compris. L’entretien régulier du verre et de la façade du bâtiment occupé relève de notre [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
    },
  ],
  related: [
    {
      path: '/leistungen/umzugsreinigung',
      text: 'Lorsqu’un logement passe sans travaux aux locataires suivants et que le nettoyage final doit être assorti d’une garantie de remise.',
    },
    {
      path: '/leistungen/fenster-und-fassadenreinigung',
      text: 'Lorsque la façade et les surfaces vitrées du bâtiment terminé doivent être nettoyées régulièrement.',
    },
    {
      path: '/leistungen/unterhaltsreinigung',
      text: 'Lorsque l’immeuble est occupé et que la cage d’escalier, les parties communes ou les bureaux doivent rester propres en continu.',
    },
  ],
  cta: {
    title: 'Demander un nettoyage de fin de chantier',
    text: 'Indiquez-nous le type de bien, la surface utile, le nombre de logements ou d’unités, les étapes souhaitées et la date de remise. Avec ces indications, nous préparons la visite du chantier, gratuite et sans engagement comme le devis.',
  },
}
