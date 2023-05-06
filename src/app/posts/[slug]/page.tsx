import "./markdown.css"

import { getMDXComponent } from "mdx-bundler/client"

import { Date } from "@/components/date"
import mdxComponents from "./mdx-components"

import { getPostData } from "@/lib/get-posts"

export async function generateMetadata({
  params
}: {
  params: {
    slug: string
  }
}) {
  const { frontmatter } = await getPostData(params.slug)

  return {
    title: frontmatter.title,
    description: frontmatter.description || "Post by Ben Gubler"
  }
}

export default async function Post({
  params
}: {
  params: {
    slug: string
  }
}) {
  const { frontmatter, code } = await getPostData(params.slug)

  // We don't want to needlessly recompile our MDX
  const MDX = getMDXComponent(code)

  return (
    <>
      <article className="prose w-[80%] max-w-screen-md m-auto">
        <h1 className="mb-1 mt-5 pt-4">{frontmatter.title}</h1>
        <p className="my-0">
          <Date dateString={frontmatter.date} />
        </p>
        {frontmatter.description && (
          <p className="text-xl italic mt-4">{frontmatter.description}</p>
        )}

        <hr />

        <MDX components={mdxComponents} />
      </article>
    </>
  )
}
