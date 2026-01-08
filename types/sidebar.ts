import { LucideIcon } from "lucide-react"
import { type VariantProps } from "class-variance-authority"

import { badgeVariants } from "@/components/ui/badge"
import { dropDownItem } from "@/types/dropdown"

interface badgeInterface {
  title: string
  variant: VariantProps<typeof badgeVariants>["variant"]
}

interface dashboardSidebarItem {
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  href?: string
  badge?: badgeInterface
  dropdown?: dropDownItem[][]
  subItemList?: dashboardSidebarItem[]
}

interface dashboardSidebarGroupItem {
  title: string
  subItemList?: dashboardSidebarItem[]
}

export { type dashboardSidebarGroupItem, type dashboardSidebarItem }