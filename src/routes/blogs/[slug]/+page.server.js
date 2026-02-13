import { filteredBlogs } from '$lib/data/blogs'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  const blog = filteredBlogs.find((x) => x.slug === params.slug)

  if (blog) {
    // The Component is already included in the blog object from blogs.js
    return { blog }
  }

  throw error(500, `Could not load ${params.slug}`)
}
