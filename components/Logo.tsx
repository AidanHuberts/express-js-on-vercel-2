import type React from "react"

const Logo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 100 }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="hollowMask">
          <rect width="100" height="100" fill="white" />
          {/* The center hole - this will be cut out */}
          <circle cx="50" cy="50" r="20" fill="black" />
        </mask>
      </defs>

      {/* Outer black ring with white holes and black bolts */}
      <circle cx="50" cy="50" r="48" fill="black" mask="url(#hollowMask)" />

      {/* White holes and black bolts */}
      <g mask="url(#hollowMask)">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          return (
            <g key={i}>
              <circle cx={50 + 40 * Math.cos(angle)} cy={50 + 40 * Math.sin(angle)} r="3.5" fill="white" />
              <circle cx={50 + 40 * Math.cos(angle)} cy={50 + 40 * Math.sin(angle)} r="1.5" fill="black" />
            </g>
          )
        })}
      </g>

      {/* Middle gray ring */}
      <circle cx="50" cy="50" r="32" fill="#808080" mask="url(#hollowMask)" />

      {/* Inner yellow ring */}
      <circle cx="50" cy="50" r="26" fill="#FFD700" mask="url(#hollowMask)" />

      {/* Thin blue outline */}
      <circle cx="50" cy="50" r="49" stroke="#FFD700" strokeWidth="0.5" fill="none" mask="url(#hollowMask)" />
    </svg>
  )
}

export default Logo
