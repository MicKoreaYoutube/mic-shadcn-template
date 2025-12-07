import { LucideIcon } from "lucide-react"

export interface dropDownItem {
  title: string
  icon?: LucideIcon
  href?: string
  shortcut?: string
  disable?: boolean
  subDropDown?: dropDownItem[][]
}
