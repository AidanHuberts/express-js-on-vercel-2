"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { X } from "lucide-react"

export default function SearchHighlighter() {
  const searchParams = useSearchParams()
  const [activeSearch, setActiveSearch] = useState<string | null>(null)
  const [highlightCount, setHighlightCount] = useState(0)
  const [lastProcessedTerm, setLastProcessedTerm] = useState<string | null>(null)

  // Clear all highlights
  const clearHighlights = () => {
    const existingHighlights = document.querySelectorAll("mark.search-highlight")
    existingHighlights.forEach((el) => {
      const parent = el.parentNode
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el)
        // Normalize the parent to merge adjacent text nodes
        parent.normalize()
      }
    })

    // Make sure to update these states to hide the UI
    setActiveSearch(null)
    setHighlightCount(0)
    setLastProcessedTerm(null)

    // Clear from localStorage
    localStorage.removeItem("searchTerm")

    // Also clear from URL if possible
    if (window.history && window.location.href.includes("?search=")) {
      const newUrl = window.location.href.split("?")[0]
      window.history.replaceState({}, document.title, newUrl)
    }
  }

  // Function to highlight text
  const highlightText = (term: string) => {
    if (!term || term === lastProcessedTerm) return

    // Set this term as the last processed one
    setLastProcessedTerm(term)
    setActiveSearch(term)

    // Clear any existing highlights first
    const existingHighlights = document.querySelectorAll("mark.search-highlight")
    existingHighlights.forEach((el) => {
      const parent = el.parentNode
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ""), el)
        // Normalize the parent to merge adjacent text nodes
        parent.normalize()
      }
    })

    // Get all text nodes in the body
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        // Skip script and style elements
        if (
          node.parentNode &&
          ["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "SELECT", "OPTION", "BUTTON", "MARK"].includes(
            node.parentNode.nodeName,
          )
        ) {
          return NodeFilter.FILTER_REJECT
        }

        // Skip nodes with no text or only whitespace
        if (!node.textContent || !node.textContent.trim()) {
          return NodeFilter.FILTER_REJECT
        }

        // Skip nodes in the search highlighter UI itself
        let parent = node.parentNode as HTMLElement | null
        while (parent) {
          if (parent.id === "search-highlighter-ui") {
            return NodeFilter.FILTER_REJECT
          }
          parent = parent.parentNode as HTMLElement | null
        }

        return NodeFilter.FILTER_ACCEPT
      },
    })

    const textNodes: Node[] = []
    let currentNode: Node | null

    // Collect all text nodes
    while ((currentNode = walker.nextNode())) {
      textNodes.push(currentNode)
    }

    // Regular expression for case-insensitive search
    const escapedTerm = term.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    const regex = new RegExp(`(${escapedTerm})`, "gi")

    // Track if we've found any matches
    let foundMatch = false
    let firstMatchElement: HTMLElement | null = null
    let matchCount = 0

    // Process each text node
    textNodes.forEach((node) => {
      const text = node.textContent || ""
      if (!regex.test(text)) return

      // Reset regex lastIndex
      regex.lastIndex = 0

      const fragments: (string | HTMLElement)[] = []
      let lastIndex = 0
      let match

      // Find all matches in this text node
      while ((match = regex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          fragments.push(text.substring(lastIndex, match.index))
        }

        // Create a mark element for the match
        const mark = document.createElement("mark")
        mark.className = "search-highlight bg-yellow-200 px-0.5 rounded"
        mark.textContent = match[0]
        fragments.push(mark)

        matchCount++

        // Save the first match element for scrolling
        if (!foundMatch) {
          foundMatch = true
          firstMatchElement = mark
        }

        lastIndex = regex.lastIndex
      }

      // Add remaining text after the last match
      if (lastIndex < text.length) {
        fragments.push(text.substring(lastIndex))
      }

      // Only replace the node if we found matches
      if (fragments.length > 1) {
        const parent = node.parentNode
        if (!parent) return

        // Create a document fragment to hold our new nodes
        const frag = document.createDocumentFragment()

        // Add each fragment to the document fragment
        fragments.forEach((item) => {
          if (typeof item === "string") {
            frag.appendChild(document.createTextNode(item))
          } else {
            frag.appendChild(item)
          }
        })

        // Replace the original text node with our fragment
        parent.replaceChild(frag, node)
      }
    })

    setHighlightCount(matchCount)

    // Scroll to the first match with a small delay to ensure rendering
    if (firstMatchElement) {
      setTimeout(() => {
        firstMatchElement?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 300)
    }
  }

  // Check for search term changes
  useEffect(() => {
    const checkForSearchTerm = () => {
      const urlSearchTerm = searchParams?.get("search")
      const localStorageSearchTerm = localStorage.getItem("searchTerm")

      // Prioritize URL search term over localStorage
      const searchTerm = urlSearchTerm || localStorageSearchTerm

      if (searchTerm && searchTerm !== lastProcessedTerm) {
        highlightText(searchTerm)
      }
    }

    // Initial check
    checkForSearchTerm()

    // Set up an interval to periodically check for new search terms
    // This helps catch changes that might happen during navigation
    const intervalId = setInterval(checkForSearchTerm, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [searchParams, lastProcessedTerm])

  // Listen for storage events (in case localStorage changes in another tab)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "searchTerm" && e.newValue && e.newValue !== lastProcessedTerm) {
        highlightText(e.newValue)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [lastProcessedTerm])

  // If no active search, don't render anything
  if (!activeSearch) return null

  return (
    <div
      id="search-highlighter-ui"
      className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 z-50 flex items-center space-x-3 border border-gray-200"
    >
      <div>
        <span className="text-sm font-medium text-gray-700">
          Found {highlightCount} match{highlightCount !== 1 ? "es" : ""} for "{activeSearch}"
        </span>
      </div>
      <button
        onClick={clearHighlights}
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-1.5 rounded-full transition-colors"
        aria-label="Clear search highlights"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
