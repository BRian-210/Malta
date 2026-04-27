export interface ProjectData {
  id: string
  slug: string
  title: string
  category: string
  serviceType: string
  location: string
  yearCompleted: number
  clientType: string
  scopeSummary: string
  challengeSummary: string
  solutionSummary: string
  resultsSummary: string
  coverImageUrl: string
  galleryImageUrls: string[]
  featured: boolean
  sortOrder: number
}