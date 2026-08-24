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
}

export const ENTITES_FR: Record<string, string> = {
  World: "Monde",
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
