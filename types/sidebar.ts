import { LucideIcon } from "lucide-react"
import { type VariantProps } from "class-variance-authority"

import { badgeVariants } from "@/components/ui/badge"
import { dropDownItem } from "@/types/dropdown"

interface badgeInterface {
  title: string
  variant: VariantProps<typeof badgeVariants>["variant"]
}

interface sidebarGroupItem {
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  isPage?: boolean
  href?: string
  badge?: badgeInterface
  dropdown?: dropDownItem[][]
  subItemList?: sidebarGroupItem[]
}

interface sidebarContentItem {
  title: string
  subItemList?: sidebarGroupItem[]
}

export { type sidebarContentItem, type sidebarGroupItem }