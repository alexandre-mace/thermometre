"use client"

import Image from "next/image"
import Zoom from "react-medium-image-zoom"
import { ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FigureRef } from "@/lib/climate-data"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FigureCard({
  figure,
  isLast = false,
}: {
  figure: FigureRef
  isLast?: boolean
}) {
  const colSpan = figure.colSpan ?? 6
  // Wider ratio for full-width figures to avoid oversized images
  const aspectRatio = colSpan >= 12 ? 16 / 7 : 16 / 10

  return (
    <div
      data-bento-cell
      className={cn(
        "border-b border-[--cell-border-color] flex flex-col max-md:[grid-column:1/-1] overflow-hidden",
        !isLast && "border-r border-[--cell-border-color]",
      )}
      style={{ gridColumn: `span ${colSpan}` }}
    >
      {/* ── Image with inline zoom ── */}
      <AspectRatio ratio={aspectRatio} className="bg-neutral-50">
        <Zoom>
          <Image
            src={figure.src}
            alt={figure.alt}
            fill
            className="object-contain"
            sizes={`(max-width: 768px) 100vw, ${Math.round((colSpan / 12) * 100)}vw`}
          />
        </Zoom>
      </AspectRatio>

      {/* ── Caption bar ── */}
      <div data-figure-bar className="px-4 py-2.5 flex items-center justify-between gap-2 border-t border-[--cell-border-color] min-h-[40px]">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p data-figure-source className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 truncate cursor-help">
                {figure.source}
              </p>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[320px]">
              <p className="text-xs leading-relaxed">{figure.caption}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* ── Fullscreen dialog ── */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="shrink-0 p-1 hover:bg-neutral-100 transition-colors"
              aria-label="Voir en plein écran"
            >
              <ZoomIn className="size-3.5 text-neutral-400" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 overflow-auto">
            <DialogTitle className="sr-only">{figure.alt}</DialogTitle>
            <div className="p-4">
              <Image
                src={figure.src}
                alt={figure.alt}
                width={1920}
                height={1200}
                className="w-full h-auto"
              />
              <div className="mt-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <p className="text-[10px] leading-snug text-neutral-600 max-w-[600px]">
                  {figure.caption}
                </p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 shrink-0">
                  {figure.source}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
