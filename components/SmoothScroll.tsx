"use client"

import { useEffect, useRef } from "react"
import type LocomotiveScroll from "locomotive-scroll"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    let scroll: any

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      scroll = new LocomotiveScroll({
        el: scrollRef.current as HTMLElement,
        smooth: true,
        lerp: 0.08,
      } as any)

      locomotiveScrollRef.current = scroll
    }

    initScroll()

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy()
      }
    }
  }, [])

  return <div ref={scrollRef}>{children}</div>
}
