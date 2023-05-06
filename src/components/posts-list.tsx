import { Date } from "./date"
import { InternalLink, ExternalLink } from "./links"

import { getSortedPostsData } from "@/lib/get-posts"
// in the future, I'll add options for filtering, showing only local or featured, etc.

export async function PostsList({ limit }: { limit: number | false }) {
  let allPostsData = await getSortedPostsData(limit)

  return (
    <ul className="list-disc list-outside mt-6 ml-7">
      {allPostsData &&
        allPostsData.map((data) => {
          let { link, date, title, type, site } = data

          let LinkComp = type === "internal" ? InternalLink : ExternalLink

          let href = type === "internal" ? `/posts/${link}` : link

          return (
            <li key={link} className="text-xl mb-2">
              <LinkComp href={href}>{title}</LinkComp> <br />
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
