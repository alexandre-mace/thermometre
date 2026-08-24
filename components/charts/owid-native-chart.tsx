"use client"

import { useMemo, useState } from "react"
import { Check, ExternalLink } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
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
 * rendu ne dépend d'aucun réseau. L'exploration par pays refetch la même API
 * (~2-10 Ko par vue, CORS ouvert) et se dégrade proprement si OWID est
 * injoignable : la vue par défaut, elle, ne peut pas casser.
 */

const fr = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 })

const cache = new Map<string, OwidRow[]>()

async function fetchEntite(dataset: OwidDataset, code: string) {
  const cle = `${dataset.id}:${code}`
  const connu = cache.get(cle)
  if (connu) return connu
  const url = new URL(dataset.urlResolue)
  url.searchParams.set("csvType", "filtered")
  url.searchParams.set("country", `~${code}`)
  const csv = await (await fetch(url)).text()
  const [entete, ...lignes] = csv.trim().split("\n")
  const cles = entete.split(",")
  const donnees = lignes.map((l) => {
    const cellules = l.split(",")
    const ligne: OwidRow = {}
    cles.forEach((k, i) => {
      const v = cellules[i]
      ligne[k] = v === "" || v === undefined ? null : isNaN(+v) ? v : +v
    })
    return ligne
  })
  cache.set(cle, donnees)
  return donnees
}

function SelecteurEntite({
  dataset,
  actuelle,
  onChoix,
}: {
  dataset: OwidDataset
  actuelle: string
  onChoix: (nom: string, code: string | null) => void
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
        {entiteFr(actuelle)}
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
                {e.nom === actuelle && <Check className="ml-auto size-3.5" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

function BasculeMode({
  mode,
  onChange,
}: {
  mode: "absolu" | "part"
  onChange: (m: "absolu" | "part") => void
}) {
  return (
    <div className="flex rounded-md border border-border p-0.5 text-xs">
      {(["absolu", "part"] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          className={cn(
            "rounded-[5px] px-2 py-0.5 transition-colors",
            mode === m
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {m === "absolu" ? "Absolu" : "Part (%)"}
        </button>
      ))}
    </div>
  )
}

export function OwidNativeChart({
  dataset,
  title,
  entiteInitiale = "World",
  serieLigne,
  colSpan = 6,
}: {
  dataset: OwidDataset
  title: string
  /** Entité affichée au premier rendu (doit être celle du jeu cuit au build). */
  entiteInitiale?: string
  /** Pour kind "line" : la colonne à tracer (les autres sont ignorées). */
  serieLigne?: string
  colSpan?: number
}) {
  const [entite, setEntite] = useState(entiteInitiale)
  const [donnees, setDonnees] = useState<OwidRow[]>(dataset.donnees)
  const [mode, setMode] = useState<"absolu" | "part">("absolu")
  const [erreur, setErreur] = useState(false)

  const surChoixEntite = (nom: string, code: string | null) => {
    setEntite(nom)
    setErreur(false)
    if (nom === entiteInitiale) return setDonnees(dataset.donnees)
    fetchEntite(dataset, code ?? nom)
      .then(setDonnees)
      .catch(() => setErreur(true))
  }

  // Les séries numériques présentes, hors colonnes structurelles.
  const series = useMemo(() => {
    const premiere = donnees[0] ?? {}
    return Object.keys(premiere).filter(
      (k) =>
        !["Entity", "Code", "Year"].includes(k) &&
        donnees.some((l) => typeof l[k] === "number"),
    )
  }, [donnees])

  // Mode « part » : normalisation client, pas un fetch de plus.
  const lignes = useMemo(() => {
    if (dataset.kind !== "stacked" || mode === "absolu") return donnees
    return donnees.map((l) => {
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
  }, [donnees, dataset.kind, mode, series])

  const unite = mode === "part" ? "%" : dataset.unite
  const axeY = (v: number) =>
    mode === "part"
      ? `${Math.round(v)} %`
      : Math.abs(v) >= 1000
        ? fr.format(v / 1000) + " k"
        : fr.format(v)

  const infobulle = ({ active, payload, label }: any) => {
    if (!active || !payload?.length) return null
    return (
      <div className="rounded-md border border-border bg-card px-3 py-2 text-xs shadow-sm">
        <p className="mb-1 font-medium">{label}</p>
        {[...payload].reverse().map((p: any) => (
          <p key={p.dataKey} className="flex items-center gap-1.5">
            <span
              className="inline-block size-2 rounded-full"
              style={{ background: p.color }}
            />
            {serieFr(p.dataKey)} :{" "}
            <span className="font-medium">
              {fr.format(p.value)}
              {unite && ` ${unite}`}
            </span>
          </p>
        ))}
      </div>
    )
  }

  const couleur = (nom: string, index: number) =>
    COULEURS_SERIES[nom] ?? `var(--chart-${(index % 5) + 1})`

  return (
    <div
      data-bento-cell
      data-col-span={colSpan}
      className="flex flex-col overflow-hidden"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pt-4">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          {dataset.kind === "stacked" && (
            <BasculeMode mode={mode} onChange={setMode} />
          )}
          {dataset.entites.length > 1 && (
            <SelecteurEntite
              dataset={dataset}
              actuelle={entite}
              onChoix={surChoixEntite}
            />
          )}
        </div>
      </div>

      <div className="h-64 w-full px-2 pt-3 md:h-72">
        {erreur ? (
          <div className="flex h-full items-center justify-center px-6 text-center text-xs text-muted-foreground">
            Les données de {entiteFr(entite)} n'ont pas pu être chargées depuis
            Our World in Data. La vue {entiteFr(entiteInitiale)} reste
            disponible.
          </div>
        ) : (
          <ResponsiveContainer>
            {dataset.kind === "stacked" ? (
              <AreaChart data={lignes} margin={{ top: 4, right: 12 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="Year"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  minTickGap={32}
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={axeY}
                  width={44}
                />
                <RechartsTooltip content={infobulle} />
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
                  />
                ))}
              </AreaChart>
            ) : (
              <LineChart data={lignes} margin={{ top: 4, right: 12 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="Year"
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  minTickGap={32}
                />
                <YAxis
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={axeY}
                  width={44}
                />
                <RechartsTooltip content={infobulle} />
                {(serieLigne ? [serieLigne] : series).map((s, i) => (
                  <Line
                    key={s}
                    dataKey={s}
                    stroke={couleur(s, i) ?? "var(--primary)"}
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                ))}
              </LineChart>
            )}
          </ResponsiveContainer>
        )}
      </div>

      {dataset.kind === "stacked" && !erreur && (
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
              {serieFr(s)}
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
