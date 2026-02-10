"use client"

import { useState, useMemo, useEffect, useCallback } from "react"
import { Search } from "lucide-react"
import type { TabId } from "@/components/climate-tabs"
import {
  causesFigures,
  causesData,
  causesOwid,
  consequencesFigures,
  consequencesData,
  consequencesDataLarge,
  solutionsFigures,
  solutionsData,
  solutionsOwid,
  foodOwid,
  owidFigures,
} from "@/lib/climate-data"
import { causesNav } from "@/components/causes/causes-section"
import { consequencesNav } from "@/components/consequences/consequences-section"
import { solutionsNav } from "@/components/solutions/solutions-section"
import {
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
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
      anchor: "causes-chiffres",
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
      anchor: "csq-ssp585",
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

  // Solutions
  for (const d of solutionsData) {
    results.push({
      label: d.label,
      detail: `${d.value}${d.unit ?? ""} — ${d.detail ?? ""}`,
      tab: "solutions",
      anchor: "sol-chiffres",
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

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const handleSelect = useCallback(
    (value: string) => {
      const r = index.find(
        (item) => `${item.tab}-${item.label}` === value,
      )
      if (r) {
        onNavigate(r.tab, r.anchor)
        setOpen(false)
      }
    },
    [index, onNavigate],
  )

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
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-secondary rounded-md px-2.5 py-1.5 cursor-pointer hover:bg-accent transition-colors"
      >
        <Search className="size-3.5 text-muted-foreground/60 shrink-0" />
        <span className="text-xs text-muted-foreground/60 hidden md:inline">
          Rechercher...
        </span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground/60">
          ⌘K
        </kbd>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Rechercher"
        description="Rechercher dans les données climat"
      >
        <Command>
          <CommandInput placeholder="Rechercher une donnée, un graphique..." />
          <CommandList>
            <CommandEmpty>Aucun résultat.</CommandEmpty>
            {(Object.keys(grouped) as TabId[]).map((tab) => (
              <CommandGroup key={tab} heading={tabLabel[tab]}>
                {grouped[tab].map((r) => (
                  <CommandItem
                    key={`${r.tab}-${r.label}`}
                    value={`${r.tab}-${r.label}`}
                    onSelect={handleSelect}
                    className="flex flex-col items-start gap-0.5 cursor-pointer"
                  >
                    <p className="text-sm">{r.label}</p>
                    <p className="text-xs text-muted-foreground truncate max-w-full">
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
