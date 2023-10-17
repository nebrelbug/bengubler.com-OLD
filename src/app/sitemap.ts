// See https://maxleiter.com/blog/build-a-blog-with-nextjs-13

import { allPosts } from "contentlayer/generated"
import { parseISO } from "date-fns"

import { processPosts } from "@/lib/get-posts"

export default function sitemap() {
  const posts = processPosts(allPosts)

  const postLinks = posts.map((post) => ({
    url: `https://bengubler.com${post.url}`,
    lastModified: parseISO(post.date)
  }))

  const pageLinks = ["", "/portfolio", "/posts", "/contact", "/my-stack"].map(
    (url) => ({
      url: `https://bengubler.com${url}`,
      lastModified: new Date().toISOString().split("T")[0] // current date in format YYYY-MM-DD
    })
  )

  return [...pageLinks, ...postLinks]
}
