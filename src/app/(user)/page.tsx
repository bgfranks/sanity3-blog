import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../../lib/sanity.client'

// components
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewBlogList from '../../components/PreviewBlogList'
import BlogList from '../../components/BlogList'

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  }
    | order(_createdAt desc)
`
export const revalidate = 30 //revalidate every 30 seconds

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#32b9fa]'>
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return (
    <div>
      {/* Blog List */}
      <BlogList posts={posts} />
    </div>
  )
}
