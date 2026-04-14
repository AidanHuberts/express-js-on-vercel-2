"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

const layers = [
  {
    id: "outer",
    name: "Outer Steel Casing",
    color: "#71717A",
    radius: 2.4,
  },
  {
    id: "cement",
    name: "Cement Grout",
    color: "#D97706",
    radius: 1.9,
  },
  {
    id: "polymer",
    name: "Polymer Liner",
    color: "#2563EB",
    radius: 1.45,
  },
  {
    id: "flow",
    name: "Flow Channel",
    color: "#0EA5E9",
    radius: 1.0,
  },
]

function TubeLayer({
  layer,
  isHovered,
  onHover,
}: {
  layer: (typeof layers)[0]
  isHovered: boolean
  onHover: (hovered: boolean) => void
}) {
  return (
    <mesh onPointerOver={() => onHover(true)} onPointerOut={() => onHover(false)} rotation={[Math.PI / 2, 0, 0]}>
      <tubeGeometry
        args={[
          new THREE.CatmullRomCurve3([new THREE.Vector3(0, -5, 0), new THREE.Vector3(0, 5, 0)]),
          64,
          layer.radius,
          16,
          false,
        ]}
      />
      <meshStandardMaterial
        color={layer.color}
        metalness={layer.id === "outer" ? 0.6 : 0.1}
        roughness={layer.id === "outer" ? 0.4 : 0.7}
        emissive={isHovered ? layer.color : "#000000"}
        emissiveIntensity={isHovered ? 0.3 : 0}
      />
    </mesh>
  )
}

function CrossSection() {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null)

  return (
    <group>
      {layers.map((layer) => (
        <TubeLayer
          key={layer.id}
          layer={layer}
          isHovered={hoveredLayer === layer.id}
          onHover={(hovered) => setHoveredLayer(hovered ? layer.id : null)}
        />
      ))}
    </group>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <CrossSection />
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100">
      <Canvas camera={{ position: [8, 6, 8], fov: 50 }}>
        <color attach="background" args={["#f8fafc"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} />
        <Scene />
        <OrbitControls enableZoom={true} enablePan={false} minDistance={6} maxDistance={20} autoRotate={false} />
        <Environment preset="city" />
      </Canvas>

      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-xs">
        <h3 className="text-lg font-bold mb-4 text-gray-900">4-Layer System</h3>
        <div className="space-y-3">
          {layers.map((layer) => (
            <div key={layer.id} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full shadow-sm flex-shrink-0" style={{ backgroundColor: layer.color }} />
              <span className="text-sm font-medium text-gray-700">{layer.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg text-sm text-gray-600">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  )
}
