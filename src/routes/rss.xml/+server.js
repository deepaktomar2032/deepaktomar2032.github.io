import { blogs } from '$lib/data/blogs'
import { description, siteBaseUrl, title } from '$lib/data/meta'

export const prerender = true

export async function GET() {
  const body = xml(blogs)
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  }
  return new Response(body, { headers })
}

const xml = (blogs) => `
<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${title}</title>
    <link>${siteBaseUrl}</link>
    <description>${description}</description>
    ${blogs
      .map(
        (blog) => `
        <item>
          <title>${blog.title}</title>
          <description>${blog.excerpt}</description>
          <link>${siteBaseUrl}/blogs/${blog.slug}/</link>
          <pubDate>${new Date(blog.date).toISOString()}</pubDate>
          ${blog.tags ? blog.tags.map((tag) => `<category term="${tag}" />`).join('') : ''}
          <media:thumbnail xmlns:media="http://search.yahoo.com/mrss/" url="${siteBaseUrl}/images/blogs/${
          blog.slug
        }/cover.jpg"/>
          <media:content xmlns:media="http://search.yahoo.com/mrss/" medium="image" url="${siteBaseUrl}/images/blogs/${
          blog.slug
        }/cover.jpg"/>
        </item>
      `
      )
      .join('')}
	.join('')}
  </channel>
</rss>`
