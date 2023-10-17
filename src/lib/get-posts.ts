import "server-only"

import title from "title"
import { allPosts } from "contentlayer/generated"
import { parseISO } from "date-fns"

import { externalPosts } from "@/lib/data/external-writing"
import { speciallyCapitalizedTitles } from "@/lib/capitalization"

export function processPosts(posts: typeof allPosts) {
  return posts.map((post) => {
    return {
      ...post,
      title: title(post.title, { special: speciallyCapitalizedTitles })
    }
  })
}

export type postData = {
  title: string
  date: string
  url: string
  source: "internal" | "external"
  site?: string
}

export function getSortedPosts(limit?: number) {
  const localPosts: postData[] = processPosts(allPosts).map((postData) => {
    return { ...postData, source: "internal" }
  })

  // Sort posts by date
  let final = [...localPosts, ...externalPosts].sort((a, b) => {
    const dateA = parseISO(a.date).getTime()
    const dateB = parseISO(b.date).getTime()

    if (dateA < dateB) {
      return 1 // a should be sorted after b
    } else {
      return -1
    }
  })

  if (limit) {
    final = final.slice(0, limit)
  }

  return final
}
