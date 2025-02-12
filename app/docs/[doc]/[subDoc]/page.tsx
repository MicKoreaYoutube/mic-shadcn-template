"use client"

import { docsSidebarContent } from "@/config/site"

import { useParams, notFound } from "next/navigation"

import { useEffect } from "react"

import { DocsPage } from "@/components/docs"

export default function DocsTitlePage() {

  const params = useParams<{ doc: string, subDoc: string }>()

  const foundSubject = docsSidebarContent.find(obj => obj.id == decodeURI(params.doc) || obj.title == decodeURI(params.doc))
  const foundDoc = foundSubject?.subDocList?.find(obj => obj.title == decodeURI(params.subDoc))

  useEffect(() => {
    if (foundDoc == undefined || foundDoc == null) {
      notFound()
    }
  }, [foundDoc])

  return (
    <DocsPage doc={foundDoc} />
  )
}