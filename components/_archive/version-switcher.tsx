"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const versions = [
  { id: "s1", label: "S1 — Dark", desc: "Swiss inversé, fond noir, accents bleu/rouge" },
  { id: "s2", label: "S2 — Offset", desc: "Layout asymétrique décalé, même palette" },
  { id: "s3", label: "S3 — Highlight", desc: "Cellules noires/bleues alternées" },
  { id: "s4", label: "S4 — Red Accent", desc: "Accent rouge, barres de catégorie" },
  { id: "s5", label: "S5 — Dense", desc: "Grille compacte, 6 cellules égales" },
] as const

export type VersionId = (typeof versions)[number]["id"]

export function VersionSwitcher({
  current,
  onChange,
}: {
  current: VersionId
  onChange: (v: VersionId) => void
}) {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex items-center gap-1 overflow-x-auto border-b border-white/10 bg-black/80 px-3 py-2 backdrop-blur-md sm:gap-2 sm:px-4">
      <span className="mr-2 hidden shrink-0 text-xs font-medium text-white/40 sm:block">
        VERSION :
      </span>
      {versions.map((v) => (
        <button
          key={v.id}
          onClick={() => onChange(v.id)}
          className={cn(
            "shrink-0 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3",
            current === v.id
              ? "bg-white text-black shadow-sm"
              : "text-white/50 hover:bg-white/10 hover:text-white/80"
          )}
        >
          <span className="hidden sm:inline">{v.label}</span>
          <span className="sm:hidden">{v.id.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}
