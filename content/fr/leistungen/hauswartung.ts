import type { ServicePageContent } from '../../types'

// Mêmes clés que content/de/leistungen/hauswartung.ts (E85). Termes juridiques repris de la version
// française du CO et du CC sur fedlex, du BPA et de la directive AEAI 16-15fr, lus le 28.09.2026.
// Les sources disponibles seulement en allemand sont signalées dans le libellé.
export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Conciergerie d’immeubles d’habitation et de bureaux',
  lead: [
    'Nous assurons la conciergerie selon un cahier des charges écrit : quelles tâches, à quelle fréquence, jusqu’à quel montant sans demander et qui reçoit nos signalements.',
    'Ainsi, la gérance, les propriétaires et les locataires savent à quoi s’attendre, et personne ne doit deviner qui s’occupe de la tache d’humidité à la cave. Le cahier des charges et la liste de contrôle de la ronde se trouvent plus bas, prêts à imprimer. Le cahier des charges permet aussi de comparer plusieurs devis ligne par ligne.',
  ],
  facts: [
    { label: 'Biens', value: 'Immeubles locatifs, PPE, immeubles d’habitation et commerciaux' },
    { label: 'Base', value: 'Cahier des charges avec tâches, fréquence et voies de signalement' },
    { label: 'Petites réparations', value: 'Jusqu’au plafond que vous fixez dans le cahier des charges' },
    { label: 'Non compris', value: 'Service hivernal, piquet, entretien des installations' },
  ],
  scope: {
    title: 'Ce que la conciergerie prend en charge',
    intro: 'Le cahier des charges de votre immeuble se compose à partir de ces tâches. Vous choisissez ce que vous confiez, aussi à l’unité.',
    items: [
      'Rondes de contrôle à la fréquence convenue : vérifier que tout est en ordre et signaler les défauts',
      'Nettoyer la cage d’escalier et l’entrée et les maintenir en ordre',
      'Maintenir propres la buanderie et les séchoirs',
      'Petites réparations, par exemple remplacer des ampoules',
      'Surveiller la technique du bâtiment et signaler les pannes',
      'Participer aux états des lieux',
      'Organiser l’élimination des déchets et des matériaux recyclables',
      'Entretien des abords, voir [Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Service hivernal et déneigement.',
      'Service de piquet et d’urgence 24 heures sur 24.',
      'Réparations importantes et travaux d’artisans : la gérance les confie à une entreprise spécialisée.',
      'Entretien du chauffage, de la ventilation, de l’ascenseur et des installations de protection incendie, qui demande des entreprises spécialisées.',
    ],
  },
  sections: [
    {
      title: 'Quand confier la conciergerie',
      paragraphs: [
        'Il y a souvent un motif précis. Le concierge de longue date part à la retraite, une gérance reprend un immeuble sans conciergerie, ou plus personne dans la communauté des copropriétaires ne veut surveiller l’emplacement des déchets et la buanderie.',
        'On confie des tâches, pas des décisions. Les ordres de réparation, le choix des entreprises spécialisées et la reprise des appartements restent du ressort de la gérance ou des propriétaires. La conciergerie leur fournit la base : elle voit ce qui ne va pas dans l’immeuble et le signale au bon endroit.',
      ],
    },
    {
      title: 'Ronde de contrôle : voir, réparer, signaler',
      paragraphs: [
        'Lors de la ronde, la conciergerie parcourt les parties communes, de l’entrée à l’emplacement des déchets en passant par la cave et la buanderie. Les petites choses, comme une ampoule grillée, elle les règle elle-même. Tout le reste est transmis à l’interlocuteur inscrit dans le cahier des charges.',
        'Pour les propriétaires, il y a aussi un aspect juridique : le propriétaire d’un bâtiment répond du dommage causé par le défaut d’entretien (art. 58 CO). Des rondes régulières aident à remarquer un nez de marche décollé ou un escalier de cave mal éclairé avant que quelqu’un ne tombe.',
      ],
    },
    {
      title: 'Technique du bâtiment : observer, pas entretenir',
      paragraphs: [
        'Le chauffage, la ventilation, l’ascenseur et la protection incendie sont entretenus par des entreprises spécialisées. La conciergerie les observe à chaque ronde et signale ce qui attire l’attention : un message d’erreur sur l’écran du chauffage, un robinet qui goutte à la buanderie, un ascenseur qui ne s’arrête pas à niveau. La gérance peut ainsi faire venir l’entreprise tant que la panne reste petite.',
      ],
    },
    {
      title: 'États des lieux',
      paragraphs: [
        'Lors d’un changement de locataire, la conciergerie peut ouvrir l’appartement, remettre les clés et relever les compteurs. L’état des lieux et le procès-verbal restent du ressort de la gérance. Comme l’association des locataires (Mieterverband) ne compte pas ces interventions dans les frais accessoires, il vaut la peine de les saisir séparément du nettoyage et des rondes.',
        'Si l’appartement a besoin d’un nettoyage final avant la remise, le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung) s’en charge.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflichtenheft',
      title: 'Cahier des charges de la conciergerie à remplir',
      intro:
        'Inscrivez pour chaque zone la fréquence et le responsable. Un arrangement oral devient ainsi un mandat que la gérance, les propriétaires et la conciergerie comprennent de la même façon.',
      columns: ['Zone', 'Tâches', 'Fréquence', 'Responsable ou signalement à'],
      rows: [
        ['Ronde de contrôle', 'Contrôler l’éclairage, les portes, les boîtes aux lettres, la buanderie, la cave, la chaufferie et l’emplacement des déchets pour les défauts visibles, noter les constats', '__________', '__________'],
        ['Cage d’escalier, entrée et buanderie', 'Nettoyer sols, rampes et mains courantes, maintenir propres buanderie et séchoirs ; signaler les objets laissés sur la voie d’évacuation et les pannes des machines', '__________', '__________'],
        ['Petites réparations', 'Par exemple remplacer des ampoules, huiler les serrures ; sans demander jusqu’à CHF ______ par cas', 'selon les besoins', '__________'],
        ['Technique du bâtiment', 'Observer chauffage, ventilation, ascenseur et équipements de protection incendie ; l’entretien revient à l’entreprise spécialisée', 'à chaque ronde', '__________'],
        ['Déchets', 'Organiser déchets et matériaux recyclables, tenir propre le point de collecte', '__________', '__________'],
        ['Abords', 'Pelouses, haies, massifs, chemins et places', 'selon le plan d’entretien', '__________'],
        ['États des lieux', 'Ouvrir l’appartement, remettre les clés, relever les compteurs ; la gérance fait l’état des lieux et le procès-verbal', 'selon les besoins', 'Gérance'],
        ['Clés et matériel', 'Quelles clés, badges et codes, où ils sont conservés, qui signe la remise ; qui fournit produits de nettoyage, ampoules et appareils et où ils sont entreposés', 'à fixer une fois', '__________'],
        ['Entreprises spécialisées', 'Chauffage, ascenseur, protection incendie et réparations importantes : qui mandate, qui paie', 'à fixer une fois', 'Gérance'],
        ['Locataires', 'À qui s’adressent les locataires, affichage à l’entrée', 'à fixer une fois', '__________'],
        ['Expressément non compris', 'Par exemple service hivernal, service de piquet et d’urgence', 'sans objet', 'sans objet'],
      ],
      note:
        'Chez nous, cette liste devient le cahier des charges de votre immeuble après le tour des lieux. En PPE, l’assemblée des copropriétaires approuve chaque année le budget, les comptes et la répartition des frais (art. 712m CC). Un cahier des charges lui montre ce qu’elle paie.',
      sources: [
        { label: 'Art. 712m CC, attributions de l’assemblée des copropriétaires', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr#art_712_m' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'kontrollgang',
      title: 'Ronde de contrôle : liste à cocher',
      intro:
        'Le propriétaire d’un bâtiment répond du dommage causé par le défaut d’entretien (art. 58 CO). Le BPA recommande donc aux propriétaires de contrôler régulièrement leurs ouvrages, de documenter ces contrôles et d’effectuer les travaux d’entretien nécessaires. Cette liste couvre les parties communes d’un immeuble locatif.',
      groups: [
        {
          title: 'Entrée et cage d’escalier',
          items: [
            'L’éclairage de l’entrée, de la cage d’escalier et des couloirs fonctionne, minuteries et détecteurs de mouvement réagissent',
            'Marches, nez de marche et revêtements sans risque de trébucher, mains courantes solides',
            'Voie d’évacuation dégagée : ni vélos, ni meubles, ni objets combustibles dans la cage d’escalier (AEAI 16-15, chiffre 2.2)',
            'La porte d’entrée se ferme et s’ouvre dans le sens de la fuite sans clé (AEAI 16-15, chiffre 2.5.5)',
            'Boîtes aux lettres et tableau des sonnettes intacts',
          ],
        },
        {
          title: 'Cave, buanderie et technique du bâtiment',
          items: [
            'Lave-linge et séchoirs sans message d’erreur, écoulements libres',
            'Pas de taches d’eau, d’humidité ni de robinets qui gouttent',
            'Chauffage sans message de panne, chaufferie rangée et fermée à clé',
            'L’ascenseur s’arrête à niveau, extincteurs en place et plombés',
          ],
        },
        {
          title: 'Abords et emplacement des déchets',
          items: [
            'L’éclairage extérieur fonctionne, chemins et escaliers sans risque de trébucher',
            'Garde-corps, portails et clôtures solides',
            'Emplacement des déchets propre, conteneurs complets et fermés',
            'Jeux sans dommages visibles, s’il y en a',
          ],
        },
        {
          title: 'Consigner',
          items: [
            'Date et nom',
            'Constat avec lieu, avec photo si utile',
            'Signalé à qui et quand',
            'Réglé le, par qui',
          ],
        },
      ],
      note:
        'Cette liste ne remplace pas un conseil juridique. Les contrôles et la fréquence nécessaires pour votre immeuble se clarifient au cas par cas, par exemple avec votre assurance.',
      sources: [
        { label: 'Art. 58 CO, responsabilité du propriétaire d’ouvrage', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_58' },
        { label: 'BPA : Responsabilité du propriétaire d’ouvrage', href: 'https://www.bfu.ch/fr/services/aspects-juridiques/responsabilite-du-proprietaire-d-ouvrage' },
        { label: 'Directive de protection incendie AEAI 16-15, voies d’évacuation et de sauvetage (PDF)', href: 'https://services.vkg.ch/rest/public/georg/bs/publikation/documents/BSPUB-1394520214-83.pdf/content' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'wer-bezahlt',
      title: 'Menus travaux et frais accessoires : qui fait, qui paie',
      intro:
        'Pour chaque tâche, deux questions comptent : qui la fait, et si les coûts peuvent passer par les frais accessoires. Les frais accessoires ne sont à la charge du locataire que si cela a été convenu spécialement (art. 257a CO), et seulement pour des prestations en rapport avec l’usage de la chose (art. 257b CO).',
      columns: ['Tâche', 'Qui fait', 'Qui paie'],
      rows: [
        ['Remplacer une ampoule dans son propre appartement, déboucher le siphon du lavabo', 'Locataire', 'Locataire, au titre des menus travaux d’entretien selon l’usage local (art. 259 CO)'],
        ['Nettoyer cage d’escalier, buanderie et abords', 'Conciergerie', 'Par les frais accessoires si le bail mentionne la conciergerie comme poste, sinon compris dans le loyer'],
        ['Remplacer les ampoules de la cage d’escalier et de la cave, huiler les serrures', 'Conciergerie', 'Comme le nettoyage, tant qu’aucune connaissance spécialisée n’est nécessaire'],
        ['Ouvrir un appartement pour un état des lieux ou une visite', 'Conciergerie, sur mandat de la gérance', 'Propriétaire : l’association des locataires ne compte pas ces travaux dans les frais accessoires'],
        ['Réparation qui demande un professionnel, par exemple déboucher la conduite principale', 'Entreprise spécialisée, mandatée par la gérance', 'Propriétaire, qui doit entretenir la chose louée dans un état approprié à l’usage (art. 256 CO)'],
      ],
      note:
        'La loi ne dit pas où s’arrêtent les menus travaux. Une règle empirique répandue fixe environ CHF 150 par cas ; les tribunaux se demandent aujourd’hui surtout s’il faut un professionnel. L’association des locataires conseille aux locataires de demander le détail des activités de la conciergerie et des heures consacrées. Un cahier des charges qui sépare exploitation et réparations rend votre décompte vérifiable. Cette remarque ne remplace pas un conseil juridique.',
      sources: [
        { label: 'Art. 256, 257a, 257b et 259 CO', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_256' },
        { label: 'Association des locataires (Mieterverband) : menus travaux d’entretien (en allemand)', href: 'https://www.mieterverband.ch/mietrecht/waehrend-der-miete/kleiner-unterhalt/' },
        { label: 'Association des locataires (Mieterverband) : fiche sur les frais accessoires non admis, 2026 (PDF, en allemand)', href: 'https://www.mieterverband.ch/upd_fm_media/ratgeber-mietrecht/topthemen/heiz-und-nebenkosten/2026_merkblatt_unzulaessige_nebenkosten.pdf/' },
        { label: 'HEV Schweiz, association des propriétaires : menus travaux d’entretien (en allemand)', href: 'https://www.hev-schweiz.ch/vermieten/mietrecht/mietvertrag/kleiner-unterhalt' },
        { label: 'HEV Schweiz, association des propriétaires : décomptes de frais accessoires (en allemand)', href: 'https://www.hev-schweiz.ch/vermieten/nebenkostenabrechnungen' },
      ],
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Finaliser le cahier des charges',
      text: 'La base est la liste écrite établie après le tour des lieux. Vous supprimez ou ajoutez des tâches, fixez le plafond des petites réparations et désignez l’interlocuteur qui reçoit les signalements.',
      figure: 'offerte',
    },
    {
      title: 'Démarrage dans l’immeuble',
      text: 'À la date de début, la conciergerie reçoit les clés et accès prévus dans le cahier des charges. Un avis à l’entrée indique aux locataires à qui s’adresser désormais.',
      figure: 'start',
    },
    {
      title: 'Rondes à la fréquence prévue',
      text: 'La conciergerie parcourt l’immeuble à la fréquence du cahier des charges, de l’entrée à la chaufferie, et règle aussitôt les petites choses.',
      figure: 'besichtigung',
    },
    {
      title: 'Signaler et mettre à jour',
      text: 'Ce qui demande une entreprise spécialisée est transmis à l’interlocuteur convenu. Si l’immeuble a besoin de plus ou de moins par la suite, le cahier des charges est adapté.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Que comprend la conciergerie d’immeubles ?',
      answer:
        'Pour l’essentiel, trois choses : tenir propres les parties communes, contrôler régulièrement et régler les petites choses, signaler les pannes au bon endroit. Selon l’immeuble s’y ajoutent les déchets, les abords et les états des lieux. Ce que vous confiez figure dans le cahier des charges.',
    },
    {
      question: 'De quoi dépend le coût d’une conciergerie ?',
      answer:
        'Surtout du nombre d’appartements et de cages d’escalier, de la fréquence des rondes et du nettoyage, de la surface des abords, du nombre de changements de locataires par an et de qui fournit le matériel. Nous calculons le montant après avoir vu l’immeuble. Pour le décompte des frais accessoires, il vaut la peine de présenter le nettoyage et les contrôles séparément des états des lieux et des réparations.',
    },
    {
      question: 'Un nettoyage d’entretien ne suffit-il pas pour la cage d’escalier ?',
      answer:
        'S’il s’agit seulement de nettoyer, oui : le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) convient alors. La conciergerie devient nécessaire dès que quelqu’un doit repérer les défauts, régler les petites choses et transmettre les pannes.',
    },
    {
      question: 'À quelle fréquence la conciergerie devrait-elle passer ?',
      answer:
        'L’art. 58 CO ne fixe aucune fréquence. Tout dépend de la taille, de l’âge et de l’usage : un immeuble avec ascenseur, buanderie commune et beaucoup de changements de locataires demande plus de présence qu’une petite PPE. La fréquence figure dans le cahier des charges et peut être adaptée.',
    },
    {
      question: 'Que doivent réparer les locataires eux-mêmes ?',
      answer:
        'Les menus travaux de nettoyage ou de réparation dans leur propre appartement, faisables sans professionnel, comme remplacer une ampoule ou déboucher le siphon du lavabo (art. 259 CO). Ce qui demande un professionnel incombe au bailleur. Le tableau plus haut montre la place de la conciergerie.',
    },
    {
      question: 'Comment documenter les rondes de contrôle ?',
      answer:
        'De façon à pouvoir montrer plus tard ce qui a été contrôlé et signalé, et quand : date, constat avec lieu, signalé à qui, réglé le. Le BPA recommande aux propriétaires de documenter leurs contrôles. La liste plus haut contient ces champs, prête à imprimer.',
    },
    {
      question: 'Qui décide de la conciergerie dans une PPE ?',
      answer:
        'L’assemblée des copropriétaires règle les affaires administratives qui ne sont pas de la compétence de l’administrateur et approuve chaque année le budget et les comptes (art. 712m CC). L’administrateur exécute ses décisions (art. 712s CC). Les copropriétaires supportent les frais proportionnellement à la valeur de leurs parts (art. 712h CC). La majorité nécessaire pour attribuer le mandat figure dans votre règlement.',
    },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Quand pelouses, haies et massifs demandent leur propre plan d’entretien.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Quand l’immeuble a seulement besoin de nettoyage, sans rondes ni petites réparations.' },
    { path: '/leistungen/facility-services', text: 'Quand vous préférez ne pas confier séparément nettoyage, conciergerie et abords.' },
  ],
  cta: {
    title: 'Cahier des charges et devis pour votre immeuble',
    text: 'Pour le devis, il nous faut l’adresse, le nombre d’appartements et de cages d’escalier, et les tâches que vous souhaitez confier. Si vous avez déjà un cahier des charges, mentionnez-le dans votre message. Le tour des lieux et le devis sont gratuits et sans engagement.',
  },
}
