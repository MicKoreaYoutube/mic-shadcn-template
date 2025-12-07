import { LucideIcon } from "lucide-react"

interface HeaderNavItem {
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

interface FooterNavItem {
  title: string
  content: Array<{
    title: string
    href: string
  }>
}

export { type HeaderNavItem, type FooterNavItem }