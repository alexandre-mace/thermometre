"use client"

export interface SectionNavItem {
  label: string
  anchor: string
}

export function SectionNav({ items }: { items: SectionNavItem[] }) {
  return (
    <nav
      data-section-nav
      className="px-5 py-2.5 md:px-6"
      style={{ gridColumn: "1 / -1" }}
    >
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
              className="px-2.5 py-1 text-[11px] text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-md transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
