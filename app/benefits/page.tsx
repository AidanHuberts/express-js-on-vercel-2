import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  DollarSign,
  Leaf,
  PenToolIcon as Tool,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      title: "Cost-Effectiveness",
      description:
        "In-situ installation typically costs 60% less than full pipeline replacement. The IT3 System reduces downtime and labor costs, particularly in hard-to-access areas or locations with limited rights-of-way.",
      icon: <DollarSign className="h-12 w-12 text-yellow-400" />,
    },
    {
      title: "Environmental Protection",
      description:
        "The IT3 System contributes to sustainability by extending pipeline life, reducing the need for replacements, and minimizing disruption to natural and urban environments.",
      icon: <Leaf className="h-12 w-12 text-yellow-400" />,
    },
    {
      title: "Versatile Applications",
      description:
        "The system can be installed in steel, reinforced concrete cylinders, vitrified clay, or concrete pipes. It's ideal for projects in environmentally sensitive zones or densely populated areas where frequent repairs are impractical.",
      icon: <Tool className="h-12 w-12 text-yellow-400" />,
    },
    {
      title: "Extended Lifespan",
      description:
        "By addressing internal and external corrosion, chemical erosion, and deterioration, the IT3 System combines advanced materials and robust design to achieve superior performance and enhanced durability.",
      icon: <Shield className="h-12 w-12 text-yellow-400" />,
    },
    {
      title: "Reduced Maintenance",
      description:
        "The multiwall design significantly reduces maintenance requirements compared to traditional piping systems, saving time and resources over the lifetime of the installation.",
      icon: <Award className="h-12 w-12 text-yellow-400" />,
    },
    {
      title: "Enhanced Performance for Submarine Pipelines",
      description:
        "The internal grout layer provides negative buoyancy, reducing the risk of floating and enhancing stability in submerged conditions, making it ideal for underwater applications.",
      icon: <CheckCircle className="h-12 w-12 text-yellow-400" />,
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Benefits of the IT3 System</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose The IT3 Multiwall Pipe Rehabilitation Solution?
            </h2>
            <p className="text-gray-600">
              The IT3 Multiwall Piping System offers numerous advantages, addressing challenges with internal corrosion,
              general pipeline degradation, and overall reduction in pipeline performance and reliability. It is a
              versatile, cost-effective, and environmentally friendly solution for various industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wide Compatibility with Plastic Liners</h2>
            <p className="text-gray-600 mb-6">
              The IT3 System supports an extensive range of liner materials, allowing the system to be tailored to
              specific operational and environmental demands:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Fiberglass</h3>
                <p className="text-gray-600">Ideal for high-pressure applications and corrosive environments</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Polyethylene (PE/HDPE)</h3>
                <p className="text-gray-600">Excellent chemical resistance and flexibility</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Polyvinyl Chloride (PVC)</h3>
                <p className="text-gray-600">Cost-effective with good chemical resistance</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Polybutylene (PB)</h3>
                <p className="text-gray-600">Excellent for hot water applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">High-Temperature Plastics</h3>
                <p className="text-gray-600">For applications with temperatures up to 350°F</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Acid-Resistant Plastics</h3>
                <p className="text-gray-600">For highly corrosive chemical environments</p>
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
