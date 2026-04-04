// Donnees hyper-locales par zone (rues commercantes, quartiers, landmarks, metros)
// Donnees reelles — rues avec commerces et devantures a rideaux metalliques

export const zonesLocal: Record<
  string,
  {
    streets: string[];
    neighborhoods: string[];
    landmarks: string[];
    commerceTypes: string[];
    metroStations: string[];
  }
> = {
  "paris-1er": {
    streets: [
      "rue de Rivoli",
      "rue Saint-Honore",
      "rue des Halles",
      "rue Montorgueil",
      "rue de la Ferronnerie",
      "rue Berger",
      "rue Pierre Lescot",
    ],
    neighborhoods: [
      "Les Halles",
      "Palais-Royal",
      "Place Vendome",
      "Saint-Germain-l'Auxerrois",
    ],
    landmarks: [
      "Forum des Halles",
      "Jardin des Tuileries",
      "Palais Royal",
      "Eglise Saint-Eustache",
      "Place du Chatelet",
    ],
    commerceTypes: [
      "boutiques de luxe",
      "restaurants et brasseries",
      "commerces de pret-a-porter",
    ],
    metroStations: [
      "Chatelet",
      "Les Halles",
      "Palais Royal - Musee du Louvre",
      "Louvre - Rivoli",
      "Tuileries",
    ],
  },

  "paris-3e": {
    streets: [
      "rue de Bretagne",
      "rue de Turenne",
      "rue du Temple",
      "rue de Saintonge",
      "rue Charlot",
      "rue des Francs-Bourgeois",
    ],
    neighborhoods: [
      "Haut Marais",
      "Arts et Metiers",
      "Enfants-Rouges",
      "Temple",
    ],
    landmarks: [
      "Marche des Enfants Rouges",
      "Musee Carnavalet",
      "Conservatoire National des Arts et Metiers",
      "Square du Temple",
    ],
    commerceTypes: [
      "galeries d'art et ateliers",
      "boutiques de createurs",
      "restaurants branchees",
    ],
    metroStations: [
      "Arts et Metiers",
      "Temple",
      "Filles du Calvaire",
      "Republique",
    ],
  },

  "paris-4e": {
    streets: [
      "rue de Rivoli",
      "rue Saint-Antoine",
      "rue des Rosiers",
      "rue Francois Miron",
      "rue de la Verrerie",
      "rue du Roi de Sicile",
    ],
    neighborhoods: [
      "Le Marais",
      "Ile Saint-Louis",
      "Ile de la Cite",
      "Saint-Paul",
      "Beaubourg",
    ],
    landmarks: [
      "Centre Pompidou",
      "Place des Vosges",
      "Hotel de Ville",
      "Notre-Dame de Paris",
      "BHV Marais",
    ],
    commerceTypes: [
      "boutiques de mode",
      "restaurants et traiteurs casher",
      "galeries et concept stores",
    ],
    metroStations: [
      "Hotel de Ville",
      "Saint-Paul",
      "Pont Marie",
      "Cite",
      "Rambuteau",
    ],
  },

  "paris-5e": {
    streets: [
      "rue Mouffetard",
      "rue de la Huchette",
      "rue Saint-Jacques",
      "boulevard Saint-Michel",
      "rue des Ecoles",
      "rue Monge",
    ],
    neighborhoods: [
      "Quartier Latin",
      "Mouffetard",
      "Val-de-Grace",
      "Jardin des Plantes",
    ],
    landmarks: [
      "Pantheon",
      "Sorbonne",
      "Jardin des Plantes",
      "Grande Mosquee de Paris",
      "Arenes de Lutece",
    ],
    commerceTypes: [
      "librairies et papeteries",
      "restaurants et kebabs",
      "commerces alimentaires de proximite",
    ],
    metroStations: [
      "Maubert - Mutualite",
      "Cardinal Lemoine",
      "Place Monge",
      "Censier - Daubenton",
      "Saint-Michel",
    ],
  },

  "paris-6e": {
    streets: [
      "rue de Rennes",
      "rue du Cherche-Midi",
      "rue de Seine",
      "rue Bonaparte",
      "boulevard Saint-Germain",
      "rue de Buci",
    ],
    neighborhoods: [
      "Saint-Germain-des-Pres",
      "Odeon",
      "Luxembourg",
      "Notre-Dame-des-Champs",
    ],
    landmarks: [
      "Jardin du Luxembourg",
      "Eglise Saint-Germain-des-Pres",
      "Marche Saint-Germain",
      "Odeon - Theatre de l'Europe",
    ],
    commerceTypes: [
      "galeries d'art et antiquaires",
      "boutiques de pret-a-porter haut de gamme",
      "librairies et editeurs",
    ],
    metroStations: [
      "Saint-Germain-des-Pres",
      "Odeon",
      "Mabillon",
      "Rennes",
      "Saint-Sulpice",
    ],
  },

  "paris-7e": {
    streets: [
      "rue Cler",
      "rue Saint-Dominique",
      "rue de Grenelle",
      "boulevard Raspail",
      "avenue de la Bourdonnais",
      "rue du Bac",
    ],
    neighborhoods: [
      "Gros-Caillou",
      "Invalides",
      "Ecole Militaire",
      "Saint-Thomas-d'Aquin",
    ],
    landmarks: [
      "Tour Eiffel",
      "Musee d'Orsay",
      "Hotel des Invalides",
      "Champ-de-Mars",
      "Assemblee Nationale",
    ],
    commerceTypes: [
      "commerces alimentaires de qualite",
      "boulangeries et epiceries fines",
      "boutiques pour touristes",
    ],
    metroStations: [
      "Ecole Militaire",
      "La Tour-Maubourg",
      "Invalides",
      "Rue du Bac",
      "Solferino",
    ],
  },

  "paris-8e": {
    streets: [
      "avenue des Champs-Elysees",
      "rue du Faubourg Saint-Honore",
      "boulevard Haussmann",
      "avenue Montaigne",
      "rue de Ponthieu",
      "rue La Boetie",
      "rue Marbeuf",
    ],
    neighborhoods: [
      "Triangle d'Or",
      "Madeleine",
      "Faubourg du Roule",
      "Europe",
    ],
    landmarks: [
      "Arc de Triomphe",
      "Grand Palais",
      "Eglise de la Madeleine",
      "Parc Monceau",
      "Palais de l'Elysee",
    ],
    commerceTypes: [
      "maisons de luxe et joailleries",
      "restaurants gastronomiques",
      "boutiques de grandes marques",
    ],
    metroStations: [
      "George V",
      "Franklin D. Roosevelt",
      "Champs-Elysees - Clemenceau",
      "Madeleine",
      "Saint-Lazare",
    ],
  },

  "paris-9e": {
    streets: [
      "boulevard Haussmann",
      "rue La Fayette",
      "rue des Martyrs",
      "rue du Faubourg Montmartre",
      "rue de Clichy",
      "rue de Chateaudun",
    ],
    neighborhoods: [
      "Grands Boulevards",
      "Nouvelle Athenes",
      "Lorette",
      "Faubourg Montmartre",
    ],
    landmarks: [
      "Galeries Lafayette",
      "Opera Garnier",
      "Printemps Haussmann",
      "Folies Bergere",
      "Musee Grevin",
    ],
    commerceTypes: [
      "grands magasins et commerces de detail",
      "restaurants et bars",
      "magasins d'electronique et telephonie",
    ],
    metroStations: [
      "Opera",
      "Grands Boulevards",
      "Cadet",
      "Notre-Dame-de-Lorette",
      "Trinite - d'Estienne d'Orves",
    ],
  },

  "paris-10e": {
    streets: [
      "rue du Faubourg Saint-Denis",
      "rue du Faubourg Saint-Martin",
      "boulevard de Magenta",
      "boulevard de Strasbourg",
      "rue de Marseille",
      "rue du Chateau-d'Eau",
    ],
    neighborhoods: [
      "Canal Saint-Martin",
      "Gare du Nord",
      "Gare de l'Est",
      "Porte Saint-Denis",
      "Louis Blanc",
    ],
    landmarks: [
      "Gare du Nord",
      "Gare de l'Est",
      "Canal Saint-Martin",
      "Porte Saint-Denis",
      "Marche Saint-Quentin",
    ],
    commerceTypes: [
      "grossistes textile et maroquinerie",
      "restaurants indiens et pakistanais",
      "coiffeurs et salons de beaute afro",
    ],
    metroStations: [
      "Gare du Nord",
      "Gare de l'Est",
      "Republique",
      "Chateau d'Eau",
      "Jacques Bonsergent",
    ],
  },

  "paris-11e": {
    streets: [
      "rue Oberkampf",
      "rue de la Roquette",
      "boulevard Voltaire",
      "rue du Faubourg Saint-Antoine",
      "avenue de la Republique",
      "boulevard Richard-Lenoir",
      "rue de Charonne",
    ],
    neighborhoods: [
      "Oberkampf",
      "Bastille",
      "Charonne",
      "Roquette",
      "Folie-Mericourt",
    ],
    landmarks: [
      "Place de la Bastille",
      "Place de la Republique",
      "Marche de la Bastille",
      "Cirque d'Hiver",
      "Marche d'Aligre",
    ],
    commerceTypes: [
      "bars et restaurants branchees",
      "ateliers d'artisans et ebenistes",
      "commerces de bouche",
    ],
    metroStations: [
      "Bastille",
      "Oberkampf",
      "Voltaire",
      "Parmentier",
      "Charonne",
      "Republique",
    ],
  },

  "paris-12e": {
    streets: [
      "avenue Daumesnil",
      "rue de Lyon",
      "boulevard de Reuilly",
      "cours de Vincennes",
      "rue du Faubourg Saint-Antoine",
      "avenue du General Michel Bizot",
    ],
    neighborhoods: [
      "Bercy",
      "Nation",
      "Aligre",
      "Picpus",
      "Bel-Air",
    ],
    landmarks: [
      "Gare de Lyon",
      "Bercy Village",
      "Viaduc des Arts",
      "Bois de Vincennes",
      "AccorHotels Arena",
    ],
    commerceTypes: [
      "commerces de meubles et decoration",
      "restaurants et brasseries de gare",
      "boutiques artisanales sous le viaduc",
    ],
    metroStations: [
      "Gare de Lyon",
      "Nation",
      "Bercy",
      "Reuilly - Diderot",
      "Daumesnil",
      "Ledru-Rollin",
    ],
  },

  "paris-13e": {
    streets: [
      "avenue d'Italie",
      "avenue de Choisy",
      "rue de Tolbiac",
      "boulevard Auguste Blanqui",
      "rue Bobillot",
      "avenue d'Ivry",
    ],
    neighborhoods: [
      "Chinatown",
      "Butte-aux-Cailles",
      "Gobelins",
      "Place d'Italie",
      "Bibliotheque",
    ],
    landmarks: [
      "Bibliotheque Nationale de France",
      "Place d'Italie",
      "Centre commercial Italie 2",
      "Manufacture des Gobelins",
      "Marche Auguste Blanqui",
    ],
    commerceTypes: [
      "supermarches et restaurants asiatiques",
      "commerces de gros alimentaires",
      "restaurants et bars de quartier",
    ],
    metroStations: [
      "Place d'Italie",
      "Tolbiac",
      "Bibliotheque Francois Mitterrand",
      "Les Gobelins",
      "Corvisart",
    ],
  },

  "paris-14e": {
    streets: [
      "rue Daguerre",
      "avenue du General Leclerc",
      "rue d'Alesia",
      "rue Raymond Losserand",
      "avenue du Maine",
      "boulevard du Montparnasse",
    ],
    neighborhoods: [
      "Montparnasse",
      "Denfert-Rochereau",
      "Alesia",
      "Pernety",
      "Plaisance",
    ],
    landmarks: [
      "Tour Montparnasse",
      "Gare Montparnasse",
      "Catacombes de Paris",
      "Cimetiere du Montparnasse",
      "Marche Daguerre",
    ],
    commerceTypes: [
      "commerces de bouche et fromageries",
      "brasseries et creperies bretonnes",
      "boutiques de pret-a-porter",
    ],
    metroStations: [
      "Montparnasse - Bienvenue",
      "Denfert-Rochereau",
      "Alesia",
      "Pernety",
      "Mouton-Duvernet",
    ],
  },

  "paris-15e": {
    streets: [
      "rue du Commerce",
      "rue de Vaugirard",
      "avenue Emile Zola",
      "boulevard de Grenelle",
      "rue Lecourbe",
      "rue de la Convention",
      "rue Saint-Charles",
    ],
    neighborhoods: [
      "Commerce",
      "Grenelle",
      "Beaugrenelle",
      "Javel",
      "Vaugirard",
      "Convention",
    ],
    landmarks: [
      "Centre commercial Beaugrenelle",
      "Parc des Expositions - Porte de Versailles",
      "Parc Andre Citroen",
      "Hopital Necker",
      "Marche de Grenelle",
    ],
    commerceTypes: [
      "commerces de proximite et superettes",
      "restaurants familiaux",
      "boutiques de services et pressing",
    ],
    metroStations: [
      "Commerce",
      "La Motte-Picquet - Grenelle",
      "Convention",
      "Vaugirard",
      "Emile Zola",
      "Charles Michels",
    ],
  },

  "paris-16e": {
    streets: [
      "rue de Passy",
      "avenue Victor Hugo",
      "rue de l'Annonciation",
      "avenue Mozart",
      "rue d'Auteuil",
      "avenue Paul Doumer",
    ],
    neighborhoods: [
      "Passy",
      "Auteuil",
      "Trocadero",
      "Muette",
      "Porte Dauphine",
    ],
    landmarks: [
      "Trocadero",
      "Palais de Chaillot",
      "Bois de Boulogne",
      "Maison de la Radio",
      "Stade du Parc des Princes",
    ],
    commerceTypes: [
      "boutiques haut de gamme",
      "commerces alimentaires premium",
      "salons de coiffure et instituts de beaute",
    ],
    metroStations: [
      "Trocadero",
      "Passy",
      "La Muette",
      "Ranelagh",
      "Rue de la Pompe",
      "Victor Hugo",
    ],
  },

  "paris-17e": {
    streets: [
      "avenue de Clichy",
      "rue de Levis",
      "avenue de Villiers",
      "rue des Batignolles",
      "boulevard des Batignolles",
      "rue de Tocqueville",
      "avenue des Ternes",
    ],
    neighborhoods: [
      "Batignolles",
      "Ternes",
      "Epinettes",
      "Plaine Monceau",
      "Guy Moquet",
    ],
    landmarks: [
      "Palais des Congres",
      "Marche des Batignolles",
      "Parc Martin Luther King",
      "Place de Clichy",
      "Marche de Levis",
    ],
    commerceTypes: [
      "commerces de bouche et marches",
      "restaurants et bistrots de quartier",
      "agences immobilieres et services",
    ],
    metroStations: [
      "Villiers",
      "Place de Clichy",
      "Brochant",
      "Guy Moquet",
      "Ternes",
      "Malesherbes",
    ],
  },

  "paris-18e": {
    streets: [
      "boulevard Barbes",
      "rue Ordener",
      "rue du Poteau",
      "rue Lepic",
      "boulevard de Clichy",
      "rue Doudeauville",
      "rue Myrha",
    ],
    neighborhoods: [
      "Montmartre",
      "Goutte d'Or",
      "Clignancourt",
      "Jules Joffrin",
      "La Chapelle",
      "Chateau Rouge",
    ],
    landmarks: [
      "Sacre-Coeur",
      "Marche aux Puces de Saint-Ouen",
      "Place du Tertre",
      "Marche Barbes",
      "Moulin Rouge",
    ],
    commerceTypes: [
      "grossistes en textile et cosmetiques",
      "commerces alimentaires africains et orientaux",
      "restaurants et snacks",
    ],
    metroStations: [
      "Barbes - Rochechouart",
      "Chateau Rouge",
      "Marcadet - Poissonniers",
      "Jules Joffrin",
      "Anvers",
      "Lamarck - Caulaincourt",
    ],
  },

  "paris-19e": {
    streets: [
      "avenue Jean Jaures",
      "rue de Belleville",
      "rue de Crimee",
      "avenue Secretan",
      "rue de Meaux",
      "avenue de Flandre",
    ],
    neighborhoods: [
      "Buttes-Chaumont",
      "Villette",
      "Stalingrad",
      "Place des Fetes",
      "Jourdain",
    ],
    landmarks: [
      "Parc des Buttes-Chaumont",
      "Cite des Sciences et de l'Industrie",
      "Parc de la Villette",
      "Bassin de la Villette",
      "Philharmonie de Paris",
    ],
    commerceTypes: [
      "commerces de bouche et primeurs",
      "restaurants et snacks",
      "bazars et commerces de detail",
    ],
    metroStations: [
      "Jaures",
      "Stalingrad",
      "Laumiere",
      "Bolivar",
      "Buttes Chaumont",
      "Place des Fetes",
    ],
  },

  "paris-20e": {
    streets: [
      "rue des Pyrenees",
      "boulevard de Menilmontant",
      "rue de Menilmontant",
      "rue de Bagnolet",
      "boulevard de Charonne",
      "rue d'Avron",
      "cours de Vincennes",
    ],
    neighborhoods: [
      "Menilmontant",
      "Belleville",
      "Pere-Lachaise",
      "Gambetta",
      "Jourdain",
      "Charonne",
    ],
    landmarks: [
      "Cimetiere du Pere-Lachaise",
      "Place Gambetta",
      "Parc de Belleville",
      "Eglise Notre-Dame-de-la-Croix",
      "Rue de Belleville (vue panoramique)",
    ],
    commerceTypes: [
      "commerces de proximite et multiservices",
      "restaurants chinois et asiatiques",
      "ateliers d'artistes et espaces creatifs",
    ],
    metroStations: [
      "Gambetta",
      "Pere Lachaise",
      "Menilmontant",
      "Belleville",
      "Jourdain",
      "Porte de Bagnolet",
    ],
  },

  "boulogne-billancourt": {
    streets: [
      "rue du Point du Jour",
      "avenue Jean-Baptiste Clement",
      "route de la Reine",
      "avenue du General Leclerc",
      "boulevard Jean Jaures",
      "rue de Sevres",
    ],
    neighborhoods: [
      "Point du Jour",
      "Silly - Gallieni",
      "Republique",
      "Les Princes - Marmottan",
      "Centre-ville",
    ],
    landmarks: [
      "Ile Seguin",
      "Parc de Billancourt",
      "Stade Roland-Garros",
      "Centre commercial Les Passages",
      "Musee des Annees 30",
    ],
    commerceTypes: [
      "commerces de proximite et services",
      "restaurants et brasseries",
      "boutiques de mode et decoration",
    ],
    metroStations: [
      "Boulogne - Jean Jaures",
      "Boulogne - Pont de Saint-Cloud",
      "Marcel Sembat",
      "Billancourt",
      "Pont de Sevres",
    ],
  },

  "levallois-perret": {
    streets: [
      "rue du President Wilson",
      "rue Aristide Briand",
      "rue Rivay",
      "rue Louis Rouquier",
      "rue Voltaire",
      "rue Carnot",
    ],
    neighborhoods: [
      "Centre-ville",
      "Front de Seine",
      "Louise Michel",
      "Chaptal",
    ],
    landmarks: [
      "Mairie de Levallois",
      "Parc de la Planchette",
      "Centre aquatique",
      "Marche de Levallois",
    ],
    commerceTypes: [
      "commerces de centre-ville",
      "restaurants et fast-foods",
      "agences et bureaux avec devantures",
    ],
    metroStations: [
      "Louise Michel",
      "Anatole France",
      "Pont de Levallois - Becon",
    ],
  },

  "neuilly-sur-seine": {
    streets: [
      "avenue Charles de Gaulle",
      "rue Madeleine Michelis",
      "rue du Commandant Pilot",
      "avenue du Roule",
      "boulevard du Chateau",
      "rue de Chartres",
    ],
    neighborhoods: [
      "Sablons",
      "Bagatelle",
      "Roule",
      "Saint-James",
      "Centre-ville",
    ],
    landmarks: [
      "Ile de la Jatte",
      "Jardin d'Acclimatation",
      "Porte Maillot",
      "Marche de Neuilly",
      "Mairie de Neuilly-sur-Seine",
    ],
    commerceTypes: [
      "boutiques haut de gamme",
      "commerces alimentaires premium",
      "restaurants gastronomiques et bistrots",
    ],
    metroStations: [
      "Les Sablons",
      "Pont de Neuilly",
      "Porte Maillot",
    ],
  },
};
