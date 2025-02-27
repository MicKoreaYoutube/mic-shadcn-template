export type SiteConfig = typeof siteConfig

const siteConfig = {
  name: "Next.js Template",
  description: "A nextjs template by MicKoreaYoutube based on shadcn-ui",
  footerContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "1번 내용",
          href: "/11",
        },
        {
          title: "2번 내용",
          href: "/12",
        },
        {
          title: "3번 내용",
          href: "/13",
        },
      ],
    },
    {
      title: "2번줄",
      content: [
        {
          title: "1번 내용",
          href: "/21",
        },
        {
          title: "2번 내용",
          href: "/22",
        },
        {
          title: "3번 내용",
          href: "/23",
        },
      ],
    },
    {
      title: "3번줄",
      content: [
        {
          title: "1번 내용",
          href: "/31",
        },
        {
          title: "2번 내용",
          href: "/32",
        },
        {
          title: "3번 내용",
          href: "/33",
        },
      ],
    },
  ],
  FamilySurvice: [
    {
      name: "1번 서비스",
      href: "/1s",
    },
    {
      name: "2번 서비스",
      href: "/2s",
    },
    {
      name: "3번 서비스",
      href: "/3s",
    },
  ],
  links: {
    shadcnTwitter: "https://twitter.com/shadcn",
    shadcnGithub: "https://github.com/shadcn/ui",
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    micGithub: "https://github.com/MicKoreaYoutube/mic-next-template",
  },
}

export { siteConfig }

import { NavItem } from "@/types/nav"

export const mainNavContent: NavItem[] = [
  {
    title: "Home",
    mainLink: {
      logo: true,
      title: siteConfig.name,
      description: siteConfig.description,
      href: "/",
    },
    linkList: [
      {
        title: "11번 링크",
        description: "11번 설명",
        href: "/11",
      },
      {
        title: "12번 링크",
        description: "12번 설명",
        href: "/12",
      },
      {
        title: "13번 링크",
        description: "13번 설명",
        href: "/13",
      },
    ],
  },
  {
    title: "dashboard",
    linkList: [
      {
        title: "Dashboard Home",
        description: "/dashboard",
        href: "/dashboard",
      },
      {
        title: "22번 링크",
        description: "22번 설명",
        href: "/22",
      },
      {
        title: "23번 링크",
        description: "23번 설명",
        href: "/23",
      },
      {
        title: "24번 링크",
        description: "24번 설명",
        href: "/24",
      },
      {
        title: "25번 링크",
        description: "25번 설명",
        href: "/25",
      },
      {
        title: "26번 링크",
        description: "26번 설명",
        href: "/26",
      },
    ],
  },
  {
    title: "documenation",
    href: "/docs",
  },
]

import { dropDownItem } from "@/types/dropdown"

export const navDropDownContent: dropDownItem = {
  label: "My Account",
  content: [
    [
      {
        icon: ["fas", "house"],
        title: "11번 내용",
        href: "/11",
        shortcut: "",
      },
      {
        icon: ["fas", "house"],
        title: "12번 내용",
        href: "/12",
        shortcut: "",
      },
      {
        icon: ["fas", "house"],
        title: "13번 내용",
        href: "/13",
        shortcut: "",
      },
    ],
    [
      {
        icon: ["fas", "house"],
        title: "21번 내용",
        href: "/21",
        shortcut: "",
      },
      {
        icon: ["fas", "house"],
        title: "22번 내용",
        href: "/22",
        shortcut: "",
        semiDropDown: [
          [
            {
              icon: ["fas", "house"],
              title: "22-1번 내용",
              href: "/22-1",
              shortcut: "",
            },
          ],
          [
            {
              icon: ["fas", "house"],
              title: "22-21번 내용",
              href: "/22-21",
              shortcut: "",
            },
            {
              icon: ["fas", "house"],
              title: "22-22번 내용",
              href: "/22-22",
              shortcut: "",
            },
          ],
          [
            {
              icon: ["fas", "house"],
              title: "22-23번 내용",
              href: "/22-23",
              shortcut: "",
            },
          ],
        ],
      },
      {
        icon: ["fas", "house"],
        title: "23번 내용",
        href: "/23",
        shortcut: "",
      },
    ],
    [
      {
        icon: ["fas", "house"],
        title: "31번 내용",
        href: "/31",
        shortcut: "",
      },
      {
        icon: ["fas", "house"],
        title: "32번 내용",
        href: "/32",
        shortcut: "",
      },
      {
        icon: ["fas", "house"],
        title: "33번 내용",
        href: "/33",
        shortcut: "",
      },
    ],
    [
      {
        icon: ["fas", "house"],
        title: "로그아웃",
        href: "/4",
        shortcut: "",
      },
    ],
  ],
}

import { docsItem } from "@/types/sidebar"

export const docsContent: docsItem[] = [
  {
    title: "소개",
    isDoc: true,
    id: "introduction",
    description: "MicKoreaYoutube가 제작한 shadcn-ui 템플릿입니다!",
    chapterList: [
      {
        title: "소개 1",
        content: "소개 1입니다.",
      },
      {
        title: "소개 2",
        content: "소개 2입니다.",
      },
      {
        title: "소개 3",
        content: "소개 3입니다.",
      },
    ],
  },
  {
    title: "테스트",
    isDoc: true,
    id: "get-started",
    description: "기본 문서 페이지입니다.",
    chapterList: [
      {
        title: "시작하기 1",
        content: `# Hello, *world*!`,
      },
      {
        title: "시작하기 2",
        content: `# 제목 시발아
### 안녕하세요!
저는 현재 리액트에서 \`react-markdown\`를 이용하여 **마크다운**을 랜더링하고 있습니다.`,
      },
      {
        title: "시작하기 3",
        content: "",
      },
    ],
    subDocList: [
      {
        title: "시작하기 하위 페이지 1",
        description: "시작하기 하위 페이지 1입니다.",
        chapterList: [
          {
            title: "챕터1-1",
            content: "챕터1-1의 내용",
          },
          {
            title: "챕터1-2",
            content: "챕터1-2의 내용",
            subChapterList: [
              {
                title: "챕터1-2-1",
                content: "챕터1-2-1의 내용",
              },
              {
                title: "챕터1-2-2",
                content: "챕터1-2-2의 내용",
              },
              {
                title: "챕터1-2-3",
                content: "챕터1-2-3의 내용",
              },
            ],
          },
          {
            title: "챕터1-3",
            content: "챕터1-3의 내용",
          },
        ],
      },
      {
        title: "시작하기 하위 페이지 2",
        description: "시작하기 하위 페이지 2입니다.",
        chapterList: [
          {
            title: "챕터2-1",
            content: "챕터2-1의 내용",
          },
          {
            title: "챕터2-2",
            content: "챕터2-2의 내용",
            subChapterList: [
              {
                title: "챕터2-2-1",
                content: "챕터2-2-1의 내용",
              },
              {
                title: "챕터2-2-2",
                content: "챕터2-2-2의 내용",
              },
              {
                title: "챕터2-2-3",
                content: "챕터2-2-3의 내용",
              },
            ],
          },
          {
            title: "챕터2-3",
            content: "챕터2-3의 내용",
          },
        ],
      },
      {
        title: "시작하기 하위 페이지 3",
        description: "시작하기 하위 페이지 3입니다.",
        chapterList: [
          {
            title: "챕터3-1",
            content: "챕터3-1의 내용",
          },
          {
            title: "챕터3-2",
            content: "챕터3-2의 내용",
            subChapterList: [
              {
                title: "챕터3-2-1",
                content: "챕터3-2-1의 내용",
              },
              {
                title: "챕터3-2-2",
                content: "챕터3-2-2의 내용",
              },
              {
                title: "챕터3-2-3",
                content: "챕터3-2-3의 내용",
              },
            ],
          },
          {
            title: "챕터3-3",
            content: "챕터3-3의 내용",
          },
        ],
      },
    ],
  },
  {
    title: "테스트2",
    subDocList: [
      {
        title: "테스트 하위 페이지 1",
        description: "테스트 하위 페이지 1입니다.",
        chapterList: [
          {
            title: "챕터1-1",
            content: "챕터1-1의 내용",
          },
          {
            title: "챕터1-2",
            content: "챕터1-2의 내용",
            subChapterList: [
              {
                title: "챕터1-2-1",
                content: "챕터1-2-1의 내용",
              },
              {
                title: "챕터1-2-2",
                content: "챕터1-2-2의 내용",
              },
              {
                title: "챕터1-2-3",
                content: "챕터1-2-3의 내용",
              },
            ],
          },
          {
            title: "챕터1-3",
            content: "챕터1-3의 내용",
          },
        ],
      },
      {
        title: "테스트 하위 페이지 2",
        description: "테스트 하위 페이지 2입니다.",
        chapterList: [
          {
            title: "챕터2-1",
            content: "챕터2-1의 내용",
          },
          {
            title: "챕터2-2",
            content: "챕터2-2의 내용",
            subChapterList: [
              {
                title: "챕터2-2-1",
                content: "챕터2-2-1의 내용",
              },
              {
                title: "챕터2-2-2",
                content: "챕터2-2-2의 내용",
              },
              {
                title: "챕터2-2-3",
                content: "챕터2-2-3의 내용",
              },
            ],
          },
          {
            title: "챕터2-3",
            content: "챕터2-3의 내용",
          },
        ],
      },
    ],
  },
]
