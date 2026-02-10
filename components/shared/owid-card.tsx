"use client"

import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { OwidChartRef } from "@/lib/climate-data"

export function OwidCard({
  chart,
  isLast = false,
}: {
  chart: OwidChartRef
  isLast?: boolean
}) {
  const colSpan = chart.colSpan ?? 6
  const aspectRatio = colSpan >= 12 ? "16/7" : "4/3"

  return (
    <div
      data-bento-cell
      data-owid-card
      className={cn(
        "border-b border-[--cell-border-color] flex flex-col max-md:[grid-column:1/-1] overflow-hidden",
        !isLast && "border-r border-[--cell-border-color]",
      )}
      style={{ gridColumn: `span ${colSpan}` }}
    >
      {/* ── Iframe ── */}
      <div className="relative w-full" style={{ aspectRatio }}>
        <iframe
          src={chart.embedUrl}
          title={chart.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full border-none"
          allow="clipboard-write"
        />
      </div>

      {/* ── Source bar ── */}
      <div
        data-figure-bar
        className="px-4 py-2.5 flex items-center justify-between gap-2 border-t border-[--cell-border-color] min-h-[40px]"
      >
        <p
          data-figure-source
          className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 truncate"
        >
          {chart.source}
        </p>
        <a
          href={chart.embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-1 hover:bg-neutral-100 transition-colors"
          aria-label="Ouvrir sur Our World in Data"
        >
          <ExternalLink className="size-3.5 text-neutral-400" />
        </a>
      </div>
    </div>
  )
}
