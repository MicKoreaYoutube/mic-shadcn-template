export interface docsItem {
  title: string
  isDoc?: boolean
  id?: string
  description?: string
  chapterList?: Array<{
    title: string
    content: string
    subChapterList?: Array<{
      title: string
      content: string
    }>
  }>
  subDocList?: Array<{
    title: string
    id?: string
    description: string
    chapterList: Array<{
      title: string
      content: string
      subChapterList?: Array<{
        title: string
        content: string
      }>
    }>
  }>
}

export interface chapterSidebarItem {
  title: string
  content: string
  subChapterList?: Array<{
    title: string
    content: string
  }>
}