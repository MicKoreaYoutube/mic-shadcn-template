export type SiteConfig = typeof siteConfig

const siteConfig = {
  name: "Next.js Template",
  description: "A nextjs template by MicKoreaYoutube based on shadcn-ui",
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

import { HeaderNavItem, FooterNavItem } from "@/types/nav"
import { PcCase } from "lucide-react"
import Logo from "@/public/logo.svg"

const headerNavContent: HeaderNavItem[] = [
  {
    title: "Home",
    mainLink: {
      logo: Logo,
      title: siteConfig.name,
      description: siteConfig.description,
      href: "/",
    },
    linkList: [
      {
        title: "11번 링크",
        description: "11번 설명",
        href: "/11",
        icon: PcCase,
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
      {
        title: "14번 링크",
        description: "14번 설명",
        href: "/14",
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
      {
        title: "27번 링크",
        description: "27번 설명",
        href: "/27",
      },
      {
        title: "28번 링크",
        description: "28번 설명",
        href: "/28",
      },
      {
        title: "29번 링크",
        description: "29번 설명",
        href: "/29",
      },
      {
        title: "211번 링크",
        description: "211번 설명",
        href: "/211",
      },
      {
        title: "26번 링크",
        description: "26번 설명",
        href: "/26",
      },
    ],
  },
  {
    title: "test",
    linkList: [
      {
        title: "test",
        description: "/test",
        href: "/test",
      },
      {
        title: "32번 링크",
        description: "32번 설명",
        href: "/32",
      },
      {
        title: "33번 링크",
        description: "33번 설명",
        href: "/33",
      },
    ],
  },
  {
    title: "documenation",
    href: "/docs",
  },
]

const footerNavContent: FooterNavItem[] = [
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
]

import { dropDownItem } from "@/types/dropdown"

import { Home, Settings, FileText, Users, HelpCircle, Folder, BookOpen, Wrench, Package, Layers } from "lucide-react"

const navDropDownContent: dropDownItem[][] = [
  [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "Documents",
      icon: FileText,
      href: "/docs",
      subDropDown: [
        [
          {
            title: "Getting Started",
            icon: BookOpen,
            href: "/docs/getting-started",
            subDropDown: [
              [
                {
                  title: "Installation",
                  href: "/docs/getting-started/installation",
                },
                {
                  title: "Quick Start",
                  href: "/docs/getting-started/quick-start",
                },
              ],
            ],
          },
          {
            title: "API Reference",
            icon: Wrench,
            href: "/docs/api",
            subDropDown: [
              [
                {
                  title: "v1",
                  href: "/docs/api/v1",
                  subDropDown: [
                    [
                      {
                        title: "Endpoints",
                        href: "/docs/api/v1/endpoints",
                      },
                      {
                        title: "Authentication",
                        href: "/docs/api/v1/auth",
                        disable: true,
                      },
                    ],
                  ],
                },
                {
                  title: "v2",
                  href: "/docs/api/v2",
                },
              ],
            ],
          },
        ],
      ],
    },
  ],
  [
    {
      title: "Team",
      icon: Users,
      href: "/team",
    },
    {
      title: "Projects",
      icon: Folder,
      href: "/projects",
      subDropDown: [
        [
          {
            title: "Active",
            href: "/projects/active",
            subDropDown: [
              [
                {
                  title: "Frontend",
                  href: "/projects/active/frontend",
                },
                {
                  title: "Backend",
                  href: "/projects/active/backend",
                },
              ],
            ],
          },
          {
            title: "Archived",
            href: "/projects/archived",
          },
        ],
      ],
    },
  ],
  [
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
    {
      title: "Help",
      icon: HelpCircle,
      href: "/help",
    },
    {
      title: "Packages",
      icon: Package,
      href: "/packages",
      subDropDown: [
        [
          {
            title: "Core",
            icon: Layers,
            href: "/packages/core",
          },
          {
            title: "Extensions",
            href: "/packages/extensions",
            subDropDown: [
              [
                {
                  title: "UI Components",
                  href: "/packages/extensions/ui",
                },
                {
                  title: "CLI Tools",
                  href: "/packages/extensions/cli",
                },
              ],
              [
                {
                  title: "More...",
                  href: "/packages/extensions/more",
                },
              ],
            ],
          },
        ],
      ],
    },
  ],
  [
    {
      title: "Log Out",
      href: "/logout",
    },
  ],
]

import { docsItem } from "@/types/docs"

const docsTree: docsItem[] = [
  {
    id: "introduction",
    isDoc: true,
  },
  {
    id: "get-started",
    isDoc: true,
    subDocList: [
      {
        id: "시작하기-하위-페이지-1",
        isDoc: true,
      },
      {
        id: "시작하기-하위-페이지-2",
        isDoc: true,
      },
      {
        id: "sub-folder",
        subDocList: [
          {
            id: "sub-markdown",
            isDoc: true,
          },
        ],
      },
    ],
  },
  {
    id: "test",
    subDocList: [
      {
        id: "test1",
        isDoc: true,
      },
    ],
  },
]

export { siteConfig, headerNavContent, footerNavContent, navDropDownContent, docsTree }
