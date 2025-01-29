"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChapterSidebar } from "@/components/sidebar";

import { formatText } from "@/ts/excludeIeung-util";

export default function DocsPage() {
  const docs_introduce = `2023년, ㅗㅜ반기 쯤 ㅓ쩔민뀨ㅘ ㅣ준ㅕㅢ 대ㅗㅘ 주 ㅓ쩔민뀨가 "ㅓ"를 습관적ㅡ로 "ㅓ"로 적ㅓㅆ다가 ㅣ준ㅕㅣ ㅗㅏㄴ번 모든 ㅣㅡㅡㄹ 텍스트ㅔ서 빼보자는 제ㅢ를 ㅗㅏㅕㅆ고 ㅣㅗㅜ ㅓ쩔민뀨ㅢ ㅕ러 제ㅏㄴ들로 ㅗㅣㅡㅗㅡㄴ ㅗ로 ㅣㅡ 단독ㅡㄴ ㅣㅡ로 쓰는 드 다ㅑㅗㅏㄴ 법칙ㅡㄹ 만들ㅓ ㅗ늘날ㅔ ㅣ르게 되ㅓㅆ다.
  2024년, 5ㅝㄹ 겨 ㅓ쩔민뀨는 ㅣㅡ 제거를 널리 ㅏㄹ리고자 ㅣㅡ 제거 채티바ㅡㄹ 만들ㅓㅆ고 ㅗㅕㄴ재 만ㅗㅡㄴ 사람들ㅔ게 ㅣㅡ 제거가 퍼지게 되ㅓㅆ다.`;

  const docs_chapter = [
    {
      title: "ㅣㅡ 제거ㅢ ㅕㄱ사",
      content: "",
    },
    {
      title: "FAQ",
      content: "",
    },
  ];

  const docs_info = siteConfig.docsSidebarContent;

  return (
    <div className="flex flex-col-reverse justify-between md:flex-row">
      <div className="w-full justify-self-stretch p-6 md:p-12">
        <div className="grid gap-2 py-4">
          <h1 className="font-KBO-Dia-Gothic_bold text-6xl">소개</h1>
          <span className="font-SUITE-Regular text-2xl">
            ㅏㄴ녀ㅗㅏ세ㅛ! ㅣㅡ제거ㅔ 대ㅗㅏㄴ 모든 구금즈ㅡㄹ ㅗㅐ결ㅗㅏ고
            가세ㅛ!
          </span>
        </div>
        <hr />
        <div className="grid gap-16 py-4">
          <div id="chapter-ㅣㅡ 제거ㅢ ㅕㄱ사" className="grid gap-2">
            <h1 className="font-KBO-Dia-Gothic_bold text-4xl">
              ㅣㅡ 제거ㅢ ㅕㄱ사
            </h1>
            <p className="font-SUITE-Regular text-lg">
              {formatText(docs_introduce)}
            </p>
          </div>
          <div id="chapter-FAQ" className="grid gap-2">
            <h1 className="font-KBO-Dia-Gothic_bold text-4xl">FAQ</h1>
            <p className="font-SUITE-Regular text-lg">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ㅣㅡ 제거 ㅙ ㅗㅏ는겁니까 쓸떼ㅓㅄㅣ
                  </AccordionTrigger>
                  <AccordionContent>
                    저도 몰라ㅛ. 근데 재밌잔ㅗㅏㅛ. ㅗㅏㄴ잔ㅗㅐ~~
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    그럼 거 ㅓ케 ㅗㅏ는건지나 좀 ㅏㄹ려주쇼
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link href="" className="text-primary">
                      ㅕ기
                    </Link>
                    를 좀 참고ㅗㅐ보세ㅛ
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    존나 난ㅗㅐㅗㅏㄴ데 ㅓ케 ㅣㄺ는 겁니까
                  </AccordionTrigger>
                  <AccordionContent>
                    ㅏㄹㅏ서 쳐 ㅣㄺㅡ세ㅛ. 눈치껏 ㅣㄺㅡ시면 다 ㅣㄺㅡㄹ 수
                    ㅣㅆ습니다bb
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-end py-4">
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
        </div>
      </div>
      <div className="hidden md:inline">
        <ChapterSidebar items={docs_chapter} />
      </div>
    </div>
  );
}
