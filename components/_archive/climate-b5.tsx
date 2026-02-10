import { cn } from "@/lib/utils"

export function ClimateB5() {
  return (
    <section
      className={cn("w-full font-[system-ui,sans-serif]")}
      style={{ background: "#f0f0f0" }}
    >
      {/* ── BENTO GRID ── */}
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1px",
        }}
      >
        {/* ═══════════════════════════════════════════
            ROW 1 — HEADER (full width, near-black)
        ═══════════════════════════════════════════ */}
        <div
          className="px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          style={{
            gridColumn: "1 / -1",
            background: "#1a1a1a",
            color: "#ffffff",
            border: "1px solid #d0d0d0",
          }}
        >
          <div>
            <p
              className="uppercase tracking-[0.3em] mb-3"
              style={{ fontSize: "10px", color: "#808080" }}
            >
              Scénario GIEC AR6 — SSP5-8.5
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-mono leading-[0.85] tracking-tight text-white">
              +4,4°C
            </h1>
          </div>
          <div className="md:text-right">
            <p
              className="uppercase tracking-[0.3em] mb-1"
              style={{ fontSize: "10px", color: "#808080" }}
            >
              Horizon
            </p>
            <p className="text-4xl md:text-6xl font-bold font-mono leading-none tracking-tight text-white">
              2100
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 2 — CHALEUR (3 cols) + EAU dark tall (1 col, 2 rows)
                   + MERS (2 cols)
        ═══════════════════════════════════════════ */}

        {/* Chaleur extrême — 80% */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "1 / 4",
            gridRow: "2 / 3",
            background: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "220px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#808080" }}
          >
            Chaleur extrême — Mégapoles
          </p>
          <div>
            <p className="text-5xl md:text-7xl font-bold font-mono leading-none tracking-tight mb-2 text-black">
              80<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p className="text-xs leading-snug" style={{ color: "#606060" }}>
              des mégapoles exposées à un Heat Index {">"}40,6°C.
              Stress thermique du bétail 365&nbsp;j/an en zone tropicale.
            </p>
          </div>
        </div>

        {/* Eau — dark tall cell spanning 2 rows */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "4 / 5",
            gridRow: "2 / 4",
            background: "#404040",
            color: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "440px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#a0a0a0" }}
          >
            Pénurie d&apos;eau
          </p>
          <div>
            <p className="text-5xl md:text-6xl font-bold font-mono leading-none tracking-tight mb-1">
              ~4
            </p>
            <p
              className="uppercase tracking-[0.25em] mb-3 font-mono"
              style={{ fontSize: "11px", color: "#c0c0c0" }}
            >
              milliards
            </p>
            <p className="text-xs leading-snug" style={{ color: "#a0a0a0" }}>
              de personnes en situation de pénurie d&apos;eau.
            </p>
          </div>
        </div>

        {/* Montée des mers — 2100 */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "5 / 7",
            gridRow: "2 / 3",
            background: "#e8e8e8",
            border: "1px solid #d0d0d0",
            minHeight: "220px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#808080" }}
          >
            Montée des mers — 2100
          </p>
          <div>
            <p className="text-5xl md:text-6xl font-bold font-mono leading-none tracking-tight mb-1 text-black">
              +1,01<span className="text-xl md:text-2xl">m</span>
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#808080" }}
            >
              Fourchette : +0,63 à 1,01&nbsp;m
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 3 — CHALEUR stress (1 col) + RENDEMENTS (2 cols)
                   + (EAU continues) + MERS 2300 (1 col) + PÂTURAGES (1 col)
        ═══════════════════════════════════════════ */}

        {/* Chaleur — stress bétail small cell */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "1 / 2",
            gridRow: "3 / 4",
            background: "#1a1a1a",
            color: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "200px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#707070" }}
          >
            Stress bétail
          </p>
          <div>
            <p className="text-4xl md:text-5xl font-bold font-mono leading-none tracking-tight mb-1">
              365
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#707070" }}
            >
              Jours / an
            </p>
          </div>
        </div>

        {/* Agriculture — rendements */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "2 / 4",
            gridRow: "3 / 4",
            background: "#c0c0c0",
            border: "1px solid #d0d0d0",
            minHeight: "200px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#505050" }}
          >
            Rendements agricoles — Afrique
          </p>
          <div>
            <p className="text-5xl md:text-6xl font-bold font-mono leading-none tracking-tight mb-1 text-black">
              −46<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#505050" }}
            >
              Riz, maïs, blé (−23 à −46&nbsp;%)
            </p>
          </div>
        </div>

        {/* (col 4: EAU continues from row 2) */}

        {/* Montée des mers — 2300 */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "5 / 6",
            gridRow: "3 / 4",
            background: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "200px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#808080" }}
          >
            Mers — 2300
          </p>
          <div>
            <p className="text-4xl md:text-5xl font-bold font-mono leading-none tracking-tight mb-1 text-black">
              16<span className="text-xl md:text-2xl">m</span>
            </p>
          </div>
        </div>

        {/* Pâturages */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "6 / 7",
            gridRow: "3 / 4",
            background: "#1a1a1a",
            color: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "200px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#707070" }}
          >
            Pâturages
          </p>
          <div>
            <p className="text-4xl md:text-5xl font-bold font-mono leading-none tracking-tight mb-1">
              {">"}40<span className="text-xl md:text-2xl align-top">%</span>
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#707070" }}
            >
              Pertes mondiales
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 4 — BIODIVERSITÉ: 3 small cells in a row
                   + 1 medium dark cell (2 cols) + 1 light cell
        ═══════════════════════════════════════════ */}

        {/* Biodiversité — extinction */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "1 / 3",
            gridRow: "4 / 5",
            background: "#e8e8e8",
            border: "1px solid #d0d0d0",
            minHeight: "180px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#808080" }}
          >
            Extinction espèces
          </p>
          <div>
            <p className="text-5xl md:text-6xl font-bold font-mono leading-none tracking-tight mb-1 text-black">
              13–39<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#808080" }}
            >
              Haut risque d&apos;extinction
            </p>
          </div>
        </div>

        {/* Biodiversité — biomes */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "3 / 5",
            gridRow: "4 / 5",
            background: "#404040",
            color: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "180px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#a0a0a0" }}
          >
            Déplacement de biomes
          </p>
          <div>
            <p className="text-5xl md:text-6xl font-bold font-mono leading-none tracking-tight mb-1">
              35<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#a0a0a0" }}
            >
              Terres affectées
            </p>
          </div>
        </div>

        {/* Biodiversité — récifs */}
        <div
          className="px-5 py-6 md:px-8 md:py-8 flex flex-col justify-between"
          style={{
            gridColumn: "5 / 7",
            gridRow: "4 / 5",
            background: "#ffffff",
            border: "1px solid #d0d0d0",
            minHeight: "180px",
          }}
        >
          <p
            className="uppercase tracking-[0.25em]"
            style={{ fontSize: "10px", color: "#808080" }}
          >
            Récifs coralliens
          </p>
          <div>
            <p className="text-5xl md:text-6xl font-bold font-mono leading-none tracking-tight mb-1 text-black">
              ~99<span className="text-2xl md:text-3xl align-top">%</span>
            </p>
            <p
              className="uppercase tracking-[0.25em]"
              style={{ fontSize: "10px", color: "#808080" }}
            >
              Récifs perdus
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 5 — SUMMARY (full width, medium gray)
        ═══════════════════════════════════════════ */}
        <div
          className="px-6 py-6 md:px-10 md:py-8"
          style={{
            gridColumn: "1 / -1",
            background: "#c0c0c0",
            border: "1px solid #d0d0d0",
          }}
        >
          <p
            className="text-xs md:text-sm leading-relaxed max-w-[900px]"
            style={{ color: "#303030" }}
          >
            Sans inflexion majeure des trajectoires d&apos;émissions, un
            réchauffement de +4,4&nbsp;°C d&apos;ici 2100 entraînerait des
            transformations irréversibles des systèmes naturels et humains à
            l&apos;échelle planétaire. Les seuils de tolérance physiologique,
            agricole et écologique seraient simultanément dépassés sur
            l&apos;ensemble des continents.
          </p>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 6 — FOOTER (full width, near-invisible)
        ═══════════════════════════════════════════ */}
        <div
          className="px-6 py-4 md:px-10 flex items-center justify-between"
          style={{
            gridColumn: "1 / -1",
            background: "#f0f0f0",
            border: "1px solid #d0d0d0",
          }}
        >
          <p
            className="uppercase tracking-[0.3em]"
            style={{ fontSize: "9px", color: "#b0b0b0" }}
          >
            Source : GIEC AR6 — SSP5-8.5 — Données compilées
          </p>
          <p
            className="uppercase tracking-[0.3em]"
            style={{ fontSize: "9px", color: "#b0b0b0" }}
          >
            2024
          </p>
        </div>
      </div>
    </section>
  )
}
