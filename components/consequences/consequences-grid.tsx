import { ACCENT } from "@/lib/climate-data"
import { DataCell } from "@/components/shared/data-cell"
import { consequencesData, consequencesDataLarge } from "@/lib/climate-data"

export function ConsequencesGrid() {
  return (
    <>
      {/* ── HEADER: +4,4°C ── */}

      {/* Left: big temperature — spans 2 rows on desktop, full width on mobile */}
      <div
        data-bento-cell
        data-hero-temp
        className="px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center min-h-[140px] md:min-h-[180px]"
      >
        <p
          className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tight"
          style={{ color: ACCENT }}
        >
          +4,4°C
        </p>
      </div>

      {/* Right top: Scenario label */}
      <div
        data-bento-cell
        data-hero-side
        className="px-5 py-4 md:px-6 md:py-5 flex items-center"
      >
        <p className="text-[10px] uppercase tracking-normal text-muted-foreground">
          Scénario GIEC AR6
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
        data-hero-side
        className="px-5 py-4 md:px-6 md:py-5 flex items-center"
      >
        <p className="text-[10px] uppercase tracking-normal text-muted-foreground">
          Horizon
        </p>
        <span className="ml-auto text-2xl md:text-3xl font-bold leading-none tracking-tight">
          2100
        </span>
      </div>

      {/* ── ROW: 6 compact cells ── */}
      {consequencesData.map((cell) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="compact"
        />
      ))}

      {/* ── ROW: 3 medium cells ── */}
      {consequencesDataLarge.map((cell) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="medium"
        />
      ))}
    </>
  )
}
