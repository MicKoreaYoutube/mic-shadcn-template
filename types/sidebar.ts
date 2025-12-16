import { LucideIcon } from "lucide-react"

interface dashboardSidebarItem {
  icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  href?: string
  disabled?: boolean
  subItemList?: dashboardSidebarItem[]
}

export { type dashboardSidebarItem }