import type { ServicePageContent } from '../../types'

export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Entretien des espaces verts et des extérieurs pour immeubles',
  lead: [
    'Gazon, haies et places demandent beaucoup de travail en mai et presque rien en janvier. Nous entretenons les extérieurs de votre immeuble selon un plan d’entretien qui suit ce cycle annuel : les haies en hiver, les mauvaises herbes sans produits chimiques, les feuilles ramassées avant qu’elles ne rendent les chemins glissants.',
    'Nous assurons l’entretien des espaces verts pour les gérances, les communautés de PPE et les entreprises, comme prestation à part entière ou avec la [conciergerie](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Taille des haies', value: 'De novembre à mars, hors période de nidification' },
    { label: 'Mauvaises herbes', value: 'Retirées mécaniquement, sans herbicide' },
    { label: 'Fréquence', value: 'Selon le plan d’entretien, plus soutenue au début de l’été' },
    { label: 'Intervention', value: 'Seule ou avec la conciergerie' },
    { label: 'Pas dans notre offre', value: 'Service hivernal, aménagement paysager, nouvelles plantations' },
  ],
  scope: {
    title: 'Ce que comprend l’entretien des espaces verts',
    intro: 'Nous effectuons ces travaux pour les surfaces inscrites dans le plan d’entretien :',
    items: [
      'Tondre le gazon',
      'Recouper les bordures du gazon et tailler les lisières',
      'Tailler haies et arbustes, en hiver hors période de nidification',
      'Désherber et entretenir plates-bandes et massifs',
      'Ramasser les feuilles sur le gazon, les chemins et les places',
      'Maintenir propres chemins, places et places de parc',
      'Retirer mécaniquement les mauvaises herbes des joints et des surfaces en gravier',
      'Ramasser les déchets aux abords',
    ],
    notIncluded: [
      'Service hivernal, comme le déneigement et le salage',
      'Aménagement paysager et nouvelles plantations, par exemple une nouvelle haie ou une nouvelle plate-bande',
      'Rondes de contrôle du bâtiment : elles relèvent de la [conciergerie](/leistungen/hauswartung)',
      'Nettoyage des vitres et des façades : il relève du [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung)',
    ],
  },
  sections: [
    {
      title: 'Quand les extérieurs ne s’entretiennent plus à côté',
      paragraphs: [
        'Le concierge part à la retraite, les copropriétaires ne tondent plus eux-mêmes, ou un nouveau lotissement est habité et personne n’est responsable du gazon et des haies. Il faut alors quelqu’un qui garde un œil sur les extérieurs toute l’année.',
        'Nous entretenons des ensembles résidentiels avec place de jeux, des immeubles commerciaux avec parking et des sites artisanaux avec surfaces en gravier. La base est un plan d’entretien qui indique pour chaque surface les travaux et leur rythme. On peut ainsi dire aux locataires quand la tonte et la taille auront lieu.',
      ],
    },
    {
      title: 'Tailler les haies en hiver, en été seulement dégager',
      paragraphs: [
        'Chaque été, les autorités rappellent aux propriétaires de tailler leurs haies. Pour les oiseaux, c’est le pire moment : merles, verdiers et fauvettes des jardins nichent alors dans les haies denses. La Station ornithologique suisse de Sempach recommande donc de tailler les arbustes de novembre à mars.',
        'En hiver, la charpente des branches est bien visible et la taille peut suivre la forme naturelle de la plante. Le long des chemins et des trottoirs, nous coupons alors assez loin pour qu’ils restent dégagés tout l’été. Si un passage se referme malgré tout, une taille légère suffit, après avoir vérifié la présence de nids.',
      ],
    },
    {
      title: 'Espaces verts et ronde de contrôle en un seul passage',
      paragraphs: [
        'Si l’entretien des extérieurs est combiné avec la [conciergerie](/leistungen/hauswartung), il n’y a pas de déplacement séparé. Qui tond et balaie dehors remarque aussi la dalle descellée, l’éclairage extérieur défectueux ou la grille d’évacuation bouchée.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflegekalender',
      title: 'Calendrier d’entretien du gazon, des haies et des places',
      intro: 'Les extérieurs ne demandent pas autant de travail chaque mois. Ce tableau montre ce qui revient à quel moment et sert de trame au plan d’entretien de votre immeuble.',
      columns: ['Période', 'Gazon', 'Haies et arbustes', 'Chemins, places et plates-bandes'],
      rows: [
        [
          'Mars et avril',
          'Ratisser branches et feuilles de l’hiver, première tonte dès que l’herbe pousse',
          'Terminer la taille des arbustes avant la fin mars',
          'Balayer le gravillon et les salissures de l’hiver, désherber les plates-bandes et les couvrir de paillis ou d’écorce',
        ],
        [
          'Mai et juin',
          'Pleine croissance : tondre régulièrement, recouper les bordures',
          'Pas de taille. Si un chemin se referme, tailler légèrement après avoir vérifié la présence de nids',
          'Balayer et désherber les joints avant que les mauvaises herbes montent en graines',
        ],
        [
          'Juillet et août',
          'Tondre selon la pousse et la météo',
          'Période de nidification : laisser les haies tranquilles',
          'Couper les inflorescences des plantes envahissantes avant la maturité des graines',
        ],
        [
          'Septembre et octobre',
          'Ratisser régulièrement les feuilles, dernière tonte avant l’hiver',
          'Laisser les arbustes à baies, ils nourrissent les oiseaux en hiver',
          'Retirer les feuilles des chemins et des places, sous les arbustes elles peuvent rester',
        ],
        [
          'Novembre à février',
          'Repos, retirer seulement les feuilles et les branches tombées',
          'Période principale de taille : former, éclaircir, tailler généreusement le long des chemins',
          'Retirer feuilles et branches des chemins et des places',
        ],
      ],
      note: 'Le long des routes et des trottoirs s’appliquent en plus les règles du canton et de la commune. La Ville de Lucerne exige une hauteur libre de 2,50 m au-dessus des chemins piétons et cyclables et de 4,50 m au-dessus de la chaussée. La Station ornithologique conseille donc de tailler généreusement dès l’hiver le long des chemins.',
      sources: [
        { label: 'Station ornithologique suisse : taille des haies et buissons dans les agglomérations', href: 'https://www.vogelwarte.ch/fr/conseils/taille-des-haies-et-buissons-dans-les-agglomerations-quand-et-comment/' },
        { label: 'OFEV : 10 mesures préventives et alternatives aux herbicides, 2019 (en allemand)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/9yHQQ2lBw2VU/merkblatt_10_vorbeugendemassnahmenundalternativenzumherbizideins.pdf' },
        { label: 'Ville de Lucerne : taille des plantations (en allemand)', href: 'https://www.stadtluzern.ch/dienstleistungeninformation/54265' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'unkraut-ohne-gift',
      title: 'Mauvaises herbes et mousse : où les produits sont interdits',
      intro: 'Sur les surfaces aménagées, il manque la couche d’humus qui pourrait retenir les substances actives, et la pluie les emporte vers les grilles et les cours d’eau. L’ordonnance sur la réduction des risques liés aux produits chimiques (ORRChim) y interdit donc les herbicides et, depuis décembre 2020, aussi les produits contre les algues et la mousse. Cela vaut pour les entreprises comme pour les particuliers.',
      columns: ['Surface', 'Ce qui s’applique', 'Ce qui fonctionne à la place'],
      rows: [
        [
          'Chemins, accès, places et parkings, y compris bordures, trottoirs, grilles et rigoles',
          'Interdit, y compris sur gravier, marne, pavés et dalles-gazon, ainsi que sur une bande de 50 cm le long de ces surfaces',
          'Balayer régulièrement pour que les fines ne s’accumulent pas dans les joints, gratter les joints, arracher les mauvaises herbes avant la montée en graines',
        ],
        [
          'Toits et terrasses',
          'Interdit, y compris les produits contre les algues et la mousse',
          'Désherber et brosser à la main',
        ],
        [
          'Talus et bandes vertes le long des routes',
          'Interdit, plantes problématiques isolées seulement si la fauche ne suffit pas',
          'Faucher et évacuer les déchets de coupe',
        ],
        [
          'Haies, ruisseaux et étangs, chacun avec une bande de 3 m',
          'Tous les produits phytosanitaires interdits, pas seulement les herbicides. Le long des haies, les plantes problématiques isolées font exception si la fauche ne suffit pas',
          'Désherber, faucher, couvrir le sol de paillis',
        ],
      ],
      note: 'La tolérance réduit les coûts, écrit l’OFEV : sur les surfaces peu fréquentées, chaque joint n’a pas besoin d’être sans verdure. Là où les mauvaises herbes reviennent chaque année au même endroit, seule une réfection des joints aide durablement.',
      sources: [
        { label: 'ORRChim (RS 814.81), annexe 2.4 ch. 4bis et annexe 2.5 ch. 1.1', href: 'https://www.fedlex.admin.ch/eli/cc/2005/478/fr' },
        { label: 'OFEV : interdiction des herbicides et biocides sur et le long des routes, chemins, places, terrasses et toits, 2021 (en allemand)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/Cp1cASoaj-UD/merkblatt_verwendungsverbotefuerunkrautvertilgungsmittelaufundan.pdf' },
        { label: 'OFEV : produits phytosanitaires dans les communes', href: 'https://www.bafu.admin.ch/fr/produits-phytosanitaires-dans-les-communes' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'invasive-pflanzen',
      title: 'Plantes envahissantes au jardin : les règles depuis 2024',
      intro: 'Depuis le 1er septembre 2024, l’ordonnance sur la dissémination dans l’environnement (ODE) encadre plus strictement les plantes de jardin envahissantes. Les plantes de l’annexe 2.2 ne peuvent plus être remises à des tiers. Pour l’annexe 2.1, toute utilisation est interdite, seule la lutte reste autorisée.',
      columns: ['Plante', 'Ce que dit l’ODE', 'Entretien et élimination'],
      rows: [
        [
          'Laurier-cerise',
          'Annexe 2.2 : les haies existantes peuvent rester et être taillées, la vente et la remise sont interdites',
          'Couper les baies avant la maturité des graines. Composter les déchets de taille sans fruits, fruits et racines aux ordures ménagères',
        ],
        [
          'Buddléia de David et palmier chanvre (« palmier du Tessin »)',
          'Annexe 2.2 : mêmes règles que pour le laurier-cerise',
          'Couper les inflorescences avant la maturité des graines ou des fruits et les mettre aux ordures ménagères',
        ],
        [
          'Renouées asiatiques, par exemple la renouée du Japon',
          'Annexe 2.1 : ne pas entretenir, ne pas transplanter, seulement lutter',
          'Toutes les parties de la plante aux ordures ménagères, même de petits morceaux de racine repoussent. Éliminer la terre d’excavation contenant des racines uniquement par une filière adaptée',
        ],
        [
          'Solidages américains',
          'Annexe 2.1 : seulement lutter',
          'Faucher au plus tard à la floraison, parties avec fleurs, graines ou racines en sac aux ordures ménagères',
        ],
        [
          'Ambroisie à feuilles d’armoise',
          'Annexe 2.1, avec obligation d’annonce : signaler les découvertes au service cantonal',
          'Arracher avec des gants, et pendant la floraison avec un masque anti-poussière, toute la plante aux ordures ménagères',
        ],
      ],
      note: 'Il n’existe pas d’obligation générale d’éliminer les plantes envahissantes sur son propre terrain. Les propriétaires doivent toutefois empêcher leur propagation. Graines et racines n’ont donc jamais leur place dans le compost du jardin.',
      sources: [
        { label: 'Ordonnance sur la dissémination dans l’environnement ODE (RS 814.911), art. 15 et annexes 2.1 et 2.2', href: 'https://www.fedlex.admin.ch/eli/cc/2008/614/fr' },
        { label: 'OFEV : modification de la réglementation sur les plantes exotiques envahissantes', href: 'https://www.bafu.admin.ch/fr/modification-de-la-reglementation-sur-les-plantes-exotiques-envahissantes' },
        { label: 'Cantons de Suisse centrale : aide pratique néophytes, 2025 (en allemand)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Praxishilfe_Neophyten.pdf' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'pflegeplan',
      title: 'Plan d’entretien : ce qu’il doit contenir',
      intro: 'Plus les surfaces et les attentes sont décrites avec précision, plus les devis se comparent facilement. Cette liste aide à réunir l’essentiel avant la visite.',
      groups: [
        {
          title: 'Surfaces',
          items: [
            'Gazon en mètres carrés, idéalement marqué sur le plan des extérieurs',
            'Haies : longueur en mètres, hauteur, un ou deux côtés',
            'Plates-bandes, massifs et bacs à plantes',
            'Chemins, places, parkings, place de jeux et toits-terrasses avec leur revêtement',
          ],
        },
        {
          title: 'Rythme et horaires',
          items: [
            'Tonte et désherbage : fréquence pendant la croissance',
            'Jours et heures qui conviennent aux locataires ou à l’exploitation',
            'Événements avant lesquels les extérieurs doivent être soignés',
            'Taille des haies en hiver, hors période de nidification',
          ],
        },
        {
          title: 'Déchets verts et responsabilités',
          items: [
            'Déchets verts : conteneur, ramassage communal ou évacuation',
            'Emplacements connus de plantes envahissantes',
            'Parcelles de jardin entretenues par des locataires ou propriétaires',
            'Raccordement d’eau, local à outils et accès pour les machines',
          ],
        },
        {
          title: 'Après chaque passage',
          items: [
            'Bordures du gazon nettes',
            'Chemins et places sans feuilles, déchets de coupe ni mauvaises herbes dans les joints',
            'Passages, zones de visibilité et trottoirs dégagés',
            'Plates-bandes désherbées, déchets de coupe à l’endroit convenu',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Plan d’entretien',
      text: 'Chaque surface figure dans le plan avec ses travaux et son rythme, de la bordure du gazon à la taille des haies.',
    },
    {
      title: 'Saison de mars à octobre',
      text: 'Pendant la période de croissance, nous tondons, désherbons et balayons au rythme convenu. Pour un passage supplémentaire, par exemple avant un événement, il suffit de nous le signaler.',
    },
    {
      title: 'Taille des arbustes en hiver',
      text: 'Entre novembre et mars vient la taille des haies et des arbustes, avec le ramassage des feuilles et des branches là où elles tombent.',
    },
  ],
  faq: [
    {
      question: 'De quoi dépend le coût de l’entretien des espaces verts ?',
      answer:
        'Surtout de la taille des surfaces et de la part de travail manuel. Une machine tond vite un gazon dégagé, alors que joints, surfaces en gravier et talus prennent du temps. S’y ajoutent la longueur et la hauteur des haies, le nombre de passages pendant la période de croissance et l’évacuation des déchets verts. Si l’entretien du jardin est combiné avec la conciergerie, vous économisez des déplacements.',
    },
    {
      question: 'Pouvez-vous pulvériser un désherbant sur la place devant l’immeuble ?',
      answer:
        'Non, personne n’en a le droit. Les herbicides sont interdits sur les chemins, les places et les parkings ainsi que sur une bande de 50 cm le long de ceux-ci, de même que sur les toits et les terrasses. Nous retirons donc les mauvaises herbes mécaniquement : balayer, gratter les joints, désherber.',
    },
    {
      question: 'Notre haie de laurier-cerise doit-elle disparaître ?',
      answer:
        'Non. Les haies existantes peuvent rester et être taillées, ce sont la vente et la remise qui sont interdites depuis le 1er septembre 2024. L’OFEV conseille de couper les baies avant la maturité des graines. Sinon, les oiseaux emportent les graines plus loin, jusqu’en forêt.',
    },
    {
      question: 'La commune exige une taille, mais c’est la période de nidification. Que faire ?',
      answer:
        'L’espace au-dessus du trottoir et de la route doit rester libre, dans le canton de Lucerne par exemple selon les §§ 86 et 87 de la loi sur les routes. En été, nous ne coupons que ce qui dépasse dans cet espace, et seulement après avoir vérifié la présence de nids. La grande taille suit en hiver et est assez généreuse le long des chemins pour qu’il reste peu à reprendre l’année suivante.',
    },
    {
      question: 'Où vont l’herbe coupée, les feuilles et les branches ?',
      answer:
        'Il y a trois solutions : le conteneur à déchets verts de l’immeuble, le ramassage communal des déchets verts ou l’évacuation. Les branches peuvent aussi rester en tas dans un coin tranquille, les hérissons y passent l’hiver. Les parties de plantes envahissantes avec fleurs, graines ou racines vont aux ordures ménagères, jamais dans le compost du jardin.',
    },
    {
      question: 'Pouvons-nous confier uniquement les extérieurs, sans conciergerie ?',
      answer:
        'Oui, l’entretien des espaces verts existe comme prestation à part entière, même à côté d’une conciergerie existante. Le plan d’entretien précise alors quelles surfaces nous reprenons et lesquelles restent à la conciergerie.',
    },
    {
      question: 'Plantez-vous aussi de nouvelles haies ou créez-vous des plates-bandes ?',
      answer:
        'Non, nous ne proposons ni aménagement paysager ni nouvelles plantations, nous entretenons des extérieurs existants. Un conseil de la Station ornithologique pour les nouvelles haies : laisser assez de distance au chemin lors de la plantation, pour qu’il reste dégagé des années plus tard.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Si, en plus du gazon et des haies, la cage d’escalier, les installations techniques et les rondes de contrôle doivent être suivies.' },
    { path: '/leistungen/facility-services', text: 'Si les extérieurs doivent rejoindre le nettoyage et la conciergerie dans un contrat unique, suivi par une seule personne.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Si l’entrée et la cage d’escalier doivent rester aussi propres que la place devant l’immeuble, au même rythme.' },
  ],
  cta: {
    title: 'Plan d’entretien et devis pour vos extérieurs',
    text: 'Indiquez-nous le lieu, le type d’immeuble et les surfaces approximatives : mètres carrés de gazon, mètres de haie, chemins et places. Un plan des extérieurs aide aussi. Après la visite, vous recevez le plan d’entretien et le devis, gratuits et sans engagement.',
  },
}
