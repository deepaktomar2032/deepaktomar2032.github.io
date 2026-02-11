export const title = `Words That Inspire`

export const description = `Sometimes, I write about what I find inspiring.`

const imports = import.meta.glob('./quotes/*.md', { eager: true })

export const quotes = Object.values(imports)
  .filter(Boolean)
  .map((quote) => ({
    ...quote.metadata
  }))
