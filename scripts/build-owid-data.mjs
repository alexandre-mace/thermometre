/**
 * Reconstruit lib/owid/ depuis l'API de données d'Our World in Data.
 *
 * Pour chaque graphique : le CSV filtré de la vue par défaut (celle que la
 * page affiche au premier rendu, donc sans dépendance réseau côté visiteur)
 * plus le metadata (citation CC BY, date de mise à jour, liste des entités
 * pour les graphiques explorables). L'exploration (autre pays, autre mode)
 * se fait ensuite côté client sur les mêmes URLs, ~2-10 Ko par vue.
 *
 * `npm run data` pour rafraîchir. Le script imprime la date de chaque
 * source : un graphique ne doit jamais prétendre être plus frais qu'il n'est.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const API = "https://ourworldindata.org/grapher";

/**
 * La vue par défaut de chaque graphique de la page, et les options que
 * l'interface native doit offrir. `modes` décrit les vues alternatives :
 * chaque combinaison est une URL grapher, donc un fetch léger à la demande.
 */
export const CHARTS = [
  {
    id: "temperature-anomaly",
    slug: "temperature-anomaly",
    kind: "line",
    entites: true,
  },
  {
    // L'Explorer CO₂ : la vue par défaut est « par habitant, production ».
    // Les modes reproduisent ses menus Accounting et Count, chaque
    // combinaison ayant son propre slug grapher.
    id: "co2-explorer-per-capita",
    slug: "co-emissions-per-capita",
    kind: "multiline",
    entites: true,
    pays: "CHN~USA~IND~GBR~OWID_WRL",
    modes: {
      "production-par-habitant": "co-emissions-per-capita",
      "consommation-par-habitant": "consumption-co2-per-capita",
      "production-totale": "annual-co2-emissions-per-country",
      "consommation-totale": "annual-co-emissions-consumption-based",
      "cumule": "cumulative-co-emissions",
    },
  },
  {
    id: "ghg-emissions-by-sector",
    slug: "ghg-emissions-by-sector",
    kind: "stacked",
    entites: true,
    pays: "~OWID_WRL",
  },
  {
    id: "production-vs-consumption-co2",
    slug: "production-vs-consumption-co2-emissions",
    kind: "line",
    entites: true,
    pays: "~FRA",
  },
  {
    id: "global-warming-by-gas-and-source",
    slug: "global-warming-by-gas-and-source",
    kind: "stacked",
    entites: false,
  },
  {
    id: "co2-long-term-concentration",
    slug: "co2-long-term-concentration",
    kind: "line",
    entites: false,
  },
  { id: "sea-level", slug: "sea-level", kind: "line", entites: false },
  {
    id: "ice-sheet-mass-balance",
    slug: "ice-sheet-mass-balance",
    kind: "line",
    entites: false,
  },
  {
    id: "global-living-planet-index",
    slug: "global-living-planet-index",
    kind: "line",
    entites: true,
  },
  {
    id: "energy-consumption-by-source",
    slug: "energy-consumption-by-source-and-country",
    kind: "stacked",
    entites: true,
  },
  {
    id: "electricity-prod-source-stacked",
    slug: "electricity-prod-source-stacked",
    kind: "stacked",
    entites: true,
  },
  {
    id: "ghg-emissions-seafood",
    slug: "ghg-emissions-seafood",
    kind: "bar",
    entites: false,
    pays:
      "Bivalves (farmed)~Bivalves (wild)~Carp (farmed)~Cod, haddock (wild)~Catfish (farmed)~Flounder (wild)~Herring, sardines (wild)~Jack fish (wild)~Lobster (wild)~Milkfish (farmed)~Other freshwater fish (farmed)~Other marine fish (farmed)~Tuna (wild)~Trout (farmed)~Tilapia (farmed)~Squid (wild)~Silver/bighead (farmed)~Shrimp (wild)~Shrimp (farmed)~Seaweed (farmed)~Salmon, trout (wild)~Salmon (farmed)~Redfish, bass (wild)~Chicken",
  },
];

const urlCsv = (slug, pays) => {
  const p = new URLSearchParams({ csvType: "filtered" });
  if (pays) p.set("country", pays);
  return `${API}/${slug}.csv?${p}`;
};

async function texte(url) {
  const r = await fetch(url, { redirect: "follow" });
  if (!r.ok) throw new Error(`${r.status} sur ${url}`);
  return { corps: await r.text(), urlResolue: r.url };
}

function parseCsv(csv) {
  // Les CSV OWID sont simples mais les noms d'entités peuvent porter des
  // virgules entre guillemets : parseur minimal qui les gère.
  const lignes = csv.trim().split("\n");
  const decoupe = (l) => {
    const cellules = [];
    let cur = "",
      dansGuillemets = false;
    for (const c of l) {
      if (c === '"') dansGuillemets = !dansGuillemets;
      else if (c === "," && !dansGuillemets) {
        cellules.push(cur);
        cur = "";
      } else cur += c;
    }
    cellules.push(cur);
    return cellules;
  };
  const entetes = decoupe(lignes[0]);
  return lignes.slice(1).map((l) => {
    const cellules = decoupe(l);
    const ligne = {};
    entetes.forEach((h, i) => {
      const v = cellules[i];
      ligne[h] = v === "" || v === undefined ? null : isNaN(+v) ? v : +v;
    });
    return ligne;
  });
}

mkdirSync(new URL("../lib/owid", import.meta.url), { recursive: true });

const manifeste = {};
for (const chart of CHARTS) {
  const { corps: csv, urlResolue } = await texte(urlCsv(chart.slug, chart.pays));
  const { corps: metaBrut } = await texte(
    urlResolue.replace(/\.csv\?.*/, ".metadata.json"),
  );
  const meta = JSON.parse(metaBrut);

  const colonnes = Object.values(meta.columns ?? {});
  const premiere = colonnes[0] ?? {};
  const donnees = parseCsv(csv);

  // L'annuaire des entités explorables ne figure pas dans le metadata : on le
  // déduit du CSV complet, fetché au build uniquement pour cet inventaire.
  let entites = [];
  if (chart.entites) {
    const { corps: complet } = await texte(
      `${API}/${chart.slug}.csv?csvType=full`,
    );
    const vues = new Map();
    for (const ligne of parseCsv(complet)) {
      if (ligne.Entity && !vues.has(ligne.Entity))
        vues.set(ligne.Entity, ligne.Code ?? null);
    }
    entites = [...vues].map(([nom, code]) => ({ nom, code }));
  }

  const sortie = {
    id: chart.id,
    kind: chart.kind,
    slug: chart.slug,
    // Les slugs MDIM redirigent vers une URL porteuse de paramètres de vue
    // (frequency, metric...) : on les garde, seuls csvType et country sont
    // recomposés par le client à chaque exploration.
    urlResolue: (() => {
      const u = new URL(urlResolue);
      u.searchParams.delete("csvType");
      u.searchParams.delete("country");
      const q = u.searchParams.toString();
      return u.origin + u.pathname + (q ? `?${q}` : "");
    })(),
    titreOwid: meta.chart?.title ?? "",
    citation: premiere.citationShort ?? "Our World in Data",
    majDonnees: premiere.lastUpdated ?? null,
    unite: premiere.shortUnit ?? premiere.unit ?? "",
    // Indexées par titre court : c'est lui qui sert d'en-tête dans le CSV,
    // donc de clé dans les lignes de données.
    colonnes: Object.fromEntries(
      Object.values(meta.columns ?? {}).map((c) => [
        c.titleShort ?? c.title,
        { titre: c.titleShort ?? c.title, unite: c.shortUnit ?? c.unit ?? "" },
      ]),
    ),
    modes: chart.modes ?? null,
    entites,
    donnees,
  };

  writeFileSync(
    new URL(`../lib/owid/${chart.id}.ts`, import.meta.url),
    `// Généré par scripts/build-owid-data.mjs, ne pas éditer à la main.\n` +
      `// Source : Our World in Data, ${sortie.citation.replaceAll("\n", " ")}\n` +
      `// Données mises à jour le ${sortie.majDonnees}. CC BY.\n\n` +
      `import type { OwidDataset } from "./types"\n\n` +
      `export const dataset: OwidDataset = ${JSON.stringify(sortie, null, 2)}\n`,
  );

  manifeste[chart.id] = {
    majDonnees: sortie.majDonnees,
    lignes: donnees.length,
    entites: entites.length,
  };
  console.log(
    `${chart.id.padEnd(34)} ${String(donnees.length).padStart(5)} lignes  maj ${sortie.majDonnees ?? "?"}  ${entites.length ? entites.length + " entités" : ""}`,
  );
}

writeFileSync(
  new URL("../lib/owid/types.ts", import.meta.url),
  `// Types du pipeline de données OWID (scripts/build-owid-data.mjs).

export type OwidRow = Record<string, string | number | null>

export type OwidDataset = {
  id: string
  kind: "line" | "multiline" | "stacked" | "bar"
  slug: string
  urlResolue: string
  titreOwid: string
  citation: string
  majDonnees: string | null
  unite: string
  colonnes: Record<string, { titre: string; unite: string }>
  modes: Record<string, string> | null
  entites: { nom: string; code: string | null }[]
  donnees: OwidRow[]
}
`,
);
console.log("\nlib/owid/ écrit");
