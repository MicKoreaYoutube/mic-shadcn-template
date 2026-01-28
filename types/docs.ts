import { sidebarGroupItem } from "@/types/sidebar"

type docsItem = Omit<sidebarGroupItem, "icon" | "href" | "badge" | "dropdown">

export interface tocListItem {
  depth: number
  text: string
}

export { type docsItem }