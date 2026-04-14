import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Founders() {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 pt-32">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Founders</h1>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              The Visionaries Behind Pipe-in-Pipe Technologies
            </h2>
            <p className="text-gray-600 mb-6">
              Pipe-in-Pipe Technologies was founded by industry experts with decades of combined experience in pipe
              rehabilitation, infrastructure management, and innovative engineering solutions. Our leadership team
              brings together diverse expertise to deliver cutting-edge pipe rehabilitation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=200&width=200" alt="John Smith" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
              <p className="text-blue-600 font-medium mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 text-center">
                With over 25 years of experience in civil engineering and infrastructure management, John has led
                numerous large-scale pipe rehabilitation projects across North America.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=200&width=200" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 text-center">
                Sarah is the technical innovator behind our IT3 System. With a Ph.D. in Materials Science, she has
                developed groundbreaking approaches to pipe rehabilitation technology.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2005, Pipe-in-Pipe Technologies began with a simple mission: to revolutionize how pipe
              rehabilitation is performed. Our founders recognized the need for less invasive, more efficient solutions
              to aging infrastructure problems.
            </p>
            <p>
              After years of research and development, we introduced our proprietary IT3 System, which has since become
              the industry standard for non-invasive pipe rehabilitation. Our commitment to innovation continues to
              drive us forward as we expand our services and refine our technologies.
            </p>
            <p>
              Today, Pipe-in-Pipe Technologies serves clients across the United States, providing state-of-the-art
              solutions for commercial, municipal, and residential pipe rehabilitation projects. Our team has grown to
              include experts in engineering, project management, and customer service, all dedicated to delivering
              exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
