import { cn } from "@/lib/utils"

/* S5 — Swiss Stacked Dense: tight typographic data-dashboard grid */
const ACCENT = "#1a1af0"

export function ClimateS5() {
  return (
    <section className="w-full bg-white text-black font-[system-ui,sans-serif]">
      {/* ── GRID ── */}
      <div
        className="grid w-full border-b border-black border-l border-r"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        {/* ═══════════════════════════════════════════
            ROW 1 — HEADER
            Left (cols 1-6): +4,4°C big number
            Right (cols 7-13): two stacked mini-cells
        ═══════════════════════════════════════════ */}

        {/* Left: big temperature — spans 2 rows to match the two stacked right cells */}
        <div
          className="border-b border-black border-t border-r px-6 py-6 md:px-8 md:py-8 flex flex-col justify-center min-h-[140px] md:min-h-[180px]"
          style={{ gridColumn: "1 / 7", gridRow: "1 / 3" }}
        >
          <h1
            className="text-6xl md:text-[7rem] lg:text-[9rem] font-bold leading-[0.85] tracking-tight"
            style={{ color: ACCENT }}
          >
            +4,4°C
          </h1>
        </div>

        {/* Right top: Scenario label */}
        <div
          className="border-b border-black border-t px-5 py-4 md:px-6 md:py-5 flex items-center"
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
          className="border-b border-black px-5 py-4 md:px-6 md:py-5 flex items-center"
          style={{ gridColumn: "7 / -1" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Horizon
          </p>
          <span className="ml-auto text-2xl md:text-3xl font-bold leading-none tracking-tight">
            2100
          </span>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 2 — SIX EQUAL COMPACT CELLS (2 cols each)
        ═══════════════════════════════════════════ */}

        {/* 1. Chaleur: 80% */}
        <div
          className="border-b border-black border-r px-4 py-5 md:px-5 md:py-6 flex flex-col justify-between min-h-[180px]"
          style={{ gridColumn: "span 2" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Chaleur extreme
          </p>
          <div>
            <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-2">
              80<span className="text-xl md:text-2xl align-top">%</span>
            </p>
            <p className="text-[9px] leading-snug text-neutral-500">
              des megapoles, Heat Index {">"}40,6°C
            </p>
          </div>
        </div>

        {/* 2. Mers: +1,01m */}
        <div
          className="border-b border-black border-r px-4 py-5 md:px-5 md:py-6 flex flex-col justify-between min-h-[180px]"
          style={{ gridColumn: "span 2" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Montee des mers
          </p>
          <div>
            <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-2">
              +1,01<span className="text-lg md:text-xl">m</span>
            </p>
            <p className="text-[9px] leading-snug text-neutral-500">
              d&apos;ici 2100 (0,63–1,01&nbsp;m)
            </p>
          </div>
        </div>

        {/* 3. Eau: ~4 mrd */}
        <div
          className="border-b border-black border-r px-4 py-5 md:px-5 md:py-6 flex flex-col justify-between min-h-[180px]"
          style={{ gridColumn: "span 2" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Penurie d&apos;eau
          </p>
          <div>
            <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-2">
              ~4
              <span className="text-lg md:text-xl font-bold ml-1">mrd</span>
            </p>
            <p className="text-[9px] leading-snug text-neutral-500">
              personnes en penurie
            </p>
          </div>
        </div>

        {/* 4. Agriculture: -46% */}
        <div
          className="border-b border-black border-r px-4 py-5 md:px-5 md:py-6 flex flex-col justify-between min-h-[180px]"
          style={{ gridColumn: "span 2" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Rendements Afrique
          </p>
          <div>
            <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-2">
              −46<span className="text-xl md:text-2xl align-top">%</span>
            </p>
            <p className="text-[9px] leading-snug text-neutral-500">
              riz, mais, ble (−23 a −46&nbsp;%)
            </p>
          </div>
        </div>

        {/* 5. Paturages: >40% */}
        <div
          className="border-b border-black border-r px-4 py-5 md:px-5 md:py-6 flex flex-col justify-between min-h-[180px]"
          style={{ gridColumn: "span 2" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Pertes paturages
          </p>
          <div>
            <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-2">
              {">"}40<span className="text-xl md:text-2xl align-top">%</span>
            </p>
            <p className="text-[9px] leading-snug text-neutral-500">
              de surface a l&apos;echelle mondiale
            </p>
          </div>
        </div>

        {/* 6. Biodiversite: 13-39% */}
        <div
          className="border-b border-black px-4 py-5 md:px-5 md:py-6 flex flex-col justify-between min-h-[180px]"
          style={{ gridColumn: "span 2" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Biodiversite
          </p>
          <div>
            <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-2">
              13–39<span className="text-xl md:text-2xl align-top">%</span>
            </p>
            <p className="text-[9px] leading-snug text-neutral-500">
              especes a haut risque d&apos;extinction
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 3 — THREE DETAIL CELLS (4 cols each)
        ═══════════════════════════════════════════ */}

        {/* Mers (2300): 16m */}
        <div
          className="border-b border-black border-r px-5 py-6 md:px-6 md:py-8 flex flex-col justify-between min-h-[160px] md:min-h-[200px]"
          style={{ gridColumn: "span 4" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Montee des mers — horizon 2300
          </p>
          <div>
            <p className="text-3xl md:text-5xl font-bold leading-none tracking-tight mb-2">
              16<span className="text-lg md:text-xl">m</span>
            </p>
            <p className="text-[10px] leading-snug text-neutral-500 max-w-[280px]">
              Hausse potentielle d&apos;ici 2300 avec instabilite des calottes
              glaciaires. Processus irreversibles a l&apos;echelle de plusieurs
              siecles.
            </p>
          </div>
        </div>

        {/* Biodiversite biomes: 35% */}
        <div
          className="border-b border-black border-r px-5 py-6 md:px-6 md:py-8 flex flex-col justify-between min-h-[160px] md:min-h-[200px]"
          style={{ gridColumn: "span 4" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Deplacement de biomes
          </p>
          <div>
            <p className="text-3xl md:text-5xl font-bold leading-none tracking-tight mb-2">
              35<span className="text-lg md:text-xl align-top">%</span>
            </p>
            <p className="text-[10px] leading-snug text-neutral-500 max-w-[280px]">
              des terres emergees connaissent un deplacement de biomes.
              Transformation profonde des ecosystemes terrestres.
            </p>
          </div>
        </div>

        {/* Coraux: ~99% */}
        <div
          className="border-b border-black px-5 py-6 md:px-6 md:py-8 flex flex-col justify-between min-h-[160px] md:min-h-[200px]"
          style={{ gridColumn: "span 4" }}
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Recifs coralliens
          </p>
          <div>
            <p
              className="text-3xl md:text-5xl font-bold leading-none tracking-tight mb-2"
              style={{ color: ACCENT }}
            >
              ~99<span className="text-lg md:text-xl align-top">%</span>
            </p>
            <p className="text-[10px] leading-snug text-neutral-500 max-w-[280px]">
              des recifs coralliens tropicaux perdus. Effondrement quasi total
              des ecosystemes recifaux.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 4 — FOOTER (full width)
        ═══════════════════════════════════════════ */}
        <div
          className="px-5 py-5 md:px-6 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ gridColumn: "1 / -1" }}
        >
          <p className="text-[10px] md:text-xs leading-relaxed max-w-[800px] text-neutral-600">
            Sans inflexion majeure des trajectoires d&apos;emissions, un
            rechauffement de +4,4°C d&apos;ici 2100 entrainerait des
            transformations irreversibles des systemes naturels et humains a
            l&apos;echelle planetaire.
          </p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 shrink-0">
            Source : GIEC AR6 — SSP5-8.5
          </p>
        </div>
      </div>
    </section>
  )
}
