import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import CollapsibleProjectHistory from "../../components/CollapsibleProjectHistory"

export default function History() {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">The History of The IT3 System</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Founder of IT3: Ken Tierling's Story</h2>
            <div className="relative h-64 md:h-80 mb-6 rounded-lg overflow-hidden bg-white">
              <Image
                src="/images/ken-tierling.png"
                alt="Ken Tierling with pipe rehabilitation equipment"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4">
              In the mid 60's Mr. Tierling served as the district manager for Magna Chem. Ltd. in Alberta, Canada which
              would dispense chemical solutions to try and neutralize pipeline corrosion issues. Realizing that pipe
              line corrosion was becoming difficult to manage and grave concern, Mr. Tierling coincidently met Bennant
              Fruck an engineer in the same field. Together they teamed and developed a relationship that would change
              the pipe line industry and thus the IT3 Multiwall Piping System was developed.
            </p>
            <p className="text-gray-600 mb-4">
              In 1971 the first IT3 System was installed and in 1973 Mr. Tierling relocated and incorporated in Conroe,
              Texas. Throughout the years the necessity in fabricating multiwall piping systems became evident in
              replacing existing pipelines beyond repair. Mr. Tierling's primary focus was designing and building
              multiwall pipe line systems that contain / eliminate corrosion complications that meet or exceed double
              wall containment requirements. His vison was that the IT3 System would not only be segmented to one
              industry but to be universal in all fields including oil, gas, chemical, mining, power utility and all
              municipal entities.
            </p>
            <p className="text-gray-600 mb-4">
              Mr. Tierling has successfully implemented the IT3 System in both onshore and offshore environments, across
              a wide range of fluid streams and multiphase systems. The IT3 System remains fully intact and operational
              to this day, demonstrating long-term performance in diverse climates throughout North and South America,
              as well as the Caribbean.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">About IT3 Multiwall System</h3>
            <p className="text-gray-600 mb-4">
              Since 1968, Mr. Tierling has been dedicated to the engineering, development, and installation of its
              patented multiwall system, IT3, which eliminates galvanic corrosion problems and meets the necessary
              requirements of the petroleum, mining, and power line industries regarding double-wall containment.
            </p>
            <p className="text-gray-600 mb-4">
              The IT3 Multiwall Piping System has been installed in numerous climates and terrains across the American
              continent, including the North Slope of Alaska, the streets of New York City, the Bahamas, California, and
              Peru, among others. The system operates with all types of fluids such as crude oil, oil, gas, water,
              slurry, and multi-phase systems with pressures ranging from vacuum to 3500 PSI. Additionally, the PPT IT3
              system has developed projects in areas where endangered species are found, thus ensuring the system's
              ability to protect the environment.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">The IT3 Multiwall System Technology</h3>
            <p className="text-gray-600 mb-4">
              PPT's design focused on the proposed fusion of three materials (IT3), sliding a corrosion-resistant lining
              inside a stronger metal tube; thus providing a material option that contains chemical and mechanical
              properties resistant to corrosion.
            </p>
            <p className="text-gray-600 mb-4">
              The important art and science of the procedure consists of controlling the flow characteristics and
              properties of a non-Newtonian fluid, the cement slurry, to ensure complete continuity of the stress
              transfer mechanism. Our patented techniques, based on decades of experience, are the only ones known to
              make a very high success rate.
            </p>
            <p className="text-gray-600 mb-4">
              PPT engineers determine the selection of the internal lining material (fiberglass reinforced plastic,
              polyethylene, polybutylene, ceramics, PVC, etc.). These are chosen for their high corrosion resistance and
              excellent flow characteristics. The coating must also adapt to present and future operational demands.
            </p>
            <p className="text-gray-600 mb-4">
              The cement slurry, its design and mixture is exclusive to the IT3 system. The cement injected into the
              annular space confines the lining, managing to join the lining with the outer tube.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Evolution of the IT3 System</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">1960s</div>
                <div className="flex-grow">
                  <p className="text-gray-600">
                    Mr. Tierling serves as district manager for Magna Chem. Ltd. in Alberta, Canada
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">Late 1960s</div>
                <div className="flex-grow">
                  <p className="text-gray-600">
                    Mr. Tierling meets engineer Bennant Fruck, beginning their collaboration
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">1968</div>
                <div className="flex-grow">
                  <p className="text-gray-600">
                    The team of Tierling & Fruck begin dedicated engineering, development, and installation of the
                    patented IT3 multiwall system
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">1971</div>
                <div className="flex-grow">
                  <p className="text-gray-600">First IT3 System successfully installed</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">1973</div>
                <div className="flex-grow">
                  <p className="text-gray-600">Ken Tierling relocates and incorporates in Conroe, Texas</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">1970s-80s</div>
                <div className="flex-grow">
                  <p className="text-gray-600">Expansion of IT3 System applications across multiple industries</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">1980s-90s</div>
                <div className="flex-grow">
                  <p className="text-gray-600">International expansion with installations in South America</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">2000s-10s</div>
                <div className="flex-grow">
                  <p className="text-gray-600">
                    Continued growth with major projects in Peru, Chile, and other locations
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-gray-800">Present</div>
                <div className="flex-grow">
                  <p className="text-gray-600">
                    IT3 Systems continue to operate successfully in diverse environments worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project History Table - Moved above Global Implementation */}
          <CollapsibleProjectHistory />

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Implementation</h3>
            <p className="text-gray-600 mb-4">
              Over the past 54+ years in the hydrocarbon industry (Oil & Gas), the IT3 Multiwall System has been
              effectively engineered and applied in over 65 projects throughout the Americas—including North, Central,
              and South America, as well as the Caribbean. To date, pipelines constructed using the IT3 System continue
              to operate with sustained integrity and no signs of degradation over time, enabling operations to be
              carried out with confidence, safety, and efficiency.
            </p>
            <p className="text-gray-600 mb-4">Notable installations include:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Prudhoe Bay, Alaska - North Slope (1982)</li>
              <li>New York City streets - East River and Astoria (1993-1997)</li>
              <li>Grand Bahamas in the Bahama Islands (1980)</li>
              <li>California - Multiple locations (1976-2005)</li>
              <li>Peru - Multiple coastal locations (2007-2013)</li>
              <li>Chile - Arica (2012)</li>
              <li>Texas - Multiple locations (1973-1984)</li>
              <li>Canada - Multiple provinces (1971-1975)</li>
            </ul>
            <p className="text-gray-600 mb-4">
              The IT3 System has been successfully implemented in various applications, handling fluid streams and
              multiphase systems with pressures ranging from vacuum to 3500 psi. This remarkable versatility has made it
              the preferred solution across multiple industries, including oil, gas, chemical, mining, power utility,
              and municipal infrastructure.
            </p>
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
