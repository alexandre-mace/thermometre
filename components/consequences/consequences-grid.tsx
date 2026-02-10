import { ACCENT } from "@/lib/climate-data"
import { DataCell } from "@/components/shared/data-cell"
import { consequencesData, consequencesDataLarge } from "@/lib/climate-data"

export function ConsequencesGrid() {
  return (
    <>
      {/* ── HEADER: +4,4°C ── */}

      {/* Left: big temperature — spans 2 rows */}
      <div
        data-bento-cell
        className="border-b border-[--cell-border-color] border-r border-r-[--cell-border-color] px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center min-h-[140px] md:min-h-[180px]"
        style={{ gridColumn: "1 / 7", gridRow: "span 2" }}
      >
        <h2
          className="text-6xl md:text-[7rem] lg:text-[9rem] font-bold leading-[0.85] tracking-tight"
          style={{ color: ACCENT }}
        >
          +4,4°C
        </h2>
      </div>

      {/* Right top: Scenario label */}
      <div
        data-bento-cell
        className="border-b border-[--cell-border-color] px-5 py-4 md:px-6 md:py-5 flex items-center"
        style={{ gridColumn: "7 / -1" }}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          Scenario GIEC AR6
        </p>
        <span
          className="ml-auto text-sm md:text-base font-bold tracking-tight"
          style={{ color: ACCENT }}
        >
          SSP5-8.5
        </span>
      </div>

      {/* Right bottom: Horizon */}
      <div
        data-bento-cell
        className="border-b border-[--cell-border-color] px-5 py-4 md:px-6 md:py-5 flex items-center"
        style={{ gridColumn: "7 / -1" }}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          Horizon
        </p>
        <span className="ml-auto text-2xl md:text-3xl font-bold leading-none tracking-tight">
          2100
        </span>
      </div>

      {/* ── ROW: 6 compact cells ── */}
      {consequencesData.map((cell, i) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="compact"
          isLast={i === consequencesData.length - 1}
        />
      ))}

      {/* ── ROW: 3 medium cells ── */}
      {consequencesDataLarge.map((cell, i) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="medium"
          isLast={i === consequencesDataLarge.length - 1}
        />
      ))}
    </>
  )
}
