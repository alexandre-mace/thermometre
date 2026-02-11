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
  { label: "Extrêmes", anchor: "csq-extremes" },
  { label: "Climat", anchor: "csq-climat" },
  { label: "Système", anchor: "csq-systeme" },
  { label: "Impacts", anchor: "csq-impacts" },
]

export function ConsequencesSection() {
  return (
    <>

      <SectionHeader
        id="csq-ssp585"
        title="Scénario SSP5-8.5 — +4,4°C en 2100"
        subtitle="Conséquences chiffrées d'un réchauffement non maîtrisé"
      />

      <ConsequencesGrid />

      <SectionHeader
        id="csq-projections"
        title="Projections par niveau de réchauffement"
        subtitle="Impacts sur les espèces, la santé et l'agriculture entre 1,5°C et 4°C"
      />

      {/* ── SYR-SPM.2 (6) | SYR-SPM.3 (6) — synthèse SYR ── */}
      <FigureCard figure={consequencesFigures[0]} priority />
      <FigureCard figure={consequencesFigures[1]} />

      <SectionHeader
        id="csq-risques"
        title="Risques par niveau de réchauffement"
        subtitle="Comment les risques évoluent entre 1,5°C et 4°C+"
      />

      {/* ── WG2-SPM.3a (6) | WG2-SPM.3b (6) ── */}
      <FigureCard figure={consequencesFigures[2]} />
      <FigureCard figure={consequencesFigures[3]} />

      <SectionHeader
        id="csq-extremes"
        title="Extrêmes climatiques"
        subtitle="Changements observés et projetés dans les événements extrêmes"
      />

      {/* ── SPM.3 (6) | SPM.6 (6) ── */}
      <FigureCard figure={consequencesFigures[6]} />
      <FigureCard figure={consequencesFigures[7]} />

      <SectionHeader
        id="csq-climat"
        title="Projections climatiques"
        subtitle="Changements projetés de température, précipitations et humidité des sols"
      />

      {/* ── SPM.5a (6) | SPM.5b (6) ── */}
      <FigureCard figure={consequencesFigures[4]} />
      <FigureCard figure={consequencesFigures[5]} />

      <SectionHeader
        id="csq-systeme"
        title="Réponse du système climatique"
        subtitle="Température, glace arctique, acidification des océans et montée des mers"
      />

      {/* ── SPM.8 (12 full width) ── */}
      <FigureCard figure={consequencesFigures[8]} />

      <SectionHeader
        id="csq-impacts"
        title="Impacts observés"
        subtitle="Changements déjà mesurables dans les écosystèmes et systèmes humains"
      />

      {/* ── WG2-SPM.2 (12 full width) ── */}
      <FigureCard figure={consequencesFigures[9]} />

      <SourceFooter
        text="Sans inflexion majeure des trajectoires d'émissions, un réchauffement de +4,4°C d'ici 2100 entraînerait des transformations irréversibles des systèmes naturels et humains à l'échelle planétaire."
        source="Source : GIEC AR6 — WG I + WG II + SYR"
      />
    </>
  )
}
