import BlogMenubarComponent from "@/components/BlogMenuBar"

export default async function BlogPage() {
  return (
    <div>
      <BlogMenubarComponent />
      <div className="space-y-8">
        <article>
          <h2 className="text-2xl font-semibold mb-2">Latest Web Development Trends</h2>
          <p className="text-sm text-gray-600 mb-2">Published on May 15, 2023</p>
          <p>Exploring the cutting-edge technologies shaping the future of web development...</p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold mb-2">Optimizing React Performance</h2>
          <p className="text-sm text-gray-600 mb-2">Published on April 22, 2023</p>
          <p>Tips and tricks to boost your React application&apos;s performance...</p>
        </article>
        <article>

        </article>
      </div>
    </div>
  )
}

