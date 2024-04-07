"use client"

import { FC, PropsWithChildren, useEffect } from "react"

interface AppWrapperProps {}

const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll" as any))
        .default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  return <div>{children}</div>
}

export default AppWrapper
