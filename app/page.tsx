import BlogMenubarComponent from "@/components/BlogMenuBar"
import { getArticle } from './utils';
import Link from "next/link";

export default async function BlogPage() {
  const articleTitles = await getArticle();
  return (
    <div>
      <br/>
      <BlogMenubarComponent />
      <div className="space-y-4"> 
        {articleTitles.map((article, index) => (
  <article key={article.filename} className="bg-gray-100 dark:bg-gray-400 p-4 mt-4 rounded-s">
    <Link href={`/blog/${article.filename}`}>
      <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
      <p className="text-sm hover:text-gray-50 hover:dark:text-gray-800 mb-2">{`Published on ${article.fomatedDate}`}</p>
      <p>{`${article.summary}..`}</p>
    </Link>
    {index !== articleTitles.length - 1 && (
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    )}
  </article>
))}
      </div>
    </div>
  )
}