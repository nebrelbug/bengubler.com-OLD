// See https://maxleiter.com/blog/build-a-blog-with-nextjs-13

import { parseISO } from "date-fns"

import { getAllInternalPosts } from "@/lib/get-posts"

export default async function sitemap() {
  const posts = await getAllInternalPosts()

  const postLinks = posts.map((post) => ({
    url: `https://bengubler.com/posts/${post.link}`,
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
