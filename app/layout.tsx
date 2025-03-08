import "@/styles/globals.css"
import "animate.css"

import { Metadata } from "next"
import type { Viewport } from "next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // library.add(fas, far, fab)

  return (
    <>
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased")}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="not-prose relative flex flex-col duration-700">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
