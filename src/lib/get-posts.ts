import "server-only"

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import { parseISO } from "date-fns"
import rehypeSlug from "rehype-slug"
import rehypeMathJax from "rehype-mathjax"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkCapitalizeHeadings from "remark-capitalize-headings"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

import title from "title"

import { cache } from "react"

// TODO: pre-generate posts (in [slug]/page.jsx, posts/page.jsx, posts-list)

import { externalPosts } from "./data/external-writing"

const postsDirectory = path.join(process.cwd(), "posts")

interface corePostData {
  link: string
  date: string
  title: string
  site: string | false
}

interface internalPostData extends corePostData {
  type: "internal"
}

export interface externalPostData extends corePostData {
  type: "external"
}

export type postData = internalPostData | externalPostData

const speciallyCapitalizedTitles = ["EJS", "TensorFlow.js"]

export const getSortedPostsData = cache(
  async (limit: number | false = false) => {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const internalPostsData = fileNames.map((fileName) => {
      const link = fileName.replace(/\.mdx$/, "")

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      let res = {
        link,
        type: "internal",
        site: false,
        ...matterResult.data
      } as internalPostData

      return res
    })

    const externalPostsData = externalPosts

    const allPostsData = [...internalPostsData, ...externalPostsData].map(
      (postData) => {
        // normalize titles!
        postData.title = title(postData.title, {
          special: speciallyCapitalizedTitles
        })

        return postData
      }
    )

    // Sort posts by date
    let final = allPostsData.sort((a, b) => {
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
)

export const getAllInternalPosts = cache(async () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const internalPostsData = fileNames.map((fileName) => {
    const link = fileName.replace(/\.mdx$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the slug
    let res = {
      link,
      ...matterResult.data
    } as internalPostData

    return res
  })

  return internalPostsData
})

export const getAllPostIds = cache(async () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, "")
    }
  })
})

export const getPostData = cache(async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { code, frontmatter } = await bundleMDX({
    source: fileContents,
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkCapitalizeHeadings,
        remarkGfm,
        remarkMath
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeMathJax
      ]

      return options
    }
  })

  let res = {
    slug,
    frontmatter,
    code
  }

  res.frontmatter.title = title(res.frontmatter.title)

  return res
})
