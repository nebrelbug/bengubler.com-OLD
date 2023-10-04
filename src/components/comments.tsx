"use client"

import Giscus from "@giscus/react"

export function Comments() {
  return (
    <Giscus
      id="comments"
      repo="nebrelbug/bengubler.com"
      repoId="R_kgDOJfqpng"
      category="Announcements"
      categoryId="DIC_kwDOJfqpns4CZ2Hf"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  )
}
