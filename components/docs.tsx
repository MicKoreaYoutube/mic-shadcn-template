"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"

import { CircleArrowLeft, CircleArrowRight } from "lucide-react"

import { docsContent } from "@/config/site"

import { ChapterSidebar } from "@/components/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { docsItem } from "@/types/sidebar"
import { cn } from "@/lib/utils"

interface docsPageInterface {
  doc: string
  subDoc?: string
}

interface docsIndicatorInterface {
  docs?: docsItem | null
  type: "prev" | "next"
}

function DocsIndicator({ docs, type }: docsIndicatorInterface) {
  return (
    <>
      {docs ? (
        <Link href={"#"}>
          <Card className={cn("shadow-md transition-all hover:-translate-y-2 hover:shadow-lg", type == "prev" ? "text-right" : "text-left")}>
            <CardHeader className={cn("flex flex-row justify-between gap-3", type == "prev" ? "flex-row-reverse" : null)}>
              <div className="flex flex-col">
                <CardTitle className="font-KBO-Dia-Gothic_bold">
                  {docs?.title.slice(0, 8)}...
                </CardTitle>
                <CardDescription className="font-SUITE-Regular">
                  {docs?.description?.slice(0, 15)}...
                </CardDescription>
              </div>
                {type == "prev" ? (
                  <CircleArrowLeft className="size-9 my-auto" />
                ) : (
                  <CircleArrowRight className="size-9 my-auto" />
                )}
            </CardHeader>
          </Card>
        </Link>
      ) : (
        <div className="invisible" />
      )}
    </>
  )
}

export function DocsPage({ doc, subDoc }: docsPageInterface) {

  const [foundDoc, setDoc] = useState<docsItem | null>()

  useEffect(() => {
    let document = docsContent.find(obj => obj.id == doc || obj.title == doc)
    if (subDoc) {
      document = document?.subDocList?.find(obj => obj.id == subDoc || obj.title == subDoc)
    }
    if (document == undefined || document == null) {
      notFound()
    }
    setDoc(document)
  }, [doc, subDoc])

  function fillterDoc(docs: docsItem[]) {
    const result: docsItem[] = []

    docs.forEach(doc => {
      if (doc.isDoc && doc.description) {
        result.push(doc)
      }

      if (doc.subDocList) {
        doc.subDocList.forEach(subDoc => {
          result.push(subDoc)
        })
      }
    })

    return result
  }

  const fillteredDoc = fillterDoc(docsContent)
  const docIndex = fillteredDoc.findIndex(obj => obj == foundDoc)

  function findPrevDoc() {
    if (docIndex > 0) {
      return fillteredDoc[docIndex - 1]
    } else {
      return null
    }
  }

  function findNextDoc() {
    if (docIndex < fillteredDoc.length - 1) {
      return fillteredDoc[docIndex + 1]
    } else {
      return null
    }
  }

  console.log(findPrevDoc(), findNextDoc())

  return (
    <div className="flex flex-row justify-between">
      <div className="w-full justify-self-stretch p-12">
        <div className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-6xl">{foundDoc?.title}</h1>
          <span className="font-SUITE-Regular text-2xl">{foundDoc?.description}</span>
          <hr />
        </div>
        <div className="grid gap-16 py-4">
          {foundDoc?.chapterList?.length ? (
            foundDoc.chapterList.map((chapterItem, chapterIndex) => (
              <div key={chapterIndex} className="grid gap-6 py-4">
                <div className="grid gap-2">
                  <h1 className="font-KBO-Dia-Gothic_bold text-4xl" id={`chapter-${chapterItem.title}`}>{chapterItem.title}</h1>
                  <hr />
                </div>
                <p className="font-SUITE-Regular text-lg">{chapterItem.content}</p>
                {chapterItem?.subChapterList?.length ? (
                  <div className="py-6 grid gap-12">
                    {chapterItem.subChapterList.map((subChapterItem, subChapterIndex) => (
                      <div key={subChapterIndex} className="grid gap-3">
                        <h1 className="font-KBO-Dia-Gothic_bold text-3xl" id={`chapter-${subChapterItem.title}`}>{subChapterItem.title}</h1>
                        <p className="font-SUITE-Regular text-md">{subChapterItem.content}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))
          ) : null}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-7 py-4">
          <DocsIndicator docs={findPrevDoc()} type="prev" />
          <DocsIndicator docs={findNextDoc()} type="next" />
        </div>
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={foundDoc?.chapterList} />
      </div>
    </div>
  )
}