import type React from "react"
import "./styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "../components/Header"
import SearchHighlighter from "../components/SearchHighlighter"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pipe-in-Pipe Technologies",
  description: "Specializing in re-lining pipes with innovative technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Header />
        <main className="flex-grow flex">{children}</main>
        <Suspense fallback={null}>
          <SearchHighlighter />
        </Suspense>
      </body>
    </html>
  )
}
