import type { Metadata } from "next";

import { cn } from "@lib/utils";
import { CookiesProvider } from "next-client-cookies/server";
import { Inter, Pathway_Gothic_One as Pathway, Roboto } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

const pathway = Pathway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pathway",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cobalto - Readme Generator",
  description:
    "An Open-Source README generator for Github projects. Customizable. Practical. Efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-dvh antialiased",
          inter.variable,
          roboto.variable,
          pathway.variable,
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <CookiesProvider>{children}</CookiesProvider>
      </body>
    </html>
  );
}
