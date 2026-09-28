import type { ServicePageContent } from '../../types'

export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Changement de locataire et remise',
  h1: 'Nettoyage de fin de bail et de déménagement avec garantie de remise',
  lead: [
    'Lors de la restitution d’un logement, la gérance le contrôle pièce par pièce, du four au compartiment de cave, et consigne chaque défaut dans le procès-verbal d’état des lieux. Entre le déménagement et l’état des lieux, il reste en général peu de temps pour le nettoyage, et la date est fixe.',
    'Nous réalisons le nettoyage de fin de bail d’appartements et de surfaces commerciales pour des gérances, des propriétaires et des entreprises, avec garantie de remise. Vous trouverez aussi sur cette page la liste de contrôle à imprimer pour l’état des lieux, les règles sur l’avis des défauts et les termes de résiliation des cantons de Lucerne, Zoug, Argovie, Nidwald et Obwald.',
  ],
  facts: [
    { label: 'Garantie', value: 'Nouveau passage si notre nettoyage est contesté, pas pour les dégâts ni l’usure' },
    { label: 'Moment', value: 'Entre le déménagement et l’état des lieux, ou juste après le procès-verbal' },
    { label: 'Demande', value: 'Dès réception de la résiliation' },
    { label: 'Pas pour', value: 'Locataires d’appartements individuels' },
  ],
  scope: {
    title: 'Ce que comprend le nettoyage final',
    intro: 'Travaux typiques du nettoyage final d’un appartement :',
    items: [
      'Cuisine : four avec ses tôles, plan de cuisson, hotte, réfrigérateur et armoires, à l’intérieur et à l’extérieur',
      'Salle de bains et WC : robinetterie, carrelage, joints et miroirs, détartrés',
      'Fenêtres côtés intérieur et extérieur, avec cadres, feuillures et tablettes',
      'Stores et volets, si convenu',
      'Armoires encastrées, portes, encadrements, interrupteurs et prises',
      'Sols et plinthes dans toutes les pièces',
      'Balcon ou terrasse, compartiments de cave et de galetas',
    ],
    notIncluded: [
      'Mandats de locataires d’appartements individuels. Nous nous occupons des villas et des résidences dans le cadre de notre [offre Premium](/premium).',
      'Transport de déménagement, débarras et élimination de meubles.',
      'Réparations, travaux de peinture et remise en état de dégâts, même s’ils figurent dans le procès-verbal d’état des lieux.',
      'Nettoyage en profondeur sans changement d’occupant, par exemple des sols ou du carrelage : voir [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'La garantie de remise et ses limites',
      paragraphs: [
        'Si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement. Les détails figurent dans le devis.',
        'La garantie porte sur notre nettoyage. Les dégâts, l’usure ou les réparations constatés lors de l’état des lieux ne concernent pas le nettoyage et n’en font donc pas partie.',
        'Un film de graisse dans le four ou une trace de calcaire sur la robinetterie relève donc de la garantie. Une brûlure sur le parquet, une rayure sur le plan de cuisson ou un trou dans le mur n’en relèvent pas : il faut alors des artisans.',
      ],
    },
    {
      title: 'Changement de locataire, vente, restitution de bureaux',
      paragraphs: [
        'Les gérances préparent des appartements entre deux baux. Si les locataires sortants n’ont pas nettoyé, ou mal, le procès-verbal d’état des lieux vient d’abord et notre nettoyage ensuite. Vous pouvez ainsi prouver vos prétentions envers les locataires.',
        'Les propriétaires et les copropriétaires ont besoin du nettoyage final avant la remise à l’acheteur ou avant une première location.',
        'Les entreprises restituent des bureaux et des surfaces commerciales à la fin du bail. Pour les locaux commerciaux, le délai de congé est d’au moins six mois, assez pour planifier le nettoyage après le débarras et un éventuel démontage des aménagements.',
      ],
    },
    {
      title: 'Ce qui doit être prêt le jour du nettoyage',
      paragraphs: [
        'Seul un logement vide peut être nettoyé à fond. Si le nettoyage a lieu peu avant l’état des lieux, la gérance voit exactement l’état dans lequel nous l’avons laissé.',
      ],
      items: [
        'Les meubles, les rideaux et les objets personnels sont débarrassés, cave et galetas compris',
        'Les travaux de peinture et de réparation sont terminés',
        'L’électricité et l’eau sont raccordées, la lumière fonctionne dans toutes les pièces',
        'Les clés du logement, de la cave, du galetas et de la boîte aux lettres sont à disposition',
      ],
    },
  ],
  tools: [
    {
      kind: 'text',
      id: 'abnahme-maengelruege',
      title: 'État des lieux et avis des défauts : constater d’abord, nettoyer ensuite',
      paragraphs: [
        'Le Code des obligations prévoit que, lors de la restitution, le bailleur vérifie l’état du logement et avise immédiatement le locataire des défauts dont celui-ci répond (art. 267a CO). S’il néglige de le faire, le locataire est déchargé de sa responsabilité. Font exception les défauts qui ne pouvaient pas être découverts à l’aide des vérifications usuelles. Ils doivent être signalés immédiatement après leur découverte.',
        'Le logement doit être restitué dans l’état qui résulte d’un usage conforme au contrat (art. 267 CO). L’usure normale n’est pas à la charge du locataire. Pour distinguer dégâts et usure, l’association des propriétaires HEV Schweiz et l’association des locataires ont établi ensemble un tableau paritaire des durées de vie.',
        'Si vous faites nettoyer avant le procès-verbal, vous aurez du mal à prouver plus tard l’état du logement lors de la restitution. En pratique :',
      ],
      items: [
        'Consigner l’état dans le procès-verbal avant qu’un nettoyage ne le modifie.',
        'Décrire chaque défaut séparément et précisément. « Cuisine sale » ne suffit pas, « four et hotte avec film de graisse » oui.',
        'Distinguer les salissures, l’usure normale et les dégâts.',
        'Indiquer clairement que le locataire est tenu pour responsable des défauts énumérés.',
        'Remettre le procès-verbal au locataire sur-le-champ. S’il ne participe pas à la restitution, lui signaler les défauts sans délai par écrit, par lettre recommandée pour la preuve.',
      ],
      note: 'Cet aperçu ne remplace pas un conseil juridique. Clarifiez les cas particuliers avec votre association ou l’autorité de conciliation en matière de bail.',
      sources: [
        { label: 'Code des obligations, art. 267 et 267a (Fedlex, état le 1er janvier 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_267_a' },
        { label: 'Tribunaux zurichois : avis des défauts à la restitution (en allemand)', href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege' },
        { label: 'HEV Schweiz : tableau des durées de vie (en allemand)', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/lebensdauertabelle' },
        { label: 'Association des locataires : tableau des durées de vie (en allemand)', href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/' },
      ],
    },
    {
      kind: 'checklist',
      id: 'abnahme-checkliste',
      title: 'Liste de contrôle pour l’état des lieux, pièce par pièce',
      intro: 'À imprimer pour la restitution d’un logement. La liste montre où l’état des lieux regarde de près et sert de trame pour votre procès-verbal. Ce que couvre notre nettoyage figure sous « Ce que comprend le nettoyage final ».',
      printable: true,
      updated: '2026-09-28',
      groups: [
        {
          title: 'Cuisine',
          items: [
            'Four avec tôles et grilles',
            'Plan de cuisson et hotte avec filtre à graisse',
            'Réfrigérateur avec joints et bac à légumes',
            'Lave-vaisselle avec filtre',
            'Armoires à l’intérieur, étagères du haut comprises',
            'Évier et robinetterie sans calcaire',
          ],
        },
        {
          title: 'Salle de bains et WC',
          items: [
            'Robinetterie et pomme de douche sans traces de calcaire',
            'Paroi de douche, baignoire et carrelage',
            'Joints et silicone',
            'Miroir et armoire à glace',
            'Écoulements et grilles d’aération',
            'Cuvette et réservoir des WC',
          ],
        },
        {
          title: 'Fenêtres et stores',
          items: [
            'Vitres côtés intérieur et extérieur',
            'Cadres, feuillures et joints',
            'Tablettes intérieures et extérieures',
            'Stores, volets roulants ou volets',
          ],
        },
        {
          title: 'Toutes les pièces',
          items: [
            'Sols et plinthes',
            'Armoires encastrées à l’intérieur',
            'Portes, encadrements et poignées',
            'Interrupteurs et prises',
            'Radiateurs',
          ],
        },
        {
          title: 'Locaux annexes',
          items: [
            'Balcon ou terrasse avec garde-corps',
            'Compartiments de cave et de galetas',
            'Boîte aux lettres',
          ],
        },
        {
          title: 'Procès-verbal',
          items: [
            'Date et heure de la restitution, personnes présentes',
            'Clés comptées : logement, cave, galetas, boîte aux lettres',
            'Défauts décrits un par un, dégâts et usure séparés',
            'Procès-verbal remis au locataire ou envoyé sans délai',
          ],
        },
      ],
      note: 'Des photos datées complètent le procès-verbal, surtout si le locataire est absent lors de la restitution.',
      sources: [
        { label: 'Code des obligations, art. 267a (Fedlex, état le 1er janvier 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_267_a' },
      ],
    },
    {
      kind: 'table',
      id: 'kuendigungstermine',
      title: 'Termes de résiliation par canton',
      intro: 'Un appartement se résilie avec un préavis d’au moins trois mois, un local commercial avec au moins six mois, chaque fois pour le terme prévu dans le bail. Si le bail n’en prévoit pas, le terme fixé par l’usage local s’applique et, à défaut d’un tel usage, la fin d’un trimestre de bail (art. 266a, 266c et 266d CO). Les états des lieux et les nettoyages finaux se concentrent autour de ces dates.',
      printable: true,
      updated: '2026-09-28',
      columns: ['Canton', 'Termes pour les appartements si le bail n’en prévoit pas', 'Pour la planification'],
      rows: [
        ['Lucerne', 'En règle générale pour la fin d’un mois ; termes et délais figurent dans le bail', 'Les changements de locataire sont possibles presque à chaque fin de mois. Le bail indique le jour exact.'],
        ['Zoug', 'Fin mars, fin juin, fin septembre', 'États des lieux et nettoyages finaux se concentrent sur ces trois dates.'],
        ['Obwald', 'Fin mars, fin juin, fin septembre', 'La résiliation doit intervenir au cours du quatrième mois avant la fin du bail. Dès lors, la date de remise est fixée.'],
        ['Argovie', 'Le bail est déterminant. L’autorité de conciliation en matière de bail du district indique si un usage local existe.', 'Reprendre dans la demande la date figurant dans le bail.'],
        ['Nidwald', 'Le bail est déterminant. L’autorité de conciliation de Nidwald indique si un usage local existe.', 'Relever dans le bail la date de résiliation et le jour de remise, puis les indiquer dans la demande.'],
      ],
      note: 'Si le locataire part avant le terme et présente un nouveau locataire acceptable (art. 264 CO), la remise peut tomber à n’importe quelle date. Demandez donc le nettoyage dès qu’une date de remise est fixée.',
      sources: [
        { label: 'Code des obligations, art. 264, 266a, 266c et 266d (Fedlex, état le 1er janvier 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_266_c' },
        { label: 'Canton de Lucerne : louer un logement (en allemand)', href: 'https://gruezi.lu.ch/wohnen/wohnung_mieten' },
        { label: 'Canton de Zoug : questions fréquentes sur le droit du bail (en allemand)', href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht' },
        { label: 'Canton d’Obwald : autorité de conciliation (en allemand)', href: 'https://www.ow.ch/fachbereiche/2131' },
        { label: 'Canton d’Argovie : autorités de conciliation en matière de bail (en allemand)', href: 'https://www.ag.ch/de/ueber-uns/gerichte-kanton-aargau/organisation/schlichtungsbehoerden/schlichtungsbehoerden-fuer-miete-und-pacht' },
        { label: 'Canton de Nidwald : autorité de conciliation (en allemand)', href: 'https://www.nw.ch/schlichtungsbehoerde/326' },
      ],
    },
  ],
  steps: [
    {
      title: 'Fixer la date',
      text: 'Nous plaçons le nettoyage entre le déménagement et l’état des lieux, avec le moins de temps possible entre les deux, et convenons avec vous de la remise des clés.',
    },
    {
      title: 'Nettoyage final',
      text: 'Nous nettoyons les locaux vides selon l’étendue convenue, de la cuisine à la cave et au galetas.',
    },
    {
      title: 'État des lieux',
      text: 'La gérance contrôle le logement. Nous corrigeons les réclamations sur notre nettoyage dans le cadre de la garantie de remise.',
    },
  ],
  faq: [
    {
      question: 'De quoi dépend le prix d’un nettoyage de fin de bail ?',
      answer:
        'De l’effort dans ce logement précis : nombre de pièces et surface, état de la cuisine et de la salle de bains (graisse, calcaire, nicotine), nombre et type de fenêtres, présence de stores à lamelles, de volets roulants ou de volets, et locaux annexes à nettoyer comme la cave, le galetas ou le balcon. C’est pourquoi nous n’indiquons pas de forfait par pièce. Vous recevez le prix par écrit après que nous avons vu les locaux.',
    },
    {
      question: 'Nettoyez-vous avant ou après l’état des lieux ?',
      answer:
        'Les deux sont possibles. Si vous restituez des locaux en tant que propriétaire ou entreprise, nous nettoyons avant l’état des lieux et la garantie de remise s’applique. Si les locataires ont rendu le logement mal nettoyé, nous nettoyons pour la gérance après l’état des lieux, dès que les défauts figurent dans le procès-verbal.',
    },
    {
      question: 'À quoi la gérance doit-elle veiller lors de l’état des lieux ?',
      answer:
        'Les défauts dont le locataire répond doivent être vérifiés à la restitution et signalés immédiatement, sinon le locataire est déchargé de sa responsabilité (art. 267a CO). D’abord le procès-verbal, ensuite le nettoyage. Ce qui compte dans le procès-verbal figure sous [État des lieux et avis des défauts](/leistungen/umzugsreinigung#abnahme-maengelruege).',
    },
    {
      question: 'Quel état la gérance peut-elle exiger lors de la restitution ?',
      answer:
        'Le logement doit être restitué dans l’état qui résulte d’un usage conforme au contrat (art. 267 CO). Le degré de nettoyage exigé est généralement réglé par le bail. L’usure normale n’est pas à la charge du locataire. Cette réponse n’est pas un conseil juridique.',
    },
    {
      question: 'Quand faut-il demander le nettoyage de fin de bail ?',
      answer:
        'Dès réception de la résiliation. Il reste alors au moins trois mois jusqu’à la remise pour un appartement, au moins six pour un local commercial. À Zoug et à Obwald, sauf convention contraire, ce sont fin mars, fin juin et fin septembre ; à Lucerne, en règle générale chaque fin de mois.',
    },
    {
      question: 'Le nettoyage peut-il commencer tant que des meubles sont encore dans le logement ?',
      answer:
        'Mieux vaut pas. Derrière les meubles, dans les armoires et sous les éléments encastrés, la gérance regarde de près lors de l’état des lieux, et ces endroits ne se nettoient à fond que dans des locaux vides. Prévoyez donc le déménagement avant le nettoyage, cave et galetas compris.',
    },
    {
      question: 'Nettoyez-vous aussi des bureaux et des surfaces commerciales avant leur restitution ?',
      answer:
        'Oui. Pour les entreprises, nous nettoyons bureaux et surfaces commerciales avant leur remise au bailleur. Si des aménagements doivent être démontés, le nettoyage suit les artisans. Après des transformations importantes, le [nettoyage de fin de chantier](/leistungen/baureinigung) est la bonne prestation.',
    },
    {
      question: 'Réalisez-vous aussi le nettoyage de fin de bail pour les locataires ?',
      answer:
        'Non, nous n’acceptons pas de mandats de locataires d’appartements individuels. Nos clients sont des gérances, des propriétaires et des entreprises. Pour les villas et les résidences, le nettoyage final est aussi proposé aux particuliers dans le cadre de notre [offre Premium](/premium).',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Si le logement est rénové avant la relocation : après les peintres et les artisans vient le nettoyage de fin de chantier.' },
    { path: '/leistungen/sonderreinigungen', text: 'Si les sols, le carrelage ou les joints ont besoin d’un nettoyage en profondeur après un long bail, même sans changement de locataire.' },
    { path: '/leistungen/hauswartung', text: 'Si la conciergerie doit participer aux remises de logements et s’occuper de l’immeuble entre deux changements.' },
  ],
  cta: {
    title: 'Un devis pour votre date de remise',
    text: 'Indiquez-nous l’adresse, le nombre de pièces ou la surface, la date de remise et si les stores ou les volets sont compris. Pour plusieurs changements de locataire, le plus simple est de nous envoyer une liste des adresses et des dates. Nous examinons les locaux, puis vous recevez le devis par écrit, gratuit et sans engagement.',
  },
}
