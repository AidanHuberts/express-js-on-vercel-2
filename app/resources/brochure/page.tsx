"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Download, Maximize2, Minimize2 } from "lucide-react"
import Logo from "../../../components/Logo"
import Image from "next/image"
import "./brochure.css"

// Simple brochure implementation without external libraries
export default function Brochure() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 10
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage(currentPage + 1)
      setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition duration
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage(currentPage - 1)
      setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition duration
    }
  }

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentPage(page)
      setTimeout(() => setIsTransitioning(false), 500) // Match this with CSS transition duration
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Page styles
  const pageStyle = {
    backgroundColor: "white",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    padding: "20px",
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen w-full bg-gray-100 py-12 pt-32 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading brochure...</p>
        </div>
      </div>
    )
  }

  // Array of page components
  const pages = [
    // Cover Page
    <div key="cover" className="page cover-page" style={pageStyle}>
      <div className="h-full flex flex-col justify-between">
        <div className="flex-grow flex flex-col items-center justify-center">
          <Logo className="w-32 h-32" />
          <h2 className="text-4xl font-bold mt-6 text-center">PIPEinPIPE</h2>
          <h3 className="text-2xl font-semibold text-center">TECHNOLOGIES INC</h3>
          <div className="mt-8 w-16 h-1 bg-yellow-500"></div>
          <p className="mt-8 text-xl text-center text-gray-700">Company Brochure</p>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>© {new Date().getFullYear()} Pipe-in-Pipe Technologies Inc.</p>
        </div>
      </div>
    </div>,

    // Page 1
    <div key="page1" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Introduction</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            With its double wall containment, the IT3 multiwall systems technology meets or exceeds integrity management
            by greatly enhancing corrosion resistance commonly inherent to the industry. IT3 technology warrants
            consecutive, dependable and safe distribution of oil, gas, petrochemical, slurry and water lines eliminating
            material loss and the risk of potential threats and damages by third parties.
          </p>
          <p>
            Pipe in Pipe Technologies (PPT) focuses on the composition of three components (IT3) which pertains to the
            insertion of a corrosion resistant liner into a steel pipe and grouting the anulus, as a result provides a
            superior alternative product that strengthens its resistance to corrosion, temperature fluctuations and
            external damage.
          </p>
          <p>
            Dependent on the transport fluid, flow characteristics and regulated operating requirements the inner liner
            may consist of FRP, PVC, Polyethylene, Polybutylene, etc.
          </p>
        </div>
        <div className="mt-6 relative h-40 w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/it3-cross-section-diagram-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpg"
            alt="IT3 System Cross-Section"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">1</div>
      </div>
    </div>,

    // Page 2
    <div key="page2" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">System Advantages</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The IT3 system is the most advantageous for the recovery of existing pipe lines. When abnormalities are
            detected and jeopardize the integrity of the pipeline, failure becomes a critical concern. PPT can use the
            existing steel pipe as a conduit for the installation of the liner, thus rejuvenating the impact resistance
            and hoop strength.
          </p>
          <p>The IT3 system is exceptional in areas where access is restricted:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The entire line does not need to be exposed, considerably reducing excavation costs.</li>
            <li>Old pipe lines can be restored to their original pressure specifications.</li>
            <li>
              A liner maybe inserted in great lengths, dependent on work space and fittings on the existing steel pipe
              line.
            </li>
            <li>Adaptations can be made to existing fittings or replaced.</li>
          </ul>
        </div>
        <div className="mt-6 relative h-40 w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pipeline-rehabilitation-process-Xc9Xc9Xc9Xc9Xc9Xc9Xc9Xc9Xc9Xc9.jpg"
            alt="Pipeline Rehabilitation Process"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">2</div>
      </div>
    </div>,

    // Page 3
    <div key="page3" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h2>
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>A multiwall single pipe that meets or exceeds multilayer requirements.</li>
            <li>High compression resistance.</li>
            <li>Transfer of Hoop stress.</li>
            <li>Maintains the steel like thermal expansion.</li>
            <li>High pH in the grout gives a second corrosion defense inhibitor on the ID of the steel.</li>
            <li>Produces an insulation factor.</li>
            <li>Negative buoyancy.</li>
          </ul>
          <p className="mt-4">
            The exact blend of ingredients in the cement grout makes the IT3 system unique and inferior. It not only
            allows for the grout to be injected into the anulus, but once it cures between the OD of the liner and the
            ID of the steel creates the following:
          </p>
        </div>
        <div className="mt-6 relative h-40 w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cement-grout-injection-process-Qb8Qb8Qb8Qb8Qb8Qb8Qb8Qb8Qb8Qb8.jpg"
            alt="Cement Grout Injection Process"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">3</div>
      </div>
    </div>,

    // Page 4
    <div key="page4" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">New Pipeline Applications</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The IT3 system is an excellent choice for new pipelines due to its high impact strength and corrosion
            resistance, thus creating long-term life expectancy, lower maintenance requirements and considerable
            savings. Classification of 2 risk levels will determine the specific requirements, all pipe sections and
            fittings maybe prefabricated prior to the initiation of the project.
          </p>
          <p>Special pressure applications from vacuum to 3,500 psi. can be designed and implemented.</p>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-gray-800 mb-2">Did You Know?</h4>
            <p className="text-sm">
              The IT3 System can handle pressures from vacuum to 3,500 psi, making it suitable for a wide range of
              industrial applications from low-pressure drainage to high-pressure transport lines.
            </p>
          </div>
        </div>
        <div className="mt-6 relative h-40 w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-pipeline-installation-Pa7Pa7Pa7Pa7Pa7Pa7Pa7Pa7Pa7Pa7.jpg"
            alt="New Pipeline Installation"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">4</div>
      </div>
    </div>,

    // Page 5
    <div key="page5" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Project History</h2>
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2007</p>
              <p>Consorcio Terminales – Offshore Clean Petroleum Products / White Pipelines. 6 Terminals.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2009</p>
              <p>Consorcio Terminales - Offshore Dirty Petroleum Products / Black Pipelines. 6 Terminals.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2010</p>
              <p>Consorcio Terminales Chimbote – New Pipeline.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2011</p>
              <p>Vopak - 16" discharge pipeline, Clean Petroleum Products.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2012</p>
              <p>YPFB Bolivia/Chile product line, Clean Petroleum Products.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">5</div>
      </div>
    </div>,

    // Page 6
    <div key="page6" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Project History (Continued)</h2>
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2013</p>
              <p>Consorcio Terminales Salaverry – New Pipeline.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2014</p>
              <p>Consorcio Terminales Eten – Relocate onshore valves, extend IT3 system 100 meters.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2016</p>
              <p>Petro Peru Mollendo – Eliminate onshore flanges, extend IT3 system to the terminal 250 meters.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-semibold">2018</p>
              <p>Southern Copper Illo – 2 New IT3 Pipelines, constructed and launched simultaneously.</p>
            </div>
          </div>
        </div>
        <div className="mt-6 relative h-40 w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/offshore-pipeline-installation-Ob6Ob6Ob6Ob6Ob6Ob6Ob6Ob6Ob6Ob6.jpg"
            alt="Offshore Pipeline Installation"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">6</div>
      </div>
    </div>,

    // Page 7
    <div key="page7" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Company History</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            In 1968 the late Ken Tierling designed and installed the first IT3 multiwall pipeline system in the North
            Slope of Alaska. Since then, Ken has installed the IT3 system in various terrains and subsea in North
            America, South America, Caribbean and New York City.
          </p>
          <p>
            In 2007 Brian Ohlendorff began his employment with Ken and is the only individual to obtain the knowledge,
            skills, technique and implementation of the IT3 multiwall pipeline system through the direct training and
            supervision of Ken.
          </p>
          <div className="mt-6 relative h-40 w-full">
            <Image src="/images/ken-tierling.png" alt="Ken Tierling" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">7</div>
      </div>
    </div>,

    // Page 8
    <div key="page8" className="page" style={pageStyle}>
      <div className="h-full p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            With over 25 years combined experience PPT has a team dedicated to be the exclusive company and industry
            leader in multiwall pipelines with the proven IT3 system. From in-situ repairs to new installations the IT3
            system has saved the industry considerably on short-term and long-term costs based on stability and
            maintenance free operation.
          </p>
        </div>
        <div className="mt-8 bg-gray-800 text-white p-6 rounded-lg">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-bold">PIPEinPIPE</h2>
            <h3 className="text-lg font-semibold">TECHNOLOGIES INC</h3>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <Phone className="text-yellow-400 h-5 w-5 mr-2" />
              <span>+1-936-242-3232</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-yellow-400 h-5 w-5 mr-2" />
              <span>brian.ohlendorff@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-yellow-400 h-5 w-5 mr-2" />
              <span>Spring, Texas</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-sm text-gray-400">8</div>
      </div>
    </div>,

    // Back Cover
    <div key="backcover" className="page back-cover" style={pageStyle}>
      <div className="h-full flex flex-col justify-center items-center">
        <Logo className="w-24 h-24" />
        <h2 className="text-3xl font-bold mt-6">Thank You</h2>
        <p className="mt-4 text-gray-600 text-center max-w-xs">
          For more information about our services and the IT3 System, please contact us.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="/brochure-download.pdf"
            download
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>,
  ]

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className={`w-full px-4 ${isFullscreen ? "fixed inset-0 bg-gray-900 z-50 pt-4" : ""}`}>
        <div className={`${isFullscreen ? "max-w-6xl mx-auto h-full" : "max-w-7xl mx-auto"}`}>
          {!isFullscreen && (
            <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
          )}

          {!isFullscreen && <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Company Brochure</h1>}

          <div
            className={`${isFullscreen ? "bg-gray-900 h-full flex flex-col" : "bg-white rounded-lg shadow-xl p-4"} max-w-6xl mx-auto mb-12`}
          >
            {/* Brochure Navigation */}
            <div className={`flex justify-between items-center mb-6 ${isFullscreen ? "text-white" : ""}`}>
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isTransitioning}
                className={`flex items-center ${
                  currentPage === 0 || isTransitioning
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-yellow-500 hover:text-yellow-600"
                }`}
              >
                <ChevronLeft className="mr-1" /> Previous
              </button>
              <div className={`${isFullscreen ? "text-white" : "text-gray-700"}`}>
                Page {currentPage + 1} of {totalPages}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1 || isTransitioning}
                  className={`flex items-center ${
                    currentPage === totalPages - 1 || isTransitioning
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-yellow-500 hover:text-yellow-600"
                  }`}
                >
                  Next <ChevronRight className="ml-1" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-yellow-500 hover:text-yellow-600"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
              </div>
            </div>

            {/* Page Thumbnails */}
            <div className="flex justify-center space-x-2 mb-6 overflow-x-auto py-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-8 h-12 border flex-shrink-0 ${
                    currentPage === i ? "border-yellow-500 bg-yellow-50" : "border-gray-300 hover:border-yellow-300"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                  disabled={isTransitioning}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Brochure Content */}
            <div className={`flex justify-center ${isFullscreen ? "flex-grow" : ""}`}>
              <div
                className={`relative ${
                  isFullscreen ? "h-full flex items-center justify-center" : "w-full max-w-3xl mx-auto"
                }`}
              >
                {/* Current page with page turn effect */}
                <div
                  className={`w-full transition-transform duration-500 ease-in-out ${
                    isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                  style={{
                    aspectRatio: "3/4",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {pages[currentPage]}
                </div>

                {/* Page turn controls - click areas */}
                <div
                  className="absolute top-0 left-0 w-1/4 h-full cursor-pointer"
                  onClick={prevPage}
                  style={{ display: currentPage === 0 || isTransitioning ? "none" : "block" }}
                ></div>
                <div
                  className="absolute top-0 right-0 w-1/4 h-full cursor-pointer"
                  onClick={nextPage}
                  style={{ display: currentPage === totalPages - 1 || isTransitioning ? "none" : "block" }}
                ></div>
              </div>
            </div>

            {/* Instructions */}
            {!isFullscreen && (
              <div className="mt-6 text-center text-gray-500 text-sm">
                <p>Click on the left or right side of the page to navigate, or use the buttons above.</p>
                <p className="mt-1">For the best experience, click the fullscreen button in the top right.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
