"use client"

import { ChapterSidebar } from "@/components/sidebar"

export default function DocsMainPage() {

  const docs_chapter = [
    {
      title: "테스트해봐야징",
      content: "",
    },
    {
      title: "테스트해봐야징22",
      content: "",
    },
  ]

  return (
    <div className="flex flex-col-reverse justify-between md:flex-row">
      <div className="w-full justify-self-stretch p-6 md:p-12">
        <div className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-6xl">소개</h1>
          <span className="font-SUITE-Regular text-2xl">
            MicKoreaYoutube가 제작한 shadcn-ui 템플릿입니다!
          </span>
          <hr />
        </div>
        <div className="grid gap-16 py-4">
          <div id="chapter-테스트해봐야징" className="grid gap-2 py-4">
            <h1 className="font-KBO-Dia-Gothic_bold text-4xl">테스트 메시지</h1>
            <p className="font-SUITE-Regular text-lg">어쩌라고ㅗㅗ</p>
          </div>
          <div id="chapter-테스트해봐야징22" className="grid gap-2 py-4">
            <h1 className="font-KBO-Dia-Gothic_bold text-4xl">테스트 메시지</h1>
            <p className="font-SUITE-Regular text-lg">집가고 싶다</p>
          </div>
        </div>
        {/* <div className="flex justify-end py-4">
          <Link
            href={`${
              docs_info[0].isDoc
                ? `/docs/${docs_info[0].id}`
                : `/docs/${docs_info[0].subDocList[0].title}`
            }`}
          >
            <Card className="shadow-md transition-all hover:-translate-y-2 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="font-KBO-Dia-Gothic_bold">
                  {docs_info[0].isDoc
                    ? docs_info[0].title
                    : docs_info[0].subDocList[0].title}
                </CardTitle>
                <CardDescription className="font-SUITE-Regular">
                  {docs_info[0].isDoc
                    ? docs_info[0].description
                    : docs_info[0].subDocList[0].description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div> */}
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={docs_chapter} />
      </div>
    </div>
  )
}
