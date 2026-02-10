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

function EditorialSection({
  icon: Icon,
  title,
  subtitle,
  children,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mb-2 flex items-center gap-2.5">
        <Icon className="size-4 text-[#8b6f52]" />
        <span
          className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#8b6f52]"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          {title}
        </span>
      </div>
      <p
        className="mb-8 text-lg leading-relaxed text-[#5c4a3a]/60 italic sm:text-xl"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {subtitle}
      </p>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  )
}

function BigNumber({
  value,
  unit,
  description,
}: {
  value: string
  unit?: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-6">
      <div className="flex shrink-0 items-baseline gap-2">
        <span
          className="text-5xl leading-none font-light tracking-tight text-[#2c2017] sm:text-6xl lg:text-7xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {value}
        </span>
        {unit && (
          <span
            className="text-lg text-[#2c2017]/40 sm:text-xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {unit}
          </span>
        )}
      </div>
      <p
        className="max-w-md text-sm leading-relaxed text-[#5c4a3a]/70"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {description}
      </p>
    </div>
  )
}

function SubDetail({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 pl-1">
      <ArrowUpRightIcon className="mt-0.5 size-3 shrink-0 text-[#8b6f52]/40" />
      <p
        className="text-[13px] leading-relaxed text-[#5c4a3a]/45"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </p>
    </div>
  )
}

export function ClimateV1() {
  return (
    <div
      className="min-h-screen bg-[#faf8f5] text-[#2c2017]"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
        {/* Masthead */}
        <header className="mb-4">
          {/* Thin rule at the very top */}
          <div className="mb-10 h-px w-full bg-[#2c2017]/10" />

          {/* Source & scenario line */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className="text-[11px] tracking-[0.2em] uppercase text-[#5c4a3a]/40"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              GIEC AR6 &mdash; Projections climat
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#a63d2f]/20 bg-[#a63d2f]/[0.06] px-2 py-0.5">
              <TriangleAlertIcon className="size-3 text-[#a63d2f]" />
              <span
                className="text-[11px] font-semibold tracking-[0.15em] text-[#a63d2f] uppercase"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                SSP5-8.5
              </span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl leading-[0.95] font-light tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-[#a63d2f]">+4,4°C</span>
            <span className="text-[#2c2017]/15"> / </span>
            <span className="text-[#2c2017]/50">2100</span>
          </h1>

          <p
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#5c4a3a]/55"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            Projections du GIEC AR6 pour un scénario à très hautes émissions.
            Réchauffement moyen 2081&ndash;2100 : +4,4°C (plage 3,3 à
            5,7°C). Chaque chiffre est sourcé.
          </p>

          <div
            className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[10px] tracking-[0.2em] text-[#5c4a3a]/25 uppercase"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            <span>Source : IPCC AR6</span>
            <span>Scénario : SSP5-8.5</span>
            <span>Référence : 1995&ndash;2014</span>
          </div>
        </header>

        {/* Double rule separating header from body */}
        <div className="flex flex-col gap-[3px]">
          <div className="h-px w-full bg-[#2c2017]/20" />
          <div className="h-px w-full bg-[#2c2017]/10" />
        </div>

        {/* ───── 1. CHALEUR EXTREME ───── */}
        <EditorialSection
          icon={ThermometerIcon}
          title="Chaleur extrême"
          subtitle="Quand la chaleur devient la norme"
        >
          <BigNumber
            value="80%"
            description="des mégapoles avec au moins 1 jour par an où le Heat Index dépasse 40,6°C"
          />
          <BigNumber
            value="365"
            unit="jours/an"
            description="de stress thermique sévère pour le bétail en zones tropicales — une condition quasi permanente"
          />
          <SubDetail>
            Mortalité et morbidité liées à la chaleur en hausse continue.
            Dépassements des seuils de chaleur mortelle possibles toute
            l&apos;année d&apos;ici 2100.
          </SubDetail>
        </EditorialSection>

        <div className="h-px w-full bg-[#2c2017]/8" />

        {/* ───── 2. MONTEE DES MERS ───── */}
        <EditorialSection
          icon={WavesIcon}
          title="Montée des mers"
          subtitle="L&apos;océan qui ne recule plus"
        >
          <BigNumber
            value="+0,63"
            unit="à 1,01 m"
            description="de hausse probable du niveau moyen des mers d'ici 2100"
          />
          <BigNumber
            value="16"
            unit="mètres"
            description="de hausse potentielle d'ici 2300, avec instabilité des calottes glaciaires"
          />
          <SubDetail>
            Des processus de calottes glaciaires instables pourraient pousser
            le niveau bien au-delà de la plage &laquo;&nbsp;probable&nbsp;&raquo;.
          </SubDetail>
        </EditorialSection>

        <div className="h-px w-full bg-[#2c2017]/8" />

        {/* ───── 3. STRESS HYDRIQUE ───── */}
        <EditorialSection
          icon={DropletsIcon}
          title="Stress hydrique"
          subtitle="La soif de milliards"
        >
          <BigNumber
            value="~4"
            unit="milliards"
            description="de personnes exposées à une pénurie d'eau sévère"
          />
          <SubDetail>
            Pénurie chronique aggravée par les sécheresses — augmentation
            significative par rapport au scénario à +2°C.
          </SubDetail>
        </EditorialSection>

        <div className="h-px w-full bg-[#2c2017]/8" />

        {/* ───── 4. AGRICULTURE ───── */}
        <EditorialSection
          icon={WheatIcon}
          title="Agriculture"
          subtitle="Nourrir 10 milliards ?"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <BigNumber
              value="-23%"
              description="rendements en Afrique (riz, maïs, blé) — avec adaptation"
            />
            <BigNumber
              value="-46%"
              description="rendements en Afrique — pire scénario, sans adaptation"
            />
          </div>
          <BigNumber
            value=">40%"
            description="de pertes de productivité des pâturages, notamment en Afrique de l'Ouest"
          />
          <SubDetail>
            Risque de défaillances simultanées dans plusieurs
            &laquo;&nbsp;greniers à blé&nbsp;&raquo; mondiaux.
          </SubDetail>
        </EditorialSection>

        <div className="h-px w-full bg-[#2c2017]/8" />

        {/* ───── 5. BIODIVERSITE ───── */}
        <EditorialSection
          icon={TreeDeciduousIcon}
          title="Biodiversité"
          subtitle="Un monde appauvri"
        >
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <BigNumber
              value="13–39%"
              description="des espèces à haut risque d'extinction"
            />
            <BigNumber
              value="35%"
              description="des terres émergées avec déplacement de biomes"
            />
          </div>
          <BigNumber
            value="~99%"
            description="des récifs coralliens tropicaux perdus"
          />
          <SubDetail>
            Effondrement quasi total des récifs dès +2°C — à +4–5°C,
            conséquences majeures sur pêches, protection côtière, tourisme.
          </SubDetail>
        </EditorialSection>

        {/* Double rule */}
        <div className="flex flex-col gap-[3px]">
          <div className="h-px w-full bg-[#2c2017]/10" />
          <div className="h-px w-full bg-[#2c2017]/20" />
        </div>

        {/* Bottom summary */}
        <div className="py-10 sm:py-14">
          <div className="flex items-start gap-3">
            <SkullIcon className="mt-1 size-5 shrink-0 text-[#a63d2f]/50" />
            <div>
              <p
                className="text-lg leading-relaxed text-[#2c2017]/80 sm:text-xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <span className="font-semibold text-[#a63d2f]/80">
                  Un monde à +4–5°C, ce n&apos;est pas
                  &laquo;&nbsp;un peu plus chaud&nbsp;&raquo;.
                </span>{" "}
                C&apos;est un monde où la chaleur dangereuse devient normale, où la mer
                monte probablement de ~1&nbsp;m d&apos;ici 2100 (et plusieurs mètres
                ensuite), où ~4&nbsp;milliards de personnes sont en pénurie d&apos;eau,
                et où le risque d&apos;extinction et de basculement d&apos;écosystèmes
                grimpe fortement.
              </p>
            </div>
          </div>
        </div>

        {/* Final rule + footer */}
        <div className="h-px w-full bg-[#2c2017]/10" />
        <footer
          className="pt-6 pb-4 text-[10px] tracking-[0.2em] text-[#5c4a3a]/20 uppercase"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Données : GIEC AR6 &mdash; Scénario SSP5-8.5 &mdash; Réchauffement
          moyen +4,4°C (plage 3,3&ndash;5,7°C) &mdash; Référence 1995&ndash;2014
        </footer>
      </div>
    </div>
  )
}
