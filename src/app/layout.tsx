import "./globals.css"

import { Analytics } from "@vercel/analytics/react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// TODO: add more meta tags

export const metadata = {
  title: {
    template: "%s | Ben Gubler",
    default: "Ben Gubler"
  },
  description:
    "Ben Gubler is a computer scientist, open-source maintainer, and aspiring polyglot",
  openGraph: {
    title: "Ben Gubler",
    description:
      "Ben Gubler is a computer scientist, open-source maintainer, and aspiring polyglot",
    url: "https://bengubler.com",
    siteName: "Ben Gubler",
    locale: "en_US",
    type: "website"
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
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="my-16 mx-5">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
