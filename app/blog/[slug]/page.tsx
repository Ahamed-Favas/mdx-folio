import { getArticle, getArticleTitles } from "@/app/utils";
import Link from "next/link";

async function Page({params}: {params: {slug: string}}) {
  const article = await getArticle(params.slug);
  const articleTitles = await getArticleTitles();
  const otherArticleTitles = articleTitles.filter((title) => title.filename != params.slug);
  return (
    <div>
      <br />
      <div className="flex">
            <aside className="w-1/4 pr-8 hidden md:block">
            <nav className="sticky top-8">
              <ul className="space-y-2">
                <Link
                  href={`/`}
                  className="text-sm hover:underline"
                >
                  {'<- Back'}
                </Link>
              </ul>
              <div className="my-8">
              <p className="font-semibold mb-3">
              More stories
              </p>
                 {otherArticleTitles.map((otherArticle) => (
                <article key={otherArticle.filename}>
                  <Link href ={`${otherArticle.filename}`}>
                  <h2 className="text-sm mb-2 underline">{otherArticle.title}</h2>
                  </Link> 
                </article>
                 ))}
              </div>
            </nav>
            </aside>
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p className="text-sm text-gray-600 mb-2">{`Published on ${article.fomatedDate}`}</p>
          <div className="mt-10">{article.content}</div>
        </div>
      </div>
    </div>
  )
}

export default Page