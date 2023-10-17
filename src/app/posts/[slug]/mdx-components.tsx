import type { MDXComponents } from "mdx/types"

import { Code } from "bright"
import Image from "next/image"
import Link from "next/link"

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  pre: Code,
  Image: Image
}

export { mdxComponents }
