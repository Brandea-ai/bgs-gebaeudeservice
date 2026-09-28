import type { ServicePageContent } from '../../types'

// Mêmes clés que content/de (E85). Textes juridiques vérifiés le 28.09.2026 à la source primaire :
// OPA RS 832.30 (état au 1er mai 2018) art. 6, 9, 19, 43 ; LEaux RS 814.20 art. 6 et 7 ; Suva 84040 et 67075.
export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Production, entrepôt et atelier',
  h1: 'Nettoyage industriel et de halles pour la production et l’entreposage',
  lead: [
    'Sur les sols de halles restent des copeaux, de l’abrasion de pneus et des films d’huile, tandis que la poussière et le lubrifiant réfrigérant s’accumulent sur les machines. Une halle peut rarement s’arrêter pour le nettoyage.',
    'C’est pourquoi chaque zone a son propre rythme : les allées entre deux équipes, les locaux du personnel en dehors des pauses, les machines pendant les arrêts planifiés. Sur une installation, le nettoyage ne commence qu’une fois qu’elle est arrêtée et protégée contre toute remise en marche.',
  ],
  facts: [
    { label: 'Pour', value: 'Entreprises de production, de logistique et artisanales avec halles et ateliers' },
    { label: 'Horaires d’intervention', value: 'Entre deux équipes, pendant les pauses, les jours d’arrêt et les vacances d’entreprise' },
    { label: 'Avant la première intervention', value: 'Passation sécurité avec votre service de maintenance' },
    { label: 'Non compris', value: 'Entretien et réparation des machines' },
  ],
  scope: {
    title: 'Ce que comprend le nettoyage de halles',
    intro: 'Typique pour une mission en production et en entrepôt :',
    items: [
      'Sols de halles et de production en béton, avec revêtement ou en parquet industriel',
      'Zones de stockage, rayonnages et allées',
      'Machines et installations, sécurisées et selon les consignes de votre maintenance',
      'Ateliers et locaux annexes, locaux du personnel, vestiaires et sanitaires',
    ],
    notIncluded: [
      'Entretien et réparation des machines : cela reste l’affaire de votre maintenance ou du fabricant.',
      'Bureaux, réception et salles de réunion dans le même bâtiment : ils relèvent du [nettoyage de bureaux](/leistungen/bueroreinigung).',
      'Places, espaces verts et accès autour de la halle : voir [Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege).',
    ],
  },
  sections: [
    {
      title: 'Sols de halles et allées de circulation',
      paragraphs: [
        'Les grandes surfaces de halles se nettoient à l’autolaveuse. Elle brosse et aspire l’eau sale dans le même passage, si bien que le sol est vite de nouveau praticable à pied et en chariot. Dans les allées étroites entre les rayonnages à palettes, il faut une machine plus petite ou un travail manuel.',
        'Le produit dépend du revêtement et de la salissure. Le béton non imprégné absorbe l’huile, alors que les revêtements en résine époxy ou polyuréthane sont étanches mais peuvent se ternir avec des disques trop abrasifs. Le parquet industriel supporte très peu d’eau. Les flaques d’huile sont d’abord reprises avec un absorbant, sinon la machine étale le film sur toute l’allée.',
      ],
    },
    {
      title: 'Copeaux, huile et lubrifiant réfrigérant sur les machines',
      paragraphs: [
        'Autour des machines-outils, les copeaux s’accumulent sur les capots, autour du socle et au sol, avec du lubrifiant réfrigérant et la poussière d’usinage. Les copeaux vont dans l’aspirateur industriel. Soufflés à l’air comprimé, ils finissent plus loin dans la machine ou dans l’allée voisine.',
        'C’est votre maintenance qui décide ce qui est nettoyé sur une installation : surfaces extérieures, bacs et capots, ou aussi des parties intérieures accessibles seulement à l’arrêt. Les produits qu’une surface supporte figurent en général dans la notice d’utilisation du fabricant.',
        'L’ordonnance sur la prévention des accidents prévoit que les machines soient mises dans un état sans danger avant le nettoyage. La passation sécurité ci-dessous règle la manière de le faire dans votre entreprise.',
      ],
    },
    {
      title: 'Occasions typiques en production et en entrepôt',
      items: [
        'Audit, certification ou visite de client : nettoyage bien avant la date, voir la liste de contrôle ci-dessous',
        'Vacances d’entreprise et révisions : nettoyage en profondeur des sols, rayonnages et machines pendant que tout est à l’arrêt',
        'Changement de production ou nouvelle ligne : nettoyage avant l’installation de l’équipement',
        'Changement de locataire d’une halle commerciale : nettoyage avant la remise, sur mandat des propriétaires ou de la gérance',
        'Des horaires de nettoyage fixes plutôt qu’un nettoyage fait à côté, lorsque le personnel s’en charge aujourd’hui lui-même',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'sicherheits-uebergabe',
      title: 'Passation sécurité avant la première intervention',
      intro:
        'Lorsque des travailleurs de plusieurs entreprises sont occupés sur un même lieu de travail, leurs employeurs doivent convenir des mesures de sécurité et s’informer réciproquement des risques (OPA art. 9). Les machines doivent être mises dans un état sans danger avant le nettoyage (art. 43). Cette liste vous permet de passer les deux points en revue avec votre maintenance.',
      groups: [
        {
          title: 'Machines et installations',
          items: [
            'Qui arrête l’installation et la protège contre toute remise en marche, par exemple avec un cadenas sur le sectionneur ?',
            'Les énergies résiduelles sont-elles éliminées : pression dans la pneumatique et l’hydraulique, chaleur, pièces qui tournent encore ou sont en position haute ?',
            'Quelles pièces l’équipe de nettoyage peut-elle toucher, lesquelles restent réservées à la maintenance ?',
            'Quels produits et procédés sont autorisés pour les surfaces : eau, haute pression, solvants ?',
            'Qui contrôle l’installation après le nettoyage et la remet en service ?',
          ],
        },
        {
          title: 'Halle et circulation',
          items: [
            'Quel équipement de protection est obligatoire dans quelle zone, par exemple chaussures de sécurité, protection de l’ouïe ou gilet de signalisation ?',
            'Où et quand circulent les chariots élévateurs, et quels passages restent ouverts pendant le nettoyage ?',
            'Quelles zones sont interdites ou accessibles seulement avec accompagnement ?',
            'Comment les surfaces mouillées sont-elles balisées jusqu’à ce qu’elles soient sèches ?',
          ],
        },
        {
          title: 'Substances et eaux usées',
          items: [
            'Quelles substances dangereuses sont stockées ou utilisées dans la zone, et où se trouvent les fiches de données de sécurité ?',
            'Où l’eau sale de l’autolaveuse peut-elle être vidée ? Une eau contenant de l’huile ne doit pas aller dans une grille qui mène à une infiltration ou à un cours d’eau (LEaux art. 6 et 7).',
            'Où les absorbants et chiffons imbibés d’huile sont-ils collectés, et qui les élimine ?',
          ],
        },
        {
          title: 'Interlocuteurs et urgences',
          items: [
            'Qui est joignable dans l’entreprise pendant l’intervention, y compris en dehors des heures de bureau ?',
            'Où se trouvent les sorties de secours, les extincteurs, le matériel de premiers secours et la douche oculaire ?',
            'À qui signaler un dommage, une panne ou un presque-accident ?',
          ],
        },
      ],
      note: 'Cette liste ne remplace ni l’identification des dangers de votre entreprise ni l’instruction sur place. Vérifiez au cas par cas quelles règles de votre branche s’appliquent en plus.',
      sources: [
        { label: 'Ordonnance sur la prévention des accidents et des maladies professionnelles (OPA, RS 832.30), art. 9 et 43', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/fr#art_9' },
        { label: 'Suva : huit règles vitales pour la maintenance (règles 3 et 4)', href: 'https://www.suva.ch/fr-ch/prevention/regles-vitales-et-dispositions/les-regles-vitales-au-travail/videos-regles-vitales-pour-la-maintenance' },
        { label: 'Suva : liste de contrôle Mesures de protection contre les démarrages intempestifs (67075)', href: 'https://www.suva.ch/67075.F' },
        { label: 'Loi fédérale sur la protection des eaux (LEaux, RS 814.20), art. 6 et 7', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/fr#art_6' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zonenplan',
      title: 'Plan de nettoyage par zone (exemple)',
      intro:
        'Une halle comporte des zones aux rythmes très différents. Voici à quoi peut ressembler le plan d’une halle de production ou d’entreposage. Chez vous, la fréquence et les créneaux dépendent des équipes, du trafic et de la vitesse à laquelle la salissure s’accumule.',
      columns: ['Zone', 'Salissure typique', 'Fréquence (exemple)', 'Créneau', 'Points d’attention'],
      rows: [
        ['Allées et voies de circulation', 'Poussière, abrasion de pneus, copeaux égarés', 'de quotidienne à hebdomadaire, selon le trafic des chariots', 'entre deux équipes, par tronçons', 'garder le marquage au sol visible, baliser les tronçons mouillés'],
        ['Production', 'Copeaux, films d’huile et de graisse, lubrifiant réfrigérant', 'selon l’encrassement', 'pauses, changements d’équipe, jours d’arrêt', 'reprendre d’abord les flaques d’huile avec un absorbant, puis nettoyer à l’eau'],
        ['Entrepôt et rayonnages', 'Poussière sur le sol, les lisses et la marchandise', 'à intervalles plus longs, environ mensuelle à trimestrielle', 'périodes avec peu d’entrées et de sorties de marchandise', 'ne déplacer la marchandise qu’avec autorisation, en hauteur seulement avec des moyens adaptés'],
        ['Locaux du personnel, vestiaires, sanitaires', 'Hygiène, consommables', 'chaque jour ouvrable', 'en dehors des pauses', 'recharger savon et papier, chiffons séparés pour WC et cuisine'],
        ['Machines et installations', 'Dépôts, copeaux, poussière d’usinage', 'selon les consignes de la maintenance', 'arrêts planifiés, révisions, vacances d’entreprise', 'uniquement arrêtées et sécurisées, uniquement avec des produits autorisés'],
      ],
      note: 'Une combinaison est souvent judicieuse : un nettoyage courant selon ce plan et un nettoyage en profondeur des sols, rayonnages et machines pendant les vacances d’entreprise, quand tout est à l’arrêt.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'vor-dem-audit',
      title: 'Avant un audit ou une visite de client',
      intro:
        'Une visite passe en général par les voies de circulation, la production, l’entrepôt et les locaux du personnel. Planifiez le nettoyage en deux étapes pour que rien ne soit encore mouillé ou balisé le jour même.',
      groups: [
        {
          title: 'Une semaine avant',
          items: [
            'Définir le parcours de la visite : réception des marchandises, production, entrepôt, locaux du personnel',
            'Choisir la date du nettoyage pour que les sols soient secs et dégagés avant la visite',
            'Faire nettoyer les surfaces des machines lors du prochain arrêt planifié, pas le jour de l’audit',
            'Dépoussiérer rayonnages, étagères et tablettes de fenêtre le long du parcours',
          ],
        },
        {
          title: 'La veille',
          items: [
            'Voies de circulation dégagées et marquage au sol bien visible (selon l’OPA, les passages doivent au besoin être signalés, art. 19)',
            'Pas de film d’huile ou de graisse sur les sols où circulent des personnes',
            'Sorties de secours et voies d’évacuation dégagées, rien d’entreposé devant',
            'Locaux du personnel et sanitaires nettoyés, savon et papier rechargés',
            'Poubelles et conteneurs de recyclage vidés, abords des bennes propres',
          ],
        },
      ],
      sources: [
        { label: 'Ordonnance sur la prévention des accidents et des maladies professionnelles (OPA, RS 832.30), art. 19', href: 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/fr#art_19' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Plan par zone',
      text: 'Chaque zone reçoit une fréquence et un créneau, adaptés aux équipes, au trafic des chariots et aux arrêts. Le plan d’exemple ci-dessus montre à quoi cela peut ressembler.',
      figure: 'besichtigung',
    },
    {
      title: 'Passation sécurité',
      text: 'Avant la première intervention, votre maintenance et notre équipe passent la liste de contrôle en revue : arrêt des machines, équipement de protection, voies de circulation, produits autorisés.',
      figure: 'offerte',
    },
    {
      title: 'Interventions au rythme de l’entreprise',
      text: 'Le nettoyage a lieu dans les créneaux convenus. Si les équipes ou les lignes changent, le plan est adapté avant l’intervention suivante.',
      figure: 'start',
    },
  ],
  faq: [
    {
      question: 'Combien coûte un nettoyage industriel ?',
      answer:
        'Le prix dépend surtout de la surface et du nombre de zones, du type de salissure (la poussière s’enlève plus vite que l’huile ou un lubrifiant incrusté), du revêtement de sol et de la possibilité de passer avec une autolaveuse. S’y ajoutent les créneaux, par exemple des interventions en dehors des heures de travail habituelles ou pendant de courts arrêts, ainsi que le nombre de machines et leur accessibilité. Nous donnons un chiffre après avoir parcouru la halle.',
    },
    {
      question: 'Pouvez-vous nettoyer pendant l’exploitation ?',
      answer:
        'Dans beaucoup de zones, oui. Les allées, l’entrepôt et les locaux du personnel peuvent en général être nettoyés en cours d’exploitation, par tronçons et avec les surfaces mouillées balisées. Les zones directement voisines d’installations en marche sont traitées pendant les pauses, entre deux équipes ou lors des arrêts.',
    },
    {
      question: 'Qui arrête les machines avant le nettoyage ?',
      answer:
        'C’est la passation sécurité avant la première intervention qui le règle, installation par installation. L’ordonnance sur la prévention des accidents exige que les machines soient mises dans un état sans danger avant le nettoyage (OPA art. 43) et que les entreprises concernées se coordonnent (art. 9). Ensuite, pour chaque installation, il est clair qui l’arrête, la sécurise et la remet en service.',
    },
    {
      question: 'Quelles règles s’appliquent à votre équipe dans notre halle ?',
      answer:
        'Vos règles de sécurité et d’exploitation, des allées réservées aux chariots jusqu’aux lunettes de protection à la machine. Selon l’OPA art. 6, votre entreprise informe aussi les travailleurs d’autres entreprises des risques à leur poste de travail. Le moment le plus simple pour cela est la passation sécurité.',
    },
    {
      question: 'Comment nettoie-t-on un sol de halle souillé d’huile ?',
      answer:
        'Les flaques d’huile sont d’abord reprises avec un absorbant. L’autolaveuse nettoie ensuite la surface avec un dégraissant adapté au revêtement. L’eau sale contient alors de l’huile et ne doit pas aller dans une grille qui mène à une infiltration ou à un cours d’eau (loi sur la protection des eaux, art. 6).',
    },
    {
      question: 'À quelle fréquence faut-il nettoyer une halle de production ?',
      answer:
        'Ce n’est pas la halle, mais chaque zone qui a son rythme. Les locaux du personnel et les sanitaires demandent un entretien chaque jour ouvrable, les allées de quotidien à hebdomadaire selon le trafic, les rayonnages et les machines à intervalles plus longs ou pendant les arrêts. Le plan d’exemple de cette page montre une répartition typique.',
    },
    {
      question: 'Comment préparer la halle à un audit ?',
      answer:
        'Avec suffisamment d’avance : les sols doivent être secs et dégagés avant la visite, les machines nettoyées lors du dernier arrêt planifié. La liste de contrôle pour les audits, sur cette page, répartit les points entre une semaine avant et la veille.',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Après la construction ou la transformation d’une halle, avant l’arrivée des rayonnages et des installations.' },
    { path: '/leistungen/bueroreinigung', text: 'Pour les bureaux, la réception et les salles de réunion du même bâtiment, avec leur propre rythme.' },
    { path: '/leistungen/facility-services', text: 'Si, en plus de la halle, la conciergerie et les abords du site doivent être confiés à un seul prestataire.' },
  ],
  cta: {
    title: 'Un devis pour votre halle',
    text: 'Pour le devis, il nous est utile de connaître la surface de la halle en mètres carrés, les revêtements de sol, les horaires des équipes et les arrêts prévus, ainsi que la liste des machines à nettoyer. Un plan avec les zones fait gagner du temps lors de la visite. La visite et le devis sont gratuits et sans engagement.',
  },
}
