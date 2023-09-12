import { PostsList } from "@/components/posts-list"

export default async function Posts() {
  return (
    <div className="max-w-screen-lg m-auto">
      <h2 className="text-4xl font-bold mt-10">Posts</h2>
      <PostsList limit={false} />
    </div>
  )
}
