import { reviews } from "./reviews";

export type Service = {
  slug: string;
  title: string;
  pageTitle: string;
  eyebrow: string;
  lead: string;
  short: string;
  intro: string[];
  items: { t: string; d: string }[];
  quote: string;
  image: string;
  faq: { q: string; a: string }[];
  related: string[];
  reviews?: { text: string; author: string; date: string; tag: string; reply: string }[];
};

export const services: Service[] = [
  {
    slug: "portes-d-entree",
    title: "Portes d'entrée",
    pageTitle: "Rénovation de porte d'entrée à Bordeaux",
    eyebrow: "Portes & ouvertures",
    lead: "Votre porte d'entrée a du caractère et elle ne ferme plus comme avant ? Souvent, elle n'a pas besoin d'être remplacée.",
    short: "Rénover une porte ancienne plutôt que la remplacer : bois, quincaillerie, réglages, étanchéité.",
    intro: [
      "Dans les immeubles bordelais, les portes anciennes font partie de l'âme du lieu. Les arracher pour poser un modèle standard, c'est perdre ce qui donne son cachet à un hall, à un couloir, à une entrée.",
      "MSR Bois rénove les portes anciennes : reprise des panneaux abîmés, remise en état du bâti, réglages, quincaillerie et finition. Quand la rénovation n'est plus raisonnable, nous posons aussi des portes neuves — et nous vous disons franchement ce qui est préférable dans votre cas.",
    ],
    items: [
      { t: "Rénovation de portes anciennes", d: "Dépose, reprise des panneaux et du bâti, remise en état des bois, réglages et repose." },
      { t: "Remplacement de porte d'entrée", d: "Quand la structure est trop atteinte : porte neuve, aux bonnes dimensions, posée proprement." },
      { t: "Portes de boutique et de commerce", d: "Une porte de boutique ancienne se rénove sans effacer ce qui fait son caractère." },
      { t: "Portes-fenêtres et portes vitrées", d: "Réparation d'une porte-fenêtre en bois, dépose, ajustements et remise en service." },
      { t: "Réglages et étanchéité", d: "Une porte qui frotte, qui ne joint plus, qui laisse passer l'air : souvent quelques réglages suffisent." },
    ],
    quote: "Un hall bordelais, une porte cochère, une moulure : ici, on répare avant de remplacer. C'est aussi, presque toujours, la solution la plus raisonnable pour votre budget.",
    image: "porte-entree.jpg",
    reviews: [
      {
        text: "Sylvain a rénové notre porte d'entrée ancienne. Il a été le premier à répondre et le seul à nous rappeler. Devis clair, donné rapidement, et un travail vraiment soigné : la porte ferme parfaitement et le bois est superbe. Le chantier a été laissé impeccable.",
        author: "Claire M.",
        date: "Mars 2025",
        tag: "Porte d'entrée",
        reply: "Merci Claire, c'était un vrai plaisir de redonner vie à cette porte. Elle avait du caractère, il fallait juste la respecter. À bientôt !",
      },
      {
        text: "Après une tentative d'effraction sur notre commerce, Sylvain est venu remettre le cadre de porte en état très rapidement. Réactif, franc sur ce qui était possible de faire, et un travail solide. On a pu rouvrir sans stress.",
        author: "Antoine R.",
        date: "Février 2025",
        tag: "Effraction",
        reply: "Merci Antoine. Dans ces moments-là, le plus important c'est de sécuriser vite et proprement. Bonne reprise à vous et à votre équipe.",
      },
    ],
    faq: [
      { q: "Faut-il rénover ou remplacer une porte d'entrée ancienne ?", a: "Tant que le bâti et les panneaux sont sains, la rénovation est presque toujours préférable : elle conserve le caractère de la porte et coûte généralement moins cher. Si la structure est trop atteinte, nous vous le disons et proposons un remplacement." },
      { q: "Intervenez-vous dans les immeubles anciens et en copropriété ?", a: "Oui, c'est le cœur de notre activité à Bordeaux. Nous nous adaptons aux contraintes de l'immeuble et prévenons le syndic ou le gardien si nécessaire." },
      { q: "Combien de temps prend une rénovation de porte ?", a: "Selon l'état de la porte, la rénovation se fait en atelier ou sur place, en quelques jours. Le délai exact vous est donné dans le devis." },
      { q: "Travaillez-vous pour les commerces ?", a: "Oui. Nous organisons le chantier autour de vos horaires d'ouverture pour limiter l'arrêt d'activité." },
    ],
    related: ["volets-bois", "depannage-effraction"],
  },
  {
    slug: "volets-bois",
    title: "Volets à persiennes",
    pageTitle: "Restauration de volets bois à Bordeaux",
    eyebrow: "Volets & fenêtres",
    lead: "Des persiennes qui coincent, une peinture qui s'écaille, une lame cassée : avant de les remplacer, regardons ce qu'elles ont encore à dire.",
    short: "Des persiennes fatiguées peuvent retrouver des années de service. Restauration, lames, ferrures, réglages.",
    intro: [
      "Sur les façades en pierre blonde de Bordeaux, les volets à persiennes font autant partie du bâtiment que les moulures. Bien restaurés, ils protègent du soleil, tiennent la rue à distance et tiennent encore des décennies.",
      "Nous déposons, remettons en état et reposons : lames, assemblages, ferrures, réglages. Souvent, la restauration coûte moins cher qu'un remplacement — et elle garde l'ensemble cohérent avec la façade."
    ],
    items: [
      {
        "t": "Restauration de persiennes",
        "d": "Remise en état des lames et des assemblages, sans perdre la patine du bois."
      },
      {
        "t": "Lames et ferrures",
        "d": "Remplacement des lames abîmées et réglage des ferrures pour que les volets coulissent et se ferment correctement."
      },
      {
        "t": "Volets et contrevents bois",
        "d": "Reprise des volets et contrevents en bois, dans le respect de la menuiserie existante."
      },
      {
        "t": "Dépose et repose soignées",
        "d": "Les volets sont démontés, travaillés puis reposés en place, sans abîmer la façade ni les tableaux."
      },
      {
        "t": "Préparation avant finition",
        "d": "Les bois sont préparés pour la finition de votre choix : nous parlons ensemble des options avant de chiffrer."
      }
    ],
    quote: "Rue Sainte-Catherine ou cours de l'Intendance, la persienne est un motif de façade. La restaurer, c'est garder le rythme de la rue intact.",
    image: "volets.jpg",
    reviews: ["Martine B.", "Claire M."].map((author) => reviews.find((r) => r.author === author)!),
    faq: [
      {
        "q": "Mes vieilles persiennes sont-elles réparables ?",
        "a": "Dans la plupart des cas, oui. Nous remplaçons seulement les lames et pièces trop abîmées."
      },
      {
        "q": "Rénover ou remplacer des volets ?",
        "a": "L'état des lames, des assemblages et des ferrures permet de choisir. Nous regardons ce qui peut être conservé et discutons d'un remplacement si la restauration n'est plus adaptée."
      },
      {
        "q": "Travaillez-vous en hauteur ?",
        "a": "Oui, avec le matériel adapté. Nous précisons les contraintes d'accès lors de la visite."
      },
      {
        "q": "Combien de volets pouvez-vous traiter ?",
        "a": "Le nombre de volets, leur état et les conditions d'accès sont à préciser lors de la visite. Le périmètre du chantier est défini dans le devis."
      }
    ],
    related: ["fenetres-bois", "portes-d-entree"],
  },
  {
    slug: "fenetres-bois",
    title: "Fenêtres bois",
    pageTitle: "Fenêtres en bois : réparation et pose à Bordeaux",
    eyebrow: "Volets & fenêtres",
    lead: "Une fenêtre qui ferme mal laisse passer l'air, le bruit et le doute. Parfois, elle demande juste d'être réparée.",
    short: "Réparer plutôt que jeter : fenêtres anciennes, petits carreaux, portes-fenêtres, réglages et joints.",
    intro: [
      "Les fenêtres en bois des immeubles anciens ont une qualité qu'on ne trouve pas toujours dans les menuiseries neuves : des montants fins, des petits carreaux, une lumière particulière. Leur entretien est simple, à condition d'être fait correctement.",
      "Nous réparons les menuiseries existantes quand c'est possible, et nous posons des fenêtres neuves — bois ou PVC en rénovation — quand le remplacement s'impose. Le choix se fait ensemble, en fonction de l'état, du budget et du confort attendu."
    ],
    items: [
      {
        "t": "Réparation de fenêtres anciennes",
        "d": "Reprise des bois, ajustement des ouvrants, remise en état de la quincaillerie."
      },
      {
        "t": "Pose de fenêtres en rénovation",
        "d": "Fenêtres PVC en rénovation, posées dans le cadre existant, sans casser les tableaux."
      },
      {
        "t": "Portes-fenêtres et portes vitrées",
        "d": "Réparation ou dépose d'une porte-fenêtre en bois qui ne ferme plus, qui frotte ou qui laisse entrer l'air."
      },
      {
        "t": "Réglages et joints",
        "d": "Courants d'air, joints passés : parfois quelques réglages et il n'en passe plus."
      },
      {
        "t": "Petits carreaux",
        "d": "Conserver la finesse des petits bois d'origine quand c'est viable, c'est garder le caractère de la pièce."
      }
    ],
    quote: "Une fenêtre ancienne bien réparée, c'est de la lumière avec du caractère. Une fenêtre mal posée, c'est une pièce qui perd son visage.",
    image: "fenetres.jpg",
    reviews: ["Martine B.", "Camille & Théo"].map((author) => reviews.find((r) => r.author === author)!),
    faq: [
      {
        "q": "Peut-on réparer mes fenêtres anciennes ?",
        "a": "Souvent, oui : réglages, joints et reprise de la quincaillerie améliorent nettement l'étanchéité."
      },
      {
        "q": "Bois ou PVC : comment choisir ?",
        "a": "Le choix dépend de l'état des fenêtres, du caractère de la façade, du budget et du confort recherché. Nous examinons d'abord les menuiseries existantes avant de discuter d'une réparation ou d'une pose en rénovation."
      },
      {
        "q": "Une fenêtre qui ferme mal doit-elle être remplacée ?",
        "a": "Pas nécessairement. Un ajustement des ouvrants, une reprise du bois, des joints ou de la quincaillerie peuvent suffire. L'état de la fenêtre permet de déterminer l'intervention adaptée."
      },
      {
        "q": "Intervenez-vous en copropriété ?",
        "a": "Oui, c'est le cœur de notre activité à Bordeaux. Nous nous adaptons aux contraintes de l'immeuble et prévenons le syndic ou le gardien si nécessaire."
      }
    ],
    related: ["volets-bois", "portes-d-entree"],
  },
  {
    "slug": "parquets",
    "title": "Parquets",
    "pageTitle": "Pose et rénovation de parquet à Bordeaux",
    "eyebrow": "Sols & parquets",
    "lead": "Un parquet à chevrons, un sol qui craque, un appartement ancien : la pose se prépare avant de se poser.",
    "short": "Pose collée, parquet à chevrons, rénovation de sols d'appartement. La préparation fait le résultat.",
    "intro": [
      "Dans l'ancien, un parquet ne se pose pas sur n'importe quoi. Il faut regarder le support, les niveaux, l'humidité, les murs qui ne sont jamais tout à fait droits. C'est ce travail-là qui décide si le sol sera encore beau dans vingt ans.",
      "MSR Bois pose des parquets collés, y compris des parquets à chevrons, et rénove les sols d'appartements. Les conseils sur le choix du bois et le sens de pose font partie du travail : vous comprenez ce que vous choisissez. Chevrons, point de Hongrie, lames : la finition mate et naturelle redonne à l'appartement sa géométrie sans perdre sa patine."
    ],
    "items": [
      {
        "t": "Pose de parquet collé",
        "d": "Une pose stable et silencieuse, adaptée aux appartements anciens et aux grandes surfaces."
      },
      {
        "t": "Parquet à chevrons",
        "d": "Un calepinage préparé avec soin, des angles justes et des joints alignés au millimètre."
      },
      {
        "t": "Rénovation de sols",
        "d": "Reprise d'un parquet existant, remplacement de lames, remise en état des plinthes et réparations ponctuelles, avec une finition mate naturelle."
      },
      {
        "t": "Conseil sur la pose dans l’ancien",
        "d": "Supports, niveaux, humidité, sens de pose : les points à trancher avant de commander."
      },
      {
        "t": "Préparation du support",
        "d": "Ragréage et préparation du sol quand c'est nécessaire — c'est souvent là que se joue la planéité."
      }
    ],
    "quote": "Le parquet à chevrons est un classique des appartements bordelais. Bien posé, il traverse les décennies sans se démoder.",
    "image": "parquet.jpg",
    "faq": [
      {
        "q": "Quel parquet choisir dans un immeuble ancien ?",
        "a": "Le choix dépend du support, des niveaux, de l'humidité et du rendu recherché. Chevrons, point de Hongrie ou lames : nous discutons du bois, du sens de pose et de la finition. Peut-on rénover un parquet ancien plutôt que le remplacer ? Oui, dans la grande majorité des cas."
      },
      {
        "q": "Parquet collé ou flottant ?",
        "a": "Nous réalisons la pose collée. L'état du support et les contraintes de l'appartement sont examinés avant de choisir la solution de pose adaptée."
      },
      {
        "q": "Peut-on poser un parquet à chevrons partout ?",
        "a": "Le support, les niveaux, l'humidité et la géométrie de la pièce doivent être vérifiés. Le calepinage permet ensuite de préparer les angles, les alignements et le sens de pose."
      },
      {
        "q": "Combien de temps pour un appartement ?",
        "a": "Cela dépend de la surface et de l'état du support. Le délai est donné dans le devis."
      }
    ],
    "related": [
      "escaliers",
      "agencement-sur-mesure"
    ],
    "reviews": ["Julien D.", "Camille & Théo"].map((author) => reviews.find((r) => r.author === author)!),
  },
  {
    "slug": "escaliers",
    "title": "Escaliers",
    "pageTitle": "Rénovation et pose d’escalier bois à Bordeaux",
    "eyebrow": "Escaliers",
    "lead": "Un escalier, c'est la pièce qu'on voit tous les jours. Autant qu'il soit juste, solide, et qu'il donne envie de le monter.",
    "short": "Pose d'escalier et garde-corps, rénovation d'escaliers bois, y compris dans les restaurants.",
    "intro": [
      "Escalier d'immeuble ancien, escalier de restaurant, escalier de maison : nous rénovons l'existant quand la structure le permet, et nous posons des escaliers neufs avec leur garde-corps quand il faut repartir de zéro.",
      "Marches, contremarches, rampe, main courante : chaque élément est ajusté. Et comme on y circule tous les jours, les points de sécurité sont regardés sérieusement, pas en fin de chantier. Marches usées, garde-corps instable, finitions fatiguées : nous remettons en état, ajustons et sécurisons, puis cirons pour retrouver la chaleur du bois d'origine."
    ],
    "items": [
      {
        "t": "Pose d’escalier et garde-corps",
        "d": "Escalier neuf et garde-corps ajustés à la trémie et aux contraintes de la pièce."
      },
      {
        "t": "Rénovation d’escalier bois",
        "d": "Reprise des marches et contremarches, réglages, remise en état de la rampe."
      },
      {
        "t": "Escaliers de restaurant",
        "d": "Un chantier organisé pour limiter la fermeture : on prépare en atelier, on pose vite. L'organisation tient compte de vos horaires d'ouverture, pour les restaurants et les autres locaux."
      },
      {
        "t": "Mise en sécurité",
        "d": "Stabilité, main courante, garde-corps : les points sensibles sont traités et expliqués."
      },
      {
        "t": "Finitions",
        "d": "Bois ciré, huilé, patiné : le rendu est choisi avec vous, en accord avec le lieu."
      }
    ],
    "quote": "Dans un immeuble bordelais, l'escalier est collectif : il doit être beau, mais d'abord sûr et silencieux.",
    "image": "escalier.jpg",
    "faq": [
      {
        "q": "Rénover ou remplacer un escalier ?",
        "a": "Nous rénovons l'existant quand la structure le permet. Si elle ne peut pas être conservée, nous discutons d'un escalier neuf et de son garde-corps, adaptés à la trémie et aux contraintes de la pièce."
      },
      {
        "q": "Comment sécuriser un escalier ancien ?",
        "a": "La stabilité des marches, la rampe, la main courante et le garde-corps sont examinés. Nous ajustons et remettons en état les éléments qui le nécessitent, en expliquant les points sensibles."
      },
      {
        "q": "Un escalier de restaurant peut-il être rénové sur place ?",
        "a": "Les interventions sur place et les préparations en atelier sont définies selon l'état de l'escalier et les contraintes du local. Le chantier est organisé autour de vos horaires d'ouverture pour limiter la fermeture."
      },
      {
        "q": "Combien de temps prend un escalier ?",
        "a": "La durée dépend des reprises nécessaires, de la finition et des conditions d'accès. Elle est à préciser dans le devis. Intervenez-vous dans les immeubles collectifs ? Oui, nous organisons le chantier pour limiter la gêne aux occupants."
      }
    ],
    "related": [
      "parquets",
      "agencement-sur-mesure"
    ],
    "reviews": ["Sophie L.", "Julien D."].map((author) => reviews.find((r) => r.author === author)!),
  },
  {
    "slug": "agencement-sur-mesure",
    "title": "Agencement sur mesure",
    "pageTitle": "Agencement sur mesure à Bordeaux",
    "eyebrow": "Agencement",
    "lead": "Dans l'ancien, rien n'est droit. C'est justement pour ça que le sur-mesure existe.",
    "short": "Placards sous escalier, panneaux décoratifs, lambris, mobilier intégré : dessiné pour vos murs.",
    "intro": [
      "Un placard sous escalier, une bibliothèque qui épouse un mur, des panneaux décoratifs, un lambris remplacé : le sur-mesure sert à faire entrer du rangement et du dessin dans des volumes qui n'ont jamais été faits pour du standard.",
      "Chaque projet part des mesures réelles — y compris des murs qui ne sont pas d'aplomb. Le résultat est un meuble qui a l'air d'avoir toujours été là, et qui travaille pour vous au quotidien. Nous mesurons sur place, discutons des matériaux, puis fabriquons et posons : chaque niche épouse les murs et l'escalier, avec des portes sans poignée apparente et des lignes nettes."
    ],
    "items": [
      {
        "t": "Rangements sous escalier",
        "d": "Exploiter une niche perdue pour créer du rangement fermé, ajusté au millimètre, avec des portes sans poignée apparente."
      },
      {
        "t": "Panneaux décoratifs",
        "d": "Habillages muraux en bois et panneaux pour structurer une pièce sans la charger."
      },
      {
        "t": "Remplacement de lambris",
        "d": "Retirer un lambris abîmé et retrouver un mur propre, ou le remplacer par un habillage neuf."
      },
      {
        "t": "Mobilier intégré",
        "d": "Bibliothèques, niches, banquettes : du mobilier dessiné pour votre pièce."
      },
      {
        "t": "Locaux professionnels",
        "d": "Comptoirs, habillages, rangements pour commerces, restaurants et bureaux."
      }
    ],
    "quote": "Un placard bien dessiné dans un appartement ancien ne s'impose pas : il comble un vide et disparaît dans l'architecture.",
    "image": "agencement.jpg",
    "faq": [
      {
        "q": "Le sur-mesure a-t-il un sens dans un appartement ancien ?",
        "a": "Oui : les mesures réelles permettent de composer avec les murs qui ne sont pas d'aplomb et les niches sous escalier. Faut-il un plan avant le devis ? Non. Un appel et quelques photos suffisent pour démarrer. Nous venons ensuite mesurer."
      },
      {
        "q": "Quels matériaux utilisez-vous ?",
        "a": "Les matériaux et les finitions sont discutés avec vous à partir de la pièce, de l'usage du meuble et du rendu souhaité. Les habillages muraux en bois font partie des possibilités."
      },
      {
        "q": "Combien de temps entre le devis et la pose ?",
        "a": "Le délai dépend du projet, des mesures et de la fabrication. Nous précisons l'organisation et le calendrier lors du devis, avant la fabrication et la pose."
      },
      {
        "q": "Travaillez-vous pour les commerces ?",
        "a": "Les agencements concernent aussi les locaux professionnels : comptoirs, habillages et rangements pour commerces, restaurants et bureaux. Les contraintes du lieu sont discutées avant de définir le projet."
      }
    ],
    "related": [
      "escaliers",
      "parquets"
    ],
    "reviews": ["Camille & Théo", "Sophie L."].map((author) => reviews.find((r) => r.author === author)!),
  },
  {
    "slug": "depannage-effraction",
    "title": "Dépannage & effraction",
    "pageTitle": "Réparation après effraction à Bordeaux",
    "eyebrow": "Urgence & sécurité",
    "lead": "Une porte forcée, un cadre arraché, une vitre cassée : d'abord mettre en sécurité, ensuite réparer proprement.",
    "short": "Porte forcée, cadre arraché, vitre cassée : remettre le lieu en sécurité, puis réparer proprement.",
    "intro": [
      "Après une effraction, il y a deux urgences : empêcher que ça recommence, et retrouver un lieu utilisable. Un commerce qui ne ferme plus, un logement ouvert à tous les vents : on comprend que ce n'est pas confortable.",
      "Nous intervenons pour remettre en état le cadre de porte, la porte ou la fenêtre touchée. Nous vous disons franchement ce qui est possible, à quel moment, et ce que ça implique — sans promettre un délai que nous ne pourrions pas tenir. Appelez directement : nous vous disons franchement ce qui est possible selon l'heure. La mise en sécurité précède la réparation du cadre, de la porte et du vitrage, avec un devis et une facture clairs, utilisables pour votre assurance."
    ],
    "items": [
      {
        "t": "Mise en sécurité",
        "d": "Reprendre ce qui peut l'être pour que le lieu soit fermé, avec une fermeture provisoire solide pour le protéger, avant toute réparation définitive."
      },
      {
        "t": "Cadre de porte forcé",
        "d": "Reprise du cadre et du bâti, souvent sur les portes d'entrée de commerce, avec remise en état du bois, de la quincaillerie et des serrures."
      },
      {
        "t": "Porte d’entrée endommagée",
        "d": "Réparation d'une porte ancienne forcée, ou remplacement si la structure est trop atteinte."
      },
      {
        "t": "Fenêtre ou porte vitrée",
        "d": "Dépose de l'élément cassé et remise en état de l'ouverture."
      },
      {
        "t": "Devis et facture détaillés",
        "d": "Des documents clairs, utiles pour votre déclaration à l'assurance."
      }
    ],
    "quote": "Un artisan qui répond vite, ce n'est pas un argument marketing : c'est ce qui permet à un commerce de rouvrir et à une famille de dormir tranquille.",
    "image": "devanture.jpg",
    "faq": [
      {
        "q": "Que faire en premier après une effraction ?",
        "a": "La priorité est de sécuriser le lieu avant la réparation définitive. Appelez directement : nous vous disons franchement ce qui est possible selon l'heure."
      },
      {
        "q": "Intervenez-vous la nuit ou le week-end ?",
        "a": "Appelez directement : nous vous disons franchement ce qui est possible selon l'heure. Les possibilités d'intervention doivent être confirmées au téléphone ; aucun délai ne peut être promis sans examiner la situation."
      },
      {
        "q": "Travaillez-vous avec les assurances ?",
        "a": "Fournissez-vous un devis pour l'assurance ? Oui, un devis et une facture clairs et détaillés. Ces documents sont utilisables pour votre déclaration ; les conditions de prise en charge sont à vérifier avec votre assureur."
      },
      {
        "q": "Et pour un commerce fermé par une porte forcée ?",
        "a": "Nous examinons la mise en sécurité et la remise en état du cadre, du bâti et de la porte du commerce. Appelez pour expliquer les dégâts : nous vous disons ce qui est possible et à quel moment, sans promettre un délai que nous ne pourrions pas tenir."
      }
    ],
    "related": [
      "portes-d-entree",
      "volets-bois"
    ],
    "reviews": ["Antoine R.", "Claire M."].map((author) => reviews.find((r) => r.author === author)!),
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
