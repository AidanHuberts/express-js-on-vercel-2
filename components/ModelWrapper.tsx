"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Fallback component to show while loading or if there's an error
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading 3D model...</p>
    </div>
  </div>
)

// Dynamically import the PipeModel with error boundary
const PipeModel = dynamic(
  () =>
    import("./PipeModel").catch(() => {
      // Return a simple component if the import fails
      return () => (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
              <p>Unable to load 3D model. Please try again later.</p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>
      )
    }),
  { ssr: false, loading: LoadingFallback },
)

export default function ModelWrapper() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PipeModel />
    </Suspense>
  )
}
