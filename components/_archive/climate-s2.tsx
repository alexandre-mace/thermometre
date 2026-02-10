import { cn } from "@/lib/utils"

const ACCENT = "#1a1af0"

export function ClimateS2() {
  return (
    <section className="w-full bg-white text-black font-[system-ui,sans-serif]">
      <div
        className="grid w-full border-b border-black border-l border-r"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        {/* HEADER — scenario info LEFT (cols 1-7), +4,4°C RIGHT (cols 7-13) */}
        <div
          className="border-b border-black border-t border-r px-6 py-8 md:px-10 md:py-10 flex flex-col justify-end"
          style={{ gridColumn: "1 / 7" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">
            Scénario GIEC AR6 — SSP5-8.5
          </p>
          <p className="text-4xl md:text-6xl font-bold leading-none tracking-tight">2100</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mt-2">Horizon</p>
        </div>
        <div
          className="border-b border-black border-t px-6 py-8 md:px-10 md:py-10 flex flex-col items-end justify-end"
          style={{ gridColumn: "7 / -1" }}
        >
          <h1
            className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tight text-right"
            style={{ color: ACCENT }}
          >
            +4,4°C
          </h1>
        </div>

        {/* ROW 2 — Eau 6 cols LEFT, Chaleur 6 cols RIGHT */}
        <div
          className="border-b border-black border-r px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[220px] md:min-h-[280px]"
          style={{ gridColumn: "1 / 7" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Pénurie d&apos;eau
          </p>
          <div>
            <p className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-2">
              ~4<span className="text-xl md:text-2xl font-bold ml-1">mrd</span>
            </p>
            <p className="text-sm leading-snug text-neutral-700">
              de personnes en situation de pénurie d&apos;eau.
            </p>
          </div>
        </div>

        <div
          className="border-b border-black px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px]"
          style={{ gridColumn: "7 / -1" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Chaleur extrême
          </p>
          <div>
            <p className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-4">
              80<span className="text-3xl md:text-5xl align-top">%</span>
            </p>
            <p className="text-sm md:text-base leading-snug max-w-[520px] text-neutral-700">
              des mégapoles exposées à un Heat Index {">"}40,6°C au moins
              1&nbsp;jour par an. Stress thermique 365&nbsp;j/an pour le bétail
              en zone tropicale.
            </p>
          </div>
        </div>

        {/* ROW 3 — Agriculture 3 cols, Pâturages 3 cols, Mers 6 cols (spanning rows 3-4) */}
        <div
          className="border-b border-black border-r px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[220px] md:min-h-[280px]"
          style={{ gridColumn: "1 / 4" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Rendements agricoles — Afrique
          </p>
          <div>
            <p className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-2">
              −46<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2">
              Riz, maïs, blé (−23 à −46&nbsp;%)
            </p>
          </div>
        </div>

        <div
          className="border-b border-black border-r px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[220px]"
          style={{ gridColumn: "4 / 7" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Pertes pâturages
          </p>
          <div>
            <p className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-2">
              {">"}40<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p className="text-sm leading-snug text-neutral-700">
              de pertes de surface de pâturages à l&apos;échelle mondiale.
            </p>
          </div>
        </div>

        <div
          className="border-b border-black px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[260px]"
          style={{ gridColumn: "7 / -1", gridRow: "3 / 5" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Montée des mers
          </p>
          <div>
            <p className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-1">
              +1,01<span className="text-2xl md:text-3xl">m</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">
              D&apos;ici 2100 (+0,63 à 1,01&nbsp;m)
            </p>
            <div className="border-t border-black pt-4">
              <p className="text-3xl md:text-5xl font-bold leading-none tracking-tight mb-1">
                16<span className="text-xl md:text-2xl">m</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                D&apos;ici 2300
              </p>
            </div>
          </div>
        </div>

        {/* ROW 4 — Biodiversité 6 cols, Coraux 3 cols (before Mers continues) */}
        <div
          className="border-b border-black border-r px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[220px]"
          style={{ gridColumn: "1 / 4" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Récifs coralliens
          </p>
          <div>
            <p
              className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-2"
              style={{ color: ACCENT }}
            >
              ~99<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p className="text-sm leading-snug text-neutral-700">
              des récifs coralliens perdus.
            </p>
          </div>
        </div>

        <div
          className="border-b border-black border-r px-6 py-8 md:px-10 md:py-10 flex flex-col justify-between min-h-[220px]"
          style={{ gridColumn: "4 / 7" }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            Biodiversité
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-1">
                13–39<span className="text-2xl md:text-3xl align-top">%</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Espèces à haut risque d&apos;extinction
              </p>
            </div>
            <div className="border-t border-black pt-4">
              <p className="text-3xl md:text-5xl font-bold leading-none tracking-tight mb-1">
                35<span className="text-xl md:text-2xl align-top">%</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Terres avec déplacement de biomes
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          style={{ gridColumn: "1 / -1" }}
        >
          <p className="text-xs md:text-sm leading-relaxed max-w-[800px] text-neutral-600">
            Sans inflexion majeure des trajectoires d&apos;émissions, un
            réchauffement de +4,4°C d&apos;ici 2100 entraînerait des
            transformations irréversibles des systèmes naturels et humains à
            l&apos;échelle planétaire.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 shrink-0">
            Source : GIEC AR6 — SSP5-8.5
          </p>
        </div>
      </div>
    </section>
  )
}
