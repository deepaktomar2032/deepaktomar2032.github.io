import readingTime from 'reading-time'

import { blogsDescription, blogsTitle } from './blogs-meta'

export const title = blogsTitle

export const description = blogsDescription

// Load all blog markdown modules (for frontmatter and compiled component)
const modules = import.meta.glob('./blogs/*.md', { eager: true })
// Load raw markdown content for reading time calculation
const rawFiles = import.meta.glob('./blogs/*.md', { as: 'raw', eager: true })

const allBlogs = Object.keys(modules)
  .map((path) => {
    const mod = modules[path]
    const raw = rawFiles[path] || ''
    if (!mod) return null

    const metadata = mod.metadata || {}
    const { text: readingTimeText } = readingTime(raw)

    return { ...metadata, readingTime: readingTimeText }
  })
  .filter(Boolean)

export const blogs = allBlogs
  .filter((blog) => !blog.hidden)
  .sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() < new Date(b.date).getTime()
      ? 1
      : 0
  )

export const filteredBlogs = allBlogs
  .filter((blog) => !blog.hidden)
  .sort((a, b) =>
    new Date(a.date).getTime() > new Date(b.date).getTime()
      ? -1
      : new Date(a.date).getTime() < new Date(b.date).getTime()
      ? 1
      : 0
  )
  .map((blog) => {
    // Get top 3 other blogs by date
    const otherBlogs = allBlogs
      .filter((x) => x.slug !== blog.slug && !x.hidden)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)

    return { ...blog, otherBlogs }
  })
