import {
  ThermometerIcon,
  WavesIcon,
  DropletsIcon,
  WheatIcon,
  TreeDeciduousIcon,
  ArrowUpRightIcon,
  TriangleAlertIcon,
  SkullIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

/* ─── Palette ─────────────────────────────────────────────────────────── */
const palette = {
  bg: "#1a1612",
  cardBg: "#1f1b16",
  cardBgHover: "#252018",
  sand: "#d4c5a9",
  terracotta: "#c2703e",
  ochre: "#c9a84c",
  forest: "#2d5a3d",
  teal: "#4a8b7f",
  water: "#6b8a9e",
  warmWhite: "#e8dfd0",
} as const

/* ─── Decorative separator ────────────────────────────────────────────── */
function Divider() {
  return (
    <div className="col-span-full flex items-center gap-4 py-2">
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to right, ${palette.sand}22, ${palette.sand}15, transparent)`,
        }}
      />
      <div
        className="size-1 rounded-full"
        style={{ backgroundColor: `${palette.sand}20` }}
      />
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(to left, ${palette.sand}22, ${palette.sand}15, transparent)`,
        }}
      />
    </div>
  )
}

/* ─── Stat number + label ─────────────────────────────────────────────── */
function StatBlock({
  value,
  unit,
  label,
  color,
}: {
  value: string
  unit?: string
  label: string
  color: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1.5">
        <span
          className="text-5xl font-bold tracking-tight"
          style={{ color }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: `${color}99` }}
          >
            {unit}
          </span>
        )}
      </div>
      <span
        className="text-[13px] leading-snug"
        style={{ color: `${palette.warmWhite}88` }}
      >
        {label}
      </span>
    </div>
  )
}

/* ─── Detail sub-stat ─────────────────────────────────────────────────── */
function SubDetail({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <div
      className="flex items-start gap-2 text-xs leading-relaxed"
      style={{ color: `${palette.warmWhite}55` }}
    >
      <ArrowUpRightIcon
        className="mt-0.5 size-3 shrink-0"
        style={{ color: `${color}77` }}
      />
      <span>{children}</span>
    </div>
  )
}

/* ─── Category card ───────────────────────────────────────────────────── */
function EarthCard({
  icon: Icon,
  title,
  tagline,
  accent,
  children,
  className,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  title: string
  tagline: string
  accent: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border-l-4 transition-colors",
        className
      )}
      style={{
        backgroundColor: palette.cardBg,
        borderLeftColor: accent,
        borderTop: `1px solid ${palette.sand}0a`,
        borderRight: `1px solid ${palette.sand}0a`,
        borderBottom: `1px solid ${palette.sand}0a`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = palette.cardBgHover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = palette.cardBg
      }}
    >
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <Icon className="size-[18px] shrink-0" style={{ color: accent }} />
            <h3
              className="text-[13px] font-semibold tracking-widest uppercase"
              style={{ color: palette.sand }}
            >
              {title}
            </h3>
          </div>
          <p
            className="text-xs italic leading-relaxed"
            style={{ color: `${palette.warmWhite}40` }}
          >
            {tagline}
          </p>
        </div>

        {/* Thin separator inside card */}
        <div
          className="h-px w-12"
          style={{ backgroundColor: `${accent}30` }}
        />

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4">{children}</div>
      </div>
    </div>
  )
}

/* ─── Main component ──────────────────────────────────────────────────── */
export function ClimateV4() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: palette.bg, color: palette.warmWhite }}
    >
      {/* Subtle warm grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        {/* ── Header ────────────────────────────────────────────────── */}
        <header className="mb-14 sm:mb-18">
          {/* Warm gradient backdrop behind header */}
          <div
            className="absolute inset-x-0 top-0 h-72 opacity-40"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 30% 0%, ${palette.terracotta}15 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 10%, ${palette.ochre}10 0%, transparent 70%)`,
            }}
          />

          <div className="relative">
            {/* SSP badge + decorative line */}
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex items-center gap-1.5 rounded-full border px-3 py-1"
                style={{
                  borderColor: `${palette.terracotta}40`,
                  backgroundColor: `${palette.terracotta}12`,
                }}
              >
                <TriangleAlertIcon
                  className="size-3"
                  style={{ color: palette.terracotta }}
                />
                <span
                  className="text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: palette.terracotta }}
                >
                  SSP5-8.5
                </span>
              </div>
              <div
                className="h-px flex-1"
                style={{
                  background: `linear-gradient(to right, ${palette.sand}20, transparent)`,
                }}
              />
            </div>

            {/* Main title */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span style={{ color: palette.terracotta }}>+4,4°C</span>
              <span style={{ color: `${palette.warmWhite}18` }}>{" / "}</span>
              <span style={{ color: `${palette.warmWhite}55` }}>2100</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-4 max-w-lg text-sm leading-relaxed"
              style={{ color: `${palette.warmWhite}50` }}
            >
              {"Projections du GIEC (AR6) pour un scénario de très hautes émissions. Réchauffement moyen 2081\u20132100 : +4,4°C (plage probable 3,3 à 5,7°C)."}
            </p>

            {/* Meta info */}
            <div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[10px] tracking-[0.15em] uppercase"
              style={{ color: `${palette.sand}30` }}
            >
              <span>Source : GIEC AR6</span>
              <span>{"Scénario : SSP5-8.5"}</span>
              <span>{"Référence : 1995\u20132014"}</span>
            </div>
          </div>
        </header>

        {/* ── Grid ──────────────────────────────────────────────────── */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {/* 1 — CHALEUR EXTRÊME */}
          <EarthCard
            icon={ThermometerIcon}
            title="Chaleur extrême"
            tagline="Quand la chaleur devient la norme"
            accent={palette.terracotta}
          >
            <StatBlock
              value="80%"
              label="des mégapoles avec au moins 1 jour/an à Heat Index > 40,6°C"
              color={palette.terracotta}
            />
            <StatBlock
              value="365"
              unit="jours/an"
              label="de stress thermique sévère pour le bétail en zones tropicales"
              color={palette.terracotta}
            />
            <SubDetail color={palette.terracotta}>
              {"Mortalité et morbidité liées à la chaleur en hausse continue \u2014 dépassements des seuils de chaleur mortelle possibles toute l\u2019année"}
            </SubDetail>
          </EarthCard>

          {/* 2 — MONTÉE DES MERS */}
          <EarthCard
            icon={WavesIcon}
            title="Montée des mers"
            tagline={"L\u2019océan qui ne recule plus"}
            accent={palette.teal}
          >
            <StatBlock
              value="+0,63"
              unit="à 1,01 m"
              label={"hausse probable du niveau moyen des mers d\u2019ici 2100"}
              color={palette.teal}
            />
            <StatBlock
              value="16"
              unit="mètres"
              label={"hausse potentielle d\u2019ici 2300 (instabilité des calottes)"}
              color={palette.teal}
            />
            <SubDetail color={palette.teal}>
              {"Des processus de calottes glaciaires instables pourraient pousser le niveau bien au-delà de la plage probable"}
            </SubDetail>
          </EarthCard>

          <Divider />

          {/* 3 — EAU */}
          <EarthCard
            icon={DropletsIcon}
            title="Stress hydrique"
            tagline="La soif de milliards"
            accent={palette.water}
          >
            <StatBlock
              value="~4"
              unit="milliards"
              label={"de personnes exposées à une pénurie d\u2019eau"}
              color={palette.water}
            />
            <SubDetail color={palette.water}>
              {"Pénurie chronique aggravée par les sécheresses \u2014 augmentation significative par rapport au scénario +2°C"}
            </SubDetail>
          </EarthCard>

          {/* 4 — AGRICULTURE */}
          <EarthCard
            icon={WheatIcon}
            title="Agriculture"
            tagline="Nourrir 10 milliards ?"
            accent={palette.ochre}
          >
            <div className="flex gap-6">
              <StatBlock
                value={"\u221223%"}
                label="rendements Afrique (avec adaptation)"
                color={palette.ochre}
              />
              <StatBlock
                value={"\u221246%"}
                label="rendements Afrique (riz, maïs, blé)"
                color={palette.ochre}
              />
            </div>
            <StatBlock
              value=">40%"
              label="pertes de productivité des pâturages"
              color={palette.ochre}
            />
            <SubDetail color={palette.ochre}>
              {"Risque de défaillances simultanées dans plusieurs \u00AB greniers à blé \u00BB mondiaux"}
            </SubDetail>
          </EarthCard>

          <Divider />

          {/* 5 — BIODIVERSITÉ — spans 2 cols */}
          <EarthCard
            icon={TreeDeciduousIcon}
            title="Biodiversité"
            tagline="Un monde appauvri"
            accent={palette.forest}
            className="md:col-span-2"
          >
            <div className="grid gap-5 sm:grid-cols-3">
              <StatBlock
                value={"13\u201339%"}
                label={"des espèces à haut risque d\u2019extinction"}
                color={palette.forest}
              />
              <StatBlock
                value="35%"
                label="des terres émergées avec déplacement de biomes"
                color={palette.forest}
              />
              <StatBlock
                value="~99%"
                label="des récifs coralliens tropicaux perdus"
                color={palette.forest}
              />
            </div>
            <SubDetail color={palette.forest}>
              {"Effondrement quasi total des récifs dès +2°C \u2014 à +4\u20135°C, conséquences majeures sur pêches, protection côtière et tourisme"}
            </SubDetail>
          </EarthCard>
        </div>

        {/* ── Summary ───────────────────────────────────────────────── */}
        <div
          className="mt-10 rounded-lg border p-6 sm:p-8"
          style={{
            borderColor: `${palette.sand}18`,
            backgroundColor: `${palette.sand}06`,
          }}
        >
          <div className="flex items-start gap-4">
            <SkullIcon
              className="mt-1 size-5 shrink-0"
              style={{ color: `${palette.terracotta}80` }}
            />
            <p
              className="text-sm leading-[1.8] italic"
              style={{ color: `${palette.warmWhite}70` }}
            >
              <span
                className="not-italic font-semibold"
                style={{ color: `${palette.ochre}cc` }}
              >
                {"Un monde à +4\u20135°C, ce n\u2019est pas \u00AB un peu plus chaud \u00BB."}
              </span>{" "}
              {"C\u2019est un monde où la chaleur dangereuse devient normale, où la mer monte probablement de ~1 m d\u2019ici 2100 (et plusieurs mètres ensuite), où ~4 milliards de personnes vivent en pénurie d\u2019eau, où les rendements agricoles s\u2019effondrent, et où le risque d\u2019extinction et de basculement d\u2019écosystèmes grimpe fortement."}
            </p>
          </div>
        </div>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <footer
          className="mt-10 text-center text-[10px] tracking-[0.2em] uppercase"
          style={{ color: `${palette.sand}20` }}
        >
          {"Données : GIEC AR6 \u2014 Scénario SSP5-8.5 \u2014 Réchauffement moyen +4,4°C (plage 3,3\u20135,7°C) \u2014 Référence 1995\u20132014"}
        </footer>
      </div>
    </div>
  )
}
