"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"

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

interface docsPageInterface {
  doc: string
  subDoc?: string
}

export function DocsPage({ doc, subDoc }: docsPageInterface) {

  const [foundDoc, setDoc] = useState<docsItem | null>()

  useEffect(() => {
    let document = docsContent.find(obj => obj.id == decodeURI(doc) || obj.title == decodeURI(doc))
    if (subDoc) {
      document = document?.subDocList?.find(obj => obj.id == decodeURI(subDoc) || obj.title == decodeURI(subDoc))
    }
    if (document == undefined || document == null) {
      notFound()
    }
    setDoc(document)
  }, [doc, subDoc])

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
              <div key={chapterIndex} id={`chapter-${chapterItem.title}`} className="grid gap-2 py-4">
                <h1 className="font-KBO-Dia-Gothic_bold text-4xl">{chapterItem.title}</h1>
                <p className="font-SUITE-Regular text-lg">{chapterItem.content}</p>
                {chapterItem?.subChapterList?.length ? (
                  <div className="p-6 grid gap-12">
                    {chapterItem.subChapterList.map((subChapterItem, subChapterIndex) => (
                      <div key={subChapterIndex} id={`chapter-${subChapterItem.title}`} className="grid gap-2">
                        <h1 className="font-KBO-Dia-Gothic_bold text-4xl">{subChapterItem.title}</h1>
                        <p className="font-SUITE-Regular text-lg">{subChapterItem.content}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))
          ) : null}
        </div>
        <div className="flex justify-between py-4">
          <Link href="#">
            <Card className="shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-KBO-Dia-Gothic_bold">
                  똥
                </CardTitle>
                <CardDescription className="font-SUITE-Regular">
                  맛있다 헤헿
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={foundDoc?.chapterList} />
      </div>
    </div>
  )
}