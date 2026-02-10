import {
  ThermometerIcon,
  WavesIcon,
  DropletsIcon,
  WheatIcon,
  TreeDeciduousIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

/* ─── Constructivist palette ─── */
const C = {
  cream: "#f5f0e8",
  black: "#111111",
  red: "#c41e1e",
} as const

/* ─── Diagonal slash — geometric decoration ─── */
function Slash({
  color = C.red,
  opacity = 0.12,
  angle = -20,
  width = "55%",
  left = "30%",
}: {
  color?: string
  opacity?: number
  angle?: number
  width?: string
  left?: string
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute h-[250%]"
        style={{
          width,
          backgroundColor: color,
          opacity,
          top: "-50%",
          left,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "center center",
        }}
      />
    </div>
  )
}

/* ─── Cell wrapper ─── */
function Cell({
  bg = "cream",
  className,
  children,
  style,
}: {
  bg?: "cream" | "black" | "red"
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  const colors = {
    cream: { bg: C.cream, fg: C.black },
    black: { bg: C.black, fg: C.cream },
    red: { bg: C.red, fg: C.black },
  }

  return (
    <div
      className={cn("relative overflow-hidden p-5 sm:p-6 lg:p-8", className)}
      style={{
        backgroundColor: colors[bg].bg,
        color: colors[bg].fg,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Section label ─── */
function Label({
  icon: Icon,
  text,
  color,
}: {
  icon: React.ComponentType<{
    className?: string
    strokeWidth?: number
    style?: React.CSSProperties
  }>
  text: string
  color?: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        className="size-4 shrink-0"
        strokeWidth={2.5}
        style={color ? { color } : undefined}
      />
      <span
        className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase"
        style={color ? { color } : undefined}
      >
        {text}
      </span>
    </div>
  )
}

/* ─── Giant number display ─── */
function BigNum({
  children,
  size = "clamp(3.5rem, 9vw, 7rem)",
  color,
  className,
}: {
  children: React.ReactNode
  size?: string
  color?: string
  className?: string
}) {
  return (
    <span
      className={cn("block font-mono font-black tracking-tighter", className)}
      style={{ fontSize: size, lineHeight: 0.85, color }}
    >
      {children}
    </span>
  )
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN COMPONENT
   Grid: 1 col mobile / 2 col md / 4 col lg
   Every lg row fills exactly 4 columns.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function ClimateB2() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: C.cream }}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full"
        style={{
          gap: "1px",
          backgroundColor: C.black,
          border: `1px solid ${C.black}`,
        }}
      >
        {/* ═══════════════════════════════════════
            ROW A — HEADER (4/4 cols)
            Enormous +4,4°C with meta info
        ═══════════════════════════════════════ */}
        <Cell
          bg="cream"
          className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col justify-end"
          style={{ minHeight: "300px" }}
        >
          <Slash color={C.red} opacity={0.07} angle={-14} width="35%" left="50%" />
          <div className="relative z-10">
            <div className="flex items-baseline gap-2 sm:gap-4">
              <span
                className="font-mono font-black tracking-tighter"
                style={{
                  fontSize: "clamp(6rem, 18vw, 16rem)",
                  lineHeight: 0.8,
                  color: C.red,
                }}
              >
                +4,4
              </span>
              <span
                className="font-mono font-black tracking-tighter"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 6rem)",
                  lineHeight: 0.8,
                  color: C.black,
                }}
              >
                °C
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-8">
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase">
                Projections GIEC AR6
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-40">
                {`Sc\u00e9nario SSP5-8.5`}
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase opacity-40">
                Horizon 2081–2100
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-55">
              {`R\u00e9chauffement moyen de +4,4\u00b0C (plage probable\u00a0: 3,3 \u00e0 5,7\u00b0C) par rapport \u00e0 la p\u00e9riode de r\u00e9f\u00e9rence 1995\u20132014. Les chiffres ci-dessous d\u00e9crivent un monde fondamentalement transform\u00e9.`}
            </p>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW B (lg) — 4 cols total
            [CHALEUR 80% — 2 cols, 2 rows tall]
            [365 JOURS — 1 col]  [MERS +0,63m — 1 col]
        ═══════════════════════════════════════ */}
        <Cell
          bg="red"
          className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 flex flex-col justify-between"
          style={{ minHeight: "280px" }}
        >
          <Label icon={ThermometerIcon} text={`Chaleur extr\u00eame`} />
          <div className="mt-auto">
            <BigNum size="clamp(5rem, 14vw, 11rem)">80%</BigNum>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider leading-snug max-w-xs">
              {`Des m\u00e9gapoles avec un Heat Index\u00a0>\u00a040,6\u00b0C au moins 1\u00a0jour par an`}
            </p>
          </div>
        </Cell>

        <Cell
          bg="black"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between"
          style={{ minHeight: "200px" }}
        >
          <Slash color={C.red} opacity={0.15} angle={25} width="50%" left="20%" />
          <div className="relative z-10">
            <BigNum size="clamp(4rem, 10vw, 7rem)" color={C.red}>
              365
            </BigNum>
            <span
              className="mt-2 block font-mono text-base font-black tracking-[0.15em] uppercase"
              style={{ color: C.cream }}
            >
              Jours/an
            </span>
            <p
              className="mt-2 text-xs leading-snug"
              style={{ color: C.cream, opacity: 0.4 }}
            >
              {`De stress thermique s\u00e9v\u00e8re pour le b\u00e9tail en zones tropicales`}
            </p>
          </div>
        </Cell>

        <Cell
          bg="cream"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between"
          style={{ minHeight: "200px" }}
        >
          <Label icon={WavesIcon} text={`Mont\u00e9e des mers`} />
          <div className="mt-auto">
            <div className="flex items-baseline gap-1.5">
              <BigNum size="clamp(2.5rem, 6vw, 4.5rem)">+0,63</BigNum>
              <span className="font-mono text-xl font-bold tracking-tight opacity-35">
                {`\u00e0 1,01\u00a0m`}
              </span>
            </div>
            <p className="mt-3 text-xs leading-snug opacity-55">
              {`Hausse probable du niveau moyen des mers d\u2019ici 2100`}
            </p>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW C (lg) — continues row-span from 80%
            [  ... 80% continues ...  ]
            [16m — 1 col]  [submersion — 1 col]
        ═══════════════════════════════════════ */}
        <Cell
          bg="black"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between"
          style={{ minHeight: "180px" }}
        >
          <span
            className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase"
            style={{ color: C.cream, opacity: 0.35 }}
          >
            Projection 2300
          </span>
          <div className="mt-auto flex items-baseline gap-3">
            <BigNum size="clamp(4rem, 10vw, 7rem)" color={C.cream}>
              16
            </BigNum>
            <div className="flex flex-col gap-0.5">
              <span
                className="font-mono text-lg font-black tracking-wide uppercase"
                style={{ color: C.red }}
              >
                {`M\u00e8tres`}
              </span>
              <span
                className="text-[11px] leading-snug"
                style={{ color: C.cream, opacity: 0.35 }}
              >
                {`Avec instabilit\u00e9 des calottes glaciaires`}
              </span>
            </div>
          </div>
        </Cell>

        <Cell
          bg="cream"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-end"
          style={{ minHeight: "180px" }}
        >
          <Slash color={C.black} opacity={0.05} angle={-25} width="60%" left="10%" />
          <div className="relative z-10">
            <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
              {`Submersion c\u00f4ti\u00e8re`}
            </span>
            <p className="mt-3 text-xs leading-relaxed opacity-55">
              {`Des processus de calottes glaciaires instables pourraient pousser le niveau bien au-del\u00e0 de la plage probable, mena\u00e7ant des centaines de millions de personnes en zones c\u00f4ti\u00e8res`}
            </p>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW D — EAU ~4 MILLIARDS (4/4 cols)
            Large dramatic black cell
        ═══════════════════════════════════════ */}
        <Cell
          bg="black"
          className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col justify-center items-center text-center"
          style={{ minHeight: "320px" }}
        >
          <Slash color={C.red} opacity={0.1} angle={-12} width="40%" left="35%" />
          <div className="relative z-10 flex flex-col items-center">
            <Label icon={DropletsIcon} text="Stress hydrique" color={C.red} />

            <div className="mt-6 flex items-baseline gap-2">
              <span
                className="font-mono text-3xl font-bold tracking-tight"
                style={{ color: C.cream, opacity: 0.3 }}
              >
                ~
              </span>
              <span
                className="font-mono font-black tracking-tighter"
                style={{
                  fontSize: "clamp(7rem, 20vw, 18rem)",
                  lineHeight: 0.8,
                  color: C.cream,
                }}
              >
                4
              </span>
            </div>
            <span
              className="mt-1 font-mono text-xl font-black tracking-[0.3em] uppercase sm:text-2xl lg:text-3xl"
              style={{ color: C.cream }}
            >
              Milliards
            </span>
            <p
              className="mt-4 max-w-md text-sm leading-snug"
              style={{ color: C.cream, opacity: 0.4 }}
            >
              {`De personnes expos\u00e9es \u00e0 une p\u00e9nurie d\u2019eau s\u00e9v\u00e8re et chronique`}
            </p>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW E — AGRICULTURE (4/4 cols)
            [rendements -23 a -46% — 2 cols]
            [>40% paturages — 1 col]
            [detail text — 1 col]
        ═══════════════════════════════════════ */}
        <Cell
          bg="red"
          className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between"
          style={{ minHeight: "240px" }}
        >
          <Label icon={WheatIcon} text="Agriculture" />
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 flex-wrap">
              <BigNum size="clamp(3.5rem, 9vw, 6.5rem)">
                {`\u221223`}
              </BigNum>
              <span className="font-mono text-2xl font-black tracking-tight opacity-50">
                {`\u00e0`}
              </span>
              <BigNum size="clamp(3.5rem, 9vw, 6.5rem)">
                {`\u221246%`}
              </BigNum>
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider leading-snug">
              {`Rendements en Afrique \u2014 riz, ma\u00efs, bl\u00e9`}
            </p>
          </div>
        </Cell>

        <Cell
          bg="cream"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between"
          style={{ minHeight: "240px" }}
        >
          <Slash color={C.red} opacity={0.08} angle={20} width="50%" left="25%" />
          <div className="relative z-10">
            <span
              className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase"
              style={{ color: C.red }}
            >
              {`P\u00e2turages`}
            </span>
            <div className="mt-auto pt-8">
              <BigNum size="clamp(3.5rem, 9vw, 7rem)">&gt;40%</BigNum>
              <p className="mt-3 text-xs leading-snug opacity-55">
                {`De pertes de productivit\u00e9 des p\u00e2turages`}
              </p>
            </div>
          </div>
        </Cell>

        <Cell
          bg="black"
          className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-end"
          style={{ minHeight: "240px" }}
        >
          <Slash color={C.red} opacity={0.06} angle={-18} width="70%" left="0%" />
          <div className="relative z-10">
            <p
              className="text-xs leading-relaxed"
              style={{ color: C.cream, opacity: 0.5 }}
            >
              {`Risque de d\u00e9faillances simultan\u00e9es dans plusieurs \u00ab\u00a0greniers \u00e0 bl\u00e9\u00a0\u00bb mondiaux. Notamment en Afrique de l\u2019Ouest, d\u00e8s +2\u00b0C de r\u00e9chauffement.`}
            </p>
          </div>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW F — BIODIVERSITE HEADER (4/4 cols)
        ═══════════════════════════════════════ */}
        <Cell
          bg="black"
          className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center"
          style={{ paddingTop: "14px", paddingBottom: "14px" }}
        >
          <div className="flex items-center gap-3 w-full">
            <TreeDeciduousIcon
              className="size-5 shrink-0"
              style={{ color: C.red }}
              strokeWidth={2.5}
            />
            <span
              className="font-mono text-xs font-black tracking-[0.4em] uppercase sm:text-sm"
              style={{ color: C.cream }}
            >
              {`Biodiversit\u00e9`}
            </span>
            <div
              className="h-px flex-1 ml-4"
              style={{ backgroundColor: C.cream, opacity: 0.08 }}
            />
          </div>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW G — BIODIVERSITE STATS (4/4 cols)
            [especes — 1 col] [biomes — 1 col]
            [coraux — 2 cols, red]
        ═══════════════════════════════════════ */}
        <Cell
          bg="cream"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between"
          style={{ minHeight: "220px" }}
        >
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-35">
            {`Esp\u00e8ces menac\u00e9es`}
          </span>
          <div className="mt-auto">
            <BigNum size="clamp(2.5rem, 7vw, 5rem)" color={C.red}>
              13–39%
            </BigNum>
            <p className="mt-3 text-xs leading-snug opacity-55">
              {`Des esp\u00e8ces \u00e0 haut risque d\u2019extinction`}
            </p>
          </div>
        </Cell>

        <Cell
          bg="cream"
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between"
          style={{ minHeight: "220px" }}
        >
          <Slash color={C.black} opacity={0.05} angle={-30} width="45%" left="40%" />
          <div className="relative z-10">
            <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-35">
              {`D\u00e9placement de biomes`}
            </span>
            <div className="mt-auto pt-8">
              <BigNum size="clamp(3rem, 8vw, 6rem)">35%</BigNum>
              <p className="mt-3 text-xs leading-snug opacity-55">
                {`Des terres \u00e9merg\u00e9es avec d\u00e9placement significatif de biomes entiers`}
              </p>
            </div>
          </div>
        </Cell>

        <Cell
          bg="red"
          className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center text-center"
          style={{ minHeight: "220px" }}
        >
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-50 mb-4">
            {`R\u00e9cifs coralliens tropicaux`}
          </span>
          <BigNum size="clamp(5rem, 14vw, 11rem)">~99%</BigNum>
          <span className="mt-3 font-mono text-base font-black tracking-[0.3em] uppercase sm:text-lg">
            Perdus
          </span>
        </Cell>

        {/* ═══════════════════════════════════════
            ROW H — SUMMARY (4/4 cols)
        ═══════════════════════════════════════ */}
        <Cell
          bg="cream"
          className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col gap-4"
        >
          <p className="max-w-3xl text-sm leading-relaxed opacity-60">
            {`Un monde \u00e0 +4\u20135\u00b0C est un monde o\u00f9 la chaleur dangereuse devient la norme, o\u00f9 la mer monte de pr\u00e8s d\u2019un m\u00e8tre d\u2019ici 2100 et potentiellement de plusieurs m\u00e8tres ensuite, o\u00f9 des milliards de personnes font face \u00e0 la p\u00e9nurie d\u2019eau, et o\u00f9 le risque d\u2019extinction massive et de basculement d\u2019\u00e9cosyst\u00e8mes atteint des niveaux sans pr\u00e9c\u00e9dent dans l\u2019histoire humaine.`}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] tracking-[0.2em] uppercase opacity-25">
            <span>Source : GIEC AR6</span>
            <span>{`Sc\u00e9nario : SSP5-8.5`}</span>
            <span>{`R\u00e9f\u00e9rence : 1995\u20132014`}</span>
            <span>{`R\u00e9chauffement : +4,4\u00b0C (3,3\u20135,7\u00b0C)`}</span>
          </div>
        </Cell>
      </div>
    </div>
  )
}
