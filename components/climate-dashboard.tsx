"use client"

import { useState, useCallback } from "react"
import { ClimateTabs, type TabId } from "./climate-tabs"
import { SectionNav } from "./shared/section-nav"
import { ThemeToggle } from "./shared/theme-toggle"
import { SearchBar } from "./shared/search-bar"
import { CausesSection, causesNav } from "./causes/causes-section"
import {
  ConsequencesSection,
  consequencesNav,
} from "./consequences/consequences-section"
import { SolutionsSection, solutionsNav } from "./solutions/solutions-section"

const navMap: Record<TabId, typeof causesNav> = {
  causes: causesNav,
  consequences: consequencesNav,
  solutions: solutionsNav,
}

export function ClimateDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("consequences")

  const handleSearchNavigate = useCallback(
    (tab: TabId, anchor: string) => {
      setActiveTab(tab)
      // Wait for tab content to render before scrolling
      requestAnimationFrame(() => {
        setTimeout(() => {
          document
            .getElementById(anchor)
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 50)
      })
    },
    [],
  )

  return (
    <section className="w-full bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* ── Sticky header area ── */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm">
        <div
          data-dashboard-header
          className="px-6 pt-4 pb-3 md:px-8 md:pt-4 md:pb-3 flex items-center justify-between"
        >
          <h1 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
            🌡️ Thermometre
          </h1>
          <div className="flex items-center gap-2">
            <SearchBar onNavigate={handleSearchNavigate} />
            <ThemeToggle />
          </div>
        </div>

        <div className="px-6 md:px-8">
          <ClimateTabs active={activeTab} onChange={setActiveTab} />
        </div>

        <div className="px-6 md:px-8 pt-2 pb-2">
          <SectionNav items={navMap[activeTab]} />
        </div>
      </div>

      {/* ── Tab content ── */}
      <div
        className="grid w-full px-6 md:px-8 pb-8"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "var(--grid-gap)",
        }}
      >
        {activeTab === "causes" && <CausesSection />}
        {activeTab === "consequences" && <ConsequencesSection />}
        {activeTab === "solutions" && <SolutionsSection />}
      </div>
    </section>
  )
}
