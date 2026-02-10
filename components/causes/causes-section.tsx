import { SectionHeader } from "@/components/shared/section-header"
import { FigureCard } from "@/components/shared/figure-card"
import { OwidCard } from "@/components/shared/owid-card"
import { SourceFooter } from "@/components/shared/source-footer"
import { DataCell } from "@/components/shared/data-cell"
import { causesFigures, causesData, causesOwid } from "@/lib/climate-data"
import type { SectionNavItem } from "@/components/shared/section-nav"

export const causesNav: SectionNavItem[] = [
  { label: "Chiffres cles", anchor: "causes-chiffres" },
  { label: "Attribution", anchor: "causes-attribution" },
  { label: "Temperature", anchor: "causes-temperature" },
  { label: "Emissions CO2", anchor: "causes-emissions" },
  { label: "Cycle du carbone", anchor: "causes-carbone" },
]

export function CausesSection() {
  return (
    <>
      <SectionHeader
        id="causes-chiffres"
        title="Les chiffres cles"
        subtitle="Science physique du changement climatique"
      />

      {/* ── 6 data cells (2 cols each) ── */}
      {causesData.map((cell, i) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="compact"
          isLast={i === causesData.length - 1}
        />
      ))}

      <SectionHeader
        id="causes-attribution"
        title="Rechauffement observe et attribution"
        subtitle="La temperature a augmente de 1,1°C — l'influence humaine est le facteur dominant"
      />

      {/* ── SPM.1 (6) | SPM.2 (6) ── */}
      <FigureCard figure={causesFigures[0]} />
      <FigureCard figure={causesFigures[1]} isLast />

      <SectionHeader
        id="causes-temperature"
        title="Anomalie de temperature observee"
        subtitle="Evolution de la temperature mondiale depuis 1850"
      />

      {/* ── OWID: temperature-anomaly (12) ── */}
      <OwidCard chart={causesOwid[0]} isLast />

      <SectionHeader
        id="causes-emissions"
        title="Emissions de CO2 dans le monde"
        subtitle="Tendances historiques et repartition par pays"
      />

      {/* ── OWID: co2-explorer-per-capita (12) ── */}
      <OwidCard chart={causesOwid[1]} isLast />

      <SectionHeader
        id="causes-carbone"
        title="Cycle du carbone"
        subtitle="La capacite d'absorption des puits naturels diminue avec les emissions"
      />

      {/* ── SPM.7 (12 full width) ── */}
      <FigureCard figure={causesFigures[2]} isLast />

      <SourceFooter
        text="Le rechauffement climatique est sans equivoque cause par les activites humaines. Chaque tonne supplementaire de CO2 contribue au rechauffement de maniere quasi lineaire."
        source="Source : GIEC AR6 — WG I"
      />
    </>
  )
}
