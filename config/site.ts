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
  Crown,
  CreditCard,
  Code,
  Rocket,
  Download,
  Route,
  Terminal
} from "lucide-react"
import Logo from "@/public/logo.svg"

const headerNavContent: HeaderNavItem[] = [
  {
    title: "Product",
    mainLink: {
      logo: Rocket,
      title: "All-in-one Platform",
      description: "Build, deploy, and manage your projects in one place.",
      href: "/product",
    },
    linkList: [
      {
        icon: LayoutDashboard,
        title: "Dashboard",
        description: "Monitor and manage your projects.",
        href: "/dashboard",
      },
      {
        icon: Code,
        title: "API & SDK",
        description: "Integrate our platform into your workflow.",
        href: "/docs/api",
      },
      {
        icon: Users,
        title: "Collaboration",
        description: "Invite teammates and manage permissions.",
        href: "/product/collaboration",
      },
    ],
  },
  {
    title: "Docs",
    mainLink: {
      logo: BookOpen,
      title: "Documentation",
      description: "Guides, references, and examples to get started fast.",
      href: "/docs",
    },
    linkList: [
      {
        icon: FileText,
        title: "Get Started",
        description: "Learn the basics and set up your first project.",
        href: "/docs/get-started",
      },
      {
        icon: Code,
        title: "API Reference",
        description: "Detailed information about every endpoint.",
        href: "/docs/api",
      },
      {
        icon: Shield,
        title: "Security",
        description: "Understand how we keep your data safe.",
        href: "/docs/security",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Company",
    linkList: [
      {
        icon: Users,
        title: "About Us",
        description: "Learn more about our mission and team.",
        href: "/company/about",
      },
      {
        icon: Rocket,
        title: "Careers",
        description: "Join us and help build the future.",
        href: "/company/careers",
      },
      {
        icon: Settings,
        title: "Blog",
        description: "Product updates and engineering stories.",
        href: "/blog",
      },
    ],
  },
  {
  title: "Resources",
  linkList: [
    {
      title: "Getting Started",
      description: "Project setup and basic usage",
      href: "/docs/getting-started",
      icon: BookOpen,
    },
    {
      title: "Installation",
      description: "Install via npm, pnpm, or bun",
      href: "/docs/installation",
      icon: Download,
    },
    {
      title: "Configuration",
      description: "Environment variables and options",
      href: "/docs/configuration",
      icon: Settings,
    },
    {
      title: "Routing",
      description: "App Router and navigation patterns",
      href: "/docs/routing",
      icon: Route,
    },
    {
      title: "Authentication",
      description: "Login, session, and permissions",
      href: "/docs/auth",
      icon: Shield,
    },
    {
      title: "Database",
      description: "Schema, queries, and migrations",
      href: "/docs/database",
      icon: Database,
    },
    {
      title: "Deployment",
      description: "Deploy to Vercel and others",
      href: "/docs/deployment",
      icon: Rocket,
    },
    {
      title: "CLI",
      description: "Command-line tools and scripts",
      href: "/docs/cli",
      icon: Terminal,
    },
    {
      title: "FAQ",
      description: "Common questions and solutions",
      href: "/docs/faq",
      icon: HelpCircle,
    },
  ],
}

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

import { sidebarContentItem } from "@/types/sidebar"

const dashboardSidebarContent: sidebarContentItem[] = [
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
            badge: {
              variant: "default",
              title: "NEW"
            }
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
import { sidebarGroupItem } from "@/types/sidebar"

const docsTree: docsItem[] = [
  {
    title: "Introduction",
    subItemList: [
      {
        title: "What is This?",
      },
      {
        title: "Get Started",
      },
      {
        title: "Project Structure",
      },
    ],
  },
  {
    title: "Core Concepts",
    isPage: false,
    subItemList: [
      {
        title: "Routing",
      },
      {
        title: "Layouts",
      },
      {
        title: "Data Fetching",
        isPage: false,
        subItemList: [
          {
            title: "Server Components",
          },
          {
            title: "Client Components",
          },
          {
            title: "Caching Strategy",
          },
        ],
      },
    ],
  },
  {
    title: "UI Components",
    isPage: false,
    subItemList: [
      {
        title: "Sidebar",
      },
      {
        title: "Navigation Menu",
      },
      {
        title: "Breadcrumb",
      },
      {
        title: "Scroll Area",
      },
    ],
  },
  {
    title: "Advanced",
    isPage: false,
    subItemList: [
      {
        title: "Performance",
      },
      {
        title: "Accessibility",
      },
      {
        title: "Theming",
      },
    ],
  },
  {
    title: "API Reference",
  },
]

export { siteConfig, headerNavContent, footerNavContent, navDropDownContent, dashboardSidebarContent, docsTree }
