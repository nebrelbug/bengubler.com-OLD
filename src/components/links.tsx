import Link from "next/link"

import { twMerge } from "tailwind-merge"

const linkStyle =
  "font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hover:font-bold"

export function ExternalLink({
  href,
  label,
  className,
  children
}: {
  href: string
  label?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      className={twMerge(linkStyle, className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}

export function InternalLink({
  href,
  label,
  className,
  children
}: {
  href: string
  label?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link className={twMerge(linkStyle, className)} title={label} href={href}>
      {children}
    </Link>
  )
}
