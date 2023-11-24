import "./globals.css"

import { Analytics } from "@vercel/analytics/react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

// TODO: add more meta tags

export const metadata = {
  title: {
    template: "%s | Ben Gubler",
    default: "Ben Gubler"
  },
  metadataBase: new URL("https://www.bengubler.com"),
  description:
    "Ben Gubler is a computer scientist, open-source maintainer, and aspiring polyglot",
  openGraph: {
    title: "Ben Gubler",
    description:
      "Ben Gubler is a computer scientist, open-source maintainer, and aspiring polyglot",
    url: "https://bengubler.com",
    siteName: "Ben Gubler",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bengubler.com/api/og",
        width: 1200,
        height: 630,
        alt: ""
      }
    ]
  },
  twitter: {
    title: "Ben Gubler",
    card: "summary",
    creator: "@nebrelbug",
    siteId: "1249828411041701888"
  }
}

// note: meta charset="utf-8" and meta name="viewport" are added by default

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="my-16 mx-5">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
