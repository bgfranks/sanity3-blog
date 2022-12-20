// components
import ClientSideRoute from './ClientSideRoute'
import Post from './Post'

type Props = {
  posts: Post[]
}

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className='border-[#32b9fa] mb-10' />
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 pb-24'>
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/blog/${post.slug.current}`}>
            <Post post={post} />
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}
