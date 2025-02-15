"use client"

import { useParams } from "next/navigation"

import { DocsPage } from "@/components/docs"

export default function DocsSubDocPage() {

  const params = useParams<{ doc: string, subDoc: string }>()

  return (
    <DocsPage doc={decodeURI(params.doc)} subDoc={decodeURI(params.subDoc)} />
  )
}