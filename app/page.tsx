"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

function ServicesGrid() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleService = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)

    if (expandedService === index) {
      // Closing animation
      setTimeout(() => {
        setExpandedService(null)
        setIsAnimating(false)
      }, 300)
    } else {
      setExpandedService(index)
      setTimeout(() => {
        setIsAnimating(false)
      }, 800)
    }
  }

  const services = [
    {
      title: "IT3 System Installation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description:
        "Our flagship service installs the proprietary IT3 multiwall piping system in new and existing pipelines, providing superior corrosion protection and structural integrity.",
      expandedContent: (index) => (
        <div className="mt-4 text-left overflow-visible">
          <h4 className="font-semibold mb-2 text-white animate-fadeInUp opacity-0">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-gray-300 animate-fadeInUp opacity-0 stagger-1">
            <li>Complete installation of the three-phase piping system</li>
            <li>Custom-engineered solutions for each pipeline</li>
            <li>Specialized cement grout formulation</li>
            <li>Comprehensive testing and quality assurance</li>
          </ul>
          <p className="text-gray-300 animate-fadeInUp opacity-0 stagger-2">
            Our IT3 System installation process begins with a thorough assessment of your existing pipeline. We then
            custom-design a solution using the appropriate liner material for your specific application. Our specialized
            equipment and trained technicians ensure precise installation, followed by comprehensive testing to verify
            system integrity.
          </p>
        </div>
      ),
    },
    {
      title: "In-Situ Pipe Rehabilitation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "Restore aging or damaged pipelines without excavation using our non-invasive rehabilitation techniques, minimizing disruption and costs.",
      expandedContent: (index) => (
        <div className="mt-4 text-left overflow-visible">
          <h4 className="font-semibold mb-2 text-white animate-fadeInUp opacity-0">
            Benefits of In-Situ Rehabilitation:
          </h4>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-gray-300 animate-fadeInUp opacity-0 stagger-1">
            <li>No excavation required - minimal surface disruption</li>
            <li>60-70% cost savings compared to full replacement</li>
            <li>Rapid installation - reduced downtime</li>
            <li>Extends pipeline life by 50+ years</li>
          </ul>
          <p className="text-gray-300 animate-fadeInUp opacity-0 stagger-2">
            Our in-situ rehabilitation process uses existing access points to install the IT3 System within your current
            pipeline. This trenchless approach is ideal for urban areas, environmentally sensitive zones, or any
            location where excavation would be costly or disruptive. The process restores structural integrity while
            providing superior corrosion protection.
          </p>
        </div>
      ),
    },
    {
      title: "Pipeline Assessment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      description:
        "Comprehensive inspection and evaluation services to identify issues, assess structural integrity, and recommend appropriate rehabilitation solutions.",
      expandedContent: (index) => (
        <div className="mt-4 text-left overflow-visible">
          <h4 className="font-semibold mb-2 text-white animate-fadeInUp opacity-0">Our Assessment Process:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-gray-300 animate-fadeInUp opacity-0 stagger-1">
            <li>Advanced camera inspection technology</li>
            <li>Structural integrity testing</li>
            <li>Corrosion and wear analysis</li>
            <li>Detailed reporting with rehabilitation recommendations</li>
          </ul>
          <p className="text-gray-300 animate-fadeInUp opacity-0 stagger-2">
            Our pipeline assessment service provides a comprehensive evaluation of your pipeline's condition. Using
            state-of-the-art inspection equipment, we identify areas of concern including corrosion, cracks, joint
            failures, and other structural issues. Our detailed reports include recommendations for the most
            cost-effective rehabilitation approach based on your specific situation.
          </p>
        </div>
      ),
    },
    {
      title: "Custom Engineering Solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description:
        "Tailored engineering services for complex pipeline challenges, including custom liner materials and specialized installation techniques.",
      expandedContent: (index) => (
        <div className="mt-4 text-left overflow-visible">
          <h4 className="font-semibold mb-2 text-white animate-fadeInUp opacity-0">Specialized Solutions For:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-gray-300 animate-fadeInUp opacity-0 stagger-1">
            <li>High-temperature applications (up to 350°F)</li>
            <li>Highly corrosive environments</li>
            <li>High-pressure systems (up to 3500 psi)</li>
            <li>Unusual pipe geometries and configurations</li>
          </ul>
          <p className="text-gray-300 animate-fadeInUp opacity-0 stagger-2">
            When standard solutions aren't sufficient, our engineering team develops custom approaches to address your
            unique pipeline challenges. We can select specialized liner materials, develop custom installation methods,
            and create innovative solutions for even the most complex pipeline systems. Our engineering expertise
            ensures that every project, no matter how challenging, receives an effective and long-lasting solution.
          </p>
        </div>
      ),
    },
    {
      title: "Environmental Sustainability",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      description:
        "Our eco-friendly solutions minimize environmental impact while maximizing pipeline efficiency and longevity.",
      expandedContent: (index) => (
        <div className="mt-4 text-left overflow-visible">
          <h4 className="font-semibold mb-2 text-white animate-fadeInUp opacity-0">Environmental Benefits:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-gray-300 animate-fadeInUp opacity-0 stagger-1">
            <li>Reduced carbon footprint compared to traditional replacement methods</li>
            <li>Minimal disruption to natural habitats and ecosystems</li>
            <li>Prevention of potential contamination from pipeline failures</li>
            <li>Energy-efficient installation and operation</li>
          </ul>
          <p className="text-gray-300 animate-fadeInUp opacity-0 stagger-2">
            Our commitment to environmental sustainability is at the core of everything we do. By rehabilitating
            existing pipelines rather than replacing them, we significantly reduce the environmental impact associated
            with manufacturing new pipes, transporting materials, and extensive excavation work. Our approach aligns
            with sustainable development goals and helps organizations meet their environmental responsibility targets.
          </p>
        </div>
      ),
    },
    {
      title: "Maintenance Programs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description:
        "Proactive maintenance plans to ensure long-term performance of your pipeline infrastructure, including regular inspections and preventative care.",
      expandedContent: (index) => (
        <div className="mt-4 text-left overflow-visible">
          <h4 className="font-semibold mb-2 text-white animate-fadeInUp opacity-0">Maintenance Program Components:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-3 text-gray-300 animate-fadeInUp opacity-0 stagger-1">
            <li>Scheduled inspection intervals</li>
            <li>Preventative maintenance procedures</li>
            <li>Early detection of potential issues</li>
            <li>Detailed documentation and reporting</li>
          </ul>
          <p className="text-gray-300 animate-fadeInUp opacity-0 stagger-2">
            Our maintenance programs are designed to maximize the lifespan of your pipeline infrastructure while
            minimizing unexpected failures. Through regular inspections and preventative maintenance, we identify and
            address potential issues before they become costly problems. Our customized maintenance plans are tailored
            to your specific pipeline system, operating conditions, and budget constraints, providing peace of mind and
            predictable maintenance costs.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {services.map((service, index) => {
        const isExpanded = expandedService === index

        return (
          <div
            key={index}
            className={`p-6 border-b border-gray-700 bg-black text-white transition-all duration-700 ease-in-out cursor-pointer rounded-lg shadow-md hover:shadow-lg ${
              isExpanded ? "shadow-xl border-yellow-400 z-10" : "transform scale-100 hover:scale-[1.01]"
            }`}
            onClick={() => toggleService(index)}
            style={{
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="flex items-center justify-between">
              <div
                className={`w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                  isExpanded ? "animate-scaleIn" : ""
                }`}
              >
                {service.icon}
              </div>
              <div className="transition-transform duration-500 ease-in-out">
                {isExpanded ? (
                  <ChevronUp className="h-6 w-6 text-yellow-400 transform transition-transform duration-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-white transform transition-transform duration-500" />
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>

            {/* Use height auto approach instead of max-height for smoother animation and to prevent content cutoff */}
            <div
              className={`transition-all duration-700 ease-in-out ${
                isExpanded ? "opacity-100 h-auto" : "opacity-0 h-0"
              }`}
              style={{
                transition: "opacity 0.7s ease-in-out, height 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                overflow: isExpanded ? "visible" : "hidden",
              }}
            >
              {service.expandedContent(index)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_0009.jpg-Z0sUEdebkowi840i4PNGwLvxCAL0te.jpeg"
          alt="Aerial view of construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="max-w-3xl text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-8">
              Industry Leading Pipe Rehabilitation and New Installation Services
            </h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/technology"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                View IT3 System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 w-full" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PPT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive pipe rehabilitation solutions using cutting-edge technology
            </p>
          </div>

          <ServicesGrid />
        </div>
      </section>

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
  )
}
