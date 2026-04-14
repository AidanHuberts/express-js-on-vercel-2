"use client"

import dynamic from "next/dynamic"

const PipeModel = dynamic(() => import("./PipeModel"), { ssr: false })

export default function ModelWrapper() {
  return <PipeModel />
}
