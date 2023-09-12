import "./markdown.css"

import { getMDXComponent } from "mdx-bundler/client"

import { Date } from "@/components/date"
import mdxComponents from "./mdx-components"

import { getPostData, getValidSlugs } from "@/lib/get-posts"
import { ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

import { Social } from "@/components/social"

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
  const validSlugs = await getValidSlugs()

  if (!validSlugs.includes(params.slug)) {
    notFound()
  }

  const { frontmatter } = await getPostData(params.slug)

  const { title, description } = frontmatter

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

export async function generateStaticParams() {
  const validSlugs = await getValidSlugs()

  return validSlugs.map((slug) => ({
    params: {
      slug: slug
    }
  }))
}

export default async function Post({
  params
}: {
  params: {
    slug: string
  }
}) {
  const validSlugs = await getValidSlugs()

  if (!validSlugs.includes(params.slug)) {
    notFound()
  }

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
          <p className="text-xl italic mt-4 mb-1">{frontmatter.description}</p>
        )}

        <Social
          url={`https://bengubler.com/posts/${params.slug}`}
          title={frontmatter.title + "\n--\n" + frontmatter.description}
        />

        <hr className="mt-1" />

        <MDX components={mdxComponents} />
      </article>
    </>
  )
}
