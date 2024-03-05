import { cn } from "@lib/utils"
import type { Metadata } from "next"
import { Inter, Pathway_Gothic_One as Pathway } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const pathway = Pathway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pathway",
})

export const metadata: Metadata = {
  title: "Cobalto - Readme Generator",
  description:
    "An Open-Source README generator for Github projects. Customizable. Practical. Efficient.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          inter.className,
          pathway.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
