"use client"

import { InternalLink as Link } from "./links"
import useScroll from "../hooks/use-scroll"

export function Header() {
  const scrolled = useScroll(50)

  return (
    <div
      className={`fixed top-0 w-full ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } transition-[border-color,border-bottom-width] px-5`}
    >
      <div className="flex h-16 max-w-screen-lg items-center justify-between xl:mx-auto">
        <Link href="/" className="text-2xl">
          <p>Ben Gubler</p>
        </Link>
        <div className="flex items-end">
          <Link href="/portfolio">
            <button className="p-1.5 px-4 text-md hover:font-bold">
              Portfolio
            </button>
          </Link>
          <Link href="/posts">
            <button className="p-1.5 px-4 text-md hover:font-bold">
              Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
