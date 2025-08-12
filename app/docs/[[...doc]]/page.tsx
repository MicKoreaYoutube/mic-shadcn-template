import React from "react"

import { toTitleCase } from "@/lib/utils"
import { mdxUtils } from "@/lib/mdx"
import { docsItem } from "@/types/docs"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChapterSidebar } from "@/components/sidebar"

import { docsTree } from "@/config/site"

interface docsStaticParamsItem {
  doc: string[] | undefined
}

interface generateBranchParamsType {
  tree: docsItem[]
  treePath?: string[]
}

export default async function DocPage({ params }: { params: Promise<docsStaticParamsItem> }) {
  const resolvedParams = await params

  const slug = resolvedParams.doc?.length ? resolvedParams.doc : ["introduction"]
  const slugPath = decodeURI(slug.join("/")) + ".mdx"

  const { Document, frontmatter, toc } = await mdxUtils({ rootPath: "docs", slugPath: slugPath })

  return (
    <div className="flex w-full gap-7 p-6 lg:p-10">
      <article className="grow">
        <Breadcrumb className="font-TheJamsil5Bold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            {slug.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/docs/${slug.slice(0, index + 1).join("/")}`}>{toTitleCase(decodeURI(item).replaceAll("-", " "))}</BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        {frontmatter ? (
          <div className="mb-12">
            <h1 className="mb-4 mt-9 border-b pb-3 font-KBODiaGothic_bold text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              {frontmatter.title}
            </h1>
            <p className="my-4 font-SUITE_Regular text-lg text-muted-foreground md:text-xl">
              {frontmatter.description}
            </p>
          </div>
        ) : null}
        <Document />
      </article>
      <div className="sticky top-24 hidden h-full lg:inline">
        <ChapterSidebar items={toc} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const docsParams: docsStaticParamsItem[] = [{ doc: undefined }]

  function generateBranchParams({ tree, treePath }: generateBranchParamsType) {
    tree.forEach((branch)=>{
      const currentTreePath = [...(treePath ?? []), branch.id]
      if (branch.isDoc) {
        docsParams.push({ doc: currentTreePath })
      } if (branch.subDocList) {
        generateBranchParams({ tree: branch.subDocList, treePath: currentTreePath })
      }
    })
  }

  generateBranchParams({ tree: docsTree })

  return docsParams
}

export const dynamicParams = false
