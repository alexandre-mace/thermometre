import { SectionHeader } from "@/components/shared/section-header"
import { SectionNav } from "@/components/shared/section-nav"
import { FigureCard } from "@/components/shared/figure-card"
import { OwidCard } from "@/components/shared/owid-card"
import { SourceFooter } from "@/components/shared/source-footer"
import { DataCell } from "@/components/shared/data-cell"
import {
  solutionsFigures,
  solutionsData,
  solutionsOwid,
  foodOwid,
  owidFigures,
} from "@/lib/climate-data"

const nav = [
  { label: "Chiffres cles", anchor: "sol-chiffres" },
  { label: "Transition", anchor: "sol-transition" },
  { label: "Attenuation", anchor: "sol-attenuation" },
  { label: "Trajectoires", anchor: "sol-trajectoires" },
  { label: "Alimentation", anchor: "sol-alimentation" },
]

export function SolutionsSection() {
  return (
    <>
      <SectionNav items={nav} />

      <SectionHeader
        id="sol-chiffres"
        title="Les chiffres cles"
        subtitle="Emissions et potentiel de reduction par secteur"
      />

      {/* ── 6 data cells (2 cols each) ── */}
      {solutionsData.map((cell, i) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="compact"
          isLast={i === solutionsData.length - 1}
        />
      ))}

      <SectionHeader
        id="sol-transition"
        title="Transition energetique"
        subtitle="Evolution du mix energetique et du reseau electrique mondial"
      />

      {/* ── OWID: energy-consumption (6) | electricity-prod (6) ── */}
      <OwidCard chart={solutionsOwid[0]} />
      <OwidCard chart={solutionsOwid[1]} isLast />

      <SectionHeader
        id="sol-attenuation"
        title="Options d'attenuation et couts"
        subtitle="Potentiel de reduction, strategies cote demande et baisse des couts depuis 2010"
      />

      {/* ── WG3-SPM.7 (4) | WG3-SPM.6 (4) | WG3-SPM.3 (4) ── */}
      <FigureCard figure={solutionsFigures[0]} />
      <FigureCard figure={solutionsFigures[1]} />
      <FigureCard figure={solutionsFigures[2]} isLast />

      <SectionHeader
        id="sol-trajectoires"
        title="Trajectoires de reduction"
        subtitle="Scenarios modelises pour limiter le rechauffement a 1,5°C et 2°C"
      />

      {/* ── WG3-SPM.4 (4) | SYR-SPM.5 (4) | OWID warming scenarios (4) ── */}
      <FigureCard figure={solutionsFigures[3]} />
      <FigureCard figure={solutionsFigures[4]} />
      <FigureCard figure={owidFigures[1]} isLast />

      <SectionHeader
        id="sol-alimentation"
        title="Empreinte carbone alimentaire"
        subtitle="Emissions de GES par aliment et par produit de la mer"
      />

      {/* ── OWID static: food emissions supply chain (12) ── */}
      <FigureCard figure={owidFigures[0]} />

      {/* ── OWID: food-carbon-footprint (6) | ghg-emissions-seafood (6) ── */}
      <OwidCard chart={foodOwid[0]} />
      <OwidCard chart={foodOwid[1]} isLast />

      <SourceFooter
        text="Des reductions substantielles d'emissions sont possibles dans tous les secteurs. De nombreuses options ont un cout inferieur a 100 USD/tCO2eq et certaines generent des economies nettes."
        source="Source : GIEC AR6 — WG III + SYR"
      />
    </>
  )
}
