import { SectionHeader } from "@/components/shared/section-header"
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
import type { SectionNavItem } from "@/components/shared/section-nav"

export const solutionsNav: SectionNavItem[] = [
  { label: "Chiffres clés", anchor: "sol-chiffres" },
  { label: "Transition", anchor: "sol-transition" },
  { label: "Atténuation", anchor: "sol-attenuation" },
  { label: "Trajectoires", anchor: "sol-trajectoires" },
  { label: "Alimentation", anchor: "sol-alimentation" },
]

export function SolutionsSection() {
  return (
    <>
      <SectionHeader
        id="sol-chiffres"
        title="Les chiffres clés"
        subtitle="Émissions et potentiel de réduction par secteur"
      />

      {/* ── 6 data cells (2 cols each) ── */}
      {solutionsData.map((cell) => (
        <DataCell
          key={cell.id}
          data={cell}
          size="compact"
        />
      ))}

      <SectionHeader
        id="sol-transition"
        title="Transition énergétique"
        subtitle="Évolution du mix énergétique et du réseau électrique mondial"
      />

      {/* ── OWID: energy-consumption (6) | electricity-prod (6) ── */}
      <OwidCard chart={solutionsOwid[0]} />
      <OwidCard chart={solutionsOwid[1]} />

      <SectionHeader
        id="sol-attenuation"
        title="Options d'atténuation et coûts"
        subtitle="Potentiel de réduction, stratégies côté demande et baisse des coûts depuis 2010"
      />

      {/* ── WG3-SPM.7 (4) | WG3-SPM.6 (4) | WG3-SPM.3 (4) ── */}
      <FigureCard figure={solutionsFigures[0]} />
      <FigureCard figure={solutionsFigures[1]} />
      <FigureCard figure={solutionsFigures[2]} />

      <SectionHeader
        id="sol-trajectoires"
        title="Trajectoires de réduction"
        subtitle="Scénarios modélisés pour limiter le réchauffement à 1,5°C et 2°C"
      />

      {/* ── WG3-SPM.4 (4) | SYR-SPM.5 (4) | OWID warming scenarios (4) ── */}
      <FigureCard figure={solutionsFigures[3]} />
      <FigureCard figure={solutionsFigures[4]} />
      <FigureCard figure={owidFigures[1]} />

      <SectionHeader
        id="sol-alimentation"
        title="Empreinte carbone alimentaire"
        subtitle="Émissions de GES par aliment et par produit de la mer"
      />

      {/* ── OWID static: food emissions supply chain (12) ── */}
      <FigureCard figure={owidFigures[0]} />

      {/* ── OWID: food-carbon-footprint (6) | ghg-emissions-seafood (6) ── */}
      <OwidCard chart={foodOwid[0]} />
      <OwidCard chart={foodOwid[1]} />

      <SourceFooter
        text="Des réductions substantielles d'émissions sont possibles dans tous les secteurs. De nombreuses options ont un coût inférieur à 100 USD/tCO₂eq et certaines génèrent des économies nettes."
        source="Source : GIEC AR6 — WG III + SYR"
      />
    </>
  )
}
