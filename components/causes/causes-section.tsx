import { SectionHeader } from "@/components/shared/section-header"
import { FigureCard } from "@/components/shared/figure-card"
import { OwidCard } from "@/components/shared/owid-card"
import { SourceFooter } from "@/components/shared/source-footer"
import { DataCell } from "@/components/shared/data-cell"
import { causesFigures, causesData, causesOwid } from "@/lib/climate-data"
import type { SectionNavItem } from "@/components/shared/section-nav"

export const causesNav: SectionNavItem[] = [
  { label: "Chiffres clés", anchor: "causes-chiffres" },
  { label: "Attribution", anchor: "causes-attribution" },
  { label: "Température", anchor: "causes-temperature" },
  { label: "Émissions CO₂", anchor: "causes-emissions" },
  { label: "Cycle du carbone", anchor: "causes-carbone" },
]

export function CausesSection() {
  return (
    <>
      <SectionHeader
        id="causes-chiffres"
        title="Les chiffres clés"
        subtitle="Science physique du changement climatique"
      />

      {/* ── 6 data cells (2 cols each) ── */}
      {causesData.map((cell) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="compact"
        />
      ))}

      <SectionHeader
        id="causes-attribution"
        title="Réchauffement observé et attribution"
        subtitle="La température a augmenté de 1,1°C — l'influence humaine est le facteur dominant"
      />

      {/* ── SPM.1 (6) | SPM.2 (6) ── */}
      <FigureCard figure={causesFigures[0]} />
      <FigureCard figure={causesFigures[1]} />

      <SectionHeader
        id="causes-temperature"
        title="Anomalie de température observée"
        subtitle="Évolution de la température mondiale depuis 1850"
      />

      {/* ── OWID: temperature-anomaly (12) ── */}
      <OwidCard chart={causesOwid[0]} />

      <SectionHeader
        id="causes-emissions"
        title="Émissions de CO₂ dans le monde"
        subtitle="Tendances historiques et répartition par pays"
      />

      {/* ── OWID: co2-explorer-per-capita (12) ── */}
      <OwidCard chart={causesOwid[1]} />

      <SectionHeader
        id="causes-carbone"
        title="Cycle du carbone"
        subtitle="La capacité d'absorption des puits naturels diminue avec les émissions"
      />

      {/* ── SPM.7 (12 full width) ── */}
      <FigureCard figure={causesFigures[2]} />

      <SourceFooter
        text="Le réchauffement climatique est sans équivoque causé par les activités humaines. Chaque tonne supplémentaire de CO₂ contribue au réchauffement de manière quasi linéaire."
        source="Source : GIEC AR6 — WG I"
      />
    </>
  )
}
