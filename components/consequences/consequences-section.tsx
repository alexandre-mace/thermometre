import { SectionHeader } from "@/components/shared/section-header"
import { FigureCard } from "@/components/shared/figure-card"
import { SourceFooter } from "@/components/shared/source-footer"
import { ConsequencesGrid } from "./consequences-grid"
import { consequencesFigures } from "@/lib/climate-data"
import type { SectionNavItem } from "@/components/shared/section-nav"

export const consequencesNav: SectionNavItem[] = [
  { label: "SSP5-8.5", anchor: "csq-ssp585" },
  { label: "Projections", anchor: "csq-projections" },
  { label: "Risques", anchor: "csq-risques" },
  { label: "Extremes", anchor: "csq-extremes" },
  { label: "Climat", anchor: "csq-climat" },
  { label: "Systeme", anchor: "csq-systeme" },
  { label: "Impacts", anchor: "csq-impacts" },
]

export function ConsequencesSection() {
  return (
    <>

      <SectionHeader
        id="csq-ssp585"
        title="Scenario SSP5-8.5 — +4,4°C en 2100"
        subtitle="Consequences chiffrees d'un rechauffement non maitrise"
      />

      <ConsequencesGrid />

      <SectionHeader
        id="csq-projections"
        title="Projections par niveau de rechauffement"
        subtitle="Impacts sur les especes, la sante et l'agriculture entre 1,5°C et 4°C"
      />

      {/* ── SYR-SPM.2 (6) | SYR-SPM.3 (6) — synthèse SYR ── */}
      <FigureCard figure={consequencesFigures[0]} />
      <FigureCard figure={consequencesFigures[1]} isLast />

      <SectionHeader
        id="csq-risques"
        title="Risques par niveau de rechauffement"
        subtitle="Comment les risques evoluent entre 1,5°C et 4°C+"
      />

      {/* ── WG2-SPM.3a (6) | WG2-SPM.3b (6) ── */}
      <FigureCard figure={consequencesFigures[2]} />
      <FigureCard figure={consequencesFigures[3]} isLast />

      <SectionHeader
        id="csq-extremes"
        title="Extremes climatiques"
        subtitle="Changements observes et projetes dans les evenements extremes"
      />

      {/* ── SPM.3 (6) | SPM.6 (6) ── */}
      <FigureCard figure={consequencesFigures[6]} />
      <FigureCard figure={consequencesFigures[7]} isLast />

      <SectionHeader
        id="csq-climat"
        title="Projections climatiques"
        subtitle="Changements projetes de temperature, precipitations et humidite des sols"
      />

      {/* ── SPM.5a (6) | SPM.5b (6) ── */}
      <FigureCard figure={consequencesFigures[4]} />
      <FigureCard figure={consequencesFigures[5]} isLast />

      <SectionHeader
        id="csq-systeme"
        title="Reponse du systeme climatique"
        subtitle="Temperature, glace arctique, acidification des oceans et montee des mers"
      />

      {/* ── SPM.8 (12 full width) ── */}
      <FigureCard figure={consequencesFigures[8]} isLast />

      <SectionHeader
        id="csq-impacts"
        title="Impacts observes"
        subtitle="Changements deja mesurables dans les ecosystemes et systemes humains"
      />

      {/* ── WG2-SPM.2 (12 full width) ── */}
      <FigureCard figure={consequencesFigures[9]} isLast />

      <SourceFooter
        text="Sans inflexion majeure des trajectoires d'emissions, un rechauffement de +4,4°C d'ici 2100 entrainerait des transformations irreversibles des systemes naturels et humains a l'echelle planetaire."
        source="Source : GIEC AR6 — WG I + WG II + SYR"
      />
    </>
  )
}
