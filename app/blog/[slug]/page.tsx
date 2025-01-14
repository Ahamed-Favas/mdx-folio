import { baseUrl } from "@/app/sitemap";
import { getArticle } from "@/app/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { Suspense } from "react";
// import ArticleSkeleton from "./loading";

export async function generateStaticParams() {
  const posts = await getArticle()

  return posts.map((post) => ({
    slug: post.filename,
  }))
}

export async function generateMetadata({params}: {params: {slug: string}}) {
  const article = (await getArticle()).find(post => post.filename === params.slug);
  if (!article) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = article
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${article.filename}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}


async function Page({params}: {params: {slug: string}}) {
  const articles = await getArticle();
  const article = articles.find(post => post.filename === params.slug);
  if (!article) {
    notFound()
  }
  const otherArticleTitles = articles.filter((title) => title.filename != params.slug);
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: article.title,
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            description: article.summary,
            image: article.image
              ? `${baseUrl}${article.image}`
              : `/og?title=${encodeURIComponent(article.title)}`,
            url: `${baseUrl}/blog/${article.filename}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
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
          <p className="text-sm text-gray-600 mb-2">{article.fomatedDate}</p>
          <div className="mt-10">{article.content}</div>
        </div>
      </div>
      <br />
    </section>
  )
}

export default Page