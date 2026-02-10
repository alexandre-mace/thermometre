"use client"

export interface SectionNavItem {
  label: string
  anchor: string
}

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav data-section-nav>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item.anchor}>
            <button
              onClick={() => {
                document.getElementById(item.anchor)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className="px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground bg-secondary hover:bg-accent rounded-md transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
