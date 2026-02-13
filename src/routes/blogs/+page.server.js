import { blogs } from '$lib/data/blogs'
import { error } from '@sveltejs/kit'

export async function load() {
  if (!blogs || !Array.isArray(blogs)) throw error(500, 'Could not load blogs')

  const result = Object.keys(blogs).map((index) => {
    const { slug, title, date, excerpt, tags, readingTime } = blogs[index]
    return {
      slug,
      title,
      date,
      excerpt,
      tags,
      readingTime
    }
  })

  if (result) return { blogs: result }
}
