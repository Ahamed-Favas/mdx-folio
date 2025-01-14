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
        {articleTitles.map((article) =>
            <article key={article.filename} className="hover:bg-gray-50 p-4 mt-4 rounded-xl">
            <Link href ={`blog/${article.filename}`}>
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{`Published on ${article.fomatedDate}`}</p>
              <p>{`${article.summary}`}</p>
            </Link>
            </article>
        )}
      </div>
    </div>
  )
}