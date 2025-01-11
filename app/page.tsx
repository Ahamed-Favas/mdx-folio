import BlogMenubarComponent from "@/components/BlogMenuBar"
import { getArticleTitles } from './utils';
import Link from "next/link";


// export async function generateMetadata(params: {params: {slug: string}}) {
//   const { articleFiles } = await getBlogs(params?.slug);
//   const article = await fs.readFile(path.join(process.cwd(), 'app/posts', 'vim.mdx'), "utf-8");
//   const {frontmatter} = await compileMDX<{title: string, publishedAt: string, summary: string}>({source: article, options: { parseFrontmatter: true }})
//   return {
//     title: `${frontmatter.title}`
//   }
// }

export default async function BlogPage() {
  const articleTitles = await getArticleTitles()
  return (
    <div>
      <BlogMenubarComponent />
      <div className="space-y-8"> 
        {articleTitles.map((article) =>
          <article key={article.filename}>
            <Link href ={`blog/${article.filename}`}>
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{article.fomatedDate}</p>
              <p>{`${article.summary}..`}</p>
            </Link>
          </article>
        )}
      </div>
    </div>
  )
}