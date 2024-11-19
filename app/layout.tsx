import type { Metadata } from "next"
import { Inter, Pathway_Gothic_One as Pathway } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const pathway = Pathway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pathway",
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${inter.variable} ${pathway.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
