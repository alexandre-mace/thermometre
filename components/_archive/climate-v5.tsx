import {
  ThermometerIcon,
  WavesIcon,
  DropletsIcon,
  WheatIcon,
  TreeDeciduousIcon,
  TriangleAlertIcon,
  SkullIcon,
  ArrowUpRightIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const mono = "font-[family-name:var(--font-geist-mono)]"

function DataRow({
  label,
  value,
  tag,
  dotChar = ".",
  width = 42,
}: {
  label: string
  value: string
  tag?: "CRITICAL" | "WARN"
  dotChar?: string
  width?: number
}) {
  const tagStr = tag === "CRITICAL" ? "[CRITICAL] " : tag === "WARN" ? "[WARN] " : ""
  const prefix = tagStr + label + " "
  const suffix = " " + value
  const dotsNeeded = Math.max(2, width - prefix.length - suffix.length)
  const dots = dotChar.repeat(dotsNeeded)

  return (
    <div className="flex">
      {tag === "CRITICAL" && (
        <span className="text-red-500 font-bold">[CRITICAL]&nbsp;</span>
      )}
      {tag === "WARN" && (
        <span className="text-amber-500 font-bold">[WARN]&nbsp;</span>
      )}
      <span className="text-green-500/70">{label}&nbsp;</span>
      <span className="text-green-900/80 select-none flex-1 overflow-hidden whitespace-nowrap">
        {dots}
      </span>
      <span className="text-green-400 font-bold">&nbsp;{value}</span>
    </div>
  )
}

function SectionHeader({
  index,
  label,
  icon: Icon,
}: {
  index: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const bar = "═".repeat(Math.max(2, 44 - label.length - index.length - 5))
  return (
    <div className="mt-6 mb-3 flex items-center gap-2">
      <Icon className="size-3.5 text-green-500 shrink-0" />
      <span className="text-green-500 font-bold whitespace-nowrap">
        [{index}] {label} {bar}
      </span>
    </div>
  )
}

function SubNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1.5 flex items-start gap-1.5 pl-4">
      <ArrowUpRightIcon className="size-3 mt-0.5 shrink-0 text-green-700/60" />
      <span className="text-green-600/50 text-xs leading-relaxed">{children}</span>
    </div>
  )
}

export function ClimateV5() {
  return (
    <div
      className={cn(
        mono,
        "min-h-screen bg-black text-green-500 text-[13px] leading-relaxed selection:bg-green-500/30 selection:text-green-200"
      )}
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-5 py-8 sm:px-8 sm:py-12">
        {/* ── SYSTEM HEADER ── */}
        <header className="mb-6">
          {/* Top status bar */}
          <div className="flex items-center gap-2 text-green-700/60 text-[10px] tracking-widest uppercase mb-3">
            <span className="inline-block size-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>SYS_ONLINE</span>
            <span className="text-green-900/60">|</span>
            <span>FEED_ACTIVE</span>
            <span className="text-green-900/60">|</span>
            <span>GIEC_AR6_DB</span>
          </div>

          {/* Main header line */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-green-500 text-lg sm:text-xl font-bold tracking-tight">
              GIEC_AR6
            </span>
            <span className="text-green-700/50">//</span>
            <span className="inline-flex items-center gap-1 bg-red-500/15 border border-red-500/30 px-2 py-0.5 text-red-500 text-[11px] font-bold tracking-wider">
              <TriangleAlertIcon className="size-3" />
              SSP5-8.5
            </span>
            <span className="text-green-700/50">//</span>
            <span className="text-amber-500 font-bold text-lg sm:text-xl tracking-tight">
              DELTA_T: +4.4°C
            </span>
          </div>

          {/* Sub-header */}
          <div className="mt-2 text-green-600/40 text-[11px] tracking-wide">
            HORIZON: 2081&ndash;2100 &nbsp;|&nbsp; PLAGE: 3.3&ndash;5.7°C &nbsp;|&nbsp; REF: 1995&ndash;2014
          </div>

          {/* Blinking cursor line */}
          <div className="mt-3 flex items-center gap-1 text-green-500/80 text-xs">
            <span>&gt; chargement projections climat...</span>
            <span
              className="inline-block w-2 h-3.5 bg-green-500"
              style={{
                animation: "terminal-blink 1s step-end infinite",
              }}
            />
          </div>

          {/* Separator */}
          <div className="mt-4 text-green-800/40 select-none">
            {"═".repeat(52)}
          </div>
        </header>

        {/* ── [01] CHALEUR EXTREME ── */}
        <SectionHeader index="01" label="CHALEUR_EXTREME" icon={ThermometerIcon} />
        <div className="space-y-0.5 pl-0">
          <DataRow
            tag="CRITICAL"
            label="MEGAPOLES_HI>40.6°C"
            value="80%"
          />
          <DataRow
            tag="CRITICAL"
            label="STRESS_BETAIL_TROPICAL"
            value="365 j/an"
          />
          <DataRow
            label="CONDITION"
            value="QUASI-PERMANENT"
          />
        </div>
        <SubNote>
          Mortalite et morbidite liees a la chaleur en hausse continue.
          Depassements des seuils de chaleur mortelle possibles toute l&apos;annee d&apos;ici 2100.
        </SubNote>

        {/* ── [02] MONTEE DES MERS ── */}
        <SectionHeader index="02" label="MONTEE_DES_MERS" icon={WavesIcon} />
        <div className="space-y-0.5">
          <DataRow
            tag="CRITICAL"
            label="HAUSSE_2100"
            value="+0.63 a 1.01 m"
          />
          <DataRow
            tag="CRITICAL"
            label="HAUSSE_2300_MAX"
            value="16 m"
          />
          <DataRow
            label="CALOTTES_GLACIAIRES"
            value="INSTABLE"
          />
        </div>
        <SubNote>
          Des processus de calottes glaciaires instables pourraient pousser
          le niveau bien au-dela de la plage &laquo;&nbsp;probable&nbsp;&raquo;.
        </SubNote>

        {/* ── [03] STRESS HYDRIQUE ── */}
        <SectionHeader index="03" label="STRESS_HYDRIQUE" icon={DropletsIcon} />
        <div className="space-y-0.5">
          <DataRow
            tag="WARN"
            label="POPULATION_PENURIE"
            value="~4 milliards"
          />
          <DataRow
            label="SEVERITE"
            value="PENURIE SEVERE"
          />
        </div>
        <SubNote>
          Penurie chronique aggravee par les secheresses &mdash;
          augmentation significative par rapport au scenario a +2°C.
        </SubNote>

        {/* ── [04] AGRICULTURE ── */}
        <SectionHeader index="04" label="AGRICULTURE" icon={WheatIcon} />
        <div className="space-y-0.5">
          <DataRow
            tag="CRITICAL"
            label="RENDEMENTS_AFRIQUE_ADAPT"
            value="-23%"
          />
          <DataRow
            tag="CRITICAL"
            label="RENDEMENTS_AFRIQUE_PIRE"
            value="-46%"
          />
          <DataRow
            label="CULTURES"
            value="RIZ, MAIS, BLE"
          />
          <DataRow
            tag="WARN"
            label="PERTES_PATURAGES"
            value=">40%"
          />
        </div>
        <SubNote>
          Risque de defaillances simultanees dans plusieurs
          &laquo;&nbsp;greniers a ble&nbsp;&raquo; mondiaux.
        </SubNote>

        {/* ── [05] BIODIVERSITE ── */}
        <SectionHeader index="05" label="BIODIVERSITE" icon={TreeDeciduousIcon} />
        <div className="space-y-0.5">
          <DataRow
            tag="CRITICAL"
            label="ESPECES_HAUT_RISQUE"
            value="13-39%"
          />
          <DataRow
            tag="WARN"
            label="DEPLACEMENT_BIOMES"
            value="35% terres"
          />
          <DataRow
            tag="CRITICAL"
            label="RECIFS_CORALLIENS_PERDUS"
            value="~99%"
          />
        </div>
        <SubNote>
          Effondrement quasi total des recifs des +2°C &mdash; a +4&ndash;5°C,
          consequences majeures sur peches, protection cotiere, tourisme.
        </SubNote>

        {/* ── SEPARATOR ── */}
        <div className="mt-8 text-green-800/40 select-none">
          {"═".repeat(52)}
        </div>

        {/* ── SUMMARY BOX ── */}
        <div className="mt-6 mb-2">
          <div className="text-green-600/50 select-none">
            {"┌" + "─".repeat(50) + "┐"}
          </div>
          <div className="flex">
            <span className="text-green-600/50 select-none">│</span>
            <div className="flex-1 px-2">
              <div className="flex items-center gap-2 mb-2 mt-1">
                <SkullIcon className="size-4 text-red-500 shrink-0" />
                <span className="text-red-500 font-bold text-xs tracking-wider">
                  SYNTHESE // ALERTE CRITIQUE
                </span>
              </div>
              <p className="text-green-500/80 text-xs leading-relaxed">
                <span className="text-red-400 font-bold">
                  Un monde a +4&ndash;5°C, ce n&apos;est pas
                  &laquo;&nbsp;un peu plus chaud&nbsp;&raquo;.
                </span>{" "}
                C&apos;est un monde ou la chaleur dangereuse devient
                normale, ou la mer monte probablement de ~1&nbsp;m d&apos;ici
                2100 (et plusieurs metres ensuite), ou ~4&nbsp;milliards
                de personnes sont en penurie d&apos;eau, et ou le risque
                d&apos;extinction et de basculement d&apos;ecosystemes
                grimpe fortement.
              </p>
            </div>
            <span className="text-green-600/50 select-none">│</span>
          </div>
          <div className="text-green-600/50 select-none">
            {"└" + "─".repeat(50) + "┘"}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer className="mt-6 pb-8 text-[10px] text-green-700/30 tracking-wider uppercase">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>SRC: IPCC_AR6</span>
            <span>SCENARIO: SSP5-8.5</span>
            <span>DELTA_T: +4.4°C (3.3&ndash;5.7°C)</span>
            <span>REF: 1995&ndash;2014</span>
          </div>
          <div className="mt-2 flex items-center gap-1 text-green-800/30">
            <span>&gt; fin_transmission</span>
            <span
              className="inline-block w-1.5 h-2.5 bg-green-700/30"
              style={{
                animation: "terminal-blink 1s step-end infinite",
              }}
            />
          </div>
        </footer>
      </div>

      {/* Keyframes for blinking cursor */}
      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
