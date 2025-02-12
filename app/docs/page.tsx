"use client"

import { docsContent } from "@/config/site"

import { DocsPage } from "@/components/docs"

export default function DocsMainPage() {

  const foundDoc = docsContent[0]

  return (
    <DocsPage doc="introduction" />
  )
}
