import { cn } from "@/lib/utils"
import { ACCENT, type DataCellData } from "@/lib/climate-data"

type Size = "compact" | "medium" | "large"

const sizeConfig: Record<
  Size,
  { col: number; minH: string; numClass: string; unitClass: string; padClass: string; detailClass: string }
> = {
  compact: {
    col: 2,
    minH: "min-h-[180px]",
    numClass: "text-4xl md:text-6xl",
    unitClass: "text-xl md:text-2xl align-top",
    padClass: "px-4 py-5 md:px-5 md:py-6",
    detailClass: "text-[9px] leading-snug text-muted-foreground",
  },
  medium: {
    col: 4,
    minH: "min-h-[160px] md:min-h-[200px]",
    numClass: "text-3xl md:text-5xl",
    unitClass: "text-lg md:text-xl align-top",
    padClass: "px-5 py-6 md:px-6 md:py-8",
    detailClass: "text-[10px] leading-snug text-muted-foreground max-w-[280px]",
  },
  large: {
    col: 6,
    minH: "min-h-[140px] md:min-h-[180px]",
    numClass: "text-6xl md:text-[7rem] lg:text-[9rem]",
    unitClass: "text-2xl md:text-3xl align-top",
    padClass: "px-6 py-6 md:px-8 md:py-8",
    detailClass: "text-[10px] leading-snug text-muted-foreground",
  },
}

export function DataCell({
  data,
  size = "compact",
  isLast = false,
}: {
  data: DataCellData
  size?: Size
  isLast?: boolean
}) {
  const cfg = sizeConfig[size]
  const colSpan = data.colSpan ?? cfg.col

  return (
    <div
      data-bento-cell
      className={cn(
        "border-b border-[--cell-border-color] flex flex-col justify-between",
        !isLast && "border-r border-[--cell-border-color]",
        cfg.padClass,
        cfg.minH,
      )}
      style={{ gridColumn: `span ${colSpan}` }}
      data-col-span={colSpan}
    >
      <p data-cell-label className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
        {data.label}
      </p>
      <div>
        <p
          data-cell-value
          className={cn("font-bold leading-none tracking-tight mb-2", cfg.numClass)}
          style={data.accent ? { color: ACCENT } : undefined}
        >
          {data.value}
          {data.unit && (
            <span className={cfg.unitClass}>{data.unit}</span>
          )}
        </p>
        {data.detail && (
          <p data-cell-detail className={cfg.detailClass}>{data.detail}</p>
        )}
        {data.source && (
          <p data-cell-source className="text-[8px] text-muted-foreground/60 mt-1.5">{data.source}</p>
        )}
      </div>
    </div>
  )
}
