import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import PipeModel3D from "../../components/PipeModel3D"

export default function Technology() {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">IT3 System Technology</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is the IT3 System?</h2>
            <p className="text-gray-600 mb-4">
              IT3 refers to Internal Tube 3-Phase in a multiwall piping configuration which consists of 3 components: a
              smaller plastic pipe (liner) inserted into a larger diameter steel or other hard material (casing) with a
              cement grout injected between the OD of the liner and the ID of the casing (annulus). The primary
              objective in this superior piping application is the implementation in virtually all pipe line
              configurations where reducing, neutralizing and eliminating internal corrosion is imminent.
            </p>
            <p className="text-gray-600">
              The trade name IT3 short for Internal Tube 3-Phase reflects the three distinct material layers integrated
              into its design. This innovative multiwall piping system, originally patented by Ken Tierling over 50
              years ago, demonstrates the advanced approach to manufacturing and installation techniques for demanding
              industrial environments.
            </p>
          </div>
          <PipeModel3D />
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compressed Liner Classification</h2>
            <p className="text-gray-600 mb-4">
              The IT3 System design is based on the concept that the liner is not directly bonded/fixed to the ID of the
              steel casing through deformation which does not affect its natural state. Through this unique concept the
              design is classified as a compressed liner since the plastic to steel conformity is not derived from
              altering the polymer component.
            </p>
            <p className="text-gray-600 mb-4">
              In relation to the plastic inner pipe, the design is classified as a compressed liner since the plastic to
              steel connection is not derived through the deformation of the polymeric component. Basically, the design
              inserts an incompressible material at the interface thereby totally limiting radial strain of the inner
              polymer pipe. As a result, the cement annular transfers the majority of stress to the outer casing and
              perfectly anchors the inner pipe.
            </p>
            <p className="text-gray-600">
              Due to the extremely low stress in the tensile mode, actuation of microcracking in the plastic is entirely
              avoided. Thus, the IT3 System enables numerous polymeric materials to be successfully implemented without
              jeopardizing their structural integrity. Furthermore, polyethylenes even in the presence of surface-active
              agents, elude all possibility of the familiar stress cracking corrosion failure mode occurring due to the
              absence of any significant degree of stress.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Crucial Component: Neat Cement Grout</h2>
            <p className="text-gray-600 mb-4">
              The most crucial and fundamental component is the specific neat cement grout formula that once injected
              and cured in the annular space it combines the two conduits into one multiwall pipe. This makes the IT3
              System the most advantageous solution that meets or exceeds double wall containment requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Properties of the Cement Grout</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • High modulus of elasticity in compression (2.0-3.0x10<sup>6</sup> psi)
                  </li>
                  <li>• High compressive strength (8,000-10,000 psi)</li>
                  <li>• Low shrinkage value</li>
                  <li>• Hydraulic set - external heat is not required to cure</li>
                  <li>• Similar thermal expansion to steel</li>
                  <li>• Optimum flow properties</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Functions of the Cement Grout</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Combines the two conduits into a unified multiwall pipe</li>
                  <li>• Meets or exceeds double-wall containment standards</li>
                  <li>• Provides hoop strength transmission for structural integrity</li>
                  <li>• Serves as a secondary corrosion barrier</li>
                  <li>• Offers negative buoyancy, enhancing stability in submerged environments</li>
                  <li>• Acts as a thermal insulator</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Example</h2>
            <p className="text-gray-600 mb-4">
              By intentionally disregarding the compressive effect of the cement on the inner liner during its set, a
              specific instance using a P.V.C. liner illustrates the magnitude of stress to be projected in the liner
              and steel layers:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Example Parameters</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Internal pressure = 2,200 psi</li>
                <li>• Steel O.D. = 6.625"</li>
                <li>• P.V.C. O.D. = 4.5"</li>
                <li>• Steel Thickness = .312"</li>
                <li>• P.V.C. thickness = .337"</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Results</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tangential Stress in P.V.C. = 160 psi</li>
                <li>• Plastic Limit of P.V.C. = 2600 psi</li>
                <li>• Tangential Stress in Steel = 11,475 psi</li>
                <li>• Tangential Stress in Steel without IT3 Concept = 21,150 psi</li>
                <li>• % Reduction in Stress imposed on Steel = 46%</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manufacturing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Factory Manufacturing</h3>
                <p className="text-gray-600">
                  The multiwall pipe can be manufactured in double-random lengths in a plant, ensuring precise quality
                  control and consistent production standards.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">In-Situ Installation</h3>
                <p className="text-gray-600">
                  Alternatively, it can be installed in-situ, using existing pipelines as the outer containment layer.
                  This proprietary process revitalizes existing pipelines, restoring them to optimal performance and
                  operating standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 w-full" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a href="tel:936-242-3232" className="flex items-center justify-center group">
                <Phone className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
                <div>
                  <div className="text-sm text-white">Phone</div>
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">
                    936-242-3232
                  </div>
                </div>
              </a>
              <a href="mailto:info@pipeinpipe.com" className="flex items-center justify-center group">
                <Mail className="text-yellow-400 h-8 w-8 mr-4 group-hover:text-yellow-500 transition-colors duration-200" />
                <div>
                  <div className="text-sm text-white">Email</div>
                  <div className="text-lg font-semibold text-white group-hover:text-yellow-500 transition-colors duration-200">
                    info@pipeinpipe.com
                  </div>
                </div>
              </a>
              <div className="flex items-center justify-center">
                <MapPin className="text-yellow-400 h-8 w-8 mr-4" />
                <div>
                  <div className="text-sm text-white">Located In</div>
                  <div className="text-lg font-semibold text-white">Spring, Texas</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
