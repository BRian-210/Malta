import type { ConsultationServiceData } from './ConsultationServiceData'

export type ConsultationServiceFilterKey = 'slug' | 'recommendedFor'

export const consultationServiceDataList: ConsultationServiceData[] = [
  {
    id: 'consultation-site-review',
    slug: 'site-review',
    title: 'Site Review Session',
    summary: 'A practical visit to assess the property, constraints, and early project opportunities.',
    details: 'We inspect the site, note existing conditions, and discuss the most realistic design direction before formal planning work begins.',
    iconName: 'ScanSearch',
    estimatedDuration: '60 minutes',
    recommendedFor: 'Homeowners starting a renovation or extension',
    sortOrder: 1
  },
  {
    id: 'consultation-planning-advice',
    slug: 'planning-advice',
    title: 'Planning Advice Session',
    summary: 'Clear guidance on permissions, submissions, and the steps needed for Maltese approvals.',
    details: 'This consultation focuses on planning strategy, likely documentation, and how to prepare a more efficient submission path.',
    iconName: 'FileSearch',
    estimatedDuration: '75 minutes',
    recommendedFor: 'Clients preparing a planning application',
    sortOrder: 2
  },
  {
    id: 'consultation-structural-opinion',
    slug: 'structural-opinion',
    title: 'Structural Opinion Session',
    summary: 'An engineering-focused discussion for walls, openings, support needs, and renovation safety.',
    details: 'We review structural concerns and offer a practical opinion on reinforcement needs and next technical steps.',
    iconName: 'Construction',
    estimatedDuration: '45 minutes',
    recommendedFor: 'Properties with structural changes or alterations',
    sortOrder: 3
  },
  {
    id: 'consultation-interior-roadmap',
    slug: 'interior-roadmap',
    title: 'Interior Roadmap Session',
    summary: 'A design consultation covering layout, finishes, storage, and styling direction.',
    details: 'Ideal for homeowners who want to improve flow, refine materials, or understand what an interior project could include.',
    iconName: 'Armchair',
    estimatedDuration: '60 minutes',
    recommendedFor: 'Clients wanting interior design guidance',
    sortOrder: 4
  }
]

export function getAll(): ConsultationServiceData[] {
  return consultationServiceDataList
}

export function getById(id: string): ConsultationServiceData | undefined {
  return consultationServiceDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<ConsultationServiceFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): ConsultationServiceData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  const sortKey = params.sortKey ?? 'sortOrder'
  const sortDirection = params.sortDirection ?? 'asc'

  return consultationServiceDataList
    .filter((item) => {
      const matchKeyword =
        !keyword ||
        [item.title, item.summary, item.details, item.recommendedFor]
          .join(' ')
          .toLowerCase()
          .includes(keyword)

      const matchFilter = Object.entries(filter).every(([key, val]) => {
        if (val === undefined) return true
        const itemVal = (item as any)[key]
        return Array.isArray(val) ? val.includes(itemVal) : itemVal === val
      })

      return matchKeyword && matchFilter
    })
    .sort((a, b) => {
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      const order = av > bv ? 1 : -1
      return sortDirection === 'asc' ? order : -order
    })
}

export function loadPersisted(): ConsultationServiceData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('consultationServiceDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as ConsultationServiceData[]
  } catch {
    return null
  }
}

export function savePersisted(items: ConsultationServiceData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('consultationServiceDataList', JSON.stringify(items))
}