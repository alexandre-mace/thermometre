// Types du pipeline de données OWID (scripts/build-owid-data.mjs).

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
