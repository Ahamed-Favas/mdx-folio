import { getArticle } from "./utils"


export const baseUrl = 'https://me.pastpricing.com'

export default async function sitemap() {
  const blogs = await getArticle()
  blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.filename}`,
    lastModified: post.publishedAt,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
