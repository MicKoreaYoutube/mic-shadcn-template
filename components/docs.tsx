"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"

import { CircleArrowLeft, CircleArrowRight } from "lucide-react"

import ReactMarkdown from "react-markdown"

import { docsContent } from "@/config/site"

import { ChapterSidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { docsItem } from "@/types/sidebar"
import { cn } from "@/lib/utils"

interface docsPageInterface {
  doc: string
  subDoc?: string
}

interface prevNextDocFounderInterface {
  docIndex: number
  subDocIndex?: number
}

interface docsIndicatorInterface {
  docCoordinate: {
    docIndex: number | null
    subDocIndex: number | null
  }
  type: "prev" | "next"
}

function DocsIndicator({ docCoordinate, type }: docsIndicatorInterface) {
  const docIndex = docCoordinate.docIndex
  const subDocIndex = docCoordinate.subDocIndex

  if (docIndex != null) {
    let doc = docsContent[docIndex]
    if (doc.subDocList && subDocIndex != null) {
      doc = doc.subDocList[subDocIndex]
    }

    return (
      <>
        {doc ? (
          <Link
            href={`/docs/${docsContent[docIndex].id ?? docsContent[docIndex].title}/${docsContent[docIndex].subDocList && subDocIndex != null ? (docsContent[docIndex].subDocList[subDocIndex].id ?? docsContent[docIndex].subDocList[subDocIndex].title) : ""}`}>
            <Card
              className={cn(
                "shadow-md transition-all hover:-translate-y-2 hover:shadow-lg",
                type == "prev" ? "text-right" : "text-left"
              )}>
              <CardHeader
                className={cn("flex flex-row justify-between gap-3", type == "prev" ? "flex-row-reverse" : null)}>
                <div className="flex flex-col">
                  <CardTitle className="font-KBO-Dia-Gothic_bold">{doc?.title.slice(0, 8)}...</CardTitle>
                  <CardDescription className="font-SUITE-Regular">{doc?.description?.slice(0, 15)}...</CardDescription>
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
  } else {
    return null
  }
}

export function DocsPage({ doc, subDoc }: docsPageInterface) {
  const [foundDoc, setDoc] = useState<docsItem | null>()

  useEffect(() => {
    let document = docsContent.find((obj) => obj.id == doc || obj.title == doc)
    if (subDoc) {
      document = document?.subDocList?.find((obj) => obj.id == subDoc || obj.title == subDoc)
    }
    if (document == undefined || document == null || (document.subDocList && !document.isDoc)) {
      notFound()
    }
    setDoc(document)
  }, [doc, subDoc])

  const docIndex = docsContent.findIndex((obj) => obj.id == doc || obj.title == doc)
  let subDocIndex: number | undefined
  if (subDoc && docsContent[docIndex].subDocList) {
    subDocIndex = docsContent[docIndex].subDocList.findIndex((obj) => obj.id == subDoc || obj.title == subDoc)
  }

  function findPrevDoc({ docIndex, subDocIndex }: prevNextDocFounderInterface) {
    const prevDocSubDocList = docsContent[docIndex - 1]?.subDocList
    if (subDocIndex && subDocIndex > 0) {
      //일반적인 경우
      return { docIndex: docIndex, subDocIndex: subDocIndex - 1 }
    } else if (docIndex == 0) {
      //첫 문서
      return { docIndex: null, subDocIndex: null }
    } else if (subDocIndex == 0) {
      //첫 하위 문서
      if (docsContent[docIndex].isDoc) {
        //상위 문서 존재하면
        return { docIndex: docIndex, subDocIndex: null }
      } else {
        if (prevDocSubDocList) {
          return {
            docIndex: docIndex - 1,
            subDocIndex: prevDocSubDocList.length - 1,
          }
        } else {
          return { docIndex: docIndex - 1, subDocIndex: null }
        }
      }
    } else {
      //상위 문서
      if (prevDocSubDocList) {
        return {
          docIndex: docIndex - 1,
          subDocIndex: prevDocSubDocList.length - 1,
        }
      } else {
        return { docIndex: docIndex - 1, subDocIndex: null }
      }
    }
  }

  function findNextDoc({ docIndex, subDocIndex }: prevNextDocFounderInterface) {
    const CurrentDocSubDocList = docsContent[docIndex].subDocList
    if (
      subDocIndex !== null &&
      subDocIndex !== undefined &&
      CurrentDocSubDocList &&
      subDocIndex < CurrentDocSubDocList.length - 1
    ) {
      //일반적인 경우
      return { docIndex: docIndex, subDocIndex: subDocIndex + 1 }
    } else if ((CurrentDocSubDocList && subDocIndex == CurrentDocSubDocList.length - 1) || !CurrentDocSubDocList) {
      //마지막 하위 문서 혹은 단일 상위 문서
      if (docIndex == docsContent.length - 1) {
        //마지막 문서
        return { docIndex: null, subDocIndex: null }
      } else {
        if (docsContent[docIndex + 1].isDoc) {
          //다음 상위 문서 존재
          return { docIndex: docIndex + 1, subDocIndex: null }
        } else {
          return { docIndex: docIndex + 1, subDocIndex: 0 }
        }
      }
    } else {
      //상위 문서 없음
      return { docIndex: docIndex, subDocIndex: 0 }
    }
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="w-full justify-self-stretch px-12 py-9">
        <Breadcrumb className="font-SUITE-Regular">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {subDoc && docsContent[docIndex].isDoc ? (
                <BreadcrumbLink href={`/docs/${doc}`}>{doc}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{doc}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {subDoc ? (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{subDoc}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-6xl">{foundDoc?.title}</h1>
          <span className="font-SUITE-Regular text-2xl">{foundDoc?.description}</span>
          <hr />
        </div>
        <div className="grid gap-16 py-4">
          {foundDoc?.chapterList?.length
            ? foundDoc.chapterList.map((chapterItem, chapterIndex) => (
                <div key={chapterIndex} className="grid gap-6 py-4">
                  <div className="grid gap-2">
                    <h2 className="font-KBO-Dia-Gothic_bold text-4xl" id={`chapter-${chapterItem.title}`}>
                      {chapterItem.title}
                    </h2>
                    <hr />
                  </div>
                  <div className="font-SUITE-Regular text-lg">
                    <ReactMarkdown>{chapterItem.content}</ReactMarkdown>
                  </div>
                  {chapterItem?.subChapterList?.length ? (
                    <div className="py-6 grid gap-12">
                      {chapterItem.subChapterList.map((subChapterItem, subChapterIndex) => (
                        <div key={subChapterIndex} className="grid gap-3">
                          <h3 className="font-KBO-Dia-Gothic_bold text-3xl" id={`chapter-${subChapterItem.title}`}>
                            {subChapterItem.title}
                          </h3>
                          <div className="font-SUITE-Regular text-md">
                            <ReactMarkdown>{subChapterItem.content}</ReactMarkdown>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-7 py-4">
          <DocsIndicator
            docCoordinate={findPrevDoc({
              docIndex: docIndex,
              subDocIndex: subDocIndex,
            })}
            type="prev"
          />
          <DocsIndicator
            docCoordinate={findNextDoc({
              docIndex: docIndex,
              subDocIndex: subDocIndex,
            })}
            type="next"
          />
        </div>
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={foundDoc?.chapterList} />
      </div>
    </div>
  )
}
