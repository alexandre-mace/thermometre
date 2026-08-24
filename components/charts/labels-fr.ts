/**
 * Traductions françaises des séries et entités OWID.
 *
 * Les couleurs des sources d'énergie suivent les conventions OWID (charbon
 * sombre, solaire jaune...) : elles sont devenues un langage que les lecteurs
 * reconnaissent, on ne les re-theme pas.
 */

export const SERIES_FR: Record<string, string> = {
  // Sources d'énergie / électricité
  Coal: "Charbon",
  Oil: "Pétrole",
  Gas: "Gaz",
  Nuclear: "Nucléaire",
  Hydropower: "Hydraulique",
  Wind: "Éolien",
  Solar: "Solaire",
  Bioenergy: "Bioénergies",
  Biofuels: "Biocarburants",
  "Other renewables": "Autres renouvelables",
  "Traditional biomass": "Biomasse traditionnelle",
  // Température
  Average: "Moyenne",
  "Lower bound": "Borne basse",
  "Upper bound": "Borne haute",
  // Secteurs d'émissions
  Agriculture: "Agriculture",
  "Land-use change and forestry": "Usage des terres et forêts",
  Waste: "Déchets",
  Buildings: "Bâtiments",
  Industry: "Industrie",
  "Manufacturing and construction": "Industrie manufacturière et construction",
  Transport: "Transport",
  "Electricity and heat": "Électricité et chaleur",
  "Fugitive emissions": "Émissions fugitives",
  "Other fuel combustion": "Autres combustions",
  "Aviation and shipping": "Aviation et transport maritime",
  // Gaz et origines
  "CO₂: fossil": "CO₂ : fossile",
  "CO₂: agriculture and land": "CO₂ : agriculture et sols",
  "CH₄: fossil": "CH₄ : fossile",
  "CH₄: agriculture and land": "CH₄ : agriculture et sols",
  "N₂O: fossil": "N₂O : fossile",
  "N₂O: agriculture and land": "N₂O : agriculture et sols",
  // Production vs consommation
  "Territorial emissions": "Émissions territoriales (production)",
  "Consumption-based emissions": "Émissions de consommation (importations comprises)",
  // Divers
  "Average of Church and White (2011) and UHSLC data": "Niveau moyen",
  "Central estimate": "Estimation centrale",
}



export const COULEURS_SERIES: Record<string, string> = {
  Coal: "#4d4d4d",
  Oil: "#8e6e53",
  Gas: "#b8860b",
  Nuclear: "#96c9e6",
  Hydropower: "#2a6da8",
  Wind: "#5fb8a2",
  Solar: "#f2b134",
  Bioenergy: "#7f9d55",
  Biofuels: "#a5c076",
  "Other renewables": "#4aa38a",
  "Traditional biomass": "#c0a482",
  "CO₂: fossil": "#4d4d4d",
  "CO₂: agriculture and land": "#8e6e53",
  "CH₄: fossil": "#c47c2b",
  "CH₄: agriculture and land": "#d9a441",
  "N₂O: fossil": "#5b7fa6",
  "N₂O: agriculture and land": "#8fb0cf",
}

export const ENTITES_FR: Record<string, string> = {
  World: "Monde",
  Antarctica: "Antarctique",
  Greenland: "Groenland",
  // Aliments (empreinte par kilogramme)
  Bananas: "Bananes",
  "Beef (beef herd)": "Bœuf (troupeau viande)",
  "Beef (dairy herd)": "Bœuf (troupeau laitier)",
  Cheese: "Fromage",
  Eggs: "Œufs",
  "Lamb & Mutton": "Agneau et mouton",
  Milk: "Lait",
  Maize: "Maïs",
  Nuts: "Fruits à coque",
  "Pig Meat": "Porc",
  Peas: "Pois",
  Potatoes: "Pommes de terre",
  "Poultry Meat": "Volaille",
  Rice: "Riz",
  Tomatoes: "Tomates",
  "Wheat & Rye": "Blé et seigle",
  "Tofu (soybeans)": "Tofu (soja)",
  "Prawns (farmed)": "Crevettes (élevage)",
  // Produits de la mer
  "Bivalves (farmed)": "Bivalves (élevage)",
  "Bivalves (wild)": "Bivalves (pêche)",
  "Carp (farmed)": "Carpe (élevage)",
  "Catfish (farmed)": "Poisson-chat (élevage)",
  Chicken: "Poulet (repère)",
  "Cod, haddock (wild)": "Cabillaud, églefin (pêche)",
  "Flounder (wild)": "Flet (pêche)",
  "Herring, sardines (wild)": "Hareng, sardines (pêche)",
  "Jack fish (wild)": "Carangue (pêche)",
  "Lobster (wild)": "Homard (pêche)",
  "Milkfish (farmed)": "Chanos (élevage)",
  "Other freshwater fish (farmed)": "Autres poissons d'eau douce (élevage)",
  "Other marine fish (farmed)": "Autres poissons marins (élevage)",
  "Tuna (wild)": "Thon (pêche)",
  "Trout (farmed)": "Truite (élevage)",
  "Tilapia (farmed)": "Tilapia (élevage)",
  "Squid (wild)": "Calmar (pêche)",
  "Silver/bighead (farmed)": "Carpes argentées (élevage)",
  "Shrimp (wild)": "Crevettes (pêche)",
  "Shrimp (farmed)": "Crevettes (élevage)",
  "Seaweed (farmed)": "Algues (élevage)",
  "Salmon, trout (wild)": "Saumon, truite (pêche)",
  "Salmon (farmed)": "Saumon (élevage)",
  "Redfish, bass (wild)": "Sébaste, bar (pêche)",
  France: "France",
  "United States": "États-Unis",
  "United Kingdom": "Royaume-Uni",
  China: "Chine",
  India: "Inde",
  Germany: "Allemagne",
  Spain: "Espagne",
  Italy: "Italie",
  Brazil: "Brésil",
  Russia: "Russie",
  Japan: "Japon",
  "European Union (27)": "Union européenne (27)",
  Europe: "Europe",
  Africa: "Afrique",
  Asia: "Asie",
  "North America": "Amérique du Nord",
  "South America": "Amérique du Sud",
  Oceania: "Océanie",
  "Northern Hemisphere": "Hémisphère Nord",
  "Southern Hemisphere": "Hémisphère Sud",
  Tropics: "Tropiques",
}

export const entiteFr = (nom: string) => ENTITES_FR[nom] ?? nom
export const serieFr = (nom: string) => SERIES_FR[nom] ?? nom
