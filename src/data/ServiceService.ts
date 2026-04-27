import type { ServiceData } from './ServiceData'

export type ServiceFilterKey = 'category' | 'featured' | 'slug'

export const serviceDataList: ServiceData[] = [
  {
    id: 'service-structural-design',
    slug: 'structural-design',
    name: 'Structural Design',
    summary: 'Load-bearing analysis and structural integrity for new builds and renovations in Malta.',
    description: 'We provide structural design services for residential and commercial projects, including reinforcement strategy, structural assessments, and renovation support for Maltese properties.',
    iconName: 'Building2',
    route: './structural-design-service.html',
    category: 'Engineering',
    featured: true,
    sortOrder: 1
  },
  {
    id: 'service-architectural-design',
    slug: 'architectural-design',
    name: 'Architectural Design',
    summary: 'Concept development, planning support, and permit-ready design solutions.',
    description: 'Our architectural team shapes practical and elegant concepts, prepares planning packages, and supports Maltese Planning Authority submissions with clear design documentation.',
    iconName: 'Ruler',
    route: './architectural-design-service.html',
    category: 'Design',
    featured: true,
    sortOrder: 2
  },
  {
    id: 'service-interior-design',
    slug: 'interior-design',
    name: 'Interior Design',
    summary: 'Spatial planning, finishes, and interior concepts that blend modern comfort with Maltese character.',
    description: 'We plan interiors from layout optimization to finish selection, creating homes that feel refined, functional, and tailored to the client lifestyle.',
    iconName: 'LampCeiling',
    route: './interior-design-service.html',
    category: 'Interiors',
    featured: true,
    sortOrder: 3
  },
  {
    id: 'service-consultation',
    slug: 'consultation-services',
    name: 'Consultation Services',
    summary: 'Professional guidance for site inspections, compliance checks, and project planning.',
    description: 'Our consultation service helps clients understand site conditions, legal requirements, and the best project path before committing to full design work.',
    iconName: 'MessageSquareMore',
    route: './consultation-services.html',
    category: 'Advisory',
    featured: true,
    sortOrder: 4
  }
]

export function getAll(): ServiceData[] {
  return serviceDataList
}

export function getById(id: string): ServiceData | undefined {
  return serviceDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<ServiceFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): ServiceData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  const sortKey = params.sortKey ?? 'sortOrder'
  const sortDirection = params.sortDirection ?? 'asc'

  return serviceDataList
    .filter((item) => {
      const matchKeyword =
        !keyword ||
        [item.name, item.summary, item.description, item.category, item.slug]
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
      const aVal = a as any
      const bVal = b as any
      const av = aVal[sortKey]
      const bv = bVal[sortKey]

      if (av === bv) return 0
      const order = av > bv ? 1 : -1
      return sortDirection === 'asc' ? order : -order
    })
}

export function loadPersisted(): ServiceData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('serviceDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as ServiceData[]
  } catch {
    return null
  }
}

export function savePersisted(items: ServiceData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('serviceDataList', JSON.stringify(items))
}