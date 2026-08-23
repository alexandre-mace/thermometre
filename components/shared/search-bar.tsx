"use client"

import { useState, useMemo, useEffect } from "react"
import { Search } from "lucide-react"
import type { TabId } from "@/components/climate-tabs"
import {
  causesFigures,
  causesData,
  causesOwid,
  consequencesFigures,
  consequencesData,
  consequencesDataLarge,
  consequencesOwid,
  solutionsFigures,
  solutionsData,
  solutionsOwid,
  foodOwid,
  owidFigures,
} from "@/lib/climate-data"
import { causesNav } from "@/components/causes/causes-section"
import { consequencesNav } from "@/components/consequences/consequences-section"
import { solutionsNav } from "@/components/solutions/solutions-section"
import { SearchTrigger } from "@/components/ui/search-trigger"
import {
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"

interface SearchResult {
  label: string
  detail: string
  tab: TabId
  anchor: string
}

// Build searchable index from all data
function buildIndex(): SearchResult[] {
  const results: SearchResult[] = []

  function closestAnchor(tab: TabId, keywords: string): string {
    const navs =
      tab === "causes"
        ? causesNav
        : tab === "consequences"
          ? consequencesNav
          : solutionsNav
    const kw = keywords.toLowerCase()
    const match = navs.find((n) => kw.includes(n.label.toLowerCase()))
    return match?.anchor ?? navs[0]?.anchor ?? ""
  }

  // Causes
  for (const d of causesData) {
    results.push({
      label: d.label,
      detail: `${d.value}${d.unit ?? ""} — ${d.detail ?? ""}`,
      tab: "causes",
      anchor: d.id,
    })
  }
  for (const f of causesFigures) {
    results.push({
      label: f.alt,
      detail: f.source,
      tab: "causes",
      anchor: closestAnchor("causes", f.alt),
    })
  }
  for (const o of causesOwid) {
    results.push({
      label: o.title,
      detail: o.source,
      tab: "causes",
      anchor: closestAnchor("causes", o.title),
    })
  }

  // Consequences
  for (const d of [...consequencesData, ...consequencesDataLarge]) {
    results.push({
      label: d.label,
      detail: `${d.value}${d.unit ?? ""} — ${d.detail ?? ""}`,
      tab: "consequences",
      anchor: d.id,
    })
  }
  for (const f of consequencesFigures) {
    results.push({
      label: f.alt,
      detail: f.source,
      tab: "consequences",
      anchor: closestAnchor("consequences", f.alt),
    })
  }
  for (const o of consequencesOwid) {
    results.push({
      label: o.title,
      detail: o.source,
      tab: "consequences",
      anchor: closestAnchor("consequences", o.title),
    })
  }

  // Solutions
  for (const d of solutionsData) {
    results.push({
      label: d.label,
      detail: `${d.value}${d.unit ?? ""} — ${d.detail ?? ""}`,
      tab: "solutions",
      anchor: d.id,
    })
  }
  for (const f of solutionsFigures) {
    results.push({
      label: f.alt,
      detail: f.source,
      tab: "solutions",
      anchor: closestAnchor("solutions", f.alt),
    })
  }
  for (const o of [...solutionsOwid, ...foodOwid]) {
    results.push({
      label: o.title,
      detail: o.source,
      tab: "solutions",
      anchor: closestAnchor("solutions", o.title),
    })
  }
  for (const f of owidFigures) {
    results.push({
      label: f.alt,
      detail: f.source,
      tab: "solutions",
      anchor: closestAnchor("solutions", f.alt),
    })
  }

  return results
}

const tabLabel: Record<TabId, string> = {
  causes: "Causes",
  consequences: "Conséquences",
  solutions: "Solutions",
}

export function SearchBar({
  onNavigate,
}: {
  onNavigate: (tab: TabId, anchor: string) => void
}) {
  const [open, setOpen] = useState(false)
  const index = useMemo(() => buildIndex(), [])

  // Group results by tab
  const grouped = useMemo(() => {
    const groups: Record<TabId, SearchResult[]> = {
      causes: [],
      consequences: [],
      solutions: [],
    }
    for (const r of index) {
      groups[r.tab].push(r)
    }
    return groups
  }, [index])

  return (
    <>
      <SearchTrigger onOpen={() => setOpen(true)} />

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Rechercher"
        description="Rechercher dans les données climat"
      >
        <Command>
          <CommandInput placeholder="Rechercher une donnée, un graphique..." />
          <CommandList
            renderEmptyState={() => (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Aucun résultat.
              </div>
            )}
          >
            {(Object.keys(grouped) as TabId[]).map((tab) => (
              <CommandGroup key={tab} heading={tabLabel[tab]}>
                {grouped[tab].map((r) => (
                  <CommandItem
                    key={`${r.tab}-${r.label}`}
                    id={`${r.tab}-${r.label}`}
                    textValue={`${r.label} ${r.detail}`}
                    onAction={() => {
                      onNavigate(r.tab, r.anchor)
                      setOpen(false)
                    }}
                    className="flex cursor-pointer flex-col items-start gap-0.5"
                  >
                    <p className="text-sm">{r.label}</p>
                    <p className="max-w-full truncate text-xs text-muted-foreground">
                      {r.detail}
                    </p>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
