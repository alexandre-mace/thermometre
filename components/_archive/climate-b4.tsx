import { cn } from "@/lib/utils"
import {
  Thermometer,
  Waves,
  Droplets,
  Wheat,
  TreePine,
  TrendingUp,
} from "lucide-react"

function Cell({
  className,
  children,
  shadow = false,
  shadowSize = "md",
}: {
  className?: string
  children: React.ReactNode
  shadow?: boolean
  shadowSize?: "sm" | "md" | "lg"
}) {
  const shadowClass = shadow
    ? shadowSize === "lg"
      ? "shadow-[6px_6px_0px_#000]"
      : shadowSize === "sm"
        ? "shadow-[3px_3px_0px_#000]"
        : "shadow-[4px_4px_0px_#000]"
    : ""

  return (
    <div
      className={cn(
        "border-[2.5px] border-black p-6 relative overflow-hidden",
        shadowClass,
        className
      )}
    >
      {children}
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "text-[10px] font-semibold uppercase tracking-[0.15em] block",
        className
      )}
    >
      {children}
    </span>
  )
}

function BigNumber({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono font-black leading-none block", className)}>
      {children}
    </span>
  )
}

export function ClimateB4() {
  return (
    <section className="w-full bg-[#f8f8f6] font-sans">
      {/* ── GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* ═══════════════════════════════════════════════════
            ROW 1 — HEADER (full-width black bar)
        ═══════════════════════════════════════════════════ */}
        <Cell
          className="col-span-1 md:col-span-2 lg:col-span-4 bg-black text-white flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <Label className="text-neutral-400 mb-2">
              Scénario GIEC AR6 &middot; SSP5-8.5
            </Label>
            <BigNumber className="text-6xl sm:text-7xl lg:text-8xl mt-1">
              +4,4&thinsp;°C
            </BigNumber>
            <p className="text-sm text-neutral-400 mt-3 max-w-md leading-relaxed">
              Réchauffement médian projeté d&apos;ici 2100 dans le scénario à très fortes émissions.
              Données IPCC AR6, WG&thinsp;I&thinsp;&&thinsp;II.
            </p>
          </div>
          <div className="flex items-center gap-2 text-neutral-500 shrink-0 pb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest">
              Horizon 2100
            </span>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════════════════
            ROW 2
        ═══════════════════════════════════════════════════ */}

        {/* — Chaleur extrême (LIME accent, 2-col) — */}
        <Cell
          className="col-span-1 md:col-span-2 bg-[#c8ee44] text-black"
          shadow
          shadowSize="lg"
        >
          <div className="flex items-start justify-between mb-4">
            <Label>Chaleur extrême</Label>
            <Thermometer className="w-5 h-5 opacity-60" />
          </div>
          <BigNumber className="text-5xl sm:text-6xl lg:text-7xl mb-4">80%</BigNumber>
          <p className="text-sm leading-snug max-w-sm">
            des mégapoles exposées à un indice de chaleur &gt;&thinsp;40,6&thinsp;°C.
            Stress thermique du bétail 365&thinsp;j/an dans les zones tropicales et subtropicales.
          </p>
          <div className="mt-4 flex gap-3">
            <span className="inline-block border border-black px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium">
              Mégapoles
            </span>
            <span className="inline-block border border-black px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium">
              HI &gt; 40,6&thinsp;°C
            </span>
          </div>
        </Cell>

        {/* — Montée des mers (white, 2-col) — */}
        <Cell
          className="col-span-1 md:col-span-2 bg-white text-black"
          shadow
          shadowSize="md"
        >
          <div className="flex items-start justify-between mb-4">
            <Label>Montée des mers</Label>
            <Waves className="w-5 h-5 opacity-40" />
          </div>
          <div className="flex items-baseline gap-2 flex-wrap">
            <BigNumber className="text-5xl sm:text-6xl lg:text-7xl">+0,63</BigNumber>
            <span className="font-mono text-2xl sm:text-3xl font-bold">à 1,01&thinsp;m</span>
          </div>
          <p className="text-sm text-neutral-600 mt-3 leading-snug">
            Élévation du niveau de la mer d&apos;ici 2100.
            Projections étendues&thinsp;: jusqu&apos;à <span className="font-mono font-bold text-black">16&thinsp;m</span> d&apos;ici 2300
            en cas d&apos;effondrement des calottes glaciaires.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1.5 bg-black w-16" />
            <div className="h-1.5 bg-neutral-300 w-10" />
            <div className="h-1.5 bg-neutral-200 w-6" />
            <span className="text-[10px] text-neutral-400 ml-1 uppercase tracking-wider">2100 &rarr; 2300</span>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════════════════
            ROW 3
        ═══════════════════════════════════════════════════ */}

        {/* — Eau (ELECTRIC BLUE accent, 1-col) — */}
        <Cell
          className="col-span-1 bg-[#3b82f6] text-white"
          shadow
          shadowSize="md"
        >
          <div className="flex items-start justify-between mb-4">
            <Label className="text-blue-100">Pénurie d&apos;eau</Label>
            <Droplets className="w-5 h-5 opacity-50" />
          </div>
          <BigNumber className="text-5xl sm:text-6xl">~4</BigNumber>
          <p className="text-lg font-mono font-bold mt-1">milliards</p>
          <p className="text-sm text-blue-100 mt-3 leading-snug">
            de personnes en situation de pénurie d&apos;eau sévère à +4&thinsp;°C de réchauffement mondial.
          </p>
        </Cell>

        {/* — Agriculture (white, 2-col) — */}
        <Cell className="col-span-1 md:col-span-2 bg-white text-black">
          <div className="flex items-start justify-between mb-4">
            <Label>Agriculture &amp; élevage</Label>
            <Wheat className="w-5 h-5 opacity-40" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <BigNumber className="text-4xl sm:text-5xl lg:text-6xl">-23%</BigNumber>
              <p className="text-sm text-neutral-500 mt-2">à <span className="font-mono font-bold text-black">-46%</span></p>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
                Rendements céréaliers
              </p>
            </div>
            <div>
              <BigNumber className="text-4xl sm:text-5xl lg:text-6xl">&gt;40%</BigNumber>
              <p className="text-xs text-neutral-400 mt-2 uppercase tracking-wider">
                Pâturages mondiaux dégradés
              </p>
            </div>
          </div>
          <div className="mt-5 border-t border-neutral-200 pt-3">
            <p className="text-xs text-neutral-500 leading-relaxed">
              Effondrement conjugué des rendements céréaliers et de la capacité des pâturages,
              mettant en péril la sécurité alimentaire mondiale.
            </p>
          </div>
        </Cell>

        {/* — Biodiversité (white, 1-col) — */}
        <Cell
          className="col-span-1 bg-white text-black"
          shadow
          shadowSize="sm"
        >
          <div className="flex items-start justify-between mb-4">
            <Label>Biodiversité</Label>
            <TreePine className="w-5 h-5 opacity-40" />
          </div>
          <BigNumber className="text-4xl sm:text-5xl">13–39%</BigNumber>
          <p className="text-xs text-neutral-400 mt-2 uppercase tracking-wider">
            Espèces menacées d&apos;extinction
          </p>
          <div className="mt-5 space-y-3">
            <div>
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                <span>Biomes transformés</span>
                <span className="font-mono font-bold text-black">35%</span>
              </div>
              <div className="w-full h-2 bg-neutral-100 border border-black">
                <div className="h-full bg-black" style={{ width: "35%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                <span>Récifs coralliens perdus</span>
                <span className="font-mono font-bold text-black">~99%</span>
              </div>
              <div className="w-full h-2 bg-neutral-100 border border-black">
                <div className="h-full bg-black" style={{ width: "99%" }} />
              </div>
            </div>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════════════════
            ROW 4 — SUMMARY (full-width, YELLOW accent)
        ═══════════════════════════════════════════════════ */}
        <Cell
          className="col-span-1 md:col-span-2 lg:col-span-4 bg-[#fbbf24] text-black"
          shadow
          shadowSize="lg"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <Label className="mb-3">Synthèse &middot; SSP5-8.5</Label>
              <p className="text-base sm:text-lg leading-relaxed">
                À +4,4&thinsp;°C, les seuils critiques se franchissent simultanément&thinsp;:
                stress thermique permanent, élévation marine métrique, pénurie hydrique
                pour des milliards de personnes, effondrement agricole et perte massive
                de biodiversité. Ces projections représentent le scénario à très fortes
                émissions du GIEC&thinsp;(AR6).
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1 text-right">
              <span className="text-[10px] uppercase tracking-widest text-yellow-800">
                Source
              </span>
              <span className="text-xs font-medium">
                IPCC AR6 WG&thinsp;I &amp; II
              </span>
              <span className="text-xs text-yellow-800">
                2021–2022
              </span>
            </div>
          </div>
        </Cell>
      </div>
    </section>
  )
}
