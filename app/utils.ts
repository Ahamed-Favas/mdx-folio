import { components } from "@/components/CustomMdx";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

// console.log(components)

export async function getArticleTitles() {
    const filenames = await fs.readdir(path.join(process.cwd(), 'app/posts')).then(files => files.filter((file) => path.extname(file) === '.mdx'))
    const response = await Promise.all(filenames.map(async(filename) => {
        const article = await fs.readFile(path.join(process.cwd(), 'app/posts', `${filename}`), "utf-8");
        const {frontmatter} = await compileMDX<{title: string, publishedAt: string, summary: string}>({source: article, options: { parseFrontmatter: true }})
        return {
            filename,
            ...frontmatter,
            fomatedDate: new Date(frontmatter.publishedAt).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric"})
         }
    }))
    return response.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getArticle(filename: string) {
    const article = await fs.readFile(path.join(process.cwd(), 'app/posts', `${filename}`), "utf-8");
    //@ts-expect-error : kk
    const { content, frontmatter } = await compileMDX<{title: string, publishedAt: string, summary: string}>({source: article, options: { parseFrontmatter: true }, components: components})

    return {
        filename,
        ...frontmatter,
        content,
        fomatedDate: new Date(frontmatter.publishedAt).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric"})
    }
    // return article
}