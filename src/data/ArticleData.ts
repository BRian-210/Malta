export interface ArticleData {
  id: string
  slug: string
  title: string
  section: string
  summary: string
  content: string
  authorName: string
  publishedAt: string
  readingTimeMinutes: number
  coverImageUrl: string
  featured: boolean
  relatedProjectIds: string[]
  sortOrder: number
}