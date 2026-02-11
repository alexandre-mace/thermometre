"use client"

import Image from "next/image"
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
  priority = false,
}: {
  figure: FigureRef
  priority?: boolean
}) {
  const colSpan = figure.colSpan ?? 6
  // Wider ratio for full-width figures, taller for small cards
  const aspectRatio = colSpan >= 12 ? 16 / 7 : colSpan >= 6 ? 16 / 10 : 4 / 3

  return (
    <div
      data-bento-cell
      data-col-span={colSpan}
      className="flex flex-col overflow-hidden"
    >
      {/* ── Image ── */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="cursor-zoom-in text-left" aria-label={`Agrandir : ${figure.alt}`}>
            <AspectRatio ratio={aspectRatio} className="bg-secondary">
              <Image
                src={figure.src}
                alt={figure.alt}
                fill
                className="object-contain"
                sizes={`(max-width: 768px) 100vw, ${Math.round((colSpan / 12) * 100)}vw`}
                priority={priority}
              />
            </AspectRatio>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[96vw] max-h-[96vh] p-0 overflow-auto">
          <DialogTitle className="sr-only">{figure.alt}</DialogTitle>
          <div className="p-4">
            <Image
              src={figure.src}
              alt={figure.alt}
              width={2400}
              height={1600}
              className="w-full h-auto"
              quality={95}
            />
            <div className="mt-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <p className="text-xs leading-snug text-muted-foreground max-w-[600px]">
                {figure.caption}
              </p>
              <p className="text-xs uppercase tracking-normal text-muted-foreground shrink-0">
                {figure.source}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Caption bar ── */}
      <div data-figure-bar className="px-4 py-2.5 flex flex-col gap-1.5 min-h-[40px]">
        {/* Caption visible on mobile, tooltip on desktop */}
        <p className="text-xs leading-relaxed text-muted-foreground md:hidden line-clamp-2">
          {figure.caption}
        </p>
        <div className="flex items-center justify-between gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p data-figure-source className="text-xs uppercase tracking-normal text-muted-foreground truncate cursor-help hidden md:block">
                  {figure.source}
                </p>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[320px]">
                <p className="text-xs leading-relaxed">{figure.caption}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p data-figure-source className="text-xs uppercase tracking-normal text-muted-foreground truncate md:hidden">
            {figure.source}
          </p>
        </div>
      </div>
    </div>
  )
}
