"use client"

import { useRef } from "react"
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
        <Model url="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/base_basic_pbr-kTllMguJ1G2qrXFQctpQNGnGJR3J7w.glb" />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}
