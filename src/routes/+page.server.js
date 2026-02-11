import { quotes } from '$lib/data/quotes'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  if (!quotes || !Array.isArray(quotes)) {
    throw error(500, 'Could not load quotes')
  }

  const qresult = quotes.slice(0, 4).map(({ slug, title, date, excerpt }) => ({
    slug,
    title,
    date,
    excerpt
  }))

  if (qresult) return { quotes: qresult }

  throw error(500, `Could not load ${params.slug}`)
}
