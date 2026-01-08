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
import {
  PcCase, 
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Home, 
  HelpCircle, 
  Folder, 
  BookOpen, 
  Wrench, 
  Package, 
  Layers,
  UserCog,
  Bell,
  Shield,
  Database,
  Activity,
  User,
  List,
  PenLine,
  Share2,
  Lock,
  Key,
  HardDrive,
  RefreshCcw,
  Eye,
  Crown
} from "lucide-react"
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

import { dashboardSidebarGroupItem } from "@/types/sidebar"

const dashboardSidebarContent: dashboardSidebarGroupItem[] = [
  // =========================
  // OVERVIEW
  // =========================
  {
    title: "Overview",
    subItemList: [
      {
        icon: LayoutDashboard,
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: Activity,
        title: "Activity",
        href: "/activity",
        dropdown: [
          [
            { title: "Today", href: "/activity/today" },
            { title: "Last 7 Days", href: "/activity/week" },
          ],
          [{ title: "Export Logs" }],
        ],
      },
    ],
  },

  // =========================
  // CONTENT
  // =========================
  {
    title: "Content",
    subItemList: [
      {
        icon: FileText,
        title: "Posts",
        subItemList: [
          {
            icon: List,
            title: "All Posts",
            href: "/posts",
            dropdown: [
              [
                { title: "Create Post", href: "/posts/new" },
                { title: "Bulk Edit" },
              ],
            ],
          },
          {
            icon: PenLine,
            title: "Drafts",
            href: "/posts/drafts",
            badge: {
              title: "5",
              variant: "secondary",
            },
            subItemList: [
              {
                icon: User,
                title: "My Drafts",
                href: "/posts/drafts/me",
              },
              {
                icon: Share2,
                title: "Shared Drafts",
                href: "/posts/drafts/shared",
                dropdown: [[{ title: "Request Access" }]],
              },
            ],
          },
        ],
      },
      {
        icon: Folder,
        title: "Categories",
        href: "/categories",
      },
    ],
  },

  // =========================
  // USERS & PERMISSIONS
  // =========================
  {
    title: "Users",
    subItemList: [
      {
        icon: Users,
        title: "User List",
        href: "/users",
        dropdown: [[{ title: "Invite User" }, { title: "Export Users" }]],
      },
      {
        icon: User,
        title: "Roles & Permissions",
        subItemList: [
          {
            icon: UserCog,
            title: "Roles",
            href: "/roles",
            subItemList: [
              {
                icon: Crown,
                title: "Admin",
                href: "/roles/admin",
                dropdown: [[{ title: "Edit Role" }, { title: "Duplicate" }]],
              },
              {
                icon: PenLine,
                title: "Editor",
                href: "/roles/editor",
              },
              {
                icon: Eye,
                title: "Viewer",
                href: "/roles/viewer",
              },
            ],
          },
          {
            icon: Lock,
            title: "Permissions",
            href: "/permissions",
          },
        ],
      },
    ],
  },

  // =========================
  // SYSTEM
  // =========================
  {
    title: "System",
    subItemList: [
      {
        icon: Database,
        title: "Data",
        subItemList: [
          {
            icon: HardDrive,
            title: "Backups",
            href: "/system/backups",
            dropdown: [[{ title: "Create Backup" }, { title: "Restore" }]],
          },
          {
            icon: RefreshCcw,
            title: "Migrations",
            href: "/system/migrations",
          },
        ],
      },
      {
        icon: Shield,
        title: "Security",
        subItemList: [
          {
            icon: Lock,
            title: "Authentication",
            href: "/security/auth",
          },
          {
            icon: Key,
            title: "API Keys",
            href: "/security/api-keys",
            subItemList: [
              {
                icon: Eye,
                title: "Public Keys",
                href: "/security/api-keys/public",
              },
              {
                icon: Key,
                title: "Private Keys",
                href: "/security/api-keys/private",
                dropdown: [[{ title: "Regenerate" }, { title: "Revoke" }]],
              },
            ],
          },
        ],
      },
    ],
  },

  // =========================
  // SETTINGS
  // =========================
  {
    title: "Settings",
    subItemList: [
      {
        icon: Settings,
        title: "General",
        href: "/settings/general",
      },
      {
        icon: Bell,
        title: "Notifications",
        href: "/settings/notifications",
        dropdown: [[{ title: "Email" }, { title: "Push" }]],
      },
    ],
  },
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

export { siteConfig, headerNavContent, footerNavContent, navDropDownContent, dashboardSidebarContent, docsTree }
