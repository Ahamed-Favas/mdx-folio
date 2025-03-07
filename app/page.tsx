import BlogMenubarComponent from "@/components/BlogMenuBar";
import { getArticle } from './utils';
import Link from "next/link";

export default async function BlogPage() {
  const articleTitles = await getArticle();
  return (
    <div>
      <br />
      <BlogMenubarComponent />
      <div className="space-y-4">
        {articleTitles.map((article) => (
          <div key={article.filename}>
            <article className="p-4 mt-2 md:mt-4 rounded-s">
              <Link href={`/blog/${article.filename}`}>
                <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-2">
                  {`Published on ${article.formattedDate}`}
                </p>
                <p className="text-gray-800 dark:text-gray-400">
                  {article.summary + " "}
                  <div className="mt-2 text-blue-800">{'Read More'}</div>
                </p>
              </Link>
            </article>
           
              <hr className="h-px m-2 bg-gray-200 border-0 dark:bg-gray-700" />
           
          </div>
        ))}
      </div>
    </div>
  );
}