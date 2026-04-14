"use client"

import { useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RotateCcw, ZoomIn, ZoomOut, Move, Info, X } from "lucide-react"

const LAYERS = [
  {
    id: "fbe",
    name: "FBE (Outer Coating)",
    color: "#000000",
    innerRadius: 0.9,
    outerRadius: 1.0,
    height: 2.5,
    description:
      "Provides structural strength and external protection against physical damage and environmental factors.",
    thickness: "6-12mm typical",
  },
  {
    id: "steel",
    name: "Steel Pipe",
    color: "#A9A9A9",
    innerRadius: 0.72,
    outerRadius: 0.9,
    height: 2.5,
    description: "Provides structural integrity and strength to the piping system.",
    thickness: "15-25mm typical",
  },
  {
    id: "cement",
    name: "Cement Grout",
    color: "#8B8B8B",
    innerRadius: 0.5,
    outerRadius: 0.65,
    height: 2.8,
    description:
      "Acts as thermal insulation and provides additional structural support between the steel pipe and polymer liner.",
    thickness: "8-15mm typical",
  },
  {
    id: "polymer",
    name: "Polymer Liner (Hollow)",
    color: "#FFD700",
    innerRadius: 0,
    outerRadius: 0.48,
    height: 3.0,
    description: "The internal passage through which fluids flow. Chemical-resistant barrier that prevents corrosion.",
    thickness: "Variable diameter",
  },
]

export default function PipeModel() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const meshesRef = useRef([])
  const isDragging = useRef(false)
  const previousMousePosition = useRef({ x: 0, y: 0 })
  const mouseDownPosition = useRef({ x: 0, y: 0 })
  const rotationRef = useRef({ x: 0.3, y: -0.5 })
  const targetRotationRef = useRef({ x: 0.3, y: -0.5 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const zoomRef = useRef(3.5)
  const targetZoomRef = useRef(3.5)
  const autoRotateRef = useRef(true)
  const lastInteractionTime = useRef(Date.now())

  const [selectedLayer, setSelectedLayer] = useState(null)
  const [hoveredLayer, setHoveredLayer] = useState(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = zoomRef.current
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight1.position.set(5, 5, 5)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
    directionalLight2.position.set(-5, -3, -5)
    scene.add(directionalLight2)

    // Create pipe group
    const pipeGroup = new THREE.Group()
    scene.add(pipeGroup)

    // Create half-pipe layers
    LAYERS.forEach((layer, index) => {
      const geometry = createHalfPipeGeometry(layer.innerRadius, layer.outerRadius, layer.height, 64)
      const material = new THREE.MeshPhongMaterial({
        color: layer.color,
        shininess: layer.id === "fbe" ? 80 : layer.id === "steel" ? 60 : 30,
        side: THREE.DoubleSide,
        transparent: layer.id === "polymer" ? false : true,
        opacity: layer.id === "polymer" ? 1.0 : 0.95,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.userData = { layerId: layer.id, originalColor: layer.color }
      pipeGroup.add(mesh)
      meshesRef.current.push(mesh)
    })

    // Add edge lines for definition
    LAYERS.forEach((layer) => {
      const edges = createHalfPipeEdges(layer.innerRadius, layer.outerRadius, layer.height, 64)
      edges.forEach((edge) => {
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 1 })
        const line = new THREE.Line(edge, lineMaterial)
        pipeGroup.add(line)
      })
    })

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Apply momentum/inertia when not dragging
      if (!isDragging.current) {
        targetRotationRef.current.x += velocityRef.current.x
        targetRotationRef.current.y += velocityRef.current.y

        // Damping
        velocityRef.current.x *= 0.95
        velocityRef.current.y *= 0.95

        // Stop if velocity is very small
        if (Math.abs(velocityRef.current.x) < 0.0001) velocityRef.current.x = 0
        if (Math.abs(velocityRef.current.y) < 0.0001) velocityRef.current.y = 0
      }

      // Auto-rotate when idle
      const timeSinceInteraction = Date.now() - lastInteractionTime.current
      if (
        autoRotateRef.current &&
        timeSinceInteraction > 3000 &&
        Math.abs(velocityRef.current.x) < 0.0001 &&
        Math.abs(velocityRef.current.y) < 0.0001
      ) {
        targetRotationRef.current.y += 0.005
      }

      // Clamp rotation
      targetRotationRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationRef.current.x))

      // Smooth interpolation for rotation
      rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.15
      rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.15

      // Smooth zoom
      zoomRef.current += (targetZoomRef.current - zoomRef.current) * 0.1

      pipeGroup.rotation.x = rotationRef.current.x
      pipeGroup.rotation.y = rotationRef.current.y
      camera.position.z = zoomRef.current

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", handleResize)

    // Mouse events for rotation
    const handleMouseDown = (e) => {
      isDragging.current = true
      autoRotateRef.current = false
      lastInteractionTime.current = Date.now()
      velocityRef.current = { x: 0, y: 0 }
      previousMousePosition.current = { x: e.clientX, y: e.clientY }
      mouseDownPosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseMove = (e) => {
      if (!isDragging.current) return

      const deltaX = e.clientX - previousMousePosition.current.x
      const deltaY = e.clientY - previousMousePosition.current.y

      const sensitivity = 0.01
      targetRotationRef.current.y += deltaX * sensitivity
      targetRotationRef.current.x += deltaY * sensitivity

      // Store velocity for momentum
      velocityRef.current.x = deltaY * sensitivity * 0.3
      velocityRef.current.y = deltaX * sensitivity * 0.3

      lastInteractionTime.current = Date.now()
      previousMousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDragging.current = false
      autoRotateRef.current = true
    }

    const handleWheel = (e) => {
      e.preventDefault()
      lastInteractionTime.current = Date.now()
      targetZoomRef.current = Math.max(2, Math.min(8, targetZoomRef.current + e.deltaY * 0.003))
    }

    // Raycaster for hover detection
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const handleHover = (e) => {
      if (isDragging.current) return

      const rect = containerRef.current.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(meshesRef.current)

      // Reset all materials
      meshesRef.current.forEach((mesh) => {
        if (mesh.userData.layerId !== selectedLayer) {
          mesh.material.emissive = new THREE.Color(0x000000)
        }
      })

      if (intersects.length > 0) {
        const intersected = intersects[0].object
        if (intersected.userData.layerId !== selectedLayer) {
          intersected.material.emissive = new THREE.Color(0x222222)
        }
        setHoveredLayer(intersected.userData.layerId)
        document.body.style.cursor = "pointer"
      } else {
        setHoveredLayer(null)
        document.body.style.cursor = "grab"
      }
    }

    const handleClick = (e) => {
      // Only trigger click if not dragging much
      const dragDistance = Math.sqrt(
        Math.pow(e.clientX - mouseDownPosition.current.x, 2) + Math.pow(e.clientY - mouseDownPosition.current.y, 2),
      )

      if (dragDistance > 5) return // Was a drag, not a click

      const rect = containerRef.current.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(meshesRef.current)

      if (intersects.length > 0) {
        const clickedLayerId = intersects[0].object.userData.layerId
        setSelectedLayer(clickedLayerId)
      } else {
        setSelectedLayer(null)
      }
    }

    renderer.domElement.addEventListener("mousedown", handleMouseDown)
    renderer.domElement.addEventListener("mousemove", handleMouseMove)
    renderer.domElement.addEventListener("mousemove", handleHover)
    renderer.domElement.addEventListener("mouseup", handleMouseUp)
    renderer.domElement.addEventListener("mouseleave", handleMouseUp)
    renderer.domElement.addEventListener("wheel", handleWheel, { passive: false })
    renderer.domElement.addEventListener("click", handleClick)

    // Touch events
    let initialTouchDistance = 0

    const handleTouchStart = (e) => {
      lastInteractionTime.current = Date.now()

      if (e.touches.length === 1) {
        isDragging.current = true
        autoRotateRef.current = false
        velocityRef.current = { x: 0, y: 0 }
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        // Pinch to zoom
        isDragging.current = false
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        initialTouchDistance = Math.sqrt(dx * dx + dy * dy)
      }
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      lastInteractionTime.current = Date.now()

      if (e.touches.length === 1 && isDragging.current) {
        const deltaX = e.touches[0].clientX - previousMousePosition.current.x
        const deltaY = e.touches[0].clientY - previousMousePosition.current.y

        const sensitivity = 0.012
        targetRotationRef.current.y += deltaX * sensitivity
        targetRotationRef.current.x += deltaY * sensitivity

        velocityRef.current.x = deltaY * sensitivity * 0.3
        velocityRef.current.y = deltaX * sensitivity * 0.3

        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      } else if (e.touches.length === 2) {
        // Pinch zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (initialTouchDistance > 0) {
          const scale = initialTouchDistance / distance
          targetZoomRef.current = Math.max(2, Math.min(8, targetZoomRef.current * (1 + (scale - 1) * 0.01)))
        }

        initialTouchDistance = distance
      }
    }

    const handleTouchEnd = () => {
      isDragging.current = false
      autoRotateRef.current = true
      initialTouchDistance = 0
    }

    renderer.domElement.addEventListener("touchstart", handleTouchStart, { passive: false })
    renderer.domElement.addEventListener("touchmove", handleTouchMove, { passive: false })
    renderer.domElement.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.domElement.removeEventListener("mousedown", handleMouseDown)
      renderer.domElement.removeEventListener("mousemove", handleMouseMove)
      renderer.domElement.removeEventListener("mousemove", handleHover)
      renderer.domElement.removeEventListener("mouseup", handleMouseUp)
      renderer.domElement.removeEventListener("mouseleave", handleMouseUp)
      renderer.domElement.removeEventListener("wheel", handleWheel)
      renderer.domElement.removeEventListener("click", handleClick)
      renderer.domElement.removeEventListener("touchstart", handleTouchStart)
      renderer.domElement.removeEventListener("touchmove", handleTouchMove)
      renderer.domElement.removeEventListener("touchend", handleTouchEnd)

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  // Update layer highlighting when selection changes
  useEffect(() => {
    meshesRef.current.forEach((mesh) => {
      const isSelected = mesh.userData.layerId === selectedLayer
      mesh.material.opacity = selectedLayer ? (isSelected ? 1 : 0.25) : 0.95
      if (isSelected) {
        mesh.material.emissive = new THREE.Color(0x444444)
      } else if (!selectedLayer) {
        mesh.material.emissive = new THREE.Color(0x000000)
      }
    })
  }, [selectedLayer])

  const createHalfPipeGeometry = (innerRadius, outerRadius, height, segments) => {
    if (innerRadius === 0) {
      // Create hollow/concave geometry for the polymer liner
      const geometry = new THREE.BufferGeometry()
      const positions = []
      const indices = []

      const heightSegments = 40
      const angleSegments = Math.floor(segments / 2)

      for (let i = 0; i <= heightSegments; i++) {
        const y = (i / heightSegments) * height - height / 2

        for (let j = 0; j <= angleSegments; j++) {
          const angle = (j / angleSegments) * Math.PI

          // Create concave profile - indent at the top (middle of arc)
          const concavity = 0.15
          const baseRadius = outerRadius * (1 - concavity)
          const radiusVariation = outerRadius * concavity * Math.sin(angle)
          const radius = baseRadius + radiusVariation

          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius

          positions.push(x, y, z)
        }
      }

      // Create faces
      for (let i = 0; i < heightSegments; i++) {
        for (let j = 0; j < angleSegments; j++) {
          const a = i * (angleSegments + 1) + j
          const b = a + angleSegments + 1
          const c = a + 1
          const d = b + 1

          indices.push(a, b, c)
          indices.push(b, d, c)
        }
      }

      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
      geometry.setIndex(indices)
      geometry.computeVertexNormals()

      return geometry
    } else {
      // Regular half-ring shape for other layers
      const shape = new THREE.Shape()
      shape.absarc(0, 0, outerRadius, 0, Math.PI, false)
      shape.absarc(0, 0, innerRadius, Math.PI, 0, true)
      shape.closePath()

      const extrudeSettings = {
        depth: height,
        bevelEnabled: false,
        steps: 1,
      }

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
      geometry.translate(0, 0, -height / 2)
      geometry.rotateX(Math.PI / 2)

      return geometry
    }
  }

  const createHalfPipeEdges = (innerRadius, outerRadius, height, segments) => {
    const edges = []
    const halfHeight = height / 2

    // Create arc points
    const createArc = (radius, y) => {
      const points = []
      for (let i = 0; i <= segments / 2; i++) {
        const angle = (i / (segments / 2)) * Math.PI
        points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius))
      }
      return new THREE.BufferGeometry().setFromPoints(points)
    }

    // Top and bottom arcs for outer radius
    edges.push(createArc(outerRadius, halfHeight))
    edges.push(createArc(outerRadius, -halfHeight))

    // Top and bottom arcs for inner radius (if not flow channel)
    if (innerRadius > 0) {
      edges.push(createArc(innerRadius, halfHeight))
      edges.push(createArc(innerRadius, -halfHeight))
    }

    return edges
  }

  const handleZoomIn = () => {
    lastInteractionTime.current = Date.now()
    targetZoomRef.current = Math.max(2, targetZoomRef.current - 0.5)
  }

  const handleZoomOut = () => {
    lastInteractionTime.current = Date.now()
    targetZoomRef.current = Math.min(8, targetZoomRef.current + 0.5)
  }

  const handleReset = () => {
    targetRotationRef.current = { x: 0.3, y: -0.5 }
    velocityRef.current = { x: 0, y: 0 }
    targetZoomRef.current = 3.5
    autoRotateRef.current = true
    lastInteractionTime.current = Date.now()
    setSelectedLayer(null)
  }

  const activeLayer = LAYERS.find((l) => l.id === (selectedLayer || hoveredLayer))

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            Interactive 3D <span className="font-semibold">IT3 System Model</span>
          </h1>
          <p className="text-slate-600 mt-2 text-lg">4-Layer Pipe System Cross-Section</p>
        </div>
      </div>

      <div className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 3D Viewer */}
            <div className="lg:col-span-3">
              <Card className="bg-white border-slate-200 overflow-hidden shadow-lg">
                <div
                  ref={containerRef}
                  className="w-full h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing relative"
                >
                  {/* Controls overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/90 hover:bg-slate-50 backdrop-blur-sm border-slate-300 shadow-md"
                      onClick={handleZoomIn}
                    >
                      <ZoomIn className="h-4 w-4 text-slate-700" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/90 hover:bg-slate-50 backdrop-blur-sm border-slate-300 shadow-md"
                      onClick={handleZoomOut}
                    >
                      <ZoomOut className="h-4 w-4 text-slate-700" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/90 hover:bg-slate-50 backdrop-blur-sm border-slate-300 shadow-md"
                      onClick={handleReset}
                    >
                      <RotateCcw className="h-4 w-4 text-slate-700" />
                    </Button>
                  </div>

                  {/* Help text */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-slate-600 text-xs bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-slate-200">
                    <Move className="h-3 w-3" />
                    <span className="hidden sm:inline">Drag to rotate • Scroll to zoom • Click layers</span>
                    <span className="sm:hidden">Drag • Zoom • Click</span>
                  </div>

                  {/* Layer info modal */}
                  {selectedLayer && (
                    <>
                      <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm z-20"
                        onClick={() => setSelectedLayer(null)}
                      />

                      <div className="absolute inset-0 flex items-center justify-center z-30 p-4 pointer-events-none">
                        <Card className="bg-white border-slate-200 shadow-2xl max-w-md w-full pointer-events-auto">
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-6 h-6 rounded-full ring-2 ring-slate-200"
                                  style={{ backgroundColor: activeLayer?.color }}
                                />
                                <h3 className="text-lg font-semibold text-slate-900">{activeLayer?.name}</h3>
                              </div>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-slate-500 hover:text-slate-700"
                                onClick={() => setSelectedLayer(null)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{activeLayer?.description}</p>
                            <div className="pt-3 border-t border-slate-200">
                              <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                                Thickness: {activeLayer?.thickness}
                              </Badge>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            </div>

            {/* Layer Legend */}
            <div className="lg:col-span-1">
              <Card className="bg-white border-slate-200 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Info className="h-5 w-5 text-slate-700" />
                    <h2 className="text-lg font-semibold text-slate-900">Pipe Layers</h2>
                  </div>
                  <div className="space-y-3">
                    {LAYERS.map((layer) => (
                      <button
                        key={layer.id}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all border ${
                          hoveredLayer === layer.id || selectedLayer === layer.id
                            ? "bg-slate-50 border-slate-300 shadow-sm"
                            : "bg-white border-slate-200 hover:bg-slate-50"
                        }`}
                        onClick={() => setSelectedLayer(layer.id)}
                      >
                        <div
                          className="w-4 h-4 rounded-full ring-1 ring-slate-300 flex-shrink-0"
                          style={{ backgroundColor: layer.color }}
                        />
                        <div className="text-left flex-1 min-w-0">
                          <div className="text-sm font-medium text-slate-900 truncate">{layer.name}</div>
                          <div className="text-xs text-slate-500">{layer.thickness}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
