"use client"

import { useMemo, useState } from "react"
import { Check, ExternalLink, Plus, X } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import type { OwidDataset, OwidRow } from "@/lib/owid/types"
import { COULEURS_SERIES, entiteFr, serieFr } from "./labels-fr"

/**
 * Rendu natif d'un graphique OWID, à la place de l'iframe grapher.
 *
 * Le jeu de données par défaut est cuit au build (`npm run data`) : le premier
 * rendu ne dépend d'aucun réseau. L'exploration (autre pays, autre mode)
 * refetch la même API (~2-10 Ko par vue, CORS ouvert) et se dégrade
 * proprement si OWID est injoignable : la vue par défaut ne peut pas casser.
 */

const fr = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 })

const STRUCTURELLES = ["Entity", "Code", "Year", "Quarter", "Day"]
const PALETTE = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
]

const cache = new Map<string, OwidRow[]>()

function parseCsv(csv: string): OwidRow[] {
  const lignes = csv.trim().split("\n")
  const decoupe = (l: string) => {
    const cellules: string[] = []
    let cur = ""
    let dansGuillemets = false
    for (const c of l) {
      if (c === '"') dansGuillemets = !dansGuillemets
      else if (c === "," && !dansGuillemets) {
        cellules.push(cur)
        cur = ""
      } else cur += c
    }
    cellules.push(cur)
    return cellules
  }
  const entetes = decoupe(lignes[0])
  return lignes.slice(1).map((l) => {
    const cellules = decoupe(l)
    const ligne: OwidRow = {}
    entetes.forEach((k, i) => {
      const v = cellules[i]
      ligne[k] = v === "" || v === undefined ? null : isNaN(+v) ? v : +v
    })
    return ligne
  })
}

async function fetchVue(urlBase: string, pays: string[]) {
  const url = new URL(urlBase)
  url.searchParams.set("csvType", "filtered")
  url.searchParams.set("tab", "chart")
  if (pays.length)
    url.searchParams.set(
      "country",
      pays.length === 1 ? `~${pays[0]}` : pays.join("~"),
    )
  const cle = url.toString()
  const connu = cache.get(cle)
  if (connu) return connu
  const donnees = parseCsv(await (await fetch(url)).text())
  cache.set(cle, donnees)
  return donnees
}

const axeXDe = (donnees: OwidRow[]) =>
  ["Year", "Quarter", "Day"].find((k) => donnees[0] && k in donnees[0]) ??
  "Year"

const seriesDe = (donnees: OwidRow[]) => {
  const premiere = donnees[0] ?? {}
  return Object.keys(premiere).filter(
    (k) =>
      !STRUCTURELLES.includes(k) &&
      donnees.some((l) => typeof l[k] === "number"),
  )
}

/** Plusieurs entités dans les lignes → une colonne par entité. */
function pivote(donnees: OwidRow[], colonne: string, axeX: string) {
  const parX = new Map<string | number, OwidRow>()
  const entites: string[] = []
  for (const l of donnees) {
    const x = l[axeX]
    if (x === null || x === undefined) continue
    const entite = String(l.Entity)
    if (!entites.includes(entite)) entites.push(entite)
    const ligne = parX.get(x) ?? { [axeX]: x }
    ligne[entite] = l[colonne]
    parX.set(x, ligne)
  }
  const tri = [...parX.values()].sort((a, b) => {
    const va = a[axeX], vb = b[axeX]
    return typeof va === "number" && typeof vb === "number"
      ? va - vb
      : String(va).localeCompare(String(vb))
  })
  return { donnees: tri, entites }
}

function Bascule<T extends string>({
  valeur,
  choix,
  onChange,
}: {
  valeur: T
  choix: { cle: T; libelle: string }[]
  onChange: (v: T) => void
}) {
  return (
    <div className="flex rounded-md border border-border p-0.5 text-xs">
      {choix.map((c) => (
        <button
          key={c.cle}
          type="button"
          onClick={() => onChange(c.cle)}
          className={cn(
            "rounded-[5px] px-2 py-0.5 whitespace-nowrap transition-colors",
            valeur === c.cle
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {c.libelle}
        </button>
      ))}
    </div>
  )
}

function SelecteurEntite({
  dataset,
  actives,
  onChoix,
  libelle,
}: {
  dataset: OwidDataset
  actives: string[]
  onChoix: (nom: string, code: string | null) => void
  libelle: string
}) {
  const [ouvert, setOuvert] = useState(false)
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="h-7 gap-1.5 text-xs"
        onPress={() => setOuvert(true)}
      >
        {libelle}
        <span className="text-muted-foreground">↓</span>
      </Button>
      <CommandDialog
        open={ouvert}
        onOpenChange={setOuvert}
        title="Choisir un pays ou une région"
        description="Explorer ce graphique pour une autre entité"
      >
        <Command>
          <CommandInput placeholder="Chercher un pays ou une région…" />
          <CommandList
            className="max-h-72"
            renderEmptyState={() => (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Aucune entité trouvée.
              </div>
            )}
          >
            {dataset.entites.map((e) => (
              <CommandItem
                key={e.nom}
                id={e.nom}
                textValue={`${entiteFr(e.nom)} ${e.nom}`}
                onAction={() => {
                  onChoix(e.nom, e.code)
                  setOuvert(false)
                }}
                className="cursor-pointer"
              >
                {entiteFr(e.nom)}
                {actives.includes(e.nom) && (
                  <Check className="ml-auto size-3.5" />
                )}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

/** Modes de l'Explorer CO₂ : comptage × comptabilité, cumulé à part. */
type Comptage = "hab" | "total" | "cumule"
type Compta = "prod" | "conso"
const MODE_VERS_CLE: Record<string, string> = {
  "hab/prod": "production-par-habitant",
  "hab/conso": "consommation-par-habitant",
  "total/prod": "production-totale",
  "total/conso": "consommation-totale",
  "cumule/prod": "cumule",
}

export function OwidNativeChart({
  dataset,
  title,
  entiteInitiale = "World",
  serieLigne,
  couleurLigne,
  colSpan = 6,
}: {
  dataset: OwidDataset
  title: string
  /** Entité affichée au premier rendu (celle du jeu cuit au build). */
  entiteInitiale?: string
  /** Pour kind "line" : la seule colonne à tracer. */
  serieLigne?: string
  couleurLigne?: string
  colSpan?: number
}) {
  const [donnees, setDonnees] = useState<OwidRow[]>(dataset.donnees)
  const [entite, setEntite] = useState(entiteInitiale)
  const [mode, setMode] = useState<"absolu" | "part">("absolu")
  const [erreur, setErreur] = useState(false)

  // Explorer : sélection multi-pays + modes.
  const paysInitiaux = useMemo(
    () => [...new Set(dataset.donnees.map((l) => String(l.Entity)))],
    [dataset.donnees],
  )
  const [paysActifs, setPaysActifs] = useState<string[]>(paysInitiaux)
  const [comptage, setComptage] = useState<Comptage>("hab")
  const [compta, setCompta] = useState<Compta>("prod")

  const codesDe = (noms: string[]) =>
    noms.map(
      (n) => dataset.entites.find((e) => e.nom === n)?.code ?? n,
    ) as string[]

  const rechargeExplorer = (
    noms: string[],
    nouveauComptage: Comptage,
    nouvelleCompta: Compta,
  ) => {
    const cle =
      MODE_VERS_CLE[`${nouveauComptage}/${nouveauComptage === "cumule" ? "prod" : nouvelleCompta}`]
    const slug = dataset.modes?.[cle] ?? dataset.slug
    setErreur(false)
    fetchVue(
      `https://ourworldindata.org/grapher/${slug}.csv`,
      codesDe(noms),
    )
      .then(setDonnees)
      .catch(() => setErreur(true))
  }

  const surChoixEntite = (nom: string, code: string | null) => {
    if (dataset.kind === "multiline") {
      const noms = paysActifs.includes(nom)
        ? paysActifs.filter((p) => p !== nom)
        : [...paysActifs, nom]
      if (!noms.length) return
      setPaysActifs(noms)
      rechargeExplorer(noms, comptage, compta)
      return
    }
    setEntite(nom)
    setErreur(false)
    if (nom === entiteInitiale) return setDonnees(dataset.donnees)
    fetchVue(dataset.urlResolue, [code ?? nom])
      .then(setDonnees)
      .catch(() => setErreur(true))
  }

  const axeX = axeXDe(donnees)
  const seriesBrutes = seriesDe(donnees)

  // Pivot automatique quand plusieurs entités cohabitent dans les lignes
  // (Explorer multi-pays, calottes Antarctique/Groenland...).
  const multiEntites =
    new Set(donnees.map((l) => l.Entity).filter(Boolean)).size > 1
  const { donnees: lignesBase, series } = useMemo(() => {
    if (dataset.kind === "bar")
      return { donnees, series: seriesBrutes.slice(0, 1) }
    if (multiEntites) {
      const colonne = serieLigne ?? seriesBrutes[0]
      const p = pivote(donnees, colonne, axeX)
      return { donnees: p.donnees, series: p.entites }
    }
    return {
      donnees,
      series: serieLigne ? [serieLigne] : seriesBrutes,
    }
  }, [donnees, dataset.kind, multiEntites, serieLigne, seriesBrutes, axeX])

  // Mode « part » : normalisation client, pas un fetch de plus.
  const lignes = useMemo(() => {
    if (dataset.kind !== "stacked" || mode === "absolu") return lignesBase
    return lignesBase.map((l) => {
      const total = series.reduce(
        (s, k) => s + (typeof l[k] === "number" ? (l[k] as number) : 0),
        0,
      )
      if (!total) return l
      const sortie: OwidRow = { ...l }
      for (const k of series)
        sortie[k] =
          typeof l[k] === "number" ? ((l[k] as number) / total) * 100 : l[k]
      return sortie
    })
  }, [lignesBase, dataset.kind, mode, series])

  // Lignes bar normalisées sur des clés simples : le parseur de dataKey de
  // recharts v3 lit les clés comme des chemins et bute sur les intitulés
  // longs d'OWID.
  const barres = useMemo(() => {
    if (dataset.kind !== "bar") return []
    const colonne = seriesBrutes[0]
    return donnees
      .filter((l) => typeof l[colonne] === "number")
      .map((l) => ({ nom: String(l.Entity), valeur: l[colonne] as number }))
      .sort((a, b) => b.valeur - a.valeur)
  }, [dataset.kind, donnees, seriesBrutes])

  const unite = mode === "part" ? "%" : dataset.unite
  const formatX = (v: string | number) =>
    typeof v === "number"
      ? v < 0
        ? fr.format(v)
        : String(v)
      : String(v).slice(0, 4)
  const compact = (v: number) => {
    const a = Math.abs(v)
    if (a >= 1e9) return fr.format(v / 1e9) + " Md"
    if (a >= 1e6) return fr.format(v / 1e6) + " M"
    if (a >= 1e4) return fr.format(v / 1e3) + " k"
    return fr.format(v)
  }
  const axeY = (v: number) =>
    mode === "part" ? `${Math.round(v)} %` : compact(v)

  const couleur = (nom: string, index: number) =>
    COULEURS_SERIES[nom] ?? PALETTE[index % PALETTE.length]

  const infobulle = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
      <div className="rounded-md border border-border bg-card px-3 py-2 text-xs shadow-sm">
        <p className="mb-1 font-medium">{formatX(label)}</p>
        {[...payload].reverse().map((p: any) => (
          <p key={p.dataKey} className="flex items-center gap-1.5">
            <span
              className="inline-block size-2 rounded-full"
              style={{ background: p.color || p.payload?.fill }}
            />
            {multiEntites ? entiteFr(p.dataKey) : serieFr(p.dataKey)} :{" "}
            <span className="font-medium">
              {compact(p.value)}
              {unite && ` ${unite}`}
            </span>
          </p>
        ))}
      </div>
    )
  }

  const axes = (
    <>
      <CartesianGrid
        strokeDasharray="3 3"
        stroke="var(--border)"
        vertical={false}
      />
      <XAxis
        dataKey={axeX}
        tick={{ fontSize: 11 }}
        tickLine={false}
        axisLine={false}
        minTickGap={32}
        tickFormatter={formatX}
      />
      <YAxis
        tick={{ fontSize: 11 }}
        tickLine={false}
        axisLine={false}
        tickFormatter={axeY}
        width={56}
        domain={mode === "part" ? [0, 100] : undefined}
      />
      <RechartsTooltip content={infobulle} />
    </>
  )

  const hauteurBar =
    dataset.kind === "bar" ? Math.max(260, barres.length * 26 + 40) : 0

  return (
    <div
      data-bento-cell
      data-col-span={colSpan}
      className="flex flex-col overflow-hidden"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pt-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          {dataset.kind === "multiline" && dataset.modes && (
            <>
              <Bascule
                valeur={comptage}
                choix={[
                  { cle: "hab", libelle: "Par habitant" },
                  { cle: "total", libelle: "Total" },
                  { cle: "cumule", libelle: "Cumulé" },
                ]}
                onChange={(c) => {
                  setComptage(c)
                  rechargeExplorer(paysActifs, c, compta)
                }}
              />
              {comptage !== "cumule" && (
                <Bascule
                  valeur={compta}
                  choix={[
                    { cle: "prod", libelle: "Production" },
                    { cle: "conso", libelle: "Consommation" },
                  ]}
                  onChange={(c) => {
                    setCompta(c)
                    rechargeExplorer(paysActifs, comptage, c)
                  }}
                />
              )}
            </>
          )}
          {dataset.kind === "stacked" && (
            <Bascule
              valeur={mode}
              choix={[
                { cle: "absolu", libelle: "Absolu" },
                { cle: "part", libelle: "Part (%)" },
              ]}
              onChange={setMode}
            />
          )}
          {dataset.kind !== "multiline" && dataset.entites.length > 1 && (
            <SelecteurEntite
              dataset={dataset}
              actives={[entite]}
              onChoix={surChoixEntite}
              libelle={entiteFr(entite)}
            />
          )}
        </div>
      </div>

      {/* Explorer : les pays sélectionnés, retirables d'un clic. */}
      {dataset.kind === "multiline" && (
        <div className="flex flex-wrap items-center gap-1.5 px-5 pt-2">
          {paysActifs.map((p, i) => (
            <button
              key={p}
              type="button"
              onClick={() => surChoixEntite(p, null)}
              className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
              title={`Retirer ${entiteFr(p)}`}
            >
              <span
                className="inline-block size-2 rounded-full"
                style={{ background: couleur(p, series.indexOf(p)) }}
              />
              {entiteFr(p)}
              <X className="size-2.5" />
            </button>
          ))}
          <SelecteurEntite
            dataset={dataset}
            actives={paysActifs}
            onChoix={surChoixEntite}
            libelle="Ajouter"
          />
        </div>
      )}

      <div
        className={cn("w-full px-2 pt-3", dataset.kind !== "bar" && "h-64 md:h-72")}
        style={dataset.kind === "bar" ? { height: hauteurBar } : undefined}
      >
        {erreur ? (
          <div className="flex h-full items-center justify-center px-6 text-center text-xs text-muted-foreground">
            Ces données n'ont pas pu être chargées depuis Our World in Data.
            Réessayez, ou revenez à la vue par défaut.
          </div>
        ) : dataset.kind === "bar" ? (
          <ResponsiveContainer>
            <BarChart
              data={barres}
              layout="vertical"
              margin={{ top: 4, right: 16, left: 8 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                horizontal={false}
              />
              <XAxis
                type="number"
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={axeY}
              />
              <YAxis
                type="category"
                dataKey="nom"
                width={158}
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => entiteFr(String(v))}
                interval={0}
              />
              <RechartsTooltip content={infobulle} cursor={{ fill: "var(--muted)" }} />
              <Bar dataKey="valeur" radius={[0, 3, 3, 0]} isAnimationActive={false}>
                {barres.map((l) => (
                  <Cell
                    key={l.nom}
                    fill={l.nom === "Chicken" ? "#4d4d4d" : "var(--chart-1)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : dataset.kind === "stacked" ? (
          <ResponsiveContainer>
            <AreaChart data={lignes} margin={{ top: 4, right: 12 }}>
              {axes}
              {series.map((s, i) => (
                <Area
                  key={s}
                  dataKey={s}
                  stackId="pile"
                  stroke={couleur(s, i)}
                  fill={couleur(s, i)}
                  fillOpacity={0.85}
                  strokeWidth={0.5}
                  isAnimationActive={false}
                  connectNulls
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer>
            <LineChart data={lignes} margin={{ top: 4, right: 12 }}>
              {axes}
              {series.map((s, i) => (
                <Line
                  key={s}
                  dataKey={s}
                  stroke={
                    series.length === 1
                      ? (couleurLigne ?? couleur(s, i))
                      : couleur(s, i)
                  }
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                  connectNulls
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {(dataset.kind === "stacked" ||
        (multiEntites && dataset.kind === "line")) &&
        !erreur && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 px-5 pt-1">
            {[...series].reverse().map((s, i) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground"
              >
                <span
                  className="inline-block size-2.5 rounded-[3px]"
                  style={{ background: couleur(s, series.length - 1 - i) }}
                />
                {multiEntites ? entiteFr(s) : serieFr(s)}
              </span>
            ))}
          </div>
        )}

      <p className="flex flex-wrap items-center gap-x-2 px-5 pt-2 pb-4 text-[11px] leading-relaxed text-muted-foreground">
        <span>
          Source : {dataset.citation.split(" – ")[0]} via Our World in Data (CC
          BY)
        </span>
        {dataset.majDonnees && <span>· Données : {dataset.majDonnees}</span>}
        <a
          href={`https://ourworldindata.org/grapher/${dataset.slug}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 underline decoration-muted-foreground/40 underline-offset-2 hover:text-foreground"
        >
          Explorer les données
          <ExternalLink className="size-3" />
        </a>
      </p>
    </div>
  )
}
