import { defineDocumentType, makeSource } from "contentlayer/source-files"

import rehypeSlug from "rehype-slug"
import rehypeMathJax from "rehype-mathjax"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkCapitalizeHeadings from "remark-capitalize-headings"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkToc from "remark-toc"

import { capitalizationOptions } from "./src/lib/capitalization"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      [
        remarkCapitalizeHeadings,
        { replaceHeadingRegExp: capitalizationOptions }
      ],
      remarkGfm,
      remarkMath,
      remarkToc
    ],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeMathJax]
  }
})
