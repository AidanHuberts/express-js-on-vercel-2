"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, X, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchResult {
  title: string
  description: string
  path: string
  keywords: string[]
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Search data - pages and their associated keywords
  const searchData: SearchResult[] = [
    {
      title: "Home",
      description: "Main page with services and contact information",
      path: "/",
      keywords: [
        "home",
        "main",
        "landing",
        "start",
        "contact",
        "get in touch",
        "services",
        "pipe rehabilitation",
        "pipe-in-pipe",
        "technologies",
      ],
    },
    {
      title: "IT3 System Benefits",
      description: "Advantages of using the IT3 System for pipe rehabilitation",
      path: "/benefits",
      keywords: [
        "benefits",
        "advantages",
        "cost",
        "savings",
        "environment",
        "protection",
        "lifespan",
        "maintenance",
        "submarine",
        "liner material",
        "compatibility",
        "cost-effectiveness",
      ],
    },
    {
      title: "IT3 System Technology",
      description: "Technical details of the IT3 System and how it works",
      path: "/technology",
      keywords: [
        "technology",
        "system",
        "it3",
        "internal tube",
        "3-phase",
        "multiwall",
        "compressed liner",
        "cement grout",
        "technical",
        "manufacturing",
        "stress",
        "pvc",
        "steel",
        "how it works",
      ],
    },
    {
      title: "IT3 System Features",
      description: "Specific features and capabilities of the IT3 System",
      path: "/features",
      keywords: [
        "features",
        "capabilities",
        "collar coupling",
        "in-situ",
        "rejuvenation",
        "centralization",
        "applications",
        "flange",
        "stress state",
        "corrosion protection",
        "three-phase design",
      ],
    },
    {
      title: "IT3 History",
      description: "The history of the IT3 System and its development",
      path: "/history",
      keywords: [
        "history",
        "story",
        "past",
        "project history",
        "ken tierling",
        "founder",
        "timeline",
        "evolution",
        "unisert",
        "development",
        "origins",
      ],
    },
    {
      title: "About Us",
      description: "Information about Pipe-in-Pipe Technologies and our team",
      path: "/about",
      keywords: [
        "about",
        "company",
        "mission",
        "vision",
        "values",
        "team",
        "leadership",
        "brian ohlendorff",
        "ceo",
        "facts",
        "about us",
      ],
    },
    {
      title: "Founders",
      description: "Information about the founders of Pipe-in-Pipe Technologies",
      path: "/founders",
      keywords: ["founders", "leadership", "visionaries", "john smith", "sarah johnson"],
    },
  ]

  // Focus the input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
      setSearchTerm("")
      setResults([])
      setShowResults(false)
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Handle clicks outside the results dropdown to close it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Filter results as user types
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([])
      setShowResults(false)
      return
    }

    const term = searchTerm.toLowerCase()

    // First, check for exact matches in titles
    let filteredResults = searchData.filter((item) => item.title.toLowerCase().includes(term))

    // Then, check for matches in keywords if we don't have enough results
    if (filteredResults.length < 5) {
      const keywordMatches = searchData.filter(
        (item) =>
          !filteredResults.includes(item) && // Avoid duplicates
          item.keywords.some((keyword) => keyword.includes(term)),
      )

      filteredResults = [...filteredResults, ...keywordMatches].slice(0, 7) // Show more results
    }

    setResults(filteredResults)
    setShowResults(filteredResults.length > 0)
  }, [searchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchTerm.trim()) return

    // If we have results, navigate to the first one
    if (results.length > 0) {
      navigateToResult(results[0].path)
    } else {
      // Fallback to home page if no results
      navigateToResult("/")
    }
  }

  const navigateToResult = (path: string) => {
    // Clear any existing highlights first
    const existingHighlights = document.querySelectorAll("mark.search-highlight")
    if (existingHighlights.length > 0) {
      existingHighlights.forEach((el) => {
        const parent = el.parentNode
        if (parent) {
          parent.replaceChild(document.createTextNode(el.textContent || ""), el)
          parent.normalize()
        }
      })
    }

    // Store the search term in localStorage for highlighting
    if (searchTerm.trim()) {
      localStorage.setItem("searchTerm", searchTerm.trim())
    }

    router.push(`${path}?search=${encodeURIComponent(searchTerm.trim())}`)
    onClose()
  }

  const handleResultClick = (path: string) => {
    navigateToResult(path)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-visible">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Search</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative">
          <form onSubmit={handleSearch} className="p-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => searchTerm.trim() && setShowResults(true)}
                placeholder="Search for IT3 System, benefits, technology, features..."
                className="w-full px-3 py-2 focus:outline-none"
              />
            </div>
          </form>

          {/* Search Results Dropdown - Fixed positioning */}
          {showResults && (
            <div
              ref={resultsRef}
              className="absolute left-0 right-0 z-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-auto"
              style={{
                top: "100%",
                maxHeight: "60vh",
                overflowY: "auto",
                marginTop: "0",
                zIndex: 9999,
              }}
            >
              {results.map((result, index) => (
                <div
                  key={index}
                  className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleResultClick(result.path)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{result.title}</h3>
                      <p className="text-sm text-gray-600">{result.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              ))}

              {results.length === 0 && searchTerm.trim() !== "" && (
                <div className="p-4 text-center text-gray-500">No results found for "{searchTerm}"</div>
              )}
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600">
            Try searching for: "IT3 System", "benefits", "technology", "features", "history", "about us"
          </p>
        </div>
      </div>
    </div>
  )
}
