"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export type TabId = "causes" | "consequences" | "solutions"

const tabs: { id: TabId; label: string; wg: string; emoji: string; description: string }[] = [
  { id: "causes", label: "Causes", wg: "WG I", emoji: "/emoji/factory.png", description: "Émissions & origines" },
  { id: "consequences", label: "Conséquences", wg: "WG II", emoji: "/emoji/water-wave.png", description: "Impacts & risques" },
  { id: "solutions", label: "Solutions", wg: "WG III", emoji: "/emoji/high-voltage.png", description: "Atténuation & adaptation" },
]

export function ClimateTabs({
  active,
  onChange,
}: {
  active: TabId
  onChange: (tab: TabId) => void
}) {
  return (
    <div data-tab-bar className="flex w-full gap-1.5 md:gap-2">
      {tabs.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            data-active={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex-1 relative overflow-hidden rounded-lg md:rounded-xl text-left cursor-pointer transition-all duration-200 min-h-[3.25rem] md:min-h-[4.5rem]",
              isActive
                ? "bg-foreground text-background shadow-lg ring-1 ring-foreground/20"
                : "bg-card text-foreground/50 hover:text-foreground hover:bg-accent ring-1 ring-border",
            )}
          >
            {/* Animated Fluent emoji */}
            <span
              className={cn(
                "absolute -bottom-3 -right-3 pointer-events-none select-none transition-all duration-300",
                isActive ? "scale-110" : "grayscale opacity-30",
              )}
            >
              <Image
                src={tab.emoji}
                alt=""
                width={64}
                height={64}
                className="size-9 md:size-16"
                unoptimized
              />
            </span>

            {/* Content */}
            <span className="relative flex flex-col gap-0.5 md:gap-1 px-2.5 py-2 md:px-4 md:py-3">
              <span className="flex items-center gap-2">
                <span className={cn(
                  "text-xs md:text-base font-semibold tracking-tight",
                  isActive ? "text-background" : "text-foreground",
                )}>
                  {tab.label}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.5 rounded-md hidden sm:inline-flex",
                    isActive
                      ? "bg-background/20 text-background/80"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {tab.wg}
                </span>
              </span>
              <span
                className={cn(
                  "text-xs hidden sm:block",
                  isActive ? "text-background/70" : "text-muted-foreground",
                )}
              >
                {tab.description}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
