"use client"

import { useState } from "react"
import { ClimateTabs, type TabId } from "./climate-tabs"
import { CausesSection } from "./causes/causes-section"
import { ConsequencesSection } from "./consequences/consequences-section"
import { SolutionsSection } from "./solutions/solutions-section"

export function ClimateDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("consequences")

  return (
    <section className="w-full bg-neutral-50/50 text-black font-[family-name:var(--font-geist-sans)]">
      {/* ── Global header ── */}
      <div
        data-dashboard-header
        className="px-6 py-6 md:px-8 md:py-6 flex items-center justify-between"
      >
        <h1 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
          🌡️ Thermometre
        </h1>
      </div>

      {/* ── Tab navigation ── */}
      <div className="px-6 md:px-8 pb-2">
        <ClimateTabs active={activeTab} onChange={setActiveTab} />
      </div>

      {/* ── Tab content ── */}
      <div
        className="grid w-full"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "var(--grid-gap)",
          padding: "0 1.5rem",
        }}
      >
        {activeTab === "causes" && <CausesSection />}
        {activeTab === "consequences" && <ConsequencesSection />}
        {activeTab === "solutions" && <SolutionsSection />}
      </div>
    </section>
  )
}
