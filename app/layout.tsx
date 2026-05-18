import type { Metadata, Viewport } from "next"
import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  applicationName: "ML Opsidian: Genesis",
  title: {
    default: "ML Opsidian: Genesis | University of Colombo MLOps Hackathon",
    template: "%s | ML Opsidian: Genesis",
  },
  description:
    "ML Opsidian: Genesis is the first MLOps hackathon for University of Colombo students, focused on building, deploying, and scaling production-grade AI systems.",
  keywords: [
    "ML Opsidian",
    "ML Opsidian Genesis",
    "MLOps hackathon",
    "University of Colombo",
    "UCSC IEEE Student Branch",
    "machine learning",
    "production AI",
    "AI engineering",
    "countdown",
  ],
  authors: [
    {
      name: "UCSC IEEE Student Branch",
    },
  ],
  creator: "UCSC IEEE Student Branch",
  publisher: "UCSC IEEE Student Branch",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ML Opsidian: Genesis",
    description:
      "The first MLOps hackathon for University of Colombo students, built around production-grade AI systems, deployment, monitoring, and scale.",
    type: "website",
    locale: "en_LK",
    siteName: "ML Opsidian: Genesis",
  },
  twitter: {
    card: "summary",
    title: "ML Opsidian: Genesis",
    description:
      "A production-focused MLOps hackathon for University of Colombo students.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: "#050B0D",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
