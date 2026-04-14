"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Search } from "lucide-react"
import Logo from "./Logo"
import SearchModal from "./SearchModal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? "bg-gray-800 shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 py-6 max-w-7xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-6">
              <Logo
                className={`w-16 h-16 sm:w-24 sm:h-24 transition-transform duration-300 ${
                  scrollPosition > 50 ? "scale-75" : "scale-100"
                }`}
                size={96}
              />
              <div className="flex flex-col items-center">
                <span
                  className={`text-3xl sm:text-5xl font-extrabold transition-colors duration-300 ${
                    scrollPosition > 50 ? "text-white" : "text-black"
                  }`}
                >
                  PIPEinPIPE
                </span>
                <span
                  className={`text-sm sm:text-xl font-semibold mt-1 transition-colors duration-300 ${
                    scrollPosition > 50 ? "text-gray-300" : "text-black"
                  }`}
                >
                  TECHNOLOGIES INC.
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
              >
                Home
              </Link>
              <div className="relative group">
                <button
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-300 ${
                    scrollPosition > 50
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                  }`}
                >
                  IT3 System
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      href="/benefits"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-400"
                      role="menuitem"
                    >
                      Benefits
                    </Link>
                    <Link
                      href="/technology"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-400"
                      role="menuitem"
                    >
                      Technology
                    </Link>
                    <Link
                      href="/features"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-400"
                      role="menuitem"
                    >
                      Features
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/history"
                className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
              >
                IT3 History
              </Link>
              <Link
                href="/about"
                className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
              >
                About Us
              </Link>
              <div className="relative group">
                <button
                  className={`font-medium px-4 py-2 rounded-full flex items-center transition-all duration-300 ${
                    scrollPosition > 50
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                  }`}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      href="/resources/articles"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-400"
                      role="menuitem"
                    >
                      Articles of Reference
                    </Link>
                    <Link
                      href="/resources/brochure"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-400"
                      role="menuitem"
                    >
                      Brochure
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            <div className="flex items-center space-x-4 pr-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white text-gray-800 hover:bg-gray-200"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMenu}
                className={`md:hidden p-3 rounded-full transition-colors duration-300 ${
                  scrollPosition > 50
                    ? "text-white bg-white/10 hover:bg-white/20"
                    : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                }`}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 px-4 animate-slide-in transition-colors duration-300 ${scrollPosition > 50 ? "bg-gray-800" : "bg-white"}`}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className={`font-medium px-4 py-2 ${scrollPosition > 50 ? "text-white" : "text-gray-700"}`}>
                  IT3 System
                </div>
                <Link
                  href="/benefits"
                  className={`block pl-4 transition-colors duration-200 ${scrollPosition > 50 ? "text-gray-300 hover:text-yellow-400" : "text-gray-600 hover:text-yellow-400"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link
                  href="/technology"
                  className={`block pl-4 transition-colors duration-200 ${scrollPosition > 50 ? "text-gray-300 hover:text-yellow-400" : "text-gray-600 hover:text-yellow-400"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link
                  href="/features"
                  className={`block pl-4 transition-colors duration-200 ${scrollPosition > 50 ? "text-gray-300 hover:text-yellow-400" : "text-gray-600 hover:text-yellow-400"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </div>
              <Link
                href="/history"
                className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                IT3 History
              </Link>
              <Link
                href="/about"
                className={`font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  scrollPosition > 50
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="space-y-2">
                <div className={`font-medium px-4 py-2 ${scrollPosition > 50 ? "text-white" : "text-gray-700"}`}>
                  Resources
                </div>
                <Link
                  href="/resources/articles"
                  className={`block pl-4 transition-colors duration-200 ${scrollPosition > 50 ? "text-gray-300 hover:text-yellow-400" : "text-gray-600 hover:text-yellow-400"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Articles of Reference
                </Link>
                <Link
                  href="/resources/brochure"
                  className={`block pl-4 transition-colors duration-200 ${scrollPosition > 50 ? "text-gray-300 hover:text-yellow-400" : "text-gray-600 hover:text-yellow-400"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brochure
                </Link>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsSearchOpen(true)
                  }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    scrollPosition > 50
                      ? "bg-white text-gray-800 hover:bg-gray-200"
                      : "bg-white/80 text-gray-800 hover:bg-white/100 shadow-sm"
                  }`}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
