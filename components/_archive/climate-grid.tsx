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

function StatBlock({
  value,
  unit,
  label,
  accent,
}: {
  value: string
  unit?: string
  label: string
  accent: string
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "font-mono text-3xl font-black tracking-tighter sm:text-4xl",
            accent
          )}
        >
          {value}
        </span>
        {unit && (
          <span className="text-sm font-medium tracking-wide opacity-50">
            {unit}
          </span>
        )}
      </div>
      <span className="text-xs leading-snug opacity-40">{label}</span>
    </div>
  )
}

function CategoryCard({
  icon: Icon,
  title,
  tagline,
  accentColor,
  accentBorder,
  children,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  tagline: string
  accentColor: string
  accentBorder: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]",
        className
      )}
    >
      {/* Accent top bar */}
      <div className={cn("h-[2px] w-full", accentBorder)} />

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Icon
                className={cn("size-4 shrink-0", accentColor)}
              />
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                {title}
              </h3>
            </div>
            <p className="text-xs leading-relaxed opacity-30">{tagline}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-1 flex-col gap-4">{children}</div>
      </div>
    </div>
  )
}

function SubStat({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-xs leading-relaxed opacity-50">
      <ArrowUpRightIcon className="mt-0.5 size-3 shrink-0 opacity-60" />
      <span>{children}</span>
    </div>
  )
}

export function ClimateGrid() {
  return (
    <div className="dark relative min-h-screen bg-[#09090b] text-white">
      {/* Subtle noise texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Header */}
        <header className="mb-12 sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1">
              <TriangleAlertIcon className="size-3 text-red-400" />
              <span className="font-mono text-[11px] font-semibold tracking-wider text-red-400 uppercase">
                SSP5-8.5
              </span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <h1 className="font-mono text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-red-400">+4,4°C</span>
            <span className="opacity-20"> / </span>
            <span className="opacity-60">2100</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-40">
            Projections GIEC AR6 pour un scénario très hautes émissions.
            Réchauffement moyen 2081–2100 : +4,4°C (plage 3,3 à 5,7°C).
            Chaque chiffre est sourcé.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wider opacity-25">
            <span>SOURCE: IPCC AR6</span>
            <span>SCÉNARIO: SSP5-8.5</span>
            <span>RÉFERENCE: 1995–2014</span>
          </div>
        </header>

        {/* Grid */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 — CHALEUR */}
          <CategoryCard
            icon={ThermometerIcon}
            title="Chaleur extrême"
            tagline="Quand la chaleur devient la norme"
            accentColor="text-orange-400"
            accentBorder="bg-gradient-to-r from-orange-500 to-orange-500/0"
          >
            <StatBlock
              value="80%"
              label="des mégapoles avec au moins 1 jour/an à Heat Index > 40,6°C"
              accent="text-orange-400"
            />
            <StatBlock
              value="365"
              unit="jours/an"
              label="de stress thermique sévère pour le bétail en zones tropicales"
              accent="text-orange-400"
            />
            <SubStat>
              Mortalité et morbidité liées à la chaleur en hausse continue — dépassements des seuils de chaleur mortelle possibles toute l&apos;année d&apos;ici 2100
            </SubStat>
          </CategoryCard>

          {/* 2 — MERS */}
          <CategoryCard
            icon={WavesIcon}
            title="Montée des mers"
            tagline="L'océan qui ne recule plus"
            accentColor="text-sky-400"
            accentBorder="bg-gradient-to-r from-sky-500 to-sky-500/0"
          >
            <StatBlock
              value="+0,63"
              unit="à 1,01 m"
              label="hausse probable du niveau moyen des mers d'ici 2100"
              accent="text-sky-400"
            />
            <StatBlock
              value="16"
              unit="mètres"
              label="hausse potentielle d'ici 2300 (avec instabilité des calottes)"
              accent="text-sky-400"
            />
            <SubStat>
              Des processus de calottes glaciaires instables pourraient pousser le niveau bien au-delà de la plage « probable »
            </SubStat>
          </CategoryCard>

          {/* 3 — EAU */}
          <CategoryCard
            icon={DropletsIcon}
            title="Stress hydrique"
            tagline="La soif de milliards"
            accentColor="text-blue-400"
            accentBorder="bg-gradient-to-r from-blue-500 to-blue-500/0"
          >
            <StatBlock
              value="4"
              unit="milliards"
              label="de personnes exposées à une pénurie d'eau"
              accent="text-blue-400"
            />
            <SubStat>
              Pénurie chronique aggravée par les sécheresses — augmentation par rapport au scénario +2°C
            </SubStat>
          </CategoryCard>

          {/* 4 — AGRICULTURE */}
          <CategoryCard
            icon={WheatIcon}
            title="Agriculture"
            tagline="Nourrir 10 milliards ?"
            accentColor="text-amber-400"
            accentBorder="bg-gradient-to-r from-amber-500 to-amber-500/0"
          >
            <div className="flex gap-6">
              <StatBlock
                value="−46%"
                label="rendements Afrique (riz, maïs, blé) — pire cas"
                accent="text-amber-400"
              />
              <StatBlock
                value="−23%"
                label="rendements Afrique — avec adaptation"
                accent="text-amber-400"
              />
            </div>
            <StatBlock
              value=">40%"
              label="de pertes de productivité des pâturages (ex. Afrique de l'Ouest, dès +2°C)"
              accent="text-amber-400"
            />
            <SubStat>
              Risque de défaillances simultanées dans plusieurs « greniers à blé » mondiaux
            </SubStat>
          </CategoryCard>

          {/* 5 — BIODIVERSITÉ */}
          <CategoryCard
            icon={TreeDeciduousIcon}
            title="Biodiversité"
            tagline="Un monde appauvri"
            accentColor="text-emerald-400"
            accentBorder="bg-gradient-to-r from-emerald-500 to-emerald-500/0"
            className="md:col-span-2 lg:col-span-2"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <StatBlock
                value="13–39%"
                label="des espèces à haut risque d'extinction"
                accent="text-emerald-400"
              />
              <StatBlock
                value="35%"
                label="des terres émergées avec déplacement de biomes"
                accent="text-emerald-400"
              />
              <StatBlock
                value="~99%"
                label="des récifs coralliens tropicaux perdus"
                accent="text-emerald-400"
              />
            </div>
            <SubStat>
              Effondrement quasi total des récifs dès +2°C — à +4–5°C, conséquences majeures sur pêches, protection côtière, tourisme
            </SubStat>
          </CategoryCard>
        </div>

        {/* Bottom summary bar */}
        <div className="mt-8 rounded-lg border border-red-500/10 bg-red-500/[0.03] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <SkullIcon className="mt-0.5 size-4 shrink-0 text-red-400/60" />
            <p className="text-sm leading-relaxed opacity-60">
              <span className="font-semibold text-red-400/80">
                Un monde à +4–5°C, ce n&apos;est pas « un peu plus chaud ».
              </span>{" "}
              C&apos;est un monde où la chaleur dangereuse devient normale, où la mer
              monte probablement de ~1 m d&apos;ici 2100 (et plusieurs mètres
              ensuite), où ~4 milliards de personnes sont en pénurie d&apos;eau, et
              où le risque d&apos;extinction et de basculement d&apos;écosystèmes grimpe
              fortement.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 font-mono text-[10px] tracking-wider opacity-15">
          DONNÉES : GIEC AR6 — SCÉNARIO SSP5-8.5 — RÉCHAUFFEMENT MOYEN +4,4°C
          (PLAGE 3,3–5,7°C) — RÉFÉRENCE 1995–2014
        </footer>
      </div>
    </div>
  )
}
