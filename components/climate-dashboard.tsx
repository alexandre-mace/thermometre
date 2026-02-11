"use client"

import { useState, useCallback, useEffect, useRef, useMemo } from "react"
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

function useScrollSpy(anchors: string[]) {
  const [active, setActive] = useState<string | undefined>(anchors[0])
  const lockUntil = useRef(0)

  const forceActive = useCallback((anchor: string) => {
    setActive(anchor)
    // Lock observer for 1s to let smooth scroll finish
    lockUntil.current = Date.now() + 1000
  }, [])

  useEffect(() => {
    if (anchors.length === 0) return

    const els = anchors
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return

        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-160px 0px -40% 0px", threshold: 0 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [anchors])

  return [active, forceActive] as const
}

export function ClimateDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("consequences")

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [activeTab])

  const currentNav = navMap[activeTab]
  const anchors = useMemo(() => currentNav.map((n) => n.anchor), [currentNav])
  const [activeAnchor, setActiveAnchor] = useScrollSpy(anchors)

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
          className="px-2 pt-4 pb-3 md:px-8 md:pt-4 md:pb-3 flex items-center justify-between"
        >
          <h1 className="text-sm md:text-base font-semibold tracking-tight">
            🌡️ Thermomètre
          </h1>
          <div className="flex items-center gap-2">
            <SearchBar onNavigate={handleSearchNavigate} />
            <ThemeToggle />
          </div>
        </div>

        <div className="px-2 md:px-8">
          <ClimateTabs active={activeTab} onChange={setActiveTab} />
        </div>

        <div className="px-2 md:px-8 pt-2 pb-2">
          <SectionNav items={currentNav} activeAnchor={activeAnchor} onAnchorClick={setActiveAnchor} />
        </div>
      </div>

      {/* ── Tab content ── */}
      <div
        key={activeTab}
        className="grid w-full px-2 md:px-8 pb-16"
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
