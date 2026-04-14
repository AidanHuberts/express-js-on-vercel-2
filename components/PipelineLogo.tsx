const PipelineLogo = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="15" width="40" height="20" rx="10" fill="url(#paint0_linear)" />
    <rect x="10" y="20" width="30" height="10" rx="5" fill="url(#paint1_linear)" />
    <circle cx="15" cy="25" r="2.5" fill="#FFFFFF" />
    <circle cx="25" cy="25" r="2.5" fill="#FFFFFF" />
    <circle cx="35" cy="25" r="2.5" fill="#FFFFFF" />
    <defs>
      <linearGradient id="paint0_linear" x1="5" y1="25" x2="45" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD700" />
        <stop offset="1" stopColor="#FFC000" />
      </linearGradient>
      <linearGradient id="paint1_linear" x1="10" y1="25" x2="40" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFDF00" />
        <stop offset="1" stopColor="#FFD700" />
      </linearGradient>
    </defs>
  </svg>
)

export default PipelineLogo
