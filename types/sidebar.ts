export interface sidebarItem {
  name: string
  isDoc?: true
  children?: sidebarItem[]
}