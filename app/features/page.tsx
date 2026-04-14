import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Settings, Layers, Zap, Wrench, Droplets, Gauge, Phone, Mail, MapPin } from "lucide-react"

export default function Features() {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">IT3 System Features</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features of the IT3 System</h2>
            <p className="text-gray-600 mb-6">
              The IT3 Multiwall Pipe System is built on a design principle that ensures the plastic carrier pipe is
              separated from the steel containment pipe, delivering several key benefits and features that make it the
              ideal solution for challenging pipeline environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg flex">
                <Layers className="h-12 w-12 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Three-Phase Design</h3>
                  <p className="text-gray-600">
                    The IT3 System features three distinct layers: an inner plastic liner, an outer steel or hard
                    material casing, and a cement grout filling the annular space between them, creating a robust
                    multiwall piping solution.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex">
                <Settings className="h-12 w-12 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Flange or Flange-Free Installation</h3>
                  <p className="text-gray-600">
                    The system eliminates the need for numerous flanges, simplifying installation and reducing potential
                    leak points. This is dependent on valves, flow monitors, and other components.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex">
                <Zap className="h-12 w-12 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Controlled Stress State</h3>
                  <p className="text-gray-600">
                    The plastic liner remains within its elastic deformation range, extending its lifespan and
                    preventing stress-related failures common in other piping systems.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex">
                <Wrench className="h-12 w-12 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Liner Material Flexibility</h3>
                  <p className="text-gray-600">
                    Any type of plastic pipe can be used as the liner, offering adaptability for different applications
                    and fluid types, from corrosive chemicals to high-temperature streams.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex">
                <Droplets className="h-12 w-12 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Corrosion Protection</h3>
                  <p className="text-gray-600">
                    The high pH of the cement grout passivates steel and acts as an inhibitor between the OD of the
                    inner liner and ID of the outer steel casing, providing a secondary corrosion defense system.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex">
                <Gauge className="h-12 w-12 text-yellow-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">High-Performance Under Pressure</h3>
                  <p className="text-gray-600">
                    The IT3 System can handle pressures from vacuum to 3500 psi, making it suitable for a wide range of
                    industrial applications from low-pressure drainage to high-pressure transport lines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Features</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Collar Coupling</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4">
                    New IT piping systems incorporate a patented coupling device, the Collar, enabling simultaneous
                    welding of the steel and fiberglass components for a robust joint. This innovative coupling
                    technology ensures:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Leak-free connections between pipe sections</li>
                    <li>Maintenance of the three-phase integrity throughout the pipeline</li>
                    <li>Simplified installation and joining process</li>
                    <li>Enhanced structural integrity at connection points</li>
                  </ul>
                </div>
                <div className="relative h-48 md:h-auto rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Collar Coupling Technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">In-Situ Rejuvenation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative h-48 md:h-auto rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="In-Situ Rejuvenation Process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-4">
                    This proprietary process revitalizes existing pipelines, restoring them to optimal performance and
                    operating standards through the IT3 multiwall system. The in-situ rejuvenation process offers:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li>Minimal disruption to surrounding infrastructure</li>
                    <li>Significant cost savings compared to full replacement</li>
                    <li>Extended pipeline life by decades</li>
                    <li>Improved flow characteristics and reduced maintenance</li>
                    <li>Ability to address localized corrosion issues effectively</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Centralization Technology</h3>
              <p className="text-gray-600 mb-4">
                The IT3 System features a unique approach to liner centralization within the outer casing:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-600 mb-4">
                  Without the use of any centralizers, the plastic liner surrounded by cement slurry with a specific
                  gravity of 1.8 will rise to the top/12:00 position causing a buoyancy effect. This is exceptionally
                  beneficial in rejuvenation applications since the majority of localized corrosion occurs at the bottom
                  of the pipeline.
                </p>
                <p className="text-gray-600">
                  Even with varying grout thickness (e.g., 0.3" at the top and 1.2" at the bottom), stress on the
                  plastic liner varies insignificantly. With most standard in-situ rejuvenations, it is preferred to
                  avoid the use of centralizers, though in other intricate situations, centralizing techniques have been
                  and will be used.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applications</h2>
            <p className="text-gray-600 mb-6">
              The main target with the majority of multilayer processes is to combine various properties that are
              difficult, if not impossible to achieve in a single material. The IT3 System is suitable for a wide range
              of applications:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Oil & Gas Pipelines</h3>
                <p className="text-gray-600">
                  For crude oil, refined products, and natural gas transport with corrosion protection
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Chemical Processing</h3>
                <p className="text-gray-600">For handling corrosive chemicals and preventing contamination</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Mining Operations</h3>
                <p className="text-gray-600">For slurry transport and acid-resistant applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Municipal Infrastructure</h3>
                <p className="text-gray-600">For water and wastewater systems with extended service life</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Submarine Pipelines</h3>
                <p className="text-gray-600">With enhanced stability and corrosion resistance in marine environments</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Power Utilities</h3>
                <p className="text-gray-600">For cooling water systems and process piping with thermal insulation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Discover the IT3 System Advantage</h2>
          <p className="text-center mb-8">
            Contact our team to learn more about how the IT3 System's features can address your specific pipeline
            challenges.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/technology"
              className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore the Technology
            </Link>
            <Link
              href="/benefits"
              className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              See the Benefits
            </Link>
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
