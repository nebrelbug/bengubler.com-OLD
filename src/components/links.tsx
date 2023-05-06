import Link from "next/link"

import { twMerge } from "tailwind-merge"

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
      className={twMerge(
        "font-semibold text-gray-600 hover:font-bold hover:text-black",
        className
      )}
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
    <Link
      className={twMerge(
        "font-semibold text-gray-600 hover:font-bold hover:text-black",
        className
      )}
      title={label}
      href={href}
    >
      {children}
    </Link>
  )
}
