import { ChapterSidebar } from "@/components/sidebar"

import { docsItem } from "@/types/sidebar"

interface docsSidebarInterface {
  doc?: docsItem
}

export function DocsPage({ doc }: docsSidebarInterface) {
  return (
    <div className="flex flex-row justify-between">
      <div className="w-full justify-self-stretch p-12">
        <div className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-6xl">{doc?.title}</h1>
          <span className="font-SUITE-Regular text-2xl">{doc?.description}</span>
          <hr />
        </div>
        <div className="grid gap-16 py-4">
          {doc?.chapterList?.length ? (
            doc.chapterList.map((chapterItem, chapterIndex) => (
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
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={doc?.chapterList} />
      </div>
    </div>
  )
}