"use client"

import type React from "react"

import { AnimatePresence } from "framer-motion"
import { PageTransition } from "@/components/page-transition"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>{children}</PageTransition>
    </AnimatePresence>
  )
}
