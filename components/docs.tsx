import fs from "fs/promises"
import path from "path"

import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"

import { compileMDX } from "next-mdx-remote/rsc"
import { useMDXComponents } from "@/mdx-components"

export async function getDocsContent(slug: string[]) {
  const decodedSlug = slug.map(segment => decodeURIComponent(segment))

  const mdxPath = path.join(process.cwd(), "docs", ...decodedSlug) + ".mdx"
  const source = await fs.readFile(mdxPath, "utf8")

  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
    components: useMDXComponents,
  })

  return content
}
