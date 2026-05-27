import { blogs } from '$lib/data/blogs'
import { quotes } from '$lib/data/quotes'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  if (!quotes || !Array.isArray(quotes)) throw error(500, 'Could not load quotes')

  if (!blogs || !Array.isArray(blogs)) throw error(500, 'Could not load blogs')

  const qresult = quotes.slice(0, 4).map(({ slug, title, date, excerpt }) => ({
    slug,
    title,
    date,
    excerpt
  }))

  const bresult = blogs.slice(0, 4).map(({ slug, title, date, excerpt, readingTime }) => ({
    slug,
    title,
    date,
    excerpt,
    readingTime
  }))

  return { quotes: qresult, blogs: bresult }
}
