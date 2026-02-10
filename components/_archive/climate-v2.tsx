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

/* ─── Neon accent palette per category ─── */
const neon = {
  heat: { color: "#ff6b35", glow: "0 0 20px #ff6b35, 0 0 40px #ff6b3540" },
  sea: { color: "#22d3ee", glow: "0 0 20px #22d3ee, 0 0 40px #22d3ee40" },
  water: { color: "#60a5fa", glow: "0 0 20px #60a5fa, 0 0 40px #60a5fa40" },
  agri: { color: "#f59e0b", glow: "0 0 20px #f59e0b, 0 0 40px #f59e0b40" },
  bio: { color: "#34d399", glow: "0 0 20px #34d399, 0 0 40px #34d39940" },
} as const

/* ─── Sub-components ─── */

function GlowStat({
  value,
  unit,
  label,
  glowColor,
  glowShadow,
}: {
  value: string
  unit?: string
  label: string
  glowColor: string
  glowShadow: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-1.5">
        <span
          className="font-mono text-3xl font-black tracking-tighter sm:text-4xl"
          style={{ color: glowColor, textShadow: glowShadow }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="font-mono text-sm font-medium tracking-wide"
            style={{ color: glowColor, opacity: 0.6 }}
          >
            {unit}
          </span>
        )}
      </div>
      <span className="text-xs leading-snug text-white/40">{label}</span>
    </div>
  )
}

function GlassCard({
  icon: Icon,
  title,
  tagline,
  gradientFrom,
  gradientTo,
  iconColor,
  children,
  className,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  title: string
  tagline: string
  gradientFrom: string
  gradientTo: string
  iconColor: string
  children: React.ReactNode
  className?: string
}) {
  return (
    /* Gradient border wrapper */
    <div
      className={cn("rounded-2xl p-[1px]", className)}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}40, transparent 50%, ${gradientTo}20)`,
      }}
    >
      {/* Glass card inner */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        {/* Subtle top glow line */}
        <div
          className="h-[1px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${gradientFrom}80, transparent)`,
          }}
        />

        <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                <Icon
                  className="size-5 shrink-0"
                  style={{
                    color: iconColor,
                    filter: `drop-shadow(0 0 6px ${iconColor})`,
                  }}
                />
                <h3
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{
                    color: iconColor,
                    textShadow: `0 0 10px ${iconColor}60`,
                  }}
                >
                  {title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-white/25">{tagline}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-1 flex-col gap-4">{children}</div>
        </div>
      </div>
    </div>
  )
}

function SubDetail({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-xs leading-relaxed text-white/35">
      <ArrowUpRightIcon className="mt-0.5 size-3 shrink-0 text-white/20" />
      <span>{children}</span>
    </div>
  )
}

/* ─── Main component ─── */

export function ClimateV2() {
  return (
    <div
      className="dark relative min-h-screen text-white"
      style={{
        backgroundColor: "#0a0a0f",
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 20% 20%, rgba(34,211,238,0.04), transparent),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(236,72,153,0.04), transparent),
          radial-gradient(ellipse 50% 50% at 50% 50%, rgba(245,158,11,0.02), transparent)
        `,
      }}
    >
      {/* Pulse keyframes for the badge */}
      <style>{`
        @keyframes neonPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(239,68,68,0.4), 0 0 20px rgba(239,68,68,0.15); }
          50% { box-shadow: 0 0 16px rgba(239,68,68,0.6), 0 0 40px rgba(239,68,68,0.25); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>

      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-[0.02]">
        <div
          className="absolute inset-x-0 h-[2px] bg-white"
          style={{
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* ── Header ── */}
        <header className="mb-14 sm:mb-16">
          <div className="mb-5 flex items-center gap-4">
            <div
              className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5"
              style={{
                animation: "neonPulse 2s ease-in-out infinite",
              }}
            >
              <TriangleAlertIcon
                className="size-3.5"
                style={{
                  color: "#ef4444",
                  filter: "drop-shadow(0 0 4px #ef4444)",
                }}
              />
              <span
                className="font-mono text-xs font-bold tracking-widest uppercase"
                style={{
                  color: "#ef4444",
                  textShadow: "0 0 10px #ef444480",
                }}
              >
                SSP5-8.5
              </span>
            </div>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg, rgba(239,68,68,0.3), transparent)",
              }}
            />
          </div>

          <h1 className="font-mono text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            <span
              style={{
                color: "#ef4444",
                textShadow: "0 0 30px #ef444460, 0 0 60px #ef444420",
              }}
            >
              +4,4°C
            </span>
            <span className="text-white/15"> / </span>
            <span className="text-white/50">2100</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/35">
            Projections GIEC AR6 pour un scénario très hautes émissions.
            Réchauffement moyen 2081–2100 : +4,4°C (plage 3,3 à 5,7°C).
            Chaque chiffre est sourcé.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-widest text-white/20">
            <span>SOURCE: IPCC AR6</span>
            <span>SCÉNARIO: SSP5-8.5</span>
            <span>RÉFÉRENCE: 1995–2014</span>
          </div>
        </header>

        {/* ── Grid ── */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 — CHALEUR EXTREME */}
          <GlassCard
            icon={ThermometerIcon}
            title="Chaleur extrême"
            tagline="Quand la chaleur devient la norme"
            gradientFrom={neon.heat.color}
            gradientTo={neon.heat.color}
            iconColor={neon.heat.color}
          >
            <GlowStat
              value="80%"
              label="des mégapoles avec au moins 1 jour/an à Heat Index > 40,6°C"
              glowColor={neon.heat.color}
              glowShadow={neon.heat.glow}
            />
            <GlowStat
              value="365"
              unit="jours/an"
              label="de stress thermique sévère pour le bétail en zones tropicales"
              glowColor={neon.heat.color}
              glowShadow={neon.heat.glow}
            />
            <SubDetail>
              Mortalité et morbidité liées à la chaleur en hausse continue —
              dépassements des seuils de chaleur mortelle possibles toute
              l&apos;année d&apos;ici 2100
            </SubDetail>
          </GlassCard>

          {/* 2 — MONTEE DES MERS */}
          <GlassCard
            icon={WavesIcon}
            title="Montée des mers"
            tagline="L'océan qui ne recule plus"
            gradientFrom={neon.sea.color}
            gradientTo={neon.sea.color}
            iconColor={neon.sea.color}
          >
            <GlowStat
              value="+0,63"
              unit="à 1,01 m"
              label="hausse probable du niveau moyen des mers d'ici 2100"
              glowColor={neon.sea.color}
              glowShadow={neon.sea.glow}
            />
            <GlowStat
              value="16"
              unit="mètres"
              label="hausse potentielle d'ici 2300 (avec instabilité des calottes)"
              glowColor={neon.sea.color}
              glowShadow={neon.sea.glow}
            />
            <SubDetail>
              Des processus de calottes glaciaires instables pourraient pousser
              le niveau bien au-delà de la plage « probable »
            </SubDetail>
          </GlassCard>

          {/* 3 — STRESS HYDRIQUE */}
          <GlassCard
            icon={DropletsIcon}
            title="Stress hydrique"
            tagline="La soif de milliards"
            gradientFrom={neon.water.color}
            gradientTo={neon.water.color}
            iconColor={neon.water.color}
          >
            <GlowStat
              value="~4"
              unit="milliards"
              label="de personnes exposées à une pénurie d'eau"
              glowColor={neon.water.color}
              glowShadow={neon.water.glow}
            />
            <SubDetail>
              Pénurie chronique aggravée par les sécheresses — augmentation par
              rapport au scénario +2°C
            </SubDetail>
          </GlassCard>

          {/* 4 — AGRICULTURE */}
          <GlassCard
            icon={WheatIcon}
            title="Agriculture"
            tagline="Nourrir 10 milliards ?"
            gradientFrom={neon.agri.color}
            gradientTo={neon.agri.color}
            iconColor={neon.agri.color}
          >
            <div className="flex gap-6">
              <GlowStat
                value="-46%"
                label="rendements Afrique (riz, maïs, blé) — pire cas"
                glowColor={neon.agri.color}
                glowShadow={neon.agri.glow}
              />
              <GlowStat
                value="-23%"
                label="rendements Afrique — avec adaptation"
                glowColor={neon.agri.color}
                glowShadow={neon.agri.glow}
              />
            </div>
            <GlowStat
              value=">40%"
              label="de pertes de productivité des pâturages (ex. Afrique de l'Ouest, dès +2°C)"
              glowColor={neon.agri.color}
              glowShadow={neon.agri.glow}
            />
            <SubDetail>
              Risque de défaillances simultanées dans plusieurs « greniers à blé
              » mondiaux
            </SubDetail>
          </GlassCard>

          {/* 5 — BIODIVERSITE */}
          <GlassCard
            icon={TreeDeciduousIcon}
            title="Biodiversité"
            tagline="Un monde appauvri"
            gradientFrom={neon.bio.color}
            gradientTo={neon.bio.color}
            iconColor={neon.bio.color}
            className="md:col-span-2 lg:col-span-2"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <GlowStat
                value="13–39%"
                label="des espèces à haut risque d'extinction"
                glowColor={neon.bio.color}
                glowShadow={neon.bio.glow}
              />
              <GlowStat
                value="35%"
                label="des terres émergées avec déplacement de biomes"
                glowColor={neon.bio.color}
                glowShadow={neon.bio.glow}
              />
              <GlowStat
                value="~99%"
                label="des récifs coralliens tropicaux perdus"
                glowColor={neon.bio.color}
                glowShadow={neon.bio.glow}
              />
            </div>
            <SubDetail>
              Effondrement quasi total des récifs dès +2°C — à +4–5°C,
              conséquences majeures sur pêches, protection côtière, tourisme
            </SubDetail>
          </GlassCard>
        </div>

        {/* ── Bottom summary ── */}
        <div
          className="mt-8 rounded-2xl border border-red-500/15 p-[1px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(239,68,68,0.15), transparent 50%, rgba(239,68,68,0.05))",
          }}
        >
          <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.04] p-5 backdrop-blur-xl sm:p-6">
            <div className="flex items-start gap-3">
              <SkullIcon
                className="mt-0.5 size-5 shrink-0"
                style={{
                  color: "#ef4444",
                  filter: "drop-shadow(0 0 6px #ef4444)",
                }}
              />
              <p className="text-sm leading-relaxed text-white/55">
                <span
                  className="font-semibold"
                  style={{
                    color: "#ef4444",
                    textShadow: "0 0 10px #ef444440",
                  }}
                >
                  Un monde à +4–5°C, ce n&apos;est pas « un peu plus chaud ».
                </span>{" "}
                C&apos;est un monde où la chaleur dangereuse devient normale, où
                la mer monte probablement de ~1 m d&apos;ici 2100 (et plusieurs
                mètres ensuite), où ~4 milliards de personnes sont en pénurie
                d&apos;eau, et où le risque d&apos;extinction et de basculement
                d&apos;écosystèmes grimpe fortement.
              </p>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="mt-8 font-mono text-[10px] tracking-widest text-white/15">
          DONNÉES : GIEC AR6 — SCÉNARIO SSP5-8.5 — RÉCHAUFFEMENT MOYEN +4,4°C
          (PLAGE 3,3–5,7°C) — RÉFÉRENCE 1995–2014
        </footer>
      </div>
    </div>
  )
}
