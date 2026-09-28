import type { ServicePageContent } from '../../types'

// Mêmes clés et sources que content/de (sources lues le 28.09.2026). Les sources sans version française sont liées en allemand.
export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Verre et façades',
  h1: 'Nettoyage de vitres et de façades pour entreprises et immeubles',
  lead: [
    'Des traces à contre-jour, des cadres gris et une façade verdie, tout le monde les voit en entrant dans le bâtiment. Nous nettoyons fenêtres, façades vitrées, vitrines et façades pour gérances, propriétaires et entreprises, de manière ponctuelle ou selon un rythme fixe.',
    'Vous trouverez ici ce qu’il faut régler avant le mandat : quel accès convient à quelle hauteur, où l’eau d’un nettoyage de façade peut s’écouler et comment informer les locataires. La check-list et le tableau des eaux usées s’impriment directement, l’avis aux locataires est à reprendre sur votre papier à en-tête.',
  ],
  facts: [
    { label: 'Surfaces', value: 'Fenêtres, façades vitrées, vitrines, cadres et façades' },
    { label: 'Façade', value: 'Haute pression si le matériau la supporte' },
    { label: 'Météo', value: 'Pas de travaux extérieurs par gel, tempête ou forte pluie' },
    { label: 'Non compris', value: 'Locaux intérieurs, peinture et réparations de la façade' },
    { label: 'À imprimer', value: 'Check-list et tableau des eaux usées' },
  ],
  scope: {
    title: 'Les surfaces que nous nettoyons',
    intro: 'Vous choisissez les surfaces à nettoyer. Les plus fréquentes :',
    items: [
      'Fenêtres côtés intérieur et extérieur, avec cadres et feuillures',
      'Fenêtres de la cage d’escalier et des locaux communs des immeubles d’habitation',
      'Façades vitrées, portes vitrées et cloisons vitrées',
      'Vitrines et entrées vitrées',
      'Tablettes de fenêtre et stores sur demande',
      'Façades, à haute pression si le matériau la supporte',
    ],
    notIncluded: [
      'Nettoyage des locaux intérieurs : voir [nettoyage d’entretien](/leistungen/unterhaltsreinigung) ou [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Vitres couvertes de mortier, de taches de peinture ou d’étiquettes après des travaux : voir [nettoyage de chantier](/leistungen/baureinigung).',
      'Rénovation, peinture et réparations de la façade.',
    ],
  },
  sections: [
    {
      title: 'Le bon moment dans l’année',
      paragraphs: [
        'La saleté sur le verre se voit surtout à contre-jour : aux entrées, aux vitrines et sur les façades vitrées que clients et locataires voient chaque jour. Outre un rythme fixe, une nouvelle location, une vente ou un événement dans l’immeuble sont des raisons typiques de prévoir une date.',
      ],
      items: [
        'Printemps : après la floraison principale des arbres, sinon le pollen se redépose sur le verre en quelques jours',
        'Automne : après la chute des feuilles et avant la saison sombre, quand le soleil bas révèle chaque trace',
        'Gel, tempête et forte pluie : les travaux extérieurs sont repoussés, prévoyez donc une date de réserve',
        'Avant une location ou une vente : ne nettoyer qu’une fois terminés les travaux qui font de la poussière dans l’immeuble',
      ],
    },
    {
      title: 'Eau pure, raclette, haute pression : quelle méthode pour quoi',
      paragraphs: [
        'Le verre accessible se nettoie avec de l’eau, un produit doux et une raclette, puis on essuie les cadres et les feuillures. Pour les vitres en hauteur, il existe des perches télescopiques alimentées en eau pure : déminéralisée, elle sèche sans taches de calcaire.',
        'Pour les façades, c’est le matériau qui décide. Les surfaces lisses et solides supportent souvent la haute pression, le crépi délicat, le bois ou la pierre naturelle ancienne demandent moins de pression ou une autre méthode. Le recours ou non à des produits de nettoyage détermine aussi ce qu’il faut faire des eaux usées.',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'checkliste-fenster',
      title: 'Check-list de la demande à la réception',
      intro: 'Avec ces informations, un devis pour les vitres et la façade peut être calculé avec précision. Le dernier groupe vous aide à contrôler le résultat.',
      groups: [
        {
          title: 'À préparer pour la demande',
          items: [
            'Adresse, type de bâtiment et nombre d’étages',
            'Nombre approximatif de fenêtres ou surface vitrée, avec des photos de la façade et de l’entrée',
            'Quelles fenêtres s’ouvrent et comment : vers l’intérieur, en oscillant seulement, ou vitrage fixe',
            'Matériau des cadres et de la façade, s’il est connu : bois, métal, plastique, crépi, pierre naturelle',
            'Surfaces souhaitées : extérieur, intérieur ou les deux, avec cadres, tablettes, stores',
            'Date ou rythme souhaité, et moments où personne ne doit être dérangé dans l’immeuble',
          ],
        },
        {
          title: 'En plus pour la façade',
          items: [
            'Surface totale des façades à nettoyer, en m²',
            'Ce qui gêne : voile gris, dépôt vert, taches',
            'Sol sous la façade : gazon, gravier, plates-bandes ou surface imperméabilisée',
            'Où mènent les grilles et regards autour du bâtiment : la commune vous renseigne',
            'Si l’immeuble se trouve dans une zone de protection des eaux souterraines ou près d’un ruisseau, d’une rivière ou d’un lac',
          ],
        },
        {
          title: 'Avant l’intervention',
          items: [
            'Informer les locataires ou le personnel, avec date, créneau horaire et remise des clés',
            'Faire dégager les tablettes intérieures et remonter les stores',
            'Garder libre la place pour un véhicule, une plateforme élévatrice ou un échafaudage',
            'Sur le trottoir ou la route : obtenir l’autorisation de la commune pour le domaine public',
            'Assurer l’accès au toit, à la cour ou au local technique si nécessaire',
          ],
        },
        {
          title: 'Réception après le nettoyage',
          items: [
            'Aucune trace n’est visible à contre-jour',
            'Le verre est propre jusque dans les coins, aussi au bord du cadre',
            'Cadres, feuillures et tablettes sont nettoyés, dans la mesure convenue',
            'À l’intérieur, il ne reste ni gouttes ni taches d’eau sur les sols et les tablettes',
            'Le parvis et les plates-bandes sous la façade sont exempts de résidus',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'aushang-mieterschaft',
      title: 'Avis aux locataires : modèle à adapter',
      intro: 'Les fenêtres qui ne se nettoient que de l’intérieur exigent l’accès aux logements ou aux bureaux. Reprenez le texte sur votre papier à en-tête, remplacez les indications entre crochets et affichez l’avis dans l’entrée.',
      columns: ['Élément', 'Texte de l’avis'],
      rows: [
        ['Titre', 'Nettoyage des fenêtres de votre logement le [date]'],
        ['Date', 'Le [date], entre [heure] et [heure], les fenêtres de l’immeuble [adresse] seront nettoyées. Certaines fenêtres ne peuvent être nettoyées que de l’intérieur.'],
        ['Accès', 'Merci d’être présent ou de déposer votre clé d’ici au [date] auprès de [gérance ou conciergerie].'],
        ['Préparation', 'Merci de retirer plantes et objets des tablettes de fenêtre et de remonter les stores.'],
        ['Empêchement', 'Si la date ne vous convient pas, merci de contacter [nom, téléphone] d’ici au [date].'],
        ['Expéditeur', '[Gérance], [lieu et date de l’avis]'],
      ],
    },
    {
      kind: 'table',
      id: 'zugang-hoehe',
      title: 'Fenêtres hautes et façades : quel accès convient',
      intro: 'La Suva préfère les mesures de protection techniques aux équipements de protection individuelle. Les fenêtres qui s’ouvrent vers l’intérieur permettent de nettoyer aussi la face extérieure en sécurité depuis l’intérieur. Pour toutes les autres surfaces, le tableau résume la publication de la Suva, complétée par l’autorisation pour le domaine public.',
      columns: ['Accès', 'Convient pour', 'Conditions et limites'],
      rows: [
        ['Perche télescopique', 'Surfaces lisses, depuis le sol ou un autre point sûr, jusqu’à 10 m de hauteur', 'Aucune échelle nécessaire, divers outils peuvent être fixés.'],
        ['Échelle', 'Travaux légers qui ne s’étendent pas sur de grandes surfaces, et seulement si aucun moyen plus sûr n’est envisageable', 'En principe le mauvais moyen de travail au-delà de 2 m de hauteur de chute. Si l’échelle doit malgré tout être utilisée, une protection contre les chutes est nécessaire. Selon les fabricants, les échelles mobiles à plateforme peuvent aussi être utilisées au-delà de 2 m de hauteur de chute.'],
        ['Échafaudage roulant', 'Nettoyage à des hauteurs faibles à moyennes', 'Hauteur de travail au plus 8 m à l’extérieur et 12 m à l’intérieur. Le sol doit être plan, stable et dégagé, la zone dangereuse sécurisée.'],
        ['Plateforme élévatrice mobile de personnel', 'Petits bâtiments ou travaux de faible ampleur sur de grands bâtiments', 'La place pour la plateforme doit être disponible et rester libre. Sur le trottoir ou la route, une autorisation de la commune est en règle générale nécessaire.'],
        ['Dispositif de sécurité dans le châssis', 'Travail depuis l’appui de fenêtre, posé depuis l’intérieur', 'Un spécialiste vérifie d’abord si les châssis conviennent. Accès aux locaux nécessaire.'],
        ['Équipement installé à demeure', 'Vitrages fixes et façades de grands bâtiments, sans ouvrir les fenêtres ni perturber l’exploitation', 'Selon la Suva, la meilleure solution et, à long terme, la plus économique. L’installer après coup est coûteux, souvent impossible.'],
        ['Travaux sur cordes', 'Cas exceptionnels, quand d’autres équipements ne sont pas possibles', 'Deux cordes fixées séparément, surveillance par une deuxième personne, sauvetage assuré.'],
      ],
      note: 'Si vous planifiez une construction, une transformation ou une rénovation, pensez dès le départ au nettoyage du verre et de la façade. Et demandez pour chaque devis avec quel accès le travail sera fait.',
      sources: [
        { label: 'Suva 44033 : nettoyer et entretenir les fenêtres, les façades et les toits en toute sécurité (décembre 2025)', href: 'https://www.suva.ch/44033.f' },
        { label: 'Ville de Lucerne : demande d’utilisation du domaine public (en allemand)', href: 'https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/formularabisz/13472/detail' },
        { label: 'Ville de Zoug : utilisation du domaine public lors de travaux (en allemand)', href: 'https://stadtzug.ch/de/bauen/bauvorhaben/benuetzung-oeffentlicher-grund' },
      ],
    },
    {
      kind: 'table',
      id: 'abwasser-fassade',
      title: 'Nettoyage de façades : où les eaux usées peuvent aller',
      intro: 'Il est interdit d’introduire directement ou indirectement dans une eau des substances de nature à la polluer, et de les laisser s’infiltrer (art. 6 LEaux). Cela vaut aussi pour les grilles qui mènent aux eaux pluviales. En attendant une aide à l’exécution intercantonale, les services de Lucerne, Zoug, Nidwald et Obwald s’appuient sur la notice des cantons de Bâle-Ville et de Bâle-Campagne (lettre du 26.03.2025).',
      columns: ['Situation', 'Ce que deviennent les eaux usées', 'À vérifier avant'],
      rows: [
        ['Sans produit de nettoyage, sol meuble, moins de 300 m²', 'Haute pression à l’eau froide, sans installation particulière', 'Surface totale des façades à nettoyer'],
        ['Sans produit de nettoyage, sol meuble, plus de 300 m²', 'Récupérer avec des rigoles, couvrir les grilles d’un filet ou d’un non-tissé, évacuer par la canalisation des eaux usées jusqu’à la station d’épuration', 'Auprès de la commune : les grilles et regards sont-ils raccordés à la canalisation des eaux usées ?'],
        ['Sans produit de nettoyage, sol imperméabilisé avec grilles', 'Couvrir grilles et rigoles, évacuer par la canalisation des eaux usées jusqu’à la station d’épuration', 'Comme ci-dessus. Si les grilles mènent aux eaux pluviales, l’eau de nettoyage ne doit pas y aller.'],
        ['Avec produits de nettoyage ou traitements anti-algues', 'Ni infiltration, ni déversement dans une eau ou dans les égouts : recueillir dans des rigoles et des récipients, traiter dans une installation de séparation', 'Quels produits sont utilisés. Pour les traitements anti-algues, si possible des substances actives dégradables. Informer l’autorité au moins trois jours ouvrables avant.'],
        ['Zone de protection des eaux souterraines S ou près d’un ruisseau, d’une rivière ou d’un lac', 'Aucun produit de nettoyage. Récupérer toute l’eau, couvrir les sols meubles, tout évacuer par la canalisation des eaux usées', 'Si l’immeuble se trouve dans une zone de protection. Informer l’autorité au moins trois jours ouvrables avant.'],
      ],
      note: 'Le devoir de diligence de la loi s’applique à chacun (art. 3 LEaux). Demandez donc pour chaque devis de nettoyage de façade : comment les eaux usées sont-elles récupérées, et où sont-elles évacuées ? La lettre des services de Suisse centrale ne vaut pas pour l’Argovie, où le service cantonal renseigne.',
      sources: [
        { label: 'Loi sur la protection des eaux, art. 3 et 6', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/fr#art_6' },
        { label: 'Notice nettoyage de façades des cantons de Bâle-Ville et Bâle-Campagne (en allemand)', href: 'https://www.bs.ch/publikationen/merkblatt-fassadenreinigung' },
        { label: 'Umwelt Zentralschweiz : protection de l’environnement et des eaux lors du nettoyage de façades, 26.03.2025 (en allemand)', href: 'https://www.azimv.ch/wp-content/uploads/2026/02/Merkblatt_Fassadenreinigung_1_Bestaetigung_Zentralschweiz.pdf' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Date et annonce',
      text: 'Une fois la date fixée, vous informez les locataires ou le personnel, le plus simplement avec l’avis de cette page. S’il faut le domaine public, l’autorisation de la commune doit être obtenue avant.',
    },
    {
      title: 'Nettoyage sur place',
      text: 'Le verre, les cadres et les surfaces de façade convenues sont nettoyés le jour prévu. Par gel, tempête ou forte pluie, la partie extérieure passe à la date de réserve.',
    },
    {
      title: 'Contrôle et date suivante',
      text: 'Vous contrôlez le résultat à contre-jour, idéalement avec la check-list ci-dessus. Avec un rythme fixe, vous planifiez tout de suite la date suivante.',
    },
  ],
  faq: [
    {
      question: 'Combien coûte le nettoyage de vitres et de façades ?',
      answer:
        'Nous n’indiquons pas de prix par fenêtre, car l’effort varie fortement. Il dépend du nombre et de la taille des vitres, des croisillons et des cadres, et du fait que les fenêtres s’ouvrent vers l’intérieur ou ne sont accessibles que de l’extérieur. S’y ajoutent l’accès (perche télescopique, plateforme élévatrice ou échafaudage), une éventuelle autorisation pour le domaine public, le degré de salissure et le choix de nettoyer l’intérieur, l’extérieur ou les deux. Pour les façades comptent la surface, le matériau, la méthode et l’effort pour les eaux usées.',
    },
    {
      question: 'À quel rythme faut-il nettoyer les fenêtres et les portes vitrées ?',
      answer:
        'Cela dépend de l’emplacement et de l’utilisation. Tout le monde voit et touche les entrées, les portes vitrées et les vitrines, elles demandent des intervalles plus courts que les fenêtres d’une cage d’escalier ou d’un entrepôt. Au bord d’une route très fréquentée, sous des arbres ou à côté d’un chantier, le verre se salit plus vite que dans un endroit calme.',
    },
    {
      question: 'Les locataires doivent-ils être présents le jour du nettoyage ?',
      answer:
        'Seulement si des fenêtres sont nettoyées de l’intérieur. Cela vaut pour chaque face intérieure et pour les fenêtres dont la face extérieure n’est accessible que de l’intérieur, par exemple parce qu’elles s’ouvrent vers l’intérieur. Le verre accessible de l’extérieur se nettoie sans accès au logement. Qui est absent peut déposer une clé, l’avis ci-dessus le prévoit.',
    },
    {
      question: 'Qui s’occupe des fenêtres dans les logements loués ?',
      answer:
        'Le Code des obligations prévoit que le locataire remédie à ses frais, conformément à l’usage local, aux défauts qui peuvent être éliminés par les menus travaux de nettoyage indispensables à l’entretien normal ([art. 259 CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_259)). Le bail et l’usage local déterminent si le nettoyage des fenêtres du logement en fait partie. Les fenêtres de la cage d’escalier et des locaux communs n’appartiennent à aucun logement en particulier. Si la gérance fait aussi nettoyer les fenêtres des logements, elle ne peut facturer ces frais comme frais accessoires que s’ils ont été convenus spécialement dans le bail ([art. 257a CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_257_a)). Vérifiez chaque cas avant de refacturer des frais.',
    },
    {
      question: 'Nettoyez-vous les façades à haute pression ?',
      answer:
        'Oui, si le matériau la supporte. Les cas délicats sont surtout le crépi fragile, le bois et la pierre naturelle ancienne. Selon la surface et les produits, l’eau doit être récupérée, le tableau des eaux usées indique dans quels cas.',
    },
    {
      question: 'Faut-il une autorisation si la plateforme élévatrice se trouve sur le trottoir ?',
      answer:
        'En règle générale, oui. Pour utiliser le domaine public, la Ville de Lucerne exige une demande avec un plan coté de la surface, suivie de l’autorisation ou d’une visite sur place. La Ville de Zoug reçoit en ligne les demandes pour le domaine public lors de travaux de construction, par exemple pour un échafaudage de façade. Pour une plateforme élévatrice utilisée lors d’un nettoyage, renseignez-vous auprès du département des constructions de la Ville. Dans les autres communes, l’administration des constructions renseigne. Déposez la demande tôt pour que la date tienne.',
    },
    {
      question: 'Qu’est-ce que l’eau pure ?',
      answer:
        'Une eau traitée dont on a retiré les minéraux dissous. Comme rien ne reste, elle sèche sur le verre sans taches de calcaire. Elle passe par des perches télescopiques alimentées en eau, qui permettent de nettoyer les vitres depuis le sol jusqu’à environ 10 m de hauteur.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Quand la cage d’escalier et les surfaces communes doivent aussi être nettoyées régulièrement, pas seulement le verre.' },
    { path: '/leistungen/baureinigung', text: 'Quand du mortier, de la peinture et des étiquettes collent au verre et aux cadres après des travaux.' },
    { path: '/leistungen/bueroreinigung', text: 'Quand les postes de travail, les sols et les sanitaires des bureaux et cabinets doivent aussi être nettoyés.' },
  ],
  cta: {
    title: 'Un devis pour vos vitres et votre façade',
    text: 'Envoyez-nous l’adresse, le nombre d’étages, le nombre approximatif de fenêtres et quelques photos. Après la visite, vous recevez le devis, gratuit et sans engagement.',
  },
}
