export interface docsItem {
  id: string
  isDoc?: boolean
  subDocList?: docsItem[]
}

export interface tocListItem {
  depth: number
  text: string
}