import fs from "fs"
import path from "path"
import { unified } from "unified"
import remark from "remark"
import html from "remark-html"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"
import rehypeReact from "rehype-react"
import { Root } from "mdast"
import matter from "gray-matter"
import dynamic from 'next/dynamic'
import React from "react"

import { tocListItem } from "@/types/docs"

interface mdxUtilsProps {
  mdxPath: string
}

export async function mdxUtils({ mdxPath }: mdxUtilsProps) {
  const fullPath = path.join(process.cwd(), "mdx", mdxPath)
  const mdxContent = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(mdxContent)
  const result = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeReact, {
    createElement: React.createElement,
  })
  .process(matterResult.content)

  const tree = unified().use(remarkParse).parse(mdxContent) as Root

  const headings = tree.children.filter((node) => node.type == "heading")

  const toc: tocListItem[] = []

  headings.forEach((node) => {
    if (node.children[0].type == "text") toc.push({ depth: node.depth, text: node.children[0].value })
  })

  return {
    Document: result.result,
    frontmatter: matterResult.data,
    tree,
  }
}
