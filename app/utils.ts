import { components } from "@/components/CustomMdx";
import { MDXComponents } from "mdx/types";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";


export async function getArticle() {
    const filenames = (await fs.readdir(path.join(process.cwd(), 'app/posts')))
        .filter(file => path.extname(file) === '.mdx')
        .map(file => path.basename(file, '.mdx'));
    const response = await Promise.all(filenames.map(async(filename) => {
        const article = await fs.readFile(path.join(process.cwd(), 'app/posts', `${filename}.mdx`), "utf-8");
        const { content, frontmatter } = await compileMDX<{title: string, publishedAt: string, summary: string, image: string}>({source: article, options: { parseFrontmatter: true }, components: components as MDXComponents})
        return {
            filename,
            ...frontmatter,
            content,
            fomatedDate: new Date(frontmatter.publishedAt).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric"})
        }
    }))
    return response.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    // return article
}