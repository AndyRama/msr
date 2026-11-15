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
    slug: "parquets",
    title: "Parquets",
    pageTitle: "Pose et rénovation de parquet à Bordeaux",
    eyebrow: "Parquets",
    lead: "Pose collée, parquet à chevrons, rénovation de sols d'appartement. La préparation fait le résultat.",
    short: "Pose collée, parquet à chevrons, rénovation de sols d'appartement. La préparation fait le résultat.",
    intro: [
      "Un beau parquet commence par un support bien préparé. Nous vérifions, nivelons et préparons avant de poser, pour un sol qui dure.",
      "Chevrons, point de Hongrie, lames : la finition mate et naturelle redonne à l'appartement sa géométrie sans perdre sa patine.",
    ],
    items: [
      { t: "Pose collée", d: "Préparation du support, pose collée, finition." },
      { t: "Parquet à chevrons", d: "Pose et rénovation de parquets à motifs dans l'ancien." },
      { t: "Rénovation de parquets anciens", d: "Remise en état, réparations ponctuelles, finition mate naturelle." },
    ],
    quote: "Un sol qui retrouve sa géométrie sans perdre sa patine.",
    image: "parquet.jpg",
    faq: [
      { q: "Combien de temps dure un chantier de parquet ?", a: "Cela dépend de la surface et de l'état du support. Le délai est donné dans le devis." },
      { q: "Peut-on rénover un parquet ancien plutôt que le remplacer ?", a: "Oui, dans la grande majorité des cas." },
    ],
    related: ["escaliers", "agencement-sur-mesure"],
  },
  {
    slug: "escaliers",
    title: "Escaliers",
    pageTitle: "Escaliers bois à Bordeaux : pose et rénovation",
    eyebrow: "Escaliers",
    lead: "Pose d'escalier et garde-corps, rénovation d'escaliers bois, y compris dans les restaurants.",
    short: "Pose d'escalier et garde-corps, rénovation d'escaliers bois, y compris dans les restaurants.",
    intro: [
      "Marches usées, garde-corps instable, finitions fatiguées : un escalier en bois se reprend sans le remplacer.",
      "Nous remettons en état les marches, ajustons et sécurisons le garde-corps, puis cirons pour retrouver la chaleur du bois d'origine.",
    ],
    items: [
      { t: "Rénovation d'escaliers bois", d: "Reprise des marches, des contremarches et des finitions." },
      { t: "Garde-corps", d: "Ajustement, sécurisation, pose." },
      { t: "Escaliers de restaurants et locaux", d: "Chantier organisé autour de vos horaires d'ouverture." },
    ],
    quote: "Retrouver la chaleur du bois d'origine.",
    image: "escalier.jpg",
    faq: [
      { q: "Intervenez-vous dans les immeubles collectifs ?", a: "Oui, nous organisons le chantier pour limiter la gêne aux occupants." },
    ],
    related: ["parquets", "agencement-sur-mesure"],
  },
  {
    slug: "agencement-sur-mesure",
    title: "Agencement sur mesure",
    pageTitle: "Agencement sur mesure à Bordeaux",
    eyebrow: "Agencement",
    lead: "Placards sous escalier, panneaux décoratifs, lambris, mobilier intégré : dessiné pour vos murs.",
    short: "Placards sous escalier, panneaux décoratifs, lambris, mobilier intégré : dessiné pour vos murs.",
    intro: [
      "Chaque niche est mesurée et fabriquée pour épouser les murs et l'escalier. Portes sans poignée apparente, lignes nettes.",
      "Nous mesurons sur place, discutons des matériaux, puis fabriquons et posons.",
    ],
    items: [
      { t: "Placards sous escalier", d: "Rangements mesurés pour la niche, portes sans poignée apparente." },
      { t: "Lambris et panneaux décoratifs", d: "Habillages muraux en bois." },
      { t: "Mobilier intégré", d: "Bibliothèques, banquettes, meubles dessinés pour la pièce." },
    ],
    quote: "Chaque niche mesurée, chaque ligne nette.",
    image: "agencement.jpg",
    faq: [
      { q: "Faut-il un plan avant le devis ?", a: "Non. Un appel et quelques photos suffisent pour démarrer. Nous venons ensuite mesurer." },
    ],
    related: ["escaliers", "parquets"],
  },
  {
    slug: "depannage-effraction",
    title: "Dépannage & effraction",
    pageTitle: "Dépannage menuiserie après effraction à Bordeaux",
    eyebrow: "Urgence",
    lead: "Porte forcée, cadre arraché, vitre cassée : remettre le lieu en sécurité, puis réparer proprement.",
    short: "Porte forcée, cadre arraché, vitre cassée : remettre le lieu en sécurité, puis réparer proprement.",
    intro: [
      "Après une effraction, la priorité est de sécuriser. Appelez directement : nous vous disons franchement ce qui est possible selon l'heure.",
      "Ensuite, nous réparons proprement : cadre, porte, vitrage. Devis et facture clairs, utilisables pour votre assurance.",
    ],
    items: [
      { t: "Mise en sécurité", d: "Fermeture provisoire solide pour protéger le lieu." },
      { t: "Réparation du cadre et de la porte", d: "Remise en état du bois, de la quincaillerie et des serrures." },
      { t: "Devis et facture pour l'assurance", d: "Documents clairs et détaillés en cas de sinistre." },
    ],
    quote: "Dans ces moments-là, le plus important est de sécuriser vite et proprement.",
    image: "devanture.jpg",
    faq: [
      { q: "Intervenez-vous en urgence ?", a: "Appelez directement : nous vous disons franchement ce qui est possible selon l'heure." },
      { q: "Fournissez-vous un devis pour l'assurance ?", a: "Oui, un devis et une facture clairs et détaillés." },
    ],
    related: ["portes-d-entree", "volets-bois"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
