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
    numClass: "text-3xl md:text-4xl",
    unitClass: "text-lg md:text-xl align-top",
    padClass: "px-4 py-5 md:px-5 md:py-6",
    detailClass: "text-[11px] leading-snug text-muted-foreground",
  },
  medium: {
    col: 4,
    minH: "min-h-[160px] md:min-h-[200px]",
    numClass: "text-3xl md:text-4xl",
    unitClass: "text-lg md:text-xl align-top",
    padClass: "px-5 py-6 md:px-6 md:py-8",
    detailClass: "text-[11px] leading-snug text-muted-foreground max-w-[280px]",
  },
  large: {
    col: 6,
    minH: "min-h-[140px] md:min-h-[180px]",
    numClass: "text-5xl md:text-6xl lg:text-7xl",
    unitClass: "text-xl md:text-2xl align-top",
    padClass: "px-6 py-6 md:px-8 md:py-8",
    detailClass: "text-[11px] leading-snug text-muted-foreground",
  },
}

export function DataCell({
  data,
  size = "compact",
}: {
  data: DataCellData
  size?: Size
}) {
  const cfg = sizeConfig[size]
  const colSpan = data.colSpan ?? cfg.col

  return (
    <div
      id={data.id}
      data-bento-cell
      data-col-span={colSpan}
      className={cn(
        "flex flex-col justify-between",
        cfg.padClass,
        cfg.minH,
      )}
    >
      <p data-cell-label className="text-[11px] uppercase text-muted-foreground mb-4">
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
            <span className={cn(cfg.unitClass, "ml-0.5")}>{data.unit}</span>
          )}
        </p>
        {data.detail && (
          <p data-cell-detail className={cfg.detailClass}>{data.detail}</p>
        )}
        {data.source && (
          <p data-cell-source className="text-[11px] text-muted-foreground mt-1.5">{data.source}</p>
        )}
      </div>
    </div>
  )
}
