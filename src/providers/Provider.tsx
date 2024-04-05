"use client"

import { NextUIProvider } from "@nextui-org/react"
import { FC, PropsWithChildren } from "react"

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

export default Provider
