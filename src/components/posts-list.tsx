import { Date } from "./date"
import { InternalLink, ExternalLink } from "./links"

import { getSortedPosts } from "@/lib/get-posts"
// in the future, I'll add options for filtering, showing only local or featured, etc.

export function PostsList({ limit }: { limit: number }) {
  let allPostsData = getSortedPosts(limit)

  return (
    <ul className="list-disc list-outside mt-6 ml-7">
      {allPostsData &&
        allPostsData.map((data) => {
          let { url, date, title, source, site } = data

          let LinkComp = source === "internal" ? InternalLink : ExternalLink

          return (
            <li key={url} className="text-xl mb-2">
              <LinkComp href={url}>{title}</LinkComp> <br />
              <p className="text-sm">
                <Date dateString={date} />{" "}
                {site && <span className="">{"— " + site.toUpperCase()} </span>}
              </p>
            </li>
          )
        })}
    </ul>
  )
}
