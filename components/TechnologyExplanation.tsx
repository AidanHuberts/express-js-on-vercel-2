"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Section {
  title: string
  content: string
}

const TechnologyExplanation: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections: Section[] = [
    {
      title: "Step 1: Inspection",
      content:
        "Our team conducts a thorough inspection of the existing pipe using advanced camera technology. This allows us to assess the condition of the pipe and determine the best course of action.",
    },
    {
      title: "Step 2: Cleaning",
      content:
        "We clean the existing pipe to remove any debris, scale, or obstructions. This ensures a clean surface for the new lining to adhere to.",
    },
    {
      title: "Step 3: Lining Preparation",
      content:
        "A custom-fit liner is prepared based on the measurements and condition of your pipe. This liner is impregnated with a special resin.",
    },
    {
      title: "Step 4: Liner Insertion",
      content:
        "The prepared liner is carefully inserted into the existing pipe using specialized equipment. It's positioned precisely to cover the entire length of the pipe.",
    },
    {
      title: "Step 5: Curing",
      content:
        "Once in place, the liner is cured using heat or UV light. This process hardens the resin, creating a new, seamless pipe within the old one.",
    },
    {
      title: "Step 6: Final Inspection",
      content:
        "After curing, we conduct a final inspection to ensure the new lining is properly installed and functioning correctly. Your pipe is now rehabilitated and ready for many more years of service!",
    },
  ]

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.title} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center"
            onClick={() => toggleSection(section.title)}
          >
            <span className="font-semibold">{section.title}</span>
            {openSection === section.title ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openSection === section.title && (
            <div className="px-4 py-2 bg-white">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TechnologyExplanation
