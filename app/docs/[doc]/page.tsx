"use client"

import { docsSidebarContent } from "@/config/site"

import { useEffect } from "react"

import { useParams, notFound } from "next/navigation"

import { DocsPage } from "@/components/docs"

export default function DocsSubjectPage() {

  const params = useParams<{ doc: string }>()

  const foundDoc = docsSidebarContent.find(obj => obj.id == decodeURI(params.doc) || obj.title == decodeURI(params.doc))

  useEffect(() => {
    if (foundDoc == undefined || foundDoc == null) {
      notFound()
    }
  }, [foundDoc])

  return (
    <DocsPage doc={foundDoc} />
  )
}