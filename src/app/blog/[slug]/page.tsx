import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

/* ───────────────────────────────────────────────
   DATA — 3 articles SEO complets (800+ mots)
   ─────────────────────────────────────────────── */

interface ArticleSection {
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
}

interface ArticleData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: { src: string; alt: string };
  intro: string[];
  sections: ArticleSection[];
  conclusion: string[];
}

const articles: Record<string, ArticleData> = {
  /* ── ARTICLE 1 ── */
  "debloquer-rideau-metallique-coince": {
    title: "Comment debloquer un rideau metallique coince : guide pratique",
    metaTitle: "Debloquer un rideau metallique coince | Guide depannage Paris",
    metaDescription:
      "Rideau metallique bloque ? Decouvrez les causes courantes, les gestes a faire et ne pas faire, et quand appeler un depanneur professionnel a Paris. Intervention 24h/24.",
    heroImage: {
      src: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
      alt: "Rideau metallique coince necessitant un depannage urgent a Paris",
    },
    intro: [
      "Un rideau metallique qui refuse de monter ou de descendre, c\u2019est la hantise de tout commercant parisien. Que vous teniez une boutique rue de Rivoli, un restaurant dans le Marais ou un entrepot pres de la gare de Lyon, un blocage de votre fermeture metallique peut paralyser votre activite en quelques secondes. Ce guide pratique vous explique les causes les plus frequentes, les gestes d\u2019urgence a adopter et les erreurs a eviter absolument avant l\u2019arrivee d\u2019un technicien qualifie.",
      "Chez DRM Paris, nos techniciens interviennent depuis plus de 25 ans sur tous les types de rideaux metalliques : lames pleines, micro-perforees, grilles cobra et rideaux a enroulement. Notre experience nous permet d\u2019identifier rapidement l\u2019origine du blocage et de remettre votre rideau en service dans les meilleurs delais.",
    ],
    sections: [
      {
        heading: "Les causes frequentes de blocage d\u2019un rideau metallique de commerce",
        paragraphs: [
          "Le blocage d\u2019un rideau metallique n\u2019est jamais anodin. Il resulte toujours d\u2019un probleme mecanique ou electrique precis qu\u2019il faut identifier avant toute manipulation. Les causes les plus courantes que nos techniciens rencontrent a Paris incluent :",
          "Les lames deformees ou desalignees constituent la premiere cause de blocage. Un choc (vehicule, tentative d\u2019effraction, mauvaise manipulation) peut tordre une ou plusieurs lames, les empechant de coulisser correctement dans les glissieres. Le rideau se coince alors a mi-hauteur et force sur le mecanisme d\u2019enroulement.",
          "Les ressorts de compensation casses ou fatigues representent la deuxieme cause majeure. Ces ressorts equilibrent le poids du tablier. Quand ils lachent, le rideau devient trop lourd pour le moteur ou impossible a manoeuvrer manuellement. Un ressort qui claque produit un bruit violent et reconnaissable.",
          "Un moteur defaillant (surchauffe, condensateur HS, engrenage use) empeche toute ouverture electrique. Enfin, des coulisses encrassees, rouillees ou deformees freinent la descente et la montee du tablier, surtout apres des mois sans entretien.",
        ],
        image: {
          src: "/images/gallery/depannage-rideau-metallique-drm-france-rm.webp",
          alt: "Technicien DRM diagnostiquant un rideau metallique bloque",
        },
      },
      {
        heading: "Les gestes d\u2019urgence quand votre fermeture metallique est bloquee",
        paragraphs: [
          "Face a un rideau metallique coince, certains reflexes peuvent vous eviter d\u2019aggraver la situation en attendant l\u2019intervention d\u2019un professionnel :",
          "Verifiez d\u2019abord l\u2019alimentation electrique. Un simple disjoncteur saute ou une prise debranchee suffit parfois a expliquer le blocage. Controlez le tableau electrique de votre local et assurez-vous que le courant arrive bien jusqu\u2019au boitier de commande du rideau.",
          "Si votre rideau est motorise, tentez la manoeuvre de secours. La plupart des moteurs centraux (ACM, Somfy, Simu) disposent d\u2019un systeme de debrayage accessible par une boite a cle ou un coffret Blindor. Ce mecanisme permet de passer en mode manuel pour ouvrir ou fermer le rideau a la main. Consultez la notice de votre installation ou reperer le boitier de debrayage generalement situe a droite du rideau, a hauteur d\u2019homme.",
          "Ne forcez jamais le rideau. Tirer violemment sur les lames ou forcer le moteur a tourner risque de casser les attaches du tablier sur l\u2019axe, de tordre davantage les lames ou de griller le moteur. Un rideau force coute toujours plus cher a reparer qu\u2019un rideau simplement bloque.",
        ],
        image: {
          src: "/images/gallery/Slimbox-Boitiersecurise-deblocage-rideau-metallique.webp",
          alt: "Boitier de debrayage Slimbox pour deblocage rideau metallique",
        },
      },
      {
        heading: "Les erreurs qui aggravent le probleme de votre rideau de fer",
        paragraphs: [
          "Nos techniciens constatent regulierement des degats supplementaires causes par des tentatives de reparation improvises. Voici les erreurs les plus frequentes et les plus couteuses :",
          "Utiliser un pied-de-biche ou un tournevis pour forcer les lames deforme les coulisses en U et peut faire sortir le tablier de ses rails. La remise en place necessite alors un demontage complet, bien plus couteux qu\u2019un simple deblocage.",
          "Demonter le coffre ou l\u2019axe sans competence est extremement dangereux. L\u2019axe supporte le poids total du tablier (parfois plus de 100 kg pour un rideau industriel). Sans les outils adaptes et la maitrise des ressorts sous tension, le risque de blessure grave est reel.",
          "Lubrifier au hasard avec un produit inadapte (WD-40 sur les ressorts, huile de vidange sur les lames) attire la poussiere et accelere l\u2019usure au lieu de resoudre le probleme. Un graissage professionnel utilise des produits specifiques appliques aux bons endroits.",
        ],
      },
      {
        heading: "Quand faut-il appeler un specialiste du depannage rideau metallique ?",
        paragraphs: [
          "Certaines situations exigent l\u2019intervention immediate d\u2019un professionnel qualifie. Si votre rideau reste bloque a mi-hauteur et que la manoeuvre de secours ne fonctionne pas, n\u2019insistez pas : un ressort casse ou un axe desolidarise impose un diagnostic sur place avec outillage professionnel.",
          "Si vous constatez des etincelles, une odeur de brule ou un bruit anormal du moteur, coupez immediatement l\u2019alimentation au disjoncteur et appelez un technicien. Un moteur qui force peut provoquer un depart de feu dans le coffre.",
          "Apres une tentative d\u2019effraction, meme si le rideau semble fonctionner, faites controler l\u2019ensemble du mecanisme. Les lames peuvent etre fragilisees et le systeme de verrouillage compromis, laissant votre commerce vulnerable.",
          "DRM Paris intervient 7j/7, y compris les jours feries et en urgence de nuit. Nos vehicules ateliers embarquent les pieces detachees les plus courantes (lames, ressorts, moteurs, serrures) pour une reparation en un seul passage. Appelez le 09 72 12 41 41 pour un depannage rapide sur tout Paris.",
        ],
        image: {
          src: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
          alt: "Equipe DRM en intervention depannage rideau metallique a Paris",
        },
      },
      {
        heading: "Combien coute le depannage d\u2019un rideau metallique coince a Paris ?",
        paragraphs: [
          "Le cout d\u2019un deblocage de rideau metallique depend de la nature du probleme et des pieces a remplacer. Un simple deblocage mecanique (lame reinsere, coulisse nettoyee) est accessible a partir de 150 euros. Le remplacement d\u2019un ressort de compensation demarre a partir de 250 euros, pieces et main-d\u2019oeuvre incluses.",
          "Pour un changement de moteur, comptez a partir de 650 euros selon le modele (tubulaire, central ou lateral) et la puissance requise. DRM Paris etablit systematiquement un devis gratuit sur place avant toute intervention, sans engagement. Aucune surprise sur la facture.",
          "Nous privilegions toujours la reparation avant le remplacement. Un rideau metallique bien entretenu peut durer plus de 20 ans. Chaque intervention s\u2019accompagne de conseils personnalises pour eviter les recidives et prolonger la duree de vie de votre installation.",
        ],
      },
    ],
    conclusion: [
      "Un rideau metallique coince ne doit jamais etre pris a la legere. Les bons reflexes (verifier l\u2019alimentation, utiliser le debrayage, ne pas forcer) peuvent limiter les degats en attendant un professionnel. Mais seul un technicien equipe et experimente peut diagnostiquer et resoudre durablement le probleme.",
      "DRM Paris, avec plus de 25 ans d\u2019experience dans le depannage de fermetures metalliques, intervient rapidement dans tous les arrondissements de Paris. Contactez-nous au 09 72 12 41 41 pour un depannage en urgence ou pour planifier un entretien preventif de votre rideau metallique.",
    ],
  },

  /* ── ARTICLE 2 ── */
  "motorisation-rideau-metallique-quel-moteur": {
    title: "Motorisation rideau metallique : quel moteur choisir ?",
    metaTitle: "Motorisation rideau metallique : guide choix moteur | DRM Paris",
    metaDescription:
      "Moteur tubulaire, central ou lateral pour votre rideau metallique ? Comparatif complet des marques (Somfy, Simu, ACM) et prix a partir de. Conseil expert DRM Paris.",
    heroImage: {
      src: "/images/gallery/motorisation-rideau-metallique-rideau-metallique-drm.webp",
      alt: "Motorisation de rideau metallique par un technicien DRM a Paris",
    },
    intro: [
      "La motorisation d\u2019un rideau metallique transforme le quotidien d\u2019un commercant. Fini les efforts physiques pour soulever un tablier de 80, 100 ou 150 kg chaque matin et chaque soir. Fini les risques de blessure au dos et les manipulations hasardeuses. Mais face a la diversite des moteurs disponibles sur le marche, choisir le bon modele peut vite devenir un casse-tete.",
      "Ce guide compare les trois grandes familles de moteurs pour rideau metallique (tubulaire, central et lateral), detaille les marques de reference et vous aide a identifier la solution la mieux adaptee a votre commerce parisien. Forts de plus de 25 ans d\u2019experience, nos techniciens DRM installent et depannent des motorisations chaque jour dans tout Paris.",
    ],
    sections: [
      {
        heading: "Le moteur tubulaire : la solution compacte pour rideau metallique de commerce",
        paragraphs: [
          "Le moteur tubulaire se loge directement a l\u2019interieur de l\u2019axe d\u2019enroulement du rideau. C\u2019est la solution la plus repandue pour les commerces parisiens car elle ne necessite aucun espace supplementaire : le moteur est invisible, integre dans le coffre existant.",
          "Son fonctionnement est simple et fiable. Le moteur entraine l\u2019axe en rotation, ce qui enroule ou deroule le tablier. Les modeles actuels offrent une puissance suffisante pour des rideaux allant jusqu\u2019a 120 kg environ, ce qui couvre la majorite des commerces de detail (boutiques, pharmacies, restaurants, salons de coiffure).",
          "La marque de reference en moteur tubulaire est Simu, fabricant francais base a Besancon. Les gammes Simu T5 et T6 sont reconnues pour leur fiabilite et leur silence de fonctionnement. Somfy propose egalement des moteurs tubulaires performants, notamment la gamme Somfy Oximo qui beneficie de la compatibilite avec les systemes domotiques io-homecontrol.",
          "Le prix d\u2019installation d\u2019un moteur tubulaire demarre a partir de 450 euros, fourniture et pose comprises. C\u2019est le meilleur rapport qualite-prix pour un rideau metallique de taille standard (jusqu\u2019a 4 metres de large et 3,5 metres de haut).",
        ],
        image: {
          src: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
          alt: "Moteur tubulaire pour rideau metallique installe par DRM",
        },
      },
      {
        heading: "Le moteur central : puissance et robustesse pour les grandes fermetures",
        paragraphs: [
          "Le moteur central (aussi appele moteur axial) se fixe a l\u2019exterieur de l\u2019axe, generalement dans le coffre ou en applique sur le mur au-dessus du rideau. Il entraine l\u2019axe par un systeme de chaine ou de courroie, ce qui lui permet de supporter des charges bien superieures au moteur tubulaire.",
          "C\u2019est la solution privilegiee pour les rideaux metalliques industriels, les grandes surfaces commerciales et les rideaux de garage professionnel. Un moteur central peut entrainer des tabliers de plus de 200 kg sans difficulte, la ou un moteur tubulaire atteint ses limites.",
          "La marque ACM (Automatismes et Controles du Mouvement) domine ce segment avec ses modeles ACM Titan et la gamme Unititan. Fabriques en Italie, ces moteurs sont reputes pour leur durabilite exceptionnelle en usage intensif. La gamme ACM 76 est particulierement appreciee des installateurs pour sa facilite de montage et ses fins de course electriques precises.",
          "Le Bi-Moteur Centris 60220 XXL est une autre reference pour les rideaux de tres grande dimension. Il offre un couple de demarrage eleve et une vitesse d\u2019ouverture rapide, un atout precieux pour les entrepots et les garages a fort trafic.",
          "Comptez a partir de 750 euros pour la fourniture et l\u2019installation d\u2019un moteur central, selon la puissance necessaire et la configuration du coffre.",
        ],
        image: {
          src: "/images/gallery/Kit-moteur-complet-ACM-rideau-metallique.webp",
          alt: "Kit moteur central ACM complet pour rideau metallique",
        },
      },
      {
        heading: "Le moteur lateral : l\u2019alternative gain de place pour fermeture metallique",
        paragraphs: [
          "Le moteur lateral se fixe sur le cote du rideau, au niveau de l\u2019axe. Il entraine l\u2019axe par un systeme de pignon et cremaillere ou par entrainement direct. Cette configuration libere totalement l\u2019espace au-dessus du rideau, un avantage decisif quand le linteau est trop bas pour accueillir un moteur central.",
          "Le Sommer GIGAroll CAET est la reference du marche en moteur lateral. Fabrique en Allemagne, il combine compacite, puissance et fiabilite. Son systeme de debrayage integre permet le passage en manoeuvre manuelle en cas de coupure de courant, un point de securite essentiel.",
          "Le moteur lateral est souvent choisi pour les renovations de commerces anciens a Paris, ou les contraintes architecturales (plafond bas, coffre reduit, poutre apparente) empechent l\u2019installation d\u2019un moteur central classique. Il convient aux rideaux metalliques de taille moyenne, jusqu\u2019a environ 150 kg de tablier.",
          "Le budget pour une motorisation laterale debute a partir de 600 euros, installation incluse. Le surcout par rapport au tubulaire se justifie par la polyvalence d\u2019installation et la facilite de maintenance (moteur accessible sans demonter le coffre).",
        ],
        image: {
          src: "/images/gallery/Moteur-lateral-SOMMER-GIGAroll-CAET.webp",
          alt: "Moteur lateral Sommer GIGAroll CAET pour rideau metallique",
        },
      },
      {
        heading: "Criteres de choix : comment selectionner la bonne motorisation pour votre rideau",
        paragraphs: [
          "Le choix du moteur depend de quatre criteres principaux que nos techniciens evaluent systematiquement lors du diagnostic sur place :",
          "Le poids du tablier est le critere numero un. Un tablier en lames pleines P57 de 4 metres de large pese environ 80 a 100 kg : un moteur tubulaire suffit. Un tablier industriel de 6 metres avec lames P90 depasse les 150 kg : un moteur central s\u2019impose.",
          "La frequence d\u2019utilisation compte enormement. Un commerce qui ouvre et ferme deux fois par jour (matin et soir) peut se contenter d\u2019un moteur standard. Un parking ou un entrepot avec des dizaines de cycles quotidiens necessite un moteur central concu pour l\u2019usage intensif, avec un systeme de refroidissement adapte.",
          "L\u2019espace disponible au-dessus du rideau (hauteur de linteau, profondeur du coffre) determine souvent le type de moteur par elimination. Moins de 200 mm de linteau ? Le moteur tubulaire ou lateral est la seule option. Plus de 300 mm ? Le moteur central devient envisageable.",
          "Enfin, le budget et le souhait de connectivite (commande a distance, integration domotique, telecommande multi-rideaux) orientent le choix vers telle ou telle marque. Somfy excelle en connectivite, ACM en robustesse pure, Simu en rapport qualite-prix.",
        ],
      },
      {
        heading: "Installation et mise en service de votre motorisation a Paris",
        paragraphs: [
          "L\u2019installation d\u2019un moteur de rideau metallique est une operation technique qui requiert des competences en mecanique, en electricite et en securite. Un moteur mal installe (couple insuffisant, fins de course mal reglees, cablage defectueux) entrainera des pannes repetees et une usure prematuree du tablier et des coulisses.",
          "Nos techniciens DRM realisent un diagnostic complet avant chaque motorisation : mesure du tablier, pesee, verification de l\u2019etat de l\u2019axe, des ressorts et des coulisses. Si des pieces sont usees, nous les remplacons avant de poser le moteur pour garantir un fonctionnement optimal.",
          "Chaque installation comprend le reglage precis des fins de course haute et basse, la programmation de la telecommande (ou du boitier a boutons), le test de la manoeuvre de secours et la remise d\u2019un carnet d\u2019entretien. Nous formons egalement le commercant a l\u2019utilisation quotidienne et aux gestes de maintenance simples.",
          "Pour un devis gratuit et personnalise, appelez le 09 72 12 41 41. Nos techniciens se deplacent dans tout Paris et en Ile-de-France pour evaluer votre installation et vous recommander la motorisation ideale.",
        ],
        image: {
          src: "/images/gallery/raccordement-rideau-metallique-drm.webp",
          alt: "Raccordement electrique motorisation rideau metallique par DRM",
        },
      },
    ],
    conclusion: [
      "Le choix d\u2019un moteur pour rideau metallique ne s\u2019improvise pas. Entre le tubulaire compact et economique, le central puissant et endurant, et le lateral polyvalent, chaque technologie repond a un besoin precis. Le poids du tablier, la frequence d\u2019utilisation et l\u2019espace disponible sont les trois criteres determinants.",
      "DRM Paris vous accompagne de l\u2019etude technique a l\u2019installation finale, avec des marques eprouvees (Somfy, Simu, ACM, Sommer) et une garantie sur chaque motorisation posee. Contactez-nous au 09 72 12 41 41 pour un conseil personnalise et un devis gratuit.",
    ],
  },

  /* ── ARTICLE 3 ── */
  "entretien-rideau-metallique-gestes-preventifs": {
    title: "Entretien rideau metallique : les gestes qui evitent les pannes",
    metaTitle: "Entretien rideau metallique : guide preventif complet | DRM Paris",
    metaDescription:
      "Decouvrez les gestes d\u2019entretien essentiels pour votre rideau metallique : frequence, points de controle, signes d\u2019usure et contrat de maintenance. Conseil DRM Paris.",
    heroImage: {
      src: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
      alt: "Entretien preventif d\u2019un rideau metallique par un technicien DRM",
    },
    intro: [
      "Un rideau metallique, c\u2019est comme un vehicule : sans entretien regulier, il finit par tomber en panne au pire moment. La lame qui coince un lundi matin a l\u2019ouverture, le moteur qui grille un samedi de soldes, la serrure qui lache un soir de fermeture\u2026 Ces situations de crise sont dans la grande majorite des cas evitables grace a un entretien preventif methodique.",
      "DRM Paris entretient des centaines de rideaux metalliques dans la capitale depuis plus de 25 ans. Ce guide partage les gestes concrets que nos techniciens recommandent a chaque commercant pour maximiser la duree de vie de leur fermeture metallique et eviter les pannes couteuses.",
    ],
    sections: [
      {
        heading: "A quelle frequence entretenir son rideau metallique de commerce ?",
        paragraphs: [
          "La frequence d\u2019entretien depend de l\u2019intensite d\u2019utilisation et de l\u2019environnement du rideau. Pour un commerce standard (deux cycles par jour, ouverture le matin et fermeture le soir), un entretien complet tous les 6 mois est le minimum recommande. Un entretien trimestriel est ideal pour les commerces situes en zone a forte pollution ou a proximite d\u2019axes routiers tres frequentes.",
          "Pour les rideaux a usage intensif (parkings, entrepots, locaux industriels avec plus de 10 cycles par jour), un entretien tous les 3 mois est indispensable. Le nombre de cycles quotidiens est le facteur d\u2019usure numero un : chaque ouverture-fermeture sollicite les ressorts, les coulisses, les lames et le moteur.",
          "Entre deux entretiens professionnels, le commercant peut realiser un controle visuel mensuel rapide : verifier que les coulisses sont propres, que les lames ne presentent pas de deformation visible, que le rideau monte et descend de facon fluide sans a-coups ni bruit anormal. Ces observations simples permettent de detecter un probleme naissant avant qu\u2019il ne devienne une panne bloquante.",
        ],
        image: {
          src: "/images/gallery/entretien-rideau-metallique-rideau-de-fer.webp",
          alt: "Entretien complet d\u2019un rideau metallique de commerce",
        },
      },
      {
        heading: "Les points de controle essentiels lors de la maintenance preventive",
        paragraphs: [
          "Un entretien professionnel de rideau metallique couvre systematiquement les elements suivants. C\u2019est cette rigueur qui fait la difference entre un rideau qui dure 10 ans et un rideau qui en dure 25 :",
          "Les coulisses en U (rails lateraux) doivent etre nettoyees et degraissees. La poussiere, les residus de pollution et les particules metalliques s\u2019accumulent au fil des mois et creent un frottement qui ralentit le rideau et force le moteur. Un nettoyage suivi d\u2019une lubrification avec un produit silicone adapte reduit considerablement l\u2019usure.",
          "Les ressorts de compensation sont les pieces les plus sollicitees du mecanisme. Le technicien verifie leur tension, leur etat de surface (rouille, fissures, deformation) et leur equilibrage. Un ressort fatigue rend le rideau plus lourd et surcharge le moteur, accelerant son usure. Le remplacement preventif d\u2019un ressort use coute bien moins cher que le remplacement d\u2019un moteur grille par surcharge.",
          "L\u2019axe d\u2019enroulement et ses supports sont inspectes pour detecter tout jeu, toute deformation ou tout signe de corrosion. Un axe voile provoque une usure inegale des lames et des bruits de frottement a chaque manoeuvre.",
          "Le moteur (si le rideau est motorise) fait l\u2019objet d\u2019un controle electrique : consommation, etat du condensateur, verification des connexions et des fins de course. Un moteur qui consomme anormalement signale souvent un probleme mecanique en amont (ressort fatigue, coulisse encrassee).",
        ],
        image: {
          src: "/images/gallery/entretien-rideau-metallique-france-entretien.webp",
          alt: "Verification des composants lors de l\u2019entretien d\u2019un rideau metallique",
        },
      },
      {
        heading: "Reconnaitre les signes d\u2019usure avant la panne de votre fermeture metallique",
        paragraphs: [
          "Un rideau metallique previent toujours avant de tomber en panne. Apprendre a reconnaitre les signes annonciateurs vous permet d\u2019agir a temps et d\u2019eviter un blocage total :",
          "Un bruit metallique anormal (grincement, claquement, frottement) lors de l\u2019ouverture ou la fermeture indique un probleme de lubrification, de lame deformee ou de coulisse usee. Un rideau en bon etat fonctionne de facon fluide et relativement silencieuse.",
          "Un ralentissement progressif de la vitesse d\u2019ouverture ou de fermeture signale un moteur qui fatigue, des ressorts qui perdent leur tension ou des coulisses qui freinent. Si vous constatez que votre rideau met plus de temps qu\u2019avant pour s\u2019ouvrir completement, faites intervenir un technicien.",
          "Des a-coups ou des arrets intermittents pendant la manoeuvre trahissent un probleme electrique (faux contact, condensateur defaillant) ou mecanique (lame tordue qui accroche). N\u2019attendez pas que le rideau se bloque completement : un depannage preventif coute toujours moins cher qu\u2019un depannage d\u2019urgence.",
          "De la rouille visible sur les lames, les coulisses ou le coffre doit alerter. La corrosion affaiblit structurellement le rideau et peut provoquer le percement des lames. Un traitement anticorrosion applique a temps prolonge significativement la duree de vie de l\u2019installation.",
        ],
      },
      {
        heading: "Le contrat d\u2019entretien : la tranquillite pour votre activite commerciale",
        paragraphs: [
          "Souscrire un contrat d\u2019entretien avec un professionnel comme DRM Paris est le meilleur investissement pour la perennite de votre rideau metallique. Un contrat d\u2019entretien comprend generalement une a deux visites annuelles de maintenance preventive, avec un tarif preferentiel sur les pieces de remplacement et une priorite d\u2019intervention en cas de panne.",
          "Les avantages d\u2019un contrat sont concrets et mesurables. D\u2019abord, la prevention : chaque visite detecte et corrige les problemes avant qu\u2019ils ne causent un blocage. Ensuite, l\u2019economie : un entretien regulier prolonge la duree de vie du moteur, des ressorts et des lames de plusieurs annees. Enfin, la reactivite : en cas de panne, les clients sous contrat sont depannes en priorite, souvent dans la journee.",
          "Le cout d\u2019un contrat d\u2019entretien annuel pour un rideau metallique de commerce debute a partir de 190 euros pour une visite semestrielle. Ce montant est derisoire compare au cout d\u2019un depannage d\u2019urgence (a partir de 150 euros la seule intervention) ou au remplacement premature d\u2019un moteur (a partir de 650 euros).",
          "Pour les commercants disposant de plusieurs rideaux metalliques (centres commerciaux, chaines de magasins, galeries marchandes), DRM propose des contrats multi-sites avec des tarifs degressifs et un interlocuteur unique pour l\u2019ensemble du parc de fermetures.",
        ],
        image: {
          src: "/images/gallery/certification-qualite-depannage-rideau-metallique-drm.webp",
          alt: "Certification qualite DRM pour l\u2019entretien de rideaux metalliques",
        },
      },
      {
        heading: "Conseils pratiques d\u2019entretien au quotidien pour votre rideau de fer",
        paragraphs: [
          "En complement de l\u2019entretien professionnel, quelques gestes simples au quotidien contribuent significativement a la longevite de votre rideau metallique :",
          "Ne laissez jamais le rideau a mi-course pendant une periode prolongee. Cette position maintient les ressorts en tension permanente et accelere leur fatigue. Ouvrez completement ou fermez completement.",
          "Nettoyez les rails lateraux (coulisses) une fois par mois avec un chiffon sec ou un coup d\u2019aspirateur pour retirer les poussieres et debris. Evitez l\u2019eau qui favorise la corrosion.",
          "En cas de pluie forte ou d\u2019inondation, sechez les lames basses et la lame finale des que possible. L\u2019humidite stagnante est le premier facteur de rouille sur les fermetures metalliques, surtout a Paris ou les trottoirs sont regulierement laves.",
          "Evitez de claquer le rideau en fin de course. Utilisez le bouton de commande (montee, arret, descente) plutot que de couper l\u2019alimentation pendant la manoeuvre. Les a-coups repetees dereglement les fins de course et usent prematurement les lames et les attaches du tablier sur l\u2019axe.",
        ],
      },
    ],
    conclusion: [
      "L\u2019entretien d\u2019un rideau metallique n\u2019est pas une depense superflue, c\u2019est un investissement rentable. Un rideau bien entretenu dure plus de 25 ans, fonctionne en silence et protege efficacement votre commerce. A l\u2019inverse, un rideau neglige tombe en panne au bout de quelques annees et necessite des reparations de plus en plus couteuses.",
      "DRM Paris propose des contrats d\u2019entretien adaptes a chaque type de commerce, du petit rideau de boutique au rideau industriel de grande dimension. Nos techniciens se deplacent dans tout Paris et en Ile-de-France pour assurer la maintenance preventive de vos fermetures metalliques. Appelez le 09 72 12 41 41 pour souscrire votre contrat ou planifier votre prochaine visite d\u2019entretien.",
    ],
  },
};

/* ───────────────────────────────────────────────
   METADATA
   ─────────────────────────────────────────────── */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) {
    return { title: "Article non trouve | DRM Paris" };
  }
  return {
    title: article.metaTitle,
    description: article.metaDescription,
  };
}

/* ───────────────────────────────────────────────
   STATIC PARAMS
   ─────────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

/* ───────────────────────────────────────────────
   STYLES
   ─────────────────────────────────────────────── */

const FOREST = "#1B4332";
const GOLD = "#C9A84C";
const TEXT = "#444444";
const LIGHT_BG = "#F8F7F4";
const FONT = "Urbanist, sans-serif";

/* ───────────────────────────────────────────────
   PAGE COMPONENT
   ─────────────────────────────────────────────── */

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <>
        <Header />
        <main style={{ padding: "160px 30px 80px", minHeight: "60vh", textAlign: "center" }}>
          <h1 style={{ fontFamily: FONT, fontSize: 32, color: FOREST }}>Article non trouve</h1>
          <p style={{ fontFamily: FONT, fontSize: 16, color: TEXT, marginTop: 16 }}>
            Cet article n&apos;existe pas. <a href="/blog" style={{ color: GOLD, textDecoration: "underline" }}>Retour au blog</a>
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            padding: "180px 30px 80px",
            backgroundColor: FOREST,
            backgroundImage: `linear-gradient(rgba(27,67,50,0.82), rgba(27,67,50,0.92)), url(${article.heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: FONT,
                fontSize: 13,
                fontWeight: 600,
                color: GOLD,
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 18,
              }}
            >
              Blog DRM Paris
            </span>
            <h1
              style={{
                fontFamily: FONT,
                fontSize: 40,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {article.title}
            </h1>
            <p
              style={{
                fontFamily: FONT,
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                marginTop: 20,
                lineHeight: 1.6,
              }}
            >
              Publie par <strong style={{ color: GOLD }}>DRM Paris</strong> &mdash; Specialiste rideau metallique depuis plus de 25 ans
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section style={{ padding: "60px 30px 40px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {article.intro.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: FONT,
                  fontSize: 17,
                  color: TEXT,
                  lineHeight: 1.85,
                  marginBottom: 20,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* ── Sections ── */}
        {article.sections.map((section, idx) => {
          const isEven = idx % 2 === 0;
          const bgColor = isEven ? "#FFFFFF" : LIGHT_BG;

          return (
            <section key={idx} style={{ padding: "60px 30px", backgroundColor: bgColor }}>
              <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <h2
                  style={{
                    fontFamily: FONT,
                    fontSize: 28,
                    fontWeight: 600,
                    color: FOREST,
                    lineHeight: 1.3,
                    marginBottom: 24,
                    borderLeft: `4px solid ${GOLD}`,
                    paddingLeft: 16,
                  }}
                >
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontFamily: FONT,
                      fontSize: 16,
                      color: TEXT,
                      lineHeight: 1.85,
                      marginBottom: 18,
                    }}
                  >
                    {p}
                  </p>
                ))}

                {section.image && (
                  <div style={{ marginTop: 30, borderRadius: 10, overflow: "hidden" }}>
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: 10,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: FONT,
                        fontSize: 13,
                        color: "#888",
                        marginTop: 8,
                        fontStyle: "italic",
                      }}
                    >
                      {section.image.alt}
                    </p>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* ── Conclusion ── */}
        <section style={{ padding: "60px 30px", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {article.conclusion.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: FONT,
                  fontSize: 17,
                  color: TEXT,
                  lineHeight: 1.85,
                  marginBottom: 20,
                  fontWeight: i === article.conclusion.length - 1 ? 500 : 400,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "70px 30px", backgroundColor: FOREST, textAlign: "center" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: FONT,
                fontSize: 30,
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: 16,
              }}
            >
              Besoin d&apos;un specialiste rideau metallique a Paris ?
            </h2>
            <p
              style={{
                fontFamily: FONT,
                fontSize: 16,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7,
                marginBottom: 30,
              }}
            >
              Depannage, motorisation, entretien &mdash; nos techniciens interviennent 7j/7 dans tout Paris.
              Devis gratuit et sans engagement.
            </p>
            <a
              href="tel:0972124141"
              style={{
                display: "inline-block",
                fontFamily: FONT,
                fontSize: 18,
                fontWeight: 700,
                color: FOREST,
                backgroundColor: GOLD,
                padding: "16px 40px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              09 72 12 41 41
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
