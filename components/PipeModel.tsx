"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"
import type * as THREE from "three"

function Model({ url }: { url: string }) {
  const gltf = useGLTF(url)
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} scale={[2.5, 2.5, 2.5]} />
}

export default function PipeModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[2, 32, 32]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
          }
        >
          {/* Use a simple built-in geometry as fallback instead of external model */}
          <mesh>
            <cylinderGeometry args={[2, 2, 5, 32]} />
            <meshStandardMaterial color="#A0A0A0" metalness={0.8} roughness={0.2} />
          </mesh>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
