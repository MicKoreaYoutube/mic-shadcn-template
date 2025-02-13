"use client"

import { useParams } from "next/navigation"

import { DocsPage } from "@/components/docs"

export default function DocsSubjectPage() {

  const params = useParams<{ doc: string }>()

  return (
    <DocsPage doc={decodeURI(params.doc)} />
  )
}