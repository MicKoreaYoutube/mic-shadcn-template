"use client"

import Link from "next/link"

import { docsItem, chapterSidebarItem } from "@/types/sidebar"

// import { SearchDialog } from "@/components/search"
import { ScrollArea } from "@/components/ui/scroll-area"

import { usePathname } from "next/navigation"

import { Link as TargetLink } from "react-scroll"

// interface dashboardSidebarInterface {
//   items?: dashboardSidebarItem[]
// }

interface docsSidebarInterface {
  items?: docsItem[]
}

interface chapterSidebarInterface {
  items?: chapterSidebarItem[]
}

export function DocsSidebar({ items }: docsSidebarInterface) {

  const pathName = usePathname()

  return (
    <>
      <ScrollArea className="h-[80vh] w-48">
        <div className="m-8">
          {items?.length ? (
            items.map(
              (item, index) => (
                <div key={index} className="py-2">
                  <Link href={`${item.isDoc ? `/docs/${item.id ?? item.title}` : "#"}`} className={`font-KBO-Dia-Gothic_bold my-3 block text-lg ${((decodeURI(pathName) == "/docs" && index == 0) || decodeURI(pathName) == `/docs/${item.id}` || decodeURI(pathName) == `/docs/${item.title}`) ? "underline underline-offset-4" : "font-bold"}`}>{item.title}</Link>
                  {item.subDocList?.length ? (
                    item.subDocList.map(
                      (subDocItem, subDocIndex) => (
                        <Link key={subDocIndex} href={`/docs/${item.id ?? item.title}/${subDocItem.id ?? subDocItem.title}`} className={`font-SUITE-Regular text-md my-1 block ${(decodeURI(pathName) == `/docs/${item.id}/${subDocItem.title}` || decodeURI(pathName) == `/docs/${item.title}/${subDocItem.title}`) ? "font-bold text-foreground underline underline-offset-4" : "text-muted-foreground"}`}>{subDocItem.title}</Link>
                      )
                    )
                  ) : null}
                </div>
              )
            )
          ) : null}
        </div>
      </ScrollArea>
    </>
  )
}

export function ChapterSidebar({ items }: chapterSidebarInterface) {
  return (
    <div className="w-32">
      <div className="fixed w-full py-6">
        <h1 className="font-KBO-Dia-Gothic_bold font-bold">Chapter</h1>
        <div className="flex flex-col">
          {items?.length ? (
            items.map(
              (item, index) => (
                <div key={index}>
                  <TargetLink
                    activeClass="font-bold"

                    spy
                    smooth
                    isDynamic
                    to={`chapter-${item.title}`}
                    offset={-55}
                    className="font-SUITE-Regular cursor-pointer"
                    duration={700}
                  >{item.title}</TargetLink>
                  <div className="px-3 flex flex-col">
                    {item?.subChapterList?.length ? (
                      item?.subChapterList.map((subChapterItem, subChapterIndex) => (
                        <TargetLink
                          activeClass="font-bold"
                          key={subChapterIndex}
                          spy
                          smooth
                          isDynamic
                          to={`chapter-${subChapterItem.title}`}
                          offset={-55}
                          className="font-SUITE-Regular cursor-pointer"
                          duration={700}
                        >{subChapterItem.title}</TargetLink>
                      ))
                    ) : null}
                  </div>
                </div>
              )
            )
          ) : null}
        </div>
      </div>
    </div>
  )
}