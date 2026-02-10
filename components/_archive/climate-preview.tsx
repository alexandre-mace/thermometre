"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { VersionSwitcher, type VersionId } from "@/components/version-switcher"

const ClimateS1 = dynamic(() => import("@/components/climate-s1").then((m) => ({ default: m.ClimateS1 })))
const ClimateS2 = dynamic(() => import("@/components/climate-s2").then((m) => ({ default: m.ClimateS2 })))
const ClimateS3 = dynamic(() => import("@/components/climate-s3").then((m) => ({ default: m.ClimateS3 })))
const ClimateS4 = dynamic(() => import("@/components/climate-s4").then((m) => ({ default: m.ClimateS4 })))
const ClimateS5 = dynamic(() => import("@/components/climate-s5").then((m) => ({ default: m.ClimateS5 })))

const versions: Record<VersionId, React.ComponentType> = {
  s1: ClimateS1,
  s2: ClimateS2,
  s3: ClimateS3,
  s4: ClimateS4,
  s5: ClimateS5,
}

export function ClimatePreview() {
  const [current, setCurrent] = React.useState<VersionId>("s1")
  const Component = versions[current]

  return (
    <>
      <VersionSwitcher current={current} onChange={setCurrent} />
      <div className="pt-10">
        <Component />
      </div>
    </>
  )
}
