import type React from "react"
import type { Metadata } from "next"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "Rittik Hossen - Full-Stack Developer",
  description:
    "Portfolio of Rittik Hossen, a Full-Stack Developer specializing in Python, JavaScript, TypeScript, React.js, Next.js, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "Python",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
  ],
  authors: [{ name: "Rittik Hossen" }],
  openGraph: {
    title: "Rittik Hossen - Full-Stack Developer",
    description: "Portfolio showcasing projects in full-stack web development and modern technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="rittik-portfolio-theme"
        >
          <Header />
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
