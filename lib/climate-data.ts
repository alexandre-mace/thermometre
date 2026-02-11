/** Use CSS variable var(--data-accent) instead of this constant for inline styles */
export const ACCENT = "var(--data-accent)" as const

/* ── Types ── */

export interface DataCellData {
  id: string
  label: string
  value: string
  unit?: string
  detail?: string
  source?: string
  accent?: boolean
  colSpan?: number // out of 12
}

export interface FigureRef {
  id: string
  src: string
  alt: string
  caption: string
  source: string
  colSpan?: number // out of 12
}

export interface OwidChartRef {
  id: string
  embedUrl: string
  title: string
  source: string
  colSpan?: number
}

/* ══════════════════════════════════════════════
   Causes (WG1) — Pourquoi ça se réchauffe
   ══════════════════════════════════════════════ */

export const causesFigures: FigureRef[] = [
  {
    id: "wg1-spm1",
    src: "/figures/wg1/spm1.png",
    alt: "Changement de température observé depuis 1850",
    caption:
      "Changement de la température moyenne à la surface du globe par rapport à 1850-1900. La décennie 2011-2020 est plus chaude de 1,09°C que la période 1850-1900.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.1",
    colSpan: 6,
  },
  {
    id: "wg1-spm2",
    src: "/figures/wg1/spm2.png",
    alt: "Attribution du réchauffement : humain vs naturel",
    caption:
      "Contributions au réchauffement observé. Le forçage anthropique est le facteur dominant du réchauffement depuis le milieu du XXe siècle.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.2",
    colSpan: 6,
  },
  {
    id: "wg1-spm7",
    src: "/figures/wg1/spm7.png",
    alt: "Puits de carbone et émissions cumulées par scénario",
    caption:
      "Émissions cumulées de CO2 absorbées par les terres et les océans vs restant dans l'atmosphère. La proportion captée par les puits diminue dans les scénarios à fortes émissions.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.7",
    colSpan: 12,
  },
]

export const causesData: DataCellData[] = [
  {
    id: "warming-observed",
    label: "Réchauffement observé",
    value: "+1,1",
    unit: "°C",
    detail: "depuis l'ère préindustrielle (1850-1900)",
    source: "AR6 WG1 SPM A.1.2",
    accent: true,
  },
  {
    id: "human-share",
    label: "Part humaine",
    value: ">1,0",
    unit: "°C",
    detail: "du réchauffement attribué à l'activité humaine",
    source: "AR6 WG1 SPM A.1.3",
  },
  {
    id: "co2-concentration",
    label: "Concentration CO₂",
    value: "420",
    unit: "ppm",
    detail: "niveau sans précédent depuis 2 millions d'années",
    source: "AR6 WG1 SPM A.2.1",
  },
  {
    id: "cumulative-emissions",
    label: "Émissions cumulées",
    value: "2390",
    unit: "Gt",
    detail: "de CO₂ émises depuis 1850 (±240 Gt)",
    source: "AR6 WG1 SPM D.1.1",
  },
  {
    id: "carbon-budget",
    label: "Budget carbone 1,5°C",
    value: "500",
    unit: "Gt",
    detail: "de CO₂ restantes pour limiter à 1,5°C (50 %)",
    source: "AR6 WG1 SPM Table SPM.2",
  },
  {
    id: "projection-ssp585",
    label: "Projection SSP5-8.5",
    value: "+4,4",
    unit: "°C",
    detail: "réchauffement projeté en 2100 (meilleure estimation)",
    source: "AR6 WG1 SPM Table SPM.1",
    accent: true,
  },
]

/* ══════════════════════════════════════════════
   Conséquences (WG1 projections + WG2 + SYR)
   ══════════════════════════════════════════════ */

export const consequencesFigures: FigureRef[] = [
  // ── Top: synthèse SYR ──
  {
    id: "syr-spm2",
    src: "/figures/syr/spm2.png",
    alt: "Changements régionaux par niveau de réchauffement",
    caption:
      "À chaque incrément de réchauffement, les changements régionaux de température, d'humidité des sols et de précipitations extrêmes deviennent plus marqués.",
    source: "GIEC, 2023 : AR6 SYR SPM, Figure SPM.2",
    colSpan: 6,
  },
  {
    id: "syr-spm3",
    src: "/figures/syr/spm3.png",
    alt: "Sévérité des impacts projetés selon le réchauffement",
    caption:
      "Le changement climatique augmentera la sévérité des impacts sur les systèmes naturels et humains. Risques d'extinction d'espèces, stress thermique et pertes de rendements agricoles croissent fortement entre 1,5°C et 4°C.",
    source: "GIEC, 2023 : AR6 SYR SPM, Figure SPM.3",
    colSpan: 6,
  },
  // ── Risques ──
  {
    id: "wg2-spm3a",
    src: "/figures/wg2/spm3a.png",
    alt: "Risques par niveau de réchauffement — systèmes naturels",
    caption:
      "Évaluation des risques pour les systèmes naturels et humains en fonction du niveau de réchauffement. Les risques augmentent de manière non linéaire.",
    source: "GIEC, 2022 : AR6 WG2 SPM, Figure SPM.3 (a)",
    colSpan: 6,
  },
  {
    id: "wg2-spm3b",
    src: "/figures/wg2/spm3b.png",
    alt: "Risques par niveau de réchauffement — risques régionaux",
    caption:
      "Risques régionaux clés et raisons de préoccupation. Chaque incrément de réchauffement amplifie les risques de manière disproportionnée.",
    source: "GIEC, 2022 : AR6 WG2 SPM, Figure SPM.3 (b)",
    colSpan: 6,
  },
  // ── Projections climatiques (depuis Causes) ──
  {
    id: "wg1-spm5a",
    src: "/figures/wg1/spm5_1.png",
    alt: "Projections climatiques : température et précipitations",
    caption:
      "Changements projetés de la température annuelle moyenne et des précipitations moyennes à 1,5°C, 2°C et 4°C de réchauffement global.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.5 (a)",
    colSpan: 6,
  },
  {
    id: "wg1-spm5b",
    src: "/figures/wg1/spm5_2.png",
    alt: "Projections climatiques : humidité des sols",
    caption:
      "Changements projetés de l'humidité des sols à 1,5°C, 2°C et 4°C de réchauffement global. Assèchement marqué dans plusieurs régions.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.5 (b)",
    colSpan: 6,
  },
  // ── Extrêmes climatiques (depuis Causes) ──
  {
    id: "wg1-spm3",
    src: "/figures/wg1/spm3.png",
    alt: "Influence humaine sur les extrêmes climatiques",
    caption:
      "Changements observés dans les extrêmes de température et de précipitations depuis 1950, attribués à l'influence humaine.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.3",
    colSpan: 6,
  },
  {
    id: "wg1-spm6",
    src: "/figures/wg1/spm6.png",
    alt: "Extrêmes climatiques par niveau de réchauffement",
    caption:
      "Projections de l'intensité et de la fréquence des extrêmes de chaleur, de précipitations et de sécheresses à 1°C, 1,5°C, 2°C et 4°C de réchauffement.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.6",
    colSpan: 6,
  },
  // ── Réponse du système climatique (depuis Causes) ──
  {
    id: "wg1-spm8",
    src: "/figures/wg1/spm8.png",
    alt: "Réponse du système climatique par scénario",
    caption:
      "Projections de température, glace arctique, pH océanique et montée des mers selon les scénarios SSP. Certains changements sont irréversibles à l'échelle de plusieurs siècles.",
    source: "GIEC, 2021 : AR6 WG1 SPM, Figure SPM.8",
    colSpan: 12,
  },
  // ── Impacts observés (en dernier) ──
  {
    id: "wg2-spm2",
    src: "/figures/wg2/spm2.png",
    alt: "Impacts observés attribués au changement climatique",
    caption:
      "Impacts observés du changement climatique sur les systèmes humains et naturels. Les impacts négatifs dépassent largement les impacts positifs.",
    source: "GIEC, 2022 : AR6 WG2 SPM, Figure SPM.2",
    colSpan: 12,
  },
]

export const consequencesData: DataCellData[] = [
  {
    id: "population-vulnerable",
    label: "Population vulnérable",
    value: "3,6",
    unit: "mrd",
    detail: "personnes vivant dans des contextes hautement vulnérables au changement climatique",
    source: "AR6 WG2 SPM B.2",
  },
  {
    id: "sea-rise",
    label: "Montée des mers",
    value: "0,82",
    unit: "m",
    detail: "d'ici 2100 (fourchette probable 0,63\u20131,01 m, SSP5-8.5)",
    source: "AR6 WG1 SPM Table SPM.1",
  },
  {
    id: "water-scarcity",
    label: "Pénurie d'eau",
    value: "~4",
    unit: "mrd",
    detail: "personnes en situation de stress hydrique sévère",
    source: "AR6 WG2 SPM B.1.2",
  },
  {
    id: "agriculture",
    label: "Rendements Afrique",
    value: "\u221246",
    unit: "%",
    detail: "riz, maïs, blé (\u221223 à \u221246 %)",
    source: "AR6 WG2 Chapitre 9 (Afrique)",
  },
  {
    id: "food-insecurity",
    label: "Insécurité alimentaire",
    value: "80",
    unit: "mln",
    detail: "personnes supplémentaires exposées à la faim d'ici 2050",
    source: "AR6 WG2 SPM B.4.3",
  },
  {
    id: "biodiversity",
    label: "Biodiversité",
    value: "13\u201339",
    unit: "%",
    detail: "espèces à haut risque d'extinction (selon le niveau de réchauffement)",
    source: "AR6 WG2 SPM B.4.1",
  },
]

export const consequencesDataLarge: DataCellData[] = [
  {
    id: "sea-2300",
    label: "Montée des mers — horizon 2300",
    value: "15",
    unit: "m",
    detail:
      "Hausse potentielle d'ici 2300 avec instabilité des calottes glaciaires. Processus irréversibles à l'échelle de plusieurs siècles.",
    source: "AR6 WG1 SPM B.5.4",
    colSpan: 4,
  },
  {
    id: "permafrost",
    label: "Permafrost dégradé",
    value: "70",
    unit: "%",
    detail:
      "du permafrost proche de la surface pourrait dégeler d'ici 2100 sous SSP5-8.5. Libération de carbone et méthane amplificatrice.",
    source: "AR6 WG1 SPM B.4.3",
    colSpan: 4,
  },
  {
    id: "coral",
    label: "Récifs coralliens",
    value: ">99",
    unit: "%",
    detail:
      "des récifs coralliens tropicaux perdus à +2°C. Effondrement quasi total des écosystèmes récifaux.",
    source: "AR6 WG2 SPM B.4.1",
    accent: true,
    colSpan: 4,
  },
]

/* ══════════════════════════════════════════════
   Solutions (WG3 + SYR)
   ══════════════════════════════════════════════ */

export const solutionsFigures: FigureRef[] = [
  {
    id: "wg3-spm7",
    src: "/figures/wg3/spm7.png",
    alt: "Options d'atténuation et coûts",
    caption:
      "Vue d'ensemble des options d'atténuation et de leur potentiel estimé. Beaucoup d'options à moins de 100 USD/tCO2eq.",
    source: "GIEC, 2022 : AR6 WG3 SPM, Figure SPM.7",
    colSpan: 4,
  },
  {
    id: "wg3-spm6",
    src: "/figures/wg3/spm6.png",
    alt: "Potentiel de réduction côté demande",
    caption:
      "Stratégies côté demande : changements de comportement, d'infrastructure et de technologie pourraient réduire les émissions de 40 à 70% d'ici 2050.",
    source: "GIEC, 2022 : AR6 WG3 SPM, Figure SPM.6",
    colSpan: 4,
  },
  {
    id: "wg3-spm3",
    src: "/figures/wg3/spm3.png",
    alt: "Baisse des coûts et adoption des énergies renouvelables",
    caption:
      "Les coûts unitaires du solaire photovoltaïque, de l'éolien et des batteries lithium-ion ont fortement baissé depuis 2010, accompagnés d'une adoption croissante de ces technologies.",
    source: "GIEC, 2022 : AR6 WG3 SPM, Figure SPM.3",
    colSpan: 4,
  },
  {
    id: "wg3-spm4",
    src: "/figures/wg3/spm4.png",
    alt: "Trajectoires d'émissions modélisées",
    caption:
      "Trajectoires d'émissions de GES pour limiter le réchauffement à 1,5°C et 2°C. Les engagements actuels (NDC) ne suffisent pas à limiter le réchauffement à 1,5°C.",
    source: "GIEC, 2022 : AR6 WG3 SPM, Figure SPM.4",
    colSpan: 4,
  },
  {
    id: "syr-spm5",
    src: "/figures/syr/spm5.png",
    alt: "Trajectoires vers la neutralité carbone",
    caption:
      "Limiter le réchauffement à 1,5°C ou 2°C nécessite des réductions rapides, profondes et immédiates des émissions de GES dans tous les secteurs.",
    source: "GIEC, 2023 : AR6 SYR SPM, Figure SPM.5",
    colSpan: 4,
  },
]

export const solutionsData: DataCellData[] = [
  {
    id: "energy-share",
    label: "Énergie",
    value: "34",
    unit: "%",
    detail: "part des émissions mondiales de GES",
    source: "AR6 WG3 SPM Figure SPM.2",
  },
  {
    id: "industry-share",
    label: "Industrie",
    value: "24",
    unit: "%",
    detail: "part des émissions mondiales de GES",
    source: "AR6 WG3 SPM Figure SPM.2",
  },
  {
    id: "afolu-share",
    label: "AFOLU",
    value: "22",
    unit: "%",
    detail: "agriculture, forêts, usage des terres",
    source: "AR6 WG3 SPM Figure SPM.2",
  },
  {
    id: "transport-share",
    label: "Transport",
    value: "15",
    unit: "%",
    detail: "part des émissions mondiales de GES",
    source: "AR6 WG3 SPM Figure SPM.2",
  },
  {
    id: "reduction-2030",
    label: "Réduction 2030",
    value: "\u221243",
    unit: "%",
    detail: "réduction nécessaire d'ici 2030 pour 1,5°C",
    source: "AR6 WG3 SPM C.1",
    accent: true,
  },
  {
    id: "demand-potential",
    label: "Potentiel demande",
    value: "40\u201370",
    unit: "%",
    detail: "réduction possible côté demande d'ici 2050",
    source: "AR6 WG3 SPM C.10",
  },
]

/* ══════════════════════════════════════════════
   OWID interactive charts
   ══════════════════════════════════════════════ */

export const causesOwid: OwidChartRef[] = [
  {
    id: "temperature-anomaly",
    embedUrl: "https://ourworldindata.org/grapher/temperature-anomaly?tab=line",
    title: "Anomalie de température mondiale",
    source: "Our World in Data — CC BY",
    colSpan: 12,
  },
  {
    id: "co2-explorer-per-capita",
    embedUrl:
      "https://ourworldindata.org/explorers/co2?facet=none&hideControls=false&Gas+or+Warming=CO%E2%82%82&Accounting=Production-based&Fuel+or+Land+Use+Change=All+fossil+emissions&Count=Per+capita&country=CHN~USA~IND~GBR~OWID_WRL&tab=line",
    title: "Émissions CO₂ par habitant — grands émetteurs",
    source: "Our World in Data — CC BY",
    colSpan: 12,
  },
]

export const solutionsOwid: OwidChartRef[] = [
  {
    id: "energy-consumption-by-source",
    embedUrl:
      "https://ourworldindata.org/grapher/energy-consumption-by-source-and-country?stackMode=absolute&tab=chart",
    title: "Consommation d'énergie par source",
    source: "Our World in Data — CC BY",
    colSpan: 6,
  },
  {
    id: "electricity-prod-source-stacked",
    embedUrl:
      "https://ourworldindata.org/grapher/electricity-prod-source-stacked?tab=chart",
    title: "Production d'électricité par source",
    source: "Our World in Data — CC BY",
    colSpan: 6,
  },
]

export const owidFigures: FigureRef[] = [
  {
    id: "owid-food-emissions-supply-chain",
    src: "/figures/owid/food-emissions-supply-chain.png",
    alt: "Émissions GES par aliment sur toute la chaîne d'approvisionnement",
    caption:
      "Émissions de gaz à effet de serre par kilogramme d'aliment, décomposées par étape de la chaîne d'approvisionnement. Le bœuf émet 60 kg CO₂eq/kg, soit 200 fois plus que les noix.",
    source: "Our World in Data — Poore & Nemecek (2018) — CC BY",
    colSpan: 12,
  },
  {
    id: "owid-ghg-warming-scenarios",
    src: "/figures/owid/ghg-warming-scenarios.png",
    alt: "Scénarios d'émissions mondiales et réchauffement associé",
    caption:
      "Trajectoires d'émissions mondiales de GES selon différents scénarios : sans politiques climatiques (4,1-4,8°C), politiques actuelles (2,5-2,9°C), engagements des pays (2,1°C), et trajectoires compatibles 2°C et 1,5°C.",
    source: "Our World in Data — Climate Action Tracker — CC BY",
    colSpan: 4,
  },
]

export const foodOwid: OwidChartRef[] = [
  {
    id: "food-carbon-footprint",
    embedUrl:
      "https://ourworldindata.org/explorers/food-footprints?facet=none&hideControls=false&Commodity+or+Specific+Food+Product=Commodity&Environmental+Impact=Carbon+footprint&Kilogram+%2F+Protein+%2F+Calories=Per+kilogram&By+stage+of+supply+chain=false&country=Bananas~Beef+%28beef+herd%29~Beef+%28dairy+herd%29~Cheese~Eggs~Lamb+%26+Mutton~Milk~Maize~Nuts~Pig+Meat~Peas~Potatoes~Poultry+Meat~Rice~Tomatoes~Wheat+%26+Rye~Tofu+%28soybeans%29~Prawns+%28farmed%29&tab=chart",
    title: "Empreinte carbone des aliments",
    source: "Our World in Data — CC BY",
    colSpan: 6,
  },
  {
    id: "ghg-emissions-seafood",
    embedUrl:
      "https://ourworldindata.org/grapher/ghg-emissions-seafood?country=Bivalves+%28farmed%29~Bivalves+%28wild%29~Carp+%28farmed%29~Cod%2C+haddock+%28wild%29~Catfish+%28farmed%29~Flounder+%28wild%29~Herring%2C+sardines+%28wild%29~Jack+fish+%28wild%29~Lobster+%28wild%29~Milkfish+%28farmed%29~Other+freshwater+fish+%28farmed%29~Other+marine+fish+%28farmed%29~Tuna+%28wild%29~Trout+%28farmed%29~Tilapia+%28farmed%29~Squid+%28wild%29~Silver%2Fbighead+%28farmed%29~Shrimp+%28wild%29~Shrimp+%28farmed%29~Seaweed+%28farmed%29~Salmon%2C+trout+%28wild%29~Salmon+%28farmed%29~Redfish%2C+bass+%28wild%29~Chicken&tab=chart",
    title: "Émissions GES des produits de la mer",
    source: "Our World in Data — CC BY",
    colSpan: 6,
  },
]
