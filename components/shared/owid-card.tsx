"use client"

import { useState, useRef, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import type { OwidChartRef } from "@/lib/climate-data"
import { Skeleton } from "@/components/ui/skeleton"

export function OwidCard({
  chart,
}: {
  chart: OwidChartRef
}) {
  const colSpan = chart.colSpan ?? 6
  const aspectRatio = colSpan >= 12 ? "16/7" : "4/3"
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      data-bento-cell
      data-owid-card
      data-col-span={colSpan}
      className="flex flex-col overflow-hidden"
    >
      {/* ── Iframe ── */}
      <div className="relative w-full bg-white" style={{ aspectRatio }}>
        {!loaded && (
          <div className="absolute inset-0 p-5 flex flex-col gap-3">
            {/* Header: tabs + title */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-3.5 w-16 rounded-full" />
              <Skeleton className="h-3.5 w-20 rounded-full" />
              <Skeleton className="h-3.5 w-14 rounded-full" />
            </div>
            <Skeleton className="h-5 w-2/5" />

            {/* Chart area: Y-axis + bars/lines */}
            <div className="flex-1 flex gap-3">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between py-1">
                <Skeleton className="h-2.5 w-8" />
                <Skeleton className="h-2.5 w-6" />
                <Skeleton className="h-2.5 w-8" />
                <Skeleton className="h-2.5 w-5" />
                <Skeleton className="h-2.5 w-7" />
              </div>
              {/* Chart bars */}
              <div className="flex-1 flex items-end gap-[3px]">
                {[35, 42, 38, 55, 48, 62, 58, 70, 65, 75, 72, 80, 68, 85, 78, 90, 82, 88, 95, 92].map(
                  (h, i) => (
                    <Skeleton
                      key={i}
                      className="flex-1 rounded-t-sm rounded-b-none"
                      style={{ height: `${h}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between pl-11">
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-2.5 w-8" />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Skeleton className="size-2.5 rounded-full" />
                <Skeleton className="h-2.5 w-16" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="size-2.5 rounded-full" />
                <Skeleton className="h-2.5 w-12" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="size-2.5 rounded-full" />
                <Skeleton className="h-2.5 w-20" />
              </div>
            </div>
          </div>
        )}
        {inView && (
          <iframe
            src={chart.embedUrl}
            title={chart.title}
            loading="lazy"
            className={cn(
              "absolute inset-0 w-full h-full border-none transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
            )}
            allow="clipboard-write"
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>

      {/* ── Source bar ── */}
      <div
        data-figure-bar
        className="px-4 py-2.5 flex items-center justify-between gap-2 border-t border-border min-h-[40px]"
      >
        <p
          data-figure-source
          className="text-xs uppercase tracking-normal text-muted-foreground truncate"
        >
          {chart.source}
        </p>
        <a
          href={chart.embedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-1 rounded-sm hover:bg-accent transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Ouvrir "${chart.title}" sur Our World in Data`}
        >
          <ExternalLink className="size-3.5 text-muted-foreground" />
        </a>
      </div>
    </div>
  )
}
