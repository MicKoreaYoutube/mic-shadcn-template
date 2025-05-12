import React from "react"

import fs from "fs"
import path from "path"
import { unified } from "unified"
import remarkParse from "remark-parse"
import { Root, Heading, Text } from "mdast"

import { toTitleCase } from "@/lib/utils"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface tocListItem {
  depth: number
  text: string
}

interface docsStaticParamsItem {
  doc: string[] | undefined
}

interface generateDocsFunctionType {
  currentPath: string
}

export default async function DocPage({ params }: { params: Promise<{ doc: string[] | undefined }> }) {
  const resolvedParams = await params

  const slug = resolvedParams.doc?.length ? resolvedParams.doc : ["introduction"]
  const slugPath = decodeURI(slug.join("/")).replaceAll("-", " ") + ".mdx"

  const { default: Document, frontmatter } = await import(`@/docs/${slugPath}`)

  const fullPath = path.join(process.cwd(), "docs", slugPath)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const tree = unified()
    .use(remarkParse)
    .parse(fileContent) as Root

  const toc = tree.children.filter((node) => node.type == "heading")
  console.log(toc)
  
  const headings: tocListItem[] = []

  toc.forEach((node) => {
    if (node.children[0].type == "text") headings.push({ depth: node.depth, text: node.children[0].value })
  })

  console.log(headings)

  return (
    <article className="mx-auto p-10 lg:w-[65vw]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          {slug.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${item}`}>{toTitleCase(decodeURI(item).replaceAll("-", " "))}</BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-12">
        <h1 className="mb-4 mt-9 border-b pb-3 font-KBODiaGothic_bold text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          {frontmatter?.title}
        </h1>
        <p className="my-4 font-SUITE_Regular text-lg text-muted-foreground md:text-xl">{frontmatter?.description}</p>
      </div>
      <Document />
    </article>
  )
}

export async function generateStaticParams() {
  const docsPath = path.join(process.cwd(), "docs")

  async function generateDocsParams({ currentPath }: generateDocsFunctionType) {
    const docsStaticParams: docsStaticParamsItem[] = []
    const directory = fs.readdirSync(currentPath, { withFileTypes: true })

    directory.forEach(async (element) => {
      if (element.isFile() && element.name.endsWith(".mdx")) {
        const currentFilePath = path.relative(docsPath, path.join(element.parentPath, element.name.replace(".mdx", "")))
        const docParamsArray = currentFilePath.toLocaleLowerCase().replaceAll(" ", "-").split("/")
        docsStaticParams.push({ doc: docParamsArray })
      } else if (element.isDirectory()) {
        const subDocs = generateDocsParams({ currentPath: path.join(currentPath, element.name) })
        docsStaticParams.push(...(await subDocs))
      }
    })

    return docsStaticParams
  }

  const allSlugs = generateDocsParams({ currentPath: docsPath })
  ;(await allSlugs).push({ doc: undefined })

  return allSlugs
}

export const dynamicParams = false
