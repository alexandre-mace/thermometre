"use client"

import { cn } from "@/lib/utils"

export interface SectionNavItem {
  label: string
  anchor: string
}

export function SectionNav({
  items,
  activeAnchor,
  onAnchorClick,
}: {
  items: SectionNavItem[]
  activeAnchor?: string
  onAnchorClick?: (anchor: string) => void
}) {
  return (
    <nav data-section-nav className="relative">
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden z-10" />
      <ul className="flex gap-1.5 overflow-x-auto md:flex-wrap scrollbar-none pr-6 md:pr-0">
        {items.map((item) => (
          <li key={item.anchor}>
            <button
              onClick={() => {
                onAnchorClick?.(item.anchor)
                document.getElementById(item.anchor)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className={cn(
                "px-2.5 py-1 text-[11px] rounded-md transition-colors cursor-pointer whitespace-nowrap",
                activeAnchor === item.anchor
                  ? "bg-foreground text-background font-medium"
                  : "text-muted-foreground hover:text-foreground bg-secondary hover:bg-accent",
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
