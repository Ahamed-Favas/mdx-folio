import Code from "@/components/Code";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";


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
    return response;
}

export async function getArticle(filename: string) {
    const article = await fs.readFile(path.join(process.cwd(), 'app/posts', `${filename}`), "utf-8");
    //@ts-expect-error : kk
    const { content, frontmatter } = await compileMDX<{title: string, publishedAt: string, summary: string}>({source: article, options: { parseFrontmatter: true }, components: { code: Code }})

    return {
        filename,
        ...frontmatter,
        content,
        fomatedDate: new Date(frontmatter.publishedAt).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric"})
    }
    // return article
}