"use client"

import Image from "next/image"
import { Button as AriaButton } from "react-aria-components"
import type { FigureRef } from "@/lib/climate-data"
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"

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
      <DialogTrigger>
        <AriaButton
          className="w-full cursor-zoom-in text-left"
          aria-label={`Agrandir : ${figure.alt}`}
        >
          <div className="relative w-full bg-secondary" style={{ aspectRatio }}>
            <Image
              src={figure.src}
              alt={figure.alt}
              fill
              className="object-contain"
              sizes={`(max-width: 768px) 100vw, ${Math.round((colSpan / 12) * 100)}vw`}
              priority={priority}
            />
          </div>
        </AriaButton>
        <Dialog className="max-h-[96vh] max-w-[96vw] overflow-auto p-0 sm:max-w-[96vw]">
          <DialogTitle className="sr-only">{figure.alt}</DialogTitle>
          <div className="p-4">
            <Image
              src={figure.src}
              alt={figure.alt}
              width={2400}
              height={1600}
              className="h-auto w-full"
              quality={95}
            />
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-[600px] text-xs leading-snug text-muted-foreground">
                {figure.caption}
              </p>
              <p className="shrink-0 text-xs uppercase tracking-normal text-muted-foreground">
                {figure.source}
              </p>
            </div>
          </div>
        </Dialog>
      </DialogTrigger>

      {/* ── Caption bar ── */}
      <div data-figure-bar className="flex min-h-[40px] flex-col gap-1.5 px-4 py-2.5">
        {/* Caption visible on mobile, tooltip on desktop */}
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 md:hidden">
          {figure.caption}
        </p>
        <div className="flex items-center justify-between gap-2">
          <TooltipTrigger>
            <p
              data-figure-source
              className="hidden cursor-help truncate text-xs uppercase tracking-normal text-muted-foreground md:block"
            >
              {figure.source}
            </p>
            <Tooltip placement="top" className="max-w-[320px]">
              <p className="text-xs leading-relaxed">{figure.caption}</p>
            </Tooltip>
          </TooltipTrigger>
          <p
            data-figure-source
            className="truncate text-xs uppercase tracking-normal text-muted-foreground md:hidden"
          >
            {figure.source}
          </p>
        </div>
      </div>
    </div>
  )
}
