import type { ServicePageContent } from '../../types'

// Même structure et mêmes sources que content/de/leistungen/facility-services.ts (E85).
// Textes légaux lus sur fedlex.admin.ch le 28.09.2026 (CO, CC, OPA en français).
const co = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr'
const cc = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr'
const opa = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/fr'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Facility services : nettoyage, conciergerie et abords d’un seul prestataire',
  lead: [
    'Confier le nettoyage, la conciergerie et l’entretien des abords à trois entreprises, c’est gérer trois contrats, chacun avec son propre délai de résiliation. S’y ajoutent les questions entre les deux : qui balaie les feuilles dans l’entrée, qui remplace la lampe du local à vélos, qui remet du savon dans les toilettes ?',
    'Avec les facility services, nous fournissons ces prestations nous-mêmes, dans un seul contrat. Le chauffage, les ascenseurs et la protection incendie restent entretenus par vos entreprises spécialisées. Les pannes que nous y remarquons, nous vous les signalons.',
  ],
  facts: [
    { label: 'Étendue', value: 'Nettoyage, conciergerie, abords et vitres, uniquement ce que nous fournissons nous-mêmes' },
    { label: 'Non compris', value: 'Entretien du chauffage, de la ventilation et des ascenseurs, grosses réparations' },
    { label: 'Contrat', value: 'Un contrat et un interlocuteur pour toutes les prestations' },
    { label: 'Démarrage', value: 'Commencer par une prestation, en ajouter d’autres à l’échéance des anciens contrats' },
  ],
  scope: {
    title: 'Ce qui peut être réuni dans un contrat',
    intro: 'Nous composons les facility services à partir de nos propres prestations, adaptées à chaque immeuble et à chaque site :',
    items: [
      '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung) des cages d’escalier, des parties communes et des surfaces commerciales, avec service de réapprovisionnement',
      '[Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung) à des heures compatibles avec vos horaires d’ouverture',
      '[Conciergerie](/leistungen/hauswartung) avec rondes de contrôle, petites réparations et élimination des déchets',
      '[Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege) : pelouses, haies, massifs, chemins et places',
      '[Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung) au rythme convenu',
      '[Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen) lorsque sols ou locaux demandent plus que le nettoyage courant',
      '[Nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung) lors d’un changement de locataire',
      '[Nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung) pour halles, entrepôts et surfaces de production',
    ],
    notIncluded: [
      'Le facility management technique : entretien et contrôle du chauffage, de la ventilation, des ascenseurs et des installations de protection incendie.',
      'Le facility management commercial, comme la gérance locative, la comptabilité ou le décompte des frais accessoires.',
      'Les grosses réparations et travaux d’artisans, y compris la mise en relation avec des artisans.',
      'Un service d’urgence et de piquet 24 heures sur 24, par exemple pour un dégât d’eau pendant la nuit.',
      'Le service hivernal, pas même dans le cadre d’un contrat commun.',
    ],
  },
  sections: [
    {
      title: 'Quand un seul contrat pour tout est judicieux',
      paragraphs: [
        'Une gérance s’occupe de plusieurs immeubles et ne veut pas coordonner trois entreprises par bâtiment. Une entreprise a des bureaux, un entrepôt et un parking et cherche un seul interlocuteur pour l’ensemble. Une communauté de copropriétaires perd son concierge et veut régler en même temps le nettoyage et les abords.',
        'Si vous n’avez besoin que d’une seule prestation, sa propre page est le meilleur point de départ, par exemple le [nettoyage d’entretien](/leistungen/unterhaltsreinigung). Un contrat commun devient judicieux dès que deux prestations ou plus se retrouvent sur le même bien.',
      ],
    },
    {
      title: 'À l’entrée, trois mandats se rencontrent',
      paragraphs: [
        'Des feuilles sur le parvis, des traces de doigts sur la porte vitrée, une lampe qui clignote au-dessus de l’entrée. Avec des contrats séparés, chacun de ces endroits relève d’une autre entreprise. Chaque limite doit alors figurer dans un contrat, sinon quelque chose reste en plan ou se fait deux fois.',
        'Dans un contrat commun, chaque prestation figure avec son étendue et sa fréquence, et toutes les interventions viennent de la même entreprise. Celui qui entretient le parvis voit aussi la lampe et la signale.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'Les interfaces qu’un contrat devrait régler',
      intro:
        'À ces endroits, nettoyage, conciergerie et entretien des abords se touchent. Que vous mandatiez une ou plusieurs entreprises : la colonne de droite a sa place dans le contrat ou le cahier des charges.',
      columns: ['Endroit', 'Ce qui s’y rencontre', 'À fixer dans le contrat'],
      rows: [
        ['Entrée et parvis', 'Feuilles et saleté venant de l’extérieur, paillassons, vitre de la porte d’entrée, boîtes aux lettres', 'Qui balaie le parvis, qui nettoie paillassons et vitres, à quelle fréquence'],
        ['Cage d’escalier et ascenseur', 'Sols, mains courantes, cabine d’ascenseur, éclairage', 'Si la cabine est nettoyée avec la cage d’escalier, à qui signaler les pannes d’ascenseur'],
        ['Cave, buanderie, séchoir', 'Nettoyage, ordre, appareils utilisés par les locataires', 'Qui signale une machine à laver en panne, et à qui'],
        ['Local à poubelles et emplacement des conteneurs', 'Nettoyage, conteneurs le jour de ramassage, matières recyclables', 'Qui sort les conteneurs et les rentre, qui nettoie l’emplacement'],
        ['Parking souterrain et local à vélos', 'Balayage, éclairage, portes et portails', 'Fréquence du nettoyage, qui signale un portail qui ne ferme plus'],
        ['Toilettes et cuisinettes en entreprise', 'Nettoyage et consommables', 'Qui fournit savon, papier et sacs poubelle, qui les réapprovisionne'],
        ['Après des travaux d’artisans', 'Poussière et saleté dans la cage d’escalier et l’ascenseur', 'Qui nettoie ensuite, et sur quel budget'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Qui fait quoi dans un contrat commun',
      intro:
        'Un seul contrat pour tout ne signifie pas que tout repose sur nous. Le tableau montre ce que nous exécutons et ce qui reste à la gérance ou aux propriétaires.',
      columns: ['Tâche', 'Nous', 'Gérance ou propriétaires'],
      rows: [
        ['Nettoyage intérieur et vitres', 'nettoyer selon le contrat, au rythme convenu', 'définir l’étendue, annoncer l’accès aux logements ou aux bureaux'],
        ['Rondes de contrôle', 'contrôler parties communes, caves et abords, signaler les défauts', 'recevoir les signalements, décider, passer les commandes'],
        ['Petites réparations, par exemple ampoules', 'les faire nous-mêmes jusqu’à la limite convenue', 'fixer la limite, confier les grosses réparations à des artisans'],
        ['Chauffage, ventilation, ascenseurs, protection incendie', 'signaler les pannes que nous remarquons', 'tenir les contrats d’entretien avec les entreprises spécialisées et les mandater'],
        ['Abords et espaces verts', 'entretenir selon le plan d’entretien', 'approuver le plan d’entretien'],
        ['Consommables', 'réapprovisionner là où le service est convenu', 'décider qui fournit le matériel'],
        ['Élimination des déchets', 'organiser déchets et matières recyclables, tenir propre l’emplacement', 'fixer l’emplacement et le nombre de conteneurs'],
      ],
      note:
        'Selon l’art. 58 CO, le propriétaire d’un bâtiment répond du dommage causé par le défaut d’entretien, même s’il a confié des tâches à d’autres. C’est pourquoi le contrat doit préciser à qui les défauts sont signalés et qui décide.',
      sources: [{ label: 'Code des obligations, art. 58 (responsabilité du propriétaire d’un ouvrage)', href: `${co}#art_58` }],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'wechsel',
      title: 'Liste de contrôle : de plusieurs entreprises à un seul contrat',
      intro:
        'Le changement se fait le plus simplement étape par étape, en suivant les délais des contrats en cours. Les points à cocher :',
      groups: [
        {
          title: 'Contrats en cours et décision',
          items: [
            'Rassembler tous les contrats de nettoyage, de conciergerie, d’abords et de vitres',
            'Noter pour chaque contrat le délai de résiliation et la prochaine échéance possible',
            'Si le concierge est votre employé, le droit du travail s’applique : sauf disposition contraire du contrat de travail, d’un contrat-type ou d’une convention collective, un mois pendant la première année de service, deux mois de la deuxième à la neuvième, trois mois ensuite, chaque fois pour la fin d’un mois (art. 335c CO)',
            'Propriété par étages : vérifier si l’administrateur peut conclure le contrat ou si l’assemblée des copropriétaires décide. Le règlement, le contrat d’administration et les décisions font foi (art. 712m et 712s CC)',
          ],
        },
        {
          title: 'Imputer correctement les coûts',
          items: [
            'Demander à chaque prestataire les coûts par immeuble et par prestation, pour pouvoir les imputer correctement ensuite',
            'Biens loués : les frais accessoires ne sont à la charge des locataires que si le bail le prévoit spécialement, et seulement à hauteur des dépenses effectives (art. 257a et 257b CO)',
            'Propriété par étages : faire indiquer séparément les coûts des parties qui ne servent pas à toutes les unités, par exemple un parking souterrain. Le CC exige d’en tenir compte dans la répartition des frais (art. 712h al. 3 CC)',
          ],
        },
        {
          title: 'Avant le démarrage',
          items: [
            'Faire démarrer chaque prestation à l’échéance du contrat actuel correspondant',
            'Récupérer et lister clés, badges et codes des entreprises précédentes',
            'Confirmer aux entreprises précédentes la dernière intervention et la restitution',
            'Entreprises : informer le nouveau prestataire des risques sur place et des mesures de protection. Lorsque plusieurs entreprises travaillent au même endroit, les employeurs se concertent (art. 6 et 9 OPA)',
          ],
        },
        {
          title: 'Signalements et information',
          items: [
            'Fixer la voie de signalement : qui reçoit les signalements et jusqu’à quel montant on répare sans demander',
            'Informer locataires ou collaborateurs de qui est responsable à partir de quelle date',
            'Mettre à jour l’affichage dans l’entrée et les coordonnées pour les signalements',
          ],
        },
      ],
      note: 'Ces indications ne remplacent pas un conseil juridique. Vérifiez délais et compétences au cas par cas, sur la base de vos contrats et du règlement.',
      sources: [
        { label: 'Code des obligations, art. 335c (délais de congé dans le contrat de travail)', href: `${co}#art_335_c` },
        { label: 'Code des obligations, art. 257a et 257b (frais accessoires)', href: `${co}#art_257_a` },
        { label: 'Code civil, art. 712h (frais dans la propriété par étages)', href: `${cc}#art_712_h` },
        { label: 'Code civil, art. 712m et 712s (assemblée et administrateur)', href: `${cc}#art_712_m` },
        { label: 'Ordonnance sur la prévention des accidents (OPA), art. 6 et 9', href: `${opa}#art_9` },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Un contrat pour toutes les prestations',
      text: 'Le contrat indique chaque prestation avec son étendue, sa fréquence et ses horaires d’intervention, ainsi que la personne à qui nous signalons défauts et pannes.',
      figure: 'offerte',
    },
    {
      title: 'Remise sur place',
      text: 'Au démarrage, nous recevons clés, badges et codes pour les locaux convenus. Vous nous montrez le local de matériel, l’emplacement des déchets et les locaux techniques pour les rondes de contrôle.',
      figure: 'besichtigung',
    },
    {
      title: 'Démarrage prestation par prestation',
      text: 'Chaque prestation démarre à l’échéance du contrat précédent. Si un contrat court plus longtemps, cette prestation reste jusque-là chez l’entreprise actuelle.',
      figure: 'start',
    },
    {
      title: 'Modifications à un seul endroit',
      text: 'Un immeuble s’ajoute, un rythme change ou une prestation disparaît : signalez-le à votre interlocuteur chez nous. Seul le contrat unique est adapté.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Quelle différence entre facility services et facility management ?',
      answer:
        'Le facility management comprend souvent aussi l’exploitation des installations techniques et la gestion commerciale. Nos facility services réunissent les prestations que nous fournissons nous-mêmes : nettoyage, conciergerie, entretien des abords et vitres. Vos entreprises spécialisées entretiennent la technique, la gérance reste chez vous.',
    },
    {
      question: 'Comment passer de plusieurs entreprises à une seule ?',
      answer:
        'Étape par étape. Chaque prestation passe chez nous à l’échéance du contrat précédent. Vous pouvez donc commencer par une prestation et ajouter les autres plus tard. Les délais applicables et ce qu’il faut régler avant le démarrage figurent dans la liste de contrôle de cette page.',
    },
    {
      question: 'De quoi dépend le coût des facility services ?',
      answer:
        'Le prix se compose des différentes prestations. Il dépend du nombre et de la taille des immeubles ou des sites, des surfaces par prestation, de la fréquence du nettoyage et des rondes de contrôle, de l’étendue des abords, des horaires d’intervention, de qui fournit les consommables et des trajets entre les biens. Il n’existe donc pas de prix standard. Vous recevez le prix pour vos biens par écrit après le tour des lieux.',
    },
    {
      question: 'Que reste-t-il chez nous, en tant que gérance ou propriétaires ?',
      answer:
        'Les décisions : quelles prestations, quel budget, quelle entreprise spécialisée pour le chauffage, l’ascenseur ou les réparations. La responsabilité pour l’entretien du bâtiment reste elle aussi chez le propriétaire. Nos signalements aident à repérer tôt les défauts. La suite, c’est vous qui la décidez.',
    },
    {
      question: 'Une conciergerie ne suffirait-elle pas ?',
      answer:
        'La [conciergerie](/leistungen/hauswartung) couvre les rondes de contrôle, la cage d’escalier, la buanderie, les petites réparations et l’élimination des déchets. Si le nettoyage de bureaux, le nettoyage des vitres ou l’entretien de grands espaces verts s’y ajoutent, un contrat commun convient mieux.',
    },
    {
      question: 'Plusieurs immeubles ou sites peuvent-ils figurer dans un seul contrat ?',
      answer:
        'Oui. Il est utile de préciser pour chaque immeuble quelles prestations en font partie, à quelle fréquence, et qui reçoit les signalements sur place. Les coûts peuvent ainsi être imputés à chaque immeuble, ce qui compte pour les frais accessoires et la propriété par étages.',
    },
    {
      question: 'Que devons-nous régler en matière de sécurité au travail en tant qu’entreprise ?',
      answer:
        'Si des travailleurs d’une autre entreprise interviennent chez vous, vous devez les informer des risques et des mesures de protection sur place. Lorsque plusieurs entreprises travaillent au même endroit, les employeurs se concertent. C’est ce qu’exige l’ordonnance sur la prévention des accidents (art. 6 et 9 OPA). Avec un seul prestataire pour le nettoyage, la conciergerie et les abords, cette concertation a lieu une fois au lieu de trois.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Lorsque les rondes de contrôle, la cage d’escalier, la buanderie et les déchets sont l’essentiel et que le nettoyage est déjà attribué.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Lorsque vous voulez d’abord réattribuer seulement le nettoyage régulier des cages d’escalier et des parties communes.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Lorsque seuls les abords sont réattribués, par exemple parce que le jardinier actuel arrête.' },
  ],
  cta: {
    title: 'Un devis pour vos facility services',
    text: 'Pour le devis, il nous faut les adresses des immeubles ou des sites, les prestations que vous souhaitez confier et l’échéance de vos contrats actuels. Ensuite, nous visitons les biens avec vous, gratuitement et sans engagement.',
  },
}
