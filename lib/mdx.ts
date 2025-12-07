import fs from "fs"
import path from "path"
import { unified } from "unified"
import remarkParse from "remark-parse"
import { Root } from "mdast"

import { tocListItem } from "@/types/docs"

interface mdxUtilsProps {
    rootPath: string
    slugPath: string
}

export async function mdxUtils({ rootPath, slugPath }: mdxUtilsProps) {
  const { default: Document, frontmatter } = await import(`@/docs/${slugPath}`)

  const fullPath = path.join(process.cwd(), rootPath, slugPath)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const tree = unified().use(remarkParse).parse(fileContent) as Root

  const toc = tree.children.filter((node) => node.type == "heading")

  const headings: tocListItem[] = []

  toc.forEach((node) => {
    if (node.children[0].type == "text") headings.push({ depth: node.depth, text: node.children[0].value })
  })

  return {
    Document,
    frontmatter,
    toc: headings,
  }
}
