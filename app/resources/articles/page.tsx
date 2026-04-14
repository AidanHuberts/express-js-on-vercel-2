import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Articles() {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Articles of Reference</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Publications</h2>
            <p className="text-gray-600 mb-6">
              Below you'll find a collection of articles, papers, and publications that reference the IT3 System and its
              applications in the pipeline industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Advancements in Pipeline Rehabilitation Technologies
                </h3>
                <p className="text-gray-600 mb-4">Journal of Pipeline Engineering, 2019</p>
                <p className="text-gray-600">
                  This comprehensive review examines various pipeline rehabilitation technologies, with a special focus
                  on the IT3 System's unique three-phase design and its applications in challenging environments.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Technical Paper
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    2019
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Case Study: IT3 System Implementation in Offshore Environments
                </h3>
                <p className="text-gray-600 mb-4">Offshore Technology Conference, 2018</p>
                <p className="text-gray-600">
                  A detailed case study of the IT3 System's implementation in offshore petroleum product pipelines,
                  highlighting the system's corrosion resistance and structural integrity benefits.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Case Study
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    2018
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Corrosion Prevention in Pipeline Systems: A Comparative Analysis
                </h3>
                <p className="text-gray-600 mb-4">NACE International Corrosion Conference, 2017</p>
                <p className="text-gray-600">
                  This paper compares various corrosion prevention methods for pipeline systems, with the IT3 System
                  demonstrating superior performance in aggressive environments.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Research Paper
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    2017
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  The Evolution of Multiwall Pipe Systems in Oil & Gas Applications
                </h3>
                <p className="text-gray-600 mb-4">Pipeline & Gas Journal, 2020</p>
                <p className="text-gray-600">
                  A historical overview of multiwall pipe systems, tracing the development from early designs to modern
                  implementations like the IT3 System, with emphasis on technological advancements.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Industry Review
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    2020
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Resources</h2>
            <p className="text-gray-600 mb-6">
              Additional technical resources and specifications related to the IT3 System and its applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">IT3 System Technical Specifications</h3>
                <p className="text-gray-600 text-sm">
                  Detailed technical specifications and performance parameters of the IT3 System.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Installation Guidelines</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive guidelines for the proper installation of the IT3 System in various environments.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Material Compatibility Chart</h3>
                <p className="text-gray-600 text-sm">
                  Reference chart for liner material compatibility with different fluid types and operating conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
