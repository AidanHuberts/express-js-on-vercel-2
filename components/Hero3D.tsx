"use client"

import { useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Html, Environment, useGLTF } from "@react-three/drei"
import * as THREE from "three"

// Layer information
const layerInfo = {
  pip: {
    title: "PIP (Outer Coating)",
    description:
      "The Pipe-in-Pipe (PIP) outer coating provides additional protection and insulation for the entire system, especially in harsh environments.",
    color: "#222222",
    hoverColor: "#444444",
    radius: 1.2,
    thickness: 0.2,
    labelPosition: [0, 0.8, 1.3],
  },
  steel: {
    title: "Steel Pipe",
    description:
      "The original host pipe that provides structural integrity. The IT3 System uses this existing pipe as the foundation, extending its lifespan and preventing the need for complete replacement.",
    color: "#A0A0A0",
    hoverColor: "#C0C0C0",
    radius: 1.0,
    thickness: 0.2,
    labelPosition: [0, -0.8, 1.1],
  },
  grout: {
    title: "Cement Grout",
    description:
      "A specialized cement slurry that fills the annular space between the steel pipe and inner liner. This layer transfers stress, provides a secondary corrosion barrier, and creates a unified multiwall pipe system.",
    color: "#DAA520",
    hoverColor: "#FFD700",
    radius: 0.8,
    thickness: 0.3,
    labelPosition: [0.9, 0.4, 0],
  },
  lining: {
    title: "Polymer Liner",
    description:
      "A corrosion-resistant liner that creates a smooth, durable flow surface. This layer prevents internal corrosion, improves flow characteristics, and can be customized based on the specific fluid being transported.",
    color: "#FFD700",
    hoverColor: "#FFDF00",
    radius: 0.5,
    thickness: 0.1,
    labelPosition: [0.6, -0.4, 0],
  },
}

function InfoPanel({ selected, setSelected, setAutoRotate }) {
  if (!selected) return null

  return (
    <Html
      position={[2, 0, 0]}
      center
      as="div"
      className="pointer-events-auto"
      style={{
        transition: "all 0.2s",
        opacity: 1,
        transform: "scale(1)",
      }}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-64">
        <h3 className="text-lg font-bold mb-2" style={{ color: layerInfo[selected].hoverColor }}>
          {layerInfo[selected].title}
        </h3>
        <p className="text-sm text-gray-700">{layerInfo[selected].description}</p>
        <button
          className="mt-3 text-xs text-blue-600 hover:text-blue-800"
          onClick={(e) => {
            e.stopPropagation()
            setSelected(null)
            setAutoRotate(true)
          }}
        >
          Close
        </button>
      </div>
    </Html>
  )
}

function Pipe3D() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const [autoRotate, setAutoRotate] = useState(true)

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  const handleClick = (layer: string) => {
    setSelected(selected === layer ? null : layer)
    setAutoRotate(selected === layer ? true : false)
  }

  return (
    <>
      {/* Create a simpler approach with a cross-section view */}
      <group ref={groupRef}>
        {/* Left half of the pipe (cross-section) */}
        <group position={[-0.6, 0, 0]}>
          {/* PIP Layer */}
          <mesh
            onPointerOver={() => setHovered("pip")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("pip")}
          >
            <cylinderGeometry args={[layerInfo.pip.radius, layerInfo.pip.radius, 2, 32, 1, false, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "pip" || selected === "pip" ? layerInfo.pip.hoverColor : layerInfo.pip.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Steel Layer */}
          <mesh
            onPointerOver={() => setHovered("steel")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("steel")}
          >
            <cylinderGeometry args={[layerInfo.steel.radius, layerInfo.steel.radius, 2, 32, 1, false, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "steel" || selected === "steel" ? layerInfo.steel.hoverColor : layerInfo.steel.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Grout Layer */}
          <mesh
            onPointerOver={() => setHovered("grout")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("grout")}
          >
            <cylinderGeometry args={[layerInfo.grout.radius, layerInfo.grout.radius, 2, 32, 1, false, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "grout" || selected === "grout" ? layerInfo.grout.hoverColor : layerInfo.grout.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Lining Layer */}
          <mesh
            onPointerOver={() => setHovered("lining")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("lining")}
          >
            <cylinderGeometry args={[layerInfo.lining.radius, layerInfo.lining.radius, 2, 32, 1, false, 0, Math.PI]} />
            <meshStandardMaterial
              color={
                hovered === "lining" || selected === "lining" ? layerInfo.lining.hoverColor : layerInfo.lining.color
              }
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Inner hollow */}
          <mesh>
            <cylinderGeometry
              args={[
                layerInfo.lining.radius - layerInfo.lining.thickness,
                layerInfo.lining.radius - layerInfo.lining.thickness,
                2,
                32,
                1,
                false,
                0,
                Math.PI,
              ]}
            />
            <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
          </mesh>

          {/* Cross-section rings */}
          {/* PIP to Steel ring */}
          <mesh
            position={[0, 1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("pip")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("pip")}
          >
            <ringGeometry args={[layerInfo.steel.radius, layerInfo.pip.radius, 32, 1, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "pip" || selected === "pip" ? layerInfo.pip.hoverColor : layerInfo.pip.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          <mesh
            position={[0, -1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("pip")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("pip")}
          >
            <ringGeometry args={[layerInfo.steel.radius, layerInfo.pip.radius, 32, 1, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "pip" || selected === "pip" ? layerInfo.pip.hoverColor : layerInfo.pip.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Steel to Grout ring */}
          <mesh
            position={[0, 1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("steel")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("steel")}
          >
            <ringGeometry args={[layerInfo.grout.radius, layerInfo.steel.radius, 32, 1, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "steel" || selected === "steel" ? layerInfo.steel.hoverColor : layerInfo.steel.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          <mesh
            position={[0, -1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("steel")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("steel")}
          >
            <ringGeometry args={[layerInfo.grout.radius, layerInfo.steel.radius, 32, 1, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "steel" || selected === "steel" ? layerInfo.steel.hoverColor : layerInfo.steel.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Grout to Lining ring */}
          <mesh
            position={[0, 1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("grout")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("grout")}
          >
            <ringGeometry args={[layerInfo.lining.radius, layerInfo.grout.radius, 32, 1, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "grout" || selected === "grout" ? layerInfo.grout.hoverColor : layerInfo.grout.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          <mesh
            position={[0, -1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("grout")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("grout")}
          >
            <ringGeometry args={[layerInfo.lining.radius, layerInfo.grout.radius, 32, 1, 0, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "grout" || selected === "grout" ? layerInfo.grout.hoverColor : layerInfo.grout.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Lining to Hollow ring */}
          <mesh
            position={[0, 1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("lining")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("lining")}
          >
            <ringGeometry
              args={[layerInfo.lining.radius - layerInfo.lining.thickness, layerInfo.lining.radius, 32, 1, 0, Math.PI]}
            />
            <meshStandardMaterial
              color={
                hovered === "lining" || selected === "lining" ? layerInfo.lining.hoverColor : layerInfo.lining.color
              }
              side={THREE.DoubleSide}
            />
          </mesh>

          <mesh
            position={[0, -1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerOver={() => setHovered("lining")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("lining")}
          >
            <ringGeometry
              args={[layerInfo.lining.radius - layerInfo.lining.thickness, layerInfo.lining.radius, 32, 1, 0, Math.PI]}
            />
            <meshStandardMaterial
              color={
                hovered === "lining" || selected === "lining" ? layerInfo.lining.hoverColor : layerInfo.lining.color
              }
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>

        {/* Right half of the pipe (exterior) */}
        <group position={[0.6, 0, 0]}>
          {/* PIP Layer */}
          <mesh
            onPointerOver={() => setHovered("pip")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("pip")}
          >
            <cylinderGeometry args={[layerInfo.pip.radius, layerInfo.pip.radius, 2, 32, 1, false, Math.PI, Math.PI]} />
            <meshStandardMaterial
              color={hovered === "pip" || selected === "pip" ? layerInfo.pip.hoverColor : layerInfo.pip.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Steel Layer */}
          <mesh
            onPointerOver={() => setHovered("steel")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("steel")}
          >
            <cylinderGeometry
              args={[layerInfo.steel.radius, layerInfo.steel.radius, 2, 32, 1, false, Math.PI, Math.PI]}
            />
            <meshStandardMaterial
              color={hovered === "steel" || selected === "steel" ? layerInfo.steel.hoverColor : layerInfo.steel.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Grout Layer */}
          <mesh
            onPointerOver={() => setHovered("grout")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("grout")}
          >
            <cylinderGeometry
              args={[layerInfo.grout.radius, layerInfo.grout.radius, 2, 32, 1, false, Math.PI, Math.PI]}
            />
            <meshStandardMaterial
              color={hovered === "grout" || selected === "grout" ? layerInfo.grout.hoverColor : layerInfo.grout.color}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Lining Layer */}
          <mesh
            onPointerOver={() => setHovered("lining")}
            onPointerOut={() => setHovered(null)}
            onClick={() => handleClick("lining")}
          >
            <cylinderGeometry
              args={[layerInfo.lining.radius, layerInfo.lining.radius, 2, 32, 1, false, Math.PI, Math.PI]}
            />
            <meshStandardMaterial
              color={
                hovered === "lining" || selected === "lining" ? layerInfo.lining.hoverColor : layerInfo.lining.color
              }
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Inner hollow */}
          <mesh>
            <cylinderGeometry
              args={[
                layerInfo.lining.radius - layerInfo.lining.thickness,
                layerInfo.lining.radius - layerInfo.lining.thickness,
                2,
                32,
                1,
                false,
                Math.PI,
                Math.PI,
              ]}
            />
            <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>

      {/* Fixed position labels */}
      <Html position={[-1.5, 1.2, 0]} center>
        <div
          className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
          style={{
            backgroundColor: layerInfo.pip.color,
            color: "#ffffff",
            border: "1px solid #ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          {layerInfo.pip.title}
        </div>
      </Html>

      <Html position={[-1.5, 0.8, 0]} center>
        <div
          className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
          style={{
            backgroundColor: layerInfo.steel.color,
            color: "#ffffff",
            border: "1px solid #ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          {layerInfo.steel.title}
        </div>
      </Html>

      <Html position={[-1.5, 0.4, 0]} center>
        <div
          className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
          style={{
            backgroundColor: layerInfo.grout.color,
            color: "#ffffff",
            border: "1px solid #ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          {layerInfo.grout.title}
        </div>
      </Html>

      <Html position={[-1.5, 0, 0]} center>
        <div
          className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
          style={{
            backgroundColor: layerInfo.lining.color,
            color: "#ffffff",
            border: "1px solid #ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          {layerInfo.lining.title} (Hollow)
        </div>
      </Html>

      {/* Info panel rendered outside the rotating group */}
      <InfoPanel selected={selected} setSelected={setSelected} setAutoRotate={setAutoRotate} />
    </>
  )
}

function Model({ url }: { url: string }) {
  const [error, setError] = useState(false)
  const gltf = useGLTF(url, undefined, (e) => {
    console.error("Error loading model:", e)
    setError(true)
  })
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2
    }
  })

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
        <Html position={[0, 3, 0]} center>
          <div className="bg-white p-2 rounded text-red-500 text-sm">Error loading model</div>
        </Html>
      </mesh>
    )
  }

  return <primitive object={gltf.scene} ref={modelRef} scale={[2.5, 2.5, 2.5]} />
}

export default function Hero3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas dpr={[1, 2]} camera={{ position: [3, 0, 3], fov: 45 }}>
        <color attach="background" args={["#f8f9fa"]} />
        <ambientLight intensity={0.7} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        <spotLight position={[-5, -5, -5]} angle={0.15} penumbra={1} intensity={0.4} castShadow />
        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[2, 32, 32]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
          }
        >
          <Model url="/models/pipe_model.glb" />
        </Suspense>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          dampingFactor={0.05}
          rotateSpeed={0.8}
        />
        <Environment preset="studio" />
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-3 rounded-lg shadow-md">
        <h3 className="text-sm font-bold mb-1">IT3 System Layers</h3>
        <ul className="text-xs space-y-1">
          <li className="flex items-center">
            <span
              className="w-3 h-3 inline-block mr-1 rounded-full"
              style={{ backgroundColor: layerInfo.pip.color }}
            ></span>
            {layerInfo.pip.title}
          </li>
          <li className="flex items-center">
            <span
              className="w-3 h-3 inline-block mr-1 rounded-full"
              style={{ backgroundColor: layerInfo.steel.color }}
            ></span>
            {layerInfo.steel.title}
          </li>
          <li className="flex items-center">
            <span
              className="w-3 h-3 inline-block mr-1 rounded-full"
              style={{ backgroundColor: layerInfo.grout.color }}
            ></span>
            {layerInfo.grout.title}
          </li>
          <li className="flex items-center">
            <span
              className="w-3 h-3 inline-block mr-1 rounded-full"
              style={{ backgroundColor: layerInfo.lining.color }}
            ></span>
            {layerInfo.lining.title} (Hollow)
          </li>
        </ul>
      </div>

      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded text-xs">
        Click on any layer to learn more
      </div>
    </div>
  )
}
