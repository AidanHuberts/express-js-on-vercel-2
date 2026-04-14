"use client"

import type React from "react"
import { useEffect, useState } from "react"

const PipeAnimation: React.FC = () => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <svg viewBox="0 0 400 250" className="w-full h-full">
      <defs>
        <clipPath id="cut-off-bottom">
          <rect x="0" y="0" width="400" height="125" />
        </clipPath>
        <linearGradient id="steel-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a0a0a0" />
          <stop offset="50%" stopColor="#d0d0d0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
        <linearGradient id="grout-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4d4d4" />
          <stop offset="50%" stopColor="#e4e4e4" />
          <stop offset="100%" stopColor="#d4d4d4" />
        </linearGradient>
        <linearGradient id="lining-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a7bd5" />
          <stop offset="50%" stopColor="#4a90e2" />
          <stop offset="100%" stopColor="#3a7bd5" />
        </linearGradient>
      </defs>

      {/* Steel Pipe */}
      <g className={`transition-all duration-1000 ease-out ${animate ? "opacity-100" : "opacity-0"}`}>
        <circle cx="200" cy="125" r="100" fill="url(#steel-gradient)" />
        <circle cx="200" cy="125" r="90" fill="#f0f0f0" clipPath="url(#cut-off-bottom)" />
        <text x="20" y="40" fill="#333" fontSize="16" fontWeight="bold">
          Steel Pipe
        </text>
        <line x1="100" y1="40" x2="160" y2="40" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </g>

      {/* Grout Insert */}
      <g
        className={`transition-all duration-1000 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <circle cx="200" cy="125" r="85" fill="url(#grout-gradient)" />
        <circle cx="200" cy="125" r="80" fill="#f0f0f0" clipPath="url(#cut-off-bottom)" />
        <text x="20" y="80" fill="#333" fontSize="16" fontWeight="bold">
          Grout Insert
        </text>
        <line x1="120" y1="80" x2="170" y2="80" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </g>

      {/* Lining */}
      <g
        className={`transition-all duration-1000 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      >
        <circle cx="200" cy="125" r="75" fill="url(#lining-gradient)" />
        <circle cx="200" cy="125" r="70" fill="#f0f0f0" clipPath="url(#cut-off-bottom)" />
        <text x="20" y="120" fill="#333" fontSize="16" fontWeight="bold">
          Lining
        </text>
        <line x1="80" y1="120" x2="180" y2="120" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </g>

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
        </marker>
      </defs>
    </svg>
  )
}

export default PipeAnimation
