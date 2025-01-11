import { baseUrl } from "../sitemap"
import { getArticle } from "../utils"

export async function GET() {
  const allBlogs = await getArticle()

  const itemsXml = allBlogs.map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.filename}</link>
          <description>${post.summary || ''}</description>
          <pubDate>${new Date(
            post.publishedAt
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Blog</title>
        <link>${baseUrl}</link>
        <description>This is RSS feed of my blog</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
