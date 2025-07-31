"use client"

import type React from "react"

import { createContext, useState, type Dispatch, type SetStateAction } from "react"

type CursorContextType = {
  variant: string
  setVariant: Dispatch<SetStateAction<string>>
}

export const CursorContext = createContext<CursorContextType>({
  variant: "default",
  setVariant: () => {},
})

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState("default")

  return <CursorContext.Provider value={{ variant, setVariant }}>{children}</CursorContext.Provider>
}
