"use client"

export type TabId = "causes" | "consequences" | "solutions"

const tabs: { id: TabId; label: string; wg: string }[] = [
  { id: "causes", label: "Causes", wg: "WG I" },
  { id: "consequences", label: "Consequences", wg: "WG II" },
  { id: "solutions", label: "Solutions", wg: "WG III" },
]

export function ClimateTabs({
  active,
  onChange,
}: {
  active: TabId
  onChange: (tab: TabId) => void
}) {
  return (
    <div data-tab-bar className="flex w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-active={active === tab.id}
          onClick={() => onChange(tab.id)}
          className="flex-1 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{tab.label}</span>
          <span className="hidden sm:inline">{tab.wg}</span>
        </button>
      ))}
    </div>
  )
}
