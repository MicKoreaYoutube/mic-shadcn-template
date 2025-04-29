export interface chapterSidebarItem {
  title: string
  content: string
  subChapterList?: Array<{
    title: string
    content: string
  }>
}