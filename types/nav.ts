import { LucideIcon } from "lucide-react"

export interface NavItem {
  title?: string
  href?: string
  mainLink?: {
    logo?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
    href?: string
  }
  linkList?: Array<{
    icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
    href: string
  }>
}