import { quotes } from '$lib/data/quotes'
import { error } from '@sveltejs/kit'

export async function load() {
  if (!quotes || !Array.isArray(quotes)) throw error(500, 'Could not load quotes')

  const result = quotes.map(({ slug, title, date, excerpt }) => ({
    slug,
    title,
    date,
    excerpt
  }))

  return { quotes: result }
}
