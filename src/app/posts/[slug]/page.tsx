import "./markdown.css"

import { allPosts } from "contentlayer/generated"
import { ResolvingMetadata } from "next"
import { getMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"

import { Comments } from "@/components/comments"
import { Date } from "@/components/date"
import { Social } from "@/components/social"
import { processPosts } from "@/lib/get-posts"
import { mdxComponents } from "./mdx-components"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath
  }))
}

export async function generateMetadata(
  {
    params
  }: {
    params: {
      slug: string
    }
  },
  parent: ResolvingMetadata
) {
  // Find the post for the current page.
  const post = processPosts(allPosts).find(
    (post) => post._raw.flattenedPath === params.slug
  )

  // 404 if the post does not exist.
  if (!post) notFound()

  const { title, description } = post

  const previousOG = (await parent).openGraph
  const previousTwitter = (await parent).twitter

  return {
    title: title,
    description: description || "Post by Ben Gubler",
    openGraph: {
      ...previousOG,
      title: title,
      description: description
    },
    twitter: {
      ...previousTwitter,
      title: title,
      description: description,
      card: "summary"
    }
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = processPosts(allPosts).find(
    (post) => post._raw.flattenedPath === params.slug
  )

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the getMDXComponent hook.
  const MDXContent = getMDXComponent(post.body.code)

  return (
    <>
      <article className="prose dark:prose-invert w-[80%] max-w-screen-md m-auto">
        <h1 className="mb-1 mt-5 pt-4">{post.title}</h1>
        <p className="my-0">
          <Date dateString={post.date} />
        </p>
        {post.description && (
          <p className="text-xl italic mt-4 mb-1">{post.description}</p>
        )}

        <Social title={post.title + "\n--\n" + post.description} />

        <hr className="mt-1" />

        <MDXContent components={mdxComponents} />
      </article>
      <div className="w-[80%] max-w-screen-md m-auto mt-10">
        <Comments />
      </div>
    </>
  )
}
